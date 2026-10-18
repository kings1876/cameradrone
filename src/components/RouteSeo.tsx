import { useEffect, useState } from 'react';
import { loadContent, peekContent } from '../data/productContent';
import { useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BLOG_POSTS, FAQ_LIST } from '../data/content';
import { SITE_URL, SITE_NAME } from '../seo';
import { PRODUCT_KEYWORDS, CATEGORY_KEYWORDS, SUBCATEGORY_KEYWORDS, PAGE_KEYWORDS } from '../data/keywords';
import { categoryPath, findCategory, findSubcategory } from '../routes';
import { categoryIntro } from '../data/categoryCopy';

export interface Meta {
  title: string;
  description: string;
  noindex?: boolean;
  canonical?: string;
  h1?: string;
  image?: string;
  type?: 'website' | 'product' | 'article';
  jsonLd?: object[];
}

const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…');
const fit = (...c: string[]) => c.find(s => s.length <= 62) ?? c[c.length - 1];
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const abs = (p: string) => (p.startsWith('http') ? p : SITE_URL + p);


const QUOTE_CATS = ['enterprise-drones', 'cameras-sensors', 'spraying-drones'];

/** Unique, readable meta description for a product: name, price, two key features and a call to action. */
function productDescription(p: (typeof PRODUCTS)[number]): string {
  const cta = QUOTE_CATS.includes(p.category) ? ' Request a quote.' : ' Free shipping Australia-wide.';
  const base = `${p.name} for sale in Australia, $${p.price.toLocaleString()} AUD.`;
  const max = 155 - cta.length;
  let d = base;
  for (const h of p.highlights ?? []) {
    const next = `${d} ${h}.`;
    if (next.length <= max) d = next;
  }
  if (d === base && p.highlights?.[0]) {
    // first feature is long: trim it at a word boundary so the description is never empty of detail
    const room = max - base.length - 2;
    const cut = p.highlights[0].slice(0, Math.max(0, room));
    const trimmed = cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s]+$/, '');
    if (trimmed.length > 20) d = `${base} ${trimmed}.`;
  }
  if (d.length < 95) {
    const extra = ` Genuine ${p.brand} ${p.subcategory.toLowerCase()} with Australian warranty.`;
    if ((d + extra).length <= max) d += extra;
  }
  return d + cta;
}

function crumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path)
    }))
  };
}

export function metaFor(pathname: string, search: string): Meta {
  const params = new URLSearchParams(search);

  if (pathname === '/') {
    return {
      title: 'Drones for Sale Australia | DJI, Enterprise & Spraying Drones',
      description:
        'Buy DJI camera drones, enterprise and thermal drones, spray drones, cameras, sensors and accessories in Australia. AUD pricing, free shipping.',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL + '/',
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: SITE_URL + '/shop?q={search_term_string}' },
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    };
  }

  if (pathname === '/shop' || pathname.startsWith('/category/')) {
    const legacyCat = pathname === '/shop' ? findCategory(params.get('category') ?? undefined) : undefined;
    const parts = pathname.replace(/\/$/, '').split('/');
    const cat = legacyCat ?? (pathname.startsWith('/category/') ? findCategory(parts[2]) : undefined);
    const sub = legacyCat
      ? (params.get('sub') && legacyCat.subcategories.includes(params.get('sub')!) ? params.get('sub')! : undefined)
      : findSubcategory(cat, parts[3]);
    if (pathname.startsWith('/category/') && !cat) {
      return { title: `Page not found | ${SITE_NAME}`, description: 'This category could not be found.', noindex: true };
    }
    if (cat) {
      const label = sub ?? cat.name;
      const kw = (sub && SUBCATEGORY_KEYWORDS[sub]) || CATEGORY_KEYWORDS[cat.id];
      const intro = categoryIntro(cat.id, sub);
      const items = PRODUCTS.filter(p => p.category === cat.id && (!sub || p.subcategory === sub));
      const canonicalPath = categoryPath(cat.id, sub);
      const path = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: cat.name, path: categoryPath(cat.id) },
        ...(sub ? [{ name: sub, path: canonicalPath }] : [])
      ];
      const priceRange = `$${Math.min(...items.map(i => i.price)).toLocaleString()} to $${Math.max(...items.map(i => i.price)).toLocaleString()} AUD`;
      let catDesc = `Shop ${items.length} ${label} products in Australia from ${priceRange}. Free shipping.`;
      for (const nm of [items.slice(0, 2).map(i => i.name).join(' and '), items[0]?.name ?? '']) {
        const withNames = `Shop ${items.length} ${label} products in Australia from ${priceRange}, including ${nm}. Free shipping.`;
        if (nm && withNames.length <= 155) { catDesc = withNames; break; }
      }
      return {
        title: sub
          ? fit(`${label}: ${items.length} Products for Sale | ${SITE_NAME}`, `${label}: Shop ${items.length} Products`, label)
          : fit(`${label} for Sale in Australia | ${SITE_NAME}`, `Buy ${label} in Australia | ${SITE_NAME}`, `Buy ${label} Online | ${SITE_NAME}`, `${label} | ${SITE_NAME}`),
        description: catDesc,
        noindex: false,
        canonical: canonicalPath,
        h1: `${label} for Sale in Australia`,
        jsonLd: [
          crumbs(path),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${label} for Sale in Australia`,
            description: intro ? `${intro.lead} ${intro.why}` : undefined,
            url: abs(canonicalPath),
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: items.length,
              itemListElement: items.slice(0, 24).map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: abs(`/product/${p.slug}`),
                name: p.name
              }))
            }
          }
        ]
      };
    }
    return {
      title: 'Drone Sales Australia: Shop Drones & Sensors | Drones for Sale',
      description:
        'Drone sales in Australia: DJI camera drones, commercial drones, thermal and multispectral sensors, spray drones, batteries and accessories.',
      canonical: '/shop',
      h1: 'Drones for Sale in Australia',
      jsonLd: [crumbs([{ name: 'Home', path: '/' }, { name: 'Shop', path: '/shop' }])]
    };
  }

  if (pathname.startsWith('/product/')) {
    const slug = pathname.replace('/product/', '').replace(/\/$/, '');
    const base = PRODUCTS.find(x => x.slug === slug);
    const p = base ? { ...base, ...peekContent(slug) } : undefined;
    if (!p) return { title: `Product not found | ${SITE_NAME}`, description: 'This product could not be found.', noindex: true };
    const image = p.images?.[0] ? abs(p.images[0]) : undefined;
    const url = abs(`/product/${p.slug}`);
    const kw = PRODUCT_KEYWORDS[p.slug];
    return {
      title: fit(`${p.name} for Sale in Australia | ${SITE_NAME}`, `${p.name} for Sale Australia | ${SITE_NAME}`, `${p.name} | ${SITE_NAME}`, `Buy ${p.name}`),
      description: productDescription(p),
      image,
      type: 'product',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          description: p.description.split('\n\n')[0],
          brand: { '@type': 'Brand', name: p.brand },
          category: `${p.categoryName} > ${p.subcategory}`,
          ...(kw ? { keywords: [kw.primary, ...kw.supporting].join(', ') } : {}),
          ...(p.specRows?.length
            ? { additionalProperty: p.specRows.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })) }
            : {}),
          ...(p.images?.length ? { image: p.images.map(abs) } : {}),
          sku: p.slug,
          url,
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'AUD',
            price: p.price,
            priceValidUntil: new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10),
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'AUD' },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
                transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 4, unitCode: 'DAY' }
              }
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'AU',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 30
            },
            availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: { '@type': 'Organization', name: SITE_NAME }
          }
        },
        crumbs([
          { name: 'Home', path: '/' },
          { name: 'Shop', path: '/shop' },
          { name: p.categoryName, path: categoryPath(p.category) },
          { name: p.subcategory, path: categoryPath(p.category, p.subcategory) },
          { name: p.name, path: `/product/${p.slug}` }
        ])
      ]
    };
  }

  if (pathname === '/blog') {
    return {
      title: 'Best Drones for Beginners Australia | Drones for Sale',
      description:
        'Buying guides and reviews for drones for beginners, DJI camera drones, enterprise and spray drones in Australia, plus CASA rules explained for pilots.'
    };
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
    const post = BLOG_POSTS.find(x => x.slug === slug);
    if (!post) return { title: `Article not found | ${SITE_NAME}`, description: 'This article could not be found.', noindex: true };
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      image: post.image ? abs(post.image) : undefined,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          ...(post.image ? { image: abs(post.image) } : {}),
          datePublished: post.dateISO,
          dateModified: post.modifiedISO,
          wordCount: post.wordCount,
          keywords: post.targetKeywords.join(', '),
          inLanguage: 'en-AU',
          author: { '@type': 'Organization', name: SITE_NAME, url: abs('/about') },
          publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: abs('/logo.png') } },
          mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/blog/${post.slug}`) }
        },
        crumbs([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` }
        ]),
        ...(post.faq.length
          ? [{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faq.map(f => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a }
              }))
            }]
          : [])
      ]
    };
  }

  if (pathname === '/faq') {
    return {
      title: 'Register a Drone in Australia: CASA FAQ | Drones for Sale',
      description: 'How to register a drone in Australia, CASA flight rules, shipping, payment and warranty answers when buying a drone.',
      jsonLd: [
        crumbs([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]),
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_LIST.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer }
          }))
        }
      ]
    };
  }

  if (pathname === '/about') {
    return {
      title: 'About Drones for Sale | Australian Drone Supplier',
      description: 'Drones for Sale supplies DJI camera drones, enterprise and thermal drones, agricultural spraying drones and accessories across Australia.',
      jsonLd: [
        { '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Drones for Sale', url: abs('/about'), inLanguage: 'en-AU' },
        crumbs([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])
      ]
    };
  }

  if (pathname === '/quote') {
    return {
      title: 'Request a Quote: Commercial, Thermal & Spray Drones',
      description:
        'Request a quote on commercial drones, thermal and multispectral sensors, LiDAR payloads and spray drones. Volume and reseller pricing.'
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact Drones for Sale | Drone Enquiries',
      description: 'Contact our team for help choosing a drone, enterprise payload or spraying system, or to confirm stock and delivery to your location.',
      jsonLd: [
        { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact Drones for Sale', url: abs('/contact'), inLanguage: 'en-AU' },
        crumbs([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])
      ]
    };
  }

  if (['/shipping', '/refund', '/privacy', '/terms'].includes(pathname)) {
    const names: Record<string, string> = {
      '/shipping': 'Shipping Policy',
      '/refund': 'Refund Policy',
      '/privacy': 'Privacy Notice',
      '/terms': 'Terms of Service'
    };
    const policyDesc: Record<string, string> = {
      '/shipping': 'Shipping policy for Drones for Sale: free insured express courier to every Australian state and territory on drones and accessories.',
      '/refund': 'Refund policy for Drones for Sale: returns, warranty and Australian Consumer Law guarantees on genuine Australian stock.',
      '/privacy': 'Privacy notice for Drones for Sale: how we collect, use and protect your personal information when you order or enquire.',
      '/terms': 'Terms of service for Drones for Sale covering CASA responsibilities, orders, pricing, payment, delivery and use of this website in Australia.'
    };
    return {
      title: `${names[pathname]} | ${SITE_NAME}`,
      description: policyDesc[pathname]
    };
  }

  if (pathname === '/order' || pathname === '/checkout' || pathname.startsWith('/order/') || pathname.startsWith('/admin')) {
    return { title: pathname.startsWith('/admin') ? `Admin | ${SITE_NAME}` : `Order Form | ${SITE_NAME}`, description: 'Place a drone order.', noindex: true };
  }

  return { title: `Page not found | ${SITE_NAME}`, description: 'This page could not be found.', noindex: true };
}

function setMeta(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaTag = (key: 'name' | 'property', val: string) => () => {
  const m = document.createElement('meta');
  m.setAttribute(key, val);
  return m;
};

/** Keeps title, description, canonical, social tags and JSON-LD in sync with the current route. */
export const RouteSeo: React.FC = () => {
  const { pathname, search } = useLocation();
  const [ready, setReady] = useState(0);

  // Product metadata needs the long-form content; fetch it, then re-run this effect.
  useEffect(() => {
    if (!pathname.startsWith('/product/')) return;
    const slug = pathname.replace('/product/', '').replace(/\/$/, '');
    if (peekContent(slug)) return;
    let live = true;
    loadContent(slug).then(() => {
      if (live) setReady(n => n + 1);
    });
    return () => {
      live = false;
    };
  }, [pathname]);

  useEffect(() => {
    const m = metaFor(pathname, search);
    const path = pathname.replace(/\/$/, '') || '/';
    const canonical = abs(m.canonical ?? path);
    const image = m.image ?? abs('/og-default.png');

    document.title = m.title;
    setMeta('meta[name="description"]', metaTag('name', 'description'), 'content', m.description);
    setMeta('meta[name="robots"]', metaTag('name', 'robots'), 'content', m.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    }, 'href', canonical);

    setMeta('meta[property="og:title"]', metaTag('property', 'og:title'), 'content', m.title);
    setMeta('meta[property="og:description"]', metaTag('property', 'og:description'), 'content', m.description);
    setMeta('meta[property="og:url"]', metaTag('property', 'og:url'), 'content', canonical);
    setMeta('meta[property="og:image"]', metaTag('property', 'og:image'), 'content', image);
    setMeta('meta[property="og:type"]', metaTag('property', 'og:type'), 'content', m.type === 'article' ? 'article' : 'website');
    setMeta('meta[name="twitter:title"]', metaTag('name', 'twitter:title'), 'content', m.title);
    setMeta('meta[name="twitter:description"]', metaTag('name', 'twitter:description'), 'content', m.description);
    setMeta('meta[name="twitter:image"]', metaTag('name', 'twitter:image'), 'content', image);

    document.getElementById('route-jsonld')?.remove();
    if (m.jsonLd?.length) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'route-jsonld';
      s.text = JSON.stringify(m.jsonLd.length === 1 ? m.jsonLd[0] : m.jsonLd);
      document.head.appendChild(s);
    }
  }, [pathname, search, ready]);

  return null;
};
