import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

/** Header search: sends the query to the shop page, which filters products by name, brand, range and keyword. */
export const HeaderSearch: React.FC<{ className?: string; id: string }> = ({ className = '', id }) => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    navigate(term ? `/shop?q=${encodeURIComponent(term)}` : '/shop');
  };
  return (
    <form role="search" action="/shop" method="get" onSubmit={submit} className={className}>
      <label htmlFor={id} className="sr-only">Search drones and accessories</label>
      <div className="relative">
        <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          id={id}
          type="search"
          name="q"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search drones, batteries, thermal cameras…"
          autoComplete="off"
          className="w-full h-10 pl-9 pr-20 text-sm text-white placeholder:text-slate-400 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:border-amber-500"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Search
        </button>
      </div>
    </form>
  );
};
