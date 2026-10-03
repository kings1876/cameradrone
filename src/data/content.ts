import { Review, BlogPost, FAQItem } from '../types';

export const TRUSTPILOT_STATS = {
  rating: 4.9,
  maxRating: 5.0,
  totalReviews: 2480,
  satisfactionRate: '99.4%',
  statusText: 'Excellent · Verified Australian Trustpilot Rating'
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Lachlan Campbell',
    location: 'Sydney, New South Wales',
    rating: 5,
    date: '18 September 2026',
    droneModel: 'DJI Mavic 3 Pro Cine Flagship',
    title: 'Flawless gear and immediate 10% crypto discount checkout!',
    text: 'Ordered the Mavic 3 Pro Cine for our Sydney Harbour commercial documentary shoot. Selected the crypto payment option at checkout, paid in USDT with the 10% discount applied automatically, and received courier tracking within 2 hours. The package arrived in Bondi in pristine condition with Australian warranty paperwork.',
    useCase: 'Cinema & Television',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    author: 'Dr. Marcus Vance',
    location: 'Perth, Western Australia',
    rating: 5,
    date: '04 August 2026',
    droneModel: 'DJI Matrice 350 RTK Enterprise UAV',
    title: 'Surpasses every enterprise supplier in Australia for speed and technical support.',
    text: 'We deploy UAVs for mining pit surveys across the Pilbara. Other Australian suppliers had 6-8 week lead times, but Camera Drone Sales Australia dispatched our Matrice 350 RTK same-day from warehouse stock. Firmware pre-updated and flight logs clean. Unmatched reliability.',
    useCase: 'Surveying & Mining',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    author: 'Chloe Sutherland',
    location: 'Byron Bay, New South Wales',
    rating: 5,
    date: '29 July 2026',
    droneModel: 'DJI Mini 4 Pro Fly More Combo',
    title: 'Perfect sub-249g travel companion for surf cinema',
    text: 'The true vertical 4K mode on the Mini 4 Pro is incredible for social reels over the surf point. Being under 249 grams means no CASA operator registration hassle while traveling. The ND filter set makes midday Australian ocean glare completely disappear. 10/10 service!',
    useCase: 'Landscape & Surf',
    verifiedPurchase: true
  },
  {
    id: 'rev-4',
    author: 'Mitchell Rowe',
    location: 'Melbourne, Victoria',
    rating: 5,
    date: '12 July 2026',
    droneModel: 'Sony Alpha 7R V DSLR / Mirrorless UAV Rig',
    title: 'Best price in Australia for full-frame 61MP aerial camera payloads',
    text: 'I compared dslr camera prices in Australia across every camera shop and d1store competitor. Camera Drone Sales Australia had the most solid combo rig with balanced gimbal mounting already calibrated for our heavy-lift octocopter. The 8K footage is razor-sharp.',
    useCase: 'Commercial Real Estate',
    verifiedPurchase: true
  },
  {
    id: 'rev-5',
    author: 'Liam Fitzgerald',
    location: 'Gold Coast, Queensland',
    rating: 5,
    date: '22 June 2026',
    droneModel: 'DJI Avata 2 FPV Explorer Combo',
    title: 'Insane flight sensation and ultra-smooth 4K footage',
    text: 'The Goggles 3 micro-OLED screens make you feel like you are actually sitting inside the cockpit. Flying through tight rainforested valleys in the Gold Coast hinterland with rock-solid O4 transmission. Express delivery to QLD was completely free!',
    useCase: 'Recreational Flight',
    verifiedPurchase: true
  },
  {
    id: 'rev-6',
    author: 'Sophie Zhang',
    location: 'Brisbane, Queensland',
    rating: 5,
    date: '03 June 2026',
    droneModel: 'GoPro HERO13 Black Aerial Flight Pack',
    title: 'Top-tier customer support and authentic Australian stock',
    text: 'Purchased for mounting onto our custom FPV quad for action sports tracking. Arrived double-boxed with genuine Australian serial numbers and warranty registration. Great communication via the live chat when confirming battery transport guidelines.',
    useCase: 'Cinema & Television',
    verifiedPurchase: true
  },
  {
    id: 'rev-7',
    author: 'Harrison Bell',
    location: 'Hobart, Tasmania',
    rating: 5,
    date: '15 May 2026',
    droneModel: 'Autel EVO II Pro V3 6K Rugged Bundle',
    title: 'No software geofencing makes all the difference in remote Tasmania',
    text: 'Having zero forced geofencing unlock hoops when operating on remote coastal research contracts in southwest Tasmania is essential. The 6K 1-inch sensor captures incredible dynamic range in overcast weather. Outstanding retailer.',
    useCase: 'Landscape & Surf',
    verifiedPurchase: true
  },
  {
    id: 'rev-8',
    author: 'Darren O’Connor',
    location: 'Adelaide, South Australia',
    rating: 5,
    date: '28 April 2026',
    droneModel: 'DJI Inspire 3 Cinema UAV',
    title: 'The gold standard for Australian film crews. White-glove delivery.',
    text: 'Investing in the Inspire 3 was a major decision for our production studio. The team provided comprehensive technical pre-shipment checks, verified RTK satellite lock, and arranged tracked high-value security transit. Outstanding experience.',
    useCase: 'Cinema & Television',
    verifiedPurchase: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'best-drone-for-sale-australia-2026-buyers-guide',
    title: '2026 Australian Guide: Finding the Best Drone for Sale',
    subtitle: 'From sub-249g travel quads to 8K cinema workhorses: comparing flight time, sensor sizes, and CASA laws.',
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Flight Operations Team',
    tags: ['Drone Sales', 'DJI Drones For Sale', 'CASA Regulations'],
    excerpt: 'Searching for the best drone for sale in Australia? Whether you need a compact folding UAV for coastal surf photography or an 8K full-frame cinema flagship, here is everything you need to know about pricing, specs, and airspace safety.',
    content: [
      'The Australian drone market has advanced rapidly into 2026. Drone sales across Melbourne, Sydney, and Brisbane reflect a surging demand for both ultralight travel drones and heavy-lift cinema payloads.',
      'If you are seeking drones on sale for recreational travel, sub-250g models like the DJI Mini 4 Pro remain the benchmark. Under Australia’s Civil Aviation Safety Authority (CASA) regulations, recreational drones under 249g do not require formal operator accreditation, though standard operating conditions (120m altitude limit, visual line-of-sight, and keeping 30m away from non-consenting individuals) always apply.',
      'For film professionals, DJI drones for sale such as the Mavic 3 Pro Cine and Inspire 3 provide Apple ProRes 422 HQ recording, dual-operator master controls, and dynamic optical focal lengths ranging from 24mm to 166mm.',
      'Before buying, consider: battery flight endurance, obstacle avoidance reliability in high Australian winds, and whether your workflow benefits from full-frame DSLR camera integration on multi-rotor platforms.'
    ],
    targetKeywords: ['drone for sale', 'drone sales', 'drones on sale', 'dji drones for sale', 'dji drone for sale', 'camera drone sale']
  },
  {
    id: 'post-2',
    slug: 'dslr-vs-dedicated-uav-camera-aerial-cinematography',
    title: 'DSLR for Sale vs. Dedicated UAV Gimbal Cameras in 2026',
    subtitle: 'Breaking down full-frame sensor dynamics, mirrorless optics, and gimbal payloads for Australian filmmakers.',
    date: 'August 2026',
    readTime: '5 min read',
    author: 'Optical Engineering Specialist',
    tags: ['DSLR For Sale', 'Digital SLR Sale', 'Cameras On Sale'],
    excerpt: 'Comparing traditional full-frame mirrorless digital SLR cameras mounted to aerial gimbals versus integrated drone camera sensors like the Hasselblad 4/3 CMOS.',
    content: [
      'Many cinematographers browse digital slr sales seeking maximum dynamic range and lens versatility. But how does an airborne DSLR camera compare to purpose-built UAV cameras?',
      'High-resolution cameras like the Sony Alpha 7R V (61MP) provide incomparable detail for photogrammetry and large-scale print photography. When examining dslr camera prices in Australia, integrating a mirrorless body with a 3-axis UAV gimbal provides lens interchangeability from ultra-wide 16mm primes to 85mm portrait lenses.',
      'However, integrated camera drones like the DJI Mavic 3 Pro Cine offer tighter aerodynamic flight performance, superior battery efficiency (40+ minutes vs 18 minutes on heavy lifters), and integrated flight telemetry directly recorded into the video metadata.',
      'For pure cinema projects where lens character and anamorphic flares are paramount, SLR cameras for sale configured with lightweight carbon rigs remain the top pick on Australian commercial sets.'
    ],
    targetKeywords: ['dslr for sale', 'digital slr sale', 'slr cameras for sale', 'dslr camera price in australia', 'cameras on sale', 'video cameras for sale']
  },
  {
    id: 'post-3',
    slug: 'action-cams-gopro-on-sale-fpv-chase-drones',
    title: 'Action Cams in Flight: GoPro for Sale & High-Speed FPV Chases',
    subtitle: 'How the latest 5.3K action cameras and micro UAVs are transforming action sports and real estate walkthroughs.',
    date: 'July 2026',
    readTime: '4 min read',
    author: 'FPV Operations Lead',
    tags: ['GoPro On Sale', 'UAV Camera', 'Action Video'],
    excerpt: 'Why creators hunting for GoPro on sale frequently mount action cams to high-velocity FPV quadcopters for cinematic one-take flythroughs.',
    content: [
      'FPV (First Person View) cinematography has redefined automotive commercials, luxury estate showcases, and coastal sports reels across Australia.',
      'A rugged UAV camera for sale like the GoPro HERO13 Black weighs only 154 grams while outputting 5.3K 60fps with in-camera horizon leveling and GP-Log color. Mounted on agile platforms like the DJI Avata 2, pilots can squeeze through 1-meter gaps, skim ocean breaks, and transition indoors seamlessly.',
      'When flying FPV in Australia, CASA rules require an observant visual spotter standing beside the pilot when wearing video goggles to maintain general situational awareness of surrounding airspace.'
    ],
    targetKeywords: ['gopro on sale', 'gopro for sale', 'uav camera for sale', 'video cameras for sale', 'camcorders for sale']
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
    answer: 'Yes! Every drone, camera, and optical accessory sold through our store is 100% genuine Australian stock backed by manufacturer warranties and full Australian Consumer Law (ACL) consumer guarantees. You have direct access to local repair centres, local firmware support, and our Australian technician hotline.'
  },
  {
    id: 'faq-6',
    category: 'Hardware & Selection',
    question: 'Which is better for video: DJI Mavic 3 Pro Cine or a full-frame DSLR drone rig?',
    answer: 'For 90% of commercial videographers and content creators, the DJI Mavic 3 Pro Cine is the ideal choice due to its 43-minute flight time, built-in triple optical Hasselblad lenses, and Apple ProRes workflow in a 958g foldable frame. For high-end feature film cinema or 60MP+ photogrammetry requiring specific cinema prime lenses or medium-format sensors, a heavy-lift rig with a Sony Alpha 7R V or Phase One payload is recommended.'
  }
];

export const BRAND_MILESTONES = [
  {
    year: '17 May 2018',
    title: 'Founded in Australia',
    description: 'Established by Australian aerial cinematography engineers to provide genuine high-performance camera drones and optics across the country.'
  },
  {
    year: '2020',
    title: 'Nationwide Distribution Hubs',
    description: 'Expanded specialized climate-controlled fulfillment depots to ensure 24-48 hour delivery to Sydney, Melbourne, Brisbane, and Perth.'
  },
  {
    year: '2022',
    title: 'Pioneered Direct Crypto Checkout',
    description: 'Introduced direct Bitcoin and multi-chain crypto settlements with a permanent 10% discount incentive for Australian tech creators.'
  },
  {
    year: '2024',
    title: '2,400+ Verified Trustpilot Reviews',
    description: 'Recognized as Australia’s top-rated independent aerial imaging destination with a 4.9/5 star satisfaction score from certified pilots.'
  },
  {
    year: '2026',
    title: 'Next-Gen 8K & Commercial UAV Specialist',
    description: 'Official specialist distributor for flagship 8K ProRes RAW cinema platforms, AI obstacle avoidance systems, and full-frame payloads.'
  }
];
