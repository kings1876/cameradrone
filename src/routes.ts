import { CATEGORIES } from './data/products';
import type { CategoryInfo } from './types';

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** Crawlable category URL: /category/<id> or /category/<id>/<sub-slug>. Falls back to /shop. */
export function categoryPath(categoryId?: string | null, sub?: string | null): string {
  if (!categoryId || categoryId === 'all') return '/shop';
  const cat = CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return '/shop';
  if (sub && cat.subcategories.includes(sub)) return `/category/${cat.id}/${slugify(sub)}`;
  return `/category/${cat.id}`;
}

export function findCategory(categoryId?: string): CategoryInfo | undefined {
  return CATEGORIES.find(c => c.id === categoryId);
}

/** Resolves a subcategory slug (from the URL) back to its display name. */
export function findSubcategory(cat: CategoryInfo | undefined, subSlug?: string): string | undefined {
  if (!cat || !subSlug) return undefined;
  return cat.subcategories.find(s => slugify(s) === subSlug);
}
