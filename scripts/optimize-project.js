/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PKG = path.join(ROOT, 'package.json');
const INDEX_JS = path.join(ROOT, 'src', 'index.js');
const PUBLIC_HTML = path.join(ROOT, 'public', 'index.html');

function editJSON(file, mutator) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  const before = JSON.stringify(json);
  mutator(json);
  const after = JSON.stringify(json);
  if (before !== after) {
    fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n', 'utf8');
    return true;
  }
  return false;
}

function ensurePkgScripts() {
  if (!fs.existsSync(PKG)) return;
  const changed = editJSON(PKG, (pkg) => {
    pkg.scripts = pkg.scripts || {};
    pkg.scripts['build:fast'] ||= "cross-env EXTEND_ESLINT=true GENERATE_SOURCEMAP=false react-scripts build";
    pkg.scripts['compress'] ||= "find build -type f \\( -name '*.js' -o -name '*.css' -o -name '*.html' \\) -print0 | xargs -0 -I{} bash -lc \"gzip -kf9 '{}' || true; brotli -kf '{}' || true\"";
    pkg.scripts['build:slim'] ||= "npm run build:fast && npx purgecss --css 'build/static/css/*.css' --content 'build/**/*.html' 'build/static/js/*.js' --output build/static/css/ && npm run compress";
    pkg.scripts['fix:img-lazy'] ||= "find src -type f \\( -name \"*.jsx\" -o -name \"*.js\" \\) -print0 | xargs -0 sed -i -E 's/<img([^>]*)(?<!loading=\"lazy\")>/<img loading=\"lazy\" decoding=\"async\"\\1>/g'";
    pkg.scripts['start:preview'] ||= "npm run build:slim && npx --yes serve -s build -l 3000";
  });
  if (changed) console.log('optimize: package.json scripts updated');
}

function ensureIndexImports() {
  if (!fs.existsSync(INDEX_JS)) return;
  let code = fs.readFileSync(INDEX_JS, 'utf8');
  if (!/slick-carousel\/slick\/slick\.css/.test(code)) {
    code = `import 'slick-carousel/slick/slick.css';\nimport 'slick-carousel/slick/slick-theme.css';\n` + code;
    fs.writeFileSync(INDEX_JS, code, 'utf8');
    console.log('optimize: injected slick CSS imports into src/index.js');
  }
}

function fixPublicHtml() {
  if (!fs.existsSync(PUBLIC_HTML)) return;
  let html = fs.readFileSync(PUBLIC_HTML, 'utf8');
  let changed = html;

  // Remove broken local slick/fonts preloads and generic font preloads in dev
  changed = changed.replace(/<link\s+rel=["']preload["'][^>]*\bas=["']font["'][^>]*>\s*/gi, '');
  // Remove legacy script.js include that serves HTML (Unexpected token '<')
  changed = changed.replace(/<script[^>]*\bsrc=["']\/?script\.js["'][^>]*><\/script>\s*/gi, '');
  // Remove any <link> to local assets slick.css to avoid 404 fonts
  changed = changed.replace(/<link[^>]*href=["'][^"']*assets\/css\/slick[^"']*["'][^>]*>\s*/gi, '');

  if (changed !== html) {
    fs.writeFileSync(PUBLIC_HTML, changed, 'utf8');
    console.log('optimize: cleaned public/index.html');
  }
}

function addImgLazyEverywhere() {
  const SRC = path.join(ROOT, 'src');
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.(jsx?|tsx?)$/.test(entry.name)) files.push(p);
    }
  })(SRC);

  let count = 0;
  const re = /<img(?![^>]*\bloading=)([^>]*)>/g;
  for (const f of files) {
    let code = fs.readFileSync(f, 'utf8');
    if (re.test(code)) {
      const updated = code.replace(re, '<img loading="lazy" decoding="async"$1>');
      if (updated !== code) {
        fs.writeFileSync(f, updated, 'utf8');
        count++;
      }
    }
  }
  if (count) console.log(`optimize: added lazy/decoding to <img> in ${count} file(s)`);
}

function main() {
  ensurePkgScripts();
  ensureIndexImports();
  fixPublicHtml();
  addImgLazyEverywhere();
  console.log('optimize: done');
}
main();