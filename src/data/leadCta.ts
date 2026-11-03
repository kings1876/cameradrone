// Lead-capture copy for blog posts, shared by the React page and the static prerender so both say the same thing.
// Posts about commercial aircraft and sensors lead with a quote; consumer posts lead with the order form.
import { PRODUCTS } from './products';

const QUOTE_CATEGORIES = new Set(['enterprise-drones', 'cameras-sensors', 'spraying-drones']);

export interface LeadCtaLink {
  to: string;
  label: string;
  primary?: boolean;
}

export interface LeadCtaCopy {
  quote: boolean;
  heading: string;
  text: string;
  links: LeadCtaLink[];
}

export function leadCtaFor(relatedProducts: string[]): LeadCtaCopy {
  const quote = relatedProducts.some(slug => {
    const p = PRODUCTS.find(x => x.slug === slug);
    return !!p && QUOTE_CATEGORIES.has(p.category);
  });
  if (quote) {
    return {
      quote,
      heading: 'Need a price for your project?',
      text: 'Tell us what you need to do and where, and a specialist will recommend the right aircraft and send a written quote. Delivery across Australia is free.',
      links: [
        { to: '/quote', label: 'Request a quote', primary: true },
        { to: '/contact', label: 'Ask a specialist' }
      ]
    };
  }
  return {
    quote,
    heading: 'Ready to buy, or not sure which one?',
    text: 'Order online with free express shipping across Australia, or tell us how you plan to fly and a specialist will recommend a package.',
    links: [
      { to: '/order', label: 'Order online', primary: true },
      { to: '/contact', label: 'Ask a specialist' },
      { to: '/quote', label: 'Request a quote' }
    ]
  };
}
