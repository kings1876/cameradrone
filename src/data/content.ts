import { BlogPost, FAQItem } from '../types';

import { BLOG_POSTS as ALL_POSTS } from './blogPosts';

/** Newest first. */
export const BLOG_POSTS: BlogPost[] = [...ALL_POSTS].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'CASA Regulations',
    question: 'What are the official CASA drone flight rules in Australia?',
    answer: 'In Australia, recreational and commercial drone pilots must follow CASA (Civil Aviation Safety Authority) standard operating conditions: (1) Do not fly higher than 120 metres (400 ft) above the ground; (2) Keep your drone within visual line-of-sight with your own eyes; (3) Keep at least 30 metres away from other people; (4) Never fly over people or crowded public spaces like beaches, sports ovals, or festivals; (5) Do not fly within 5.5 km of controlled aerodromes if your drone weighs over 250g; (6) Only fly during daylight hours, not in fog or clouds.'
  },
  {
    id: 'faq-2',
    category: 'CASA Regulations',
    question: 'Do I need to register my drone or get a pilot license in Australia?',
    answer: 'If you fly recreationally and your drone weighs under 250 grams (such as the DJI Mini 4 Pro), no CASA registration or license is required. If your drone weighs over 250g and you fly recreationally, you still fly under standard operating rules without requiring a commercial RePL. For commercial operations (flying for hire, photography business, or surveying), you can operate in the CASA excluded category (under 2kg) by completing the free CASA operator accreditation online, or hold a Remote Pilot Licence (RePL) for drones above 2kg.'
  },
  {
    id: 'faq-3',
    category: 'Shipping & Delivery',
    question: 'How does Free Nationwide Shipping work across Australia?',
    answer: 'All products purchased on Drones for Sale qualify for 100% Free Nationwide Express Courier Delivery. We ship to every Australian state and territory: New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania, Australian Capital Territory, and the Northern Territory. Metro orders (Sydney, Melbourne, Brisbane) typically arrive within 1–2 business days, while regional and WA deliveries arrive within 2–4 business days with signature on delivery and parcel tracking.'
  },
  {
    id: 'faq-4',
    category: 'Crypto & Discounts',
    question: 'How do I claim the 10% Crypto payment discount at checkout?',
    answer: 'When you place your order via our secure Order Form, select "Crypto" as your payment method. An automatic 10% discount is instantly deducted from your total order value. We accept Bitcoin (BTC), Ethereum (ETH) and USDT (TRC-20). You will receive our verified wallet address and network, and upon transmitting your transaction hash, our dispatch team immediately allocates and secures your hardware.'
  },
  {
    id: 'faq-5',
    category: 'Warranty & Returns',
    question: 'Are all camera drones genuine Australian stock with local warranty?',
    answer: 'Yes! Every drone and accessory sold through our store is genuine Australian stock backed by manufacturer warranties and full Australian Consumer Law (ACL) consumer guarantees. You have direct access to local repair centres, local firmware support, and our Australian technician hotline.'
  },
  {
    id: 'faq-6',
    category: 'Hardware & Selection',
    question: 'Which DJI drone should I choose: Mini 4 Pro, Air 3 or Mavic 3 Pro?',
    answer: 'The DJI Mini 4 Pro is the most portable option and weighs under 249g. The DJI Air 3 is a larger foldable drone for creators who want more capability. The DJI Mavic 3 Pro is our flagship consumer model for professional photo and video work. For commercial inspection, mapping or agriculture, see our Enterprise & Thermal and Agricultural Spraying categories, or contact us and we will recommend a setup for your needs.'
  }
];

export const BRAND_MILESTONES = [
  {
    year: '17 May 2018',
    title: 'Founded in Australia',
    description: 'Drones for Sale was established to supply genuine camera drones and accessories across the country.'
  }
];
