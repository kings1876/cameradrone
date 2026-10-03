import React from 'react';
import { ShieldCheck, Truck, Zap, Award, Compass, MapPin, CheckCircle } from 'lucide-react';
import { BRAND_MILESTONES, TRUSTPILOT_STATS } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#0c1322] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span>Authentic Australian Brand Story</span>
              <span aria-hidden="true">·</span>
              <span>Founded 17 May 2018</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight">
              Pioneering High-Altitude Cinematography & UAV Systems in Australia
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <p>
                Founded on <strong>17 May 2018 in Australia</strong>, Camera Drone Sales Australia was established by a team of aerial optics specialists and commercial UAV operators who demanded better hardware accessibility, uncompromised Australian warranty backing, and faster dispatch times.
              </p>
              <p>
                Unlike generic online electronics resellers or overseas drop-shippers, every flight system in our catalog—from compact travel drones like the DJI Mini 4 Pro to heavy-lift 8K cinema platforms like the DJI Inspire 3 and full-frame DSLR gimbal rigs—is <strong>100% genuine Australian stock</strong> supported by local consumer guarantees and CASA safety compliance.
              </p>
              <p>
                We distribute nationwide across New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania, ACT, and the Northern Territory, backed by express courier logistics and a streamlined order form supporting modern cryptocurrency payments with a permanent 10% discount.
              </p>
            </div>

            {/* Core Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">100% Australian Stock & Warranty</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Full Australian Consumer Law (ACL) coverage and local service centres.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Free Nationwide Express Delivery</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Fully insured signature-on-delivery tracking across all states and regional hubs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">10% Instant Crypto Checkout</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Direct multi-chain settlement in USDT, BTC, ETH, and SOL with immediate deduction.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">CASA Safety Accreditation</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pre-flight advisory and flight envelope guidance from certified pilots.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Trust Matrix vs Competitors */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-5 shadow-xl">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[11px] text-amber-400 font-mono uppercase tracking-wider">Australian Market Comparison</span>
                <h3 className="text-lg font-bold text-white font-display mt-0.5">Why Pilots Choose Our Operations</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>Shipping Policy</span>
                    <span className="text-emerald-400">100% Free Nationwide</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Unlike traditional retailers that charge $40–$120 for heavy battery and drone couriers, all our drones ship free.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>Payment Incentives</span>
                    <span className="text-amber-400">10% Crypto Discount</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Zero card processing fees; direct crypto orders automatically receive an extra 10% savings off listed prices.
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>Customer Trust Record</span>
                    <span className="text-white font-mono">4.9 / 5.0 Rating</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Over 2,480+ verified Australian customer reviews on Trustpilot from commercial real estate, mining, and film creators.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Operating Nationally Across Australia · Founded 17 May 2018</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Milestones Timeline */}
        <div className="pt-8 border-t border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Historical Track Record</span>
            <h3 className="text-2xl font-bold text-white font-display mt-1">Our Journey Since 2018</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {BRAND_MILESTONES.map((milestone, idx) => (
              <div key={idx} className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 font-mono block">{milestone.year}</span>
                <h4 className="text-sm font-bold text-white leading-snug">{milestone.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
