import { PRODUCTS } from './products';

// Unique, factual intro copy for each category page. Subcategory pages combine the category lead with live product data.
export const CATEGORY_COPY: Record<string, { lead: string; why: string }> = {
  'camera-drones': {
    lead:
      'Shop DJI camera drones in Australia, from sub-250 g Mini and Lito models and the Neo and Flip vlogging drones to the Air 3S, the Mavic 4 Pro, Avata FPV drones and the Inspire 3 cinema aircraft.',
    why:
      'Every price is in Australian dollars with free courier shipping Australia-wide, and each product page lists specifications, what is in the box and related accessories.'
  },
  'enterprise-drones': {
    lead:
      'Commercial and enterprise drones for sale in Australia: DJI Matrice 4, 400 and 30 series, Mavic 3 Enterprise and Thermal aircraft, Dock 2 and Dock 3 drone-in-a-box systems, FlyCart delivery drones and Autel and FLIR options.',
    why:
      'These systems are quoted with training, Care coverage and accessories, so use the Request a Quote form for fleet or volume pricing.'
  },
  'cameras-sensors': {
    lead:
      'Drone cameras and sensors for inspection, mapping and agriculture: DJI Zenmuse H30, L2, L3 and P1 payloads, FLIR thermal cameras, MicaSense, Agrowing and SlantRange multispectral sensors, Sequoia integration kits and Livox LiDAR.',
    why:
      'Compatibility depends on your aircraft, so request a quote and we will confirm the right payload and mounting before you order.'
  },
  'spraying-drones': {
    lead:
      'Agricultural spraying drones for Australian farms: DJI Agras T100, T70P, T50 and T25P, the XAG P30 and BROUAV D30L, D52L and D72L sprayers, plus Agras batteries, chargers, spreaders and nozzle packages.',
    why:
      'Pricing includes the aircraft only, so ask for a quote that bundles batteries, a charger and set-up for your property.'
  },
  batteries: {
    lead:
      'Drone batteries, charging hubs, propellers, controllers, goggles, filters, lenses and bags for DJI Mini, Air, Mavic, Neo, Flip, Lito, Avata and Matrice aircraft.',
    why:
      'All items are genuine DJI parts and accessories, priced in AUD and listed with the aircraft they fit.'
  }
};

export function categoryIntro(categoryId: string | undefined, sub?: string): { lead: string; why: string } | null {
  if (!categoryId) return null;
  const base = CATEGORY_COPY[categoryId];
  if (!base) return null;
  if (!sub) return base;
  const items = PRODUCTS.filter(p => p.category === categoryId && p.subcategory === sub);
  if (!items.length) return base;
  const prices = items.map(p => p.price);
  const min = Math.min(...prices).toLocaleString();
  const max = Math.max(...prices).toLocaleString();
  const names = items.slice(0, 3).map(p => p.name).join(', ');
  return {
    lead: `Browse ${items.length} ${sub} products in Australia, from $${min} to $${max} AUD, including ${names}.`,
    why: base.why
  };
}
