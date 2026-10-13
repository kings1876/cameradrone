import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useAdmin, StatusBadge, fmtDate } from './AdminShell';
import { StoredEnquiry, StoredOrder, money } from '../../lib/reply';

export const AdminDashboard: React.FC = () => {
  const { api } = useAdmin();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [storeConfigured, setStoreConfigured] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([api('/api/admin/orders'), api('/api/admin/enquiries')])
      .then(([o, e]) => {
        setOrders(o.orders);
        setEnquiries(e.enquiries);
        setStoreConfigured(o.storeConfigured);
      })
      .catch(err => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pending = orders.filter(o => o.status === 'pending').length;
  const fresh = enquiries.filter(e => e.status === 'new').length;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-black font-display">Dashboard</h1>

      {!storeConfigured && (
        <div className="flex gap-3 p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-sm text-amber-200">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <p>
            No database is connected yet, so orders and enquiries are being emailed but not stored here. Connect an Upstash
            Redis database in Vercel (Storage tab) to see them in this dashboard.
          </p>
        </div>
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        <Link to="/admin/orders" className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-amber-500/50">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Orders</p>
          <p className="text-3xl font-black mt-1">{orders.length}</p>
          <p className="text-xs text-amber-300 mt-1">{pending} awaiting payment details</p>
        </Link>
        <Link to="/admin/enquiries" className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-amber-500/50">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Enquiries</p>
          <p className="text-3xl font-black mt-1">{enquiries.length}</p>
          <p className="text-xs text-amber-300 mt-1">{fresh} new</p>
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Recent orders</h2>
        {orders.slice(0, 5).map(o => (
          <Link key={o.orderNumber} to={`/admin/orders/${o.orderNumber}`} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-600 text-sm">
            <span className="font-mono text-amber-400">{o.orderNumber}</span>
            <span className="flex-1 truncate text-slate-300">{o.customerName}</span>
            <span className="text-slate-400">{money(o.amountDue)}</span>
            <StatusBadge status={o.status} />
          </Link>
        ))}
        {!orders.length && <p className="text-sm text-slate-500">No orders yet.</p>}
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Recent enquiries</h2>
        {enquiries.slice(0, 5).map(e => (
          <Link key={e.id} to={`/admin/enquiries/${e.id}`} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#0f172a] border border-slate-800 hover:border-slate-600 text-sm">
            <span className="font-mono text-amber-400">{e.id}</span>
            <span className="flex-1 truncate text-slate-300">{e.name}</span>
            <span className="text-slate-500 text-xs">{fmtDate(e.createdAt)}</span>
            <StatusBadge status={e.status} />
          </Link>
        ))}
        {!enquiries.length && <p className="text-sm text-slate-500">No enquiries yet.</p>}
      </section>
    </div>
  );
};
