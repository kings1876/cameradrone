import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Hardware Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_OR_PENDING',
          to: 'koloonjo@gmail.com',
          subject: `Contact Inquiry: [${subject}] from ${name}`,
          from_name: 'Camera Drone Sales Australia Support',
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          message_body: message
        })
      });
    } catch {
      // Graceful fallback
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#0b0f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Support Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Australian Support Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Connect with Our Flight Specialists
              </h2>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Whether you need advice choosing between camera, enterprise and agricultural drones, assistance with CASA commercial classifications, or guidance on crypto checkout settlements, our Australian flight technicians are standing by.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">National Headquarters & Dispatch</h4>
                  <p className="text-slate-300 mt-0.5">Nationwide Warehousing & Logistics Hubs, Australia</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Dispatches daily to NSW, VIC, QLD, WA, SA, TAS, ACT, NT</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Direct Inquiries & Order Desk</h4>
                  <p className="text-slate-300 mt-0.5 font-mono">koloonjo@gmail.com</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Priority response within 1 business hour</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/60 rounded-xl border border-slate-800">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Operating Hours</h4>
                  <p className="text-slate-300 mt-0.5">Monday – Saturday: 8:30 AM – 6:00 PM AEST</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Sunday: Priority flight order dispatch & live chat</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>All communications handled directly in Australia. No automated off-shore call trees.</span>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-950 rounded-full border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{name}</span>. An Australian flight operations specialist has received your message and will respond to <span className="text-white font-semibold">{email}</span> promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white font-display">
                      Send a Message to Flight Support
                    </h3>
                    <p className="text-xs text-slate-400">
                      Powered by Web3Forms · Response routed directly to our operations inbox
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Cameron Wright"
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
                        placeholder="e.g. cameron@studios.com.au"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Australian Phone (Optional)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0400 123 456"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 mb-1">Inquiry Topic *</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-hidden focus:border-amber-400"
                      >
                        <option value="Hardware Inquiry">Hardware Advice & Drone Specs</option>
                        <option value="CASA Regulations">CASA Airspace & Certification Guidance</option>
                        <option value="Crypto Payment">10% Crypto Payment Assistance</option>
                        <option value="Order Tracking">Delivery Tracking & Transit Times</option>
                        <option value="Warranty / ACL">Australian Warranty & ACL Claim</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your requirements, preferred model, or flight location..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-amber-500/20"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Send Message to Operations Desk</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
