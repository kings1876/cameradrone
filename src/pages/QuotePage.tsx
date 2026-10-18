import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Clock, Send } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { postForm } from '../lib/reply';

/** Categories that are quoted rather than bought straight from the cart. */
export const QUOTE_CATEGORIES = ['enterprise-drones', 'cameras-sensors', 'spraying-drones'];
export const isQuoteProduct = (category: string) => QUOTE_CATEGORIES.includes(category);

const USE_CASES = [
  'Agricultural spraying',
  'Crop monitoring / precision agriculture',
  'Thermal inspection',
  'Surveying / mapping / LiDAR',
  'Public safety / search and rescue',
  'Film and broadcast',
  'Resale / reseller',
  'Other'
];

const TIMELINES = ['As soon as possible', 'Within 1 month', '1-3 months', 'Just researching'];
const REOC = ['Yes, we hold a CASA ReOC', 'In progress', 'No / not required', 'Not sure'];
const STATES = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

const field = 'w-full px-3 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500';
const label = 'block text-xs font-semibold text-slate-300 mb-1';

export const QuotePage: React.FC = () => {
  const [params] = useSearchParams();
  const quoteProducts = useMemo(() => PRODUCTS.filter(p => isQuoteProduct(p.category)), []);
  const preselected = quoteProducts.find(p => p.slug === params.get('product'));

  const [productSlug, setProductSlug] = useState(preselected?.slug ?? '');
  const [otherProduct, setOtherProduct] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [useCase, setUseCase] = useState('');
  const [timeline, setTimeline] = useState(TIMELINES[0]);
  const [reoc, setReoc] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ ok: boolean } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (preselected) setProductSlug(preselected.slug);
  }, [preselected]);

  const chosen = quoteProducts.find(p => p.slug === productSlug);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const productLabel = chosen ? `${chosen.name} (A$${chosen.price.toLocaleString()} listed)` : otherProduct || 'Not specified';
    const message = [
      `Quote request: ${productLabel}`,
      `Quantity: ${quantity}`,
      notes ? `\n${notes}` : ''
    ].join('\n');
    const res = await postForm({
      formName: 'quote',
      website,
      name,
      email,
      phone,
      message,
      meta: {
        Product: productLabel,
        Quantity: quantity,
        'Use case': useCase || '—',
        Timeline: timeline,
        'CASA ReOC': reoc || '—',
        Company: company || '—',
        Location: [state, postcode].filter(Boolean).join(' ') || '—'
      }
    });
    setSending(false);
    setDone({ ok: res.ok });
  };

  if (done?.ok) {
    return (
      <main className="min-h-[60vh] bg-[#0b0f17] text-white">
        <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h1 className="text-3xl font-black font-display">Quote request received</h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Thanks {name.split(' ')[0] || ''}. We've emailed a confirmation to {email}. A specialist will reply with pricing, availability and delivery
            details, usually within one business day.
          </p>
          <div className="pt-2 flex justify-center gap-3 text-sm">
            <Link to="/shop" className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400">
              Keep browsing
            </Link>
            <Link to="/blog" className="px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:border-amber-500">
              Read buying guides
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0b0f17] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Enterprise, sensors &amp; spraying</span>
          <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight">Request a quote</h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tell us what you need and we'll come back with pricing, availability and delivery for commercial drones, thermal and multispectral sensors,
            LiDAR payloads and agricultural spray drones. Volume and reseller pricing available.
          </p>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> Reply within one business day
            </li>
            <li className="flex gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> Australian stock, set-up advice and CASA guidance
            </li>
            <li className="flex gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" /> No obligation, no payment taken on this form
            </li>
          </ul>
          <p className="text-xs text-slate-400">
            Looking for a consumer drone or battery? <Link to="/shop" className="text-amber-400 hover:underline">Shop and buy online</Link>.
          </p>
        </div>

        <form onSubmit={submit} className="lg:col-span-3 space-y-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7">
          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
            </label>
          </div>

          <div>
            <label htmlFor="q-product" className={label}>Product</label>
            <select id="q-product" className={field} value={productSlug} onChange={e => setProductSlug(e.target.value)}>
              <option value="">Not listed / not sure yet</option>
              {['enterprise-drones', 'cameras-sensors', 'spraying-drones'].map(cat => (
                <optgroup key={cat} label={quoteProducts.find(p => p.category === cat)?.categoryName ?? cat}>
                  {quoteProducts.filter(p => p.category === cat).map(p => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {!productSlug && (
            <div>
              <label htmlFor="q-other" className={label}>What are you looking for?</label>
              <input id="q-other" className={field} value={otherProduct} onChange={e => setOtherProduct(e.target.value)} placeholder="e.g. thermal drone for roof inspections" />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-qty" className={label}>Quantity</label>
              <input id="q-qty" type="number" min={1} max={999} className={field} value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <div>
              <label htmlFor="q-time" className={label}>Timeline</label>
              <select id="q-time" className={field} value={timeline} onChange={e => setTimeline(e.target.value)}>
                {TIMELINES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-use" className={label}>Main use</label>
              <select id="q-use" className={field} value={useCase} onChange={e => setUseCase(e.target.value)}>
                <option value="">Select…</option>
                {USE_CASES.map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-reoc" className={label}>CASA ReOC (commercial operators)</label>
              <select id="q-reoc" className={field} value={reoc} onChange={e => setReoc(e.target.value)}>
                <option value="">Select…</option>
                {REOC.map(u => <option key={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="q-state" className={label}>State</label>
              <select id="q-state" className={field} value={state} onChange={e => setState(e.target.value)}>
                <option value="">Select…</option>
                {STATES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="q-pc" className={label}>Postcode</label>
              <input id="q-pc" inputMode="numeric" maxLength={4} className={field} value={postcode} onChange={e => setPostcode(e.target.value.replace(/\D/g, ''))} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <label htmlFor="q-name" className={label}>Your name *</label>
              <input id="q-name" required className={field} value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="q-company" className={label}>Company / farm (optional)</label>
              <input id="q-company" className={field} value={company} onChange={e => setCompany(e.target.value)} autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="q-email" className={label}>Email *</label>
              <input id="q-email" type="email" required className={field} value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="q-phone" className={label}>Phone</label>
              <input id="q-phone" type="tel" className={field} value={phone} onChange={e => setPhone(e.target.value)} autoComplete="tel" />
            </div>
          </div>

          <div>
            <label htmlFor="q-notes" className={label}>Anything else we should know?</label>
            <textarea id="q-notes" rows={4} className={field} value={notes} onChange={e => setNotes(e.target.value)} placeholder="Area to cover, payload, existing drones, budget range…" />
          </div>

          {done && !done.ok && (
            <p role="alert" className="text-xs text-red-400">
              We couldn't send that just now. Please try again, or email us from the Contact page.
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 rounded-lg flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {sending ? 'Sending…' : 'Request my quote'}
          </button>
        </form>
      </div>
    </main>
  );
};
