import { CATEGORIES, PRODUCTS } from './products';
import { categoryPath } from '../routes';
import { Product } from '../types';

export const ALL_PRODUCTS_PATH = '/all-products';
export const ALL_PRODUCTS_H1 = 'All Drones & Accessories Available in Australia';
export const ALL_PRODUCTS_TITLE = 'All Drones & Accessories: Product List | Drones for Sale';
export const ALL_PRODUCTS_DESCRIPTION =
  'Browse every drone, camera, sensor, battery and accessory we sell in Australia, grouped by category with AUD prices and free shipping Australia-wide.';

export interface ProductGroup {
  id: string;
  name: string;
  path: string;
  subs: { name: string; path: string; products: Product[] }[];
}

/** Every product, grouped by category and subcategory, so each product page has a plain crawlable link. */
export function allProductGroups(): ProductGroup[] {
  return CATEGORIES.map(c => ({
    id: c.id,
    name: c.name,
    path: categoryPath(c.id),
    subs: c.subcategories
      .map(s => ({ name: s, path: categoryPath(c.id, s), products: PRODUCTS.filter(p => p.category === c.id && p.subcategory === s) }))
      .filter(s => s.products.length > 0)
  }));
}

export function allProductsParagraphs(): string[] {
  const groups = allProductGroups();
  const paras = [
    `This page lists all ${PRODUCTS.length} drones, cameras, sensors, batteries and accessories that Drones for Sale supplies to customers across Australia. Every price is in Australian dollars, every order ships free by express courier with signature on delivery, and unopened hardware can be returned within 30 days.`,
    'Use it as a complete index when you know the product name or need to compare everything in a range. If you would rather browse with filters, start from the shop page, or read one of our buying guides for help choosing between models before you order.'
  ];
  for (const g of groups) {
    const count = g.subs.reduce((n, s) => n + s.products.length, 0);
    paras.push(`${g.name}: ${count} products across ${g.subs.length} ranges, from ${g.subs.slice(0, 3).map(s => s.name).join(', ')}${g.subs.length > 3 ? ' and more' : ''}.`);
  }
  paras.push('You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Our FAQ explains payment, CASA registration rules, shipping times and warranty, and each product page lists the compatible aircraft so you can match batteries, propellers, controllers and payloads to the drone you fly.');
  paras.push('Cannot find what you need, or want advice on compatibility? Send us your aircraft and use case through the quote form and a specialist will confirm the right kit.');
  return paras;
}
