// Render build/page.html to entry.png at exactly 1024x1024 using headless
// Chromium. Note: with --window-size=1024,1024 this Chromium build only
// exposes a ~946px-tall viewport (verified with a probe page: markers at
// y=1000/1014 never paint), which silently clips the page. So the shot is
// taken in a 1024x1200 window, where the full viewport paints, and the top
// 1024x1024 — exactly the page — is cropped out with PIL. file:// only.
const { execFileSync } = require('node:child_process');
const { existsSync, rmSync } = require('node:fs');
const { join } = require('node:path');

const chrome = '/home/hatch/.cache/ms-playwright/chromium-1148/chrome-linux/chrome';
const html = join(__dirname, 'page.html');
const full = join(__dirname, '.render-full.png');
const out = join(__dirname, '..', 'entry.png');

if (!existsSync(chrome)) throw new Error('chromium not found at ' + chrome);
execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1024,1200',
  '--screenshot=' + full,
  'file://' + html,
], { stdio: 'inherit' });
execFileSync('python3', ['-c',
  `from PIL import Image; im = Image.open(${JSON.stringify(full)}); ` +
  `assert im.size == (1024, 1200), im.size; im.crop((0, 0, 1024, 1024)).save(${JSON.stringify(out)})`,
], { stdio: 'inherit' });
rmSync(full, { force: true });
console.log('wrote', out);
