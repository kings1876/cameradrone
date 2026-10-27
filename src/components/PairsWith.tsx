import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/content';

export interface PairItem {
  href: string;
  label: string;
}

/** Resolve slugs from productFit.ts to links; slugs that no longer exist are dropped rather than breaking the page. */
export function pairLinks(works?: string[], readNext?: string[]): { products: PairItem[]; guides: PairItem[] } {
  const products = (works ?? []).flatMap(slug => {
    const p = PRODUCTS.find(x => x.slug === slug);
    return p ? [{ href: `/product/${p.slug}`, label: `${p.name} – $${p.price.toLocaleString()} AUD` }] : [];
  });
  const guides = (readNext ?? []).flatMap(slug => {
    const b = BLOG_POSTS.find(x => x.slug === slug);
    return b ? [{ href: `/blog/${b.slug}`, label: b.title }] : [];
  });
  return { products, guides };
}

interface PairsWithProps {
  works?: string[];
  readNext?: string[];
}

export const PairsWith: React.FC<PairsWithProps> = ({ works, readNext }) => {
  const { products, guides } = pairLinks(works, readNext);
  if (!products.length && !guides.length) return null;
  return (
    <div className="space-y-3">
      {products.length > 0 && (
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Fits and pairs with</h2>
          <ul className="space-y-1 text-sm">
            {products.map(l => (
              <li key={l.href}>
                <Link to={l.href} className="text-amber-400 hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {guides.length > 0 && (
        <div className="space-y-1.5">
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Read next</h2>
          <ul className="space-y-1 text-sm">
            {guides.map(l => (
              <li key={l.href}>
                <Link to={l.href} className="text-amber-400 hover:underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
