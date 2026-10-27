// Bundled by scripts/prerender.mjs and run in Node after `vite build`.
// Produces a static HTML file for every public route so crawlers (including AI crawlers that do not run
// JavaScript) receive the correct title, description, canonical, structured data and page content.
import { PRODUCTS, CATEGORIES } from '../src/data/products';
import { FAQ_LIST } from '../src/data/content';
import { contentFor } from '../src/data/productContentData';
import { primeContent, peekContent } from '../src/data/productContent';
import { BLOG_POSTS as ALL_BLOG_POSTS } from '../src/data/blogPosts';
import { SITE_URL, SITE_NAME } from '../src/seo';
import { metaFor, abs } from '../src/components/RouteSeo';
import { categoryPath, slugify } from '../src/routes';
import { categoryIntro } from '../src/data/categoryCopy';
import { blocksToHtml } from '../src/lib/richText';
import { respSet, BLOG_WIDTHS, BLOG_FULL, BLOG_SIZES_POST, HERO_WIDTHS, HERO_FULL } from '../src/lib/imageSets';
import { PAGE_COPY, PAGE_EXTRA, seoParagraphs, productNotes } from '../src/data/pageCopy';
import { guidesFor } from '../src/data/guideLinks';
import { POLICIES, POLICY_INTRO, POLICY_HELP, POLICY_MORE } from '../src/data/policies';
import { relatedFor } from '../src/components/RelatedProducts';
import { BUSINESS } from '../src/business';
import { webpSrcSet, IMAGE_SIZES } from '../src/components/ProductImage';

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
      `<h1>Premier Camera Drones For Sale in Australia</h1><p>${esc(description)}</p><p>${esc(PAGE_COPY.home)}</p><p>${esc(PAGE_EXTRA.home)}</p>` +
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
      `${crumbList(crumbs)}<h1>${esc(h1)}</h1><p>${esc(intro ? `${intro.lead} ${intro.why}` : description)}</p>${(cat ? seoParagraphs(cat.id, sub) : [PAGE_COPY.shop]).map(t => `<p>${esc(t)}</p>`).join('')}` +
        `<h2>Buying guides for this range</h2><ul>${guidesFor(cat?.id, sub).map(g => `<li>${link('/blog/' + g.slug, g.title)}</li>`).join('')}</ul>` +
        subs + `<h2>${esc(String(items.length))} products</h2>${productList(items)}`
    );
  }

  if (pathname.startsWith('/product/')) {
    const base = PRODUCTS.find(x => '/product/' + x.slug === pathname)!;
    const p = { ...base, ...peekContent(base.slug) };
    const rel = relatedFor(p, 8);
    const img = p.images?.[0];
    return main(
      crumbList([['/', 'Home'], ['/shop', 'Shop'], [categoryPath(p.category), p.categoryName], [categoryPath(p.category, p.subcategory), p.subcategory], ['', p.name]]) +
        `<article><h1>${esc(p.name)}</h1><p>${esc(p.brand)} · ${esc(p.categoryName)} · ${esc(p.subcategory)}</p>` +
        (img ? `<img src="${esc(img)}" alt="${esc(p.name)}" width="600" height="600" loading="lazy" decoding="async">` : '') +
        `<p><strong>${money(p.price)} AUD</strong> · ${p.inStock ? 'In stock in Australia' : 'Out of stock'} · Free shipping Australia-wide</p>` +
        [...p.description.split('\n\n'), ...productNotes(p)].map(t => `<p>${esc(t)}</p>`).join('') +
        (p.highlights?.length ? `<h2>Key features</h2><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join('')}</ul>` : '') +
        (p.specRows?.length ? `<h2>Specifications</h2><table><tbody>${p.specRows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table>` : '') +
        (p.inTheBox?.length ? `<h2>In the box</h2><ul>${p.inTheBox.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : '') +
        (['enterprise-drones', 'cameras-sensors', 'spraying-drones'].includes(p.category)
          ? `<p>${link('/quote', 'Request a quote for volume and reseller pricing')}</p>` : '') +
        `</article>` +
        `<h2>More ${esc(p.subcategory)} products</h2>${productList(rel)}`
    );
  }

  if (pathname === '/blog') {
    return main(
      `<h1>${esc(h1)}</h1><p>${esc(description)}</p><p>${esc(PAGE_COPY.blog)}</p><p>${esc(PAGE_EXTRA.blog)}</p><ul>${BLOG_POSTS.map(b => `<li>${link(`/blog/${b.slug}`, b.title)} – ${esc(b.excerpt)}</li>`).join('')}</ul>`
    );
  }

  if (pathname.startsWith('/blog/')) {
    const post = BLOG_POSTS.find(b => '/blog/' + b.slug === pathname)!;
    return main(
      crumbList([['/', 'Home'], ['/blog', 'Blog'], ['', post.title]]) +
        `<article><h1>${esc(post.title)}</h1><p>${esc(post.subtitle)}</p>` +
        (post.image ? `<picture><source srcset="${esc(respSet(post.image, 'avif', BLOG_WIDTHS, BLOG_FULL))}" sizes="${BLOG_SIZES_POST}" type="image/avif"><img src="${esc(post.image.replace(/\.webp$/, '-800.webp'))}" srcset="${esc(respSet(post.image, 'webp', BLOG_WIDTHS, BLOG_FULL))}" sizes="${BLOG_SIZES_POST}" alt="${esc(post.imageAlt || post.title)}" width="1200" height="675" fetchpriority="high" decoding="async"></picture>` : '') +
        `<p><time datetime="${post.dateISO}">${esc(post.date)}</time> · ${esc(post.readTime)} · ${esc(post.author)}</p>` +
        blocksToHtml(post.content) +
        (post.relatedProducts.length ? `<h2>Featured products</h2>${productList(post.relatedProducts.map(sl => PRODUCTS.find(p => p.slug === sl)).filter((p): p is NonNullable<typeof p> => !!p))}` : '') +
        `<h2>Shop related products</h2><ul>${CATEGORIES.map(c => `<li>${link(categoryPath(c.id), c.name)}</li>`).join('')}</ul></article>`
    );
  }

  if (pathname === '/faq') {
    return main(
      `<h1>${esc(h1)}</h1><p>${esc(PAGE_COPY.faq)}</p>` + FAQ_LIST.map(f => `<h2>${esc(f.question)}</h2><p>${esc(f.answer)}</p>`).join('')
    );
  }

  const key = pathname.slice(1) as keyof typeof POLICIES;
  if (POLICIES[key]) {
    const pol = POLICIES[key];
    return main(`<h1>${esc(pol.h1)}</h1><p>${esc(POLICY_INTRO[key])}</p>${pol.paras.map(([t, x]) => `<p><strong>${esc(t)}</strong> ${esc(x)}</p>`).join('')}<p>${esc(POLICY_MORE)}</p><p>${esc(POLICY_HELP)}</p>`);
  }
  const extras = pathname === '/about' ? [PAGE_COPY.about, PAGE_EXTRA.about] : pathname === '/contact' ? [PAGE_COPY.contact, PAGE_EXTRA.contact] : pathname === '/quote' ? [PAGE_EXTRA.quote] : [];
  return main(`<h1>${esc(h1)}</h1><p>${esc(description)}</p>${extras.map(t => `<p>${esc(t)}</p>`).join('')}`);
}

// Static pages carry the full long-form product text, so prime the content cache for every product.
for (const p of PRODUCTS) {
  const c = contentFor(p.slug);
  if (c) primeContent(p.slug, c);
}

const BLOG_POSTS = [...ALL_BLOG_POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

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

function preloadFor(path: string): string {
  if (path === '/') return `<link rel="preload" as="image" type="image/avif" imagesrcset="${respSet('/images/home-hero.webp', 'avif', HERO_WIDTHS, HERO_FULL)}" imagesizes="100vw" fetchpriority="high" />`;
  if (path.startsWith('/blog/')) {
    const post = BLOG_POSTS.find(b => '/blog/' + b.slug === path);
    return post?.image ? `<link rel="preload" as="image" type="image/avif" imagesrcset="${esc(respSet(post.image, 'avif', BLOG_WIDTHS, BLOG_FULL))}" imagesizes="${BLOG_SIZES_POST}" fetchpriority="high" />` : '';
  }
  if (!path.startsWith('/product/')) return '';
  const p = PRODUCTS.find(x => '/product/' + x.slug === path);
  const img = p?.images?.[0];
  const set = img ? webpSrcSet(img) : null;
  return set ? `<link rel="preload" as="image" type="image/webp" imagesrcset="${esc(set)}" imagesizes="${esc(IMAGE_SIZES)}" fetchpriority="high" />` : '';
}

function inject(template: string, path: string): string {
  const m = metaFor(path, '');
  const canonical = abs(m.canonical ?? path);
  const image = m.image ?? abs('/og-default.png');
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
    preloadFor(path) +
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
  const bots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'Claude-SearchBot', 'Claude-User', 'Bingbot', 'PerplexityBot', 'Applebot', 'Amazonbot', 'CCBot', 'Google-Extended', 'Meta-ExternalAgent', 'cohere-ai'];
  return (
    `User-agent: *\nAllow: /\nDisallow: /order\nDisallow: /checkout\nDisallow: /admin\nDisallow: /api/\n\n` +
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

## Buying guides
${BLOG_POSTS.map(b => `- [${b.title}](${abs('/blog/' + b.slug)}): ${b.excerpt}`).join('\n')}

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

/** Static agent-discovery files. This site is static: it declares only what it can honour (no MCP tools, human-assisted ordering). */
export function agentFiles(): Record<string, string> {
  const j = (o: unknown) => JSON.stringify(o, null, 2) + '\n';
  const desc = 'Australian supplier of DJI camera drones, enterprise and thermal drones, agricultural spraying drones, cameras, sensors and accessories.';
  const publicRes = ['/shop', '/blog', '/faq', '/about', '/contact', '/quote', '/llms.txt', '/sitemap.xml'].map(p => abs(p));
  const files: Record<string, string> = {};
  files['auth.md'] = `# Auth.md

${SITE_NAME} is a public online store. No authentication is needed to read the catalogue, guides or policies.

## Agent registration
No registration or credentials are required. All listed resources are public.

## Public resources
| Resource | URL |
|---|---|
| Shop | ${abs('/shop')} |
| Buying guides | ${abs('/blog')} |
| FAQ | ${abs('/faq')} |
| Quote requests | ${abs('/quote')} |
| llms.txt | ${abs('/llms.txt')} |

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
\`\`\`

## Ordering
Orders and quotes are completed by a person through the order form or the quote form. Agents may browse and prepare a request, but a human completes it. Payment is never taken by an agent.
`;
  files['.well-known/api-catalog'] = j({
    linkset: [
      { anchor: abs('/'), 'service-doc': [{ href: abs('/faq') }], title: SITE_NAME },
      { anchor: abs('/shop'), type: 'text/html', title: SITE_NAME + ' product catalogue' },
      { anchor: abs('/sitemap.xml'), type: 'application/xml', title: 'Sitemap' }
    ]
  });
  files['.well-known/agent-skills/index.json'] = j({
    $schema: 'https://agentskills.io/schema/v0.2.0/index.json',
    name: SITE_NAME,
    url: abs('/'),
    description: desc,
    skills: [
      ['browse-products', 'navigation', 'Browse the full product catalogue by category', '/shop'],
      ['read-buying-guides', 'content', 'Buying guides on drones, thermal, LiDAR, FPV and spraying', '/blog'],
      ['request-quote', 'commerce', 'Request a quote for enterprise, sensor and spraying drones', '/quote'],
      ['contact', 'support', 'Contact the team for product advice', '/contact']
    ].map(([name, type, description, p]) => ({ name, type, description, url: abs(p), sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855' }))
  });
  files['.well-known/mcp/server-card.json'] = j({
    $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.json',
    serverInfo: { name: SITE_NAME, version: '1.0.0', description: desc, homepage: abs('/') },
    transport: { type: 'none', note: 'Static website. No live MCP endpoint; resources are public pages.' },
    capabilities: {
      resources: [
        { name: 'product-catalogue', description: 'Full product catalogue', uri: abs('/shop') },
        { name: 'buying-guides', description: 'Buying guides', uri: abs('/blog') },
        { name: 'faq', description: 'CASA, shipping, payment and warranty answers', uri: abs('/faq') }
      ],
      commerce: { ordering: 'human-assisted (order form or quote form)', currency: 'AUD', ships: 'Australia-wide, free' }
    }
  });
  files['.well-known/oauth-protected-resource'] = j({
    resource: abs('/'), resource_name: SITE_NAME + ' public catalogue', authorization_servers: [], scopes_supported: [], bearer_methods_supported: [],
    resource_documentation: abs('/auth.md'), note: 'All resources are public. No OAuth tokens are required.'
  });
  files['.well-known/oauth-authorization-server'] = j({
    issuer: abs('/'), authorization_endpoint: null, token_endpoint: null, jwks_uri: null, grant_types_supported: [], response_types_supported: [], scopes_supported: [],
    note: SITE_NAME + ' has no protected APIs.', public_resources: publicRes,
    agent_auth: { register_uri: null, identity_types_supported: ['none'], credential_types_supported: ['none'], notes: 'No registration required.' }
  });
  files['.well-known/openid-configuration'] = j({
    issuer: abs('/'), note: SITE_NAME + ' does not operate an OpenID Connect provider.', public_site: true,
    authorization_endpoint: null, token_endpoint: null, userinfo_endpoint: null, jwks_uri: null, scopes_supported: [], response_types_supported: [], grant_types_supported: [], subject_types_supported: [], id_token_signing_alg_values_supported: []
  });
  files['.well-known/acp.json'] = j({
    protocol: { name: 'acp', version: '0.1.0' }, name: SITE_NAME, description: desc, api_base_url: abs('/'), homepage: abs('/'), transports: ['https'],
    capabilities: { services: ['product-catalogue', 'buying-guides', 'faq', 'quote'], ordering: 'human-assisted', currency: 'AUD' },
    contact: { page: abs('/contact') }, legal: { region: 'Australia', ships_to: 'Australia', product_type: 'drones and accessories' }
  });
  files['.well-known/ucp'] = j({
    ucp: '1.0', protocol_version: '1.0', spec: 'https://ucp.dev/specification/overview/', schema: 'https://ucp.dev/schema/v1.json', site: abs('/'), name: SITE_NAME, description: desc,
    services: [
      { id: 'product-catalogue', type: 'catalog', url: abs('/shop'), description: 'Full product catalogue' },
      { id: 'quote', type: 'commerce', url: abs('/quote'), description: 'Request a quote (human-assisted)' }
    ],
    capabilities: ['browse', 'inquiry', 'content'], currency: 'AUD',
    endpoints: { catalog: abs('/shop'), contact: abs('/contact'), llms_txt: abs('/llms.txt'), api_catalog: abs('/.well-known/api-catalog') }
  });
  return files;
}

/** One JSON file of long-form content per product, fetched by the client when a product page opens. */
export function contentFiles(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const p of PRODUCTS) {
    const c = peekContent(p.slug);
    if (c) out[p.slug] = JSON.stringify(c);
  }
  return out;
}
