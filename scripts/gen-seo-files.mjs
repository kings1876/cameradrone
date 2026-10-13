// Generates public/sitemap.xml and public/robots.txt from the product, category and blog data.
import fs from 'fs';

const SITE_URL = (process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://droneforsale.com.au').replace(/\/$/, '');
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const products = fs.readFileSync('src/data/products.ts', 'utf8');
const content = fs.readFileSync('src/data/content.ts', 'utf8');

const productSlugs = [...products.matchAll(/\{ name: '([^']+)'/g)].map(m => slugify(m[1]));
const categoryIds = [...products.matchAll(/^\s+id: '([a-z-]+)',$/gm)].map(m => m[1]);
const blogSlugs = [...content.matchAll(/slug: '([^']+)'/g)].map(m => m[1]);

const today = new Date().toISOString().slice(0, 10);
const urls = [
  ['/', 1.0],
  ['/shop', 0.9],
  ...categoryIds.map(id => [`/shop?category=${id}`, 0.8]),
  ...productSlugs.map(s => [`/product/${s}`, 0.7]),
  ['/blog', 0.6],
  ...blogSlugs.map(s => [`/blog/${s}`, 0.6]),
  ['/faq', 0.5],
  ['/about', 0.4],
  ['/contact', 0.4],
  ['/shipping', 0.2],
  ['/refund', 0.2],
  ['/privacy', 0.2],
  ['/terms', 0.2]
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(([p, pr]) => `  <url><loc>${(SITE_URL + p).replace(/&/g, '&amp;')}</loc><lastmod>${today}</lastmod><priority>${pr.toFixed(1)}</priority></url>`)
    .join('\n') +
  `\n</urlset>\n`;

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
fs.writeFileSync(
  'public/robots.txt',
  `User-agent: *\nAllow: /\nDisallow: /order\nDisallow: /checkout\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);
console.log(`sitemap.xml: ${urls.length} URLs, robots.txt written (${SITE_URL})`);
