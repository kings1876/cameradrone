import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Truck, BadgePercent, RotateCcw, MessageSquareQuote, PackageCheck } from 'lucide-react';
import { BUSINESS } from '../business';

const MESSAGES = [
  { icon: Truck, text: 'Free express shipping Australia-wide', to: '/shipping', cta: 'Shipping policy' },
  { icon: BadgePercent, text: '10% off with crypto checkout', to: '/faq', cta: 'How it works' },
  { icon: PackageCheck, text: 'In stock: Mini 5 Pro, Neo 2, Avata 360', to: '/category/camera-drones', cta: 'Shop camera drones' },
  { icon: MessageSquareQuote, text: 'Enterprise quotes, usually within 1 business day', to: '/quote', cta: 'Get a quote' },
  { icon: RotateCcw, text: '30-day returns on unopened hardware', to: '/refund', cta: 'Returns policy' }
];

export const AnnouncementBar: React.FC = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setInterval(() => setI(n => (n + 1) % MESSAGES.length), 5500);
    return () => window.clearInterval(t);
  }, [paused, reduce]);

  const step = (d: number) => setI(n => (n + d + MESSAGES.length) % MESSAGES.length);
  const m = MESSAGES[i];
  const Icon = m.icon;
  const btn = 'p-1 rounded text-slate-400 hover:text-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400';

  return (
    <div
      className="bg-[#080c13] border-b border-slate-800/80"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-7 flex items-center justify-between gap-2 text-[11px] sm:text-xs">
        <div className="hidden md:block w-56 shrink-0 font-semibold text-amber-400">
          {BUSINESS.name} <span aria-hidden="true" className="text-amber-500/60">·</span> {BUSINESS.abnDisplay}
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-center gap-1">
          <button type="button" aria-label="Previous announcement" onClick={() => step(-1)} className={btn}>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <p role="status" aria-live="polite" className="min-w-0 flex items-center justify-center gap-2 text-slate-200">
            <Icon aria-hidden="true" className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span key={i} className="truncate font-medium">{m.text}</span>
            <Link to={m.to} className="hidden sm:inline shrink-0 font-semibold text-amber-400 underline underline-offset-2 hover:text-amber-300">
              {m.cta}
            </Link>
          </p>
          <button type="button" aria-label="Next announcement" onClick={() => step(1)} className={btn}>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="hidden md:block w-56 shrink-0 text-right text-slate-400" aria-hidden="true">
          {i + 1} / {MESSAGES.length}
        </div>
      </div>
    </div>
  );
};
