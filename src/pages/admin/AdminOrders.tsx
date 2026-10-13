import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useAdmin, StatusBadge, fmtDate } from './AdminShell';
import { StoredOrder, findMethod, money } from '../../lib/reply';

export const AdminOrders: React.FC = () => {
  const { api } = useAdmin();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [error, setError] = useState('');

  const load = () =>
    api('/api/admin/orders')
      .then(d => setOrders(d.orders))
      .catch(e => setError(e.message));

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = async (id: string) => {
    if (!confirm(`Delete order ${id}?`)) return;
    await api(`/api/admin/orders?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
    load();
  };
  const removeAll = async () => {
    if (!confirm('Delete ALL orders? This cannot be undone.')) return;
    await api('/api/admin/orders?all=1', { method: 'DELETE' });
    load();
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black font-display">Orders</h1>
        {orders.length > 0 && (
          <button type="button" onClick={removeAll} className="text-xs text-red-400 hover:underline">Delete all</button>
        )}
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <div className="space-y-2">
        {orders.map(o => (
          <div key={o.orderNumber} className="flex items-center gap-3 p-3 rounded-xl bg-[#0f172a] border border-slate-800 text-sm">
            <Link to={`/admin/orders/${o.orderNumber}`} className="flex-1 flex items-center gap-3 min-w-0">
              <span className="font-mono text-amber-400">{o.orderNumber}</span>
              <span className="flex-1 truncate">{o.customerName}</span>
              <span className="hidden sm:inline text-xs text-slate-500">{fmtDate(o.createdAt)}</span>
              <span className="text-slate-300">{money(o.amountDue)}</span>
              <StatusBadge status={o.status} />
            </Link>
            <button type="button" onClick={() => remove(o.orderNumber)} aria-label={`Delete order ${o.orderNumber}`} className="p-1.5 text-slate-500 hover:text-red-400">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        {!orders.length && <p className="text-sm text-slate-500">No orders yet.</p>}
      </div>
    </div>
  );
};

export const AdminOrderDetail: React.FC = () => {
  const { id = '' } = useParams();
  const { api } = useAdmin();
  const navigate = useNavigate();
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api(`/api/admin/orders?id=${encodeURIComponent(id)}`)
      .then(d => setOrder(d.order))
      .catch(e => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (error) return <p className="text-sm text-red-400">{error}</p>;
  if (!order) return <p className="text-sm text-slate-400">Loading…</p>;

  return (
    <div className="space-y-6 max-w-3xl">
      <Link to="/admin/orders" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline">
        <ArrowLeft className="w-3.5 h-3.5" /> All orders
      </Link>
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-black font-mono text-amber-400">{order.orderNumber}</h1>
        <StatusBadge status={order.status} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 space-y-1">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Customer</p>
          <p className="font-semibold">{order.customerName}</p>
          <p><a className="text-sky-300 hover:underline" href={`mailto:${order.customerEmail}`}>{order.customerEmail}</a></p>
          <p>{order.customerPhone}</p>
          <p className="text-slate-400">{order.address}</p>
          <p className="text-xs text-slate-500 pt-1">{fmtDate(order.createdAt)}</p>
        </div>
        <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800 space-y-1">
          <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Payment</p>
          <p className="text-2xl font-black">{money(order.amountDue)}</p>
          <p className="text-slate-300">{findMethod(order.paymentMethod)?.label || order.paymentMethod}</p>
          {order.paymentDetails && <p className="text-xs text-slate-500">Details sent {fmtDate(order.paymentDetails.sentAt)}</p>}
          {order.status === 'payment-confirmed' && <p className="text-xs text-emerald-300">Customer uploaded a payment screenshot (check the order inbox).</p>}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800">
        <table className="w-full text-sm">
          <tbody>
            {order.items.map((i, k) => (
              <tr key={k} className="border-b border-slate-800 last:border-0">
                <td className="py-2">{i.name}</td>
                <td className="py-2 text-center text-slate-400">×{i.quantity}</td>
                <td className="py-2 text-right">{money(i.lineTotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {order.notes && <p className="mt-3 text-sm text-slate-300"><span className="text-slate-500">Notes:</span> {order.notes}</p>}
      </div>

      <button
        type="button"
        onClick={() => navigate(`/admin/send-payment-email?id=${encodeURIComponent(order.orderNumber)}`)}
        className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
      >
        {order.status === 'pending' ? 'Send payment details' : 'Resend payment details'}
      </button>
    </div>
  );
};
