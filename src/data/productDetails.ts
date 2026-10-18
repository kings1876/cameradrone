// Per-product copy and specifications. Spec values are limited to figures published by the manufacturer
// (or consistently across distributors). Where a figure is not confirmed it is left out; exact configuration
// is confirmed when the customer buys or requests a quote.
// overview: first sentence carries the page's primary keyword (see keywords.ts); bestFor: audience + use case.
export type SpecRow = [label: string, value: string];

export interface ProductDetail {
  overview: string;
  bestFor: string;
  highlights: string[];
  specs: SpecRow[];
  inTheBox?: string[];
}

const COMBO_BOX = ['Aircraft', 'Three Intelligent Flight Batteries', 'Two-way charging hub', 'Shoulder bag'];

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  // ---------------- DJI Mini & Air ----------------
  'dji-mini-4-pro': {
    overview:
      'The DJI Mini 4 Pro is the drone to buy if you want a high-end camera under 250 g. Find the DJI Mini 4 Pro price in Australia here, with local stock and free shipping.',
    bestFor:
      'Ideal for travel, real estate and social content creators who want 4K/100 fps footage, omnidirectional obstacle sensing and a sub-250 g aircraft that keeps CASA requirements simple.',
    highlights: ['Under 250 g with a 1/1.3-inch 48 MP camera', 'Omnidirectional obstacle sensing and ActiveTrack 360°', 'True vertical shooting for social video'],
    specs: [
      ['Take-off weight', 'Under 249 g'],
      ['Camera sensor', '1/1.3-inch CMOS, 48 MP'],
      ['Video', '4K up to 100 fps, 10-bit D-Log M and HLG'],
      ['Max flight time', 'Up to 34 min (standard battery)'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Video transmission', 'DJI O4, up to 20 km (FCC) / 10 km (CE)'],
      ['Max speed', '16 m/s (Sport mode)'],
      ['Wind resistance', 'Up to 10.7 m/s']
    ]
  },
  'dji-mini-4-pro-rc-2': {
    overview:
      'The DJI Mini 4 Pro with DJI RC 2 pairs the compact camera drone with the DJI RC 2 screen controller, so you can fly without a phone. Choose this DJI Mini 4 Pro drone and RC 2 bundle if you want the built-in display and a faster set-up.',
    bestFor:
      'Best for pilots who fly frequently outdoors and want a bright built-in screen, a cleaner pre-flight routine and the same sub-250 g aircraft as the standard Mini 4 Pro.',
    highlights: ['Includes the DJI RC 2 controller with built-in screen', 'Same 48 MP camera and omnidirectional sensing as the Mini 4 Pro', 'No phone or cable needed'],
    specs: [
      ['Controller', 'DJI RC 2 with built-in screen'],
      ['Take-off weight', 'Under 249 g'],
      ['Camera sensor', '1/1.3-inch CMOS, 48 MP'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time', 'Up to 34 min (standard battery)'],
      ['Obstacle sensing', 'Omnidirectional']
    ],
    inTheBox: ['Aircraft', 'DJI RC 2 controller', 'Intelligent Flight Battery']
  },
  'dji-mini-4-pro-fly-more-combo': {
    overview:
      'The DJI Mini 4 Pro Fly More Combo adds two extra batteries and a charging hub, which is why it is the best-value way to buy the Mini 4 Pro. It is the most popular DJI Mini Fly More Combo for shoots that need more than a single battery.',
    bestFor:
      'Suited to travel and content shoots where a single 34-minute flight is not enough, with enough battery capacity to fly through a whole day of creator work.',
    highlights: ['Three batteries for roughly three times the flying time', 'Two-way charging hub keeps batteries topped up', 'Shoulder bag for travel'],
    specs: [
      ['Take-off weight', 'Under 249 g (standard battery)'],
      ['Camera sensor', '1/1.3-inch CMOS, 48 MP'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time per battery', 'Up to 34 min'],
      ['Obstacle sensing', 'Omnidirectional']
    ],
    inTheBox: COMBO_BOX
  },
  'dji-mini-4-pro-fly-more-combo-plus': {
    overview:
      'The DJI Mini 4 Pro Fly More Combo Plus includes the high-capacity Plus battery for the longest flights the Mini 4 Pro can offer. If you are comparing a DJI Mini Fly More Combo, this is the version built for endurance.',
    bestFor:
      'Best for pilots who want maximum flight time on one battery, such as scenic or long-line shots. Note that the aircraft with the Plus battery is heavier than 250 g, so check CASA requirements for your flying.',
    highlights: ['Plus battery for up to 45 min of flight', 'Extra batteries and charging hub for all-day flying', 'Same 48 MP camera and obstacle sensing'],
    specs: [
      ['Camera sensor', '1/1.3-inch CMOS, 48 MP'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time', 'Up to 45 min (Plus battery)'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['CASA note', 'With the Plus battery the aircraft exceeds 250 g']
    ],
    inTheBox: ['Aircraft', 'Intelligent Flight Battery Plus', 'Extra batteries', 'Two-way charging hub', 'Shoulder bag']
  },
  'dji-air-3': {
    overview:
      'The DJI Air 3 is a camera drone with two lenses: a wide camera and a 3× medium tele, so you can change framing without moving the drone. It is a strong all-rounder if you want a drone camera for travel, events and property shoots.',
    bestFor:
      'Great for creators who outgrow a Mini and want longer flights, dual cameras and a 4K camera drone that handles mixed light well.',
    highlights: ['Wide and 3× medium tele cameras, both 48 MP', 'Up to 46 min flight time', 'Omnidirectional obstacle sensing'],
    specs: [
      ['Cameras', '1/1.3-inch CMOS wide (24 mm eq.) + 1/1.3-inch CMOS medium tele (70 mm eq.)'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time', 'Up to 46 min'],
      ['Take-off weight', '720 g'],
      ['Video transmission', 'DJI O4, up to 20 km (FCC)'],
      ['Obstacle sensing', 'Omnidirectional']
    ]
  },
  'dji-air-3-fly-more-combo': {
    overview:
      'The DJI Air 3 Fly More Combo is the better-value way to buy a drone with a 4K camera: it adds two extra batteries, a charging hub and a bag to the DJI Air 3. It is a drone with a 4K camera and dual lenses built for long shoots.',
    bestFor:
      'Perfect for wedding, travel and real estate shooters who need several flights in a row and want the wide and tele cameras ready all day.',
    highlights: ['Three batteries, charging hub and shoulder bag', 'Dual 48 MP cameras with 4K video', 'Up to 46 min per battery'],
    specs: [
      ['Cameras', 'Wide (24 mm eq.) + medium tele (70 mm eq.), 1/1.3-inch CMOS'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time', 'Up to 46 min per battery'],
      ['Take-off weight', '720 g']
    ],
    inTheBox: COMBO_BOX
  },
  'dji-air-3-fly-more-combo-rc-2': {
    overview:
      'The DJI Air 3 Fly More Combo with DJI RC 2 gives you the full Fly More kit plus the DJI RC 2 controller and its built-in screen. It is the camera drone setup for pilots who want everything in one box and no phone needed.',
    bestFor:
      'Best for working creators who want the batteries, bag and DJI RC 2 controller from day one, with a bright screen for clear framing in sunlight.',
    highlights: ['DJI RC 2 controller with built-in screen', 'Three batteries, charging hub and bag', 'Dual 48 MP cameras'],
    specs: [
      ['Controller', 'DJI RC 2 with built-in screen'],
      ['Cameras', 'Wide + 3× medium tele, 1/1.3-inch CMOS'],
      ['Video', '4K up to 100 fps'],
      ['Max flight time', 'Up to 46 min per battery'],
      ['Take-off weight', '720 g']
    ],
    inTheBox: ['Aircraft', 'DJI RC 2 controller', 'Three Intelligent Flight Batteries', 'Two-way charging hub', 'Shoulder bag']
  },

  // ---------------- DJI Mini 5 Pro, Neo 2, Avata 2 ----------------
  'dji-mini-5-pro-dji-rc-n3': {
    overview:
      'The DJI Mini 5 Pro puts a 1-inch 50 MP sensor into a drone that weighs under 250 g, the largest camera DJI has fitted to a Mini. It is supplied with the DJI RC-N3 controller, which uses your smartphone as the screen.',
    bestFor:
      'Ideal for travel, landscape, real estate and social creators who want near-professional image quality in a drone that stays in the sub-250 g class for simple CASA compliance.',
    highlights: ['1-inch 50 MP camera in a sub-250 g drone', 'Omnidirectional obstacle sensing', 'Supplied with the DJI RC-N3 controller'],
    specs: [
      ['Camera sensor', '1-inch CMOS, 50 MP'],
      ['Lens', '24 mm equivalent, f/1.8, 84° field of view'],
      ['Take-off weight', 'Under 250 g (about 249.9 g)'],
      ['Max flight time', 'Up to 36 min (standard battery)'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Controller', 'DJI RC-N3 (uses your smartphone)']
    ]
  },
  'dji-mini-5-pro-fly-more-combo-dji-rc-n3': {
    overview:
      'The DJI Mini 5 Pro Fly More Combo DJI RC-N3 adds extra batteries and a charging hub to the 1-inch Mini 5 Pro, so one outing can cover several flights. It is the value way to buy this sub-250 g camera drone if you are happy to fly with a smartphone and the RC-N3.',
    bestFor:
      'Perfect for creators who fly for hours rather than minutes, such as holiday, wedding-guest and property shooters who want spare power without paying for the RC 2 screen.',
    highlights: ['Fly More kit with extra batteries and charging hub', 'Same 1-inch 50 MP camera and sub-250 g body', 'DJI RC-N3 controller'],
    specs: [
      ['Camera sensor', '1-inch CMOS, 50 MP'],
      ['Take-off weight', 'Under 250 g (standard battery)'],
      ['Max flight time per battery', 'Up to 36 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Controller', 'DJI RC-N3 (uses your smartphone)']
    ],
    inTheBox: ['Aircraft', 'DJI RC-N3 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-mini-5-pro-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Mini 5 Pro Fly More Combo with the DJI RC 2 is the complete kit: the 1-inch Mini 5 Pro, extra batteries, a charging hub and a controller with a built-in screen. People often search for it as the DJI Mini Pro 5 or the DJI 5 Mini Pro, and this is the full-spec version.',
    bestFor:
      'Best for pilots who want no phone, a bright screen and the longest day of flying from a sub-250 g drone.',
    highlights: ['DJI RC 2 controller with built-in screen', 'Fly More kit with extra batteries and charging hub', '1-inch 50 MP camera, under 250 g'],
    specs: [
      ['Camera sensor', '1-inch CMOS, 50 MP'],
      ['Take-off weight', 'Under 250 g (standard battery)'],
      ['Max flight time per battery', 'Up to 36 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Controller', 'DJI RC 2 with built-in screen']
    ],
    inTheBox: ['Aircraft', 'DJI RC 2 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-neo-2-drone-only': {
    overview:
      'The DJI Neo 2 is a palm-sized camera drone that weighs about 151 g, built for easy selfies, follow-me shots and social video. This is the DJI Neo 2 drone only option: the aircraft with its battery and no controller in the kit.',
    bestFor:
      'A friendly first drone for beginners, families and vloggers who want 4K video with obstacle sensing and no fuss. Choose the Fly More Combo if you plan to fly longer.',
    highlights: ['About 151 g and palm-sized', '4K video up to 60 fps', 'Omnidirectional obstacle sensing'],
    specs: [
      ['Take-off weight', 'About 151 g'],
      ['Video', '4K up to 60 fps'],
      ['Max flight time', 'Up to about 19 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Kit', 'Drone only, controller not included']
    ]
  },
  'dji-neo-2-fly-more-combo-drone-only': {
    overview:
      'The DJI Neo 2 4K drone Fly More Combo gives you the palm-sized Neo 2 with extra batteries for longer sessions. It is the better value Neo 2 pack for events, holidays and content days.',
    bestFor:
      'Great for beginners and creators who want extra flight time rather than a controller upgrade, with a light body that is easy to carry everywhere.',
    highlights: ['Extra batteries for longer shoots', '4K video up to 60 fps', 'About 151 g, omnidirectional obstacle sensing'],
    specs: [
      ['Take-off weight', 'About 151 g'],
      ['Video', '4K up to 60 fps'],
      ['Max flight time per battery', 'Up to about 19 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Kit', 'Fly More Combo, drone only (no controller)']
    ]
  },
  'dji-avata-2-fly-more-combo-single-battery': {
    overview:
      'The DJI Avata 2 is an immersive FPV drone with a 1/1.3-inch camera, protected propellers and a 155° field of view, flown with Goggles 3 and the RC Motion 3. This single-battery Fly More Combo is the cheapest way into the Avata 2 experience.',
    bestFor:
      'Perfect for first-time FPV pilots and content creators who want cinematic, swooping shots without building a racing drone. Buy a second or third battery later if you want longer sessions.',
    highlights: ['1/1.3-inch 12 MP camera with 4K up to 60 fps', 'Goggles 3 micro-OLED display and RC Motion 3', 'Up to 23 min flight time'],
    specs: [
      ['Camera', '1/1.3-inch CMOS, 12 MP, 155° field of view'],
      ['Video', '4K up to 60 fps'],
      ['Take-off weight', 'About 377 g'],
      ['Max flight time', 'Up to 23 min'],
      ['Goggles', 'DJI Goggles 3, 1080p micro-OLED, up to 100 Hz'],
      ['Controller', 'DJI RC Motion 3']
    ],
    inTheBox: ['Avata 2 aircraft', 'DJI Goggles 3', 'DJI RC Motion 3', 'One Intelligent Flight Battery']
  },
  'dji-avata-2-fly-more-combo-three-batteries': {
    overview:
      'The DJI Avata 2 Fly More Combo with three batteries is the DJI FPV drone kit for pilots who want to keep flying: aircraft, Goggles 3, RC Motion 3 and two extra batteries. It is the version most FPV creators choose for a full session.',
    bestFor:
      'Ideal for regular FPV pilots and videographers who want enough batteries for a shoot day. It is currently sold out at some retailers, so ask for the latest lead time.',
    highlights: ['Three batteries for about three times the flying time', 'Goggles 3 and RC Motion 3 included', '1/1.3-inch camera, 4K up to 60 fps'],
    specs: [
      ['Camera', '1/1.3-inch CMOS, 12 MP, 155° field of view'],
      ['Video', '4K up to 60 fps'],
      ['Take-off weight', 'About 377 g'],
      ['Max flight time per battery', 'Up to 23 min'],
      ['Goggles', 'DJI Goggles 3, 1080p micro-OLED, up to 100 Hz'],
      ['Controller', 'DJI RC Motion 3']
    ],
    inTheBox: ['Avata 2 aircraft', 'DJI Goggles 3', 'DJI RC Motion 3', 'Three Intelligent Flight Batteries', 'Charging hub']
  },

  'dji-neo-2-fly-more-combo-dji-rc-n3': {
    overview:
      'The DJI Neo 2 Fly More Combo with the DJI RC-N3 gives you the palm-sized Neo 2 plus a proper controller, a digital transceiver and extra batteries. If you were searching for a DJI Neo 2 controller kit, this is the version that lets you fly with sticks instead of gestures alone.',
    bestFor:
      'Ideal for pilots who want more range and precise control than the drone-only kit offers, plus the extra batteries to keep a family day or event shoot going.',
    highlights: ['DJI RC-N3 controller and digital transceiver included', 'Extra batteries for longer sessions', 'About 151 g with 4K video up to 60 fps'],
    specs: [
      ['Take-off weight', 'About 151 g (without digital transceiver)'],
      ['Video', '4K up to 60 fps'],
      ['Max flight time per battery', 'Up to about 19 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Controller', 'DJI RC-N3 with digital transceiver']
    ],
    inTheBox: ['Neo 2 aircraft', 'DJI RC-N3 controller', 'Digital transceiver', 'Extra Intelligent Flight Batteries']
  },
  // ---------------- DJI Avata 360 ----------------
  'dji-avata-360-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Avata 360 is an FPV drone with a 360-degree camera system that records 8K at 60 fps, so you can choose your framing after the flight. The Fly More Combo with the DJI RC 2 adds extra batteries for a full day of 360 flying.',
    bestFor:
      'Perfect for creators who want immersive, reframe-in-post FPV footage for social, tourism, real estate and action content, and who need enough batteries to shoot several lines in a row.',
    highlights: ['360-degree camera with 8K at 60 fps HDR', 'Single-lens mode for 4K at 60 fps Avata-style footage', 'Omnidirectional obstacle sensing and integrated propeller guard'],
    specs: [
      ['Camera', '360-degree dual-lens system, 8K at 60 fps with HDR'],
      ['Single-lens mode', '4K at 60 fps'],
      ['Take-off weight', 'About 455 g'],
      ['Max flight time', 'About 23 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Max wind resistance', '10.7 m/s (Level 5)'],
      ['Controller', 'DJI RC 2 with built-in screen']
    ],
    inTheBox: ['Avata 360 aircraft', 'DJI RC 2 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-avata-360-dji-rc-2': {
    overview:
      'The DJI Avata 360 drone with the DJI RC 2 is the mid-price way to buy the 360-degree FPV aircraft: the drone with the screen controller, ready to fly. It captures 8K 360-degree video and a 4K single-lens mode with a built-in propeller guard.',
    bestFor:
      'Ideal for pilots who want the DJI RC 2 and a single battery to start, with the option of adding batteries later. A good fit for tourism, property and social creators.',
    highlights: ['DJI RC 2 controller included', '8K 360-degree video, 4K single-lens mode', 'About 23 min flight time'],
    specs: [
      ['Camera', '360-degree dual-lens system, 8K at 60 fps with HDR'],
      ['Take-off weight', 'About 455 g'],
      ['Max flight time', 'About 23 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Controller', 'DJI RC 2 with built-in screen']
    ]
  },
  'dji-avata-360-drone-only': {
    overview:
      'The DJI Avata 360 drone only kit is the lowest-cost entry among drones with a 360-degree camera, with the aircraft and no controller. It suits pilots who already own a compatible DJI controller or goggles.',
    bestFor:
      'Best for existing DJI FPV pilots who want to add a 360 aircraft without paying for another controller. Currently sold out at some retailers, so ask for the latest lead time.',
    highlights: ['360-degree camera, 8K at 60 fps HDR', 'About 455 g with integrated propeller guard', 'Omnidirectional obstacle sensing'],
    specs: [
      ['Camera', '360-degree dual-lens system, 8K at 60 fps with HDR'],
      ['Take-off weight', 'About 455 g'],
      ['Max flight time', 'About 23 min'],
      ['Obstacle sensing', 'Omnidirectional'],
      ['Kit', 'Drone only, controller not included']
    ]
  },

  // ---------------- DJI Mavic 3 / Inspire ----------------
  'dji-mavic-3-pro': {
    overview:
      'The DJI Mavic 3 Pro is a triple-camera aircraft with a Hasselblad main camera, a 3× medium tele and a 7× tele for professional imaging. If you are looking for a Mavic 3, this Pro model gives you the widest creative range of the family.',
    bestFor:
      'Aimed at film-makers, real estate and commercial photographers who need cinematic quality and three focal lengths without changing payloads.',
    highlights: ['Hasselblad 4/3 CMOS main camera plus two tele cameras', '5.1K video and 43 min flight time', 'Omnidirectional obstacle sensing'],
    specs: [
      ['Cameras', '4/3 CMOS 20 MP wide, 1/1.3-inch 48 MP medium tele (70 mm eq.), 1/2-inch 12 MP tele (166 mm eq.)'],
      ['Video', '5.1K up to 50 fps, 4K up to 120 fps'],
      ['Max flight time', 'Up to 43 min'],
      ['Take-off weight', '958 g'],
      ['Obstacle sensing', 'Omnidirectional']
    ]
  },
  'dji-mavic-3-pro-fly-more-combo-dji-rc': {
    overview:
      'The DJI Mavic 3 Pro Fly More Combo with the DJI RC controller is the practical way to run the Mavic 3 Pro on a full day of shooting. It includes the Mavic 3 Pro Fly More Combo accessories: extra batteries, a charging hub and a bag.',
    bestFor:
      'Best for professionals who already know they need the Mavic 3 Pro and want it ready for long jobs with a controller included.',
    highlights: ['Three batteries with a charging hub', 'DJI RC controller with built-in screen', 'Triple camera system'],
    specs: [
      ['Controller', 'DJI RC with built-in screen'],
      ['Cameras', '4/3 wide + medium tele + tele'],
      ['Video', '5.1K up to 50 fps, 4K up to 120 fps'],
      ['Max flight time', 'Up to 43 min'],
      ['Take-off weight', '958 g']
    ],
    inTheBox: COMBO_BOX
  },
  'dji-mavic-3-pro-fly-more-combo-dji-rc-pro': {
    overview:
      'The DJI Mavic 3 Pro Fly More Combo with the DJI RC Pro pairs the Mavic 3 Pro Fly More Combo kit with the high-bright DJI RC Pro screen controller. Choose this DJI RC Pro bundle for the clearest screen in direct sun.',
    bestFor:
      'Designed for professional shoots outdoors where screen brightness matters, with the full Fly More kit for all-day flying.',
    highlights: ['DJI RC Pro high-bright controller', 'Fly More kit with three batteries and hub', 'Triple camera system for cinema work'],
    specs: [
      ['Controller', 'DJI RC Pro with high-bright built-in screen'],
      ['Cameras', '4/3 wide + medium tele + tele'],
      ['Video', '5.1K up to 50 fps, 4K up to 120 fps'],
      ['Max flight time', 'Up to 43 min'],
      ['Take-off weight', '958 g']
    ],
    inTheBox: ['Aircraft', 'DJI RC Pro controller', 'Three Intelligent Flight Batteries', 'Charging hub', 'Shoulder bag']
  },
  'dji-inspire-3': {
    overview:
      'The DJI Inspire 3 is a professional cinema drone for film and broadcast teams that need a full-frame 8K camera in the air. It is the aircraft production crews choose when videographer-grade imaging and dual-operator control matter.',
    bestFor:
      'Built for film, television and high-end commercial production where drone filming must match cinema camera quality, with RTK positioning for repeatable shots.',
    highlights: ['Full-frame 8K Zenmuse X9-8K Air camera', 'Dual-operator control (pilot and camera operator)', 'RTK positioning for repeatable flight paths'],
    specs: [
      ['Camera', 'Full-frame Zenmuse X9-8K Air'],
      ['Video', 'Up to 8K, RAW and ProRes RAW recording'],
      ['Max flight time', 'Up to 28 min'],
      ['Positioning', 'RTK supported'],
      ['Crew', 'Dual operator control']
    ]
  },

  // ---------------- DJI Enterprise ----------------
  'dji-matrice-30': {
    overview:
      'The DJI Matrice 30 is a compact, weather-resistant enterprise drone for inspection and public safety. If you are researching DJI Matrice models, the M30 is the portable option with a wide camera, a zoom camera and a laser rangefinder on one gimbal.',
    bestFor:
      'Ideal for utilities, emergency services and infrastructure teams that need an IP55 enterprise aircraft that folds into a backpack case. Request a quote for fleet or volume pricing.',
    highlights: ['IP55 rating and -20°C to 50°C operation', 'Up to 41 min flight time with hot-swappable batteries', 'Wide, 5–16× zoom camera and laser rangefinder'],
    specs: [
      ['Cameras', '12 MP wide camera, 48 MP zoom camera (5–16× optical)'],
      ['Laser rangefinder', 'Yes, 3–1,200 m'],
      ['Max flight time', 'Up to 41 min'],
      ['Ingress protection', 'IP55'],
      ['Operating temperature', '-20°C to 50°C'],
      ['Take-off weight', 'About 3.77 kg with batteries']
    ]
  },
  'dji-matrice-30t': {
    overview:
      'The DJI Matrice 30T is the DJI thermal drone version of the Matrice 30, with a 640×512 radiometric thermal camera added to the wide, zoom and laser rangefinder payload. It is a compact option when you need thermal drones in Australia for inspection or search and rescue.',
    bestFor:
      'Built for firefighting, police, power-line and solar inspection teams who need thermal and visible imaging in one weather-sealed aircraft.',
    highlights: ['640×512 radiometric thermal camera', 'IP55 and up to 41 min flight time', 'Wide, zoom and laser rangefinder on one payload'],
    specs: [
      ['Thermal camera', '640×512, 12 µm, radiometric'],
      ['Visual cameras', '12 MP wide, 48 MP zoom (5–16× optical)'],
      ['Max flight time', 'Up to 41 min'],
      ['Ingress protection', 'IP55'],
      ['Take-off weight', 'About 3.77 kg with batteries']
    ]
  },
  'dji-matrice-4-enterprise': {
    overview:
      'The DJI Matrice 4 Enterprise is a DJI enterprise drone built around a mechanical-shutter wide camera for accurate mapping, plus medium and long telephoto cameras and a laser rangefinder. It is lighter and quicker to deploy than the Matrice 30 series.',
    bestFor:
      'Suited to surveyors, mapping crews and emergency response teams who want a portable commercial drone that handles photogrammetry and fast inspection from one aircraft.',
    highlights: ['4/3 CMOS wide camera with mechanical shutter', 'Medium tele and 168 mm tele cameras, both 48 MP', 'Up to 49 min flight time at about 1.2 kg'],
    specs: [
      ['Wide camera', '4/3 CMOS, 20 MP, mechanical shutter, 24 mm eq.'],
      ['Medium tele', '1/1.3-inch CMOS, 48 MP'],
      ['Tele camera', '1/1.5-inch CMOS, 48 MP'],
      ['Laser rangefinder', 'Yes'],
      ['Max flight time', 'Up to 49 min'],
      ['Take-off weight', '1,219 g']
    ]
  },
  'dji-matrice-4-thermal': {
    overview:
      'The DJI Matrice 4 Thermal is a thermal imaging drone that combines a 640×512 thermal camera with 48 MP wide, medium tele and tele cameras in a compact enterprise airframe. If you need a DJI thermal drone for night operations, it is built for it.',
    bestFor:
      'Designed for public safety, search and rescue and inspection crews working day and night, and for anyone comparing thermal drones in Australia against heavier platforms.',
    highlights: ['640×512 thermal camera, ≤50 mK sensitivity', 'Near-infrared auxiliary light for night work', 'Up to 49 min flight time'],
    specs: [
      ['Thermal camera', '640×512, 12 µm, uncooled VOx, ≤50 mK, 45° DFOV'],
      ['Wide camera', '1/1.3-inch CMOS, 48 MP, 24 mm eq.'],
      ['Medium tele / tele', '48 MP / 48 MP'],
      ['Laser rangefinder', 'Yes'],
      ['Max flight time', 'Up to 49 min'],
      ['Take-off weight', '1,219 g']
    ]
  },
  'dji-mavic-3-enterprise': {
    overview:
      'The DJI Mavic 3 Enterprise is the DJI enterprise drone for mapping, surveying and inspection in a compact aircraft. It pairs a 4/3 CMOS mechanical-shutter wide camera with a 56× hybrid zoom camera.',
    bestFor:
      'A good fit for small survey firms, councils and inspection contractors that need commercial drones for sale with fast set-up and strong mapping accuracy. Ask for a quote for fleet pricing.',
    highlights: ['Mechanical shutter for distortion-free mapping', '56× hybrid zoom camera', 'Up to 45 min flight time'],
    specs: [
      ['Wide camera', '4/3 CMOS, 20 MP, mechanical shutter'],
      ['Tele camera', '1/2-inch CMOS, 12 MP, 56× hybrid zoom'],
      ['Max flight time', 'Up to 45 min'],
      ['Take-off weight', '915 g'],
      ['RTK', 'Supports an optional RTK module']
    ]
  },
  'dji-mavic-3-thermal': {
    overview:
      'The DJI Mavic 3 Thermal is a DJI Mavic 3 thermal drone that adds a 640×512 thermal camera to the wide and tele cameras. It is a compact thermal drone for roof, solar, fire and rescue work.',
    bestFor:
      'Built for thermal inspection teams, firefighters and police that need a portable aircraft they can carry in one hand.',
    highlights: ['640×512 thermal camera', '48 MP wide and 56× hybrid zoom cameras', 'Up to 45 min flight time'],
    specs: [
      ['Thermal camera', '640×512 uncooled VOx'],
      ['Wide camera', '1/2-inch CMOS, 48 MP'],
      ['Tele camera', '1/2-inch CMOS, 12 MP, 56× hybrid zoom'],
      ['Max flight time', 'Up to 45 min'],
      ['Take-off weight', '920 g']
    ]
  },
  'dji-mavic-3-multispectral': {
    overview:
      'The DJI Mavic 3 Multispectral is a multispectral drone for precision agriculture and crop monitoring. Its four 5 MP multispectral cameras and 20 MP RGB camera record crop health without a separate sensor purchase.',
    bestFor:
      'Aimed at agronomists, growers and ag service providers who want a compact drone for field scouting and NDVI-style mapping across large properties.',
    highlights: ['Four 5 MP multispectral cameras plus a 20 MP RGB camera', 'Built-in RTK and a sunlight sensor for consistent data', 'Up to 43 min flight time'],
    specs: [
      ['Multispectral cameras', '4 × 5 MP (green, red, red edge, near-infrared)'],
      ['RGB camera', '4/3 CMOS, 20 MP'],
      ['Positioning', 'Built-in RTK'],
      ['Max flight time', 'Up to 43 min'],
      ['Take-off weight', '951 g']
    ]
  },
  'dji-phantom-4-pro-rtk-se': {
    overview:
      'The DJI Phantom 4 Pro RTK SE is a survey and mapping drone built on the proven Phantom 4 platform. If you work with Phantom 4 aircraft, this RTK version gives centimetre-level positioning for survey-grade results.',
    bestFor:
      'Best for surveyors and mapping contractors who need accurate orthomosaics and models from a proven aircraft. Use the quote form for survey package pricing.',
    highlights: ['1-inch 20 MP camera with mechanical shutter', 'Centimetre-level RTK positioning', 'About 30 min flight time'],
    specs: [
      ['Camera', '1-inch CMOS, 20 MP, mechanical shutter'],
      ['Positioning', 'RTK (centimetre-level)'],
      ['Max flight time', 'About 30 min'],
      ['Take-off weight', '1,391 g']
    ]
  },
  'dji-phantom-4-multispectral': {
    overview:
      'The DJI Phantom 4 Multispectral is a farming drone with six sensors for crop health data: one RGB camera and five multispectral cameras. It is a trusted UAV for farming that works with DJI mapping software.',
    bestFor:
      'Designed for agronomists and growers who need field-level NDVI and crop stress maps from a single, ready-to-fly aircraft.',
    highlights: ['One RGB plus five monochrome multispectral cameras', 'Integrated sunlight sensor and RTK', 'Ready to fly out of the box'],
    specs: [
      ['Sensors', '1 RGB + 5 multispectral (blue, green, red, red edge, NIR), 2 MP each'],
      ['Positioning', 'RTK'],
      ['Max flight time', 'About 27 min'],
      ['Take-off weight', '1,487 g']
    ]
  },
  'dji-phantom-4-multispectral-drtk2': {
    overview:
      'The DJI Phantom 4 Multispectral DRTK2 package includes the D-RTK 2 mobile station for centimetre-level accuracy. This agriculture UAV drone bundle gives you a complete crop-mapping setup with RTK corrections.',
    bestFor:
      'The right choice for ag businesses who run repeat field surveys and need consistent, repeatable multispectral positioning. Request a quote to confirm the current bundle contents.',
    highlights: ['Phantom 4 Multispectral aircraft', 'D-RTK 2 mobile station for centimetre accuracy', 'Multispectral cameras for crop health analysis'],
    specs: [
      ['Sensors', '1 RGB + 5 multispectral, 2 MP each'],
      ['Positioning', 'RTK with D-RTK 2 mobile station'],
      ['Max flight time', 'About 27 min'],
      ['Take-off weight', '1,487 g']
    ]
  },

  // ---------------- Zenmuse and payloads ----------------
  'dji-zenmuse-h30': {
    overview:
      'The DJI Zenmuse H30 is a camera UAV payload that combines a wide camera, a 34× optical zoom camera and a laser rangefinder. It gives Matrice 350 RTK and 300 RTK operators one gimbal for inspection and public safety.',
    bestFor:
      'Suits utility inspection, emergency services and enterprise operators who need a multi-sensor payload on the Matrice 350 RTK or 300 RTK.',
    highlights: ['48 MP wide camera and 40 MP zoom camera (34× optical)', 'Laser rangefinder to 3,000 m', 'NIR auxiliary light'],
    specs: [
      ['Wide camera', '1/1.3-inch CMOS, 48 MP, 24 mm eq.'],
      ['Zoom camera', '1/1.8-inch CMOS, 40 MP, 34× optical, 400× digital'],
      ['Laser rangefinder', '3–3,000 m'],
      ['Weight', '920 g'],
      ['Compatible aircraft', 'Matrice 350 RTK, Matrice 300 RTK']
    ]
  },
  'dji-zenmuse-h30t': {
    overview:
      'The DJI Zenmuse H30T is a thermal camera payload for drones: a 1280×1024 thermal camera, a wide camera, a 34× optical zoom camera and a laser rangefinder. It is the highest-resolution thermal option in the Zenmuse H series.',
    bestFor:
      'For thermal imaging drone teams that need long-range thermal inspection, search and rescue or fire support from a Matrice 350 RTK or 300 RTK. Request a quote to confirm compatibility.',
    highlights: ['1280×1024 thermal camera', 'Wide, 34× optical zoom and laser rangefinder', 'NIR auxiliary light for low light'],
    specs: [
      ['Thermal camera', '1280×1024, uncooled VOx microbolometer, 30 fps'],
      ['Thermal range', '-20°C to 1,600°C'],
      ['Wide camera', '48 MP, 24 mm eq.'],
      ['Zoom camera', '40 MP, 34× optical'],
      ['Laser rangefinder', '3–3,000 m'],
      ['Weight', '920 g']
    ]
  },
  'dji-zenmuse-l2-lidar': {
    overview:
      'The DJI Zenmuse L2 is a LiDAR payload for aerial surveying and mapping. This drone LiDAR scanner integrates a frame-based LiDAR, a 4/3 CMOS RGB camera and a high-accuracy IMU to deliver colourised point clouds.',
    bestFor:
      'Designed for survey, forestry and construction teams that need fast, accurate drone LiDAR data from a Matrice 350 RTK or 300 RTK. Ask for a quote to include training and software.',
    highlights: ['Frame-based LiDAR with up to five returns', '20 MP 4/3 CMOS RGB camera for colourised point clouds', 'Centimetre-level accuracy'],
    specs: [
      ['Point rate', 'Up to 240,000 points/s (single return)'],
      ['Returns', 'Up to 5'],
      ['Detection range', 'Up to 450 m at 50% reflectivity'],
      ['RGB camera', '4/3 CMOS, 20 MP'],
      ['Accuracy', 'About 4 cm vertical, 5 cm horizontal'],
      ['Weight', 'About 905 g']
    ]
  },
  'dji-zenmuse-p1': {
    overview:
      'The DJI Zenmuse P1 is a full-frame photogrammetry camera payload for the Matrice series, with a 45 MP sensor and a global mechanical shutter. It is a camera for drone mapping that delivers survey-grade results without ground control points in many jobs.',
    bestFor:
      'Perfect for surveyors and mapping companies that want a full-frame payload for orthomosaics, 3D models and construction progress capture.',
    highlights: ['45 MP full-frame sensor with global mechanical shutter', 'Choice of 24, 35 or 50 mm fixed-focus lenses', 'Fast 0.7 s photo interval'],
    specs: [
      ['Sensor', 'Full-frame, 45 MP'],
      ['Lens options', '24 mm, 35 mm, 50 mm (f/2.8)'],
      ['Shutter', 'Global mechanical (1/2000 s) and electronic'],
      ['Min photo interval', '0.7 s'],
      ['Compatible aircraft', 'Matrice 350 RTK, Matrice 300 RTK']
    ]
  },
  'dji-zenmuse-x7': {
    overview:
      'The DJI Zenmuse X7 is an interchangeable-lens aerial camera that brings Super 35 imaging to the Inspire series. If you want to buy a UAV camera for cinema work, the X7 accepts DJI DL-Mount prime lenses.',
    bestFor:
      'Built for film and commercial productions that need a Super 35 look from the air, including crews already using the Inspire 2.',
    highlights: ['24 MP Super 35 sensor', 'DJI DL-Mount lenses, up to f/2.8', 'Up to 6K video'],
    specs: [
      ['Sensor', 'Super 35, 24 MP'],
      ['Lens mount', 'DJI DL-Mount'],
      ['Video', 'Up to 6K / 30 fps (RAW), 3.9K up to 59.94 fps'],
      ['Lens not included', 'Sold separately']
    ]
  },
  'dji-zenmuse-x5s': {
    overview:
      'The DJI Zenmuse X5S is a Micro Four Thirds camera for Inspire aircraft, for those who want a camera for an RC drone that shoots cinema-grade 5.2K. It suits shooters who already own M4/3 lenses.',
    bestFor:
      'Good for photographers and videographers building a flexible aerial kit around the Inspire 2, with a wide choice of M4/3 lenses.',
    highlights: ['Micro Four Thirds sensor, 20.8 MP', 'Standard M4/3 lens mount', 'Wide range of compatible lenses'],
    specs: [
      ['Sensor', 'Micro Four Thirds, 20.8 MP stills'],
      ['Lens mount', 'Micro Four Thirds (M4/3)'],
      ['Lens not included', 'Sold separately']
    ]
  },
  'dji-zenmuse-x4s': {
    overview:
      'The DJI Zenmuse X4S is a 1-inch aerial camera for pilots who need a camera for a drone with an easy price of entry. Many pilots choose it as a lighter, simpler step up from a fixed camera.',
    bestFor:
      'Suited to aerial photographers and inspection crews who want a 20 MP 1-inch sensor with a built-in lens on an Inspire 2.',
    highlights: ['1-inch 20 MP sensor', 'Built-in lens', 'Compact and lightweight'],
    specs: [
      ['Sensor', '1-inch CMOS, 20 MP'],
      ['Lens', 'Built-in']
    ]
  },
  'dji-zenmuse-z3-optical-zoom': {
    overview:
      'The DJI Zenmuse Z3 is an optical zoom camera for aerial inspection and filming. It brings zoom reach to compatible aircraft without changing the airframe.',
    bestFor:
      'Useful for inspection and surveying jobs where you need to look closely at a structure from a safe distance. Confirm compatibility with your aircraft when you enquire.',
    highlights: ['Optical zoom for close inspection', 'Compact gimbal payload', 'Easy to swap with other Zenmuse cameras'],
    specs: [
      ['Camera type', 'Optical zoom gimbal camera'],
      ['Optical zoom', '3.5×']
    ]
  },
  'flir-vue-tz20': {
    overview:
      'The FLIR VUE TZ20 is a dual thermal camera payload with two 640×512 Boson sensors for wide-area and zoomed inspection. It is a trusted FLIR thermal camera for drones for firefighting and public safety.',
    bestFor:
      'For emergency services and inspection teams on DJI Matrice 200 series or 300 airframes who need two thermal views in one gimbal. The radiometric version is the TZ20-R, so ask us for details.',
    highlights: ['Two 640×512 thermal sensors', 'Wide 95° and narrow 18° views', '5× optical zoom and 4× digital zoom'],
    specs: [
      ['Thermal sensors', 'Dual FLIR Boson, 640×512, 12 µm LWIR'],
      ['Field of view', '95° (wide) / 18° (narrow)'],
      ['Weight', 'About 640 g'],
      ['Ingress protection', 'IP44'],
      ['Compatible aircraft', 'DJI Matrice 200 series, Matrice 300']
    ]
  },
  'dji-mavic-pro-flir-boson-thermal-ninja': {
    overview:
      'The DJI Mavic Pro FLIR Boson Thermal Ninja turns a DJI Mavic Pro into a thermal camera drone using a FLIR Boson core. It is a compact option when you want thermal on a small, familiar platform.',
    bestFor:
      'A good fit for inspectors, roofers and researchers who want a small, low-cost thermal drone. Contact us to confirm the Boson resolution and lens options for your job.',
    highlights: ['FLIR Boson thermal core on a DJI Mavic Pro', 'Compact and portable thermal drone', 'Conversion for existing Mavic Pro airframes'],
    specs: [
      ['Thermal core', 'FLIR Boson (12 µm VOx, uncooled)'],
      ['Airframe', 'DJI Mavic Pro'],
      ['Configuration', 'Resolution and lens confirmed on request']
    ]
  },

  // ---------------- Multispectral sensors ----------------
  'adti-agrowing-multispectral-matrice-300': {
    overview:
      'The ADTI Agrowing Multispectral camera for the DJI Matrice 300 is an Agrowing multispectral system for large-scale crop and environmental monitoring. It is a high-resolution sensor for agriculture UAV missions on an enterprise airframe.',
    bestFor:
      'Aimed at agronomy services, researchers and ag consultancies that fly the Matrice 300 and need multi-band imagery with high resolution. Request a quote for the complete system.',
    highlights: ['Agrowing multispectral lens system', 'Designed for the DJI Matrice 300', 'High-resolution multi-band crop imaging'],
    specs: [
      ['Brand', 'Agrowing'],
      ['Compatible aircraft', 'DJI Matrice 300'],
      ['Type', 'Multispectral camera system']
    ]
  },
  'sony-a6000-multispectral-dual-agrowing-camera': {
    overview:
      'The Sony A6000 Dual Agrowing multispectral camera is an entry-level Agrowing option for UAV for farming and crop health mapping. It is built on a Sony A6000 body with a dual-lens multispectral system.',
    bestFor:
      'A budget route into multispectral for growers and small ag-service providers who want a capable drone-based crop sensor at a lower cost than the quad and sextuple systems.',
    highlights: ['Dual-lens Agrowing system on a Sony A6000', 'Lower-cost multispectral entry point', 'Crop health imaging for UAV mapping'],
    specs: [
      ['Brand', 'Agrowing'],
      ['Camera body', 'Sony A6000'],
      ['Lenses', '2 (dual)']
    ]
  },
  'sony-a7r-multispectral-quad-agrowing-camera': {
    overview:
      'The Sony A7R Quad Agrowing multispectral camera is an agriculture UAV drone sensor with four lenses on a Sony A7R body. It captures multiple narrow bands for plant health analysis across a farm.',
    bestFor:
      'Suited to precision-agriculture consultants and researchers who want more spectral bands than a dual system while staying within a manageable payload.',
    highlights: ['Quad-lens multispectral system', 'Built on a Sony A7R body', 'Suited to NDVI and similar crop indices'],
    specs: [
      ['Brand', 'Agrowing'],
      ['Camera body', 'Sony A7R'],
      ['Lenses', '4 (quad)']
    ]
  },
  'sony-a7r-multispectral-sextuple-agrowing-camera': {
    overview:
      'The Sony A7R Sextuple Agrowing multispectral camera is the top-tier Agrowing system for the best drones for agriculture work that need maximum spectral detail. Six lenses on a Sony A7R body capture the widest range of bands.',
    bestFor:
      'For research groups, agronomy firms and large ag operations that want the most spectral information per flight. Request a quote for the full system and calibration options.',
    highlights: ['Six-lens multispectral system', 'Built on a Sony A7R body', 'Maximum spectral coverage in the Agrowing range'],
    specs: [
      ['Brand', 'Agrowing'],
      ['Camera body', 'Sony A7R'],
      ['Lenses', '6 (sextuple)']
    ]
  },
  'micasense-altum-pt': {
    overview:
      'The MicaSense Altum-PT is a multispectral and thermal sensor with a panchromatic band for pan-sharpened imagery. It is a UAV thermal imaging camera and multispectral sensor in one payload.',
    bestFor:
      'Intended for agronomy, research and precision-agriculture teams that need multispectral, thermal and high-resolution imagery in a single flight.',
    highlights: ['Five multispectral bands plus panchromatic and thermal', 'High-resolution pan-sharpened output', 'Single sensor for crop stress and water use'],
    specs: [
      ['Multispectral bands', '5 (blue, green, red, red edge, near-IR), 2064×1544 each'],
      ['Panchromatic', '4112×3008 (about 12 MP)'],
      ['Thermal', 'FLIR LWIR, 320×256'],
      ['Weight', 'About 460 g with DLS 2 light sensor']
    ]
  },
  'micasense-rededge-p': {
    overview:
      'The MicaSense RedEdge-P is a RedEdge multispectral sensor with five narrow bands plus a high-resolution panchromatic band. It is a drone sensor used for precision agriculture and crop monitoring.',
    bestFor:
      'Best for agronomists and growers who want detailed crop health maps and pan-sharpened imagery from a proven multispectral platform.',
    highlights: ['Five narrow multispectral bands plus panchromatic', 'High-resolution pan-sharpened imagery', 'Proven ag sensor with DLS 2 light sensor'],
    specs: [
      ['Bands', 'Blue 475 nm, green 560 nm, red 668 nm, red edge 717 nm, NIR 842 nm'],
      ['Multispectral resolution', '1.6 MP per band'],
      ['Panchromatic', '5.1 MP (2464×2056)']
    ]
  },
  'slantrange-3px-multispectral-sensor': {
    overview:
      'The SlantRange 3PX is a multispectral sensor for crop analytics, powered by DJI Skyport. It is a crop-analytics sensor for farmers and agronomists who want a straightforward multispectral drone solution.',
    bestFor:
      'For ag service providers and farms that want an integrated multispectral and crop analytics workflow.',
    highlights: ['Four spectral channels plus an illumination sensor', 'DJI Skyport integration', 'Crop analytics workflow'],
    specs: [
      ['Spectral channels', '4 vegetation + 4 ambient illumination'],
      ['Spectral range', '410–950 nm'],
      ['Ground sample distance', '4.8 cm at 120 m AGL']
    ]
  },
  'slantrange-4p-multispectral-sensor': {
    overview:
      'The SlantRange 4P is a six-band multispectral sensor for crop analytics that supports both NDVI and NDRE. It is a premium agriculture UAV sensor for agronomists who want finer band detail.',
    bestFor:
      'A good match for ag professionals who need advanced vegetation indices and accurate crop scouting. Pricing varies by option, so request a quote.',
    highlights: ['Six spectral channels', 'Supports NDVI and NDRE analysis', 'Options for different aircraft'],
    specs: [['Spectral channels', '6'], ['Indices', 'NDVI and NDRE']]
  },

  // ---------------- Integration kits ----------------
  'phantom-4-integration-kit-rededge-mx': {
    overview:
      'The Phantom 4 Integration Kit for RedEdge-MX lets you mount a MicaSense RedEdge-MX on a DJI Phantom 4. It is a Phantom 4 drone kit that turns a standard Phantom 4 into a multispectral mapping aircraft.',
    bestFor:
      'For growers and consultants who already own a Phantom 4 and want multispectral data without buying a new aircraft. The RedEdge-MX sensor is a separate purchase.',
    highlights: ['Mount kit for the RedEdge-MX on a Phantom 4', 'Uses your existing aircraft', 'Low-cost multispectral upgrade'],
    specs: [['Compatible aircraft', 'DJI Phantom 4'], ['Compatible sensor', 'MicaSense RedEdge-MX']]
  },
  'phantom-4-integration-kit-parrot-sequoia': {
    overview:
      'The Phantom 4 Integration Kit for Parrot Sequoia mounts a Parrot Sequoia on a DJI Phantom 4 quadcopter drone. It lets farmers and mappers use a Phantom 4 as a UAV for farming.',
    bestFor:
      'For pilots who want to use a Phantom 4 with a Parrot Sequoia sensor for crop monitoring. Confirm the pairing when you request a quote.',
    highlights: ['Mount kit for a Parrot Sequoia on a Phantom 4', 'Use the aircraft you already have', 'Affordable path into multispectral'],
    specs: [['Compatible aircraft', 'DJI Phantom 4'], ['Compatible sensor', 'Parrot Sequoia']]
  },
  'mavic-2-pro-parrot-sequoia-integration-kit': {
    overview:
      'The Mavic 2 Pro Parrot Sequoia Integration Kit mounts a Parrot Sequoia on a DJI Mavic 2 Pro drone. It is a lightweight way to run multispectral missions from a folding drone.',
    bestFor:
      'Best for farmers and consultants who want a portable multispectral setup based on the Mavic 2 Pro.',
    highlights: ['Mount kit for a Parrot Sequoia on a Mavic 2 Pro', 'Portable foldable platform', 'Low-cost multispectral upgrade'],
    specs: [['Compatible aircraft', 'DJI Mavic 2 Pro'], ['Compatible sensor', 'Parrot Sequoia']]
  },
  'mavic-pro-integration-kit-parrot-sequoia': {
    overview:
      'The Mavic Pro Integration Kit for Parrot Sequoia mounts a Parrot Sequoia on a DJI Mavic Pro drone. It extends the life of your Mavic Pro as a compact multispectral aircraft.',
    bestFor:
      'For Mavic Pro owners who want to move into crop monitoring without buying another drone.',
    highlights: ['Mount kit for a Parrot Sequoia on a Mavic Pro', 'Compact, portable platform', 'Works with your existing aircraft'],
    specs: [['Compatible aircraft', 'DJI Mavic Pro'], ['Compatible sensor', 'Parrot Sequoia']]
  },

  // ---------------- Autel and FLIR drones ----------------
  'autel-evo-max-4t-drone': {
    overview:
      'The Autel EVO Max 4T is an enterprise thermal drone with wide, zoom and thermal cameras plus a laser rangefinder. It is an alternative to DJI for buyers searching for thermal drones in Australia.',
    bestFor:
      'Built for public safety, inspection and security teams that want a thermal-equipped aircraft with an alternative to the DJI range.',
    highlights: ['Wide, zoom and thermal cameras', 'Laser rangefinder', 'Up to 42 min flight time'],
    specs: [
      ['Max flight time', 'Up to 42 min'],
      ['Weight', 'About 1.6 kg with battery'],
      ['Payload', 'Wide + zoom + thermal cameras and laser rangefinder']
    ]
  },
  'flir-ion-m440-tactical-drone': {
    overview:
      'The FLIR ION M440 is a small tactical drone for short-range reconnaissance with dual visible cameras and a FLIR Boson thermal camera. It is a FLIR Australia option for defence and public-safety buyers.',
    bestFor:
      'For government, security and public-safety buyers who need a backpack-portable UAS with thermal. Note that stock is limited, so ask for availability.',
    highlights: ['Dual 12 MP visible cameras plus Boson 320 thermal', 'About 35 min flight time', 'Blue sUAS listed platform'],
    specs: [
      ['Thermal camera', 'FLIR Boson 320 (320×256)'],
      ['Visible cameras', '2 × 12 MP (82° and 28° field of view)'],
      ['Max flight time', 'About 35 min'],
      ['Weight', 'About 1.8 kg']
    ]
  },

  // ---------------- Spraying drones ----------------
  'xag-p30-spraying-drone': {
    overview:
      'The XAG P30 is a spray drone for crop protection with rotary atomiser nozzles. It is a drone sprayer for broadacre, orchards and vineyards.',
    bestFor:
      'Suited to farmers and spraying contractors who want a reliable agricultural spray drone. Request a quote for training and set-up.',
    highlights: ['Rotary atomiser spray system', 'Designed for crop protection and spot spraying', 'Backed by an established ag-drone brand'],
    specs: [
      ['Spray system', 'Four rotary atomiser nozzles'],
      ['Application', 'Crop protection spraying'],
      ['Drone type', 'Agricultural spraying UAV']
    ]
  },
  'brouav-d30l-8-spraying-drone': {
    overview:
      'The BROUAV D30L-8 is a drone sprayer with a 30 L tank and eight rotors for stable, heavy spraying. It is a mid-size agricultural drone for spraying that handles crops, paddocks and orchards.',
    bestFor:
      'A good fit for farmers and contract sprayers who want a larger tank than a small spray drone without moving to a flagship-size platform.',
    highlights: ['30 L tank capacity', 'Eight-rotor design for stability', 'Suited to broadacre and orchard spraying'],
    specs: [['Tank capacity', '30 L'], ['Rotors', '8'], ['Application', 'Agricultural spraying']]
  },
  'brouav-d52l-8-spraying-drone': {
    overview:
      'The BROUAV D52L-8 is a large-capacity crop spraying drone with a 52 L tank and eight rotors. It cuts refill time on big paddocks and is a heavy payload drone built for volume.',
    bestFor:
      'Best for large farms and contractors covering big areas who want fewer refill trips per hectare. Request a quote for freight and set-up.',
    highlights: ['52 L tank for fewer refills', 'Eight-rotor heavy-lift design', 'Built for broadacre spraying'],
    specs: [['Tank capacity', '52 L'], ['Rotors', '8'], ['Application', 'Agricultural spraying']]
  },
  'brouav-d72l-8-spraying-drone': {
    overview:
      'The BROUAV D72L-8 is a heavy-capacity agricultural spraying drone with a 72 L tank. It is a very large agricultural drone and a serious heavy-lift option for broadacre operations.',
    bestFor:
      'Aimed at large-scale farms and contractors who need the maximum payload and area per flight, including weed spraying and crop protection. Currently out of stock, so request a quote for lead time.',
    highlights: ['72 L tank and 72 kg payload', 'Eight-rotor heavy-lift design', 'Maximum area per flight in the BROUAV range'],
    specs: [['Tank capacity', '72 L'], ['Max payload', '72 kg'], ['Rotors', '8']]
  },

  // ---------------- Spraying accessories ----------------
  'dji-agras-t30-spreading-system-3-0': {
    overview:
      'The DJI Agras T30 Spreading System 3.0 is an accessory that lets the Agras T30 spread granular material such as seed and fertiliser. It extends your DJI agricultural drone beyond liquid spraying.',
    bestFor:
      'For farms and contractors that already run an Agras T30 and want to add seeding, fertiliser and bait spreading.',
    highlights: ['Granular spreading for seed and fertiliser', 'Designed for the Agras T30', 'Extends an existing spraying drone'],
    specs: [['Compatible aircraft', 'DJI Agras T30'], ['Type', 'Granular spreading system']]
  },
  'dji-agras-t30-battery': {
    overview:
      'The DJI Agras T30 Battery is a replacement intelligent flight battery for the Agras T30. Keep a spare so a spraying day is never cut short.',
    bestFor:
      'For Agras T30 operators who need extra or replacement batteries to keep working through spraying jobs.',
    highlights: ['Intelligent flight battery for the Agras T30', 'Replacement or spare pack', 'Genuine DJI battery'],
    specs: [['Compatible aircraft', 'DJI Agras T30'], ['Type', 'Intelligent flight battery']]
  },
  'dji-agras-t30-battery-charger': {
    overview:
      'The DJI Agras T30 Battery Charger charges Agras T30 intelligent batteries. A fast charger keeps spare batteries ready between spraying runs.',
    bestFor:
      'For Agras T30 operators adding a second charging point or replacing a damaged charger.',
    highlights: ['Charges Agras T30 batteries', 'Keeps spares ready between flights', 'Genuine DJI charger'],
    specs: [['Compatible aircraft', 'DJI Agras T30'], ['Type', 'Battery charger']]
  },
  'dji-agras-t40-battery': {
    overview:
      'The DJI Agras T40 Battery is the intelligent flight battery for the DJI Agras T40 and a core part of any T40 spraying kit. Check the DJI Agras T40 price for the aircraft and add spares so the aircraft can keep spraying.',
    bestFor:
      'For T40 operators who need replacement or spare packs to keep flying through large jobs.',
    highlights: ['30,000 mAh intelligent flight battery', '1,567 Wh energy capacity', 'Genuine DJI battery'],
    specs: [
      ['Capacity', '30,000 mAh'],
      ['Voltage', '52.22 V'],
      ['Energy', '1,567 Wh'],
      ['Compatible aircraft', 'DJI Agras T40']
    ]
  },

  // ---------------- Batteries ----------------
  'dji-air-3-battery': {
    overview:
      'The DJI Air 3 Battery is the intelligent flight battery for the DJI Air 3, a drone battery that gives you up to 46 minutes per charge on the aircraft. A spare is the easiest way to double your flying time.',
    bestFor:
      'For Air 3 pilots who want a spare for travel and long shoots.',
    highlights: ['Genuine DJI intelligent flight battery', 'Up to 46 min flight time on the Air 3', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Air 3'], ['Type', 'Intelligent flight battery']]
  },
  'dji-matrice-4-battery': {
    overview:
      'The DJI Matrice 4 Battery is the intelligent flight battery for the Matrice 4 series. Keep a spare so each enterprise mission can continue without waiting for a charge.',
    bestFor:
      'For DJI Matrice 4E and Matrice 4T operators who want to extend field time with spare batteries.',
    highlights: ['Genuine DJI battery', 'Up to 49 min flight time on the Matrice 4 series', 'Genuine DJI battery for enterprise missions'],
    specs: [['Compatible aircraft', 'DJI Matrice 4E, Matrice 4T'], ['Type', 'Intelligent flight battery']]
  },
  'dji-mavic-3-enterprise-battery-kit': {
    overview:
      'The DJI Mavic 3 Enterprise Battery Kit adds extra batteries for the Mavic 3 Enterprise series. A kit is the most efficient way to keep a mapping job going without a charging break.',
    bestFor:
      'For surveyors and inspectors running Mavic 3 Enterprise, Thermal or Multispectral aircraft who need to extend a flight day. Currently out of stock, so ask for lead time.',
    highlights: ['Battery kit for the Mavic 3 Enterprise series', 'Extend field time between charges', 'Genuine DJI batteries'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Enterprise, Mavic 3 Thermal, Mavic 3 Multispectral']]
  }
};
