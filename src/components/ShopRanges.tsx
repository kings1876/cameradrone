import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { allRanges, RangeLink } from '../data/shopLinks';

interface ShopRangesProps {
  heading: string;
  /** Specific ranges to list. When omitted, every category and its subcategories are listed. */
  links?: RangeLink[];
}

const linkClass = 'text-slate-200 underline underline-offset-2 decoration-slate-600 hover:text-amber-400 hover:decoration-amber-400';

/** Keyword-anchored links to category and subcategory pages. */
export const ShopRanges: React.FC<ShopRangesProps> = ({ heading, links }) => {
  if (links && !links.length) return null;
  return (
    <nav aria-label={heading} className="mt-6 mx-auto max-w-4xl">
      <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider inline-flex items-center gap-1.5 justify-center">
        <ShoppingBag aria-hidden="true" className="w-3.5 h-3.5" />
        <span>{heading}</span>
      </h2>
      {links ? (
        <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm">
          {links.map(l => (
            <li key={l.path}>
              <Link to={l.path} className={linkClass}>{l.label}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-3 space-y-3">
          {allRanges().map(g => (
            <div key={g.category.path} className="space-y-1.5">
              <p className="text-sm font-bold">
                <Link to={g.category.path} className="text-white hover:text-amber-400">{g.category.label}</Link>
              </p>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                {g.subs.map(s => (
                  <li key={s.path}>
                    <Link to={s.path} className={linkClass}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
