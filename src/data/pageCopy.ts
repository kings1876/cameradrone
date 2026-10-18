import { CATEGORIES } from './products';
import { CATEGORY_KEYWORDS, SUBCATEGORY_KEYWORDS, BLOG_KEYWORDS } from './keywords';

// Keyword-aware copy for the pages that are not products. Every primary and supporting keyword for the page
// (keywords.ts PAGE_KEYWORDS) appears in the sentence so search engines and shoppers see the same wording.
export const PAGE_COPY: Record<'home' | 'shop' | 'blog' | 'faq' | 'about' | 'contact', string> = {
  home:
    'Looking for a drone for sale in Australia? Drones for Sale lists DJI drone sales from the Mini 5 Pro to the Matrice 4, with Australian pricing on every product. Browse drones on sale and each drone sale on popular models, commercial drones for sale for mapping and inspection, and UAV for sale Australia options such as thermal and spraying aircraft. Every drone camera, battery and accessory page lists specifications and what is in the box.',
  shop:
    'Drone sales Australia-wide start here: browse drones on sale, find a drone for sale in every category, and compare commercial drones for sale with the camera drones Australia pilots use for filming. Pair any aircraft with the drone accessories Australia buyers need, from batteries and charging hubs to propellers and filters.',
  blog:
    'Wondering what the best drones for beginners Australia buyers can choose are? These guides cover drones for beginners, top rated drones for beginners by budget, and plain-English CASA rules. Use them alongside DJI Mini 3 reviews, a DJI Neo review and a DJI Mini 5 Pro review from independent sources to compare models before you buy.',
  faq:
    'Register drone Australia guide: this page explains how to register a drone with CASA, what changes when you register drones for commercial work, and what registered drones need to display. If you are looking for a drone licence Perth or drone licence Brisbane training provider, check the list of approved providers on the CASA website.',
  about:
    'Among UAV companies Australia businesses and farmers can buy from, Drones for Sale is an online retailer focused on drone sales of camera, enterprise and agricultural aircraft. We supply DJI enterprise drones and the commercial drones Australia operators use for mapping, inspection and spraying, with local pricing and quotes.',
  contact:
    'Searching for drone repairs near me, drone repair near me or a DJI repair near me? We are an online retailer and do not list repair services, so message us with your model and the fault and we will point you to the right replacement part. For warranty work on DJI products, use the DJI Australia official service centre; if you need drone repairs Perth, the DJI service channels can advise.'
};

const list = (a: string[]) => (a.length === 1 ? a[0] : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);

/** Keyword paragraph for a category or subcategory page, built from its keyword set. */
export function seoParagraph(categoryId?: string, sub?: string): string | null {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return null;
  const kw = (sub && SUBCATEGORY_KEYWORDS[sub]) || CATEGORY_KEYWORDS[cat.id];
  if (!kw) return null;
  const label = sub && SUBCATEGORY_KEYWORDS[sub] ? `our ${sub} range` : `our ${cat.name} range`;
  return `Shoppers searching for ${kw.primary} will find ${label} here with Australian pricing. Related searches include ${list(kw.supporting)}, and every product page lists specifications and compatible accessories.`;
}

/** Closing keyword paragraph for a blog post, built from its keyword set. */
export function blogParagraph(slug: string): string | null {
  const kw = BLOG_KEYWORDS[slug];
  if (!kw) return null;
  return `If you are comparing options for ${kw.primary}, this guide connects to related searches such as ${list(kw.supporting)}. Browse the linked product categories for Australian pricing, specifications and quotes.`;
}
