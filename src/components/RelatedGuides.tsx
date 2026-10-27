import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { guidesFor } from '../data/guideLinks';

interface RelatedGuidesProps {
  categoryId?: string;
  sub?: string;
  heading?: string;
}

/** A short list of buying guides relevant to the page, linked with their full titles. */
export const RelatedGuides: React.FC<RelatedGuidesProps> = ({ categoryId, sub, heading = 'Buying guides for this range' }) => {
  const guides = guidesFor(categoryId, sub);
  if (!guides.length) return null;
  return (
    <nav aria-label={heading} className="mt-4 mx-auto max-w-3xl">
      <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider inline-flex items-center gap-1.5 justify-center">
        <BookOpen aria-hidden="true" className="w-3.5 h-3.5" />
        <span>{heading}</span>
      </h2>
      <ul className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm">
        {guides.map(g => (
          <li key={g.slug}>
            <Link to={`/blog/${g.slug}`} className="text-slate-200 underline underline-offset-2 decoration-slate-600 hover:text-amber-400 hover:decoration-amber-400">
              {g.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
