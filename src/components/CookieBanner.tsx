import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('aero_au_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('aero_au_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm bg-[#0f172a] border border-slate-800 rounded-xl p-4 shadow-2xl text-xs text-slate-300">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="leading-relaxed">
            We use essential session cookies to preserve your flight cart manifest and remember filtering preferences across Australia.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={accept}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-[11px] transition-colors"
            >
              Accept Cookies
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-2 py-1 text-slate-400 hover:text-white text-[11px] transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
