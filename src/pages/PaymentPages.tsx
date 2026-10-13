import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Check, Copy, CheckCircle2 } from 'lucide-react';
import { money } from '../lib/reply';

const CopyField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="w-full flex items-center justify-between gap-3 text-left p-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-500/60"
    >
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-slate-400">{label}</span>
        <span className="block font-mono text-sm text-white break-all">{value}</span>
      </span>
      <span className={`shrink-0 text-xs inline-flex items-center gap-1 ${copied ? 'text-emerald-400' : 'text-amber-400'}`}>
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  );
};

interface Details {
  orderNumber: string;
  customerName: string;
  amountDue: number;
  methodLabel: string;
  status: string;
  fields: { label: string; value: string }[];
  terms: string[];
}

export const PaymentDetailsPage: React.FC = () => {
  const [params] = useSearchParams();
  const id = params.get('id') || '';
  const [data, setData] = useState<Details | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');

  useEffect(() => {
    fetch(`/api/order/payment-details?id=${encodeURIComponent(id)}`)
      .then(async r => {
        const d = await r.json().catch(() => ({}));
        if (r.ok && d.ok) {
          setData(d);
          setState('ready');
        } else setState('missing');
      })
      .catch(() => setState('missing'));
  }, [id]);

  return (
    <div className="py-12 bg-[#0b0f17] text-white">
      <div className="max-w-xl mx-auto px-4 space-y-5">
        <h1 className="text-2xl font-black font-display">Payment details</h1>
        {state === 'loading' && <p className="text-sm text-slate-400">Loading…</p>}
        {state === 'missing' && (
          <p className="text-sm text-slate-300">
            We couldn't find payment details for this order yet. If you haven't received our payment-details email, please{' '}
            <Link to="/contact" className="text-amber-400 underline">contact us</Link> with your order number.
          </p>
        )}
        {state === 'ready' && data && (
          <>
            <div className="p-4 rounded-xl bg-[#0f172a] border border-slate-800">
              <p className="text-xs text-slate-400">Order <span className="font-mono text-amber-400">{data.orderNumber}</span> · {data.methodLabel}</p>
              <p className="text-3xl font-black mt-1">{money(data.amountDue)}</p>
            </div>
            <p className="text-sm text-slate-300">Hi {data.customerName}, tap a field to copy it:</p>
            <div className="space-y-2">
              {data.fields.map((f, i) => (
                <CopyField key={i} label={f.label} value={f.value} />
              ))}
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
              {data.terms.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
            <Link
              to={`/order/confirm-payment?id=${encodeURIComponent(data.orderNumber)}`}
              className="inline-block px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
            >
              I've made payment
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const MAX_BYTES = 3 * 1024 * 1024;

export const ConfirmPaymentPage: React.FC = () => {
  const [params] = useSearchParams();
  const id = params.get('id') || '';
  const [file, setFile] = useState<File | null>(null);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return setError('Please choose a screenshot or receipt.');
    if (file.size > MAX_BYTES) return setError('That file is too large — please upload an image under 3 MB.');
    setBusy(true);
    setError('');
    try {
      const fileData: string = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
        reader.onerror = () => reject(new Error('read-failed'));
        reader.readAsDataURL(file);
      });
      const res = await fetch('/api/order/confirm-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderNumber: id, fileType: file.type, fileData, note })
      });
      const d = await res.json().catch(() => ({}));
      if (res.ok && d.ok) setDone(true);
      else setError('We could not submit your screenshot. Please try again or email us.');
    } catch {
      setError('We could not submit your screenshot. Please try again or email us.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="py-12 bg-[#0b0f17] text-white">
      <div className="max-w-xl mx-auto px-4 space-y-5">
        <h1 className="text-2xl font-black font-display">Confirm your payment</h1>
        {done ? (
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-sm space-y-2">
            <p className="flex items-center gap-2 font-bold text-emerald-300"><CheckCircle2 className="w-5 h-5" /> Thanks — we've received your screenshot.</p>
            <p className="text-slate-300">We'll verify your payment and email you when your order is on its way.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <p className="text-sm text-slate-300">Order <span className="font-mono text-amber-400">{id}</span> — upload a screenshot or receipt of your payment (JPG, PNG, WebP or HEIC, up to 3 MB).</p>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              onChange={e => setFile(e.target.files?.[0] || null)}
              aria-label="Payment screenshot"
              className="block w-full text-sm text-slate-300 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-slate-800 file:text-slate-200"
            />
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              rows={3}
              placeholder="Optional note (e.g. transaction hash)"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm"
            />
            {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
            <button type="submit" disabled={busy} className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-sm">
              {busy ? 'Uploading…' : 'Submit payment confirmation'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
