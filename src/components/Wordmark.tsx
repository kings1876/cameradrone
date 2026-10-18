import React from 'react';

/** Text logo: drone glyph plus the site title, replacing the old image logo. */
export const Wordmark: React.FC<{ size?: 'md' | 'lg' }> = ({ size = 'md' }) => {
  const big = size === 'lg';
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`${big ? 'w-11 h-11' : 'w-9 h-9'} shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20`}
      >
        <svg viewBox="0 0 24 24" className={big ? 'w-7 h-7' : 'w-6 h-6'} fill="none" stroke="#0b0f17" strokeWidth="1.8" strokeLinecap="round">
          <path d="M7 7l10 10M17 7L7 17" />
          <circle cx="6" cy="6" r="2.6" />
          <circle cx="18" cy="6" r="2.6" />
          <circle cx="6" cy="18" r="2.6" />
          <circle cx="18" cy="18" r="2.6" />
          <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1.2" fill="#0b0f17" stroke="none" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`${big ? 'text-2xl' : 'text-xl'} font-black font-display tracking-tight text-white`}>
          Drones <span className="text-amber-400">for Sale</span>
        </span>
        <span className={`${big ? 'text-[11px]' : 'text-[10px]'} mt-1 font-semibold uppercase tracking-[0.22em] text-slate-400`}>
          Australia
        </span>
      </span>
    </span>
  );
};
