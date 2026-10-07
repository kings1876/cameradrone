import React from 'react';
import { ArrowDown, Zap, Shield, Truck, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOpenOrderForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenOrderForm }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#0f172a] to-[#0b0f17] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background optical radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean unboxed metadata lead-in */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-400">
              <span className="text-amber-400 font-semibold tracking-wide uppercase">CASA Compliant Retailer</span>
              <span aria-hidden="true">·</span>
              <span>Founded 17 May 2018 in Australia</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">10% Crypto Discount</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance font-display">
              Premier Camera Drones For Sale in Australia
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-pretty">
              Equipping Australian creators, surveying crews, and farmers with DJI camera drones, enterprise and thermal UAVs, agricultural spraying drones, and batteries and accessories. Free nationwide express shipping on every order.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-lg shadow-amber-500/15 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Browse Drones on Sale</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenOrderForm}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Crypto Order Form (10% Off)</span>
              </button>
            </div>

            {/* Adjacent Trust Badges & Metrics */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="text-xs text-slate-400">Product Range</p>
                <p className="text-base font-bold text-white mt-0.5">DJI, XAG &amp; More</p>
                <p className="text-[11px] text-slate-400">Camera, enterprise &amp; agriculture</p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Nationwide Transit</p>
                <p className="text-base font-bold text-white mt-0.5">Free Express</p>
                <p className="text-[11px] text-slate-400">All orders across Australia</p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Crypto Settlement</p>
                <p className="text-base font-bold text-amber-400 tabular-nums mt-0.5">10% Instant Off</p>
                <p className="text-[11px] text-slate-400">BTC · ETH · USDT · SOL</p>
              </div>

              <div>
                <p className="text-xs text-slate-400">Hardware Guarantee</p>
                <p className="text-base font-bold text-white mt-0.5">100% Genuine</p>
                <p className="text-[11px] text-slate-400">Local Australian warranty</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor with Technical Telemetry Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[440px] bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              {/* Technical Telemetry Card Header */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
                <span className="text-slate-200 font-semibold tracking-wide">DJI CAMERA DRONES</span>
                <span className="text-amber-400 font-mono">AUSTRALIAN STOCK</span>
              </div>

              {/* Central Precision SVG Schematic Drone Graphic */}
              <div className="my-4 bg-white rounded-xl h-56 flex items-center justify-center p-3">
                <img
                  src="/products/dji-mavic-3-pro.jpg"
                  alt="DJI Mavic 3 Pro camera drone"
                  width={1200}
                  height={545}
                  fetchPriority="high"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Technical Specifications Callout Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
                <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
                  <span className="block text-[10px] text-slate-400">Camera Drones</span>
                  <span className="text-xs font-bold text-white font-mono">Mini · Air · Mavic</span>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
                  <span className="block text-[10px] text-slate-400">Enterprise</span>
                  <span className="text-xs font-bold text-white font-mono">Matrice · Phantom</span>
                </div>
                <div className="p-2 bg-slate-950/60 rounded border border-slate-800/80">
                  <span className="block text-[10px] text-slate-400">Agriculture</span>
                  <span className="text-xs font-bold text-sky-400 font-mono">XAG · BROUAV</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                <span>Free Insured Courier Australia-Wide</span>
                <span className="text-amber-400 font-medium">Australian Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
