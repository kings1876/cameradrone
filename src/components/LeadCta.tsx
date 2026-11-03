import React from 'react';
import { Link } from 'react-router-dom';
import { leadCtaFor } from '../data/leadCta';

interface LeadCtaProps {
  relatedProducts: string[];
  /** inline sits inside the article after the opening section; full closes the article. */
  variant: 'inline' | 'full';
}

/** A short call to action that sends a reader to the quote form, the order form or a specialist. */
export const LeadCta: React.FC<LeadCtaProps> = ({ relatedProducts, variant }) => {
  const copy = leadCtaFor(relatedProducts);
  const full = variant === 'full';
  return (
    <aside
      aria-label={copy.heading}
      className={`rounded-2xl border border-amber-500/30 bg-amber-500/5 text-center ${full ? 'p-7 space-y-4' : 'p-5 space-y-3'}`}
    >
      {full ? (
        <h2 className="text-xl sm:text-2xl font-black text-white font-display">{copy.heading}</h2>
      ) : (
        <p className="text-base font-bold text-white font-display">{copy.heading}</p>
      )}
      <p className="text-sm text-slate-300">{copy.text}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {copy.links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={
              l.primary
                ? 'inline-flex items-center px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors'
                : 'inline-flex items-center px-5 py-2.5 rounded-lg border border-slate-600 hover:border-amber-500 text-slate-200 hover:text-amber-400 font-semibold text-sm transition-colors'
            }
          >
            {l.label}
          </Link>
        ))}
      </div>
    </aside>
  );
};
