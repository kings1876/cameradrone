// Policy page content, shared by the React page and the prerendered static HTML.
export interface PolicyContent {
  eyebrow: string;
  h1: string;
  paras: [string, string][];
}

export const POLICIES: Record<'shipping' | 'refund' | 'privacy' | 'terms', PolicyContent> = {
  "shipping": {
    "h1": "Australia Nationwide Shipping Policy",
    "eyebrow": "Logistics & Express Delivery",
    "paras": [
      [
        "1. 100% Free Nationwide Express Delivery:",
        "All drones and accessories sold on Drones for Sale qualify for complimentary Express Courier delivery to every Australian address."
      ],
      [
        "2. Coverage States & Territories:",
        "We ship daily to New South Wales (NSW), Victoria (VIC), Queensland (QLD), Western Australia (WA), South Australia (SA), Tasmania (TAS), Australian Capital Territory (ACT), and Northern Territory (NT)."
      ],
      [
        "3. Transit Durations:",
        "Metro capital city orders (Sydney, Melbourne, Brisbane) typically arrive within 1–2 business days. Regional and Western Australia addresses arrive in 2–4 business days."
      ],
      [
        "4. Security & Lithium Battery Safety:",
        "All orders are dispatched in reinforced, shock-resistant outer packaging with full transit insurance and signature-on-delivery tracking. High-capacity intelligent flight batteries comply strictly with Australian IATA air cargo transport regulations."
      ]
    ]
  },
  "refund": {
    "h1": "Australian Returns & Refund Policy",
    "eyebrow": "Customer Protection",
    "paras": [
      [
        "1. Australian Consumer Law (ACL) Guarantees:",
        "Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major hardware failure and compensation for any other reasonably foreseeable loss or damage."
      ],
      [
        "2. 30-Day Change-of-Mind Returns:",
        "Unopened, sealed flight hardware in its original manufacturer packaging with undamaged factory seals may be returned within 30 days of receipt."
      ],
      [
        "3. Pre-Flight Technical Support:",
        "If you experience firmware calibration errors or controller synchronization issues upon initial unboxing, our Australian technical desk provides direct assistance before initiating any warranty exchange."
      ],
      [
        "4. Crypto Refund Settlement:",
        "For orders placed with cryptocurrency (10% discount), verified refunds are returned in USDT (TRC-20) or equivalent cryptocurrency to your nominated receiving address based on the exact AUD value paid."
      ]
    ]
  },
  "privacy": {
    "h1": "Privacy & Cookie Notice",
    "eyebrow": "Data Protection",
    "paras": [
      [
        "1. Collection of Order Information:",
        "We collect only necessary details (name, email, delivery address, phone number) required to fulfill your physical equipment shipment across Australia."
      ],
      [
        "2. No Data Reselling:",
        "We never sell, lease, or monetize your contact or telemetry data with third parties or advertising brokers."
      ],
      [
        "3. Cookies:",
        "Essential session cookies are utilized strictly to preserve your cart manifest and active filtering preferences during navigation."
      ],
      [
        "4. Contacting You:",
        "We use your email address and phone number only to confirm orders, arrange delivery, answer enquiries and send quote replies. You can ask us at any time to stop non-essential messages."
      ],
      [
        "5. Access and Correction:",
        "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it unless we must keep it for tax, warranty or legal reasons. Use the Contact page to make a request."
      ]
    ]
  },
  "terms": {
    "h1": "Terms of Service & CASA Airspace Notice",
    "eyebrow": "Legal Disclosures",
    "paras": [
      [
        "1. Civil Aviation Safety Authority (CASA) Compliance:",
        "Buyers agree to fly all unmanned aerial vehicles (UAVs) in strict accordance with Australian civil aviation safety regulations. Recreational flyers must observe the 120m altitude ceiling, maintain direct visual line of sight, and maintain a minimum distance of 30 metres from other people."
      ],
      [
        "2. Commercial Operations (ReOC):",
        "Commercial pilots operating drones heavier than 2kg are responsible for holding valid RePL and ReOC accreditation where required by CASA."
      ],
      [
        "3. Governing Law:",
        "These terms are governed by the laws of Australia and the states and territories in which the hardware is delivered."
      ],
      [
        "4. Pricing and Availability:",
        "Prices are shown in Australian dollars (AUD) and listings, prices and stock may change without notice. An order is confirmed once we send you an order confirmation email."
      ],
      [
        "5. Products and Specifications:",
        "Descriptions and specifications are based on manufacturer information, which the manufacturer may update. Check the product page for the latest details before you order."
      ],
      [
        "6. Enterprise and Quoted Products:",
        "Enterprise, sensor and spraying products are supplied by quote. A quote is valid only for the period stated in our reply, and no payment is taken through the quote form."
      ]
    ]
  }
};

export const POLICY_INTRO: Record<keyof typeof POLICIES, string> = {
  shipping:
    'This policy explains how Drones for Sale delivers orders across Australia: which states and territories we ship to, how long delivery usually takes, and how drones, batteries and accessories are packed. All prices on the site are in Australian dollars (AUD), and delivery to any Australian address is free.',
  refund:
    'This policy sets out your rights if something is wrong with an order or you change your mind. It covers your Australian Consumer Law guarantees, 30-day change-of-mind returns for unopened hardware, pre-flight technical support, and how refunds are settled, including for orders paid in cryptocurrency.',
  privacy:
    'This notice explains what personal information Drones for Sale collects when you order, request a quote or contact us, how it is used, and the choices you have. We only collect what is needed to fulfil your order and reply to your enquiry.',
  terms:
    'These terms apply to every order, quote request and visit to this website. They cover your responsibilities under Australian drone rules, commercial operator requirements, pricing and availability, product information, quoted products and the law that governs your purchase.'
};

export const POLICY_HELP =
  'Need help? Read the FAQ for answers on CASA rules, shipping, warranty and crypto payments, use the Contact page to reach a specialist, or browse the full catalogue of camera, enterprise and spraying drones, batteries and accessories. Drones for Sale is operated under ABN 91 658 710 173.';
