import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useAdmin, StatusBadge, fmtDate } from './AdminShell';
import { StoredEnquiry } from '../../lib/reply';

const FILTERS = ['all', 'quote', 'contact', 'wholesale', 'new', 'replied'] as const;

export const AdminEnquiries: React.FC = () => {
  const { api } = useAdmin();
  const [items, setItems] = useState<StoredEnquiry[]>([]);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('all');
  const [error, setError] = useState('');

  const load = () =>
    api('/api/admin/enquiries')
      .then(d => setItems(d.enquiries))
      .catch(e => setError(e.message));

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shown = items.filter(e => filter === 'all' || e.type === filter || e.status === filter);

  const remove = async (id: string) => {
    if (!confirm(`Delete enquiry ${id}?`)) return;
    await api(`/api/admin/enquiries?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    load();
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-black font-display">Enquiries</h1>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map(f => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs capitalize border ${filter === f ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold' : 'border-slate-700 text-slate-300 hover:text-white'}`}
          >
            {f}
          </button>
        ))}
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <div className="space-y-2">
        {shown.map(e => (
          <div key={e.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#0f172a] border border-slate-800 text-sm">
            <Link to={`/admin/enquiries/${e.id}`} className="flex-1 flex items-center gap-3 min-w-0">
              <span className="font-mono text-amber-400">{e.id}</span>
              <span className="text-xs text-slate-500 capitalize">{e.type}</span>
              <span className="flex-1 truncate">{e.name}</span>
              <span className="hidden sm:inline text-xs text-slate-500">{fmtDate(e.createdAt)}</span>
              <StatusBadge status={e.status} />
            </Link>
            <button type="button" onClick={() => remove(e.id)} aria-label={`Delete enquiry ${e.id}`} className="p-1.5 text-slate-500 hover:text-red-400">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        {!shown.length && <p className="text-sm text-slate-500">Nothing here.</p>}
      </div>
    </div>
  );
};

export const AdminEnquiryDetail: React.FC = () => {
  const { id = '' } = useParams();
  const { api } = useAdmin();
  const navigate = useNavigate();
  const [enq, setEnq] = useState<StoredEnquiry | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api(`/api/admin/enquiries?id=${encodeURIComponent(id)}`)
      .then(d => setEnq(d.enquiry))
      .catch(e => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (!enq) return <p className="text-sm text-slate-400">Loading…</p>;

  return (
    <div className="space-y-6 max-w-3xl">
      <Link to="/admin/enquiries" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline">
        <ArrowLeft className="w-3.5 h-3.5" /> All enquiries
      </Link>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-black font-mono text-amber-400">{enq.id}</h1>
        <StatusBadge status={enq.status} />
      </div>
      <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 text-sm space-y-1">
        <p className="font-semibold">{enq.name} <span className="text-xs text-slate-500 capitalize">· {enq.type}</span></p>
        <p><a className="text-sky-300 hover:underline" href={`mailto:${enq.email}`}>{enq.email}</a></p>
        {enq.phone && <p>{enq.phone}</p>}
        <p className="text-xs text-slate-500">{fmtDate(enq.createdAt)}</p>
        {Object.entries(enq.meta || {}).map(([k, v]) => (
          <p key={k} className="text-slate-300"><span className="text-slate-500">{k}:</span> {v}</p>
        ))}
      </div>
      <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 text-sm whitespace-pre-wrap">{enq.message}</div>
      <button
        type="button"
        onClick={() => navigate(`/admin/reply-enquiry?id=${encodeURIComponent(enq.id)}`)}
        className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
      >
        Reply
      </button>
    </div>
  );
};
