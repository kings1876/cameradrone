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
  'dji-mavic-4-pro-dji-rc-2': {
    overview:
      'The DJI Mavic 4 Pro (DJI RC 2) is DJI\'s flagship triple-camera drone, built around a 100 MP Hasselblad main camera and a 360-degree rotating Infinity Gimbal, supplied with the DJI RC 2. Often searched as the DJI Mavic Pro 4, it adds front-facing LiDAR for low-light obstacle sensing and flies for up to 51 minutes.',
    bestFor:
      'Built for professional creators, filmmakers and real estate and tourism shooters who need cinema-grade imaging from a folding drone.',
    highlights: ['100 MP Hasselblad 4/3 main camera plus 70 mm and 168 mm tele cameras', '360-degree rotating Infinity Gimbal', 'Up to 51 min flight time and 30 km transmission'],
    specs: [['Main camera', '100 MP 4/3 CMOS Hasselblad, 28 mm eq.'], ['Medium tele camera', '48 MP, 70 mm eq.'], ['Tele camera', '50 MP, 168 mm eq.'], ['Gimbal', '360-degree rotating Infinity Gimbal'], ['Obstacle sensing', 'Omnidirectional with front-facing LiDAR'], ['Max flight time', 'Up to 51 min'], ['Transmission range', 'Up to 30 km'], ['Controller', 'DJI RC 2']]
  },
  'dji-mavic-4-pro-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Mavic 4 Pro Fly More Combo (DJI RC 2) is the Mavic 4 Pro with the DJI RC 2, extra batteries and the Fly More accessories for long shoot days. The extra power makes the 51-minute flagship practical for full-day commercial and film work.',
    bestFor:
      'Perfect for professionals who know they need the Mavic 4 Pro and want it ready for long jobs.',
    highlights: ['Triple camera system with a 100 MP Hasselblad main camera', 'Fly More kit with extra batteries', 'DJI RC 2 screen controller'],
    specs: [['Main camera', '100 MP 4/3 CMOS Hasselblad'], ['Max flight time per battery', 'Up to 51 min'], ['Transmission range', 'Up to 30 km'], ['Controller', 'DJI RC 2']],
    inTheBox: ['Mavic 4 Pro aircraft', 'DJI RC 2 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub', 'Shoulder bag']
  },
  'dji-lito-1': {
    overview:
      'The DJI Lito 1 is an easy-to-fly beginner camera drone under 249 g with a 1/2-inch sensor, 4K/60 video and omnidirectional obstacle sensing. ActiveTrack keeps your subject in frame while obstacle sensing helps new pilots fly with confidence.',
    bestFor:
      'Ideal for first-time pilots, families and travellers who want an affordable, simple drone with 4K video.',
    highlights: ['Under 249 g and palm-sized when folded', '4K/60 fps video and 8K photos', 'Omnidirectional obstacle sensing and ActiveTrack'],
    specs: [['Camera sensor', '1/2-inch'], ['Video', '4K up to 60 fps, 4K/100 fps slow motion'], ['Photos', 'Up to 8K'], ['Take-off weight', 'Under 249 g'], ['Obstacle sensing', 'Omnidirectional'], ['Video transmission', 'Up to 15 km']]
  },
  'dji-lito-1-fly-more-combo-dji-rc-n3': {
    overview:
      'The DJI Lito 1 Fly More Combo (DJI RC-N3) is the Lito 1 with extra batteries and the DJI RC-N3 controller for longer beginner flights. It is the better-value way to buy the Lito 1 if you plan to fly for more than one battery at a time.',
    bestFor:
      'A good pick for beginners who want spare power in the box and plan to fly regularly.',
    highlights: ['Fly More kit with extra batteries', '4K/60 fps video, under 249 g', 'DJI RC-N3 controller'],
    specs: [['Camera sensor', '1/2-inch'], ['Video', '4K up to 60 fps'], ['Take-off weight', 'Under 249 g'], ['Controller', 'DJI RC-N3 (uses your smartphone)']],
    inTheBox: ['Lito 1 aircraft', 'DJI RC-N3 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-lito-x1': {
    overview:
      'The DJI Lito X1 is a premium beginner drone with a 1/1.3-inch sensor, 4K/60 HDR video, forward-facing LiDAR and omnidirectional obstacle sensing. It brings pro-level image quality and safer flying to a sub-249 g drone that is simple enough to use on day one.',
    bestFor:
      'Best for beginners who want a step-up camera, and for travel and social creators.',
    highlights: ['1/1.3-inch sensor with f/1.7 aperture', '4K/60 HDR and 10-bit D-Log M', 'Forward-facing LiDAR with omnidirectional sensing'],
    specs: [['Camera sensor', '1/1.3-inch CMOS, f/1.7'], ['Video', '4K up to 60 fps HDR, 4K/100 fps slow motion, 10-bit D-Log M'], ['Photos', 'Up to 8K'], ['Take-off weight', 'Under 249 g'], ['Obstacle sensing', 'Omnidirectional with forward LiDAR'], ['Video transmission', 'Up to 15 km']]
  },
  'dji-lito-x1-fly-more-combo-dji-rc-n3': {
    overview:
      'The DJI Lito X1 Fly More Combo (DJI RC-N3) is the Lito X1 with extra batteries and the DJI RC-N3 controller. It keeps the 1/1.3-inch camera flying for longer outings at a friendly price.',
    bestFor:
      'Ideal for travellers and beginners who want spare batteries without paying for a screen controller.',
    highlights: ['Fly More kit with extra batteries', '1/1.3-inch camera, 4K/60 HDR', 'DJI RC-N3 controller'],
    specs: [['Camera sensor', '1/1.3-inch CMOS'], ['Video', '4K up to 60 fps HDR'], ['Take-off weight', 'Under 249 g'], ['Controller', 'DJI RC-N3 (uses your smartphone)']],
    inTheBox: ['Lito X1 aircraft', 'DJI RC-N3 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-lito-x1-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Lito X1 Fly More Combo (DJI RC 2) is the Lito X1 Fly More kit with the DJI RC 2 screen controller. The built-in screen means no phone and a faster set-up.',
    bestFor:
      'Best for beginners who want a bright screen controller and spare batteries from day one.',
    highlights: ['DJI RC 2 controller with built-in screen', 'Fly More kit with extra batteries', '1/1.3-inch camera, 4K/60 HDR'],
    specs: [['Camera sensor', '1/1.3-inch CMOS'], ['Video', '4K up to 60 fps HDR'], ['Take-off weight', 'Under 249 g'], ['Controller', 'DJI RC 2 with built-in screen']],
    inTheBox: ['Lito X1 aircraft', 'DJI RC 2 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub']
  },
  'dji-lito-x1-fly-more-combo-plus-dji-rc-2': {
    overview:
      'The DJI Lito X1 Fly More Combo Plus (DJI RC 2) is the top Lito X1 kit with the DJI RC 2 and the higher-capacity Plus batteries. The Plus batteries extend flight time for the longest sessions in the Lito range.',
    bestFor:
      'Ideal for creators who want maximum endurance from a beginner-friendly drone.',
    highlights: ['Plus batteries for longer flights', 'DJI RC 2 controller with built-in screen', '1/1.3-inch camera, 4K/60 HDR'],
    specs: [['Camera sensor', '1/1.3-inch CMOS'], ['Video', '4K up to 60 fps HDR'], ['Controller', 'DJI RC 2 with built-in screen'], ['Batteries', 'Intelligent Flight Battery Plus']],
    inTheBox: ['Lito X1 aircraft', 'DJI RC 2 controller', 'Fly More Plus kit: Plus batteries', 'Charging hub']
  },
  'dji-mini-5-pro-fly-more-combo-plus-dji-rc-2': {
    overview:
      'The DJI Mini 5 Pro Fly More Combo Plus (DJI RC 2) is the Mini 5 Pro with the DJI RC 2 and the larger Plus battery for the longest flights the Mini 5 Pro can offer. The Plus batteries extend flight time, though the aircraft is then heavier than 250 g.',
    bestFor:
      'Best for pilots who want maximum endurance from the 1-inch Mini 5 Pro. Check CASA rules for aircraft over 250 g.',
    highlights: ['Plus batteries for maximum flight time', '1-inch 50 MP camera', 'DJI RC 2 controller with built-in screen'],
    specs: [['Camera sensor', '1-inch CMOS, 50 MP'], ['Batteries', 'Intelligent Flight Battery Plus'], ['Controller', 'DJI RC 2 with built-in screen'], ['CASA note', 'With the Plus battery the aircraft exceeds 250 g']],
    inTheBox: ['Mini 5 Pro aircraft', 'DJI RC 2 controller', 'Fly More Plus kit: Plus batteries', 'Charging hub']
  },
  'dji-neo-2-motion-fly-more-combo': {
    overview:
      'The DJI Neo 2 Motion Fly More Combo is the palm-sized Neo 2 with goggles, a motion controller and extra batteries for immersive flying. The motion controller steers the Neo 2 with simple hand movements while the goggles give a first-person view.',
    bestFor:
      'Great for beginners who want a fun, immersive first FPV-style flight experience.',
    highlights: ['Goggles and motion controller included', 'Extra batteries for longer sessions', 'About 151 g, 4K video'],
    specs: [['Take-off weight', 'About 151 g'], ['Video', '4K up to 60 fps'], ['Kit', 'Neo 2 with goggles, motion controller and extra batteries']],
    inTheBox: ['Neo 2 aircraft', 'DJI Goggles N3', 'Motion controller', 'Extra Intelligent Flight Batteries']
  },
  'dji-neo-fly-more-combo': {
    overview:
      'The DJI Neo Fly More Combo is the original palm-sized Neo with a DJI RC-N3 controller and three batteries. At about 135 g it is easy to carry everywhere, and the extra batteries stretch a short flying session.',
    bestFor:
      'A budget-friendly beginner drone for families, cyclists and runners.',
    highlights: ['About 135 g, palm-sized', 'Three batteries and a DJI RC-N3 controller', '4K video with follow-me modes'],
    specs: [['Take-off weight', 'About 135 g'], ['Video', '4K'], ['Controller', 'DJI RC-N3']],
    inTheBox: ['Neo aircraft', 'DJI RC-N3 controller', 'Three Intelligent Flight Batteries']
  },
  'dji-neo-motion-fly-more-combo': {
    overview:
      'The DJI Neo Motion Fly More Combo is the original Neo with goggles, a motion controller and extra batteries. It gives beginners an immersive, gesture-controlled way to fly the pocket-sized Neo.',
    bestFor:
      'A fun starter kit for pilots who want first-person flying without a complicated set-up.',
    highlights: ['Goggles and motion controller included', 'About 135 g and palm-sized', '4K video'],
    specs: [['Take-off weight', 'About 135 g'], ['Video', '4K'], ['Kit', 'Neo with goggles, motion controller and extra batteries']],
    inTheBox: ['Neo aircraft', 'DJI Goggles N3', 'Motion controller', 'Extra Intelligent Flight Batteries']
  },
  'dji-avata-2-drone-only': {
    overview:
      'The DJI Avata 2 (Drone Only) is the Avata 2 FPV drone, drone only, for pilots who already own goggles and a controller. The 1/1.3-inch camera, protected propellers and 155-degree field of view make it a popular cinematic FPV drone.',
    bestFor:
      'Best for existing DJI FPV pilots adding an aircraft to goggles and a controller they already own.',
    highlights: ['1/1.3-inch 12 MP camera, 4K up to 60 fps', 'Protected propellers, 155-degree field of view', 'Up to 23 min flight time'],
    specs: [['Camera', '1/1.3-inch CMOS, 12 MP'], ['Video', '4K up to 60 fps'], ['Take-off weight', 'About 377 g'], ['Max flight time', 'Up to 23 min'], ['Kit', 'Drone only']]
  },
  'dji-avata-2-fly-smart-combo-single-battery': {
    overview:
      'The DJI Avata 2 Fly Smart Combo (Single Battery) is the Avata 2 with Goggles N3, the RC Motion 3 and one battery, the lower-cost Fly Smart kit. It is the simplest way to start with immersive FPV on the Avata 2.',
    bestFor:
      'Ideal for first-time FPV pilots who want everything needed to fly in one box.',
    highlights: ['Goggles N3 and RC Motion 3 included', '1/1.3-inch camera, 4K up to 60 fps', 'Up to 23 min flight time'],
    specs: [['Camera', '1/1.3-inch CMOS, 12 MP'], ['Video', '4K up to 60 fps'], ['Take-off weight', 'About 377 g'], ['Goggles', 'DJI Goggles N3'], ['Controller', 'DJI RC Motion 3']],
    inTheBox: ['Avata 2 aircraft', 'DJI Goggles N3', 'DJI RC Motion 3', 'One Intelligent Flight Battery']
  },
  'dji-avata-2-fly-smart-combo-three-batteries': {
    overview:
      'The DJI Avata 2 Fly Smart Combo (Three Batteries) is the Avata 2 Fly Smart kit with Goggles N3, the RC Motion 3, three batteries and a charging hub. Three batteries give a full session of immersive flying without waiting to recharge.',
    bestFor:
      'Perfect for regular FPV pilots who want spare power in the box.',
    highlights: ['Three batteries and a charging hub', 'Goggles N3 and RC Motion 3 included', '4K up to 60 fps'],
    specs: [['Camera', '1/1.3-inch CMOS, 12 MP'], ['Video', '4K up to 60 fps'], ['Max flight time per battery', 'Up to 23 min'], ['Goggles', 'DJI Goggles N3'], ['Controller', 'DJI RC Motion 3']],
    inTheBox: ['Avata 2 aircraft', 'DJI Goggles N3', 'DJI RC Motion 3', 'Three Intelligent Flight Batteries', 'Two-Way Charging Hub']
  },
  'dji-avata-pro-view-combo-new': {
    overview:
      'The DJI Avata Pro-View Combo (New) is the original Avata FPV drone with DJI Goggles 2 and a motion controller. It remains a capable, ready-to-fly FPV kit for cinematic flying.',
    bestFor:
      'Suitable for pilots who want a complete first-generation Avata kit with goggles and a motion controller.',
    highlights: ['Goggles and motion controller included', 'Compact cinewhoop-style FPV drone', 'Protected propellers'],
    specs: [['Kit', 'Avata aircraft with goggles and motion controller'], ['Type', 'FPV cinewhoop-style drone']],
    inTheBox: ['Avata aircraft', 'DJI Goggles', 'Motion controller']
  },
  'dji-avata-no-rc': {
    overview:
      'The DJI Avata (No RC) is the original Avata FPV aircraft with no controller or goggles in the box. It is the lowest-cost way to add an Avata if you already own a compatible controller and goggles.',
    bestFor:
      'Best for existing DJI FPV owners who want another airframe.',
    highlights: ['Aircraft only', 'Protected propellers', 'Compatible with DJI goggles and controllers'],
    specs: [['Kit', 'Aircraft only, no controller or goggles'], ['Type', 'FPV cinewhoop-style drone']]
  },
  'dji-mini-4k': {
    overview:
      'The DJI Mini 4K is an entry-level sub-250 g 4K camera drone with a 3-axis gimbal. It is a simple, lightweight way into 4K aerial video at a very friendly price.',
    bestFor:
      'A good first drone for beginners, travellers and hobbyists.',
    highlights: ['Sub-250 g 4K camera drone', '3-axis gimbal for stable footage', 'Easy to fly for beginners'],
    specs: [['Video', '4K'], ['Take-off weight', 'Under 250 g'], ['Gimbal', '3-axis']]
  },
  'dji-mini-3-dji-rc-n1': {
    overview:
      'The DJI Mini 3 (DJI RC-N1) is a compact sub-249 g camera drone with a 1/1.3-inch sensor, supplied with the DJI RC-N1 phone-based controller. It is lightweight, folds small and gives sharp 4K video at an easy price.',
    bestFor:
      'A great value pick for travellers and beginners who want a capable camera drone.',
    highlights: ['Sub-249 g camera drone', '1/1.3-inch sensor', 'DJI RC-N1 controller'],
    specs: [['Take-off weight', 'Under 249 g'], ['Camera sensor', '1/1.3-inch CMOS'], ['Controller', 'DJI RC-N1 (uses your smartphone)']]
  },
  'dji-mini-3-dji-rc': {
    overview:
      'The DJI Mini 3 (DJI RC) is the Mini 3 with the DJI RC screen controller included. The built-in screen means no phone and a quicker set-up.',
    bestFor:
      'Best for Mini 3 buyers who want a screen controller from the start.',
    highlights: ['DJI RC screen controller', 'Sub-249 g camera drone', '1/1.3-inch sensor'],
    specs: [['Take-off weight', 'Under 249 g'], ['Camera sensor', '1/1.3-inch CMOS'], ['Controller', 'DJI RC with built-in screen']]
  },
  'dji-mini-3-fly-more-combo-dji-rc': {
    overview:
      'The DJI Mini 3 Fly More Combo (DJI RC) is the Mini 3 Fly More Combo with the DJI RC screen controller and extra batteries. The extra batteries make the compact Mini 3 practical for a full day of travel flying.',
    bestFor:
      'Ideal for travellers who want spare power and a screen controller.',
    highlights: ['Fly More kit with extra batteries', 'DJI RC screen controller', 'Sub-249 g camera drone'],
    specs: [['Take-off weight', 'Under 249 g'], ['Camera sensor', '1/1.3-inch CMOS'], ['Controller', 'DJI RC with built-in screen']],
    inTheBox: ['Mini 3 aircraft', 'DJI RC controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub', 'Shoulder bag']
  },
  'dji-mavic-3-pro-cine-premium-combo-dji-rc-pro': {
    overview:
      'The DJI Mavic 3 Pro Cine Premium Combo (DJI RC Pro) is the Cine Premium kit for the Mavic 3 Pro with the DJI RC Pro, built for high-bitrate professional recording. It adds fast internal storage and Apple ProRes recording for post-production workflows.',
    bestFor:
      'Aimed at film-makers and agencies who need the Mavic 3 Pro\'s three cameras with cinema-grade recording.',
    highlights: ['Cine kit for high-bitrate recording', 'Hasselblad main camera plus two tele cameras', 'DJI RC Pro high-bright controller'],
    specs: [['Cameras', '4/3 CMOS wide, 70 mm medium tele, 166 mm tele'], ['Controller', 'DJI RC Pro with high-bright screen'], ['Recording', 'Cine edition: Apple ProRes']],
    inTheBox: ['Mavic 3 Pro Cine aircraft', 'DJI RC Pro controller', 'Fly More kit', 'Fast internal storage']
  },
  'dji-lito-1-intelligent-flight-battery': {
    overview:
      'The DJI Lito 1 Intelligent Flight Battery is the intelligent flight battery for the DJI Lito 1. A spare pack doubles the time you can spend in the air.',
    bestFor:
      'A sensible add-on for DJI Lito 1 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Lito 1', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Lito 1'], ['Type', 'Intelligent flight battery']]
  },
  'dji-lito-1-charging-hub': {
    overview:
      'The DJI Lito 1 Charging Hub is a battery charging hub for the DJI Lito 1. It charges several batteries from one place so spares are ready.',
    bestFor:
      'A sensible add-on for DJI Lito 1 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Lito 1', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Lito 1'], ['Type', 'Battery charging hub']]
  },
  'dji-lito-x1-intelligent-flight-battery': {
    overview:
      'The DJI Lito X1 Intelligent Flight Battery is the intelligent flight battery for the DJI Lito X1. A spare pack keeps a day of beginner flying going.',
    bestFor:
      'A sensible add-on for DJI Lito X1 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Lito X1', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Lito X1'], ['Type', 'Intelligent flight battery']]
  },
  'dji-lito-series-intelligent-flight-battery-plus': {
    overview:
      'The DJI Lito Series Intelligent Flight Battery Plus is the higher-capacity Plus battery for the Lito series. It extends flight time compared with the standard pack.',
    bestFor:
      'A sensible add-on for DJI Lito X1 and Lito 1 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Lito X1 and Lito 1', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Lito X1 and Lito 1'], ['Type', 'Intelligent flight battery Plus']]
  },
  'dji-lito-x1-charging-hub': {
    overview:
      'The DJI Lito X1 Charging Hub is a battery charging hub for the DJI Lito X1. It keeps spare batteries charged and ready.',
    bestFor:
      'A sensible add-on for DJI Lito X1 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Lito X1', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Lito X1'], ['Type', 'Battery charging hub']]
  },
  'dji-avata-360-intelligent-flight-battery': {
    overview:
      'The DJI Avata 360 Intelligent Flight Battery is the intelligent flight battery for the DJI Avata 360. A spare pack lets you shoot more 360-degree lines in one outing.',
    bestFor:
      'A sensible add-on for DJI Avata 360 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Avata 360', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 360'], ['Type', 'Intelligent flight battery']]
  },
  'dji-avata-360-propellers': {
    overview:
      'The DJI Avata 360 Propellers is a set of propellers for the DJI Avata 360. A spare set gets you flying again quickly after a knock.',
    bestFor:
      'A sensible add-on for DJI Avata 360 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Avata 360', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 360'], ['Type', 'Propellers']]
  },
  'dji-avata-360-charging-hub': {
    overview:
      'The DJI Avata 360 Charging Hub is a charging hub for the DJI Avata 360 batteries. It charges multiple Avata 360 batteries from one input.',
    bestFor:
      'A sensible add-on for DJI Avata 360 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Avata 360', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 360'], ['Type', 'Battery charging hub']]
  },
  'dji-avata-360-replacement-lens-kit-with-tools': {
    overview:
      'The DJI Avata 360 Replacement Lens Kit With Tools is a replacement lens kit with tools for the DJI Avata 360. It lets you swap a scratched or damaged 360-degree lens.',
    bestFor:
      'A sensible add-on for DJI Avata 360 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Avata 360', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 360'], ['Type', 'Replacement lens kit']]
  },
  'dji-avata-360-replacement-lens': {
    overview:
      'The DJI Avata 360 Replacement Lens is a replacement lens for the DJI Avata 360. It restores image quality if a lens is damaged.',
    bestFor:
      'A sensible add-on for DJI Avata 360 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Avata 360', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 360'], ['Type', 'Replacement lens']]
  },
  'dji-neo-2-intelligent-flight-battery': {
    overview:
      'The DJI Neo 2 Intelligent Flight Battery is the intelligent flight battery for the DJI Neo 2. A spare Neo 2 battery is the easiest way to extend a short session.',
    bestFor:
      'A sensible add-on for DJI Neo 2 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Neo 2', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Neo 2'], ['Type', 'Intelligent flight battery']]
  },
  'dji-neo-2-two-way-charging-hub': {
    overview:
      'The DJI Neo 2 Two-Way Charging Hub is a two-way charging hub for the DJI Neo 2. It charges multiple Neo 2 batteries.',
    bestFor:
      'A sensible add-on for DJI Neo 2 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Neo 2', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Neo 2'], ['Type', 'Battery charging hub']]
  },
  'dji-neo-2-propellers': {
    overview:
      'The DJI Neo 2 Propellers is a propeller set for the DJI Neo 2. A spare set is a very low-cost safeguard.',
    bestFor:
      'A sensible add-on for DJI Neo 2 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Neo 2', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Neo 2'], ['Type', 'Propellers']]
  },
  'dji-neo-2-digital-transceiver': {
    overview:
      'The DJI Neo 2 Digital Transceiver is the digital transceiver that lets the DJI Neo 2 connect to compatible controllers and goggles. Without it the Neo 2 cannot use the longer-range control options.',
    bestFor:
      'A sensible add-on for DJI Neo 2 owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Neo 2', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Neo 2'], ['Type', 'Digital transceiver']]
  },
  'dji-mini-5-pro-intelligent-flight-battery': {
    overview:
      'The DJI Mini 5 Pro Intelligent Flight Battery is the standard intelligent flight battery for the DJI Mini 5 Pro. It keeps the Mini 5 Pro under 250 g with up to 36 minutes of flight.',
    bestFor:
      'A sensible add-on for DJI Mini 5 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mini 5 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 5 Pro'], ['Type', 'Intelligent flight battery']]
  },
  'dji-mini-5-pro-intelligent-flight-battery-plus': {
    overview:
      'The DJI Mini 5 Pro Intelligent Flight Battery Plus is the higher-capacity Plus battery for the DJI Mini 5 Pro. It extends flight time, though the aircraft is then heavier than 250 g.',
    bestFor:
      'A sensible add-on for DJI Mini 5 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mini 5 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 5 Pro'], ['Type', 'Intelligent flight battery Plus']]
  },
  'dji-mini-5-pro-two-way-charging-hub': {
    overview:
      'The DJI Mini 5 Pro Two-Way Charging Hub is a two-way charging hub for the DJI Mini 5 Pro. It charges multiple Mini 5 Pro batteries from one input.',
    bestFor:
      'A sensible add-on for DJI Mini 5 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mini 5 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 5 Pro'], ['Type', 'Battery charging hub']]
  },
  'dji-mini-5-pro-propeller': {
    overview:
      'The DJI Mini 5 Pro Propeller is a propeller set for the DJI Mini 5 Pro. A spare set keeps a Mini 5 Pro flying after a prop strike.',
    bestFor:
      'A sensible add-on for DJI Mini 5 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mini 5 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 5 Pro'], ['Type', 'Propellers']]
  },
  'dji-mavic-4-pro-intelligent-flight-battery': {
    overview:
      'The DJI Mavic 4 Pro Intelligent Flight Battery is the intelligent flight battery for the DJI Mavic 4 Pro. It supports the flagship\'s flight time of up to 51 minutes.',
    bestFor:
      'A sensible add-on for DJI Mavic 4 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 4 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 4 Pro'], ['Type', 'Intelligent flight battery']]
  },
  'dji-mavic-4-pro-propellers': {
    overview:
      'The DJI Mavic 4 Pro Propellers is a propeller set for the DJI Mavic 4 Pro. A spare set keeps a professional shoot on schedule.',
    bestFor:
      'A sensible add-on for DJI Mavic 4 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 4 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 4 Pro'], ['Type', 'Propellers']]
  },
  'dji-mavic-4-pro-parallel-charging-hub': {
    overview:
      'The DJI Mavic 4 Pro Parallel Charging Hub is a parallel charging hub for the DJI Mavic 4 Pro. It charges Mavic 4 Pro batteries in sequence for fast turnaround.',
    bestFor:
      'A sensible add-on for DJI Mavic 4 Pro owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 4 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 4 Pro'], ['Type', 'Parallel battery charging hub']]
  },
  'dji-goggles-3': {
    overview:
      'The DJI Goggles 3 is DJI\'s premium FPV goggles with micro-OLED displays for immersive flying. The headset gives pilots a sharp, low-latency first-person view and works with compatible DJI FPV drones.',
    bestFor:
      'Best for FPV and Avata pilots who want the flagship goggles experience.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'FPV goggles']]
  },
  'dji-goggles-carry-more-backpack': {
    overview:
      'The DJI Goggles Carry More Backpack is a backpack designed to carry DJI goggles, a drone and accessories. It keeps an FPV kit organised for travel.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Carry bag']]
  },
  'dji-sling-bag': {
    overview:
      'The DJI Sling Bag is a compact sling bag for a DJI drone and accessories. It keeps a small kit close to hand.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Sling bag']]
  },
  'dji-65w-portable-charger': {
    overview:
      'The DJI 65W Portable Charger is a 65 W portable charger for DJI batteries and devices. A compact charger is handy for travel and field charging.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Portable charger']]
  },
  'dji-mavic-3-series-low-noise-propellers': {
    overview:
      'The DJI Mavic 3 Series Low-Noise Propellers is a low-noise propeller set for the Mavic 3 series. Low-noise props reduce the sound of the aircraft in flight.',
    bestFor:
      'A sensible add-on for DJI Mavic 3 series owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 series', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 series'], ['Type', 'Low-noise propellers']]
  },
  'dji-mavic-3-storage-cover': {
    overview:
      'The DJI Mavic 3 Storage Cover is a protective storage cover for the Mavic 3 gimbal camera. It keeps the camera protected in storage and transit.',
    bestFor:
      'A sensible add-on for DJI Mavic 3 series owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 series', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 series'], ['Type', 'Storage cover']]
  },
  'dji-mavic-3-classic-storage-cover': {
    overview:
      'The DJI Mavic 3 Classic Storage Cover is a protective storage cover for the Mavic 3 Classic. It protects the gimbal camera when the aircraft is not in use.',
    bestFor:
      'A sensible add-on for DJI Mavic 3 Classic owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 Classic', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Classic'], ['Type', 'Storage cover']]
  },
  'dji-mavic-3-classic-wide-angle-lens': {
    overview:
      'The DJI Mavic 3 Classic Wide-Angle Lens is a clip-on wide-angle lens for the Mavic 3 Classic. It widens the field of view for sweeping landscapes.',
    bestFor:
      'A sensible add-on for DJI Mavic 3 Classic owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 Classic', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Classic'], ['Type', 'Wide-angle lens']]
  },
  'dji-rc-motion-2': {
    overview:
      'The DJI RC Motion 2 is a motion controller that steers compatible DJI drones with hand movements. It makes immersive flying simple for beginners.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Motion controller']]
  },
  'dji-motion-controller': {
    overview:
      'The DJI Motion Controller is a motion controller for compatible DJI drones. Its one-handed control is simple to learn.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Motion controller']]
  },
  'dji-rc-rc-2-control-sticks': {
    overview:
      'The DJI RC/RC 2 Control Sticks is replacement control sticks for the DJI RC and RC 2. Spare sticks are a small, low-cost spare for field repairs.',
    bestFor:
      'A sensible add-on for DJI pilots.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Control sticks']]
  },
  'dji-rc-pro-2': {
    overview:
      'The DJI RC Pro 2 is a professional high-bright screen controller for compatible DJI aircraft. The bright display stays readable in strong sun for demanding shoots.',
    bestFor:
      'For professional pilots who need a bright, capable controller.',
    highlights: ['Genuine DJI accessory', 'Official DJI product', 'Quick to fit'],
    specs: [['Type', 'Screen controller']]
  },
  'dji-fpv-propellers': {
    overview:
      'The DJI FPV Propellers is a propeller set for the original DJI FPV drone. Spare props keep a racing-style FPV session going.',
    bestFor:
      'A sensible add-on for DJI FPV owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI FPV', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI FPV'], ['Type', 'Propellers']]
  },
  'dji-fpv-goggles-battery': {
    overview:
      'The DJI FPV Goggles Battery is a spare battery for DJI FPV goggles. A spare battery keeps an FPV session going.',
    bestFor:
      'A sensible add-on for DJI FPV owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI FPV', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI FPV'], ['Type', 'Goggles battery']]
  },
  'dji-fpv-goggles-antenna-dual-band': {
    overview:
      'The DJI FPV Goggles Antenna (Dual Band) is a dual-band antenna for DJI FPV goggles. A better antenna can help keep the video link stable.',
    bestFor:
      'A sensible add-on for DJI FPV owners.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI FPV', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI FPV'], ['Type', 'Goggles antenna']]
  },
  'dji-matrice-400-2510f-propeller': {
    overview:
      'The DJI Matrice 400 2510F Propeller is a replacement 2510F propeller for the DJI Matrice 400. Spare props keep a heavy-lift enterprise aircraft in service.',
    bestFor:
      'For DJI Matrice 400 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 400', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 400'], ['Type', 'Propeller']]
  },
  'bs100-intelligent-battery-station': {
    overview:
      'The BS100 Intelligent Battery Station is an intelligent battery station that charges enterprise flight batteries quickly. It is designed for teams that rotate batteries through long missions.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Battery station']]
  },
  'dji-matrice-400-third-gimbal-connector': {
    overview:
      'The DJI Matrice 400 Third Gimbal Connector is a connector that adds a third gimbal mount to the DJI Matrice 400. It lets the heavy-lift platform carry an extra payload.',
    bestFor:
      'For DJI Matrice 400 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 400', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 400'], ['Type', 'Gimbal connector']]
  },
  'dji-matrice-400-dual-gimbal-connector': {
    overview:
      'The DJI Matrice 400 Dual Gimbal Connector is a dual gimbal connector for the DJI Matrice 400. It lets the aircraft carry two gimbal payloads at once.',
    bestFor:
      'For DJI Matrice 400 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 400', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 400'], ['Type', 'Gimbal connector']]
  },
  'dji-matrice-400-gimbal-damper': {
    overview:
      'The DJI Matrice 400 Gimbal Damper is a replacement gimbal damper for the DJI Matrice 400. Fresh dampers keep payload footage smooth.',
    bestFor:
      'For DJI Matrice 400 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 400', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 400'], ['Type', 'Gimbal damper']]
  },
  'dji-matrice-4d-series-low-noise-anti-ice-propellers': {
    overview:
      'The DJI Matrice 4D Series Low-Noise Anti-Ice Propellers is low-noise anti-ice propellers for the DJI Matrice 4D series. They suit cold conditions where ice build-up is a risk.',
    bestFor:
      'For DJI Matrice 4D series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4D series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4D series'], ['Type', 'Propellers']]
  },
  'dji-matrice-4d-series-240w-charging-hub': {
    overview:
      'The DJI Matrice 4D Series 240W Charging Hub is a 240 W charging hub for the DJI Matrice 4D series. It charges Matrice 4D batteries faster for busy operations.',
    bestFor:
      'For DJI Matrice 4D series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4D series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4D series'], ['Type', 'Battery charging hub']]
  },
  'dji-matrice-4-obstacle-sensing-module': {
    overview:
      'The DJI Matrice 4 Obstacle Sensing Module is an obstacle sensing module for the DJI Matrice 4 series. It adds obstacle sensing to support safer enterprise flights.',
    bestFor:
      'For DJI Matrice 4 series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4 series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4 series'], ['Type', 'Obstacle sensing module']]
  },
  'dji-matrice-4-series-charging-hub-200w': {
    overview:
      'The DJI Matrice 4 Series Charging Hub (200W) is a 200 W charging hub for the DJI Matrice 4 series. It speeds up battery turnaround for Matrice 4E and 4T teams.',
    bestFor:
      'For DJI Matrice 4 series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4 series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4 series'], ['Type', 'Battery charging hub']]
  },
  'dji-matrice-4-series-carrying-case-strap': {
    overview:
      'The DJI Matrice 4 Series Carrying Case Strap is a carrying strap for the DJI Matrice 4 series case. It makes the case easier to carry between sites.',
    bestFor:
      'For DJI Matrice 4 series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4 series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4 series'], ['Type', 'Case strap']]
  },
  'dji-matrice-4d-series-battery': {
    overview:
      'The DJI Matrice 4D Series Battery is the intelligent flight battery for the DJI Matrice 4D series. A spare pack keeps dock and field operations running.',
    bestFor:
      'For DJI Matrice 4D series operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Matrice 4D series', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Matrice 4D series'], ['Type', 'Intelligent flight battery']]
  },
  'dji-rc-plus-2-enterprise-enhanced': {
    overview:
      'The DJI RC Plus 2 Enterprise Enhanced is an enhanced enterprise screen controller for compatible DJI enterprise aircraft. Its large bright display is built for demanding field work.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Enterprise screen controller']]
  },
  'dji-rc-plus-2-strap-and-bracket-kit': {
    overview:
      'The DJI RC Plus 2 Strap and Bracket Kit is a strap and bracket kit for the DJI RC Plus 2. It makes long sessions with the controller more comfortable.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Strap and bracket kit']]
  },
  'dji-rc-plus-inspire-3': {
    overview:
      'The DJI RC Plus (Inspire 3) is the RC Plus controller for the DJI Inspire 3. It is the controller matched to the Inspire 3 for cinema production.',
    bestFor:
      'For DJI Inspire 3 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Inspire 3', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Inspire 3'], ['Type', 'Screen controller']]
  },
  'dji-rc-plus-height-adjustable-control-sticks': {
    overview:
      'The DJI RC Plus Height-Adjustable Control Sticks is height-adjustable control sticks for the DJI RC Plus. Adjustable sticks let pilots tune the controller to their grip.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Control sticks']]
  },
  'dji-al1-spotlight': {
    overview:
      'The DJI AL1 Spotlight is a spotlight accessory for compatible DJI enterprise aircraft. It lights up scenes for night search and inspection.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Spotlight']]
  },
  'dji-as1-speaker': {
    overview:
      'The DJI AS1 Speaker is a loudspeaker accessory for compatible DJI enterprise aircraft. It broadcasts messages from the air for public safety use.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Speaker']]
  },
  'd-rtk-3-multifunctional-station': {
    overview:
      'The D-RTK 3 Multifunctional Station is a multifunctional RTK station that provides centimetre-level positioning corrections. It is used for mapping and precision flying with compatible DJI enterprise aircraft.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'RTK station']]
  },
  'd-rtk-3-survey-pole-and-tripod-kit': {
    overview:
      'The D-RTK 3 Survey Pole and Tripod Kit is a survey pole and tripod kit for the D-RTK 3 station. It lets surveyors set up the station accurately on site.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Survey pole and tripod kit']]
  },
  'dji-high-bright-remote-monitor': {
    overview:
      'The DJI High-Bright Remote Monitor is a high-bright remote monitor for professional and enterprise shooting. It gives crews a bright, large display in daylight.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Remote monitor']]
  },
  'dji-inspire-3-foldable-quick-release-propellers-pair': {
    overview:
      'The DJI Inspire 3 Foldable Quick-Release Propellers (Pair) is foldable quick-release propellers for the DJI Inspire 3. Spare props keep a cinema shoot on schedule.',
    bestFor:
      'For DJI Inspire 3 operators and enterprise teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Made for the DJI Inspire 3', 'Request a quote for fleet pricing'],
    specs: [['Compatible aircraft', 'DJI Inspire 3'], ['Type', 'Propellers (pair)']]
  },
  'zenmuse-h30t-infrared-density-filter': {
    overview:
      'The Zenmuse H30T Infrared Density Filter is an infrared density filter for the Zenmuse H30T. It protects and conditions the thermal camera for demanding scenes.',
    bestFor:
      'For DJI enterprise operators and teams.',
    highlights: ['Genuine DJI enterprise accessory', 'Official DJI product', 'Request a quote for fleet pricing'],
    specs: [['Type', 'Infrared filter']]
  },
  'dji-matrice-4t-plus-combo': {
    overview:
      'The DJI Matrice 4T Plus Combo is the Matrice 4T thermal enterprise drone in a Plus bundle with Care coverage and extra batteries. It combines a 640x512 thermal camera with 48 MP wide, medium tele and tele cameras and a laser rangefinder.',
    bestFor:
      'For public safety, inspection and search and rescue teams that want the thermal Matrice 4T with protection included.',
    highlights: ['640x512 thermal camera plus 48 MP cameras', 'Up to 49 min flight time', 'Plus bundle with Care coverage'],
    specs: [['Thermal camera', '640x512, 12 µm, uncooled VOx'], ['Wide camera', '1/1.3-inch CMOS, 48 MP'], ['Max flight time', 'Up to 49 min'], ['Take-off weight', '1,219 g'], ['Bundle', 'Plus combo with Care Enterprise coverage']]
  },
  'dji-matrice-4e-plus-combo': {
    overview:
      'The DJI Matrice 4E Plus Combo is the Matrice 4E mapping and inspection drone in a Plus bundle with Care coverage. A 4/3 CMOS mechanical-shutter wide camera and two telephoto cameras make it ideal for mapping and inspection.',
    bestFor:
      'For surveyors and inspection teams who want the Matrice 4E with protection included.',
    highlights: ['4/3 CMOS wide camera with mechanical shutter', 'Up to 49 min flight time', 'Plus bundle with Care coverage'],
    specs: [['Wide camera', '4/3 CMOS, 20 MP, mechanical shutter'], ['Max flight time', 'Up to 49 min'], ['Take-off weight', '1,219 g'], ['Bundle', 'Plus combo with Care Enterprise coverage']]
  },
  'dji-matrice-4d-worry-free-flagship-combo': {
    overview:
      'The DJI Matrice 4D Worry-Free Flagship Combo is the Matrice 4D, the aircraft designed for DJI Dock 3 autonomous operations, in a Worry-Free Flagship bundle. It is built for automated dock missions in security, inspection and emergency response.',
    bestFor:
      'For organisations planning autonomous drone-in-a-box operations with the Dock 3.',
    highlights: ['Designed for DJI Dock 3 operations', 'Flagship bundle with Care coverage', 'Enterprise-grade multi-sensor payload'],
    specs: [['Use', 'Dock-ready enterprise aircraft'], ['Bundle', 'Worry-Free Flagship combo']]
  },
  'dji-matrice-4td-worry-free-flagship-combo': {
    overview:
      'The DJI Matrice 4TD Worry-Free Flagship Combo is the thermal Matrice 4TD, the dock-ready thermal aircraft, in a Worry-Free Flagship bundle. It adds thermal imaging to automated Dock 3 missions for night security and rescue.',
    bestFor:
      'For emergency services and security teams planning thermal drone-in-a-box operations.',
    highlights: ['Thermal dock-ready aircraft', 'Flagship bundle with Care coverage', 'Designed for DJI Dock 3'],
    specs: [['Use', 'Dock-ready thermal enterprise aircraft'], ['Bundle', 'Worry-Free Flagship combo']]
  },
  'dji-matrice-400-worry-free-plus-combo': {
    overview:
      'The DJI Matrice 400 Worry-Free Plus Combo is DJI\'s heavy-lift Matrice 400 enterprise platform in a Worry-Free Plus bundle with Care coverage. It carries multiple payloads, with dual and third gimbal connectors available, for demanding inspection and survey work.',
    bestFor:
      'For specialist operators and public safety agencies needing a heavy-lift multi-payload aircraft.',
    highlights: ['Heavy-lift multi-payload platform', 'Worry-Free Plus bundle with Care coverage', 'Dual and third gimbal options'],
    specs: [['Class', 'Heavy-lift enterprise aircraft'], ['Bundle', 'Worry-Free Plus combo']]
  },
  'matrice-30t-worry-free-basic-combo': {
    overview:
      'The Matrice 30T Worry-Free Basic Combo is the Matrice 30T thermal enterprise drone bundled with DJI Care Enterprise Basic. It combines a 640x512 radiometric thermal camera with wide, zoom and laser rangefinder payloads in an IP55 aircraft.',
    bestFor:
      'For public safety, power-line and solar inspection teams who want thermal capability with protection included.',
    highlights: ['640x512 radiometric thermal camera', 'IP55 and up to 41 min flight time', 'DJI Care Enterprise Basic included'],
    specs: [['Thermal camera', '640x512, 12 µm, radiometric'], ['Max flight time', 'Up to 41 min'], ['Ingress protection', 'IP55'], ['Bundle', 'Aircraft with DJI Care Enterprise Basic']]
  },
  'matrice-30-worry-free-basic-combo': {
    overview:
      'The Matrice 30 Worry-Free Basic Combo is the Matrice 30 compact enterprise drone bundled with DJI Care Enterprise Basic. It carries a wide camera, a zoom camera and a laser rangefinder in a weather-resistant, foldable airframe.',
    bestFor:
      'For inspection and public safety crews who want a portable IP55 aircraft with protection included.',
    highlights: ['IP55 and up to 41 min flight time', 'Wide, zoom and laser rangefinder', 'DJI Care Enterprise Basic included'],
    specs: [['Cameras', '12 MP wide, 48 MP zoom (5-16x optical)'], ['Max flight time', 'Up to 41 min'], ['Ingress protection', 'IP55'], ['Bundle', 'Aircraft with DJI Care Enterprise Basic']]
  },
  'matrice-30t-worry-free-plus-combo': {
    overview:
      'The Matrice 30T Worry-Free Plus Combo is the Matrice 30T thermal enterprise drone bundled with DJI Care Enterprise Plus. It combines a 640x512 radiometric thermal camera with wide, zoom and laser rangefinder payloads in an IP55 aircraft.',
    bestFor:
      'For public safety, power-line and solar inspection teams who want thermal capability with protection included.',
    highlights: ['640x512 radiometric thermal camera', 'IP55 and up to 41 min flight time', 'DJI Care Enterprise Plus included'],
    specs: [['Thermal camera', '640x512, 12 µm, radiometric'], ['Max flight time', 'Up to 41 min'], ['Ingress protection', 'IP55'], ['Bundle', 'Aircraft with DJI Care Enterprise Plus']]
  },
  'matrice-30-worry-free-plus-combo': {
    overview:
      'The Matrice 30 Worry-Free Plus Combo is the Matrice 30 compact enterprise drone bundled with DJI Care Enterprise Plus. It carries a wide camera, a zoom camera and a laser rangefinder in a weather-resistant, foldable airframe.',
    bestFor:
      'For inspection and public safety crews who want a portable IP55 aircraft with protection included.',
    highlights: ['IP55 and up to 41 min flight time', 'Wide, zoom and laser rangefinder', 'DJI Care Enterprise Plus included'],
    specs: [['Cameras', '12 MP wide, 48 MP zoom (5-16x optical)'], ['Max flight time', 'Up to 41 min'], ['Ingress protection', 'IP55'], ['Bundle', 'Aircraft with DJI Care Enterprise Plus']]
  },
  'dji-mavic-3e-worry-free-basic-combo': {
    overview:
      'The DJI Mavic 3E Worry-Free Basic Combo is the Mavic 3 Enterprise mapping and inspection drone bundled with DJI Care Enterprise Basic. A 4/3 CMOS mechanical-shutter wide camera and a 56x hybrid zoom camera suit mapping and inspection.',
    bestFor:
      'For survey firms and councils who want a compact mapping drone with protection included.',
    highlights: ['Mechanical shutter for mapping', '56x hybrid zoom camera', 'DJI Care Enterprise Basic included'],
    specs: [['Wide camera', '4/3 CMOS, 20 MP, mechanical shutter'], ['Max flight time', 'Up to 45 min'], ['Bundle', 'Aircraft with DJI Care Enterprise Basic']]
  },
  'dji-mavic-3e-worry-free-plus-combo': {
    overview:
      'The DJI Mavic 3E Worry-Free Plus Combo is the Mavic 3 Enterprise in a Plus combo with DJI Care Enterprise Plus. It adds extra protection to a compact mapping aircraft.',
    bestFor:
      'For survey teams that want fuller Care coverage with the Mavic 3 Enterprise.',
    highlights: ['Mechanical shutter for mapping', '56x hybrid zoom camera', 'DJI Care Enterprise Plus coverage'],
    specs: [['Wide camera', '4/3 CMOS, 20 MP, mechanical shutter'], ['Max flight time', 'Up to 45 min'], ['Bundle', 'Plus combo with DJI Care Enterprise Plus']]
  },
  'dji-mavic-3t-worry-free-basic-combo': {
    overview:
      'The DJI Mavic 3T Worry-Free Basic Combo is the Mavic 3 Thermal drone bundled with DJI Care Enterprise Basic. It adds a 640x512 thermal camera to the compact Mavic 3 Enterprise platform.',
    bestFor:
      'For roof, solar, fire and rescue crews who want a portable thermal drone with protection included.',
    highlights: ['640x512 thermal camera', '48 MP wide and 56x hybrid zoom cameras', 'DJI Care Enterprise Basic included'],
    specs: [['Thermal camera', '640x512 uncooled VOx'], ['Max flight time', 'Up to 45 min'], ['Bundle', 'Aircraft with DJI Care Enterprise Basic']]
  },
  'dji-mavic-3t-worry-free-plus-combo': {
    overview:
      'The DJI Mavic 3T Worry-Free Plus Combo is the Mavic 3 Thermal in a Plus combo with DJI Care Enterprise Plus. It combines portable thermal imaging with fuller Care coverage.',
    bestFor:
      'For thermal inspection teams that want extra protection.',
    highlights: ['640x512 thermal camera', 'DJI Care Enterprise Plus coverage', 'Compact, portable aircraft'],
    specs: [['Thermal camera', '640x512 uncooled VOx'], ['Max flight time', 'Up to 45 min'], ['Bundle', 'Plus combo with DJI Care Enterprise Plus']]
  },
  'zenmuse-h30-worry-free-basic-combo': {
    overview:
      'The Zenmuse H30 Worry-Free Basic Combo is the Zenmuse H30 multi-sensor payload bundled with DJI Care Enterprise Basic. It combines a 48 MP wide camera, a 34x optical zoom camera and a laser rangefinder.',
    bestFor:
      'For Matrice 350 RTK and 300 RTK operators who want protection with the payload.',
    highlights: ['48 MP wide and 40 MP zoom (34x optical)', 'Laser rangefinder to 3,000 m', 'DJI Care Enterprise Basic included'],
    specs: [['Wide camera', '1/1.3-inch CMOS, 48 MP'], ['Zoom camera', '40 MP, 34x optical'], ['Laser rangefinder', '3-3,000 m'], ['Bundle', 'Payload with DJI Care Enterprise Basic']]
  },
  'zenmuse-l2-worry-free-basic-combo': {
    overview:
      'The Zenmuse L2 Worry-Free Basic Combo is the Zenmuse L2 LiDAR payload bundled with DJI Care Enterprise Basic. It integrates a frame-based LiDAR, a 4/3 CMOS RGB camera and a high-accuracy IMU for colourised point clouds.',
    bestFor:
      'For survey, forestry and construction teams who want drone LiDAR with protection included.',
    highlights: ['Frame-based LiDAR with up to 5 returns', '20 MP RGB camera for colourised point clouds', 'DJI Care Enterprise Basic included'],
    specs: [['Point rate', 'Up to 240,000 points/s (single return)'], ['Detection range', 'Up to 450 m at 50% reflectivity'], ['RGB camera', '4/3 CMOS, 20 MP'], ['Bundle', 'Payload with DJI Care Enterprise Basic']]
  },
  'zenmuse-h30-worry-free-plus-combo': {
    overview:
      'The Zenmuse H30 Worry-Free Plus Combo is the Zenmuse H30 multi-sensor payload bundled with DJI Care Enterprise Plus. It combines a 48 MP wide camera, a 34x optical zoom camera and a laser rangefinder.',
    bestFor:
      'For Matrice 350 RTK and 300 RTK operators who want protection with the payload.',
    highlights: ['48 MP wide and 40 MP zoom (34x optical)', 'Laser rangefinder to 3,000 m', 'DJI Care Enterprise Plus included'],
    specs: [['Wide camera', '1/1.3-inch CMOS, 48 MP'], ['Zoom camera', '40 MP, 34x optical'], ['Laser rangefinder', '3-3,000 m'], ['Bundle', 'Payload with DJI Care Enterprise Plus']]
  },
  'zenmuse-l2-worry-free-plus-combo': {
    overview:
      'The Zenmuse L2 Worry-Free Plus Combo is the Zenmuse L2 LiDAR payload bundled with DJI Care Enterprise Plus. It integrates a frame-based LiDAR, a 4/3 CMOS RGB camera and a high-accuracy IMU for colourised point clouds.',
    bestFor:
      'For survey, forestry and construction teams who want drone LiDAR with protection included.',
    highlights: ['Frame-based LiDAR with up to 5 returns', '20 MP RGB camera for colourised point clouds', 'DJI Care Enterprise Plus included'],
    specs: [['Point rate', 'Up to 240,000 points/s (single return)'], ['Detection range', 'Up to 450 m at 50% reflectivity'], ['RGB camera', '4/3 CMOS, 20 MP'], ['Bundle', 'Payload with DJI Care Enterprise Plus']]
  },
  'zenmuse-l3-worry-free-plus-combo': {
    overview:
      'The Zenmuse L3 Worry-Free Plus Combo is the Zenmuse L3 LiDAR payload in a Worry-Free Plus bundle with Care coverage. It is DJI\'s newer LiDAR payload for high-accuracy surveying and mapping.',
    bestFor:
      'For survey and mapping firms upgrading their drone LiDAR capability.',
    highlights: ['Newer-generation DJI LiDAR payload', 'Worry-Free Plus bundle with Care coverage', 'For high-accuracy mapping'],
    specs: [['Type', 'LiDAR payload'], ['Bundle', 'Worry-Free Plus combo']]
  },
  'zenmuse-p1-and-dji-care-plus': {
    overview:
      'The Zenmuse P1 and DJI Care Plus is the Zenmuse P1 full-frame photogrammetry camera bundled with DJI Care Plus. A 45 MP full-frame sensor with a global mechanical shutter delivers survey-grade imagery.',
    bestFor:
      'For surveyors and mapping companies who want the P1 with protection included.',
    highlights: ['45 MP full-frame sensor', 'Global mechanical shutter', 'DJI Care Plus included'],
    specs: [['Sensor', 'Full-frame, 45 MP'], ['Lens options', '24, 35 or 50 mm (f/2.8)'], ['Bundle', 'Payload with DJI Care Plus']]
  },
  'zenmuse-h20-and-dji-care-plus': {
    overview:
      'The Zenmuse H20 and DJI Care Plus is the Zenmuse H20 multi-sensor payload bundled with DJI Care Plus. It combines a zoom camera, a wide camera and a laser rangefinder for inspection and public safety.',
    bestFor:
      'For Matrice 300 RTK and compatible-aircraft operators who want the H20 with protection included.',
    highlights: ['Zoom and wide cameras', 'Laser rangefinder', 'DJI Care Plus included'],
    specs: [['Type', 'Multi-sensor payload'], ['Bundle', 'Payload with DJI Care Plus']]
  },
  'zenmuse-s1': {
    overview:
      'The Zenmuse S1 is DJI\'s first spotlight for multi-payload drone platforms, using LEP technology for high brightness and long illumination distance. It supports multiple lighting modes for public safety, emergency rescue and night inspection.',
    bestFor:
      'For public safety, rescue and inspection teams flying at night.',
    highlights: ['First DJI spotlight for multi-payload platforms', 'High brightness and long illumination distance', 'Multiple lighting modes'],
    specs: [['Type', 'Spotlight payload'], ['Technology', 'LEP']]
  },
  'zenmuse-v1': {
    overview:
      'The Zenmuse V1 is DJI\'s first loudspeaker for multi-payload drone platforms, with high volume and long broadcast distance. It supports multiple broadcast modes for public safety and emergency rescue.',
    bestFor:
      'For emergency services that need to broadcast from the air.',
    highlights: ['First DJI loudspeaker for multi-payload platforms', 'High volume and long broadcast distance', 'Multiple broadcast modes'],
    specs: [['Type', 'Loudspeaker payload']]
  },
  'manifold-3': {
    overview:
      'The Manifold 3 is a high-performance onboard computing power box for DJI enterprise aircraft. It runs custom applications on the aircraft and must be used with the matching accessory kit.',
    bestFor:
      'For developers and enterprise teams building custom onboard computing workflows.',
    highlights: ['Compact onboard computer', 'Open computing platform', 'Needs the matching accessory kit'],
    specs: [['Type', 'Onboard computing power box'], ['Note', 'Requires the matching accessory kit; cannot operate on its own']]
  },
  'dji-air-3s-dji-rc-n3': {
    overview:
      'The DJI Air 3S (DJI RC-N3) is a dual-camera travel drone with a 1-inch wide camera and a 3x medium tele camera, supplied with the DJI RC-N3 controller. The 1-inch sensor and forward LiDAR help it capture clean footage in low light, and it flies for up to 45 minutes.',
    bestFor:
      'Ideal for travel, landscape and property creators who want a step up from a Mini without moving to a pro-level aircraft.',
    highlights: ['1-inch 50 MP wide camera plus 70 mm medium tele', 'Up to 45 min flight time', 'Omnidirectional sensing with forward LiDAR'],
    specs: [['Wide camera', '1-inch CMOS, 50 MP'], ['Medium tele camera', '1/1.3-inch CMOS, 48 MP, 70 mm eq.'], ['Video', '4K up to 120 fps'], ['Max flight time', 'Up to 45 min'], ['Take-off weight', 'About 724 g'], ['Controller', 'DJI RC-N3 (uses your smartphone)']]
  },
  'dji-air-3s-fly-more-combo-dji-rc-n3': {
    overview:
      'The DJI Air 3S Fly More Combo (DJI RC-N3) is the Air 3S with extra batteries, a charging hub and a shoulder bag, supplied with the DJI RC-N3 controller. The extra batteries turn the 45-minute Air 3S into an all-day travel and shoot kit.',
    bestFor:
      'Best for creators who fly for hours and want spare power without paying for the RC 2 screen.',
    highlights: ['Fly More kit with extra batteries and charging hub', '1-inch 50 MP wide camera plus medium tele', 'DJI RC-N3 controller'],
    specs: [['Wide camera', '1-inch CMOS, 50 MP'], ['Video', '4K up to 120 fps'], ['Max flight time per battery', 'Up to 45 min'], ['Controller', 'DJI RC-N3']],
    inTheBox: ['Air 3S aircraft', 'DJI RC-N3 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub', 'Shoulder bag']
  },
  'dji-air-3s-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Air 3S Fly More Combo (DJI RC 2) is the Air 3S Fly More kit with the DJI RC 2 screen controller. It is the complete Air 3S package: dual cameras, extra batteries and a built-in-screen controller.',
    bestFor:
      'Perfect for pilots who want no phone, a bright screen and the longest day of flying.',
    highlights: ['DJI RC 2 controller with built-in screen', 'Extra batteries, hub and shoulder bag', '1-inch 50 MP wide camera plus medium tele'],
    specs: [['Wide camera', '1-inch CMOS, 50 MP'], ['Video', '4K up to 120 fps'], ['Max flight time per battery', 'Up to 45 min'], ['Controller', 'DJI RC 2 with built-in screen']],
    inTheBox: ['Air 3S aircraft', 'DJI RC 2 controller', 'Fly More kit: extra Intelligent Flight Batteries', 'Charging hub', 'Shoulder bag']
  },
  'dji-flip-dji-rc-n3': {
    overview:
      'The DJI Flip (DJI RC-N3) is a foldable vlog drone with built-in propeller guards, a 1/1.3-inch camera and 4K/60 video, supplied with the DJI RC-N3. It is about 249 g and flies for up to 31 minutes, with guards that make it friendlier around people and objects.',
    bestFor:
      'A great first camera drone for vloggers, families and travellers who want an easy, safer-feeling aircraft.',
    highlights: ['About 249 g with built-in propeller guards', '1/1.3-inch camera, 4K up to 60 fps', 'Up to 31 min flight time'],
    specs: [['Camera sensor', '1/1.3-inch CMOS, 48 MP'], ['Video', '4K up to 60 fps'], ['Max flight time', 'Up to 31 min'], ['Take-off weight', 'About 249 g'], ['Controller', 'DJI RC-N3']]
  },
  'dji-flip-dji-rc-2': {
    overview:
      'The DJI Flip (DJI RC 2) is the DJI Flip with the DJI RC 2 screen controller included. The RC 2\'s built-in 5.5-inch screen means no phone and a faster set-up in the field.',
    bestFor:
      'Best for creators who fly often outdoors and want a bright screen from day one.',
    highlights: ['DJI RC 2 controller with built-in screen', 'Built-in propeller guards', '4K up to 60 fps'],
    specs: [['Camera sensor', '1/1.3-inch CMOS, 48 MP'], ['Video', '4K up to 60 fps'], ['Max flight time', 'Up to 31 min'], ['Controller', 'DJI RC 2 with built-in screen']]
  },
  'dji-flip-fly-more-combo-dji-rc-2': {
    overview:
      'The DJI Flip Fly More Combo (DJI RC 2) is the DJI Flip kit with the DJI RC 2, two additional batteries, a charging hub and a shoulder bag. It is the most complete way to buy the Flip for travel and content days.',
    bestFor:
      'Ideal for vloggers and families who want several flights per outing and a bag to carry it all.',
    highlights: ['Two extra batteries and a charging hub', 'DJI RC 2 screen controller', 'Shoulder bag included'],
    specs: [['Camera sensor', '1/1.3-inch CMOS, 48 MP'], ['Video', '4K up to 60 fps'], ['Max flight time per battery', 'Up to 31 min'], ['Controller', 'DJI RC 2 with built-in screen']],
    inTheBox: ['Flip aircraft', 'DJI RC 2 controller', 'Two additional Intelligent Flight Batteries', 'Battery charging hub', 'Shoulder bag']
  },
  'dji-neo-drone-only': {
    overview:
      'The DJI Neo (Drone Only) is a tiny, palm-sized 4K camera drone designed to follow you hands-free, sold as the drone only. At about 135 g it is one of the easiest drones to carry and fly.',
    bestFor:
      'A fun starter drone for beginners, cyclists and runners who want effortless follow-me shots. Use the Fly More kits for longer sessions.',
    highlights: ['About 135 g and palm-sized', '4K video', 'Follow-me and selfie modes'],
    specs: [['Take-off weight', 'About 135 g'], ['Video', '4K'], ['Kit', 'Drone only, controller not included']]
  },
  'dji-mini-4k-fly-more-combo': {
    overview:
      'The DJI Mini 4K Fly More Combo is an entry-level sub-250 g 4K drone sold as a Fly More Combo with extra batteries and a controller. It is a simple, lightweight way into 4K aerial video at a very friendly price.',
    bestFor:
      'The best-value starter drone for beginners and travellers who want 4K without the cost of a Mini 4 Pro.',
    highlights: ['Sub-250 g 4K camera drone', 'Fly More Combo with extra batteries', '3-axis gimbal for stable footage'],
    specs: [['Video', '4K'], ['Take-off weight', 'Under 250 g'], ['Kit', 'Fly More Combo (extra batteries included)']]
  },
  'dji-mini-4-pro-intelligent-flight-battery': {
    overview:
      'The DJI Mini 4 Pro Intelligent Flight Battery is the intelligent flight battery for the DJI Mini 4 Pro. It gives the Mini 4 Pro up to 34 minutes of flight on the standard pack.',
    bestFor:
      'Buy a spare for the DJI Mini 4 Pro so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Mini 4 Pro', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Mini 4 Pro'], ['Type', 'Intelligent flight battery'], ['Flight time on aircraft', 'Up to 34 min']]
  },
  'dji-mini-4-pro-mini-3-series-intelligent-flight-battery-plus': {
    overview:
      'The DJI Mini 4 Pro/Mini 3 Series Intelligent Flight Battery Plus is the intelligent flight battery for the DJI Mini 4 Pro and Mini 3 series. The higher-capacity Plus battery extends flight time, though the aircraft is then heavier than 250 g.',
    bestFor:
      'Buy a spare for the DJI Mini 4 Pro and Mini 3 series so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Mini 4 Pro and Mini 3 series', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Mini 4 Pro and Mini 3 series'], ['Type', 'Intelligent flight battery'], ['CASA note', 'With the Plus battery the aircraft exceeds 250 g']]
  },
  'dji-mini-3-series-intelligent-flight-battery': {
    overview:
      'The DJI Mini 3 Series Intelligent Flight Battery is the intelligent flight battery for the DJI Mini 3 series. It is the standard pack that keeps the Mini 3 series under 250 g.',
    bestFor:
      'Buy a spare for the DJI Mini 3 series so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Mini 3 series', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Mini 3 series'], ['Type', 'Intelligent flight battery']]
  },
  'dji-avata-2-intelligent-flight-battery': {
    overview:
      'The DJI Avata 2 Intelligent Flight Battery is the intelligent flight battery for the DJI Avata 2. It powers the Avata 2 for up to 23 minutes of FPV flight.',
    bestFor:
      'Buy a spare for the DJI Avata 2 so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Avata 2', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Avata 2'], ['Type', 'Intelligent flight battery'], ['Flight time on aircraft', 'Up to 23 min']]
  },
  'dji-flip-intelligent-flight-battery': {
    overview:
      'The DJI Flip Intelligent Flight Battery is the intelligent flight battery for the DJI Flip. It supports flights of up to 31 minutes on the Flip.',
    bestFor:
      'Buy a spare for the DJI Flip so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Flip', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Flip'], ['Type', 'Intelligent flight battery'], ['Flight time on aircraft', 'Up to 31 min']]
  },
  'dji-neo-intelligent-flight-battery': {
    overview:
      'The DJI Neo Intelligent Flight Battery is the intelligent flight battery for the DJI Neo. A spare Neo battery is the simplest way to extend a short, fun flying session.',
    bestFor:
      'Buy a spare for the DJI Neo so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Neo', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Neo'], ['Type', 'Intelligent flight battery']]
  },
  'dji-air-3s-intelligent-flight-battery': {
    overview:
      'The DJI Air 3S Intelligent Flight Battery is the intelligent flight battery for the DJI Air 3S. It supports flights of up to 45 minutes on the Air 3S.',
    bestFor:
      'Buy a spare for the DJI Air 3S so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Air 3S', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Air 3S'], ['Type', 'Intelligent flight battery'], ['Flight time on aircraft', 'Up to 45 min']]
  },
  'dji-mavic-3-series-intelligent-flight-battery': {
    overview:
      'The DJI Mavic 3 Series Intelligent Flight Battery is the intelligent flight battery for the DJI Mavic 3 series. It is the 5,000 mAh pack for the Mavic 3 family.',
    bestFor:
      'Buy a spare for the DJI Mavic 3 series so a single outing is never limited to one flight.',
    highlights: ['Genuine DJI intelligent flight battery', 'Made for the DJI Mavic 3 series', 'Easy to swap in the field'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 series'], ['Type', 'Intelligent flight battery'], ['Capacity', '5,000 mAh, 77 Wh']]
  },
  'dji-mini-4-pro-mini-3-series-two-way-charging-hub': {
    overview:
      'The DJI Mini 4 Pro/Mini 3 Series Two-Way Charging Hub is a battery charging hub for the DJI Mini 4 Pro and Mini 3 series. A two-way hub charges multiple batteries and keeps spares ready.',
    bestFor:
      'Ideal for DJI Mini 4 Pro and Mini 3 series pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Mini 4 Pro and Mini 3 series', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Mini 4 Pro and Mini 3 series'], ['Type', 'Battery charging hub']]
  },
  'dji-air-3-series-battery-charging-hub': {
    overview:
      'The DJI Air 3 Series Battery Charging Hub is a battery charging hub for the DJI Air 3 and Air 3S. It charges the Air 3 series batteries in a row so a full day of flying is covered.',
    bestFor:
      'Ideal for DJI Air 3 and Air 3S pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Air 3 and Air 3S', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Air 3 and Air 3S'], ['Type', 'Battery charging hub']]
  },
  'dji-avata-2-two-way-charging-hub': {
    overview:
      'The DJI Avata 2 Two-Way Charging Hub is a battery charging hub for the DJI Avata 2. A two-way hub charges multiple Avata 2 batteries from one input.',
    bestFor:
      'Ideal for DJI Avata 2 pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Avata 2', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Avata 2'], ['Type', 'Battery charging hub']]
  },
  'dji-flip-parallel-charging-hub': {
    overview:
      'The DJI Flip Parallel Charging Hub is a battery charging hub for the DJI Flip. A parallel hub charges Flip batteries in sequence so spares are ready.',
    bestFor:
      'Ideal for DJI Flip pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Flip', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Flip'], ['Type', 'Battery charging hub']]
  },
  'dji-neo-two-way-charging-hub': {
    overview:
      'The DJI Neo Two-Way Charging Hub is a battery charging hub for the DJI Neo. A two-way hub charges multiple Neo batteries.',
    bestFor:
      'Ideal for DJI Neo pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Neo', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Neo'], ['Type', 'Battery charging hub']]
  },
  'dji-mavic-3-series-100w-battery-charging-hub': {
    overview:
      'The DJI Mavic 3 Series 100W Battery Charging Hub is a battery charging hub for the DJI Mavic 3 series. A 100 W hub charges Mavic 3 series batteries quickly in sequence.',
    bestFor:
      'Ideal for DJI Mavic 3 series pilots who own several batteries and want to recharge them in one place.',
    highlights: ['Charges multiple batteries', 'Made for the DJI Mavic 3 series', 'Genuine DJI charging accessory'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 series'], ['Type', 'Battery charging hub']]
  },
  'dji-air-3-series-low-noise-propellers': {
    overview:
      'The DJI Air 3 Series Low-Noise Propellers is a propeller set for the DJI Air 3 and Air 3S. Low-noise props cut the sound of the aircraft in flight.',
    bestFor:
      'Useful for DJI Air 3 and Air 3S owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Air 3 and Air 3S', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Air 3 and Air 3S'], ['Type', 'Propellers']]
  },
  'dji-air-3-series-propeller-guard': {
    overview:
      'The DJI Air 3 Series Propeller Guard is a propeller guard for the DJI Air 3 and Air 3S. Guards protect the props and add confidence when flying close to objects.',
    bestFor:
      'Useful for DJI Air 3 and Air 3S owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Air 3 and Air 3S', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Air 3 and Air 3S'], ['Type', 'Propeller guard']]
  },
  'dji-mini-3-lito-series-propellers': {
    overview:
      'The DJI Mini 3/Lito Series Propellers is a propeller set for the DJI Mini 3 series and Lito series. A spare set keeps a Mini or Lito flying after a prop strike.',
    bestFor:
      'Useful for DJI Mini 3 series and Lito series owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Mini 3 series and Lito series', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 3 series and Lito series'], ['Type', 'Propellers']]
  },
  'dji-mini-4-pro-360-propeller-guard': {
    overview:
      'The DJI Mini 4 Pro 360° Propeller Guard is a propeller guard for the DJI Mini 4 Pro. The 360° guard protects the propellers in tight spaces.',
    bestFor:
      'Useful for DJI Mini 4 Pro owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Mini 4 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 4 Pro'], ['Type', 'Propeller guard']]
  },
  'dji-avata-2-propellers': {
    overview:
      'The DJI Avata 2 Propellers is a propeller set for the DJI Avata 2. Spare props let you recover quickly after a crash or a close pass.',
    bestFor:
      'Useful for DJI Avata 2 owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Avata 2', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Avata 2'], ['Type', 'Propellers']]
  },
  'dji-flip-propellers': {
    overview:
      'The DJI Flip Propellers is a propeller set for the DJI Flip. A spare propeller pair keeps a Flip in the air after a knock.',
    bestFor:
      'Useful for DJI Flip owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Flip', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Flip'], ['Type', 'Propellers']]
  },
  'dji-neo-propellers': {
    overview:
      'The DJI Neo Propellers is a propeller set for the DJI Neo. A spare Neo prop set is a very low-cost way to be ready for a crash.',
    bestFor:
      'Useful for DJI Neo owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Neo', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Neo'], ['Type', 'Propellers']]
  },
  'dji-inspire-3-propeller-guard': {
    overview:
      'The DJI Inspire 3 Propeller Guard is a propeller guard for the DJI Inspire 3. A guard lets an Inspire 3 crew fly closer to objects and people on set.',
    bestFor:
      'Useful for DJI Inspire 3 owners who want a spare set ready after a knock or a long season of flying.',
    highlights: ['Genuine DJI part', 'Made for the DJI Inspire 3', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Inspire 3'], ['Type', 'Propeller guard']]
  },
  'dji-rc-2-remote-controller': {
    overview:
      'The DJI RC 2 Remote Controller is the screen controller with a 5.5-inch 1080p display for compatible DJI drones. The built-in bright screen removes the need for a phone.',
    bestFor:
      'A good upgrade for pilots who fly in sunlight and want a controller with its own display.',
    highlights: ['5.5-inch 1080p built-in screen', 'No phone needed', 'Works with compatible DJI aircraft'],
    specs: [['Display', '5.5-inch 1080p, 700 nits'], ['Type', 'Screen remote controller']]
  },
  'dji-rc-n3-remote-controller': {
    overview:
      'The DJI RC-N3 Remote Controller is a compact controller that uses your smartphone as the screen. It is a light, affordable way to fly compatible DJI drones.',
    bestFor:
      'Suits beginners and travellers who already have a phone and want to keep costs down.',
    highlights: ['Uses your smartphone as the screen', 'Compact and light', 'Works with compatible DJI aircraft'],
    specs: [['Type', 'Phone-based remote controller']]
  },
  'dji-rc-motion-3': {
    overview:
      'The DJI RC Motion 3 is a motion controller that steers compatible DJI drones with hand and wrist movements. Its simple one-handed control makes immersive FPV flying approachable.',
    bestFor:
      'A natural fit for Avata 2 and other motion-controlled flying, alongside a pair of goggles.',
    highlights: ['One-handed motion control', 'Works with compatible FPV drones', 'Genuine DJI controller'],
    specs: [['Type', 'Motion controller']]
  },
  'dji-rc-remote-controller': {
    overview:
      'The DJI RC Remote Controller is the original DJI RC screen controller for compatible aircraft. A built-in display and long-range support make it a solid controller for the Mavic 3 family.',
    bestFor:
      'Best for owners of compatible DJI aircraft who want a screen controller without a phone.',
    highlights: ['Built-in screen', 'Compatible with supported DJI aircraft', 'Genuine DJI controller'],
    specs: [['Type', 'Screen remote controller']]
  },
  'dji-rc-pro-remote-controller': {
    overview:
      'The DJI RC Pro Remote Controller is a high-bright professional screen controller for compatible DJI aircraft. It stays readable in strong sun and is designed for demanding shoots.',
    bestFor:
      'For professional and enterprise pilots who need a bright, rugged controller.',
    highlights: ['High-bright screen', 'Professional-grade controller', 'Genuine DJI accessory'],
    specs: [['Type', 'High-bright screen controller']]
  },
  'dji-fpv-remote-controller-3': {
    overview:
      'The DJI FPV Remote Controller 3 is a joystick-style FPV controller for DJI FPV flying. Familiar stick control makes manual FPV flying precise.',
    bestFor:
      'Best for FPV pilots who want stick control rather than a motion controller.',
    highlights: ['Stick-based FPV control', 'Genuine DJI controller', 'Made for DJI FPV systems'],
    specs: [['Type', 'FPV remote controller']]
  },
  'dji-goggles-n3': {
    overview:
      'The DJI Goggles N3 is an entry-level FPV goggles headset for compatible DJI drones. It brings the immersive first-person view to Avata 2 and similar aircraft at a lower price.',
    bestFor:
      'A good pick for FPV beginners who want goggles without the cost of the flagship Goggles 3.',
    highlights: ['Immersive FPV view', 'Works with compatible DJI drones', 'Genuine DJI goggles'],
    specs: [['Type', 'FPV goggles']]
  },
  'dji-o4-air-unit': {
    overview:
      'The DJI O4 Air Unit is a compact digital video transmission unit for custom FPV builds. It gives builders a DJI digital FPV video link for their own airframes.',
    bestFor:
      'For FPV builders and hobbyists putting together a custom drone.',
    highlights: ['Compact digital video link', 'For custom builds', 'Genuine DJI module'],
    specs: [['Type', 'Digital video transmission unit']]
  },
  'dji-o4-air-unit-pro': {
    overview:
      'The DJI O4 Air Unit Pro is a premium digital video transmission and camera unit for custom FPV builds. The Pro unit adds a higher-grade camera for pilots who want the best DJI digital FPV image on a custom build.',
    bestFor:
      'Best for experienced FPV builders and racers.',
    highlights: ['Pro-grade camera and transmission', 'For custom FPV builds', 'Genuine DJI module'],
    specs: [['Type', 'Digital video transmission and camera unit']]
  },
  'dji-air-3s-nd-filter-set-nd8-32-128': {
    overview:
      'The DJI Air 3S ND Filter Set (ND8/32/128) is a three-filter ND set for the Air 3S. ND filters let you keep a cinematic shutter speed in bright light.',
    bestFor:
      'A smart add-on for DJI Air 3S owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Air 3S', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Air 3S'], ['Type', 'ND filter set']]
  },
  'dji-mavic-3-pro-nd-filter-set-nd8-16-32-64': {
    overview:
      'The DJI Mavic 3 Pro ND Filter Set (ND8/16/32/64) is a four-filter ND set for the Mavic 3 Pro. The set covers bright-day shooting for the Mavic 3 Pro\'s cameras.',
    bestFor:
      'A smart add-on for DJI Mavic 3 Pro owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Pro'], ['Type', 'ND filter set']]
  },
  'dji-air-3s-wide-angle-lens': {
    overview:
      'The DJI Air 3S Wide-Angle Lens is a clip-on wide-angle lens for the Air 3S. It widens the field of view for expansive landscape and interior shots.',
    bestFor:
      'A smart add-on for DJI Air 3S owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Air 3S', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Air 3S'], ['Type', 'Wide-angle lens']]
  },
  'dji-mini-4-pro-wide-angle-lens': {
    overview:
      'The DJI Mini 4 Pro Wide-Angle Lens is a clip-on wide-angle lens for the Mini 4 Pro. It adds a wider view for real estate and travel shots.',
    bestFor:
      'A smart add-on for DJI Mini 4 Pro owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mini 4 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mini 4 Pro'], ['Type', 'Wide-angle lens']]
  },
  'dji-mavic-3-pro-wide-angle-lens': {
    overview:
      'The DJI Mavic 3 Pro Wide-Angle Lens is a clip-on wide-angle lens for the Mavic 3 Pro. It widens the main camera\'s field of view for sweeping scenes.',
    bestFor:
      'A smart add-on for DJI Mavic 3 Pro owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Pro'], ['Type', 'Wide-angle lens']]
  },
  'dji-mavic-3-pro-storage-cover': {
    overview:
      'The DJI Mavic 3 Pro Storage Cover is a protective storage cover for the Mavic 3 Pro gimbal camera. It keeps the camera protected when the aircraft is stored or carried.',
    bestFor:
      'A smart add-on for DJI Mavic 3 Pro owners who want more control over their footage.',
    highlights: ['Genuine DJI accessory', 'Made for the DJI Mavic 3 Pro', 'Quick to fit'],
    specs: [['Compatible aircraft', 'DJI Mavic 3 Pro'], ['Type', 'Storage cover']]
  },
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
