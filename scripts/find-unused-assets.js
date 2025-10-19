/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');
const IMG_EXT = /\.(png|jpe?g|webp|avif|gif|svg)$/i;
const CODE_EXT = /\.(jsx?|tsx?|css|scss|html|json)$/i;

function walk(dir, filter) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p, filter));
    else if (!filter || filter(p)) out.push(p);
  }
  return out;
}

function normalize(p) {
  return p.replace(ROOT + path.sep, '').split(path.sep).join('/');
}

function loadFiles(paths) {
  return paths.map((p) => ({ p, t: fs.readFileSync(p, 'utf8') }));
}

function main() {
  const imgs = []
    .concat(fs.existsSync(PUBLIC) ? walk(PUBLIC, (p) => IMG_EXT.test(p)) : [])
    .concat(fs.existsSync(SRC) ? walk(SRC, (p) => IMG_EXT.test(p)) : []);
  const codes = []
    .concat(fs.existsSync(SRC) ? walk(SRC, (p) => CODE_EXT.test(p)) : [])
    .concat(fs.existsSync(PUBLIC) ? walk(PUBLIC, (p) => CODE_EXT.test(p)) : []);
  const codeFiles = loadFiles(codes);

  const unused = [];
  let totalBytes = 0;

  for (const img of imgs) {
    const rel = normalize(img);
    const relPublic = rel.startsWith('public/') ? '/' + rel.replace(/^public\//, '') : rel;
    const base = path.basename(img);
    let used = false;

    for (const cf of codeFiles) {
      if (cf.t.includes(rel) || cf.t.includes(relPublic) || cf.t.includes(base)) {
        used = true;
        break;
      }
    }
    if (!used) {
      const size = fs.statSync(img).size;
      totalBytes += size;
      unused.push({ rel, size });
    }
  }

  if (!unused.length) {
    console.log('assets: no unused images found');
    return;
  }
  console.log(`assets: found ${unused.length} unused image(s), total ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  unused.slice(0, 50).forEach((f) => console.log(` - ${f.rel}  ${(f.size / 1024).toFixed(1)} KB`));
  if (unused.length > 50) console.log(` ...and ${unused.length - 50} more`);

  const remove = process.argv.includes('--rm') || process.env.REMOVE === '1';
  if (remove) {
    let removed = 0;
    for (const u of unused) {
      try {
        fs.unlinkSync(path.join(ROOT, u.rel));
        removed++;
      } catch {}
    }
    console.log(`assets: removed ${removed} file(s)`);
  } else {
    console.log('Run with --rm to delete them: node scripts/find-unused-assets.js --rm');
  }
}
main();