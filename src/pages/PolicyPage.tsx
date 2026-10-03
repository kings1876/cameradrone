import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Truck, RotateCcw, ShieldCheck, FileText } from 'lucide-react';

export const PolicyPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const titles: Record<string, string> = {
      shipping: 'Nationwide Shipping Policy | Camera Drone Sales Australia',
      refund: 'Australian Returns & Refund Policy | Camera Drone Sales Australia',
      privacy: 'Privacy & Cookie Notice | Camera Drone Sales Australia',
      terms: 'Terms of Service & CASA Airspace | Camera Drone Sales Australia',
    };
    document.title = titles[path] || 'Customer Policies | Camera Drone Sales Australia';
  }, [path]);

  return (
    <div className="py-12 bg-[#0b0f17] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Flight Catalog</span>
          </Link>
        </div>

        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {path === 'shipping' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>Logistics & Express Delivery</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                Australia Nationwide Shipping Policy
              </h1>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  <strong>1. 100% Free Nationwide Express Delivery:</strong> All camera drones, cinema payloads, and accessories sold on Camera Drone Sales Australia qualify for complimentary Express Courier delivery to every Australian address.
                </p>
                <p>
                  <strong>2. Coverage States & Territories:</strong> We ship daily to New South Wales (NSW), Victoria (VIC), Queensland (QLD), Western Australia (WA), South Australia (SA), Tasmania (TAS), Australian Capital Territory (ACT), and Northern Territory (NT).
                </p>
                <p>
                  <strong>3. Transit Durations:</strong> Metro capital city orders (Sydney, Melbourne, Brisbane) typically arrive within 1–2 business days. Regional and Western Australia addresses arrive in 2–4 business days.
                </p>
                <p>
                  <strong>4. Security & Lithium Battery Safety:</strong> All orders are dispatched in reinforced, shock-resistant outer packaging with full transit insurance and signature-on-delivery tracking. High-capacity intelligent flight batteries comply strictly with Australian IATA air cargo transport regulations.
                </p>
              </div>
            </div>
          )}

          {path === 'refund' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <RotateCcw className="w-4 h-4" />
                <span>Customer Protection</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                Australian Returns & Refund Policy
              </h1>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  <strong>1. Australian Consumer Law (ACL) Guarantees:</strong> Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major hardware failure and compensation for any other reasonably foreseeable loss or damage.
                </p>
                <p>
                  <strong>2. 30-Day Change-of-Mind Returns:</strong> Unopened, sealed flight hardware in its original manufacturer packaging with undamaged factory seals may be returned within 30 days of receipt.
                </p>
                <p>
                  <strong>3. Pre-Flight Technical Support:</strong> If you experience firmware calibration errors or controller synchronization issues upon initial unboxing, our Australian technical desk provides direct assistance before initiating any warranty exchange.
                </p>
                <p>
                  <strong>4. Crypto Refund Settlement:</strong> For orders placed with cryptocurrency (10% discount), verified refunds are returned in USDT (TRC-20) or equivalent cryptocurrency to your nominated receiving address based on the exact USD value paid.
                </p>
              </div>
            </div>
          )}

          {path === 'privacy' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Data Protection</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                Privacy & Cookie Notice
              </h1>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  <strong>1. Collection of Order Information:</strong> We collect only necessary details (name, email, delivery address, phone number) required to fulfill your physical equipment shipment across Australia.
                </p>
                <p>
                  <strong>2. No Data Reselling:</strong> We never sell, lease, or monetize your contact or telemetry data with third parties or advertising brokers.
                </p>
                <p>
                  <strong>3. Cookies:</strong> Essential session cookies are utilized strictly to preserve your cart manifest and active filtering preferences during navigation.
                </p>
              </div>
            </div>
          )}

          {path === 'terms' && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Legal Disclosures</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white font-display">
                Terms of Service & CASA Airspace Notice
              </h1>
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  <strong>1. Civil Aviation Safety Authority (CASA) Compliance:</strong> Buyers agree to fly all unmanned aerial vehicles (UAVs) in strict accordance with Australian civil aviation safety regulations. Recreational flyers must observe the 120m altitude ceiling, maintain direct visual line of sight, and maintain a minimum distance of 30 metres from other people.
                </p>
                <p>
                  <strong>2. Commercial Operations (ReOC):</strong> Commercial pilots operating drones heavier than 2kg are responsible for holding valid RePL and ReOC accreditation where required by CASA.
                </p>
                <p>
                  <strong>3. Governing Law:</strong> These terms are governed by the laws of Australia and the states and territories in which the hardware is delivered.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
