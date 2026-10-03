import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle, ThumbsUp, MapPin } from 'lucide-react';
import { REVIEWS, TRUSTPILOT_STATS } from '../data/content';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Cinema & Television', 'Surveying & Mining', 'Landscape & Surf', 'Commercial Real Estate', 'Recreational Flight'];

  const filteredReviews = activeFilter === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.useCase === activeFilter);

  return (
    <section className="py-16 bg-[#0b0f17] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Trustpilot Scoreboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <span>Verified Pilot Community</span>
              <span aria-hidden="true">·</span>
              <span>Australia-Wide Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Customer Reviews from Australian Pilots
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Authentic feedback from commercial cinematographers, mining survey operators, and drone enthusiasts across Australia.
            </p>
          </div>

          {/* Trustpilot Score Badge Box */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-center border-r border-slate-800 pr-4">
              <span className="block text-2xl font-black text-white font-display tabular-nums">4.9</span>
              <div className="flex items-center text-amber-400 gap-0.5 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <span className="text-emerald-400 font-bold">★ Trustpilot</span>
                <span>Verified</span>
              </div>
              <p className="text-[11px] text-slate-400 tabular-nums">
                Based on <strong className="text-slate-200">2,480+</strong> Australian reviews
              </p>
              <p className="text-[10px] text-emerald-400 font-medium">
                99.4% Customer Satisfaction Rate
              </p>
            </div>
          </div>
        </div>

        {/* Filter Tabs by Pilot Use-Case */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-4">
          <span className="text-xs text-slate-400 mr-2 font-medium">Filter by Flight Niche:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeFilter === filter
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:border-slate-700 transition-colors"
            >
              <div className="space-y-2.5">
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified AU Order</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-bold text-white leading-snug line-clamp-2">
                  "{rev.title}"
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{rev.author}</span>
                  <span className="text-slate-400 font-mono text-[10px]">{rev.date}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{rev.location}</span>
                </div>
                <div className="text-[10px] text-amber-400/90 font-mono truncate pt-0.5">
                  Hardware: {rev.droneModel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
