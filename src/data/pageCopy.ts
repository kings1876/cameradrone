import { CATEGORIES, PRODUCTS } from './products';
import { CATEGORY_KEYWORDS, SUBCATEGORY_KEYWORDS, BLOG_KEYWORDS } from './keywords';

// Keyword-aware copy for the pages that are not products. Every primary and supporting keyword for the page
// (keywords.ts PAGE_KEYWORDS) appears in the sentence so search engines and shoppers see the same wording.
export const PAGE_COPY: Record<'home' | 'shop' | 'blog' | 'faq' | 'about' | 'contact', string> = {
  home:
    'Looking for a drone for sale in Australia? Drones for Sale lists DJI drone sales from the Mini 5 Pro to the Matrice 4, with Australian pricing on every product. Browse drones on sale and each drone sale on popular models, commercial drones for sale for mapping and inspection, and UAV for sale Australia options such as thermal and spraying aircraft. Every drone camera, battery and accessory page lists specifications and what is in the box.',
  shop:
    'Drone sales Australia-wide start here: browse drones on sale, find a drone for sale in every category, and compare commercial drones for sale with the camera drones Australia pilots use for filming. Pair any aircraft with the drone accessories Australia buyers need, from batteries and charging hubs to propellers and filters. Start with affordable drones or a foldable drone, and watch for each drones sale on popular models.',
  blog:
    'Wondering what the best drones for beginners Australia buyers can choose are? These guides cover drones for beginners, top rated drones for beginners by budget, and plain-English CASA rules. Use them alongside DJI Mini 3 reviews, a DJI Neo review and a DJI Mini 5 Pro review from independent sources to compare models before you buy. Looking for affordable drones? Start with a DJI Mini 4 Pro review and the DJI Neo reviews, then compare prices here.',
  faq:
    'Register drone Australia guide: this page explains how to register a drone with CASA, what changes when you register drones for commercial work, and what registered drones need to display. If you are looking for a drone licence Perth or drone licence Brisbane training provider, check the list of approved providers on the CASA website. The guide also covers registering drones, the drone registering steps and which drones to be registered.',
  about:
    'Among UAV companies Australia businesses and farmers can buy from, Drones for Sale is an online retailer focused on drone sales of camera, enterprise and agricultural aircraft. We supply DJI enterprise drones and the commercial drones Australia operators use for mapping, inspection and spraying, with local pricing and quotes.',
  contact:
    'Searching for drone repairs near me, drone repair near me or a DJI repair near me? We are an online retailer and do not list repair services, so message us with your model and the fault and we will point you to the right replacement part. For warranty work on DJI products, use the DJI Australia official service centre; if you need drone repairs Perth, the DJI service channels can advise. We also answer questions on drone repairs, drone repair options and where to find drone parts.'
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
  const others = cat.subcategories.filter(x => x !== sub);
  if (others.length) out.push(`Other ranges in ${cat.name}: ${list(others)}. Use the category links above to compare them, or return to the full shop to browse every product.`);
  out.push('Every product in this range ships free to any Australian address with signature-on-delivery tracking and transit insurance, and unopened hardware can be returned within 30 days. If you need help choosing, use the Contact page or request a quote and a specialist will recommend the right option.');
  return out;
}

export const PAGE_EXTRA: Record<'home' | 'blog' | 'about' | 'contact' | 'quote', string> = {
  home:
    'Browse five categories: camera drones such as the DJI Mini, Air, Mavic and Inspire ranges, enterprise and thermal aircraft including Matrice, Mavic 3 Enterprise and Dock systems, cameras and sensors, agricultural spraying drones, and batteries and accessories. Consumer products can be bought online with free shipping across Australia, while enterprise, sensor and spraying products are quoted by a specialist who can confirm the right kit, accessories and delivery. Every product page lists specifications, what is in the box and related accessories, and the FAQ answers common questions on CASA rules, shipping, warranty and crypto payments, including the 10% cryptocurrency discount. Shoppers on a budget can start with affordable drones, and each drones sale listing shows the full price in AUD.',
  blog:
    'Each guide is written for Australian conditions: CASA rules, pricing in AUD and what to check before you buy. Start with the buyer guide to DJI drones, read the enterprise guide for Matrice and Mavic 3 Enterprise aircraft, or open the agricultural guide for spraying drones, tank sizes and multispectral crop monitoring. Every guide links to the matching product category. New guides are added as we cover more models and regulations, so check back before a major purchase. If a guide leaves a question unanswered, send it through the Contact page and a specialist will help you choose.',
  about:
    'Drones for Sale is operated under ABN 91 658 710 173 and supplies genuine drones and accessories to Australian creators, surveyors and farmers. Consumer drones and accessories can be bought online with free shipping Australia-wide, while enterprise, sensor and spraying products are supplied by quote with advice on set-up and CASA requirements. Our Australian stock carries local consumer guarantees. The catalogue spans consumer camera drones, enterprise and thermal aircraft, cameras and sensors, agricultural spraying drones, and batteries and accessories, with specifications, what is in the box and Australian pricing on every product page. Customers buy from us for genuine stock, AUD pricing with free express shipping Australia-wide, a 10% discount for cryptocurrency payments, 30-day change-of-mind returns on unopened hardware, and specialists who can advise on CASA rules, payloads and set-up. Whether you are a first-time pilot choosing between the DJI Mini and Air ranges, a surveyor comparing Matrice and Mavic 3 Enterprise aircraft, or a farmer budgeting for an Agras sprayer, our specialists can talk through payloads, batteries, software and CASA requirements before you order. Contact us, request a quote for enterprise products, or browse the shop and buy consumer drones online.',
  contact:
    'Use the contact form for product advice, order questions and quote requests. Include your drone model, your location and what you want to achieve so a specialist can reply with the right options, usually within one business day. Quick answers: delivery is free to every Australian address, capital city orders typically arrive within 1 to 2 business days and regional and Western Australian orders within 2 to 4 business days, and unopened hardware can be returned within 30 days. The Shipping Policy and Refund Policy have the full details. Before you write, check the FAQ for CASA registration, shipping and warranty answers and the product page for specifications. For an order you have already placed, include your order number. For commercial enquiries, tell us your use case, how many aircraft you need and your timeline, or use the Request a Quote page. Typical questions we answer include which DJI drone suits your budget and skill level, whether a payload or accessory fits your aircraft, how quotes, delivery and returns work, and what CASA expects from commercial pilots. We reply by email, so please check your spam folder if you do not hear back.',
  quote:
    'How quotes work: choose a product or describe what you need, add your quantity, timeline, location and CASA ReOC status, and submit the form. A specialist replies with pricing, availability and delivery details, usually within one business day. Quotes are free, there is no obligation, and no payment is taken on this form. Volume and reseller pricing is available for fleets, farms and survey businesses. What to include: the aircraft you fly or plan to buy, the payload or accessories you need, how many units, where they will be delivered and when you need them. Popular quote requests include DJI Matrice and Mavic 3 Enterprise aircraft, Zenmuse thermal and LiDAR payloads, Agras spraying drones and Dock systems, while consumer drones and batteries can be bought directly in the shop. Tips for a faster reply: include your postcode so we can confirm delivery, say whether you need training or set-up help, and mention any budget range or deadline. If you are unsure which product fits, choose the not listed option and describe the job, such as thermal roof inspections, crop spraying or LiDAR mapping, and we will recommend options. We review each request, confirm availability and email you a quote with pricing in AUD, delivery details and any accessories we recommend. Enterprise quotes often include batteries, charging hubs, carry cases, software licences and training, so mention anything you already own. Resellers and fleet buyers can list several products in the notes box, and farms can tell us the property size so we can recommend a sprayer, batteries and a generator. Your details are used only to reply to your request, as set out in our Privacy Notice.'
};

/** Closing keyword paragraph for a blog post, built from its keyword set. */
export function blogParagraph(slug: string): string | null {
  const kw = BLOG_KEYWORDS[slug];
  if (!kw) return null;
  return `If you are comparing options for ${kw.primary}, this guide connects to related searches such as ${list(kw.supporting)}. Browse the linked product categories for Australian pricing, specifications and quotes. Prices are in AUD with free shipping Australia-wide, enterprise and spraying products are quoted, and our specialists can recommend the right aircraft, batteries and accessories for your property or project.`;
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
