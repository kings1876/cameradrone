import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS_H1, allProductGroups, allProductsParagraphs } from '../data/allProducts';

export const AllProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const groups = allProductGroups();
  const paras = allProductsParagraphs();

  return (
    <div className="bg-[#0b0f17] py-10 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">{ALL_PRODUCTS_H1}</h1>
          {paras.map(t => (
            <p key={t} className="text-sm text-slate-400 leading-relaxed">{t}</p>
          ))}
        </header>
        {groups.map(g => (
          <section key={g.id} aria-labelledby={`cat-${g.id}`} className="space-y-4">
            <h2 id={`cat-${g.id}`} className="text-xl font-bold font-display">
              <Link to={g.path} className="hover:text-amber-400">{g.name}</Link>
            </h2>
            {g.subs.map(s => (
              <div key={s.name} className="space-y-1.5">
                <h3 className="text-sm font-bold text-amber-400">
                  <Link to={s.path} className="hover:underline">{s.name}</Link>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
                  {s.products.map(p => (
                    <li key={p.slug}>
                      <Link to={`/product/${p.slug}`} className="text-slate-200 hover:text-amber-400">
                        {p.name} <span className="text-slate-400 font-mono">${p.price.toLocaleString()}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};
