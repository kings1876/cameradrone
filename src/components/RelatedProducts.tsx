import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

const lead = (name: string) => name.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/s+/).filter(Boolean);
const sharedLead = (a: string, b: string) => {
  const x = lead(a);
  const y = lead(b);
  let n = 0;
  while (n < x.length && n < y.length && x[n] === y[n]) n += 1;
  return n;
};

/**
 * Related products: same model family first (shared leading words, e.g. every Avata 2 accessory), then the nearest
 * neighbours in the subcategory. Choosing by position, not just the first N, spreads internal links across every
 * product so none is left without an inbound link from a sibling page.
 */
export function relatedFor(product: Product, limit = 6): Product[] {
  const same = PRODUCTS.filter(p => p.category === product.category && p.subcategory === product.subcategory);
  const at = same.findIndex(p => p.slug === product.slug);
  const dist = (p: Product) => {
    const d = Math.abs(same.indexOf(p) - at);
    return Math.min(d, same.length - d);
  };
  const ranked = same
    .filter(p => p.slug !== product.slug)
    .sort((a, b) => sharedLead(product.name, b.name) - sharedLead(product.name, a.name) || dist(a) - dist(b));
  const rest = PRODUCTS.filter(p => p.slug !== product.slug && p.category === product.category && p.subcategory !== product.subcategory);
  return [...ranked, ...rest].slice(0, limit);
}

export const RelatedProducts: React.FC<{ product: Product }> = ({ product }) => {
  const items = relatedFor(product);
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-products" className="space-y-4">
      <h2 id="related-products" className="text-lg font-bold text-white font-display">
        More {product.subcategory} products
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {items.map(p => (
          <li key={p.slug}>
            <Link
              to={`/product/${p.slug}`}
              className="block h-full bg-[#0f172a] border border-slate-800 hover:border-amber-500/60 rounded-xl overflow-hidden transition-colors"
            >
              <div className={`h-28 flex items-center justify-center ${p.images?.length ? 'bg-white p-2' : 'p-2'}`}>
                <ProductImage product={p} size="sm" />
              </div>
              <div className="p-2.5 space-y-1">
                <span className="block text-xs font-semibold text-white line-clamp-2">{p.name}</span>
                <span className="block text-xs text-amber-400 font-mono">${p.price.toLocaleString()} AUD</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
