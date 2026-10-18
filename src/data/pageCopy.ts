import { CATEGORIES, PRODUCTS } from './products';
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

const CATEGORY_NOTES: Record<string, string> = {
  'camera-drones':
    'How to choose: sub-250 g Mini and Lito models suit travel and beginners, the Air and Mavic ranges add larger sensors and longer flight time, and the Avata and Neo lines are built for FPV and quick social video. Every listing shows the controller included in the kit so you can compare like with like.',
  'enterprise-drones':
    'How to choose: Matrice aircraft carry interchangeable payloads for inspection, mapping and public safety, Mavic 3 Enterprise and Thermal suit portable surveying, and Dock systems automate repeat missions. Enterprise aircraft are quoted, so send a quote request with your use case and we will confirm the right combo, accessories and delivery.',
  'cameras-sensors':
    'How to choose: payload compatibility depends on your aircraft, so tell us which drone you fly. Zenmuse and Livox payloads cover thermal, zoom, mapping and LiDAR work, while MicaSense, Agrowing and SlantRange sensors measure crop health. Send a quote request and we will confirm mounting, firmware and software before you order.',
  'spraying-drones':
    'How to choose: match tank capacity and spray width to the size of your property, and budget for batteries, a charger and a generator. Agras aircraft suit large paddocks and orchards, while smaller sprayers suit tighter blocks. Prices cover the aircraft only, so request a quote that bundles the extras you need.',
  batteries:
    'How to choose: always match a battery, charging hub, propeller set or filter to the exact aircraft model named on the product page, because parts for one family are not always interchangeable. Genuine DJI parts keep flight time, balance and safety features intact.'
};

/** Keyword paragraphs for a category or subcategory page: keyword sentence, buying notes and a product summary. */
export function seoParagraphs(categoryId?: string, sub?: string): string[] {
  const cat = CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return [];
  const kw = (sub && SUBCATEGORY_KEYWORDS[sub]) || CATEGORY_KEYWORDS[cat.id];
  const out: string[] = [];
  if (kw) {
    const label = sub && SUBCATEGORY_KEYWORDS[sub] ? `our ${sub} range` : `our ${cat.name} range`;
    out.push(`Shoppers searching for ${kw.primary} will find ${label} here with Australian pricing. Related searches include ${list(kw.supporting)}, and every product page lists specifications and compatible accessories.`);
  }
  if (CATEGORY_NOTES[cat.id]) out.push(CATEGORY_NOTES[cat.id]);
  const items = PRODUCTS.filter(p => p.category === cat.id && (!sub || p.subcategory === sub));
  if (items.length) {
    const prices = items.map(p => p.price);
    const names = items.slice(0, 6).map(p => `${p.name} (A$${p.price.toLocaleString('en-AU')})`);
    out.push(`${sub ?? cat.name} currently lists ${items.length} ${items.length === 1 ? 'product' : 'products'} from A$${Math.min(...prices).toLocaleString('en-AU')} to A$${Math.max(...prices).toLocaleString('en-AU')}, including ${list(names)}. Free shipping applies to every order in Australia, and quoted products include set-up advice.`);
  }
  return out;
}

export const PAGE_EXTRA: Record<'about' | 'contact' | 'quote', string> = {
  about:
    'Drones for Sale is operated under ABN 91 658 710 173 and supplies genuine drones and accessories to Australian creators, surveyors and farmers. Consumer drones and accessories can be bought online with free shipping Australia-wide, while enterprise, sensor and spraying products are supplied by quote with advice on set-up and CASA requirements. Our Australian stock carries local consumer guarantees. Customers buy from us for genuine stock, AUD pricing with free express shipping Australia-wide, a 10% discount for cryptocurrency payments, 30-day change-of-mind returns on unopened hardware, and specialists who can advise on CASA rules, payloads and set-up.',
  contact:
    'Use the contact form for product advice, order questions and quote requests. Include your drone model, your location and what you want to achieve so a specialist can reply with the right options, usually within one business day. Quick answers: delivery is free to every Australian address, capital city orders typically arrive within 1 to 2 business days and regional and Western Australian orders within 2 to 4 business days, and unopened hardware can be returned within 30 days. The Shipping Policy and Refund Policy have the full details.',
  quote:
    'How quotes work: choose a product or describe what you need, add your quantity, timeline, location and CASA ReOC status, and submit the form. A specialist replies with pricing, availability and delivery details, usually within one business day. Quotes are free, there is no obligation, and no payment is taken on this form. Volume and reseller pricing is available for fleets, farms and survey businesses. What to include: the aircraft you fly or plan to buy, the payload or accessories you need, how many units, where they will be delivered and when you need them. Popular quote requests include DJI Matrice and Mavic 3 Enterprise aircraft, Zenmuse thermal and LiDAR payloads, Agras spraying drones and Dock systems, while consumer drones and batteries can be bought directly in the shop.'
};

/** Closing keyword paragraph for a blog post, built from its keyword set. */
export function blogParagraph(slug: string): string | null {
  const kw = BLOG_KEYWORDS[slug];
  if (!kw) return null;
  return `If you are comparing options for ${kw.primary}, this guide connects to related searches such as ${list(kw.supporting)}. Browse the linked product categories for Australian pricing, specifications and quotes.`;
}

type NoteProduct = { name: string; category: string; subcategory?: string };

const noteKind = (p: NoteProduct): string => {
  const sub = p.subcategory ?? '';
  if (sub === 'Drone Batteries') return 'battery';
  if (sub === 'Charging Hubs') return 'charger';
  if (sub === 'Propellers & Guards') return 'props';
  if (sub === 'Filters & Lenses') return 'optics';
  if (sub === 'Controllers & Goggles') return 'controls';
  if (sub === 'Bags & Covers') return 'bag';
  if (p.category === 'camera-drones') return 'aircraft';
  if (p.category === 'cameras-sensors') return 'payload';
  if (p.category === 'spraying-drones') return sub === 'Spraying Drone Accessories' ? 'spray-part' : 'spray';
  return sub === 'Enterprise Accessories' || sub === 'Enterprise Software' ? 'ent-part' : 'ent';
};

/** Practical buying notes and delivery terms shown under every product description. */
export function productNotes(p: NoteProduct): string[] {
  const n = p.name;
  const kind = noteKind(p);
  const advice: Record<string, string> = {
    battery: `Match the ${n} to the aircraft named in its title, because intelligent flight batteries are built for specific models. Keep spare batteries charged before a flying day, store them in a cool, dry place and follow the manufacturer's battery safety guidance.`,
    charger: `Check that the ${n} lists your battery model before you order. Charge batteries on a hard, non-flammable surface, never leave them charging unattended, and use the hub only with the batteries and power supply it is designed for.`,
    props: `Replace propellers as a matching set and check them for chips, cracks or bends before every flight. The ${n} is listed for the aircraft named in its title, so confirm your model first and keep a spare set in your kit.`,
    optics: `Check that the ${n} is listed for your exact aircraft and camera before you order. Clean the lens or filter surface with a microfibre cloth before fitting, and carry it in a protective case so it stays free of scratches.`,
    controls: `Check which aircraft and kit the ${n} pairs with before you order. After unboxing, update the aircraft, battery and controller firmware together, and confirm the link works before taking it to a flying site.`,
    bag: `The ${n} protects your drone and accessories in transport. Check the listed dimensions and compatible models against your kit before you order so batteries, propellers and the controller all fit.`,
    aircraft: `Before your first flight with the ${n}, update the firmware, charge every battery and read the CASA guidance for your aircraft weight class and local airspace. Some uses require registration or accreditation, so check the rules before you fly.`,
    payload: `Payload compatibility depends on your aircraft, mount and firmware, so tell us which drone you fly before you order the ${n}. We confirm mounting, power, software and licence needs in the quote so the payload works on day one.`,
    spray: `Match the ${n} to the size of your property, and budget for batteries, a charger, a generator and training. Commercial spraying has CASA and chemical-use requirements, so confirm your accreditation and local rules before operating.`,
    'spray-part': `Confirm that the ${n} is listed for your exact spraying aircraft before you order. We can advise on the right battery, charger, nozzle or spreader combination so you are not left waiting on a missing part in the spraying season.`,
    ent: `The ${n} is supplied by quote so we can confirm the combo, payloads, batteries, software and training that suit your operation. Commercial flying may require CASA accreditation, so tell us your use case and whether you hold a ReOC.`,
    'ent-part': `Confirm that the ${n} is listed for your aircraft and payload before you order. Send a quote request with your drone model and use case and a specialist will confirm compatibility, availability and delivery.`
  };
  const quoted = ['payload', 'spray', 'spray-part', 'ent', 'ent-part'].includes(kind);
  const delivery = quoted
    ? `Quoted products ship free to any Australian address with signature-on-delivery tracking and transit insurance. Request a quote for pricing, availability and delivery. Unopened hardware can be returned within 30 days, and Australian Consumer Law guarantees apply.`
    : `Every order ships free to any Australian address by express courier with signature-on-delivery tracking and transit insurance. Unopened hardware can be returned within 30 days, and Australian Consumer Law guarantees apply. Contact us if you need help choosing the right kit.`;
  return [advice[kind], delivery];
}
