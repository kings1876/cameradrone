import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Zap, Truck, Shield, Award, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { DroneGraphic } from '../components/DroneGraphic';
import { Product } from '../types';

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
  onQuickCheckout: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  onQuickCheckout
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find(p => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (product) {
      document.title = `${product.name} | Camera Drone Sales Australia`;
    }
  }, [product, slug]);

  if (!product) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white font-display">Product Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested drone or payload model may have been updated or moved.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Flight Catalog</span>
        </Link>
      </div>
    );
  }

  const cryptoPrice = Math.round(product.price * 0.9);
  const cryptoSavings = product.price - cryptoPrice;

  return (
    <div className="py-10 bg-[#0b0f17] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span>{product.categoryName}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span>{product.subcategory}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 truncate">{product.name}</span>
        </nav>

        {/* Main Product Showcase Layout */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Image Stage */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-[#131d33] to-[#0c1322] border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-4">
                {product.badge ? (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-500/30">
                    {product.badge}
                  </span>
                ) : <span />}

                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  Free Nationwide Courier
                </span>
              </div>

              {/* Graphic Representation */}
              <div className="py-10 flex items-center justify-center">
                <DroneGraphic type={product.graphicType} size="lg" />
              </div>
            </div>

            {/* Quality and Compliance Indicators */}
            <div className="space-y-2 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free Express Insured Courier to all Australian addresses</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Genuine Australian Stock with Official ACL Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CASA Safety Compliant Configuration</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module & Specifications */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider">{product.brand}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Individual Catalog URL: <code className="text-amber-400/90 font-mono">/product/{product.slug}</code>
                </p>
              </div>

              {/* Price & Crypto Incentive Box */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums font-mono">
                      ${product.price.toLocaleString()} AUD
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through tabular-nums font-mono">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.inStock ? (
                    <span className="text-xs text-emerald-400 font-medium">In Stock (Australia)</span>
                  ) : (
                    <span className="text-xs text-red-400 font-medium">Currently Out of Stock</span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-amber-300">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Pay with Crypto (10% Discount):
                  </span>
                  <span className="text-sm font-bold font-mono text-amber-400 tabular-nums">
                    ${cryptoPrice.toLocaleString()} USD (Save ${cryptoSavings.toLocaleString()})
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Specifications Table */}
              {Object.values(product.specifications).some(Boolean) && (
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Technical Specifications
                </h3>
                <dl className="text-xs divide-y divide-slate-800/80 border border-slate-800 rounded-lg overflow-hidden bg-slate-950/40">
                  {product.specifications.sensor && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Sensor</dt>
                      <dd className="col-span-2 text-white font-medium">{product.specifications.sensor}</dd>
                    </div>
                  )}
                  {product.specifications.videoResolution && (
                    <div className="grid grid-cols-3 p-2.5">
                      <dt className="text-slate-400">Video Capture</dt>
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
                      <dt className="text-slate-400">Transmission</dt>
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
              )}

              {/* In The Box */}
              {product.inTheBox && product.inTheBox.length > 0 && (
                <div className="space-y-1.5">
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    In The Box Package
                  </h3>
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

            {/* Actions Module */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  disabled={!product.inStock}
                  className="disabled:opacity-40 disabled:cursor-not-allowed py-3 px-4 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => onQuickCheckout(product)}
                  disabled={!product.inStock}
                  className="disabled:opacity-40 disabled:cursor-not-allowed py-3 px-4 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-amber-500/15"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Order Now (Crypto 10% Off)</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <Link to="/shop" className="text-amber-400 hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All Equipment</span>
                </Link>
                <span>Free Insured Transit Australia-Wide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
