// Post-build step: statically render every public route into dist/ and write sitemap.xml, robots.txt and llms.txt.
import { build } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const out = 'scripts/.prerender.bundle.mjs';
await build({
  entryPoints: ['scripts/prerender-entry.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: out,
  logLevel: 'error',
  external: ['react', 'react-dom', 'react-router-dom'],
  define: { 'import.meta.env': '{}' },
  loader: { '.png': 'dataurl' }
});

const mod = await import(pathToFileURL(path.resolve(out)).href);
const template = fs.readFileSync('dist/index.html', 'utf8');

const pages = mod.buildPages(template);
// Long-form product text ships as one small JSON file per product; product pages preload their own file.
fs.mkdirSync('dist/content', { recursive: true });
for (const [slug, json] of Object.entries(mod.contentFiles())) fs.writeFileSync(path.join('dist/content', slug + '.json'), json);
for (const page of pages) {
  const m = page.file.match(/^product\/([^/]+)\/index\.html$/);
  if (m) page.html = page.html.replace('</head>', () => `<link rel="preload" as="fetch" type="application/json" crossorigin="anonymous" href="/content/${m[1]}.json" /></head>`);
  const dest = path.join('dist', page.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, page.html);
}
fs.writeFileSync('dist/sitemap.xml', mod.sitemapXml());
fs.writeFileSync('dist/robots.txt', mod.robotsTxt());
fs.writeFileSync('dist/llms.txt', mod.llmsTxt());
for (const [rel, body] of Object.entries(mod.agentFiles())) {
  const dest = path.join('dist', rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, body);
}
fs.rmSync(out, { force: true });
console.log(`prerendered ${pages.length} pages + sitemap.xml, robots.txt, llms.txt`);
