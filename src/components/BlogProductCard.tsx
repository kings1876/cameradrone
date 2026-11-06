import React from 'react';
import { Link } from 'react-router-dom';
import { Check, FileText, ShoppingBag, Zap } from 'lucide-react';
import { Product } from '../types';
import { isQuoteProduct } from '../pages/QuotePage';
import { lead } from '../lib/analytics';

interface BlogProductCardProps {
  product: Product;
  postSlug: string;
  added: boolean;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

const primary =
  'w-full inline-flex items-center justify-center gap-1.5 px-2 py-2 text-[11px] font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors';
const secondary =
  'w-full inline-flex items-center justify-center gap-1.5 px-2 py-2 text-[11px] font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed rounded-lg border border-slate-700 transition-colors';

/** A product in a blog post with the two actions a reader needs: buy it, or ask for a quote on it. */
export const BlogProductCard: React.FC<BlogProductCardProps> = ({ product: p, postSlug, added, onAddToCart, onBuyNow }) => {
  const quote = isQuoteProduct(p.category);
  const track = (action: string) => lead('blog_product_action', { action, product: p.slug, post: postSlug });

  const addToCart = (
    <button
      type="button"
      disabled={!p.inStock}
      onClick={() => {
        track('add_to_cart');
        onAddToCart(p);
      }}
      className={secondary}
    >
      {added ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ShoppingBag className="w-3.5 h-3.5" />}
      <span>{added ? 'Added to cart' : 'Add to cart'}</span>
    </button>
  );

  return (
    <div className="p-3.5 bg-[#0f172a] rounded-xl border border-slate-800 hover:border-amber-500/50 transition-colors flex flex-col gap-3">
      <Link to={`/product/${p.slug}`} className="block group">
        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">{p.brand}</span>
        <h3 className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5 line-clamp-2">{p.name}</h3>
        <div className="flex justify-between items-baseline mt-2 text-xs font-mono">
          <span className="text-white font-bold">${p.price.toLocaleString()}</span>
          <span className="text-emerald-400 text-[10px]">Free AU Delivery</span>
        </div>
      </Link>

      <div className="mt-auto grid gap-2">
        {quote ? (
          <>
            <Link
              to={`/quote?product=${encodeURIComponent(p.slug)}`}
              onClick={() => track('request_quote')}
              className={primary}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request a quote</span>
            </Link>
            {addToCart}
          </>
        ) : (
          <>
            <button
              type="button"
              disabled={!p.inStock}
              onClick={() => {
                track('buy_now');
                onBuyNow(p);
              }}
              className={primary}
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Buy now</span>
            </button>
            {addToCart}
          </>
        )}
      </div>
    </div>
  );
};
