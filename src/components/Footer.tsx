import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Zap, Truck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b12] text-slate-400 border-t border-slate-800 text-xs">
      {/* CASA Airspace Banner */}
      <div className="bg-slate-950 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-amber-400 font-semibold uppercase tracking-wider text-[11px]">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>CASA Australian Airspace Compliance</span>
          </div>
          <p className="text-[11px] text-slate-400 max-w-3xl">
            Fly safely in Australian airspace. Never fly higher than 120 metres (400ft), always maintain direct visual line-of-sight, stay at least 30m away from other people, and never operate over crowded public areas or within 5.5km of controlled aerodromes without authorization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-base font-extrabold text-white font-display">
              Camera Drone Sales Australia
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Australian supplier of DJI camera drones, enterprise and thermal UAVs, agricultural spraying drones, and accessories. Founded on <strong>17 May 2018 in Australia</strong>.
            </p>
            <div className="pt-2 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Nationwide Shipping · Serving NSW, VIC, QLD, WA, SA, TAS, ACT & NT</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Express Courier on All Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Accepted Currency: USD · 10% Crypto Checkout Discount</span>
              </div>
            </div>
          </div>

          {/* Navigation Links with Individual URLs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Store Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shop" className="hover:text-amber-400 transition-colors">
                  Shop Drones & Accessories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">
                  Drone Guides & Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Flight Desk
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition-colors">
                  CASA & Order FAQ
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-amber-400 transition-colors">
                  Crypto Order Form (10% Off)
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Policy Pages with Individual URLs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Customer Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shipping" className="hover:text-amber-400 transition-colors">
                  Nationwide Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-amber-400 transition-colors">
                  30-Day Australian Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy & Cookie Notice
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service & Airspace Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Direct Crypto Settlement
            </h4>
            <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
              Save 10% on every order when paying with cryptocurrency. Zero credit card processing fees.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">BTC</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">ETH</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">USDT</span>
              <span className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">SOL</span>
            </div>
            <Link
              to="/order"
              className="inline-block text-[10px] text-amber-400 mt-2 font-medium hover:underline"
            >
              Open Direct Order Form →
            </Link>
          </div>
        </div>

        {/* SEO Category & Keyword Directory */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="mb-3">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              Popular Drones & Categories
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">
            <Link to="/shop" className="hover:text-slate-300">drone for sale</Link>
            <span>·</span>
            <Link to="/shop" className="hover:text-slate-300">drone sales</Link>
            <span>·</span>
            <Link to="/product/dji-mavic-3-pro" className="hover:text-slate-300">dji mavic 3 pro</Link>
            <span>·</span>
            <Link to="/product/dji-mini-4-pro" className="hover:text-slate-300">dji mini 4 pro</Link>
            <span>·</span>
            <Link to="/product/dji-air-3" className="hover:text-slate-300">dji air 3</Link>
            <span>·</span>
            <Link to="/product/dji-inspire-3" className="hover:text-slate-300">dji inspire 3</Link>
            <span>·</span>
            <Link to="/product/dji-matrice-30" className="hover:text-slate-300">dji matrice 30</Link>
            <span>·</span>
            <Link to="/product/dji-matrice-4-enterprise" className="hover:text-slate-300">dji matrice 4</Link>
            <span>·</span>
            <Link to="/product/xag-p30-spraying-drone" className="hover:text-slate-300">spraying drone</Link>
            <span>·</span>
            <Link to="/shop" className="hover:text-slate-300">thermal drones</Link>
            <span>·</span>
            <Link to="/shop" className="hover:text-slate-300">drone cameras &amp; sensors</Link>
            <span>·</span>
            <Link to="/shop" className="hover:text-slate-300">drone batteries</Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2018–2026 Camera Drone Sales Australia. All rights reserved.</p>
          <p>Prices quoted in AUD · Free Express Shipping to all Australian addresses.</p>
        </div>
      </div>
    </footer>
  );
};
