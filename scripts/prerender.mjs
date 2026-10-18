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
for (const page of pages) {
  const dest = path.join('dist', page.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, page.html);
}
fs.writeFileSync('dist/sitemap.xml', mod.sitemapXml());
fs.writeFileSync('dist/robots.txt', mod.robotsTxt());
fs.writeFileSync('dist/llms.txt', mod.llmsTxt());
fs.rmSync(out, { force: true });
console.log(`prerendered ${pages.length} pages + sitemap.xml, robots.txt, llms.txt`);
