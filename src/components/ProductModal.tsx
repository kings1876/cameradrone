import React from 'react';
import { X, ShoppingBag, Zap, Shield, Truck, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { Product } from '../types';
import { ProductImage } from './ProductImage';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onQuickCheckout: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onQuickCheckout
}) => {
  if (!product) return null;

  const cryptoPrice = Math.round(product.price * 0.9);
  const cryptoSavings = product.price - cryptoPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/80 rounded-full border border-slate-700 transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {/* Left Column: Visual Showcase */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#131d33] to-[#0c1322]">
            <div>
              {/* Subtle Tag */}
              {product.badge && (
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500/30 mb-4">
                  {product.badge}
                </span>
              )}

              {/* Graphic Stage */}
              <div className={`my-6 flex items-center justify-center rounded-xl ${product.images?.length ? 'bg-white h-72 p-3' : 'py-6'}`}>
                <ProductImage product={product} size="lg" eager />
              </div>
            </div>

            {/* Quick Guarantees Under Image */}
            <div className="space-y-2 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free Express Insured Courier Australia-Wide</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Genuine Australian Stock with Local Manufacturer Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CASA Airspace Compliance Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module & Specifications */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#0f172a] max-h-[85vh] overflow-y-auto">
            <div className="space-y-5">
              {/* Category Breadcrumb & Review Score */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>{product.brand} · {product.subcategory}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* Price & Crypto Discount Box */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl font-extrabold text-white tabular-nums font-mono">
                      ${product.price.toLocaleString()} AUD
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through tabular-nums font-mono">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    Free AU Shipping
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-amber-300">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Pay with Crypto (10% Off):
                  </span>
                  <span className="text-sm font-bold font-mono text-amber-400 tabular-nums">
                    ${cryptoPrice.toLocaleString()} AUD (Save ${cryptoSavings.toLocaleString()})
                  </span>
                </div>
              </div>

              {/* Description Prose */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Specifications Table */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Technical Specifications
                </h4>
                <dl className="text-xs divide-y divide-slate-800/80 border border-slate-800 rounded-lg overflow-hidden bg-slate-950/40">
                  {product.specifications.sensor && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Sensor System</dt>
                      <dd className="col-span-2 text-white font-medium">{product.specifications.sensor}</dd>
                    </div>
                  )}
                  {product.specifications.videoResolution && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Video Resolution</dt>
                      <dd className="col-span-2 text-white font-medium">{product.specifications.videoResolution}</dd>
                    </div>
                  )}
                  {product.specifications.flightTime && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Flight Endurance</dt>
                      <dd className="col-span-2 text-white font-medium">{product.specifications.flightTime}</dd>
                    </div>
                  )}
                  {product.specifications.transmissionRange && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Video Link Range</dt>
                      <dd className="col-span-2 text-white font-medium">{product.specifications.transmissionRange}</dd>
                    </div>
                  )}
                  {product.specifications.weight && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Takeoff Weight</dt>
                      <dd className="col-span-2 text-white font-medium font-mono">{product.specifications.weight}</dd>
                    </div>
                  )}
                  {product.specifications.casaCategory && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">CASA Classification</dt>
                      <dd className="col-span-2 text-amber-300 font-medium">{product.specifications.casaCategory}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* In The Box List */}
              {product.inTheBox && product.inTheBox.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    In The Box
                  </h4>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {product.inTheBox.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Contiguous Primary CTAs */}
            <div className="pt-6 border-t border-slate-800 space-y-2.5 mt-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="py-3 px-4 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onQuickCheckout(product);
                    onClose();
                  }}
                  className="py-3 px-4 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-amber-500/15"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Order Now (Crypto 10% Off)</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                100% Free Nationwide Express Courier · GST & Delivery Inclusive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
