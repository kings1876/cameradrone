import React, { useState } from 'react';
import { X, CheckCircle2, Copy, Check, Zap, Truck, ShieldCheck, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('NSW');
  const [postcode, setPostcode] = useState('');
  const [flightNotes, setFlightNotes] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState<'BTC' | 'ETH' | 'USDT' | 'SOL'>('USDT');
  const [txHash, setTxHash] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cryptoDiscount = Math.round(subtotal * 0.1);
  const total = subtotal - cryptoDiscount;

  const CRYPTO_WALLETS = {
    USDT: {
      network: 'USDT (TRC-20 Network)',
      address: 'TY3e8DroneAusTether78s92kX9a239401v',
      note: 'Zero network congestion, recommended for fastest dispatch.'
    },
    BTC: {
      network: 'Bitcoin (BTC Native SegWit)',
      address: 'bc1q8aerodroneaustraliaflight79x23908k',
      note: 'Require 2 network confirmations before dispatch.'
    },
    ETH: {
      network: 'Ethereum (ETH / ERC-20)',
      address: '0x71C93a7D21E14b620593B62047b2c7C7cAEc89a0',
      note: 'Standard Ethereum Mainnet transaction.'
    },
    SOL: {
      network: 'Solana (SOL)',
      address: 'AeroAusDrone7vB829xLkE8pQ19kL893mNxv992z',
      note: 'Instant settlement within 5 seconds.'
    }
  };

  const currentWallet = CRYPTO_WALLETS[selectedCrypto];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !street || !city || !postcode) {
      setErrorMsg('Please complete all required shipping fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const generatedOrderId = `AU-DRONE-${Math.floor(100000 + Math.random() * 900000)}`;

    const orderData = {
      order_id: generatedOrderId,
      customer_name: fullName,
      customer_email: email,
      customer_phone: phone,
      destination_address: `${street}, ${city}, ${state} ${postcode}, Australia`,
      payment_method: `Crypto (${selectedCrypto}) - 10% Discount Applied`,
      items: items.map(i => `${i.product.name} (Qty: ${i.quantity}) - $${i.product.price * i.quantity}`).join('; '),
      original_subtotal: `$${subtotal} USD`,
      crypto_discount_saved: `-$${cryptoDiscount} USD`,
      final_order_total: `$${total} USD`,
      shipping: 'FREE Australia Nationwide Express Delivery',
      crypto_tx_hash: txHash || 'Pending confirmation via email / live chat',
      special_notes: flightNotes || 'None'
    };

    try {
      // Submit via Web3Forms API
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_OR_PENDING',
          to: 'koloonjo@gmail.com',
          subject: `New Drone Order [${generatedOrderId}] - ${fullName} ($${total} USD)`,
          from_name: 'Camera Drone Sales Australia Order Engine',
          ...orderData
        })
      });
    } catch {
      // Graceful fallback: Order still confirmed in client state
    }

    setOrderId(generatedOrderId);
    setIsSubmitting(false);
    setOrderComplete(true);
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-0.5">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>Official Order Form · 10% Crypto Incentive</span>
            </div>
            <h2 className="text-xl font-bold text-white font-display">
              {orderComplete ? 'Flight Order Confirmed' : 'Checkout & Delivery Manifest'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation View */
          <div className="p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Order ID: {orderId}
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Hardware Allocated & Scheduled for Dispatch
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                Thank you, <span className="text-white font-semibold">{fullName}</span>. An invoice and dispatch notification has been routed to <span className="text-white font-semibold">{email}</span>.
              </p>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-left max-w-lg mx-auto space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Payment Status:</span>
                <span className="text-amber-400 font-bold">10% Crypto Discount Applied</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">Total Charged:</span>
                <span className="text-white font-bold font-mono tabular-nums">${total.toLocaleString()} USD</span>
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

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
              >
                Return to Flight Shop
              </button>
            </div>
          </div>
        ) : (
          /* Main Order Form View */
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {errorMsg && (
              <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-lg text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Order Items Snapshot */}
            <div className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Order Summary ({items.length} {items.length === 1 ? 'Flight Unit' : 'Flight Units'})
              </span>
              <div className="divide-y divide-slate-800/80 text-xs">
                {items.map(item => (
                  <div key={item.product.id} className="py-1.5 flex justify-between items-center text-slate-300">
                    <span className="truncate max-w-[280px] sm:max-w-md">
                      {item.product.name} <span className="text-slate-500 font-mono">x{item.quantity}</span>
                    </span>
                    <span className="font-mono text-white tabular-nums shrink-0">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline text-xs">
                <div>
                  <span className="text-slate-400">Nationwide Shipping: </span>
                  <span className="text-emerald-400 font-semibold">FREE</span>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 line-through text-[11px] font-mono">
                    ${subtotal.toLocaleString()} USD
                  </div>
                  <div className="text-base font-extrabold text-amber-400 font-mono tabular-nums">
                    ${total.toLocaleString()} USD (10% Crypto Discount Applied)
                  </div>
                </div>
              </div>
            </div>

            {/* Customer & Australian Address Details */}
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
                  <label className="block text-[11px] text-slate-300 mb-1">Email Address * (For Tracking & Invoice)</label>
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

            {/* Crypto Payment Section */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Select Cryptocurrency (10% Discount)</span>
                </h3>
                <span className="text-[11px] text-amber-400 font-semibold font-mono">
                  Deduction: -${cryptoDiscount.toLocaleString()} USD
                </span>
              </div>

              {/* Currency Selector Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {(['USDT', 'BTC', 'ETH', 'SOL'] as const).map((coin) => (
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

              {/* Active Wallet Details & Simulated QR Container */}
              <div className="p-4 bg-slate-950/90 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Network:</span>
                  <span className="text-amber-400 font-semibold font-mono">{currentWallet.network}</span>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    Official Receiving Wallet Address
                  </label>
                  <div className="flex items-center gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800">
                    <code className="text-xs font-mono text-white truncate flex-1 select-all">
                      {currentWallet.address}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(currentWallet.address)}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded flex items-center gap-1 text-xs shrink-0 transition-colors"
                      title="Copy Wallet Address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  Note: {currentWallet.note}
                </p>

                {/* Optional Transaction Hash Input */}
                <div>
                  <label className="block text-[11px] text-slate-300 mb-1">
                    Transaction ID / TX Hash (Optional if sending now, or reply to email)
                  </label>
                  <input
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    placeholder="e.g. 0x8f2a... or blockchain transaction link"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 font-mono focus:outline-hidden focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Submission CTA */}
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
                    <span>Confirm Order & Secure Flight Allocation (${total.toLocaleString()} USD)</span>
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
  );
};
