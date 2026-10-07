import { BlogPost, FAQItem } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    image: '/products/dji-mavic-3-pro.jpg',
    imageAlt: 'DJI Mavic 3 Pro drone',
    slug: 'best-drone-for-sale-australia-2026-buyers-guide',
    title: '2026 Australian Guide: Finding the Best DJI Drone for Sale',
    subtitle: 'From sub-249g travel drones to professional cinema platforms: how to choose between DJI Mini, Air, Mavic 3 Pro and Inspire 3.',
    date: 'September 2026',
    readTime: '5 min read',
    author: 'Flight Operations Team',
    tags: ['Drone Sales', 'DJI Drones For Sale', 'CASA Regulations'],
    excerpt: 'Searching for the best DJI drone for sale in Australia? Here is how the Mini, Air, Mavic 3 Pro and Inspire 3 families differ, and what to check before you buy.',
    content: [
      'DJI’s consumer and prosumer range covers a wide spread of budgets and uses. Choosing the right model comes down to how and where you will fly, what you will shoot, and how much you want to carry.',
      'The DJI Mini 4 Pro is the compact choice. Under 249 grams, it falls under the CASA exemption for recreational operators below 250g, though standard operating conditions (120m altitude limit, visual line-of-sight, and keeping 30m away from other people) always apply. It is available on its own, with the RC 2 screen controller, or in Fly More Combo packages with extra batteries.',
      'The DJI Air 3 steps up to a larger foldable airframe and is offered as a standalone drone, a Fly More Combo, or a Fly More Combo with the RC 2 controller. It suits creators who want more capability than a Mini while staying portable.',
      'For professional photo and video work, the DJI Mavic 3 Pro is the flagship in our DJI range, available standalone or as a Fly More Combo with either the DJI RC or the DJI RC Pro controller. At the top end, the DJI Inspire 3 is a dedicated cinema platform for film and broadcast crews.',
      'Before buying, consider battery needs, controller preference, how portable the kit needs to be, and whether your flying is recreational or commercial. If you are unsure which package suits you, contact us and we will help you choose.'
    ],
    targetKeywords: ['drone for sale', 'drone sales', 'dji drones for sale', 'dji drone for sale', 'dji mini 4 pro', 'dji mavic 3 pro']
  },
  {
    id: 'post-2',
    image: '/products/dji-matrice-30t.jpg',
    imageAlt: 'DJI Matrice 30T enterprise drone',
    slug: 'enterprise-drones-matrice-mavic-3-enterprise-guide',
    title: 'Enterprise Drones in Australia: Matrice, Mavic 3 Enterprise and Phantom 4',
    subtitle: 'Choosing an enterprise drone for inspection, mapping, surveying and thermal work.',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Enterprise Drones', 'Thermal Drones', 'Surveying'],
    excerpt: 'A practical overview of the DJI Matrice, Mavic 3 Enterprise and Phantom 4 lines and the kinds of work each is typically chosen for.',
    content: [
      'Enterprise drones are built for repeatable, data-driven work rather than casual flying: asset inspection, mapping, surveying, public safety and agriculture.',
      'The DJI Matrice range, including the Matrice 30, Matrice 30T, Matrice 4 Enterprise and Matrice 4 Thermal, is aimed at inspection, public safety and industrial operators. Thermal variants add a thermal imaging payload for tasks such as infrastructure inspection and search operations.',
      'The DJI Mavic 3 Enterprise and Mavic 3 Thermal offer a more compact, portable enterprise platform. The Mavic 3 Multispectral is aimed at crop monitoring and agronomy work.',
      'The DJI Phantom 4 line, including the Phantom 4 Pro RTK SE and the Phantom 4 Multispectral, remains a common choice for surveying and precision agriculture workflows.',
      'Stock and lead times can change quickly on enterprise models. Contact us to confirm availability, discuss accessories such as spare batteries, and talk through the best fit for your operation. Commercial operators should also confirm their CASA obligations before flying.'
    ],
    targetKeywords: ['enterprise drones', 'dji matrice', 'thermal drone', 'dji mavic 3 enterprise', 'surveying drone']
  },
  {
    id: 'post-3',
    image: '/products/xag-p30-spraying-drone.jpg',
    imageAlt: 'XAG P30 agricultural spraying drone',
    slug: 'agricultural-spraying-drones-australia-guide',
    title: 'Agricultural Spraying Drones in Australia: What to Know Before You Buy',
    subtitle: 'An introduction to spraying drones and multispectral crop monitoring for Australian farms.',
    date: 'July 2026',
    readTime: '4 min read',
    author: 'Agriculture Systems Lead',
    tags: ['Spraying Drones', 'Agriculture', 'Multispectral'],
    excerpt: 'Spraying drones are changing how Australian growers cover paddocks and orchards. Here is what to consider when choosing a system.',
    content: [
      'Agricultural spraying drones allow growers to apply products to crops quickly and accurately, including on terrain that is difficult to cover with ground machinery.',
      'Our range includes spraying systems from XAG and BROUAV, with accessories such as DJI Agras batteries, chargers and spreading systems. Larger tank capacity generally means fewer refills but a larger investment, so match the system to the size of your operation.',
      'Multispectral drones, such as the DJI Mavic 3 Multispectral and Phantom 4 Multispectral, support crop health monitoring and variable-rate planning by capturing data that is not visible to the naked eye.',
      'Aerial application is regulated. Before buying or operating a spraying drone, check the CASA requirements and the chemical application rules that apply in your state or territory. Contact us to discuss the right system for your operation.'
    ],
    targetKeywords: ['spraying drone', 'agricultural drone', 'xag spraying drone', 'multispectral drone', 'agras']
  }
];

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
    answer: 'All products purchased on Camera Drone Sales Australia qualify for 100% Free Nationwide Express Courier Delivery. We ship to every Australian state and territory: New South Wales, Victoria, Queensland, Western Australia, South Australia, Tasmania, Australian Capital Territory, and the Northern Territory. Metro orders (Sydney, Melbourne, Brisbane) typically arrive within 1–2 business days, while regional and WA deliveries arrive within 2–4 business days with signature on delivery and parcel tracking.'
  },
  {
    id: 'faq-4',
    category: 'Crypto & Discounts',
    question: 'How do I claim the 10% Crypto payment discount at checkout?',
    answer: 'When you place your order via our secure Order Form, select "Crypto" as your payment method. An automatic 10% discount is instantly deducted from your total order value. We accept Bitcoin (BTC), Ethereum (ETH), USDT (TRC20 / ERC20), and Solana (SOL). You will receive our verified wallet address and QR code, and upon transmitting your transaction hash, our dispatch team immediately allocates and secures your hardware.'
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
    description: 'Camera Drone Sales Australia was established to supply genuine camera drones and accessories across the country.'
  }
];
