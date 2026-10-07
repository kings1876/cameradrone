import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isAdded?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  isAdded = false
}) => {
  return (
    <div className="group relative bg-[#0f172a] rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">
      {/* Top Banner Tag */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
        {product.badge && (
          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-xs">
            {product.badge}
          </span>
        )}
      </div>

      {/* Free Shipping Callout */}
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-1.5 py-0.5 rounded">
          Free Shipping
        </span>
      </div>

      {/* Product Image Stage with Direct Canonical Link */}
      <Link
        to={`/product/${product.slug}`}
        className={`relative w-full h-56 sm:h-60 flex items-center justify-center border-b border-slate-800/80 transition-colors ${
          product.images?.length ? 'bg-white p-3' : 'bg-gradient-to-b from-[#131d33] to-[#0c1322] p-4 group-hover:from-[#17233d]'
        }`}
      >
        <ProductImage product={product} size="md" className="group-hover:scale-105 transition-transform duration-300" />

        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-slate-900/90 px-3 py-1.5 rounded-md border border-slate-700 shadow-md">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>View Full Specs</span>
          </span>
        </div>
      </Link>

      {/* Product Information Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span className="font-semibold text-slate-300 uppercase tracking-wider">{product.brand}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.subcategory}</span>
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="block text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug font-display"
          >
            {product.name}
          </Link>

          <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Key Feature Bar */}
        <div className="pt-2 border-t border-slate-800/80">
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold text-white tabular-nums font-mono">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through tabular-nums font-mono">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="block text-[11px] text-amber-400/90 font-medium">
                ${Math.round(product.price * 0.9).toLocaleString()} with 10% Crypto
              </span>
            </div>

            <div className="text-right">
              {product.inStock ? (
                <span className="block text-[10px] text-emerald-400 font-medium">
                  In Stock (AU)
                </span>
              ) : (
                <span className="block text-[10px] text-red-400 font-medium">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.slug}`}
              className="w-full py-2 px-3 text-xs font-semibold text-slate-300 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors whitespace-nowrap text-center"
            >
              Specifications
            </Link>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              disabled={!product.inStock}
              className={`w-full py-2 px-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm hover:shadow-amber-500/20'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
