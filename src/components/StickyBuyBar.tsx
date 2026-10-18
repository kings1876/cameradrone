import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product;
  quote: boolean;
  /** Element holding the main buy buttons; the bar shows whenever it is off screen and the page is scrolled. */
  watch: React.RefObject<HTMLElement | null>;
  onAdd: (p: Product) => void;
}

/** Mobile-only bottom bar that keeps price and the main action in reach on long product pages. */
export const StickyBuyBar: React.FC<Props> = ({ product, quote, watch, onAdd }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = watch.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    let visible = true;
    const update = () => setShow(!visible && window.scrollY > 300);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      update();
    }, { threshold: 0 });
    io.observe(el);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [watch, product.slug]);

  useEffect(() => {
    if (show) document.documentElement.setAttribute('data-stickybar', '1');
    else document.documentElement.removeAttribute('data-stickybar');
    return () => document.documentElement.removeAttribute('data-stickybar');
  }, [show]);

  return (
    <div
      aria-hidden={!show}
      className={`sm:hidden fixed inset-x-0 bottom-0 z-30 bg-[#0b0f17]/95 backdrop-blur border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 transition-transform duration-200 ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="min-w-0">
        <p className="text-[11px] text-slate-400 truncate">{product.name}</p>
        <p className="text-base font-black text-white font-display">
          ${product.price.toLocaleString()} <span className="text-[11px] font-semibold text-slate-400">AUD</span>
        </p>
      </div>
      {quote ? (
        <Link
          to={`/quote?product=${encodeURIComponent(product.slug)}`}
          tabIndex={show ? 0 : -1}
          className="shrink-0 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg whitespace-nowrap"
        >
          Get a quote
        </Link>
      ) : (
        <button
          type="button"
          tabIndex={show ? 0 : -1}
          disabled={!product.inStock}
          onClick={() => onAdd(product)}
          className="shrink-0 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 rounded-lg whitespace-nowrap flex items-center gap-1.5"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to bag</span>
        </button>
      )}
    </div>
  );
};
