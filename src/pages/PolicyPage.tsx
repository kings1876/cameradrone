import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Truck, RotateCcw, ShieldCheck, FileText } from 'lucide-react';
import { POLICIES, POLICY_INTRO, POLICY_HELP, POLICY_MORE } from '../data/policies';

const ICONS = { shipping: Truck, refund: RotateCcw, privacy: ShieldCheck, terms: FileText };

export const PolicyPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const policy = POLICIES[path as keyof typeof POLICIES];
  const Icon = ICONS[path as keyof typeof ICONS];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);

  return (
    <div className="py-12 bg-[#0b0f17] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Flight Catalog</span>
          </Link>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {policy && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Icon className="w-4 h-4" />
                <span>{policy.eyebrow}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                {policy.h1}
              </h1>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>{POLICY_INTRO[path as keyof typeof POLICIES]}</p>
                {policy.paras.map(([title, text]) => (
                  <p key={title}>
                    <strong>{title}</strong> {text}
                  </p>
                ))}
                <p>{POLICY_MORE}</p>
                <p>{POLICY_HELP}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
