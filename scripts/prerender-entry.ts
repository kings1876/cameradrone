// Bundled by scripts/prerender.mjs and run in Node after `vite build`.
// Produces a static HTML file for every public route so crawlers (including AI crawlers that do not run
// JavaScript) receive the correct title, description, canonical, structured data and page content.
import { PRODUCTS, CATEGORIES } from '../src/data/products';
import { BLOG_POSTS, FAQ_LIST } from '../src/data/content';
import { SITE_URL, SITE_NAME } from '../src/seo';
import { metaFor, abs } from '../src/components/RouteSeo';
import { categoryPath, slugify } from '../src/routes';
import { categoryIntro } from '../src/data/categoryCopy';
import { relatedFor } from '../src/components/RelatedProducts';
import { BUSINESS } from '../src/business';

const esc = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const money = (n: number) => '$' + n.toLocaleString('en-AU');
const link = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;

const NAV_LINKS: [string, string][] = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/quote', 'Request a Quote'],
  ['/blog', 'Blog'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/faq', 'FAQ']
];

function header(): string {
  return (
    `<header><p>${esc(BUSINESS.name)} · ${esc(BUSINESS.abnDisplay)}</p>` +
    `<nav aria-label="Main"><ul>${NAV_LINKS.map(([h, t]) => `<li>${link(h, t)}</li>`).join('')}</ul></nav>` +
    `<nav aria-label="Categories"><ul>${CATEGORIES.map(c => `<li>${link(categoryPath(c.id), c.name)}</li>`).join('')}</ul></nav></header>`
  );
}

function footer(): string {
  return (
    `<footer><nav aria-label="Footer"><ul>` +
    [['/shipping', 'Shipping Policy'], ['/refund', 'Refund Policy'], ['/privacy', 'Privacy Notice'], ['/terms', 'Terms of Service']]
      .map(([h, t]) => `<li>${link(h, t)}</li>`).join('') +
    `</ul></nav><p>${esc(BUSINESS.name)} · ${esc(BUSINESS.abnDisplay)} · Australia</p></footer>`
  );
}

function productList(items: typeof PRODUCTS): string {
  return `<ul>${items.map(p => `<li>${link(`/product/${p.slug}`, p.name)} – ${money(p.price)} AUD</li>`).join('')}</ul>`;
}

function crumbList(parts: [string, string][]): string {
  return `<nav aria-label="Breadcrumb"><ol>${parts.map(([h, t]) => `<li>${h ? link(h, t) : esc(t)}</li>`).join('')}</ol></nav>`;
}

function bodyFor(pathname: string, h1: string, description: string): string {
  const main = (inner: string) => `<div class="ssr">${header()}<main>${inner}</main>${footer()}</div>`;

  if (pathname === '/') {
    const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 12);
    return main(
      `<h1>Premier Camera Drones For Sale in Australia</h1><p>${esc(description)}</p>` +
        `<h2>Shop drones by category</h2><ul>${CATEGORIES.map(c => `<li>${link(categoryPath(c.id), c.name)}</li>`).join('')}</ul>` +
        `<h2>Featured drones and equipment</h2>${productList(featured)}` +
        `<h2>Buying guides</h2><ul>${BLOG_POSTS.map(b => `<li>${link(`/blog/${b.slug}`, b.title)}</li>`).join('')}</ul>`
    );
  }

  if (pathname === '/shop' || pathname.startsWith('/category/')) {
    const parts = pathname.split('/');
    const cat = CATEGORIES.find(c => c.id === parts[2]);
    const sub = cat?.subcategories.find(s => slugify(s) === parts[3]);
    const items = PRODUCTS.filter(p => (!cat || p.category === cat.id) && (!sub || p.subcategory === sub));
    const intro = categoryIntro(cat?.id, sub);
    const crumbs: [string, string][] = [['/', 'Home'], ['/shop', 'Shop']];
    if (cat) crumbs.push([sub ? categoryPath(cat.id) : '', cat.name]);
    if (sub) crumbs.push(['', sub]);
    const subs = cat && !sub ? `<h2>${esc(cat.name)} subcategories</h2><ul>${cat.subcategories.map(s => `<li>${link(categoryPath(cat.id, s), s)}</li>`).join('')}</ul>` : '';
    return main(
      `${crumbList(crumbs)}<h1>${esc(h1)}</h1><p>${esc(intro ? `${intro.lead} ${intro.why}` : description)}</p>` +
        subs + `<h2>${esc(String(items.length))} products</h2>${productList(items)}`
    );
  }

  if (pathname.startsWith('/product/')) {
    const p = PRODUCTS.find(x => '/product/' + x.slug === pathname)!;
    const rel = relatedFor(p, 8);
    const img = p.images?.[0];
    return main(
      crumbList([['/', 'Home'], ['/shop', 'Shop'], [categoryPath(p.category), p.categoryName], [categoryPath(p.category, p.subcategory), p.subcategory], ['', p.name]]) +
        `<article><h1>${esc(p.name)}</h1><p>${esc(p.brand)} · ${esc(p.categoryName)} · ${esc(p.subcategory)}</p>` +
        (img ? `<img src="${esc(img)}" alt="${esc(p.name)}" width="600" height="600">` : '') +
        `<p><strong>${money(p.price)} AUD</strong> · ${p.inStock ? 'In stock in Australia' : 'Out of stock'} · Free shipping Australia-wide</p>` +
        p.description.split('\n\n').map(t => `<p>${esc(t)}</p>`).join('') +
        (p.highlights?.length ? `<h2>Key features</h2><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : '') +
        (p.specRows?.length ? `<h2>Specifications</h2><table><tbody>${p.specRows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table>` : '') +
        (p.inTheBox?.length ? `<h2>In the box</h2><ul>${p.inTheBox.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : '') +
        (['enterprise-drones', 'cameras-sensors', 'spraying-drones'].includes(p.category)
          ? `<p>${link(`/quote?product=${p.slug}`, 'Request a quote for volume and reseller pricing')}</p>` : '') +
        `</article>` +
        `<h2>More ${esc(p.subcategory)} products</h2>${productList(rel)}`
    );
  }

  if (pathname === '/blog') {
    return main(
      `<h1>${esc(h1)}</h1><p>${esc(description)}</p><ul>${BLOG_POSTS.map(b => `<li>${link(`/blog/${b.slug}`, b.title)} – ${esc(b.excerpt)}</li>`).join('')}</ul>`
    );
  }

  if (pathname.startsWith('/blog/')) {
    const post = BLOG_POSTS.find(b => '/blog/' + b.slug === pathname)!;
    return main(
      crumbList([['/', 'Home'], ['/blog', 'Blog'], ['', post.title]]) +
        `<article><h1>${esc(post.title)}</h1><p>${esc(post.subtitle)}</p>` +
        (post.image ? `<img src="${esc(post.image)}" alt="${esc(post.imageAlt || post.title)}" width="1200" height="675">` : '') +
        post.content.map(t => `<p>${esc(t)}</p>`).join('') +
        `<h2>Shop related products</h2><ul>${CATEGORIES.map(c => `<li>${link(categoryPath(c.id), c.name)}</li>`).join('')}</ul></article>`
    );
  }

  if (pathname === '/faq') {
    return main(
      `<h1>${esc(h1)}</h1>` + FAQ_LIST.map(f => `<h2>${esc(f.question)}</h2><p>${esc(f.answer)}</p>`).join('')
    );
  }

  return main(`<h1>${esc(h1)}</h1><p>${esc(description)}</p>`);
}

const H1: Record<string, string> = {
  '/blog': 'Drone Buying Guides & CASA Rules',
  '/faq': 'Register a Drone in Australia: CASA Rules, Shipping & Warranty FAQ',
  '/about': 'About Drones for Sale',
  '/contact': 'Contact Drones for Sale',
  '/quote': 'Request a quote',
  '/shipping': 'Shipping Policy',
  '/refund': 'Refund Policy',
  '/privacy': 'Privacy Notice',
  '/terms': 'Terms of Service'
};

export interface Page {
  path: string;
  file: string;
  html: string;
}

function inject(template: string, path: string): string {
  const m = metaFor(path, '');
  const canonical = abs(m.canonical ?? path);
  const image = m.image ?? abs('/logo.png');
  const h1 = m.h1 ?? H1[path] ?? m.title.split('|')[0].trim();
  const t = esc(m.title);
  const d = esc(m.description);
  let html = template
    .replace(/<title>[^<]*<\/title>/, () => `<title>${t}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, (_m, a, z) => a + d + z)
    .replace(/(<meta name="robots" content=")[^"]*(")/, (_m, a, z) => a + (m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large') + z)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (_m, a, z) => a + t + z)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (_m, a, z) => a + d + z)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, (_m, a, z) => a + (m.type === 'article' ? 'article' : 'website') + z);
  const extra =
    `<link rel="canonical" href="${esc(canonical)}" />` +
    `<meta property="og:url" content="${esc(canonical)}" />` +
    `<meta property="og:image" content="${esc(image)}" />` +
    `<meta name="twitter:title" content="${t}" />` +
    `<meta name="twitter:description" content="${d}" />` +
    `<meta name="twitter:image" content="${esc(image)}" />` +
    (m.jsonLd?.length
      ? `<script type="application/ld+json" id="route-jsonld">${JSON.stringify(m.jsonLd.length === 1 ? m.jsonLd[0] : m.jsonLd).replace(/</g, '\\u003c')}</script>`
      : '') +
    `<style>#root>.ssr{display:none}</style><noscript><style>#root>.ssr{display:block!important;max-width:64rem;margin:0 auto;padding:1rem;color:#e2e8f0;font-family:system-ui,sans-serif}#root>.ssr a{color:#fbbf24}</style></noscript>`;
  html = html.replace('</head>', () => extra + '</head>');
  const body = bodyFor(path, h1, m.description);
  return html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
}

export function routes(): string[] {
  const list = ['/', '/shop'];
  for (const c of CATEGORIES) {
    list.push(categoryPath(c.id));
    for (const s of c.subcategories) list.push(categoryPath(c.id, s));
  }
  for (const p of PRODUCTS) list.push('/product/' + p.slug);
  list.push('/blog', ...BLOG_POSTS.map(b => '/blog/' + b.slug));
  list.push('/faq', '/about', '/contact', '/quote', '/shipping', '/refund', '/privacy', '/terms');
  return list;
}

export function buildPages(template: string): Page[] {
  const pages: Page[] = routes().map(path => ({
    path,
    file: path === '/' ? 'index.html' : path.slice(1) + '/index.html',
    html: inject(template, path)
  }));
  // 404 page: served by the host for unknown URLs, never indexed
  const notFound = inject(template, '/__not-found');
  pages.push({ path: '/404', file: '404.html', html: notFound });
  return pages;
}

export function sitemapXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const u = (path: string, prio: string, extra = '') =>
    `  <url><loc>${esc(abs(path))}</loc><lastmod>${today}</lastmod><priority>${prio}</priority>${extra}</url>`;
  const lines: string[] = [];
  for (const path of routes()) {
    if (metaFor(path, '').noindex) continue;
    let prio = '0.5';
    if (path === '/') prio = '1.0';
    else if (path === '/shop') prio = '0.9';
    else if (path.startsWith('/category/')) prio = path.split('/').length > 3 ? '0.7' : '0.8';
    else if (path.startsWith('/product/')) prio = '0.7';
    else if (path === '/quote') prio = '0.7';
    else if (path.startsWith('/blog')) prio = '0.6';
    else if (['/shipping', '/refund', '/privacy', '/terms'].includes(path)) prio = '0.2';
    let extra = '';
    if (path.startsWith('/product/')) {
      const p = PRODUCTS.find(x => '/product/' + x.slug === path)!;
      if (p.images?.[0]) extra = `<image:image><image:loc>${esc(abs(p.images[0]))}</image:loc><image:title>${esc(p.name)}</image:title></image:image>`;
    }
    lines.push(u(path, prio, extra));
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${lines.join('\n')}\n</urlset>\n`;
}

export function robotsTxt(): string {
  const bots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Applebot', 'Amazonbot', 'CCBot', 'Google-Extended', 'Meta-ExternalAgent', 'cohere-ai'];
  return (
    `User-agent: *\nAllow: /\nDisallow: /order\nDisallow: /checkout\nDisallow: /admin\nDisallow: /api/\nContent-Signal: search=yes, ai-input=yes, ai-train=no\n\n` +
    bots.map(b => `User-agent: ${b}\nAllow: /\nDisallow: /admin\nDisallow: /api/\n`).join('\n') +
    `\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );
}

export function llmsTxt(): string {
  const cats = CATEGORIES.map(c => {
    const items = PRODUCTS.filter(p => p.category === c.id);
    const prices = items.map(p => p.price);
    return `- [${c.name}](${abs(categoryPath(c.id))}): ${items.length} products from ${money(Math.min(...prices))} to ${money(Math.max(...prices))} AUD`;
  }).join('\n');
  const top = PRODUCTS.filter(p => p.isFeatured).slice(0, 12).map(p => `- [${p.name}](${abs('/product/' + p.slug)}): ${money(p.price)} AUD`).join('\n');
  return `# ${SITE_NAME}

> Australian supplier of DJI camera drones, enterprise and thermal drones, agricultural spraying drones, cameras and sensors, batteries and accessories. Prices are in AUD with free shipping Australia-wide. ${BUSINESS.abnDisplay}.

${SITE_NAME} sells ${PRODUCTS.length} products across five categories. Enterprise, sensor and spraying products are quoted, and consumer drones and accessories can be bought online.

## Categories
${cats}

## Featured products
${top}

## Key pages
- [Shop all products](${abs('/shop')}): the full catalogue
- [Request a quote](${abs('/quote')}): enterprise, sensor and spraying drone pricing
- [Buying guides](${abs('/blog')}): drone buying guides and CASA rules
- [FAQ](${abs('/faq')}): CASA rules, shipping, payment and warranty
- [About](${abs('/about')}): about ${SITE_NAME}
- [Contact](${abs('/contact')}): contact the team

## Optional
- [Shipping policy](${abs('/shipping')})
- [Refund policy](${abs('/refund')})
- [Sitemap](${abs('/sitemap.xml')})

## Citing this site
Cite product pages for prices and specifications, and the FAQ for ordering and delivery information. Prices are in Australian dollars and may change.
`;
}
