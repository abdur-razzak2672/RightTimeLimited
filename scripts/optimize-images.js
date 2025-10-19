/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');
const CODE_EXT = /\.(jsx?|tsx?|css|scss|html)$/i;
const IMG_EXT = /\.(png|jpe?g)$/i;
const MAX_WIDTH = 1600;      // downscale very large images
const WEBP_QLT = 78;
const AVIF_QLT = 50;

function walkFiles(dir, predicate) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(p, predicate));
    else if (!predicate || predicate(p)) out.push(p);
  }
  return out;
}

function replaceInFiles(files, needle, replacement) {
  let hits = 0;
  for (const f of files) {
    let txt = fs.readFileSync(f, 'utf8');
    const next = txt.split(needle).join(replacement);
    if (next !== txt) {
      fs.writeFileSync(f, next, 'utf8');
      hits++;
    }
  }
  return hits;
}

async function convertImage(imgPath) {
  const buf = fs.readFileSync(imgPath);
  const img = sharp(buf);
  const meta = await img.metadata();
  const basis = img.resize({ width: Math.min(meta.width || MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true });

  // Write .webp
  const webpPath = imgPath.replace(IMG_EXT, '.webp');
  await basis.webp({ quality: WEBP_QLT }).toFile(webpPath);

  // Write .avif (optional, smaller but slower to encode)
  const avifPath = imgPath.replace(IMG_EXT, '.avif');
  await basis.avif({ quality: AVIF_QLT }).toFile(avifPath);

  return { webpPath, avifPath };
}

async function main() {
  const codeFiles = walkFiles(SRC, (p) => CODE_EXT.test(p)).concat(walkFiles(PUBLIC, (p) => CODE_EXT.test(p)));
  const imgFiles = walkFiles(PUBLIC, (p) => IMG_EXT.test(p)).concat(walkFiles(SRC, (p) => IMG_EXT.test(p)));

  let converted = 0, refUpdates = 0, deleted = 0;

  for (const imgPath of imgFiles) {
    const stat = fs.statSync(imgPath);
    // Only process images > 120KB
    if (stat.size < 120 * 1024) continue;

    try {
      const { webpPath } = await convertImage(imgPath);
      converted++;

      // Replace references to .png/.jpg -> .webp in code/html/css
      const relFrom = imgPath.replace(ROOT + path.sep, '').split(path.sep).join('/');
      const relTo = webpPath.replace(ROOT + path.sep, '').split(path.sep).join('/');

      refUpdates += replaceInFiles(codeFiles, relFrom, relTo);
      refUpdates += replaceInFiles(codeFiles, relFrom.replace(/^public\//, '/'), relTo.replace(/^public\//, '/'));

      // Optional: remove original if REMOVE_ORIGINALS=1 and references were updated
      if (process.env.REMOVE_ORIGINALS === '1' && refUpdates > 0) {
        try { fs.unlinkSync(imgPath); deleted++; } catch {}
      }
    } catch (e) {
      console.warn('optimize-images: failed', imgPath, e.message);
    }
  }

  console.log(`optimize-images: converted ${converted} image(s), updated ${refUpdates} file(s), deleted ${deleted}`);
}

main();