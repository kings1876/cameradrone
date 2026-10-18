import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/products';
import { categoryPath } from '../routes';

export const NotFoundPage: React.FC = () => (
  <div className="py-24 max-w-3xl mx-auto px-4 text-center space-y-5">
    <h1 className="text-3xl font-black text-white font-display">Page not found</h1>
    <p className="text-sm text-slate-400">
      The page you are looking for may have moved. Browse the catalogue by category or head back to the shop.
    </p>
    <ul className="flex flex-wrap justify-center gap-2">
      {CATEGORIES.map(c => (
        <li key={c.id}>
          <Link to={categoryPath(c.id)} className="inline-block px-3 py-1.5 text-xs rounded-full border border-slate-700 text-slate-200 hover:border-amber-500">
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/shop" className="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs">
      View all products
    </Link>
  </div>
);
