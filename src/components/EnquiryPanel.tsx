import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Send } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { leadCtaFor } from '../data/leadCta';
import { postForm } from '../lib/reply';
import { BUSINESS } from '../business';

const field =
  'w-full px-3 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500';
const label = 'block text-xs font-semibold text-slate-300 mb-1 text-left';

interface EnquiryPanelProps {
  postTitle: string;
  postSlug: string;
  relatedProducts: string[];
}

/** A short enquiry form that closes a blog post. Commercial topics go to the quote inbox, consumer topics to the contact inbox. */
export const EnquiryPanel: React.FC<EnquiryPanelProps> = ({ postTitle, postSlug, relatedProducts }) => {
  const copy = leadCtaFor(relatedProducts);
  const formName = copy.quote ? 'quote' : 'contact';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [sending, setSending] = useState(false);
  const [state, setState] = useState<'idle' | 'sent' | 'error'>('idle');

  const interest = relatedProducts
    .map(s => PRODUCTS.find(p => p.slug === s)?.name)
    .filter((n): n is string => !!n)
    .slice(0, 3)
    .join('; ');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const res = await postForm({
      formName,
      website,
      name,
      email,
      phone,
      message,
      meta: {
        Source: `Blog guide: ${postTitle}`,
        Page: `/blog/${postSlug}`,
        'Products in guide': interest || '—'
      }
    });
    setSending(false);
    setState(res.ok ? 'sent' : 'error');
  };

  if (state === 'sent') {
    return (
      <section aria-label="Enquiry sent" className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-7 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
        <h2 className="text-xl font-black text-white font-display">Thanks {name.split(' ')[0] || ''}, we have your enquiry</h2>
        <p className="text-sm text-slate-300">
          We have emailed a confirmation to {email}. A specialist will reply with pricing and availability, usually within one business day.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="enquiry-heading" className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 space-y-5">
      <div className="text-center space-y-2">
        <h2 id="enquiry-heading" className="text-xl sm:text-2xl font-black text-white font-display">
          {copy.quote ? 'Get a quote on the equipment in this guide' : 'Ask a specialist about the drones in this guide'}
        </h2>
        <p className="text-sm text-slate-300">
          {copy.quote
            ? 'Tell us what you need to do and where. We will recommend the right aircraft and reply with a written quote. Delivery across Australia is free.'
            : 'Tell us how you plan to fly and your budget, and a specialist will recommend a package and reply by email.'}
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="enq-name" className={label}>Your name *</label>
            <input id="enq-name" className={field} required autoComplete="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="enq-email" className={label}>Email *</label>
            <input id="enq-email" type="email" className={field} required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <label htmlFor="enq-phone" className={label}>Phone (optional)</label>
          <input id="enq-phone" type="tel" className={field} autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="enq-message" className={label}>What do you need? *</label>
          <textarea
            id="enq-message"
            className={`${field} min-h-[110px]`}
            required
            placeholder={
              copy.quote
                ? 'The job, the area or site, quantity, timeline and budget range…'
                : 'Which drone you are considering, how you plan to use it and your budget…'
            }
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        {state === 'error' && (
          <p role="alert" className="text-sm text-red-300 text-center">
            We could not send that just now. Please try again, use the <Link to="/quote" className="underline">quote form</Link> or email{' '}
            <a href={`mailto:${BUSINESS.email}`} className="underline">{BUSINESS.email}</a>.
          </p>
        )}

        <div className="flex flex-col items-center gap-3">
          <button
            type="submit"
            disabled={sending}
            className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 rounded-lg inline-flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{sending ? 'Sending…' : copy.quote ? 'Request my quote' : 'Send my enquiry'}</span>
          </button>
          <p className="text-xs text-slate-400">
            Prefer to order? Use the <Link to="/order" className="text-amber-400 underline">order form</Link> or the full{' '}
            <Link to="/quote" className="text-amber-400 underline">quote form</Link>. We only use your details to reply to this enquiry.
          </p>
        </div>
      </form>
    </section>
  );
};
