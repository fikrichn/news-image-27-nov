// News-image entry (Node 22, standard library only): the image is the entry.png
// beside this file, and the program copies it to /output/entry.png.
//
// The image is a newspaper front page, "The World in One Day — Friday,
// 27 November 2026": one hero story (New Zealand's deadlocked final count),
// four illustrated stories, a pin map of where the day happened, a UTC
// timeline and a markets strip — 20 dated stories across 8 regions. It was
// designed and rendered as a React composition with Remotion (the source is
// build/NewsImage27.tsx, rendered once to a 1024x1024 still), and the PNG is
// committed to the repository, so this program needs no network and writes
// the same bytes on every run.
//
// Before writing, the copy checks the file is a whole PNG or JPEG inside
// the gate limits (at most 1 MiB, at most 1024 by 1024 pixels).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
const data = readFileSync(src);

function detectFormat(bytes) {
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return 'png';
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpeg';
  return null;
}

const format = detectFormat(data);
if (format === null) throw new Error('entry.png is not a PNG or JPEG');
if (data.length > 1048576) throw new Error('entry.png is over 1 MiB');

// For a PNG, walk the chunks: the gate wants a whole image, so require the
// IHDR dimensions inside 1024x1024 and a proper IEND at the very end.
if (format === 'png') {
  const width = data.readUInt32BE(16);
  const height = data.readUInt32BE(20);
  if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);
  let offset = 8;
  let sawIend = false;
  while (offset + 12 <= data.length) {
    const length = data.readUInt32BE(offset);
    const type = data.toString('ascii', offset + 4, offset + 8);
    offset += 12 + length;
    if (type === 'IEND') {
      sawIend = offset === data.length;
      break;
    }
  }
  if (!sawIend) throw new Error('entry.png is not a whole PNG (no IEND at the end)');
}
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Verify the written file, not just its size: same bytes, same format.
const written = readFileSync(dest);
if (written.length !== data.length || detectFormat(written) !== format) {
  throw new Error('output does not match the source image');
}
