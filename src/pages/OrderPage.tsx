import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Copy, Check, Zap, Truck, ShieldCheck, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';
import { makeOrderNumber, postForm, findMethod } from '../lib/reply';
import { PRODUCTS } from '../data/products';

interface OrderPageProps {
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const OrderPage: React.FC<OrderPageProps> = ({ cartItems, onOrderSuccess }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // If cart is empty, allow picking a flagship item or prompt to browse
  const items = cartItems.length > 0 ? cartItems : [{ product: PRODUCTS[1], quantity: 1 }];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('NSW');
  const [postcode, setPostcode] = useState('');
  const [flightNotes, setFlightNotes] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<'BTC' | 'ETH' | 'USDT'>('USDT');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cryptoDiscount = Math.round(subtotal * 0.1);
  const total = subtotal - cryptoDiscount;

  const wallet = (findMethod(`crypto-${selectedCrypto.toLowerCase()}`) as { wallet?: { address: string; network: string } } | null)?.wallet;
  const [walletCopied, setWalletCopied] = useState(false);
  const copyWallet = () => {
    if (!wallet) return;
    navigator.clipboard?.writeText(wallet.address).then(() => {
      setWalletCopied(true);
      window.setTimeout(() => setWalletCopied(false), 1800);
    });
  };
  const COIN_METHOD = { USDT: 'crypto-usdt', BTC: 'crypto-btc', ETH: 'crypto-eth' } as const;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !street || !city || !postcode) {
      setErrorMsg('Please complete all required shipping fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const generatedOrderId = makeOrderNumber();

    await postForm({
      formName: 'order',
      orderNumber: generatedOrderId,
      customerName: fullName,
      customerEmail: email,
      customerPhone: phone,
      address: `${street}, ${city}, ${state} ${postcode}, Australia`,
      paymentMethod: COIN_METHOD[selectedCrypto],
      notes: flightNotes,
      items: items.map(i => ({ name: i.product.name, quantity: i.quantity, lineTotal: i.product.price * i.quantity }))
    });

    setOrderId(generatedOrderId);
    setIsSubmitting(false);
    setOrderComplete(true);
    onOrderSuccess();
  };

  return (
    <div className="py-12 bg-[#0b0f17] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <Link to="/shop" className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <span className="text-xs text-slate-400 font-mono">Dedicated URL: /order</span>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>Direct Flight Hardware Manifest · 10% Crypto Incentive</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {orderComplete ? 'Flight Order Confirmed' : 'Official Drone Order Form'}
            </h1>
          </div>

          {orderComplete ? (
            <div className="p-8 sm:p-12 space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Order ID: {orderId}
                </span>
                <h2 className="text-2xl font-bold text-white font-display">
                  Order Received
                </h2>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. A confirmation has been sent to <span className="text-white font-semibold">{email}</span>. Please watch for our follow-up email with your payment details.
                </p>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-left max-w-lg mx-auto space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Next step:</span>
                  <span className="text-amber-400 font-bold">Payment details by email</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Total due (10% crypto discount applied):</span>
                  <span className="text-white font-bold font-mono tabular-nums">${total.toLocaleString()} AUD</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Delivery Address:</span>
                  <span className="text-white font-medium truncate max-w-xs">{street}, {city} {state} {postcode}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Shipping Provider:</span>
                  <span className="text-emerald-400 font-semibold">Free Express Courier AU (1–3 Days)</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/shop"
                  className="inline-block px-6 py-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
                >
                  Return to Flight Catalog
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {errorMsg && (
                <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-lg text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Order Items Summary */}
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Equipment In Order ({items.length} {items.length === 1 ? 'Flight Unit' : 'Flight Units'})
                </span>
                <div className="divide-y divide-slate-800/80 text-xs">
                  {items.map(item => (
                    <div key={item.product.id} className="py-2 flex justify-between items-center text-slate-300">
                      <span className="truncate max-w-[280px] sm:max-w-md font-medium text-white">
                        {item.product.name} <span className="text-slate-400 font-mono">x{item.quantity}</span>
                      </span>
                      <span className="font-mono text-white tabular-nums shrink-0 font-bold">
                        ${(item.product.price * item.quantity).toLocaleString()} AUD
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline text-xs">
                  <div>
                    <span className="text-slate-400">Nationwide Shipping: </span>
                    <span className="text-emerald-400 font-semibold">FREE (All Products)</span>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 line-through text-[11px] font-mono">
                      ${subtotal.toLocaleString()} AUD
                    </div>
                    <div className="text-lg font-extrabold text-amber-400 font-mono tabular-nums">
                      ${total.toLocaleString()} AUD (10% Crypto Discount Applied)
                    </div>
                  </div>
                </div>
              </div>

              {/* Australian Shipping Address Fields */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Australian Delivery Address</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Liam Henderson"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. pilot@aerialcinema.com.au"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Australian Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +61 412 345 678"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="e.g. 42 Aviation Way"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">City / Suburb *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Sydney"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">State / Territory *</label>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-hidden focus:border-amber-400"
                    >
                      <option value="NSW">NSW (New South Wales)</option>
                      <option value="VIC">VIC (Victoria)</option>
                      <option value="QLD">QLD (Queensland)</option>
                      <option value="WA">WA (Western Australia)</option>
                      <option value="SA">SA (South Australia)</option>
                      <option value="TAS">TAS (Tasmania)</option>
                      <option value="ACT">ACT (Australian Capital Territory)</option>
                      <option value="NT">NT (Northern Territory)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Postcode *</label>
                    <input
                      type="text"
                      required
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      placeholder="e.g. 2000"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-300 mb-1">Delivery Notes / Pilot Instructions (Optional)</label>
                  <input
                    type="text"
                    value={flightNotes}
                    onChange={(e) => setFlightNotes(e.target.value)}
                    placeholder="e.g. Leave with building security reception / Call upon arrival"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Cryptocurrency Payment Section */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Select Cryptocurrency (10% Discount)</span>
                  </h3>
                  <span className="text-[11px] text-amber-400 font-semibold font-mono">
                    Deduction: -${cryptoDiscount.toLocaleString()} AUD
                  </span>
                </div>

                {/* Coin Selector */}
                <div className="grid grid-cols-4 gap-2">
                  {(['USDT', 'BTC', 'ETH'] as const).map((coin) => (
                    <button
                      key={coin}
                      type="button"
                      onClick={() => setSelectedCrypto(coin)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                        selectedCrypto === coin
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500 shadow-sm'
                          : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {coin}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-3">
                  <p>
                    After you place the order we'll email you the exact {selectedCrypto} payment details (address, network and amount) for
                    your order. Please don't send any payment until you've received that email.
                  </p>
                  {wallet && (
                    <div className="space-y-1.5">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        Our {selectedCrypto} address · {wallet.network}
                      </p>
                      <div className="flex items-start gap-2">
                        <code className="flex-1 break-all rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 font-mono text-[11px] text-amber-300">
                          {wallet.address}
                        </code>
                        <button
                          type="button"
                          onClick={copyWallet}
                          className="shrink-0 inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-2 text-[11px] font-semibold text-slate-200 hover:border-amber-500"
                        >
                          {walletCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{walletCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Check that it starts with <strong className="text-slate-200">{wallet.address.slice(0, 6)}</strong> and ends with{' '}
                        <strong className="text-slate-200">{wallet.address.slice(-6)}</strong>, and that our confirmation email shows the same
                        address. Send only {selectedCrypto} on this network.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span>Transmitting Flight Order...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 fill-slate-950" />
                      <span>Confirm Order & Secure Flight Allocation (${total.toLocaleString()} AUD)</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-sky-400" />
                    <span>Australian Consumer Law Protected</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Truck className="w-3 h-3 text-emerald-400" />
                    <span>Free Australia-Wide Transit</span>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
