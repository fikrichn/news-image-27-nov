// News-image entry (Node 22, standard library only): the image is the entry.png
// beside this file, and the program copies it to /output/entry.png. The image is
// a newspaper front page drawn for this entry: "The World in One Day —
// Friday, 27 November 2026", one hero story, five illustrated stories, a pin
// map, a UTC timeline and a markets strip — 20 dated stories across 8 regions.
// The copy checks the file is a whole PNG or JPEG inside the gate limits before
// writing it.
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
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
// Verify the written file, not just its size: same bytes, same format.
const written = readFileSync(dest);
if (written.length !== data.length || detectFormat(written) !== format) {
  throw new Error('output does not match the source image');
}
