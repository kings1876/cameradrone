import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAdmin } from './AdminShell';
import { REPLY, StoredEnquiry, StoredOrder, findMethod, money, parsePaymentDetail } from '../../lib/reply';

export const SendPayment: React.FC = () => {
  const [params] = useSearchParams();
  const id = params.get('id') || '';
  const { api } = useAdmin();
  const navigate = useNavigate();
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [methodId, setMethodId] = useState('');
  const [detail, setDetail] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api(`/api/admin/orders?id=${encodeURIComponent(id)}`)
      .then(d => {
        setOrder(d.order);
        setMethodId(d.order.paymentMethod);
        if (d.order.paymentDetails) {
          setDetail(d.order.paymentDetails.fields.map((f: { label: string; value: string }) => `${f.label}: ${f.value}`).join('\n'));
        } else {
          const w = (findMethod(d.order.paymentMethod) as { wallet?: { address: string; network: string } } | null)?.wallet;
          if (w) setDetail(`Wallet address: ${w.address}\nNetwork: ${w.network}\nReference: ${id}`);
        }
      })
      .catch(e => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const walletText = (mid: string) => {
    const w = (findMethod(mid) as { wallet?: { address: string; network: string } } | null)?.wallet;
    return w ? `Wallet address: ${w.address}\nNetwork: ${w.network}\nReference: ${id}` : '';
  };
  const changeMethod = (mid: string) => {
    // Swap the pre-filled wallet text only when the box is empty or still holds the previous method's default.
    if (!detail.trim() || detail === walletText(methodId)) setDetail(walletText(mid));
    setMethodId(mid);
  };

  const preview = parsePaymentDetail(detail);

  const send = async () => {
    setBusy(true);
    setError('');
    try {
      await api('/api/admin/send-payment-email', {
        method: 'POST',
        body: JSON.stringify({ orderNumber: id, methodId, detailText: detail })
      });
      navigate(`/admin/orders/${id}`);
    } catch (e: any) {
      setError(e.message === 'not-configured' ? 'Email (SMTP) is not configured on the server yet.' : e.message);
    } finally {
      setBusy(false);
    }
  };

  if (!order) return <p className="text-sm text-slate-400">{error || 'Loading…'}</p>;

  return (
    <div className="space-y-5 max-w-3xl">
      <Link to={`/admin/orders/${id}`} className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to order
      </Link>
      <h1 className="text-2xl font-black font-display">Send payment details · <span className="font-mono text-amber-400">{order.orderNumber}</span></h1>
      <p className="text-sm text-slate-400">
        To {order.customerName} ({order.customerEmail}) · amount due <strong className="text-white">{money(order.amountDue)}</strong>
      </p>

      <label className="block text-xs text-slate-400" htmlFor="method">Payment method</label>
      <select id="method" value={methodId} onChange={e => changeMethod(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm">
        {REPLY.methods.map(m => (
          <option key={m.id} value={m.id}>{m.label}</option>
        ))}
      </select>

      <label className="block text-xs text-slate-400" htmlFor="detail">Payment details — paste one per line as “Label: value”</label>
      <textarea
        id="detail"
        value={detail}
        onChange={e => setDetail(e.target.value)}
        rows={7}
        placeholder={'Wallet address: T…\nNetwork: TRON (TRC-20)\nReference: ' + order.orderNumber}
        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm font-mono"
      />

      {preview.length > 0 && (
        <div className="p-4 rounded-xl bg-white text-slate-900 text-sm space-y-1">
          <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Preview — {findMethod(methodId)?.label}</p>
          {preview.map((f, i) => (
            <p key={i}><span className="text-slate-500">{f.label}:</span> <strong className="break-all">{f.value}</strong></p>
          ))}
        </div>
      )}

      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      <button
        type="button"
        disabled={busy || !preview.length}
        onClick={send}
        className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-sm"
      >
        {busy ? 'Sending…' : 'Email payment details to customer'}
      </button>
    </div>
  );
};

export const ReplyEnquiry: React.FC = () => {
  const [params] = useSearchParams();
  const id = params.get('id') || '';
  const { api } = useAdmin();
  const navigate = useNavigate();
  const [enq, setEnq] = useState<StoredEnquiry | null>(null);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api(`/api/admin/enquiries?id=${encodeURIComponent(id)}`)
      .then(d => setEnq(d.enquiry))
      .catch(e => setError(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const send = async () => {
    setBusy(true);
    setError('');
    try {
      await api('/api/admin/reply-enquiry', { method: 'POST', body: JSON.stringify({ id, message }) });
      navigate(`/admin/enquiries/${id}`);
    } catch (e: any) {
      setError(e.message === 'not-configured' ? 'Email (SMTP) is not configured on the server yet.' : e.message);
    } finally {
      setBusy(false);
    }
  };

  if (!enq) return <p className="text-sm text-slate-400">{error || 'Loading…'}</p>;

  return (
    <div className="space-y-5 max-w-3xl">
      <Link to={`/admin/enquiries/${id}`} className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to enquiry
      </Link>
      <h1 className="text-2xl font-black font-display">Reply to {enq.name}</h1>
      <p className="text-sm text-slate-400">To {enq.email}</p>
      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-sm text-slate-300 whitespace-pre-wrap">{enq.message}</div>
      <label className="block text-xs text-slate-400" htmlFor="reply">Your reply</label>
      <textarea id="reply" value={message} onChange={e => setMessage(e.target.value)} rows={8} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm" />
      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      <button type="button" disabled={busy || !message.trim()} onClick={send} className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-sm">
        {busy ? 'Sending…' : 'Send reply'}
      </button>
    </div>
  );
};
