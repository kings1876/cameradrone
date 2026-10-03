import React from 'react';
import { X, ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';

export type PolicyType = 'shipping' | 'refund' | 'privacy' | 'terms' | null;

interface PolicyModalProps {
  policy: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policy, onClose }) => {
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          aria-label="Close policy"
        >
          <X className="w-5 h-5" />
        </button>

        {policy === 'shipping' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Logistics & Fulfillment</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">Australia Nationwide Shipping Policy</h2>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-normal">
              <p>
                <strong>1. 100% Free Nationwide Express Delivery:</strong> All drones and accessories sold on Camera Drone Sales Australia qualify for complimentary Express Courier delivery to every Australian address.
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

        {policy === 'refund' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <RotateCcw className="w-4 h-4" />
              <span>Customer Protection</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">Australian Returns & Refund Policy</h2>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-normal">
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

        {policy === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">Privacy & Cookie Notice</h2>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-normal">
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

        {policy === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Legal Disclosures</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">Terms of Service & CASA Airspace Notice</h2>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed font-normal">
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

        <div className="pt-4 border-t border-slate-800 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
