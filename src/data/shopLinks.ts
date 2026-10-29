// Keyword-anchored links to category and subcategory pages, so home, guides and every article point search
// engines straight at the ranges we want ranked. Built from the live catalogue, so it never lists an empty range.
import { CATEGORIES, PRODUCTS } from './products';
import { categoryPath } from '../routes';

export interface RangeLink {
  path: string;
  label: string;
}

export interface RangeGroup {
  category: RangeLink;
  subs: RangeLink[];
}

const catLink = (id: string, name: string): RangeLink => ({ path: categoryPath(id), label: `${name} for sale in Australia` });
const subLink = (id: string, sub: string): RangeLink => ({ path: categoryPath(id, sub), label: `${sub} for sale` });

/** Every category with the subcategories that have products. */
export function allRanges(): RangeGroup[] {
  return CATEGORIES.map(c => ({
    category: catLink(c.id, c.name),
    subs: c.subcategories.filter(s => PRODUCTS.some(p => p.category === c.id && p.subcategory === s)).map(s => subLink(c.id, s))
  }));
}

/** The ranges the given products belong to: each subcategory, then its category, de-duplicated. */
export function rangesForProducts(slugs: string[]): RangeLink[] {
  const out: RangeLink[] = [];
  const seen = new Set<string>();
  const add = (l: RangeLink) => {
    if (!seen.has(l.path)) {
      seen.add(l.path);
      out.push(l);
    }
  };
  for (const slug of slugs) {
    const p = PRODUCTS.find(x => x.slug === slug);
    if (!p) continue;
    add(subLink(p.category, p.subcategory));
    const c = CATEGORIES.find(x => x.id === p.category);
    if (c) add(catLink(c.id, c.name));
  }
  return out;
}
