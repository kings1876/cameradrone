import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BLOG_POSTS, FAQ_LIST } from '../data/content';
import { SITE_URL, SITE_NAME } from '../seo';
import { PRODUCT_KEYWORDS, CATEGORY_KEYWORDS, SUBCATEGORY_KEYWORDS, PAGE_KEYWORDS } from '../data/keywords';

interface Meta {
  title: string;
  description: string;
  noindex?: boolean;
  image?: string;
  type?: 'website' | 'product' | 'article';
  jsonLd?: object[];
}

const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…');
const fit = (...c: string[]) => c.find(s => s.length <= 62) ?? c[c.length - 1];
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const abs = (p: string) => (p.startsWith('http') ? p : SITE_URL + p);

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

function metaFor(pathname: string, search: string): Meta {
  const params = new URLSearchParams(search);

  if (pathname === '/') {
    return {
      title: 'Drones for Sale Australia | DJI, Enterprise & Spraying Drones',
      description:
        'Drone sales in Australia: DJI camera drones on sale, commercial drones for sale, Matrice enterprise and thermal drones, and agricultural spray drones. Australian stock, free shipping.',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL + '/'
        }
      ]
    };
  }

  if (pathname === '/shop') {
    const cat = CATEGORIES.find(c => c.id === params.get('category'));
    const sub = params.get('sub');
    if (cat) {
      const validSub = sub && cat.subcategories.includes(sub) ? sub : null;
      const label = validSub ?? cat.name;
      const kw = (validSub && SUBCATEGORY_KEYWORDS[validSub]) || CATEGORY_KEYWORDS[cat.id];
      return {
        title: fit(`${label} for Sale in Australia | ${SITE_NAME}`, `${label} for Sale in Australia`, label),
        description: clip(
          `Shop ${label} in Australia: ${kw ? `${kw.primary}, ${kw.supporting.slice(0, 2).join(', ')}` : cat.name}. Australian stock, free nationwide shipping. Compare models and prices.`,
          158
        ),
        jsonLd: [
          crumbs([
            { name: 'Home', path: '/' },
            { name: 'Shop', path: '/shop' },
            { name: cat.name, path: `/shop?category=${cat.id}` }
          ])
        ]
      };
    }
    return {
      title: 'Drone Sales Australia: Shop Drones & Sensors | Drones for Sale',
      description:
        'Drone sales in Australia: drones on sale, DJI camera drones, commercial drones for sale, thermal and multispectral sensors, spray drones, batteries and accessories.'
    };
  }

  if (pathname.startsWith('/product/')) {
    const slug = pathname.replace('/product/', '').replace(/\/$/, '');
    const p = PRODUCTS.find(x => x.slug === slug);
    if (!p) return { title: `Product not found | ${SITE_NAME}`, description: 'This product could not be found.', noindex: true };
    const image = p.images?.[0] ? abs(p.images[0]) : undefined;
    const url = abs(`/product/${p.slug}`);
    const kw = PRODUCT_KEYWORDS[p.slug];
    return {
      title: fit(`${p.name} for Sale in Australia | ${SITE_NAME}`, `${p.name} for Sale Australia | ${SITE_NAME}`, `${p.name} | ${SITE_NAME}`, p.name),
      description: clip(
        `${p.shortDescription} ${kw ? `${cap(kw.primary)}, ${kw.supporting.slice(0, 2).join(', ')}. ` : ''}$${p.price.toLocaleString()} AUD, Australian stock, free shipping.`,
        158
      ),
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
          url,
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'AUD',
            price: p.price,
            availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: { '@type': 'Organization', name: SITE_NAME }
          }
        },
        crumbs([
          { name: 'Home', path: '/' },
          { name: 'Shop', path: '/shop' },
          { name: p.categoryName, path: `/shop?category=${p.category}` },
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
      title: fit(`${post.title} | ${SITE_NAME}`, post.title),
      description: clip(post.excerpt, 158),
      image: post.image ? abs(post.image) : undefined,
      type: 'article',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          ...(post.image ? { image: abs(post.image) } : {}),
          author: { '@type': 'Organization', name: SITE_NAME },
          publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: abs('/logo.png') } },
          mainEntityOfPage: abs(`/blog/${post.slug}`)
        }
      ]
    };
  }

  if (pathname === '/faq') {
    return {
      title: 'Register a Drone in Australia: CASA FAQ | Drones for Sale',
      description: 'How to register a drone in Australia, CASA flight rules, shipping, payment and warranty answers when buying a drone.',
      jsonLd: [
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
      description: 'Drones for Sale supplies DJI camera drones, enterprise and thermal drones, agricultural spraying drones and accessories across Australia.'
    };
  }

  if (pathname === '/quote') {
    return {
      title: 'Request a Quote: Commercial, Thermal & Spray Drones',
      description:
        'Request a quote on commercial drones, thermal and multispectral sensors, LiDAR payloads and agricultural spray drones. Australian stock, volume and reseller pricing.'
    };
  }

  if (pathname === '/contact') {
    return {
      title: 'Contact Drones for Sale | Drone Enquiries',
      description: 'Contact our team for help choosing a drone, enterprise payload or spraying system, or to confirm stock and delivery to your location.'
    };
  }

  if (['/shipping', '/refund', '/privacy', '/terms'].includes(pathname)) {
    const names: Record<string, string> = {
      '/shipping': 'Shipping Policy',
      '/refund': 'Refund Policy',
      '/privacy': 'Privacy Notice',
      '/terms': 'Terms of Service'
    };
    return {
      title: `${names[pathname]} | ${SITE_NAME}`,
      description: `${names[pathname]} for Drones for Sale.`
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

  useEffect(() => {
    const m = metaFor(pathname, search);
    const path = pathname.replace(/\/$/, '') || '/';
    const keepQuery = path === '/shop' && new URLSearchParams(search).has('category');
    const canonical = abs(path + (keepQuery ? search : ''));
    const image = m.image ?? abs('/logo.png');

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
  }, [pathname, search]);

  return null;
};
