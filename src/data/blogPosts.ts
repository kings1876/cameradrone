import { BlogPost } from '../types';

// Buying guides. Figures come from the manufacturer specifications on each product page; prices are left to the
// product pages so these guides do not go stale. Inline links use [text](/path).
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-10',
    slug: 'thermal-camera-vs-thermal-drone-infrared-inspections',
    intent: 'informational',
    title: 'Thermal Camera vs Thermal Drone: Choosing an Infrared Camera for Inspections',
    metaTitle: 'Thermal Camera vs Thermal Drone: Which to Buy?',
    metaDescription: 'Thermal camera or thermal drone? Compare infrared cameras, payloads and DJI thermal aircraft for inspections in Australia, with specs and buying advice.',
    subtitle: 'When a thermal imaging camera on a drone beats a handheld, and which infrared cameras and aircraft we supply.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '8 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Thermal Camera', 'Infrared Cameras', 'Inspections'],
    excerpt: 'A thermal camera on the ground and a thermal drone solve different problems. Here is how to choose an infrared camera for roofs, solar farms, power lines and search work.',
    image: '/images/blog-thermal-camera-vs-drone.webp',
    imageAlt: 'Zenmuse H30T thermal payload, FLIR Vue TZ20 and DJI Matrice 4 Thermal',
    relatedProducts: ['dji-zenmuse-h30t', 'flir-vue-tz20', 'dji-matrice-4-thermal', 'dji-mavic-3-thermal'],
    content: [
      'If you need to see heat, you have two broad choices: a thermal camera you carry, or a thermal imaging camera flown on a drone. Both are infrared cameras that turn temperature differences into an image, but they suit different jobs. This guide compares them, explains the specifications that matter and shows the thermal camera options we supply in Australia.',
      { h2: 'What a thermal camera actually measures' },
      'An infrared thermal camera does not see in the dark the way a night-vision camera does. It detects infrared radiation given off by objects and turns the differences into an image, so a hot connection, a failing solar cell or a person in a paddock stands out against a cooler background. A radiometric thermal camera goes further and records a temperature value for each pixel, which is what you need for inspection reports.',
      { h2: 'Ground camera or drone: how to decide' },
      { table: {
        head: ['Factor', 'Ground thermal camera', 'Thermal drone'],
        rows: [
          ['Coverage', 'One spot at a time', 'Whole roofs, solar farms, lines and paddocks in one flight'],
          ['Access', 'Needs safe ground or ladder access', 'Reaches roofs, towers and rough terrain without climbing'],
          ['Detail', 'Close, high-detail views', 'Depends on altitude, lens and sensor resolution'],
          ['Cost', 'Lower for a single camera', 'Higher, but one aircraft covers many jobs'],
          ['Typical use', 'Switchboards, plant rooms, building checks', 'Roof, solar, power line, search and rescue and agricultural work']
        ]
      } },
      'Many teams end up with both: a ground camera for close checks and a drone for coverage. If your work is mostly large or hard-to-reach assets, start with the drone.',
      'Fixed-site checks, such as switchboards and plant, are often done with an industrial thermal imaging camera on a tripod or in hand. A drone takes the same kind of measurement to places a person cannot easily reach.',
      { h2: 'Thermal imaging camera specifications that matter' },
      { ul: [
        '**Thermal resolution.** More pixels mean more detail at distance. Most enterprise drones use 640×512; the top payloads reach 1280×1024.',
        '**Sensitivity (NETD).** A lower figure, such as 50 mK or less, reveals smaller temperature differences.',
        '**Field of view.** A wide lens covers more ground; a narrow lens reaches further.',
        '**Radiometric measurement.** Needed if you report absolute temperatures.',
        '**Visual cameras.** A good wide and zoom camera alongside the thermal sensor tells you what you are looking at.',
        '**Weather rating.** An ingress protection (IP) rating shows how well the camera handles dust and water.'
      ] },
      { h2: 'Thermal camera options we supply' },
      { table: {
        head: ['Option', 'Thermal sensor', 'Notes'],
        rows: [
          ['[Zenmuse H30T](/product/dji-zenmuse-h30t)', '1280×1024 uncooled VOx, 30 fps, -20 to 1,600°C', '48 MP wide, 40 MP zoom (34× optical), laser rangefinder 3 to 3,000 m, 920 g'],
          ['[FLIR Vue TZ20](/product/flir-vue-tz20)', 'Dual FLIR Boson 640×512, 12 µm LWIR', '95° wide and 18° narrow fields of view, about 640 g, IP44'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640×512, 12 µm, uncooled VOx, 50 mK or less', 'Complete aircraft, up to 49 min flight, 1,219 g'],
          ['[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '640×512 uncooled VOx', 'Portable aircraft, up to 45 min flight, 920 g'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640×512, 12 µm, radiometric', 'Rugged, IP55, up to 41 min flight']
        ]
      } },
      { h2: 'Payload or complete aircraft?' },
      'If you already fly a compatible enterprise aircraft, a thermal payload such as the [Zenmuse H30T](/product/dji-zenmuse-h30t) or the [FLIR Vue TZ20](/product/flir-vue-tz20) adds an infrared camera for far less than a new drone. If you are starting from scratch, a complete thermal aircraft is simpler: the [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal) and [Mavic 3 Thermal](/product/dji-mavic-3-thermal) arrive with the camera, software and batteries ready to fly. Browse every [thermal camera](/category/cameras-sensors/thermal-cameras) and [Zenmuse camera](/category/cameras-sensors/dji-zenmuse-cameras).',
      { h2: 'Common inspection jobs' },
      { ul: [
        '**Roof and building checks:** find moisture, missing insulation and heat loss from the air.',
        '**Solar farms:** locate hot cells, failed strings and connection faults quickly.',
        '**Power lines and substations:** spot hot joints and failing components without shutting down.',
        '**Search and rescue:** a person or animal stands out in low light.',
        '**Agriculture and wildlife:** survey livestock and irrigation from above.'
      ] },
      'For a deeper look at the aircraft, read our [thermal drones guide](/blog/thermal-drones-australia-guide) and the [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide). A drone with a heat camera and a laser rangefinder can also measure the distance to the fault you have found.',
      { h2: 'Getting started in Australia' },
      'Commercial flying has CASA requirements, including accreditation or a ReOC depending on the aircraft weight and the work, so confirm yours before you fly for hire. Send a [quote request](/quote) with your inspection type and any aircraft you already own, and we will recommend the right thermal camera Australia-wide delivery included. Questions first? [Contact us](/contact).',
      { faq: [
        { q: 'Is a thermal camera the same as an infrared camera?', a: 'In practice, yes. A thermal imaging camera is an infrared camera that detects heat radiation and shows it as an image. Radiometric versions also report temperatures.' },
        { q: 'Can a thermal drone replace a handheld thermal camera?', a: 'For large or hard-to-reach assets, yes, because one flight covers far more ground. For close checks inside plant rooms, a handheld still has a place.' },
        { q: 'What thermal resolution do I need for inspections?', a: 'A 640×512 sensor suits most roof, solar and line inspections. Choose 1280×1024 if you need more detail at greater distance.' }
      ] }
    ],
    targetKeywords: ['thermal camera', 'infrared cameras', 'infrared thermal camera', 'thermal camera australia', 'industrial thermal imaging camera']
  },
  {
    id: 'post-11',
    slug: 'dji-neo-2-fly-more-combo-guide',
    intent: 'commercial',
    title: 'DJI Neo 2 Fly More Combo: Which Neo 2 Kit Should You Buy?',
    metaTitle: `DJI Neo 2 Fly More Combo Price: Kits From $549`,
    metaDescription: `DJI Neo 2 Fly More Combo kits compared: drone only $549, with RC-N3 $709, Motion kit $989, plus batteries and what to buy first. Free shipping in Australia.`,
    subtitle: 'The Neo 2 comes in four kits. Here is what is in each one and who should buy which.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '6 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Neo 2', 'Fly More Combo', 'Accessories'],
    excerpt: 'Confused by the DJI Neo 2 kits? We explain the drone-only, Fly More Combo, RC-N3 and Motion Fly More Combo options and who each one suits.',
    image: '/images/blog-neo2-kits.webp',
    imageAlt: 'DJI Neo 2 drone only, Fly More Combo with RC-N3 and Motion Fly More Combo',
    relatedProducts: ['dji-neo-2-drone-only', 'dji-neo-2-fly-more-combo-dji-rc-n3', 'dji-neo-2-motion-fly-more-combo', 'dji-neo-2-intelligent-flight-battery'],
    content: [
      'The DJI Neo 2 is one of the most popular small drones in Australia, and it is sold in several kits. Choosing the wrong one is the most common mistake: some include a controller, some do not, and the extra batteries are what actually let you keep flying. This guide explains each Neo 2 kit, adds a short DJI Neo 2 review of what the drone does well, and tells you which to buy. You can check the specifications in this guide on DJI\'s official page for the [DJI Neo 2](https://www.dji.com/global/neo-2/specs).',
      { h2: 'DJI Neo 2 in brief' },
      'The [DJI Neo 2](/product/dji-neo-2-drone-only) weighs about 151 g, shoots 4K video up to 60 fps, senses obstacles in every direction and flies for up to about 19 minutes per battery. It is built for selfies, follow-me shots and social video. For a wider comparison, read our [DJI Neo 2 vs Flip vs Mini 4 Pro guide](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro).',
      { h2: 'The four Neo 2 kits compared' },
      { table: {
        head: ['Kit', 'What is included', 'Controller', 'Best for'],
        rows: [
          ['[DJI Neo 2 (Drone Only)](/product/dji-neo-2-drone-only)', 'Aircraft with its battery', 'None', 'Phone-only flying and lowest cost'],
          ['[DJI Neo 2 Fly More Combo (Drone Only)](/product/dji-neo-2-fly-more-combo-drone-only)', 'Aircraft plus extra batteries', 'None', 'Longer sessions without a controller'],
          ['[DJI Neo 2 Fly More Combo (DJI RC-N3)](/product/dji-neo-2-fly-more-combo-dji-rc-n3)', 'Aircraft, RC-N3, digital transceiver, extra batteries', 'DJI RC-N3', 'The best all-round kit'],
          ['[DJI Neo 2 Motion Fly More Combo](/product/dji-neo-2-motion-fly-more-combo)', 'Aircraft, Goggles N3, motion controller, extra batteries', 'Motion controller', 'Immersive hand-motion flying']
        ]
      } },
      { h2: 'Drone only: the simplest start' },
      'The drone-only kit gives you the aircraft and its battery, with no controller included. It is the cheapest way in and suits people who will fly with the app on their phone and only need short sessions. Be aware that one battery means a single 19-minute flight at most, so most owners add a spare [Neo 2 battery](/product/dji-neo-2-intelligent-flight-battery) soon after.',
      { h2: 'Neo 2 Fly More Combo (drone only)' },
      'The [Fly More Combo without a controller](/product/dji-neo-2-fly-more-combo-drone-only) adds extra batteries, which is the upgrade that matters most for travel, events and content days. It is a good value pick for people who already have the control method they want. If you search for a DJI Neo2 fly more combo, this is the pack that usually fits.',
      { h2: 'Neo 2 Fly More Combo with the DJI RC-N3' },
      'The [Neo 2 Fly More Combo with the DJI RC-N3](/product/dji-neo-2-fly-more-combo-dji-rc-n3) is our recommended Neo 2 kit. It includes the RC-N3 controller, a digital transceiver and extra batteries, so you get proper stick control, a stronger link and plenty of flight time in one box. The RC-N3 uses your smartphone as the screen. The digital transceiver is what connects the Neo 2 to compatible controllers and goggles, and you can also buy it separately as the [DJI Neo 2 Digital Transceiver](/product/dji-neo-2-digital-transceiver).',
      { h2: 'Neo 2 Motion Fly More Combo' },
      'The [Motion Fly More Combo](/product/dji-neo-2-motion-fly-more-combo) adds Goggles N3, a motion controller and extra batteries. You steer by moving your hand, which makes immersive flying simple for beginners. Choose it if the first-person view is what attracts you to the Neo 2. See also our [FPV guide](/blog/dji-avata-360-vs-avata-2-fpv-drone-guide) for goggles and controllers.',
      { h2: 'Accessories to add' },
      { ul: [
        'Spare [Neo 2 batteries](/product/dji-neo-2-intelligent-flight-battery) for longer sessions.',
        'The [two-way charging hub](/product/dji-neo-2-two-way-charging-hub) to charge several batteries at once.',
        'Spare [Neo 2 propellers](/product/dji-neo-2-propellers), because they are cheap and quick to swap.',
        'A [controller or goggles](/category/batteries/controllers-and-goggles) if your kit did not include one.'
      ] },
      'Browse everything in [DJI Neo and FPV](/category/camera-drones/dji-neo-and-fpv). Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after them.',
      { h2: 'Buying a Neo 2 kit from us' },
      'Every Neo 2 kit we sell is genuine Australian stock with the manufacturer warranty and Australian Consumer Law guarantees. Shipping is free across Australia, unopened hardware can be returned within 30 days and crypto payments get a 10% discount at checkout. If you are unsure which kit suits your plans, [contact us](/contact) and we will help you choose before you order.',
      { h2: 'Which Neo 2 kit should you buy?' },
      { ul: [
        '**Lowest cost:** the drone-only kit, then add a battery.',
        '**Most flying time without a controller:** the Fly More Combo (drone only).',
        '**Best all-round:** the Fly More Combo with the RC-N3.',
        '**Immersive flying:** the Motion Fly More Combo.'
      ] },
      'New to drones? Start with our guide to the [best drones for beginners in Australia](/blog/best-drones-for-beginners-australia).',
      { faq: [
        { q: 'Does the DJI Neo 2 come with a controller?', a: 'Only some kits. The drone-only and the drone-only Fly More Combo have no controller, the RC-N3 combo includes one and the Motion combo includes a motion controller and goggles.' },
        { q: 'How long does a DJI Neo 2 battery last?', a: 'Up to about 19 minutes per battery, which is why the Fly More Combos with extra batteries are popular.' },
        { q: 'Do I need the digital transceiver?', a: 'You need it to connect the Neo 2 to compatible controllers and goggles. The RC-N3 combo includes one, and you can also buy it separately.' }
      ] }
    ],
    targetKeywords: ['dji neo 2', 'dji neo 2 review', 'dji neo2 fly more combo', 'dji neo 2 motion fly more combo', 'dji neo 2 digital transceiver', 'dji neo 2 battery']
  },
  {
    id: 'post-12',
    slug: 'agricultural-drones-weed-control-seeding-crop-monitoring',
    intent: 'commercial',
    title: 'Agricultural Drones in Australia: Weed Control, Seeding and Crop Monitoring',
    metaTitle: `DJI Agriculture Australia: Weed Control Drones Guide`,
    metaDescription: `DJI agriculture drones for weed control, seeding and crop monitoring in Australia: Agras T25P, T50, T100, spreaders and multispectral cameras. Request a quote.`,
    subtitle: 'Three jobs an agriculture drone does well, and the equipment that goes with each.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-27',
    readTime: '8 min read',
    author: 'Agriculture Systems Lead',
    tags: ['Agricultural Drones', 'Weed Control', 'Seeding'],
    excerpt: 'Farming and drones go together for spraying, spreading and crop health checks. We explain weed control, aerial seeding and monitoring and the equipment each needs.',
    image: '/images/blog-agricultural-drones.webp',
    imageAlt: 'DJI Agras T25P, T50 and T100 agricultural drones',
    relatedProducts: ['dji-agras-t25p', 'dji-agras-t50', 'dji-agras-t100', 'dji-mavic-3-multispectral'],
    content: [
      'An agricultural drone is a flying tool for three main jobs: applying liquids, spreading granules and checking crop health. Farming and drones now fit together on everything from small orchards to large broadacre properties, because one operator can cover ground quickly without driving over wet or uneven paddocks. This guide explains weed control, aerial seeding and crop monitoring, and the equipment each needs.',
      { h2: 'DJI agriculture drones for weed control in Australia' },
      'For drone weed control in Australia, the DJI Agras range is the usual starting point. The [Agras T25P](/product/dji-agras-t25p) suits small properties and orchards, the [Agras T50](/product/dji-agras-t50) suits larger paddocks and contractors, and the [Agras T100](/product/dji-agras-t100) is the heavy-lift flagship. Each flies a programmed route and applies product at a set rate, so you treat weeds without driving over wet or uneven ground. Commercial application still needs the right CASA accreditation and chemical-use approvals.',
      { h2: 'Agriculture drones and the jobs they do' },
      { table: {
        head: ['Job', 'What the drone does', 'Equipment'],
        rows: [
          ['Weed control', 'Applies targeted treatments over paddocks and fence lines', 'Spraying drone with nozzles or atomised sprinklers'],
          ['Aerial seeding and fertiliser', 'Spreads seed, fertiliser or other granules', 'Spreading system on a heavy-lift aircraft'],
          ['Crop monitoring', 'Maps plant health to show where to act', 'Multispectral camera and analysis software']
        ]
      } },
      { h2: 'Agriculture drone spraying for weed control' },
      'Agriculture drone spraying lets you treat weeds without driving across wet ground, and it reaches steep or awkward blocks that ground machinery struggles with. A spraying drone for drone weed control carries a tank and nozzles and flies a programmed route, applying product at a set rate. Match the tank size to the area you treat: the [DJI Agras T25P](/product/dji-agras-t25p) carries 20 kg for small properties and orchards, the [Agras T50](/product/dji-agras-t50) carries 40 kg, and the [Agras T100](/product/dji-agras-t100) is the heavy-lift flagship with a 100 L spraying tank. See our [agricultural spraying drones guide](/blog/agricultural-spraying-drones-australia-guide) for a full comparison.',
      { h2: 'Aerial seeding and fertiliser spreading' },
      'An aerial seeding drone swaps the spray tank for a spreading system that drops seed or granules over the paddock. This suits over-sowing pasture, cover crops and fertiliser top-ups, particularly where ground access is limited. The Agras range carries spreading systems as well as spray systems: the T25P has a 25 kg spreading payload, the T50 a 50 kg payload, and the T100 a 150 L spreading tank. Add the [T50 spreading system](/product/dji-agras-t50-spreading-system) or the [150L spreading system](/product/dji-150l-spreading-system) to match your aircraft.',
      { h2: 'Crop monitoring with multispectral drones' },
      'Knowing where to act saves product and time. A multispectral drone captures light that the eye cannot see, such as near-infrared and red edge, to show plant vigour across a paddock. The [DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) carries four 5 MP multispectral cameras plus a 4/3 RGB camera and built-in RTK. Our [multispectral cameras](/category/cameras-sensors/multispectral-cameras) and [DJI Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) software turn the images into maps you can use to plan treatments. Combine them with a sprayer for variable-rate work.',
      { h2: 'What you need besides the aircraft' },
      { ul: [
        '**Batteries and charging:** heavy aircraft need several large batteries; see the Agras [batteries](/product/dji-agras-db1560-intelligent-flight-battery) and [C10000 power supply](/product/dji-c10000-intelligent-power-supply).',
        '**A generator** so charging continues in the field: the [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator).',
        '**Nozzles and spreaders** matched to the product you apply.',
        '**Training and accreditation:** CASA and chemical-use rules apply to commercial application.'
      ] },
      'Browse every [spraying drone](/category/spraying-drones/spraying-drones) and [spraying accessory](/category/spraying-drones/spraying-drone-accessories) we supply.',
      { h2: 'Running a farm or contracting business' },
      'Landholders often start with a compact drone for their own paddocks. Contractors choose larger aircraft to cover more hectares per day and add a second battery set so they never wait. Ask what regional demand looks like: operators across Victoria and other states search for drone spraying services in their area, which creates a market for contractors with the right accreditation.',
      { h2: 'Planning the season' },
      'Treatment windows are short, so plan equipment before the busy period. Order batteries and spare parts early, test the aircraft on a small block before the main job and calibrate the spray rate against the label. Set up a simple record for each flight with the product, rate, wind and area so you can show what was applied. Keep a second set of nozzles, filters and propellers on hand, because a small part can stop a whole day of work. If you contract to neighbours, agree the paddock boundaries, buffer zones and sensitive areas in advance and check the wind direction before every flight.',
      { h2: 'Rules and responsible use' },
      'Commercial spraying has CASA and state chemical-use requirements. Confirm your accreditation, keep application records and read the label of every product before you apply it. Our [quote form](/quote) bundles the aircraft, batteries, charger and set-up for your property. Questions? [Contact us](/contact).',
      { faq: [
        { q: 'What is the best agricultural drone for a small farm?', a: 'The DJI Agras T25P is the most practical for small properties and orchards because it folds and one person can handle it. Larger farms and contractors choose the T50, T70P or T100.' },
        { q: 'How does drone weed control work in Australia?', a: 'A spraying drone such as the DJI Agras T25P, T50 or T100 flies a programmed route and applies product at a set rate, treating weeds without driving over wet or steep ground. Commercial work needs the right CASA accreditation and chemical-use approvals, and you should read every product label first.' },
        { q: 'Can an agricultural drone spread seed as well as spray?', a: 'Yes. The Agras range carries spreading systems for seed and fertiliser as well as spraying systems.' },
        { q: 'How does a multispectral drone help?', a: 'It maps plant health across a paddock so you can target treatments where they are needed instead of treating everything.' }
      ] }
    ],
    targetKeywords: ['agricultural drone', 'agriculture drones', 'agriculture drone spraying', 'farming and drones', 'drone weed control', 'aerial seeding drone']
  },
  {
    id: 'post-13',
    slug: 'waterproof-drones-ip-ratings-explained',
    intent: 'informational',
    title: 'Waterproof Drones: Are Any DJI Drones Water Resistant?',
    metaTitle: `Which DJI Drones Are Waterproof? IP Ratings Explained`,
    metaDescription: `Are drones waterproof? Which DJI and FLIR drones are water resistant, what IP ratings mean, and how to protect your drone around rain and water.`,
    subtitle: 'What waterproof and water resistant really mean for a drone, and what to buy if you work in wet conditions.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '6 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Waterproof Drones', 'IP Rating', 'Enterprise Drones'],
    excerpt: 'Most drones are not waterproof. We explain IP ratings, which enterprise aircraft are water resistant and how to protect your drone near water.',
    image: '/images/blog-waterproof-drones.webp',
    imageAlt: 'DJI Matrice 30T and FLIR Vue TZ20, products with ingress protection ratings',
    relatedProducts: ['dji-matrice-30t', 'flir-vue-tz20', 'dji-matrice-4-enterprise', 'dji-mini-4-pro'],
    content: [
      'People often search for a waterproof drone, and the honest answer is that very few drones are fully waterproof. Most consumer drones, including every small DJI camera drone we sell, are not designed to get wet. A few enterprise aircraft carry an ingress protection rating that makes them water resistant. This guide explains what the ratings mean and what to buy if you fly in wet conditions.',
      { h2: 'Waterproof, water resistant and IP ratings' },
      'The terms are used loosely, so check the rating. An IP (ingress protection) rating has two digits: the first is protection against dust and solid objects, the second is protection against water. A higher second digit means better water protection, but a rating such as IP55 means protected against dust and low-pressure water jets, not that the drone can be submerged. Drones that are waterproof in the sense of floating or diving belong to a separate category and are not what we sell.',
      { table: {
        head: ['Rating', 'Dust', 'Water', 'In practice'],
        rows: [
          ['IP44', 'Protected against solid objects over 1 mm', 'Splashing water from any direction', 'Light rain or splashes only'],
          ['IP55', 'Dust protected', 'Low-pressure water jets from any direction', 'Rain and wash-down, not submersion']
        ]
      } },
      { h2: 'Water resistant drone and waterproof UAV options in our range' },
      'The most capable water resistant drone we supply, and the nearest thing to a waterproof UAV for inspection work, is the [DJI Matrice 30T](/product/dji-matrice-30t), rated IP55 with a radiometric thermal camera, a 12 MP wide camera and a 48 MP zoom camera. It is built for industrial and public-safety teams who cannot wait for perfect weather. The [FLIR Vue TZ20](/product/flir-vue-tz20) thermal payload has an IP44 rating, which handles splashes but not heavy rain. Browse the [DJI Matrice range](/category/enterprise-drones/dji-matrice) for other enterprise aircraft and check each product page for its rating.',
      { h2: 'Humid, coastal and dusty conditions' },
      'Water is not the only enemy. Salt air near the coast corrodes connectors and bearings, fine dust works into gimbals and fans, and humidity causes condensation inside a cold aircraft that is carried into a warm vehicle. After a coastal or dusty flight, wipe the aircraft with a slightly damp cloth, check the gimbal moves freely and let the drone dry fully before it goes back in its bag. Keep silica packs in the case and store batteries somewhere cool and dry.',
      { h2: 'Choosing for emergency services and inspections' },
      'Teams that respond to incidents or inspect assets in all weather should treat an ingress rating as a requirement, not a bonus. Pair a rated aircraft with a rated payload and spare batteries so a shower does not end the mission, and keep a protective case in the vehicle. For planning a purchase, our team can match the aircraft, payload and accessories to your conditions.',
      { h2: 'Consumer drones and water' },
      'Small camera drones such as the [DJI Mini 4 Pro](/product/dji-mini-4-pro) are not waterproof, and flying them in rain, spray or fog can damage the electronics. If you fly near water for filming, the risk is not only rain: a landing on water, a gust that pushes the drone down or a sea mist can end a flight and an aircraft. Plan return-to-home heights and flight paths so that a failure does not put the drone over open water.',
      { h2: 'How to protect a drone near water' },
      { ul: [
        'Check the forecast and do not fly in rain unless the aircraft is rated for it.',
        'Avoid launching from wet ground or sand that can get into the motors and gimbal.',
        'Keep the drone and batteries dry in a [protective bag or case](/category/batteries/bags-and-covers) between flights.',
        'Wipe the aircraft down and let it dry fully after exposure to damp air.',
        'Use [propeller guards](/category/batteries/propellers-and-guards) near obstacles and keep a safe margin from water surfaces.'
      ] },
      { h2: 'Do you need a waterproof drone?' },
      'If you inspect assets outdoors regularly, such as power lines, solar farms, pipelines or emergency scenes, an IP-rated aircraft like the Matrice 30T is worth the investment, because it keeps working when the weather turns. For hobby filming and travel, a small drone and careful planning is usually enough. Not sure which suits you? Use our [quote form](/quote) and tell us where and how you fly, or read the [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide).',
      { h2: 'A note on water drones' },
      'The term water drone can mean an underwater or surface vehicle, which is a different product from a flying drone. We supply flying drones, payloads and accessories. If you need to inspect underwater, you need a specialist vehicle, and a flying drone can still help by surveying the shoreline and surrounding area from above.',
      { faq: [
        { q: 'Are DJI drones waterproof?', a: 'Most are not. Small DJI camera drones are not designed to get wet. Some enterprise aircraft, such as the Matrice 30T, carry an IP rating for water resistance.' },
        { q: 'What does IP55 mean on a drone?', a: 'It means the drone is dust protected and resists low-pressure water jets from any direction. It does not mean it can be submerged.' },
        { q: 'Can I fly my drone in light rain?', a: 'Only if the manufacturer rates it for that. Otherwise avoid rain, spray and fog, which can damage the electronics.' }
      ] }
    ],
    targetKeywords: ['waterproof drone', 'drones that are waterproof', 'water resistant drone', 'waterproof uav', 'waterproof drones', 'water drone']
  },
  {
    id: 'post-14',
    slug: 'dji-controllers-explained-rc-n3-rc-2-rc-pro',
    intent: 'commercial',
    title: 'DJI Controllers Explained: RC-N3, RC 2, RC Pro, RC Plus and Motion',
    metaTitle: `DJI Controllers: RC-N3 vs RC 2 vs RC Pro, AUD Prices`,
    metaDescription: `Which DJI controller? RC-N3 from $165, RC 2 at $549 and RC Pro at $1,529 compared, plus motion and FPV controllers. Free express shipping in Australia.`,
    subtitle: 'Phone-based, screen, motion and FPV controllers: how they differ and how to choose the right one.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '7 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Controllers', 'RC 2', 'FPV'],
    excerpt: 'A DJI remote controller can use your phone, a built-in screen, motion control or sticks. We explain the main options and which suits which drone and pilot.',
    image: '/images/blog-dji-controllers.webp',
    imageAlt: 'DJI RC-N3, DJI RC 2 and DJI RC Pro remote controllers',
    relatedProducts: ['dji-rc-n3-remote-controller', 'dji-rc-2-remote-controller', 'dji-rc-pro-remote-controller', 'dji-rc-motion-3'],
    content: [
      'Choosing the right controller changes how a drone feels to fly. A modern DJI remote controller can use your smartphone as the screen, have a bright screen built in, steer by hand motion or give you classic stick control for FPV. Not every controller works with every aircraft, so this guide explains the main types, what each is for and how to choose. Whether you want a remote DJI pilots can use with a phone, an RC DJI kit with a built-in screen or the DJI FPV controller 3 for manual flying, the choice depends on your aircraft. Browse the full range of [controllers and goggles](/category/batteries/controllers-and-goggles).',
      { h2: 'The four types of DJI RC controller' },
      { table: {
        head: ['Type', 'Examples', 'Screen', 'Best for'],
        rows: [
          ['Phone-based', '[DJI RC-N3](/product/dji-rc-n3-remote-controller)', 'Your smartphone', 'Light, affordable, everyday flying'],
          ['Built-in screen', '[DJI RC 2](/product/dji-rc-2-remote-controller), [DJI RC](/product/dji-rc-remote-controller)', '5.5-inch bright display on RC 2', 'No phone needed, easier in sunlight'],
          ['High-bright and professional', '[DJI RC Pro](/product/dji-rc-pro-remote-controller), [RC Plus (Inspire 3)](/product/dji-rc-plus-inspire-3), [RC Plus 2 Enterprise](/product/dji-rc-plus-2-enterprise-enhanced)', 'Large, high-bright screens', 'Cinema work and demanding field jobs'],
          ['Motion and FPV', '[RC Motion 3](/product/dji-rc-motion-3), [RC Motion 2](/product/dji-rc-motion-2), [FPV Remote Controller 3](/product/dji-fpv-remote-controller-3)', 'Goggles', 'Immersive and FPV flying']
        ]
      } },
      { h2: 'DJI RC-N3: the phone-based controller' },
      'The [DJI RC-N3](/product/dji-rc-n3-remote-controller) is a compact controller that uses your smartphone as the screen. It is light and affordable, which makes it the default in many Fly More Combos, including the [Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3), [Air 3S](/product/dji-air-3s-dji-rc-n3) and [Flip](/product/dji-flip-dji-rc-n3). If you already own a phone you like flying with, this is the most cost-effective choice. Older owners will also see the RC-N1 and RC-N2 mentioned for earlier aircraft; check compatibility before you buy.',
      { h2: 'DJI RC 2: the built-in screen' },
      'The [DJI RC 2](/product/dji-rc-2-remote-controller) has a 5.5-inch 1080p display with 700 nits of brightness, so you do not need a phone and the picture stays readable in sunlight. It suits pilots who fly often, want a tidy setup and prefer not to tie up their phone. It is offered with many aircraft, such as the [Mini 4 Pro RC 2](/product/dji-mini-4-pro-rc-2), the [Air 3S Fly More Combo](/product/dji-air-3s-fly-more-combo-dji-rc-2) and the [Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2), and is also sold on its own for compatible drones.',
      { h2: 'DJI RC and RC Pro: the Mavic 3 family' },
      'The original [DJI RC](/product/dji-rc-remote-controller) is a screen controller with long-range support, a good match for the Mavic 3 family. The [DJI RC Pro](/product/dji-rc-pro-remote-controller) is a high-bright professional controller that stays readable in strong sun and is designed for demanding shoots. See the [Mavic 3 Pro Fly More Combo with RC Pro](/product/dji-mavic-3-pro-fly-more-combo-dji-rc-pro).',
      { h2: 'RC Plus and enterprise controllers' },
      'Enterprise and cinema aircraft use larger controllers. The [RC Plus (Inspire 3)](/product/dji-rc-plus-inspire-3) is matched to the Inspire 3, and the [RC Plus 2 Enterprise Enhanced](/product/dji-rc-plus-2-enterprise-enhanced) has a large bright display built for field work. A UAV controller for a commercial aircraft usually comes in the combo, so confirm what is included in your kit. Browse [enterprise accessories](/category/enterprise-drones/enterprise-accessories) for straps, brackets and sticks.',
      { h2: 'Motion controllers and FPV controllers' },
      'A motion controller steers the drone with hand and wrist movements, which makes immersive flying approachable. The [DJI RC Motion 3](/product/dji-rc-motion-3), [RC Motion 2](/product/dji-rc-motion-2) and [DJI Motion Controller](/product/dji-motion-controller) pair with goggles. If you prefer manual stick control for FPV, the [DJI FPV Remote Controller 3](/product/dji-fpv-remote-controller-3) is the joystick-style option. Add [Goggles 3](/product/dji-goggles-3) or the lower-cost [Goggles N3](/product/dji-goggles-n3) for the first-person view. Our [FPV guide](/blog/dji-avata-360-vs-avata-2-fpv-drone-guide) explains the kits.',
      { h2: 'How to choose a controller for your RC drone' },
      { ul: [
        '**Check compatibility first.** Each controller works with specific aircraft; the product page lists them.',
        '**Phone or screen?** The RC-N3 is lighter and cheaper; the RC 2 and RC Pro avoid using your phone.',
        '**Sunlight.** Choose a high-bright screen if you fly outdoors in strong light.',
        '**Flying style.** Pick a motion controller for immersive flying, or sticks for manual FPV.',
        '**Spare controller.** A second controller is useful insurance on commercial jobs.'
      ] },
      'If you are buying your first aircraft, the [guide to the best drones for beginners](/blog/best-drones-for-beginners-australia) shows which kits include which controller.',
      { h2: 'Buying a remote for your DJI drone' },
      'Searching for a remote for your DJI drone? Tell us your aircraft and we will point you to the right controller. [Contact us](/contact) with your model, or browse the [shop](/shop).',
      { faq: [
        { q: 'What is the difference between the DJI RC-N3 and the RC 2?', a: 'The RC-N3 uses your smartphone as the screen and is lighter and cheaper. The RC 2 has a built-in 5.5-inch bright screen, so you do not need a phone.' },
        { q: 'Can I use any DJI controller with any drone?', a: 'No. Each controller works with specific aircraft, so check the compatibility on the product page before you buy.' },
        { q: 'Which controller is best for FPV?', a: 'For immersive flying with goggles, a motion controller is the easiest to learn, and the FPV Remote Controller 3 gives stick control for manual flying.' }
      ] }
    ],
    targetKeywords: ['rc drone', 'remote dji', 'rc dji', 'uav controller', 'dji fpv controller 3', 'fpv controller']
  },
  {
    id: 'post-15',
    slug: 'best-drones-for-real-estate-and-aerial-photography',
    intent: 'commercial',
    title: 'Best Drones for Real Estate and Aerial Photography in Australia',
    metaTitle: 'Best Drones for Real Estate and Aerial Photography',
    metaDescription: 'Compare the best drones for real estate photography and video in Australia: Mini 4 Pro, Air 3S, Mavic 3 Pro and Mavic 4 Pro, plus accessories and CASA basics.',
    subtitle: 'Which camera drone suits property marketing, and what to know before you take paid work.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '7 min read',
    author: 'Flight Operations Team',
    tags: ['Real Estate Drones', 'Aerial Photography', 'DJI'],
    excerpt: 'Property photography and video need sharp stills, steady footage and reliable flights. We compare the best DJI drones for real estate and aerial work.',
    image: '/images/blog-real-estate-drones.webp',
    imageAlt: 'DJI Mini 4 Pro, DJI Air 3S and DJI Mavic 4 Pro camera drones',
    relatedProducts: ['dji-mini-4-pro', 'dji-air-3s-dji-rc-n3', 'dji-mavic-3-pro', 'dji-mavic-4-pro-dji-rc-2'],
    content: [
      'Drone photography has become a standard part of marketing a property. A good aerial shot shows the block, the street, the view and the surroundings in a way that ground photos cannot, and the best drone photography starts with the right aircraft. If you have ever searched for drone photography near me, you will know many agents now expect it as standard. This guide compares the best drones for real estate photography and video in Australia, and explains the accessories and rules you need to know before you start charging for flights.',
      { h2: 'What a real estate drone needs' },
      { ul: [
        '**A large sensor.** Larger sensors give cleaner images in the low light of dawn and dusk, when properties look their best.',
        '**Good dynamic range.** Bright skies and dark roofs in one frame need a camera that holds detail.',
        '**Smooth video.** A stable gimbal and 4K video make the walk-through clips clients expect.',
        '**Reliable obstacle sensing.** Trees, wires and rooflines are close, so sensing helps keep the aircraft safe.',
        '**Portability.** You will carry the kit to many properties a week.'
      ] },
      { h2: 'Real estate drones compared' },
      { table: {
        head: ['Drone', 'Camera', 'Max flight time', 'Weight', 'Best for'],
        rows: [
          ['[DJI Mini 4 Pro](/product/dji-mini-4-pro)', '1/1.3-inch CMOS, 48 MP, 4K up to 100 fps', 'Up to 34 min', 'Under 249 g', 'Starting out and tight budgets'],
          ['[DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3)', '1-inch CMOS, 50 MP', 'Up to 36 min', 'Under 250 g', 'Best small camera drone'],
          ['[DJI Air 3S](/product/dji-air-3s-dji-rc-n3)', '1-inch 50 MP wide plus 48 MP medium tele, 4K up to 120 fps', 'Up to 45 min', 'About 724 g', 'Everyday paid work'],
          ['[DJI Mavic 3 Pro](/product/dji-mavic-3-pro)', '4/3 20 MP wide plus two tele cameras, 5.1K video', 'Up to 43 min', '958 g', 'High-end property video'],
          ['[DJI Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2)', '100 MP 4/3 Hasselblad plus two tele cameras', 'Up to 51 min', 'See product page', 'Premium listings and developers']
        ]
      } },
      { h2: 'DJI Air 3S: the all-round choice' },
      'For most agents and photographers, the [DJI Air 3S](/product/dji-air-3s-dji-rc-n3) is the best balance. Its 1-inch 50 MP wide camera and 48 MP medium tele camera give you a standard view and a compressed, flattering view of the property, and up to 45 minutes of flight covers a full shoot. It also shoots 4K up to 120 fps for smooth slow-motion. Choose a [Fly More Combo](/product/dji-air-3s-fly-more-combo-dji-rc-n3) for extra batteries.',
      { h2: 'Mini 4 Pro and Mini 5 Pro: small and capable' },
      'If you are starting out or fly in tight suburban blocks, the [Mini 4 Pro](/product/dji-mini-4-pro) and the [Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3) give excellent image quality in a drone that fits in a jacket pocket. The Mini 5 Pro adds a 1-inch 50 MP sensor, which is the best small camera drone in our range. Both stay under the 250 g mark, which also helps with the paperwork around lighter aircraft.',
      { h2: 'Mavic 3 Pro and Mavic 4 Pro: premium video and stills' },
      'For higher-end property marketing, the [Mavic 3 Pro](/product/dji-mavic-3-pro) offers three cameras and 5.1K video, and the [Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2) adds a 100 MP Hasselblad main camera, a rotating gimbal and up to 51 minutes of flight. They suit developers, luxury listings and anyone selling aerial work as a premium service. Our [2026 DJI buyer guide](/blog/best-drone-for-sale-australia-2026-buyers-guide) compares the whole range.',
      { h2: 'Real estate drone video and follow-me shots' },
      'Property videos usually use slow reveals, orbits and a flight down the street towards the front door. Practise the moves before the shoot, and keep a clear return-to-home height. If you also want a simple follow-me shot for a presenter walking the property, a small drone such as the [DJI Neo 2](/product/dji-neo-2-drone-only) can do it, and its drone follow me mode keeps the presenter in frame. A GPS drone holds position accurately for stills, and enabling the gimbal level helps keep horizons straight.',
      { h2: 'Accessories that improve results' },
      { ul: [
        '[ND filters](/category/batteries/filters-and-lenses) to control shutter speed in bright light.',
        'Spare [batteries](/category/batteries/drone-batteries) and a [charging hub](/category/batteries/charging-hubs) for a full day of shoots.',
        'A [bag or cover](/category/batteries/bags-and-covers) to protect the kit between properties.',
        'A screen [controller](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) so you can see the shot clearly in sun.'
      ] },
      { h2: 'Charging for drone photography and CASA basics' },
      'If you take drone photography work for pay, rules for commercial operators apply. Under CASA, you can operate in the excluded category for drones under 2 kg after completing the CASA operator accreditation, while heavier aircraft need a licence and operator certificate. You also need to follow the standard operating conditions, such as flying below 120 m, keeping the drone in sight and staying 30 m from people. Pricing is up to you: real estate drone photography pricing varies with the property, the deliverables and your market, so research what local agents pay. Check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) for current rules, and see our [FAQ](/faq).',
      { faq: [
        { q: 'What is the best drone for real estate photography?', a: 'For most people the DJI Air 3S is the best balance of camera, flight time and portability. The Mini 5 Pro is the best compact option and the Mavic 4 Pro suits premium listings.' },
        { q: 'Do I need a licence to take real estate drone photos for money?', a: 'Commercial flying has CASA requirements. Drones under 2 kg can operate in the excluded category after CASA operator accreditation; heavier aircraft need a licence and certificate. Check the CASA website.' },
        { q: 'How many batteries do I need for a shoot?', a: 'Two or three is a practical minimum for a single property, so a Fly More Combo is usually the better value.' }
      ] }
    ],
    targetKeywords: ['best drone photography', 'real estate drone video', 'real estate drone photography pricing', 'drone photography near me', 'drone follow me', 'gps drone']
  },
  {
    id: 'post-16',
    slug: 'buying-a-new-vs-used-dji-drone-australia',
    intent: 'commercial',
    title: 'New vs Used DJI Drones in Australia: What to Check Before You Buy',
    metaTitle: `Used vs New DJI Drone: What to Check Before You Buy`,
    metaDescription: `Buying a used DJI drone? Check battery health, damage, warranty and your Australian consumer rights, and see how it compares with new stock and free shipping.`,
    subtitle: 'A practical checklist for buying a second hand drone, and when buying new is the safer choice.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '7 min read',
    author: 'Flight Operations Team',
    tags: ['Used Drones', 'Buying Guide', 'Warranty'],
    excerpt: 'Used drones for sale can look like a bargain, but condition and warranty matter. Here is what to check and when buying a new drone is the better deal.',
    image: '/images/blog-new-vs-used-drones.webp',
    imageAlt: 'DJI Mini 5 Pro and DJI Mavic 3 Pro new drones',
    relatedProducts: ['dji-mini-5-pro-dji-rc-n3', 'dji-mavic-3-pro', 'dji-air-3s-dji-rc-n3', 'dji-mini-4-pro'],
    content: [
      'A search for used drones for sale turns up plenty of tempting prices. A second hand drone can be a good way to save money, but it can also come with hidden damage, worn batteries or no warranty at all. This guide compares buying a new versus a used DJI drone in Australia, gives you a checklist for inspecting a second hand drone and explains your consumer rights.',
      { h2: 'New vs used DJI drones compared' },
      { table: {
        head: ['Factor', 'New from a retailer', 'Used or second hand'],
        rows: [
          ['Condition', 'Unused, sealed, current firmware path', 'Unknown history, wear and possible crash damage'],
          ['Warranty', 'Manufacturer warranty and Australian Consumer Law guarantees', 'Often none; private sellers are not covered the same way'],
          ['Batteries', 'Full capacity', 'May be worn, which cuts flight time'],
          ['Price', 'Higher', 'Lower, but check what you may need to replace'],
          ['Risk', 'Low', 'Higher: hidden faults, locked or stolen aircraft']
        ]
      } },
      'Listings use many labels, from second hand drones for sale and 2nd hand drones for sale to ex-demo and refurbished. The checklist below applies to all of them, because the wording does not tell you the condition. Ex-demo and refurbished units can be reasonable value when the seller is a business that offers its own warranty, but always ask exactly what that warranty covers.',
      { h2: 'Why a second hand drone is risky' },
      'Drones are flown hard, crashed and repaired. A second hand drone that looks clean may hide a bent gimbal, a cracked arm or a battery that has been over-discharged. You usually cannot see a drone\'s flight history, and a seller may not know it either. A lower price can disappear quickly if you need a new battery, gimbal or propellers.',
      { h2: 'A checklist for buying a used drone' },
      { ul: [
        '**Ask for the original receipt and serial number**, and check that the serial on the aircraft, controller and batteries matches the paperwork.',
        '**Check the drone is not locked or reported stolen**, and that you can sign in and activate it on your own account.',
        '**Inspect the body, arms and gimbal** for cracks, loose parts or a camera that does not move smoothly.',
        '**Check each battery** for swelling, damage and how many charge cycles it has had, and expect worn batteries to fly for less time.',
        '**Test fly in an open area**, watching for drift, odd noises, vibrations in the video and sensor warnings.',
        '**Ask about crashes and repairs**, and about any warranty or care coverage that remains and whether it transfers.',
        '**Update the firmware** and make sure all the accessories are included.'
      ] },
      'If anything feels wrong, walk away. A cheap second hand drone is not a bargain if it cannot fly safely.',
      { h2: 'Your rights when you buy used' },
      'Under the Australian Consumer Law, consumer guarantees generally apply to goods bought from a business, but private sales are usually not covered in the same way. That means a faulty drone bought from a stranger may leave you with little recourse. Buying from a retailer gives you the manufacturer warranty and ACL guarantees. Check the ACCC website for the details that apply to your purchase.',
      { h2: 'When buying new is the better deal' },
      'Buying new makes sense when you want the warranty, the full battery life and certainty about the condition. It is especially worth it for aircraft you rely on for paid work, and for beginners who cannot yet judge a drone\'s condition. Fly More Combos include extra batteries, which often closes the price gap with a used drone and a few spare batteries. Our drones are genuine Australian stock with free shipping and a 30-day change-of-mind return on unopened hardware.',
      { h2: 'Smart ways to save without going used' },
      { ul: [
        'Choose the right model for your needs: a [DJI Mini 4 Pro](/product/dji-mini-4-pro) or [Mini 4K](/product/dji-mini-4k) costs far less than a flagship.',
        'Pay by crypto for our 10% discount at checkout.',
        'Buy a [Fly More Combo](/category/camera-drones/dji-mini-and-air) rather than adding batteries later.',
        'Look at [previous-generation aircraft](/product/dji-air-3), which can offer strong value.'
      ] },
      'Not sure which model fits? Read our [2026 DJI buyer guide](/blog/best-drone-for-sale-australia-2026-buyers-guide) or the guide to the [best drones for beginners](/blog/best-drones-for-beginners-australia). If you already own a drone, our [battery guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to keep it running well.',
      { faq: [
        { q: 'Is it safe to buy a second hand drone?', a: 'It can be, if you check the serial number, the battery condition, the gimbal and body and take a test flight. Without a warranty, the risk is higher than buying new.' },
        { q: 'Do second hand drones have a warranty in Australia?', a: 'Often not. Consumer guarantees generally apply to goods bought from a business, but private sales are usually not covered in the same way.' },
        { q: 'What is the biggest hidden cost of a used drone?', a: 'Batteries. Worn batteries cut flight time, and replacements can add a lot to the real price.' }
      ] }
    ],
    targetKeywords: ['used drones for sale', 'second hand drones for sale', 'second hand drone', '2nd hand drones for sale']
  },
  {
    id: 'post-4',
    slug: 'best-drones-for-beginners-australia',
    intent: 'commercial',
    title: 'Best Drones for Beginners in Australia: 5 Easy, Affordable Picks',
    metaTitle: 'Best Drones for Beginners in Australia (2026 Guide)',
    metaDescription: 'The best drones for beginners in Australia: five easy, affordable DJI picks compared by weight, camera and flight time, plus what to buy and the CASA basics.',
    subtitle: 'How to choose a first drone without overspending, and which DJI models suit new pilots best.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '7 min read',
    author: 'Flight Operations Team',
    tags: ['Drones for Beginners', 'Affordable Drones', 'DJI'],
    excerpt: 'Choosing your first drone? We compare five of the best drones for beginners in Australia by weight, camera, flight time and how forgiving they are to fly.',
    image: '/images/blog-beginner-drones.webp',
    imageAlt: 'DJI Mini 4K, DJI Lito 1 and DJI Neo 2 beginner drones side by side',
    relatedProducts: ['dji-mini-4k', 'dji-lito-1', 'dji-neo-2-drone-only', 'dji-flip-dji-rc-n3'],
    content: [
      'The best drones for beginners in Australia share a few traits: they are light, they avoid obstacles for you, they record sharp video without fiddly settings, and they cost little enough that a first-flight mistake does not hurt. This guide compares five affordable drones for beginners from our range and explains how to pick between them. If you are searching for the best drones for beginners Australia wide, a beginner drone with camera stabilisation and obstacle sensing is the safest place to start.',
      { h2: 'What a beginner drone needs' },
      'Ignore the spec-sheet noise and look for these basics:',
      { ul: [
        '**Low weight.** Drones under 250 g are simpler to fly under CASA rules and are easier to carry everywhere.',
        '**Obstacle sensing.** Omnidirectional sensing helps a new pilot avoid trees, walls and people.',
        '**Good flight time.** Longer flights mean more practice before you swap batteries.',
        '**A decent camera.** 4K video and a stabilised gimbal give you footage worth sharing from day one.',
        '**Room to grow.** A Fly More Combo adds spare batteries and a charging hub, which is the cheapest upgrade you can make.'
      ] },
      { h2: 'Five easy drones for beginners compared' },
      { table: {
        head: ['Drone', 'Weight', 'Camera and video', 'Flight time', 'Best for'],
        rows: [
          ['[DJI Mini 4K](/product/dji-mini-4k)', 'Under 250 g', '4K, 3-axis gimbal', 'See product page', 'Lowest-cost first drone'],
          ['[DJI Lito 1](/product/dji-lito-1)', 'Under 249 g', '1/2-inch sensor, 4K up to 60 fps', 'See product page', 'Easy flying with obstacle sensing'],
          ['[DJI Neo 2](/product/dji-neo-2-drone-only)', 'About 151 g', '4K up to 60 fps', 'Up to about 19 min', 'Selfies and follow-me shots'],
          ['[DJI Flip](/product/dji-flip-dji-rc-n3)', 'About 249 g', '1/1.3-inch 48 MP, 4K up to 60 fps', 'Up to 31 min', 'Travel and vlogging'],
          ['[DJI Mini 4 Pro](/product/dji-mini-4-pro)', 'Under 249 g', '1/1.3-inch 48 MP, 4K up to 100 fps', 'Up to 34 min', 'A first drone you will not outgrow']
        ]
      } },
      { h2: 'DJI Mini 4K: the simplest affordable drone' },
      'The [DJI Mini 4K](/product/dji-mini-4k) is the entry point for beginners who want a real camera drone without a big spend. It stays under 250 g, records 4K video on a 3-axis gimbal, and the [Fly More Combo](/product/dji-mini-4k-fly-more-combo) adds extra batteries so you can keep flying. If budget is the main concern, start here.',
      { h2: 'DJI Lito 1: forgiving and easy to fly' },
      'The [DJI Lito 1](/product/dji-lito-1) pairs a 1/2-inch sensor with 4K video up to 60 fps, 4K slow motion at 100 fps and omnidirectional obstacle sensing in a sub-249 g body. It is built for people who want to take off, tap a mode and get a clean shot. See the full range of [DJI Lito drones](/category/camera-drones/dji-lito).',
      { h2: 'DJI Neo 2: the palm-sized drone for selfies' },
      'At about 151 g, the [DJI Neo 2](/product/dji-neo-2-drone-only) is the lightest drone on this list. It shoots 4K up to 60 fps, has omnidirectional obstacle sensing and offers up to about 19 minutes of flight. The drone-only kit has no controller, so choose a [Fly More Combo](/product/dji-neo-2-fly-more-combo-dji-rc-n3) if you want a controller and extra batteries. Read our [DJI Neo 2 vs DJI Flip vs DJI Mini 4 Pro comparison](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) for a closer look.',
      { h2: 'DJI Flip: foldable and travel ready' },
      'The [DJI Flip](/product/dji-flip-dji-rc-n3) has a 1/1.3-inch 48 MP sensor, 4K up to 60 fps and up to 31 minutes of flight at about 249 g. The foldable design suits backpacks and holiday luggage, and it comes with the DJI RC-N3 controller that uses your smartphone as the screen.',
      { h2: 'DJI Mini 4 Pro: the one you will not outgrow' },
      'If you can stretch the budget, the [DJI Mini 4 Pro](/product/dji-mini-4-pro) is the best-value step up. It records 4K up to 100 fps with 10-bit D-Log M and HLG, offers up to 34 minutes of flight, senses obstacles in every direction and transmits video with DJI O4. It is also available with the [RC 2 controller](/product/dji-mini-4-pro-rc-2) and in [Fly More Combos](/product/dji-mini-4-pro-fly-more-combo).',
      { h2: 'What to buy with your first drone' },
      { ul: [
        'A **Fly More Combo** or [spare batteries](/category/batteries/drone-batteries) so a flying session is not cut short.',
        'A [charging hub](/category/batteries/charging-hubs) to charge several batteries at once.',
        '[Propellers and guards](/category/batteries/propellers-and-guards), because a spare set costs little and saves a trip.',
        'A [bag or cover](/category/batteries/bags-and-covers) to protect the drone in transit.'
      ] },
      { h2: 'Learning to fly safely' },
      'Start in an open field away from people, trees and roads, in daylight and light wind. Learn the return-to-home button before anything else, keep the drone in sight and practise slow, gentle stick movements. Update the aircraft and controller firmware after unboxing. Read our [Australian drone buying guide](/blog/best-drone-for-sale-australia-2026-buyers-guide) for the wider range once you are ready to step up.',
      { h2: 'CASA basics for new pilots' },
      'CASA standard operating conditions say to fly no higher than 120 m, keep the drone in visual line of sight, stay at least 30 m from other people, avoid crowds and fly in daylight. Drones heavier than 250 g also have to keep clear of controlled aerodromes. Rules can change, so check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) before you fly. Our [FAQ](/faq) summarises the main points.',
      { faq: [
        { q: 'What is the best drone for a complete beginner in Australia?', a: 'For most beginners the DJI Lito 1 or DJI Mini 4K is the easiest start, and the DJI Neo 2 suits selfies and follow-me shots. If you can spend more, the DJI Mini 4 Pro is the one you will not outgrow.' },
        { q: 'Do I need to register a drone under 250 g in Australia?', a: 'Recreational flying with a drone under 250 g does not need CASA registration or a licence, but you must still follow the standard operating conditions. Check the CASA website for the latest rules.' },
        { q: 'Is a Fly More Combo worth it for a first drone?', a: 'Usually yes. The extra batteries and charging hub let you fly longer and practise more, and a combo is normally cheaper than buying the parts separately.' }
      ] }
    ],
    targetKeywords: ['best drones for beginners australia', 'drones for beginners', 'affordable drones', 'beginner drone with camera']
  },
  {
    id: 'post-5',
    slug: 'dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro',
    intent: 'commercial',
    title: 'DJI Neo 2 vs DJI Flip vs DJI Mini 4 Pro: Which Should You Buy?',
    metaTitle: `DJI Neo 2 vs Flip vs Mini 4 Pro: Prices and Which to Buy`,
    metaDescription: `DJI Neo 2 ($409), Flip ($559) and Mini 4 Pro ($949) compared on weight, camera, flight time and price, so you can pick the right small DJI drone in Australia.`,
    subtitle: 'Three small DJI drones, three different jobs. Here is how they compare and who each one suits.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '6 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Neo 2', 'DJI Flip', 'DJI Mini 4 Pro'],
    excerpt: 'The DJI Neo 2, DJI Flip and DJI Mini 4 Pro are all small, easy to carry and sub-250 g class. Here is the difference in camera, flight time and use case.',
    image: '/images/blog-neo2-flip-mini4pro.webp',
    imageAlt: 'DJI Neo 2, DJI Flip and DJI Mini 4 Pro drones compared',
    relatedProducts: ['dji-neo-2-drone-only', 'dji-flip-dji-rc-n3', 'dji-mini-4-pro', 'dji-neo-2-fly-more-combo-dji-rc-n3'],
    content: [
      'The DJI Neo 2, the DJI Flip and the DJI Mini 4 Pro are three of the most popular small drones in our range, and they are easy to confuse. All three are light, travel well and shoot 4K video, but they are built for different jobs. This comparison covers the numbers that matter and who each drone suits. You can check the specifications in this guide on DJI\'s official pages for the [DJI Neo 2](https://www.dji.com/global/neo-2/specs), [DJI Flip](https://www.dji.com/global/flip/specs) and [DJI Mini 4 Pro](https://www.dji.com/global/mini-4-pro/specs).',
      { h2: 'DJI Neo 2 vs DJI Flip vs DJI Mini 4 Pro at a glance' },
      { table: {
        head: ['Specification', 'DJI Neo 2', 'DJI Flip', 'DJI Mini 4 Pro'],
        rows: [
          ['Take-off weight', 'About 151 g', 'About 249 g', 'Under 249 g'],
          ['Camera sensor', 'Compact, 4K up to 60 fps', '1/1.3-inch CMOS, 48 MP', '1/1.3-inch CMOS, 48 MP'],
          ['Best video', '4K up to 60 fps', '4K up to 60 fps', '4K up to 100 fps, 10-bit D-Log M and HLG'],
          ['Max flight time', 'Up to about 19 min', 'Up to 31 min', 'Up to 34 min'],
          ['Obstacle sensing', 'Omnidirectional', 'See product page', 'Omnidirectional'],
          ['Controller options', 'Drone only, RC-N3 or motion kits', 'DJI RC-N3 or RC 2', 'See product pages for kits']
        ]
      } },
      { h2: 'DJI Neo 2: for selfies, follow-me shots and fun' },
      'The [DJI Neo 2](/product/dji-neo-2-drone-only) is the smallest and lowest-cost of the three. At about 151 g it fits in a jacket pocket, it shoots 4K up to 60 fps and it senses obstacles in every direction. It is the easiest of the three to fly and the best choice for social video, family shots and events. The trade-off is shorter flight time and a smaller camera than the other two. Choose a [Fly More Combo](/product/dji-neo-2-fly-more-combo-dji-rc-n3) for a controller and extra batteries, or the [Motion Fly More Combo](/product/dji-neo-2-motion-fly-more-combo) for hands-free control.',
      { h2: 'DJI Flip: the foldable travel drone' },
      'In the DJI Flip vs Neo question, the Flip wins on camera and flight time while the Neo 2 wins on size and simplicity. The [DJI Flip](/product/dji-flip-dji-rc-n3) sits between the two. It has the same 1/1.3-inch 48 MP class sensor as the Mini 4 Pro, a foldable body at about 249 g and up to 31 minutes of flight. It is the best match for travellers and vloggers who want a proper camera without the price of a pro drone. It is available with the [DJI RC 2](/product/dji-flip-dji-rc-2) and as a [Fly More Combo](/product/dji-flip-fly-more-combo-dji-rc-2).',
      { h2: 'DJI Mini 4 Pro: the most capable of the three' },
      'The [DJI Mini 4 Pro](/product/dji-mini-4-pro) is the one for people who care about image quality and range. It records 4K up to 100 fps with 10-bit D-Log M and HLG for grading, flies for up to 34 minutes, handles winds up to 10.7 m/s and transmits video with DJI O4. It stays under 249 g, so it remains easy to carry. See all [DJI Mini and Air drones](/category/camera-drones/dji-mini-and-air).',
      { h2: 'Which should you buy?' },
      { ul: [
        '**Choose the DJI Neo 2** if you want the smallest, simplest and most affordable option for quick shots.',
        '**Choose the DJI Flip** if you travel often and want a foldable drone with a strong camera and long flight time.',
        '**Choose the DJI Mini 4 Pro** if image quality, range and flight time matter most and you may want to grade your footage.'
      ] },
      'If you are still deciding, read our guide to the [best drones for beginners in Australia](/blog/best-drones-for-beginners-australia) or the wider [2026 DJI buyer guide](/blog/best-drone-for-sale-australia-2026-buyers-guide).',
      { h2: 'Quick answers by use case' },
      { ul: [
        '**Travel:** the Flip folds small and the Neo 2 fits in a pocket, so both travel well. The Mini 4 Pro adds the best image quality.',
        '**Vlogging and social video:** the Neo 2 is the easiest for follow-me shots, and the Flip gives a better camera for the same style of content.',
        '**Family events:** the Neo 2 is light, simple and quick to launch.',
        '**First drone:** the Neo 2 or Flip, depending on budget and how much you want to grow into.',
        '**Colour grading:** the Mini 4 Pro, because of its 10-bit D-Log M and HLG profiles.'
      ] },
      { h2: 'Accessories to add' },
      'Every one of these drones is better with a spare battery. See [DJI Neo 2 batteries](/product/dji-neo-2-intelligent-flight-battery), [DJI Flip batteries](/product/dji-flip-intelligent-flight-battery) and [DJI Mini 4 Pro batteries](/product/dji-mini-4-pro-intelligent-flight-battery), plus the matching [charging hubs](/category/batteries/charging-hubs) and [propellers](/category/batteries/propellers-and-guards).',
      { faq: [
        { q: 'Is the DJI Flip better than the DJI Neo 2?', a: 'The DJI Flip has a larger sensor and longer flight time, so it suits travel and vlogging. The DJI Neo 2 is smaller, lighter and easier to fly, so it suits quick selfies and follow-me shots.' },
        { q: 'Is the DJI Mini 4 Pro worth the extra cost over the Flip?', a: 'If you want 4K at up to 100 fps, 10-bit colour profiles, omnidirectional sensing and up to 34 minutes of flight, yes. If you mainly want a foldable travel drone, the Flip is enough.' },
        { q: 'Do these drones need registration in Australia?', a: 'Recreational flying under 250 g does not need CASA registration, but standard operating conditions still apply. Check the CASA website for current rules.' }
      ] }
    ],
    targetKeywords: ['dji neo 2', 'dji flip', 'dji mini 4 pro', 'dji flip vs neo']
  },
  {
    id: 'post-6',
    slug: 'thermal-drones-australia-guide',
    intent: 'commercial',
    title: 'Thermal Drones in Australia: How to Choose a Thermal Imaging Drone',
    metaTitle: 'Thermal Drones Australia: Buyer Guide (2026)',
    metaDescription: 'How to choose a thermal drone in Australia: camera resolution, sensitivity and field of view, plus DJI Matrice and Mavic thermal models and FLIR payloads.',
    subtitle: 'What to look for in a thermal imaging camera for a drone, and how the DJI and FLIR options compare.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-27',
    readTime: '8 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Thermal Drones', 'Thermal Imaging', 'Enterprise Drones'],
    excerpt: 'A thermal drone adds a thermal imaging camera to a flying platform. We explain the specifications that matter and compare the DJI and FLIR options we supply.',
    image: '/images/blog-thermal-drones.webp',
    imageAlt: 'DJI Matrice 4 Thermal and DJI Mavic 3 Thermal enterprise drones',
    relatedProducts: ['dji-matrice-4-thermal', 'dji-mavic-3-thermal', 'dji-matrice-30t', 'dji-zenmuse-h30t'],
    content: [
      'A thermal drone carries a thermal imaging camera that shows heat instead of visible light. That makes it useful for roof and solar inspections, electrical and mechanical checks, search and rescue, firefighting support and wildlife surveys. This guide explains what to look for in a thermal imaging camera for a drone and how the options we supply compare. A drone with thermal camera capability is a serious tool, so it pays to match the specifications to the job.',
      { h2: 'Which thermal drone should you buy in Australia?' },
      'For most thermal drones Australia buyers compare, the [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal) is the best all-round choice for inspection and public-safety work. The [DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal) is the most portable, and the [DJI Matrice 30T](/product/dji-matrice-30t) is the most rugged at IP55. If you already own a compatible aircraft, a [Zenmuse H30T](/product/dji-zenmuse-h30t) payload may be the cheaper route.',
      { h2: 'How a thermal imaging camera works' },
      'A thermal camera measures infrared radiation and turns the differences into an image. Hotter objects appear brighter or in different colours, so you can spot a failing solar cell, a hot connection or a person in low light without relying on visible detail. Many enterprise thermal drones pair the thermal camera with a wide visual camera and a zoom camera, so you can see the heat and the context together.',
      { h2: 'What drone thermal imaging is used for' },
      { ul: [
        '**Roof and solar inspections:** hot spots show failing cells and damaged panels from the air.',
        '**Electrical and mechanical checks:** overheating connections, motors and bearings stand out before they fail.',
        '**Search and rescue:** a person or animal shows up in low light or thick cover.',
        '**Firefighting support:** see hot spots and fire edges through smoke.',
        '**Wildlife surveys:** count and locate animals without disturbing them.'
      ] },
      'Not sure whether you need a thermal drone or just a thermal camera? Read our guide to [thermal cameras vs thermal drones](/blog/thermal-camera-vs-thermal-drone-infrared-inspections).',
      { h2: 'The specifications that matter' },
      { ul: [
        '**Thermal resolution.** More pixels mean more detail at distance. Most enterprise thermal drones use a 640×512 sensor; high-end payloads reach 1280×1024.',
        '**Thermal sensitivity (NETD).** A lower number, such as 50 mK or less, picks out smaller temperature differences.',
        '**Field of view and lens.** A wider view covers more ground; a narrower one reaches further.',
        '**Radiometric measurement.** Radiometric cameras report temperatures, which matters for inspection reports.',
        '**Visual and zoom cameras.** You still need a good visual camera to identify what you are looking at.',
        '**Flight time and weather rating.** Long flights and an ingress protection rating keep you working.'
      ] },
      { h2: 'Thermal drones compared' },
      { table: {
        head: ['Model', 'Thermal camera', 'Other cameras', 'Flight time', 'Weight'],
        rows: [
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640×512, 12 µm, uncooled VOx, 50 mK or less, 45° DFOV', '48 MP wide, 48 MP medium tele, 48 MP tele, laser rangefinder', 'Up to 49 min', '1,219 g'],
          ['[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '640×512 uncooled VOx', '48 MP wide, 12 MP tele with 56× hybrid zoom', 'Up to 45 min', '920 g'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640×512, 12 µm, radiometric', '12 MP wide, 48 MP zoom (5 to 16× optical)', 'Up to 41 min', 'About 3.77 kg with batteries'],
          ['[Zenmuse H30T payload](/product/dji-zenmuse-h30t)', '1280×1024 uncooled VOx, 30 fps, -20 to 1,600°C', '48 MP wide, 40 MP zoom (34× optical), laser rangefinder 3 to 3,000 m', 'Depends on aircraft', '920 g']
        ]
      } },
      { h2: 'DJI Matrice 4 Thermal: the compact all-rounder' },
      'The [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal) combines a 640×512 thermal camera with three 48 MP visual cameras and a laser rangefinder in a 1,219 g aircraft with up to 49 minutes of flight. For most inspection and public-safety teams it is the best balance of capability and portability. The [DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) and the [Worry-Free Flagship Combo](/product/dji-matrice-4td-worry-free-flagship-combo) add batteries and care coverage.',
      { h2: 'DJI Mavic 3 Thermal: portable and lighter' },
      'The [DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal) is the most portable thermal option. It folds small, weighs 920 g and offers up to 45 minutes of flight with a 640×512 thermal camera and a 56× hybrid zoom tele camera. See the [Worry-Free Plus Combo](/product/dji-mavic-3t-worry-free-plus-combo) for the full kit.',
      { h2: 'DJI Matrice 30T: weather-resistant and rugged' },
      'The [DJI Matrice 30T](/product/dji-matrice-30t) is rated IP55, carries a radiometric 640×512 thermal camera with a 12 MP wide camera and a 48 MP zoom camera, and flies for up to 41 minutes. It suits teams that work in poor conditions and need a rugged platform.',
      { h2: 'Zenmuse H30T and FLIR payloads' },
      'If you already own a compatible aircraft, a thermal payload can be the cheaper route. The [Zenmuse H30T](/product/dji-zenmuse-h30t) has a 1280×1024 thermal sensor and a wide temperature range of -20°C to 1,600°C. The [FLIR Vue TZ20](/product/flir-vue-tz20) carries dual FLIR Boson 640×512 sensors with 95° wide and 18° narrow fields of view for compatible Matrice aircraft. Browse all [thermal cameras](/category/cameras-sensors/thermal-cameras) and [Zenmuse cameras](/category/cameras-sensors/dji-zenmuse-cameras).',
      { h2: 'Automate repeat inspections' },
      'For repeat missions, a drone dock launches, lands and charges the aircraft without an operator on site. See the [DJI Dock 3](/product/dji-dock-3) and the [Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) under [DJI Dock](/category/enterprise-drones/dji-dock).',
      { h2: 'CASA and getting a quote' },
      'Flying commercially may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and use our [quote form](/quote) to tell us your use case. We will confirm the right combo, payloads, batteries and training. Read our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) for the wider range.',
      { faq: [
        { q: 'What is the best thermal drone in Australia?', a: 'It depends on the job. The DJI Matrice 4 Thermal is the best all-rounder for most inspection and public-safety work, the DJI Mavic 3 Thermal is the most portable, and the DJI Matrice 30T is the most rugged.' },
        { q: 'What is drone thermal imaging used for?', a: 'Common uses are roof and solar inspections, electrical and mechanical checks, search and rescue, firefighting support and wildlife surveys. A thermal camera shows heat, so problems and people stand out even in low light.' },
        { q: 'Do I need CASA approval to fly a thermal drone?', a: 'Flying commercially may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check the CASA website, and use our quote form if you want help choosing a compliant setup.' },
        { q: 'What resolution should a thermal camera have?', a: 'Most enterprise thermal drones use 640×512, which is enough for most inspections. A 1280×1024 sensor, such as the Zenmuse H30T, gives more detail at distance.' },
        { q: 'Can I add a thermal camera to my own drone?', a: 'Only if your aircraft supports the payload. The Zenmuse H30T and FLIR Vue TZ20 are made for specific Matrice aircraft, so tell us your drone and we will confirm compatibility.' }
      ] }
    ],
    targetKeywords: ['thermal drone', 'thermal drones', 'thermal drones australia', 'drone thermal imaging', 'thermal imaging camera', 'drone with thermal camera']
  },
  {
    id: 'post-7',
    slug: 'dji-avata-360-vs-avata-2-fpv-drone-guide',
    intent: 'commercial',
    title: 'DJI Avata 360 vs DJI Avata 2: Which FPV Drone Should You Buy?',
    metaTitle: `DJI Avata 2 vs Avata 360: Which FPV Drone to Buy?`,
    metaDescription: `DJI Avata 2 (from $649) vs Avata 360 (from $799) compared: camera, weight, flight time, goggles and combos, plus how to build a DJI FPV kit in Australia.`,
    subtitle: 'Two cinewhoop-style DJI FPV drones with very different cameras. Here is how to choose, and what goes in the box.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '6 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Avata 360', 'DJI Avata 2', 'FPV Drones'],
    excerpt: 'The DJI Avata 360 records 8K 360-degree video, while the DJI Avata 2 is a proven 4K FPV drone. We compare them and explain the goggles and combo choices.',
    image: '/images/blog-avata-fpv.webp',
    imageAlt: 'DJI Avata 360, DJI Avata 2 and DJI Goggles 3 FPV kit',
    relatedProducts: ['dji-avata-360-drone-only', 'dji-avata-2-drone-only', 'dji-goggles-3', 'dji-avata-360-fly-more-combo-dji-rc-2'],
    content: [
      'DJI makes two of the most approachable FPV drones for pilots who want immersive flying without building a drone from parts. The DJI Avata 2 is a 4K FPV drone with a proven design, and the new DJI Avata 360 captures 360-degree video that you can reframe after the flight. This guide compares them and explains the goggles and combos.',
      { h2: 'DJI Avata 360 vs DJI Avata 2 at a glance' },
      { table: {
        head: ['Specification', 'DJI Avata 360', 'DJI Avata 2'],
        rows: [
          ['Camera', '360-degree dual-lens, 8K at 60 fps with HDR', '1/1.3-inch CMOS, 12 MP'],
          ['Video', '8K 360-degree, reframe after flight', '4K up to 60 fps'],
          ['Take-off weight', 'About 455 g', 'About 377 g'],
          ['Max flight time', 'About 23 min', 'Up to 23 min'],
          ['Obstacle sensing', 'Omnidirectional', 'See product page'],
          ['Drone-only kit', 'No controller included', 'No controller included']
        ]
      } },
      { h2: 'DJI Avata 360: shoot first, frame later' },
      'The [DJI Avata 360](/product/dji-avata-360-drone-only) records 360-degree video with a dual-lens system at 8K and 60 fps with HDR. Because the camera captures everything around the drone, you choose the angle in editing, so you never miss the shot. It weighs about 455 g, offers about 23 minutes of flight and senses obstacles in every direction. Choose it if you want creative freedom, action footage and 360-degree content.',
      'It comes in several kits: the [drone only](/product/dji-avata-360-drone-only), with the [DJI RC 2](/product/dji-avata-360-dji-rc-2), and as a [Fly More Combo](/product/dji-avata-360-fly-more-combo-dji-rc-2) with extra batteries and a charging hub.',
      { h2: 'DJI Avata 2: the 4K FPV drone' },
      'The [DJI Avata 2](/product/dji-avata-2-drone-only) has a 1/1.3-inch CMOS sensor and records 4K up to 60 fps. At about 377 g it is lighter than the Avata 360, with up to 23 minutes of flight. Choose it if you want a straightforward FPV drone, standard framed 4K footage and a lower weight. See the [Fly Smart Combo](/product/dji-avata-2-fly-smart-combo-single-battery) and [Fly More Combo](/product/dji-avata-2-fly-more-combo-three-batteries) kits.',
      { h2: 'Goggles and controllers' },
      'FPV flying needs goggles. The [DJI Goggles 3](/product/dji-goggles-3) are the premium option, while the [DJI Goggles N3](/product/dji-goggles-n3) is the lower-cost choice. Add a [DJI RC Motion 3](/product/dji-rc-motion-3) for intuitive motion flying or the [FPV Remote Controller 3](/product/dji-fpv-remote-controller-3) for stick control. Browse [controllers and goggles](/category/batteries/controllers-and-goggles).',
      { h2: 'Building your DJI FPV drone kit' },
      { ul: [
        'The drone: [Avata 360](/product/dji-avata-360-drone-only) or [Avata 2](/product/dji-avata-2-drone-only).',
        'Goggles: [Goggles 3](/product/dji-goggles-3) or [Goggles N3](/product/dji-goggles-n3).',
        'A controller: motion or stick, depending on how you want to fly.',
        'Spare batteries: [Avata 360 battery](/product/dji-avata-360-intelligent-flight-battery) or [Avata 2 battery](/product/dji-avata-2-intelligent-flight-battery).',
        'A [charging hub](/product/dji-avata-360-charging-hub) and spare [propellers](/product/dji-avata-360-propellers).'
      ] },
      { h2: 'Getting started with FPV flying' },
      'If you are new to FPV, begin in a wide, open area with no people or obstacles, fly in daylight and light wind, and keep your first sessions short. Learn how the return-to-home function behaves before you rely on it, start in the gentlest flight mode and move to more manual modes only when you are comfortable. A spotter beside you keeps the drone in sight while you wear the goggles.',
      { h2: 'Editing 360-degree footage from the Avata 360' },
      'The Avata 360 records everything around the drone, so the edit is where you choose the shot. You can reframe the clip, pick the angle and the direction of travel, and export standard flat video for social platforms, or keep the full 360-degree view for immersive content. Plan extra time and storage for editing, because 8K footage creates large files.',
      { h2: 'Which kit should you choose?' },
      { ul: [
        '**First FPV drone:** an Avata 2 [Fly Smart Combo](/product/dji-avata-2-fly-smart-combo-single-battery) with goggles and a motion controller.',
        '**Content creator:** the [Avata 360 Fly More Combo](/product/dji-avata-360-fly-more-combo-dji-rc-2) for extra batteries and the reframing freedom.',
        '**Already own goggles:** the drone-only kits keep the price down.'
      ] },
      { h2: 'Flying FPV safely in Australia' },
      'FPV pilots wear goggles, so you cannot see the whole sky. CASA expects you to keep the drone within visual line of sight, which in practice means flying with a spotter beside you who watches the aircraft. Follow the standard operating conditions on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our [FAQ](/faq) for the main rules.',
      { faq: [
        { q: 'Is the DJI Avata 360 better than the DJI Avata 2?', a: 'They suit different jobs. The Avata 360 records 8K 360-degree video you can reframe, while the Avata 2 records 4K up to 60 fps in a lighter body. Choose by the footage you want.' },
        { q: 'Do I need goggles to fly the DJI Avata?', a: 'The goggles give the immersive FPV view and are part of the intended experience. Buy a combo that includes them, or add DJI Goggles 3 or Goggles N3 separately.' },
        { q: 'How long do the Avata drones fly?', a: 'Both offer about 23 minutes per battery, so a Fly More Combo with spare batteries is worth considering.' }
      ] }
    ],
    targetKeywords: ['dji avata 360', 'dji avata 2', 'dji goggles 3', 'fpv drone kit']
  },
  {
    id: 'post-8',
    slug: 'lidar-vs-photogrammetry-drone-mapping-australia',
    intent: 'informational',
    title: 'LiDAR vs Photogrammetry: Choosing a Drone Mapping Payload in Australia',
    metaTitle: 'LiDAR vs Photogrammetry for Drone Mapping',
    metaDescription: 'LiDAR vs photogrammetry for drone mapping in Australia: when to use the DJI Zenmuse L2 LiDAR or the Zenmuse P1, and how each affects time and accuracy.',
    subtitle: 'When a LiDAR drone is the right tool, when a photogrammetry camera does the job, and the payloads we supply.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '7 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['LiDAR Drones', 'Drone Mapping', 'Surveying'],
    excerpt: 'LiDAR and photogrammetry both map the ground from a drone, but they work differently. We compare the Zenmuse L2 and Zenmuse P1 and explain how to choose.',
    image: '/images/blog-lidar-mapping.webp',
    imageAlt: 'DJI Zenmuse L2 LiDAR and Zenmuse P1 mapping payloads',
    relatedProducts: ['dji-zenmuse-l2-lidar', 'dji-zenmuse-p1', 'dji-matrice-4-enterprise', 'dji-phantom-4-pro-rtk-se'],
    content: [
      'Drone mapping turns flights into measurable data. Two methods dominate: photogrammetry, which builds 3D models from overlapping photos, and LiDAR, which fires laser pulses and measures how long they take to return. Each has strengths, and the right choice depends on the terrain, the accuracy you need and the time you have. This guide compares them and the payloads we supply, whether you are comparing LiDAR drones, a drone LiDAR scanner for your own aircraft or a service for drone mapping near me.',
      { h2: 'How photogrammetry works' },
      'A photogrammetry drone takes hundreds or thousands of overlapping photos. Software such as DJI Terra matches features across the images and builds an orthomosaic, a point cloud and a 3D model. It captures colour and texture, works well on open ground and produces excellent visual deliverables. It struggles under dense vegetation, because the camera cannot see the ground through the canopy. Shadows and moving objects such as vehicles or water can also introduce errors, so plan flights for even light.',
      { h2: 'How LiDAR works' },
      'A LiDAR payload sends out laser pulses and records the returns. Because some pulses pass through gaps in vegetation, a LiDAR drone can capture the ground beneath trees, which makes it the better choice for forested or heavily vegetated sites. It also works in low light and produces dense point clouds quickly. Because LiDAR is an active sensor, it does not depend on sunlight, so you can fly early in the morning or late in the afternoon when photogrammetry struggles with long shadows.',
      { h2: 'LiDAR vs photogrammetry compared' },
      { table: {
        head: ['Factor', 'LiDAR drone', 'Photogrammetry drone'],
        rows: [
          ['Under vegetation', 'Captures ground through gaps in the canopy', 'Cannot see the ground under dense cover'],
          ['Colour and texture', 'Needs an RGB camera to colourise points', 'Excellent, from the photos themselves'],
          ['Processing time', 'Usually faster', 'Longer, because of image matching'],
          ['Low light', 'Works well', 'Needs good lighting'],
          ['Typical use', 'Forestry, corridors, topographic survey, complex terrain', 'Orthomosaics, volumes, construction progress, inspection models']
        ]
      } },
      { h2: 'DJI Zenmuse L2: LiDAR plus a camera' },
      'The [DJI Zenmuse L2](/product/dji-zenmuse-l2-lidar) combines a LiDAR module with a 4/3 CMOS 20 MP RGB camera. It records up to 240,000 points per second on a single return, supports up to five returns, detects objects up to 450 m away at 50% reflectivity and delivers about 4 cm vertical and 5 cm horizontal accuracy. It weighs about 905 g. See the [Worry-Free Basic Combo](/product/zenmuse-l2-worry-free-basic-combo) and [Worry-Free Plus Combo](/product/zenmuse-l2-worry-free-plus-combo) for the full kit, or browse [LiDAR sensors](/category/cameras-sensors/lidar-sensors).',
      { h2: 'DJI Zenmuse P1: a full-frame mapping camera' },
      'The [DJI Zenmuse P1](/product/dji-zenmuse-p1) is a 45 MP full-frame camera with 24 mm, 35 mm and 50 mm f/2.8 lens options, a global mechanical shutter up to 1/2000 s and a minimum photo interval of 0.7 seconds. It is made for the Matrice 350 RTK and Matrice 300 RTK. Choose it when you need photogrammetry-grade imagery over open ground.',
      { h2: 'Other mapping options' },
      'Smaller teams can start with the [DJI Phantom 4 Pro RTK SE](/product/dji-phantom-4-pro-rtk-se) for RTK photogrammetry, or the [DJI Matrice 4 Enterprise](/product/dji-matrice-4-enterprise) for a portable multi-camera platform. Add an [RTK base station](/product/d-rtk-3-multifunctional-station) for centimetre-level positioning, and consider [Livox LiDAR](/product/livox-avia-lidar) modules for custom integrations.',
      { h2: 'Planning a mapping flight' },
      'Good data starts with good planning. Set enough image overlap for photogrammetry, fly a consistent height above the ground, and use ground control points or RTK corrections so you can check accuracy against known positions. For LiDAR, plan the line spacing and flight speed to reach the point density you need, and calibrate the sensor as the manufacturer directs before each job.',
      { h2: 'Software and deliverables' },
      'The flight is only half the work. Processing software turns raw data into the outputs clients ask for: point clouds, digital elevation models, orthomosaics, contour maps and volume reports. DJI Terra processes data from DJI payloads, and many surveyors also export to third-party software. Allow for a computer with enough memory and a good graphics card, because large mapping datasets are heavy.',
      { h2: 'Which should you choose?' },
      { ul: [
        '**Choose LiDAR** if you survey forested, steep or complex ground, or you need ground points under vegetation.',
        '**Choose photogrammetry** if you work on open sites and need coloured orthomosaics and models.',
        '**Choose both** if you map for a living: many survey teams carry a LiDAR payload and a mapping camera.'
      ] },
      'Not sure which fits your work? Use the [quote form](/quote) and tell us your site type and deliverables. For more on our enterprise range, read the [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide).',
      { faq: [
        { q: 'Is LiDAR better than photogrammetry?', a: 'Neither is better in every case. LiDAR captures ground under vegetation and processes quickly, while photogrammetry gives coloured, textured models over open ground.' },
        { q: 'What is the DJI Zenmuse L2 used for?', a: 'It is a LiDAR payload with an RGB camera, used for topographic survey, forestry, corridor mapping and any site where you need ground points through vegetation.' },
        { q: 'Do I need an RTK base station for drone mapping?', a: 'For survey-grade accuracy, RTK positioning helps a lot. A base station or network RTK reduces the number of ground control points you need.' }
      ] }
    ],
    targetKeywords: ['lidar drone', 'lidar drones', 'drone lidar scanner', 'drone mapping near me']
  },
  {
    id: 'post-9',
    slug: 'dji-drone-battery-charger-propeller-guide',
    intent: 'informational',
    title: 'DJI Drone Batteries, Chargers and Propellers: A Practical Guide',
    metaTitle: 'DJI Drone Batteries, Chargers & Propellers Guide',
    metaDescription: 'How to choose and look after DJI drone batteries, charging hubs and propellers in Australia: matching parts to your model, spares and safe charging.',
    subtitle: 'Matching the right parts to your aircraft, what to carry on a flying day and how to look after your gear.',
    date: 'October 2026',
    dateISO: '2026-10-18',
    modifiedISO: '2026-10-18',
    readTime: '6 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Batteries', 'Charging Hubs', 'Drone Accessories'],
    excerpt: 'Batteries, chargers and propellers are the parts you will buy most. Here is how to pick the right ones for your DJI drone and keep them in good shape.',
    image: '/images/blog-battery-guide.webp',
    imageAlt: 'DJI intelligent flight battery and charging hub accessories',
    relatedProducts: ['dji-air-3s-intelligent-flight-battery', 'dji-mini-5-pro-two-way-charging-hub', 'dji-mavic-4-pro-intelligent-flight-battery', 'dji-mini-4-pro-intelligent-flight-battery'],
    content: [
      'Batteries, chargers and propellers are the parts every drone pilot ends up buying, and getting the right ones saves money, time and frustration. This guide explains how to match parts to your DJI aircraft, what to carry on a flying day and how to look after your gear. Whether you need a DJI drone battery, a DJI battery for another model, a DJI charger or other drone parts, the same rules apply. Browse the full range of [DJI drone batteries](/category/batteries/drone-batteries), [charging hubs](/category/batteries/charging-hubs) and [propellers](/category/batteries/propellers-and-guards).',
      { h2: 'Match the battery to your exact model' },
      'DJI intelligent flight batteries are built for specific aircraft, and parts for one family are not always interchangeable. Always check the model name on the product page against your drone. Some batteries fit several aircraft in a series. For example, the [Mini 4 Pro and Mini 3 series battery plus](/product/dji-mini-4-pro-mini-3-series-intelligent-flight-battery-plus) covers more than one model.',
      { table: {
        head: ['Your drone', 'Battery', 'Charging hub'],
        rows: [
          ['DJI Mini 5 Pro', '[Mini 5 Pro battery](/product/dji-mini-5-pro-intelligent-flight-battery)', '[Two-way hub](/product/dji-mini-5-pro-two-way-charging-hub)'],
          ['DJI Mini 4 Pro', '[Mini 4 Pro battery](/product/dji-mini-4-pro-intelligent-flight-battery)', '[Two-way hub](/product/dji-mini-4-pro-mini-3-series-two-way-charging-hub)'],
          ['DJI Air 3S', '[Air 3S battery](/product/dji-air-3s-intelligent-flight-battery)', '[Air 3 series hub](/product/dji-air-3-series-battery-charging-hub)'],
          ['DJI Mavic 4 Pro', '[Mavic 4 Pro battery](/product/dji-mavic-4-pro-intelligent-flight-battery)', '[Parallel hub](/product/dji-mavic-4-pro-parallel-charging-hub)'],
          ['DJI Mavic 3 series', '[Mavic 3 series battery](/product/dji-mavic-3-series-intelligent-flight-battery)', '[100W hub](/product/dji-mavic-3-series-100w-battery-charging-hub)'],
          ['DJI Flip', '[Flip battery](/product/dji-flip-intelligent-flight-battery)', '[Parallel hub](/product/dji-flip-parallel-charging-hub)'],
          ['DJI Neo 2', '[Neo 2 battery](/product/dji-neo-2-intelligent-flight-battery)', '[Two-way hub](/product/dji-neo-2-two-way-charging-hub)']
        ]
      } },
      { h2: 'How many batteries do you need?' },
      'One battery is a short outing. Most pilots find two or three the practical minimum, so a Fly More Combo is usually the better value. Enterprise pilots working a full day should carry enough batteries to finish the job without waiting for a recharge. A charging hub lets you charge several batteries at once, either in sequence or in parallel depending on the model.',
      { h2: 'Charging habits that protect batteries' },
      { ul: [
        'Charge on a hard, non-flammable surface and never leave batteries charging unattended.',
        'Use the charger or hub made for your battery, with the power adapter DJI specifies. The [DJI 65W portable charger](/product/dji-65w-portable-charger) is a popular travel option.',
        'Let a hot battery cool before charging it, and a cold battery warm to room temperature before flying.',
        'Do not use a battery that is swollen, damaged or leaking.',
        'Follow the manufacturer\'s storage guidance when you will not fly for a while.'
      ] },
      { h2: 'Storing and carrying batteries' },
      'Keep batteries in a cool, dry place away from heat and direct sun, and carry them in a protective case so the terminals cannot short against metal objects. If you travel with lithium batteries, check the airline and CASA dangerous-goods rules before you pack, because limits apply to what you can take in carry-on and checked luggage. A fire-resistant charging bag is a sensible extra for home charging.',
      { h2: 'Signs a battery needs replacing' },
      { ul: [
        'The battery is swollen, dented or damaged in any way.',
        'Flight time has dropped sharply compared with when it was new.',
        'The aircraft or app shows battery warnings or cell errors.',
        'The battery will not charge or loses charge quickly while idle.'
      ] },
      'Retire a battery that shows any of these signs and dispose of it at a proper battery recycling point, not in household waste.',
      { h2: 'Why genuine parts matter' },
      'Genuine DJI batteries, hubs and propellers are made to work with your aircraft\'s power management and flight controller. All items in our batteries and accessories range are genuine DJI parts, listed with the aircraft they fit, so you can order with confidence.',
      { h2: 'Propellers: replace them as a set' },
      'Propellers wear and chip. Check them for nicks, cracks or bends before every flight, and replace them as a matching set rather than one at a time. Keep a spare set in your bag. Browse the [propellers and guards](/category/batteries/propellers-and-guards) for your aircraft, such as the [Air 3 series low-noise propellers](/product/dji-air-3-series-low-noise-propellers) or the [Mavic 4 Pro propellers](/product/dji-mavic-4-pro-propellers). A [propeller guard](/product/dji-air-3-series-propeller-guard) is worth fitting if you fly near obstacles.',
      { h2: 'Other accessories worth carrying' },
      'ND filters help you keep a cinematic shutter speed in bright light, and wide-angle lenses add flexibility. See [filters and lenses](/category/batteries/filters-and-lenses). A good [bag or cover](/category/batteries/bags-and-covers) protects the drone in transit, and a [controller](/category/batteries/controllers-and-goggles) spare saves a flying day if one fails.',
      { h2: 'Going further' },
      'New to flying? Start with our [guide to the best drones for beginners](/blog/best-drones-for-beginners-australia) and the [2026 DJI buyer guide](/blog/best-drone-for-sale-australia-2026-buyers-guide). Not sure which parts fit your drone? [Contact us](/contact) with your model and we will point you to the right ones.',
      { faq: [
        { q: 'Can I use a Mavic 3 battery in a Mavic 4 Pro?', a: 'No. Parts for different models are not interchangeable. Always match the battery to the exact aircraft model named on the product page.' },
        { q: 'How many DJI batteries should I buy?', a: 'Two or three is a practical minimum for regular flying, which is why a Fly More Combo is usually the better value than a drone on its own.' },
        { q: 'Should I replace propellers one at a time?', a: 'Replace them as a matching set. Mixing worn and new propellers can affect balance and flight behaviour.' }
      ] }
    ],
    targetKeywords: ['dji battery', 'dji charger', 'dji drone battery', 'drone parts']
  },
  {
    id: 'post-1',
    image: '/images/blog-drone-buyers-guide.webp',
    imageAlt: 'Aerial view of a coastline at sunset, the kind of shot a camera drone captures',
    slug: 'best-drone-for-sale-australia-2026-buyers-guide',
    intent: 'commercial',
    title: '2026 Australian Guide: Finding the Best DJI Drone for Sale',
    metaTitle: 'Best DJI Drone for Sale in Australia: 2026 Guide',
    metaDescription: 'Compare DJI Mini, Air, Mavic and Inspire drones for sale in Australia: camera, weight and flight time side by side, plus accessories and CASA basics.',
    subtitle: 'From sub-250 g travel drones to professional cinema platforms: how to choose between DJI Mini, Air, Mavic and Inspire.',
    date: 'September 2026',
    dateISO: '2026-09-01',
    modifiedISO: '2026-10-18',
    readTime: '8 min read',
    author: 'Flight Operations Team',
    tags: ['Drone Sales', 'DJI Drones For Sale', 'CASA Regulations'],
    excerpt: 'Searching for the best DJI drone for sale in Australia? Here is how the Mini, Air, Mavic and Inspire families differ, and what to check before you buy.',
    relatedProducts: ['dji-mini-5-pro-dji-rc-n3', 'dji-air-3s-dji-rc-n3', 'dji-mavic-4-pro-dji-rc-2', 'dji-mavic-3-pro'],
    content: [
      'DJI\'s consumer and prosumer range covers a wide spread of budgets and uses. Choosing the right model comes down to where you will fly, what you will shoot and how much you want to carry. This guide compares the DJI drones for sale in Australia from our range and explains what to check before you buy. Our drone sales range runs from sub-250 g travel drones to cinema platforms.',
      { h2: 'How to choose a DJI drone' },
      { ul: [
        '**Portability.** Sub-250 g drones fit in a jacket pocket and are the easiest to take anywhere.',
        '**Camera.** Sensor size drives image quality, especially at dusk and in shadows.',
        '**Flight time.** Longer flights mean fewer battery swaps.',
        '**Controller.** Phone-based controllers are cheaper; screen controllers such as the RC 2 are easier in bright light.',
        '**Your use.** Casual flying, content creation and commercial work call for different aircraft.'
      ] },
      { h2: 'DJI drones compared' },
      { table: {
        head: ['Model', 'Camera', 'Max flight time', 'Weight'],
        rows: [
          ['[DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3)', '1-inch CMOS, 50 MP', 'Up to 36 min', 'Under 250 g'],
          ['[DJI Mini 4 Pro](/product/dji-mini-4-pro)', '1/1.3-inch CMOS, 48 MP', 'Up to 34 min', 'Under 249 g'],
          ['[DJI Air 3S](/product/dji-air-3s-dji-rc-n3)', '1-inch 50 MP wide plus 48 MP medium tele', 'Up to 45 min', 'About 724 g'],
          ['[DJI Mavic 3 Pro](/product/dji-mavic-3-pro)', '4/3 20 MP wide plus two tele cameras', 'Up to 43 min', '958 g'],
          ['[DJI Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2)', '100 MP 4/3 Hasselblad plus two tele cameras', 'Up to 51 min', 'See product page'],
          ['[DJI Inspire 3](/product/dji-inspire-3)', 'Full-frame Zenmuse X9-8K Air', 'Up to 28 min', 'See product page']
        ]
      } },
      { h2: 'Compact drones: DJI Mini 5 Pro, Mini 4 Pro and Mini 4K' },
      'The [DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3) is the compact flagship. A 1-inch 50 MP sensor, up to 36 minutes of flight, omnidirectional obstacle sensing and a weight under 250 g make it the best small camera drone we stock. The [DJI Mini 4 Pro](/product/dji-mini-4-pro) remains an excellent value choice, and the [DJI Mini 4K](/product/dji-mini-4k) is the budget entry. All three sit under the CASA recreational exemption for drones below 250 g, though standard operating conditions still apply (120 m maximum height, visual line of sight, and 30 m from other people).',
      { h2: 'Easy flyers: DJI Lito, Neo 2 and Flip' },
      'If you want something simple, the [DJI Lito 1](/product/dji-lito-1) and [Lito X1](/product/dji-lito-x1) are easy, sub-249 g camera drones. The [DJI Neo 2](/product/dji-neo-2-drone-only) is a palm-sized selfie drone and the [DJI Flip](/product/dji-flip-dji-rc-n3) is a foldable travel drone. Read the [DJI Neo 2 vs Flip vs Mini 4 Pro comparison](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) or our guide to the [best drones for beginners](/blog/best-drones-for-beginners-australia).',
      { h2: 'Step up: DJI Air 3S' },
      'The [DJI Air 3S](/product/dji-air-3s-dji-rc-n3) steps up to a larger foldable airframe with a 1-inch 50 MP wide camera and a 48 MP medium tele camera, 4K video up to 120 fps and up to 45 minutes of flight. It is offered as a standalone drone, a Fly More Combo and a combo with the RC 2 controller, and suits creators who want more capability than a Mini while staying portable.',
      { h2: 'Professional cameras: Mavic 4 Pro, Mavic 3 Pro and Inspire 3' },
      'For professional photo and video work, the [DJI Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2) leads with a 100 MP 4/3 Hasselblad main camera, two tele cameras, a rotating gimbal and up to 51 minutes of flight. The [DJI Mavic 3 Pro](/product/dji-mavic-3-pro) remains a flagship triple-camera option, available standalone or as a Fly More Combo with the DJI RC or RC Pro. At the top end, the [DJI Inspire 3](/product/dji-inspire-3) is a dedicated cinema platform with a full-frame 8K camera and dual-operator control.',
      { h2: 'Accessories worth buying' },
      'Spare [batteries](/category/batteries/drone-batteries), a [charging hub](/category/batteries/charging-hubs), [ND filters and lenses](/category/batteries/filters-and-lenses) and a [bag](/category/batteries/bags-and-covers) turn a drone into a complete kit. Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to match parts to your model.',
      { h2: 'Before you buy' },
      'Consider battery needs, controller preference, how portable the kit needs to be and whether your flying is recreational or commercial. Commercial operators have extra CASA obligations; see our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide). If you are unsure which package suits you, [contact us](/contact) and we will help you choose.',
      { faq: [
        { q: 'Which DJI drone is best for most people?', a: 'For most buyers the DJI Mini 4 Pro or DJI Mini 5 Pro offers the best mix of image quality, portability and price. The DJI Air 3S suits creators who want a bigger camera and longer flights.' },
        { q: 'Do I need a licence to fly a DJI drone in Australia?', a: 'Recreational flying under 250 g does not need registration or a licence, but standard operating conditions apply. Commercial work has additional CASA requirements, so check the CASA website.' },
        { q: 'Do your drones come with Australian warranty and free shipping?', a: 'Yes. Our drones are genuine Australian stock with Australian Consumer Law guarantees, and shipping is free across Australia.' }
      ] }
    ],
    targetKeywords: ['drone for sale', 'drone sales', 'dji drones for sale', 'dji drone for sale', 'dji mini 4 pro', 'dji mavic 3 pro']
  },
  {
    id: 'post-2',
    image: '/images/blog-enterprise-drones-guide.webp',
    imageAlt: 'Enterprise drone flying over open land on an inspection job',
    slug: 'enterprise-drones-matrice-mavic-3-enterprise-guide',
    intent: 'commercial',
    title: 'Enterprise Drones in Australia: Matrice, Mavic 3 Enterprise and Phantom 4',
    metaTitle: 'Enterprise Drones Australia: Matrice & Mavic 3 Guide',
    metaDescription: 'How DJI Matrice, Mavic 3 Enterprise, Phantom 4 and Dock systems suit inspection, mapping, surveying and thermal work in Australia, with a comparison table.',
    subtitle: 'Choosing an enterprise drone for inspection, mapping, surveying and thermal work.',
    date: 'August 2026',
    dateISO: '2026-08-01',
    modifiedISO: '2026-10-18',
    readTime: '8 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Enterprise Drones', 'Thermal Drones', 'Surveying'],
    excerpt: 'A practical overview of the DJI Matrice, Mavic 3 Enterprise and Phantom 4 lines and the kinds of work each is typically chosen for.',
    relatedProducts: ['dji-matrice-4-enterprise', 'dji-matrice-4-thermal', 'dji-mavic-3-enterprise', 'dji-dock-3'],
    content: [
      'Enterprise drones are built for repeatable, data-driven work rather than casual flying: asset inspection, mapping, surveying, public safety and agriculture. This guide compares the DJI enterprise drones we supply in Australia and the kinds of work each is chosen for. Whether you want a thermal imaging drone, commercial drones for sale for surveying, or you have been searching for drone mapping near me, owning the aircraft may make sense if you have repeat work.',
      { h2: 'What makes a drone an enterprise drone?' },
      { ul: [
        '**Payloads.** Wide, zoom and thermal cameras, a laser rangefinder or interchangeable payloads.',
        '**Positioning.** RTK and survey-grade positioning for repeatable, accurate data.',
        '**Durability and support.** Weather ratings, care plans and spare parts.',
        '**Workflow.** Software, docks and fleet tools that fit into an operation.'
      ] },
      { h2: 'Enterprise drones compared' },
      { table: {
        head: ['Model', 'Key cameras', 'Max flight time', 'Weight', 'Typical use'],
        rows: [
          ['[DJI Matrice 4 Enterprise](/product/dji-matrice-4-enterprise)', '4/3 CMOS 20 MP wide, two 48 MP tele cameras, laser rangefinder', 'Up to 49 min', '1,219 g', 'Inspection, mapping, public safety'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640×512 thermal plus three 48 MP cameras', 'Up to 49 min', '1,219 g', 'Thermal inspection, search and rescue'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640×512 radiometric thermal, 48 MP zoom', 'Up to 41 min', 'About 3.77 kg', 'Rugged, IP55 operations'],
          ['[DJI Mavic 3 Enterprise](/product/dji-mavic-3-enterprise)', '4/3 20 MP mechanical shutter, 56× hybrid zoom tele', 'Up to 45 min', '915 g', 'Portable mapping and inspection'],
          ['[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '640×512 thermal, 56× zoom', 'Up to 45 min', '920 g', 'Portable thermal work'],
          ['[DJI Phantom 4 Pro RTK SE](/product/dji-phantom-4-pro-rtk-se)', '1-inch 20 MP, centimetre-level RTK', 'About 30 min', '1,391 g', 'Surveying and mapping']
        ]
      } },
      { h2: 'DJI Matrice 4 series: the modern all-rounder' },
      'The DJI Matrice 4 series is the first stop for most new enterprise buyers. The [Matrice 4 Enterprise](/product/dji-matrice-4-enterprise) pairs a 4/3 CMOS mechanical-shutter wide camera with 48 MP medium tele and tele cameras and a laser rangefinder, while the [Matrice 4 Thermal](/product/dji-matrice-4-thermal) adds a 640×512 thermal camera. Both fly for up to 49 minutes at 1,219 g. See the [Matrice 4E Plus Combo](/product/dji-matrice-4e-plus-combo) and [Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo), and browse all [DJI Matrice](/category/enterprise-drones/dji-matrice) aircraft.',
      { h2: 'DJI Matrice 30 series: built for tough conditions' },
      'The [DJI Matrice 30](/product/dji-matrice-30) and [Matrice 30T](/product/dji-matrice-30t) are aimed at industrial and public-safety operators who work in rain, dust and wind. The 30T carries a radiometric thermal camera and is rated IP55. Both are available in Worry-Free combos, for example the [Matrice 30T Worry-Free Plus Combo](/product/matrice-30t-worry-free-plus-combo).',
      { h2: 'DJI Mavic 3 Enterprise family: compact and portable' },
      'The [DJI Mavic 3 Enterprise](/product/dji-mavic-3-enterprise) and [Mavic 3 Thermal](/product/dji-mavic-3-thermal) offer a portable enterprise platform that folds small and flies for up to 45 minutes. The [Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) adds four 5 MP multispectral cameras for crop monitoring and agronomy. See the whole [Mavic 3 Enterprise range](/category/enterprise-drones/dji-mavic-3-enterprise).',
      { h2: 'DJI Phantom 4: surveying workhorse' },
      'The [DJI Phantom 4 Pro RTK SE](/product/dji-phantom-4-pro-rtk-se) and the [Phantom 4 Multispectral](/product/dji-phantom-4-multispectral) remain a common choice for surveying and precision agriculture workflows, with centimetre-level RTK positioning and a mechanical shutter on the survey model.',
      { h2: 'Automate with DJI Dock' },
      'For repeat inspections, the [DJI Dock 3](/product/dji-dock-3) launches, lands and recharges an aircraft without an operator on site. It works with the Matrice 4D series, and the [Dock 3 Survey Package](/product/dji-dock-3-survey-package) and [Thermal Package](/product/dji-dock-3-thermal-package) bundle the dock for mapping and thermal work. See [DJI Dock](/category/enterprise-drones/dji-dock) and the older [DJI Dock 2](/product/dji-dock-2).',
      { h2: 'Payloads, batteries and accessories' },
      'Enterprise aircraft are only as useful as their kit. Browse [enterprise accessories](/category/enterprise-drones/enterprise-accessories), [Zenmuse cameras](/category/cameras-sensors/dji-zenmuse-cameras), [LiDAR sensors](/category/cameras-sensors/lidar-sensors) and [thermal cameras](/category/cameras-sensors/thermal-cameras). Read our [thermal drones guide](/blog/thermal-drones-australia-guide) and the [LiDAR vs photogrammetry guide](/blog/lidar-vs-photogrammetry-drone-mapping-australia) to choose a payload.',
      { h2: 'How to compare enterprise drones' },
      'Start with the job, not the aircraft. Decide whether you need thermal imaging, a laser rangefinder, a mapping camera or a payload you can swap. Then compare positioning accuracy (RTK), weather rating, flight time, the software you will use and the care and training that come with the aircraft. Tell us the work you do and the sites you fly, and we will match the aircraft, payloads and accessories to your operation.',
      { h2: 'CASA obligations and getting a quote' },
      'Stock and lead times can change quickly on enterprise models. Use our [quote form](/quote) to confirm availability, discuss accessories such as spare batteries and talk through the best fit for your operation. Commercial operators should also confirm their CASA obligations, including accreditation or a ReOC where required, before flying for hire.',
      { faq: [
        { q: 'What is the best DJI enterprise drone for inspection?', a: 'For most teams the DJI Matrice 4 Enterprise or Matrice 4 Thermal is the best all-rounder. The Matrice 30T suits harsh conditions, and the Mavic 3 Enterprise suits portable work.' },
        { q: 'Do I need a licence to fly an enterprise drone commercially?', a: 'Commercial flying has CASA requirements that depend on the aircraft weight and the work. Check the CASA website, and tell us your use case so we can point you to the right setup.' },
        { q: 'How do I buy an enterprise drone from you?', a: 'Enterprise products are supplied by quote. Send a quote request, and a specialist replies with pricing, availability and delivery, usually within one business day.' }
      ] }
    ],
    targetKeywords: ['dji enterprise drones', 'dji matrice', 'thermal drone', 'thermal imaging drone', 'commercial drones for sale', 'drone mapping near me']
  },
  {
    id: 'post-3',
    image: '/images/blog-agricultural-spraying-guide.webp',
    imageAlt: 'Agricultural spraying drone flying over crop rows',
    slug: 'agricultural-spraying-drones-australia-guide',
    intent: 'commercial',
    title: 'Agricultural Spraying Drones in Australia: What to Know Before You Buy',
    metaTitle: 'Agricultural Spraying Drones Australia: Buyer Guide',
    metaDescription: 'How to choose an agricultural spraying drone in Australia: DJI Agras T25P, T50, T70P and T100 compared, plus batteries, generators and CASA rules.',
    subtitle: 'An introduction to spraying drones and multispectral crop monitoring for Australian farms.',
    date: 'July 2026',
    dateISO: '2026-07-01',
    modifiedISO: '2026-10-18',
    readTime: '8 min read',
    author: 'Agriculture Systems Lead',
    tags: ['Spraying Drones', 'Agriculture', 'Multispectral'],
    excerpt: 'Spraying drones are changing how Australian growers cover paddocks and orchards. Here is what to consider when choosing a system.',
    relatedProducts: ['dji-agras-t25p', 'dji-agras-t50', 'dji-agras-t70p', 'dji-agras-t100'],
    content: [
      'Agricultural spraying drones let growers apply products to crops quickly and accurately, including on terrain that is difficult to cover with ground machinery. This guide explains what to look for in a spraying drone and compares the DJI Agras range with the other systems we supply in Australia. Whether you are shopping for a compact spray drone, a heavy-lift drone sprayer or a full crop spraying drone system, the same checks apply across agricultural drones.',
      { h2: 'What to consider before you buy a spraying drone' },
      { ul: [
        '**Tank size and flow rate.** Larger tanks mean fewer refills but a bigger investment. Match the system to the size of your property.',
        '**Spreading as well as spraying.** Some Agras models also spread granules such as seed and fertiliser.',
        '**Batteries and charging.** Heavy aircraft need several large batteries and a fast charging plan.',
        '**A generator.** In the field, a generator keeps chargers running.',
        '**Operator workflow.** Foldable aircraft that one person can carry suit smaller farms; larger aircraft suit contractors.'
      ] },
      { h2: 'DJI Agras spraying drones compared' },
      { table: {
        head: ['Model', 'Spraying', 'Spreading', 'Notes'],
        rows: [
          ['[DJI Agras T25P](/product/dji-agras-t25p)', '20 kg payload', '25 kg payload', 'Foldable, solo-operator friendly, quad-antenna O4'],
          ['[DJI Agras T50](/product/dji-agras-t50)', '40 kg payload, 16 L/min', '50 kg payload, 108 kg/min', '2 km O3 transmission'],
          ['[DJI Agras T70P](/product/dji-agras-t70p)', '70 L tank, 30 L/min', '100 L tank, 400 kg/min', 'Lifting up to 65 kg, max operation speed 20 m/s'],
          ['[DJI Agras T100](/product/dji-agras-t100)', '100 L tank, 30 L/min (40 L/min with optional 4 nozzles)', '150 L tank, 400 kg/min', 'Lifting up to 100 kg, LiDAR, penta-vision and radar sensing']
        ]
      } },
      { h2: 'DJI Agras T25P: the compact choice' },
      'The [DJI Agras T25P](/product/dji-agras-t25p) is foldable and designed so a single operator can handle it, with a 20 kg spraying payload and a 25 kg spreading payload. It suits smaller properties, orchards and operators who need to move between blocks.',
      { h2: 'DJI Agras T50 and T70P: the mid-size workhorses' },
      'The [DJI Agras T50](/product/dji-agras-t50) carries a 40 kg spraying payload and a 50 kg spreading payload, and the [T70P](/product/dji-agras-t70p) steps up to a 70 L spraying tank and a 100 L spreading tank. Both suit farms and contractors who cover larger areas. Add the [T50 atomized sprinkler package](/product/dji-agras-t50-atomized-sprinkler-package) or [T50 spreading system](/product/dji-agras-t50-spreading-system) to match your work.',
      { h2: 'DJI Agras T100: the heavy-lift flagship' },
      'The [DJI Agras T100](/product/dji-agras-t100) has a 100 L spraying tank, a 150 L spreading tank and can lift up to 100 kg, with LiDAR, penta-vision and millimetre-wave radar for obstacle sensing. It is aimed at large operations and contractors. See the [T100 mist nozzle package](/product/dji-agras-t100-mist-nozzle-package) and [T100 lift system kit](/product/dji-agras-t100-lift-system-kit).',
      { h2: 'XAG and BROUAV sprayers' },
      'We also supply the [XAG P30](/product/xag-p30-spraying-drone) and the BROUAV [D30L-8](/product/brouav-d30l-8-spraying-drone), [D52L-8](/product/brouav-d52l-8-spraying-drone) and [D72L-8](/product/brouav-d72l-8-spraying-drone) spraying drones for operators who want a different size or price point. Browse all [spraying drones](/category/spraying-drones/spraying-drones).',
      { h2: 'Batteries, chargers, generators and nozzles' },
      'Plan the whole system, not just the aircraft. See the Agras [batteries](/product/dji-agras-db1560-intelligent-flight-battery), the [C10000 power supply](/product/dji-c10000-intelligent-power-supply), the [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator) and the [spraying drone accessories](/category/spraying-drones/spraying-drone-accessories). Our [quote form](/quote) bundles batteries, a charger and set-up for your property.',
      { h2: 'Monitor crops with multispectral drones' },
      'Spraying is more effective when you know where to spray. The [DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) and the [multispectral cameras](/category/cameras-sensors/multispectral-cameras) we supply measure crop health from the air, and [DJI Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) processes the data into prescription maps.',
      { h2: 'Set-up, training and running costs' },
      'Budget beyond the aircraft. A spraying system needs several batteries, a fast charger or power supply, a generator for the field, spare nozzles or spreader parts and time to learn the flight and spray settings. Train every operator before the busy season, keep a maintenance routine for nozzles, pumps and filters, and plan for battery wear over time. We can quote the aircraft, batteries, charger and set-up together so the whole system works from day one.',
      { h2: 'A quick buying checklist' },
      { ul: [
        'How many hectares do you need to cover in a day, and how often?',
        'Do you spray only, or also spread seed and fertiliser?',
        'How many batteries and what charging power do you need to keep working?',
        'Will one person carry and run the aircraft, or is a crew available?',
        'Do you hold the CASA accreditation and chemical licences your work requires?'
      ] },
      { h2: 'CASA and chemical-use rules' },
      'Commercial spraying has CASA requirements and chemical-use rules that vary by state. Confirm your accreditation, any ReOC you need and local regulations before you operate, and keep records of what you apply. For broader enterprise options, read our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide).',
      { faq: [
        { q: 'Which DJI Agras is best for a small farm?', a: 'The DJI Agras T25P is the most practical for small properties and orchards: it folds and one operator can handle it. Larger farms and contractors move up to the T50, T70P or T100.' },
        { q: 'Can the DJI Agras spread seed and fertiliser?', a: 'Yes. The Agras range carries spreading systems for granules as well as spraying systems, with payload sizes that depend on the model.' },
        { q: 'What else do I need besides the drone?', a: 'Plan for spare batteries, a fast charger or power supply, a generator for the field and the right nozzle or spreader package. We can quote the whole system.' }
      ] }
    ],
    targetKeywords: ['agricultural drones', 'spray drone', 'drone sprayer', 'crop spraying drone', 'multispectral drone']
  },
  {
    id: 'post-17',
    slug: 'buy-dji-mini-5-pro-australia-combos-prices',
    intent: 'transactional',
    title: `Buy the DJI Mini 5 Pro in Australia: Which Combo to Choose, What It Costs and What to Add`,
    metaTitle: `Buy DJI Mini 5 Pro in Australia: Prices From $1,119`,
    metaDescription: `Buying the DJI Mini 5 Pro in Australia? Compare the RC-N3, Fly More and Plus combos with AUD prices from $1,119, spare batteries and free express shipping.`,
    subtitle: `Four ways to buy the 1-inch, sub-250 g camera drone, with the price of each and the spares worth ordering on day one.`,
    date: 'October 2026',
    dateISO: '2026-10-27',
    modifiedISO: '2026-10-27',
    readTime: '8 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Mini 5 Pro', 'Buying Guide', 'Camera Drones'],
    excerpt: `The DJI Mini 5 Pro comes in four packages from $1,119 to $1,799. We compare each combo, explain the 250 g rule and list the spares to buy with it.`,
    image: '/images/blog-mini-5-pro-buying-guide.webp',
    imageAlt: `DJI Mini 5 Pro with the RC-N3 and the Fly More Combo with the DJI RC 2`,
    relatedProducts: ['dji-mini-5-pro-dji-rc-n3', 'dji-mini-5-pro-fly-more-combo-dji-rc-n3', 'dji-mini-5-pro-fly-more-combo-dji-rc-2', 'dji-mini-5-pro-fly-more-combo-plus-dji-rc-2'],
    content: [
      `The DJI Mini 5 Pro is the drone most Australians ask for when they want near-professional pictures from an aircraft that is easy to carry and simple to fly. Searches for the DJI Mini Pro 5 and the wider DJI Mini Pro range show how many buyers are comparing it right now, and the decision is not only about the aircraft. There are four ways to buy it, each at a different price, and the right one depends on how long you fly, what screen you want and how much you care about staying under 250 g. This guide explains what each package includes, what it costs in Australian dollars, which pilot it suits and which spares to add so the first shoot does not end early. You can check the specifications in this guide on DJI's official page for the [DJI Mini 5 Pro](https://www.dji.com/global/mini-5-pro/specs).`,
      { h2: `What you are buying: the DJI Mini 5 Pro at a glance` },
      `The Mini 5 Pro puts a 1-inch CMOS sensor with 50 MP of resolution into a drone that weighs under 250 g, about 249.9 g with the standard battery. That is the largest camera DJI has fitted to a Mini, and for a miniature drone it is a serious amount of image quality. The lens is a 24 mm equivalent with an f/1.8 aperture and an 84° field of view, flight time is up to 36 minutes on the standard battery, and obstacle sensing is omnidirectional, so the aircraft watches in every direction while it flies. Those four facts explain why it sells to travellers, landscape shooters, real estate photographers and social creators alike.`,
      { ul: [
        `**Camera:** 1-inch CMOS, 50 MP, 24 mm equivalent, f/1.8, 84° field of view.`,
        `**Weight:** under 250 g (about 249.9 g) with the standard battery.`,
        `**Flight time:** up to 36 minutes per standard battery.`,
        `**Safety:** omnidirectional obstacle sensing.`,
        `**Controllers:** the DJI RC-N3, which uses your smartphone as the screen, or the DJI RC 2, which has a screen built in.`
      ] },
      { h2: `Four ways to buy the DJI Mini 5 Pro` },
      `Every package uses the same aircraft and the same camera. What changes is the controller, the amount of battery power and the price. Here is how the four packages compare.`,
      { table: {
        head: ['Package', 'Controller', 'What is included', 'Price (AUD)'],
        rows: [
          ['[DJI Mini 5 Pro (RC-N3)](/product/dji-mini-5-pro-dji-rc-n3)', 'DJI RC-N3, uses your smartphone', 'Aircraft and controller', '$1,119'],
          ['[Fly More Combo (RC-N3)](/product/dji-mini-5-pro-fly-more-combo-dji-rc-n3)', 'DJI RC-N3, uses your smartphone', 'Extra batteries and a charging hub', '$1,419'],
          ['[Fly More Combo (RC 2)](/product/dji-mini-5-pro-fly-more-combo-dji-rc-2)', 'DJI RC 2 with built-in screen', 'Extra batteries and a charging hub', '$1,699'],
          ['[Fly More Combo Plus (RC 2)](/product/dji-mini-5-pro-fly-more-combo-plus-dji-rc-2)', 'DJI RC 2 with built-in screen', 'Plus batteries and a charging hub', '$1,799']
        ]
      } },
      { h2: `DJI Mini 5 Pro with the RC-N3: the lowest entry price` },
      `At $1,119 the [DJI Mini 5 Pro with the RC-N3](/product/dji-mini-5-pro-dji-rc-n3) is the cheapest way to own the 1-inch sensor. The RC-N3 is a compact controller without a screen of its own, so it clips your smartphone in place and uses it as the display. That keeps the price down and the kit small, and it works well if you already carry a modern phone and mostly fly short sessions. Choose this package if you want to try the Mini 5 Pro without paying for extras, and plan to add a spare battery later. Be realistic about your flying, though: one battery gives up to 36 minutes, and most shoots use several flights.`,
      { h2: `Fly More Combo with the RC-N3: the value pick` },
      `For most buyers the [Fly More Combo with the RC-N3](/product/dji-mini-5-pro-fly-more-combo-dji-rc-n3) at $1,419 is the sensible choice. It adds extra Intelligent Flight Batteries and a charging hub to the same aircraft and controller, so one outing can cover several flights. For $300 more than the basic package you get the spare power and the hub in a single order, instead of buying them one at a time. It suits holiday filmmakers, wedding guests, property photographers and anyone who flies for hours rather than minutes but is happy to use a phone as the screen.`,
      { h2: `Fly More Combo with the RC 2: the complete kit` },
      `If you would rather not mount a phone, the [Fly More Combo with the DJI RC 2](/product/dji-mini-5-pro-fly-more-combo-dji-rc-2) is the complete kit at $1,699. The RC 2 has a bright screen built in, so there is no phone to clip on, no app to open on your own device and a faster set-up in the field. You still get the extra batteries and the charging hub. Shoppers often search for this package as the DJI Mini Pro 5 or the DJI 5 Mini Pro, and this is the full-specification version of that drone. It is the best choice for pilots who want the longest day of flying from a sub-250 g aircraft with the simplest controls.`,
      { h2: `Fly More Combo Plus: maximum flight time, with a catch` },
      `The [Fly More Combo Plus with the RC 2](/product/dji-mini-5-pro-fly-more-combo-plus-dji-rc-2) costs $1,799 and swaps the standard batteries for the larger Plus batteries. They extend flight time, which makes this the endurance package. The catch is weight. With the Plus battery fitted, the Mini 5 Pro is heavier than 250 g, so it no longer sits in the sub-250 g class that makes the standard version so simple to fly. If you buy this package, check the current CASA rules for aircraft over 250 g before your first flight. If staying under 250 g matters more than a longer flight, choose one of the standard-battery combos instead.`,
      { h2: `Which DJI Mini 5 Pro package should you buy?` },
      { ul: [
        `**You want the lowest price:** the [Mini 5 Pro with the RC-N3](/product/dji-mini-5-pro-dji-rc-n3) at $1,119.`,
        `**You fly for hours and use your phone:** the [Fly More Combo with the RC-N3](/product/dji-mini-5-pro-fly-more-combo-dji-rc-n3) at $1,419.`,
        `**You want no phone and a bright screen:** the [Fly More Combo with the RC 2](/product/dji-mini-5-pro-fly-more-combo-dji-rc-2) at $1,699.`,
        `**You want maximum endurance and accept the weight:** the [Fly More Combo Plus](/product/dji-mini-5-pro-fly-more-combo-plus-dji-rc-2) at $1,799.`
      ] },
      { h2: `DJI Mini 5 Pro vs DJI Mini 4 Pro` },
      `Many buyers are also looking at the previous model, so here is a straight comparison. Both are sub-250 g camera drones with omnidirectional obstacle sensing, but the newer aircraft carries a bigger sensor and flies a little longer.`,
      { table: {
        head: ['', 'DJI Mini 5 Pro', 'DJI Mini 4 Pro'],
        rows: [
          ['Camera sensor', '1-inch CMOS, 50 MP', '1/1.3-inch CMOS, 48 MP'],
          ['Flight time per standard battery', 'Up to 36 min', 'Up to 34 min'],
          ['Weight class', 'Under 250 g', 'Under 249 g'],
          ['Obstacle sensing', 'Omnidirectional', 'Omnidirectional'],
          ['Fly More Combo', '[From $1,419](/product/dji-mini-5-pro-fly-more-combo-dji-rc-n3)', '[$1,449](/product/dji-mini-4-pro-fly-more-combo)']
        ]
      } },
      `If image quality is your priority, the larger 1-inch sensor is the reason to choose the Mini 5 Pro. If you already own a Mini 4 Pro, the batteries and accessories are listed separately for each aircraft, so check the model name before you order. Our guide to [choosing between the Neo 2, Flip and Mini 4 Pro](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) explains how the smaller models fit together.`,
      { h2: `What to add: the spares worth ordering with your Mini 5 Pro` },
      `A few small purchases make the difference between a good first day and a short one. Every item below is listed for the Mini 5 Pro, so you can order it alongside the aircraft.`,
      { ul: [
        `[DJI Mini 5 Pro Intelligent Flight Battery](/product/dji-mini-5-pro-intelligent-flight-battery), $99: the standard battery that keeps the aircraft under 250 g with up to 36 minutes of flight.`,
        `[DJI Mini 5 Pro Intelligent Flight Battery Plus](/product/dji-mini-5-pro-intelligent-flight-battery-plus), $149: the higher-capacity pack for longer flights, with the weight trade-off described above.`,
        `[DJI Mini 5 Pro Two-Way Charging Hub](/product/dji-mini-5-pro-two-way-charging-hub), $69: charges several batteries from one input, useful if you buy the basic package and add spares.`,
        `[DJI Mini 5 Pro Propeller](/product/dji-mini-5-pro-propeller), $19: a spare set keeps the drone flying after a prop strike.`
      ] },
      `Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after them so they last.`,
      { h2: `Flying under 250 g in Australia` },
      `The reason the standard Mini 5 Pro is so popular is its weight. At under 250 g it stays in the lightweight class that keeps CASA compliance simple, which is why travellers and first-time owners favour it. That advantage depends on the standard battery. The moment you fit the Plus battery, the aircraft is heavier than 250 g and different rules may apply. Rules also change, so always confirm the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our [FAQ on registering a drone and CASA rules](/faq) before you fly. If you plan to use the drone for paid work, check whether you need accreditation as well.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you are unsure which package suits you, send us a message through the [quote form](/quote) and a specialist will recommend one.`,
      { faq: [
        { q: `How much does the DJI Mini 5 Pro cost in Australia?`, a: `Packages start at $1,119 for the DJI Mini 5 Pro with the RC-N3 controller. The Fly More Combo with the RC-N3 is $1,419, the Fly More Combo with the RC 2 is $1,699 and the Fly More Combo Plus is $1,799. All prices are in Australian dollars with free express shipping.` },
        { q: `Is the DJI Mini 5 Pro under 250 g?`, a: `Yes, with the standard battery it weighs under 250 g, about 249.9 g. With the larger Plus battery fitted the aircraft is heavier than 250 g, so check the current CASA rules before flying.` },
        { q: `Which DJI Mini 5 Pro combo is best?`, a: `For most buyers the Fly More Combo with the RC-N3 is the best value because it adds extra batteries and a charging hub. Choose the RC 2 version if you want a built-in screen instead of using your phone.` },
        { q: `What is the difference between the RC-N3 and the RC 2?`, a: `The RC-N3 uses your smartphone as the screen and keeps the price lower. The RC 2 has a bright screen built in, so you do not need a phone and set-up is faster.` },
        { q: `How long does the DJI Mini 5 Pro fly?`, a: `Up to 36 minutes per standard battery. The Plus battery extends flight time further but makes the aircraft heavier than 250 g.` }
      ] }
    ],
    targetKeywords: ['dji mini pro 5', 'dji mini pro', 'miniature drone', 'dji 5 mini pro']
  },
  {
    id: 'post-18',
    slug: 'buy-dji-mavic-australia-mavic-4-pro-vs-mavic-3-pro',
    intent: 'transactional',
    title: `Buy a DJI Mavic in Australia: Mavic 4 Pro vs Mavic 3 Pro vs Mavic 3 Enterprise`,
    metaTitle: `Buy a DJI Mavic in Australia: 4 Pro vs 3 Pro`,
    metaDescription: `Which DJI Mavic should you buy in Australia? Compare the Mavic 4 Pro, Mavic 3 Pro and Mavic 3 Enterprise with AUD prices, Fly More combos and spares.`,
    subtitle: `The folding Pro-class drones compared by camera, flight time and price, with the combo and spares we recommend for each job.`,
    date: 'October 2026',
    dateISO: '2026-10-27',
    modifiedISO: '2026-10-27',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Mavic', 'Mavic 4 Pro', 'Mavic 3 Pro', 'Buying Guide'],
    excerpt: `Choosing a DJI Mavic in Australia? We compare the Mavic 4 Pro, Mavic 3 Pro and Mavic 3 Enterprise by camera, flight time and price, and explain each Fly More combo.`,
    image: '/images/blog-mavic-buying-guide.webp',
    imageAlt: `DJI Mavic 4 Pro, DJI Mavic 3 Pro and DJI Mavic 3 Enterprise drones`,
    relatedProducts: ['dji-mavic-4-pro-dji-rc-2', 'dji-mavic-4-pro-fly-more-combo-dji-rc-2', 'dji-mavic-3-pro', 'dji-mavic-3-pro-fly-more-combo-dji-rc-pro', 'dji-mavic-3-enterprise'],
    content: [
      `If you are shopping for a DJI Mavic in Australia, the range is wider than it looks. The folding Mavic aircraft are DJI's choice for people who need professional image quality in a drone they can carry in a bag, and there are now three distinct families: the flagship Mavic 4 Pro, the proven Mavic 3 Pro and the commercial Mavic 3 Enterprise. Buyers often search for a Mavic Pro drone or a DJI Mavic Pro 4, and the current Pro-class aircraft in our range are the Mavic 4 Pro and the Mavic 3 Pro. This guide compares them by camera, flight time and price in Australian dollars, explains the Fly More combos and lists the spares to add, so you can order the right kit first time. You can check the specifications in this guide on DJI's official page for the [DJI Mavic 4 Pro](https://www.dji.com/global/mavic-4-pro/specs).`,
      { h2: `The DJI Mavic range at a glance` },
      `All three families fold for travel, carry more than one camera and offer long flight times. They differ in what the cameras do, how long the aircraft stays up and who the aircraft is built for. This table shows the three base aircraft side by side.`,
      { table: {
        head: ['', 'Mavic 4 Pro', 'Mavic 3 Pro', 'Mavic 3 Enterprise'],
        rows: [
          ['Main camera', '100 MP 4/3 CMOS Hasselblad', '20 MP 4/3 CMOS Hasselblad', '20 MP 4/3 CMOS, mechanical shutter'],
          ['Other cameras', '48 MP 70 mm and 50 MP 168 mm tele', '48 MP 70 mm and 12 MP 166 mm tele', '12 MP tele with 56x hybrid zoom'],
          ['Max flight time', 'Up to 51 min', 'Up to 43 min', 'Up to 45 min'],
          ['Best for', 'Cinema, real estate, tourism', 'Film, real estate, photography', 'Mapping, survey, inspection'],
          ['Price (AUD)', '[From $3,099](/product/dji-mavic-4-pro-dji-rc-2)', '[From $2,789](/product/dji-mavic-3-pro)', '[From $6,049](/product/dji-mavic-3-enterprise)']
        ]
      } },
      { h2: `DJI Mavic 4 Pro: the flagship` },
      `The [DJI Mavic 4 Pro with the DJI RC 2](/product/dji-mavic-4-pro-dji-rc-2) is DJI's flagship triple-camera drone, priced at $3,099. It is built around a 100 MP Hasselblad main camera with a 4/3 sensor, plus a 48 MP 70 mm medium tele and a 50 MP 168 mm tele, and it mounts them on a 360-degree rotating Infinity Gimbal. Omnidirectional obstacle sensing is joined by front-facing LiDAR for low-light work, flight time reaches 51 minutes and the transmission range is up to 30 km. It is often searched for as the DJI Mavic Pro 4. Choose it if you are a professional creator, filmmaker or real estate and tourism shooter who needs cinema-grade imaging from a folding drone and wants the longest flight time in the range.`,
      { h2: `DJI Mavic 3 Pro: the proven triple-camera workhorse` },
      `The [DJI Mavic 3 Pro](/product/dji-mavic-3-pro) at $2,789 is the aircraft to buy if the Mavic 4 Pro is more than you need or more than you want to spend. It carries a Hasselblad 4/3 main camera with 20 MP, a 48 MP medium tele at 70 mm equivalent and a 12 MP tele at 166 mm equivalent, so you get three focal lengths without changing payloads. It records 5.1K video up to 50 fps and 4K up to 120 fps, flies for up to 43 minutes, weighs 958 g and has omnidirectional obstacle sensing. For film-makers, property photographers and commercial shooters it remains a very capable tool, and it costs $310 less than the Mavic 4 Pro.`,
      { h2: `DJI Mavic 3 Enterprise: the mapping and inspection model` },
      `The [DJI Mavic 3 Enterprise](/product/dji-mavic-3-enterprise) at $6,049 is a different kind of drone. It is built for mapping, surveying and inspection, and it pairs a 4/3 CMOS wide camera with a mechanical shutter and a 56x hybrid zoom camera. The mechanical shutter gives distortion-free images for mapping, flight time reaches 45 minutes, it weighs 915 g and it supports an optional RTK module. Small survey firms, councils and inspection contractors choose it for fast set-up and strong mapping accuracy. If you want protection included, the [Mavic 3E Worry-Free Plus Combo](/product/dji-mavic-3e-worry-free-plus-combo) at $8,279 adds DJI Care Enterprise Plus, and the [DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal) at $8,249 adds a 640×512 thermal camera for roof, solar, fire and rescue work. Our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) covers the commercial options in more depth.`,
      { h2: `DJI Mavic Fly More combos explained` },
      `If you search for a DJI Mavic Fly More kit, you are looking for the bundle that adds extra batteries, a charging hub and a bag to the aircraft. For a professional shoot that is the practical way to buy, because a single battery rarely covers a full day. These are the combos we stock for the Pro-class aircraft.`,
      { table: {
        head: ['Combo', 'Controller', 'What is included', 'Price (AUD)'],
        rows: [
          ['[Mavic 4 Pro Fly More Combo](/product/dji-mavic-4-pro-fly-more-combo-dji-rc-2)', 'DJI RC 2', 'Extra batteries, charging hub, shoulder bag', '$4,039'],
          ['[Mavic 3 Pro Fly More Combo (DJI RC)](/product/dji-mavic-3-pro-fly-more-combo-dji-rc)', 'DJI RC with built-in screen', 'Three batteries, charging hub, shoulder bag', '$3,779'],
          ['[Mavic 3 Pro Fly More Combo (DJI RC Pro)](/product/dji-mavic-3-pro-fly-more-combo-dji-rc-pro)', 'DJI RC Pro, high-bright screen', 'Three batteries, charging hub, shoulder bag', '$4,799'],
          ['[Mavic 3 Pro Cine Premium Combo](/product/dji-mavic-3-pro-cine-premium-combo-dji-rc-pro)', 'DJI RC Pro', 'Fly More kit, fast internal storage, Apple ProRes recording', '$6,239']
        ]
      } },
      `The [Mavic 4 Pro Fly More Combo](/product/dji-mavic-4-pro-fly-more-combo-dji-rc-2) makes the 51-minute flagship practical for full-day commercial and film work. For the Mavic 3 Pro, the choice between the DJI RC and the DJI RC Pro comes down to screen brightness: the RC Pro has the clearest screen in direct sun, which matters on outdoor shoots. The Cine Premium Combo adds fast internal storage and Apple ProRes recording for post-production workflows, so it suits film-makers and agencies rather than casual shooters.`,
      { h2: `Which DJI Mavic should you buy?` },
      { ul: [
        `**You want the best image quality and longest flight time:** the [Mavic 4 Pro](/product/dji-mavic-4-pro-dji-rc-2), or the [Fly More Combo](/product/dji-mavic-4-pro-fly-more-combo-dji-rc-2) for full days.`,
        `**You want three cameras at a lower price:** the [Mavic 3 Pro](/product/dji-mavic-3-pro).`,
        `**You shoot in strong sun and need a bright screen:** the [Mavic 3 Pro Fly More Combo with the DJI RC Pro](/product/dji-mavic-3-pro-fly-more-combo-dji-rc-pro).`,
        `**You record cinema footage:** the [Mavic 3 Pro Cine Premium Combo](/product/dji-mavic-3-pro-cine-premium-combo-dji-rc-pro).`,
        `**You map, survey or inspect:** the [Mavic 3 Enterprise](/product/dji-mavic-3-enterprise), with the thermal [Mavic 3T](/product/dji-mavic-3t-worry-free-basic-combo) if you need heat imaging.`
      ] },
      { h2: `Spares to buy with your DJI Mavic` },
      `Order the spares with the aircraft and your first big job will not be limited by one battery. For the Mavic 4 Pro, the [Intelligent Flight Battery](/product/dji-mavic-4-pro-intelligent-flight-battery) is $279, the [Parallel Charging Hub](/product/dji-mavic-4-pro-parallel-charging-hub) is $159 and a spare set of [propellers](/product/dji-mavic-4-pro-propellers) is $29. For the Mavic 3 series, the [Intelligent Flight Battery](/product/dji-mavic-3-series-intelligent-flight-battery) is a 5,000 mAh, 77 Wh pack at $219, and the [100 W charging hub](/product/dji-mavic-3-series-100w-battery-charging-hub) charges several together. You can also add [low-noise propellers](/product/dji-mavic-3-series-low-noise-propellers), an [ND filter set](/product/dji-mavic-3-pro-nd-filter-set-nd8-16-32-64) for video, a [wide-angle lens](/product/dji-mavic-3-pro-wide-angle-lens) or a [storage cover](/product/dji-mavic-3-pro-storage-cover). Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after them.`,
      { h2: `Choosing the right controller` },
      `Controllers change how the drone feels to fly. The DJI RC 2 is the screen controller supplied with the Mavic 4 Pro. The DJI RC and the DJI RC Pro both have built-in screens, and the RC Pro adds a high-bright display for outdoor work. If you are unsure which suits you, our [guide to DJI controllers](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) compares the RC-N3, RC 2 and RC Pro, and the [DJI RC Pro Remote Controller](/product/dji-rc-pro-remote-controller) is listed on its own if you already own an aircraft.`,
      { h2: `Buying a DJI Mavic from Drones for Sale` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For commercial or fleet purchases, use the [quote form](/quote) and we will confirm the aircraft, combo and payload that suit your work. Read our [FAQ on registering a drone and CASA rules](/faq) before your first flight, and check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) for the current requirements for the aircraft and the work you plan to do.`,
      { faq: [
        { q: `Which DJI Mavic is best to buy in Australia?`, a: `The Mavic 4 Pro is the best for image quality and flight time, with a 100 MP main camera and up to 51 minutes in the air. The Mavic 3 Pro is the better value for three cameras, and the Mavic 3 Enterprise is the right choice for mapping and inspection.` },
        { q: `What is the difference between the Mavic 4 Pro and the Mavic 3 Pro?`, a: `The Mavic 4 Pro has a 100 MP main camera against 20 MP, a 360-degree rotating gimbal, front-facing LiDAR, up to 51 minutes of flight time and up to 30 km transmission. The Mavic 3 Pro flies up to 43 minutes and costs less.` },
        { q: `What does the DJI Mavic Fly More Combo include?`, a: `It adds extra Intelligent Flight Batteries, a charging hub and a shoulder bag to the aircraft, so you can fly through a full day. The exact controller depends on the version you choose.` },
        { q: `Is there a DJI Mavic Pro 4?`, a: `People often search for the DJI Mavic Pro 4, and the aircraft they mean is the DJI Mavic 4 Pro, the current flagship in the Mavic range.` },
        { q: `Can I pay for a DJI Mavic with PayID or crypto?`, a: `Yes. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. We email the payment details after you place the order.` }
      ] }
    ],
    targetKeywords: ['dji mavic fly more', 'mavic pro drone', 'dji mavic pro 4', 'dji mavic']
  },
  {
    id: 'post-19',
    slug: 'buy-drone-heat-camera-australia-thermal-drones-payloads',
    intent: 'transactional',
    title: `Buy a Drone Heat Camera in Australia: Thermal Drones and Payloads Compared by Price`,
    metaTitle: `Drone Heat Camera Australia: What to Buy and Price`,
    metaDescription: `Buying a drone heat camera in Australia? Compare thermal drones and payloads with AUD prices, from the Mavic 3 Thermal to the Zenmuse H30T.`,
    subtitle: `Every thermal option we supply, from a portable Mavic 3 Thermal to a 1280×1024 Zenmuse payload, with what each costs and who it suits.`,
    date: 'October 2026',
    dateISO: '2026-10-27',
    modifiedISO: '2026-10-27',
    readTime: '9 min read',
    author: 'Enterprise Systems Specialist',
    tags: ['Thermal Drones', 'Thermal Cameras', 'Enterprise Drones', 'Buying Guide'],
    excerpt: `A drone heat camera shows what the eye cannot. We compare the thermal drones and payloads we supply, with AUD prices, so you can match the kit to the job and the budget.`,
    image: '/images/blog-drone-heat-camera-buying-guide.webp',
    imageAlt: `DJI Mavic 3 Thermal, DJI Matrice 4 Thermal and DJI Zenmuse H30T thermal drone equipment`,
    relatedProducts: ['dji-mavic-3-thermal', 'dji-matrice-4-thermal', 'dji-matrice-30t', 'dji-zenmuse-h30t', 'flir-vue-tz20'],
    content: [
      `A drone heat camera lets a pilot see temperature instead of light, which turns a routine flight into an inspection, a search or a safety check. Roof surveyors find moisture, solar crews find failing cells, and fire and rescue teams find people in the dark. If you are ready to buy, the first question is not which camera is best but which route suits your budget: a complete thermal drone, a thermal payload for an aircraft you already own, or a dock for automated missions. This guide compares every thermal option we supply, with prices in Australian dollars, so you can match the kit to the work. For the technical background, our [thermal drones guide](/blog/thermal-drones-australia-guide) explains resolution, sensitivity and field of view in detail.`,
      { h2: `What a drone heat camera actually shows` },
      `A thermal camera measures infrared radiation and turns the differences into a picture, so hotter objects look brighter or take on a different colour. That is why drone thermal vision works in complete darkness and through haze that defeats a normal camera. It is also why people search for a drone IR camera or a thermal drone camera: they want to see heat, not detail. One point causes confusion. Some aircraft also carry a near-infrared auxiliary light, such as the one on the [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal), which helps the visual camera at night. That is a light for the normal camera and a separate feature from the thermal sensor, which sees heat on its own. If you are not sure whether you need a thermal drone or just a handheld thermal camera, read our guide to [thermal cameras vs thermal drones](/blog/thermal-camera-vs-thermal-drone-infrared-inspections).`,
      { h2: `Thermal drones and payloads compared` },
      `This table lists every thermal option we supply, from the most portable aircraft to the highest-resolution payload. Prices are in Australian dollars.`,
      { table: {
        head: ['Product', 'Thermal sensor', 'Type', 'Price (AUD)'],
        rows: [
          ['[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '640×512 uncooled VOx', 'Complete portable drone, up to 45 min', '$8,249'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640×512, 12 µm, 50 mK or less', 'Complete drone, up to 49 min', '$10,159'],
          ['[DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo)', '640×512, 12 µm, uncooled VOx', 'Plus bundle with Care coverage and extra batteries', '$11,248'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640×512, 12 µm, radiometric', 'Weather-sealed drone, IP55, up to 41 min', '$14,917'],
          ['[FLIR VUE TZ20](/product/flir-vue-tz20)', 'Dual FLIR Boson 640×512', 'Payload for Matrice 200 series and Matrice 300', '$11,700'],
          ['[DJI Zenmuse H30T](/product/dji-zenmuse-h30t)', '1280×1024, 30 fps', 'Payload for Matrice 350 RTK and 300 RTK', '$17,335'],
          ['[DJI Mavic Pro FLIR Boson Thermal Ninja](/product/dji-mavic-pro-flir-boson-thermal-ninja)', 'FLIR Boson core', 'Conversion for a DJI Mavic Pro', '$6,999']
        ]
      } },
      { h2: `Route 1: buy a complete thermal drone` },
      `For most buyers a complete aircraft is the simplest route, because the thermal camera, the visual cameras and the flight controller are designed together. Three aircraft cover most budgets and jobs.`,
      `The [DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal) at $8,249 is the most portable. It adds a 640×512 thermal camera to a 48 MP wide camera and a 56x hybrid zoom camera, flies for up to 45 minutes and weighs 920 g, so a crew can carry it in one hand. It is built for roof, solar, fire and rescue work, and the [Mavic 3T Worry-Free Basic Combo](/product/dji-mavic-3t-worry-free-basic-combo) bundles it with DJI Care Enterprise Basic at the same price.`,
      `The [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal) at $10,159 is the best all-rounder. It pairs the 640×512 thermal camera, with sensitivity of 50 mK or less and a 45° diagonal field of view, with three 48 MP visual cameras and a laser rangefinder. It flies for up to 49 minutes at 1,219 g, and the near-infrared auxiliary light helps at night. It suits public safety, search and rescue and inspection crews that work day and night. The [Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) at $11,248 adds a Plus bundle with Care coverage and extra batteries.`,
      `The [DJI Matrice 30T](/product/dji-matrice-30t) at $14,917 is the rugged choice. It carries a radiometric 640×512 thermal camera with a 12 MP wide camera, a 48 MP zoom camera and a laser rangefinder in a weather-sealed IP55 airframe that flies for up to 41 minutes. It is built for firefighting, police, power-line and solar inspection teams that cannot stop for the weather.`,
      { h2: `Route 2: add a thermal payload to your aircraft` },
      `If you already own a compatible Matrice, a payload can be the better way to buy. The [DJI Zenmuse H30T](/product/dji-zenmuse-h30t) at $17,335 is the highest-resolution thermal option in the Zenmuse H series: a 1280×1024 uncooled microbolometer at 30 fps with a temperature range of -20°C to 1,600°C, a 48 MP wide camera, a 40 MP zoom camera with 34x optical zoom and a laser rangefinder from 3 to 3,000 m. It is for the Matrice 350 RTK and 300 RTK and suits long-range inspection, search and rescue and fire support. The [FLIR VUE TZ20](/product/flir-vue-tz20) at $11,700 carries two 640×512 Boson sensors, one wide at 95° and one narrow at 18°, so you get two thermal views in one gimbal, for DJI Matrice 200 series and Matrice 300 airframes. Browse the full range of [thermal cameras](/category/cameras-sensors/thermal-cameras) and [Zenmuse cameras](/category/cameras-sensors/dji-zenmuse-cameras), and tell us your aircraft so we can confirm compatibility before you order.`,
      { h2: `A low-cost way in: the Mavic Pro thermal conversion` },
      `If you own a DJI Mavic Pro and want thermal without buying a new aircraft, the [Mavic Pro FLIR Boson Thermal Ninja](/product/dji-mavic-pro-flir-boson-thermal-ninja) at $6,999 turns it into a thermal camera drone using a FLIR Boson core. It suits inspectors, roofers and researchers who want a small, low-cost thermal drone. The Boson resolution and lens options are confirmed on request, so contact us before you order and we will confirm the configuration for your job.`,
      { h2: `Route 3: automate thermal missions with a dock` },
      `For around-the-clock security or response, a dock launches, lands and charges the aircraft without a pilot on site. The [DJI Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) at $34,278 bundles a Dock 3 with a thermal Matrice 4TD aircraft, Care Enterprise Plus, an AS1 speaker and an AL1 spotlight for automated thermal security and response missions. It is for emergency services and security teams planning drone-in-a-box operations. Browse the full [DJI Dock range](/category/enterprise-drones/dji-dock) and use the [quote form](/quote) to scope a deployment.`,
      { h2: `A buying checklist for a drone heat camera` },
      { ul: [
        `**Define the job first:** roof and solar inspection, fire and rescue and long-range inspection need different sensors.`,
        `**Match the resolution to the distance:** a 640×512 sensor suits most inspections, and 1280×1024 gives more detail from further away.`,
        `**Check sensitivity:** a lower figure, such as 50 mK or less, shows smaller temperature differences.`,
        `**Ask about radiometric measurement:** radiometric cameras report temperatures, which matters for inspection reports.`,
        `**Confirm weather and flight time:** an IP rating and a long flight time keep you working.`,
        `**Pair it with a good visual camera:** you still need to see what the heat is.`,
        `**Budget for batteries and care coverage:** a Plus or Worry-Free bundle can protect a large investment.`
      ] },
      { h2: `Training, rules and getting a quote` },
      `Flying commercially may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), read our [FAQ on registering a drone and CASA rules](/faq) and tell us about your use case on the [quote form](/quote). We will confirm the right aircraft or payload, the batteries and the training you need.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. We email the payment details after you place the order.`,
      { faq: [
        { q: `How much does a drone with a heat camera cost in Australia?`, a: `Our thermal options range from $6,999 for the Mavic Pro FLIR Boson Thermal Ninja conversion and $8,249 for the DJI Mavic 3 Thermal to $10,159 for the Matrice 4 Thermal and $14,917 for the Matrice 30T. Payloads run from $11,700 for the FLIR VUE TZ20 to $17,335 for the Zenmuse H30T.` },
        { q: `What is the best drone heat camera to buy?`, a: `For most buyers the DJI Matrice 4 Thermal is the best all-rounder. The DJI Mavic 3 Thermal is the most portable, the Matrice 30T is the most rugged and the Zenmuse H30T has the highest resolution.` },
        { q: `Is a drone IR camera the same as a thermal camera?`, a: `A thermal camera sees heat. Some drones also have a near-infrared light that helps the visual camera at night, which is a separate feature. If you need to see temperature, buy a thermal camera.` },
        { q: `Can I add a thermal camera to my own drone?`, a: `Only if your aircraft supports the payload. The Zenmuse H30T is for the Matrice 350 RTK and 300 RTK, and the FLIR VUE TZ20 is for the Matrice 200 series and Matrice 300. Tell us your aircraft and we will confirm.` },
        { q: `Do I need CASA approval to use a thermal drone?`, a: `Commercial flying may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check the CASA website, or ask us when you request a quote.` }
      ] }
    ],
    targetKeywords: ['drone heat camera', 'drone ir camera', 'drone thermal vision', 'thermal drone camera']
  },
  {
    id: 'post-20',
    slug: 'buy-dji-air-3s-australia-combos-vs-air-3',
    intent: 'transactional',
    title: `Buy the DJI Air 3S in Australia: Which Combo to Choose and How It Compares With the Air 3`,
    metaTitle: `Buy DJI Air 3S Australia: Combos, Prices vs Air 3`,
    metaDescription: `Buying the DJI Air 3S in Australia? Compare the RC-N3 and RC 2 combos with the Air 3, AUD prices, spare batteries, filters and free express shipping.`,
    subtitle: `Three ways to buy the dual-camera Air 3S, how it differs from the Air 3, and the spares worth ordering with it.`,
    date: 'October 2026',
    dateISO: '2026-10-29',
    modifiedISO: '2026-10-29',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Air 3S', 'Buying Guide', 'Camera Drones'],
    excerpt: `The DJI Air 3S starts at $1,699 and reaches $2,429 as a complete kit. We compare each combo with the Air 3 and the Mini 5 Pro and list the spares to buy with it.`,
    image: '/images/blog-air-3s-buying-guide.webp',
    imageAlt: `DJI Air 3S with the RC-N3, the DJI Air 3 and the Air 3 Fly More Combo with the RC 2`,
    relatedProducts: ['dji-air-3s-dji-rc-n3', 'dji-air-3s-fly-more-combo-dji-rc-n3', 'dji-air-3s-fly-more-combo-dji-rc-2', 'dji-air-3'],
    content: [
      `The DJI Air 3S is the drone many Australian creators choose when a Mini starts to feel limiting but a full Pro-class aircraft is more than the job needs. It carries two cameras, a 1-inch wide camera and a 3x medium tele, flies for up to 45 minutes on one battery and costs well under the price of a Mavic. Searches for the Air 3S have grown steadily, and buyers are also comparing it with the Air 3 and the DJI Air 3S accessories on offer. This guide explains the three ways to buy the Air 3S, what each includes, how it differs from the Air 3, which pilot each package suits and which spares are worth adding to the first order. You can check the specifications in this guide on DJI's official page for the [DJI Air 3S](https://www.dji.com/global/air-3s/specs).`,
      { h2: `What you are buying: the DJI Air 3S at a glance` },
      `The Air 3S is a dual-camera travel and creator drone. The main camera is a 1-inch CMOS sensor with 50 MP of resolution, and the second is a 1/1.3-inch medium tele camera of 48 MP with a 70 mm equivalent lens. Between them you can change the framing of a shot without moving the aircraft, which is why property photographers, travel filmmakers and wedding videographers like the Air series. Video records in 4K at up to 120 fps, and forward LiDAR helps the aircraft sense obstacles and capture cleaner footage in low light, alongside omnidirectional obstacle sensing.`,
      { ul: [
        `**Wide camera:** 1-inch CMOS, 50 MP.`,
        `**Medium tele camera:** 1/1.3-inch CMOS, 48 MP, 70 mm equivalent.`,
        `**Video:** 4K at up to 120 fps.`,
        `**Flight time:** up to 45 minutes per battery.`,
        `**Weight:** about 724 g, so it is well above the 250 g class.`,
        `**Sensing:** omnidirectional obstacle sensing with forward LiDAR.`
      ] },
      { h2: `Three ways to buy the DJI Air 3S` },
      `Every package uses the same aircraft and the same two cameras. What changes is the controller and how much battery power you receive. The table shows what each package includes and its price in Australian dollars.`,
      { table: {
        head: ['Package', 'Controller', 'What is included', 'Price (AUD)'],
        rows: [
          ['[DJI Air 3S (RC-N3)](/product/dji-air-3s-dji-rc-n3)', 'DJI RC-N3, uses your smartphone', 'Aircraft and controller', '$1,699'],
          ['[Air 3S Fly More Combo (RC-N3)](/product/dji-air-3s-fly-more-combo-dji-rc-n3)', 'DJI RC-N3, uses your smartphone', 'Extra batteries, charging hub and shoulder bag', '$2,129'],
          ['[Air 3S Fly More Combo (RC 2)](/product/dji-air-3s-fly-more-combo-dji-rc-2)', 'DJI RC 2 with built-in screen', 'Extra batteries, charging hub and shoulder bag', '$2,429']
        ]
      } },
      { h2: `DJI Air 3S with the RC-N3: the lowest entry price` },
      `At $1,699 the [DJI Air 3S with the RC-N3](/product/dji-air-3s-dji-rc-n3) is the cheapest way to own the aircraft. The RC-N3 is a compact controller that holds your smartphone and uses it as the screen, which keeps both the price and the weight of the kit down. It is a sensible choice if you already own a modern phone, fly short sessions and plan to add a spare battery later. Be realistic about how you will use it, though. One battery gives up to 45 minutes in the air, but a day of shooting rarely fits in a single flight, so most buyers who start here add a battery within weeks.`,
      { h2: `Air 3S Fly More Combo with the RC-N3: the value pick` },
      `For most buyers the [Fly More Combo with the RC-N3](/product/dji-air-3s-fly-more-combo-dji-rc-n3) at $2,129 is the better purchase. It adds extra Intelligent Flight Batteries, a charging hub and a shoulder bag to the same aircraft and controller. That is $430 more than the basic package, and it replaces several separate purchases with one order. The shoulder bag also gives the kit a proper place to live when you travel. It suits creators who fly for hours rather than minutes and are happy to use their own phone as the screen, such as property photographers, holiday filmmakers and event videographers.`,
      { h2: `Air 3S Fly More Combo with the RC 2: the complete kit` },
      `If you would rather not clip a phone to the controller, the [Fly More Combo with the DJI RC 2](/product/dji-air-3s-fly-more-combo-dji-rc-2) is the complete Air 3S package at $2,429. The RC 2 has a bright screen built in, so there is no phone to mount, no app to open on your own device and a quicker set-up in the field. It is also easier to read in strong sun than a phone, and your phone stays free for calls, messages and the client. You still receive the extra batteries, the charging hub and the shoulder bag. Choose it if you shoot for clients, fly in bright conditions or simply want the simplest controls. Our guide to [DJI controllers explained](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) compares the RC-N3, RC 2 and RC Pro in more detail.`,
      { h2: `DJI Air 3S vs DJI Air 3: which should you buy?` },
      `Many buyers are weighing the Air 3S against the original [DJI Air 3](/product/dji-air-3), which is available at the same $1,699 starting price. Both are dual-camera aircraft with omnidirectional obstacle sensing, and they weigh almost the same, so the real difference is the camera. The Air 3S carries a larger 1-inch sensor on its wide camera, adds forward LiDAR and records 4K at up to 120 fps.`,
      { table: {
        head: ['', 'DJI Air 3S', 'DJI Air 3'],
        rows: [
          ['Wide camera', '1-inch CMOS, 50 MP', '1/1.3-inch CMOS, 48 MP'],
          ['Medium tele camera', '1/1.3-inch CMOS, 48 MP, 70 mm eq.', '1/1.3-inch CMOS, 48 MP, 70 mm eq.'],
          ['Video', '4K up to 120 fps', '4K up to 100 fps'],
          ['Flight time per battery', 'Up to 45 min', 'Up to 46 min'],
          ['Take-off weight', 'About 724 g', '720 g'],
          ['Obstacle sensing', 'Omnidirectional with forward LiDAR', 'Omnidirectional'],
          ['Starting price', '[$1,699](/product/dji-air-3s-dji-rc-n3)', '[$1,699](/product/dji-air-3)'],
          ['Fly More Combo', '[$2,129](/product/dji-air-3s-fly-more-combo-dji-rc-n3)', '[$2,049](/product/dji-air-3-fly-more-combo)']
        ]
      } },
      `At the same entry price, the Air 3S is the better buy for most people, because the larger wide sensor is the camera you will use most often. The Air 3 remains a strong aircraft if you find it in a Fly More Combo, where the [Air 3 Fly More Combo](/product/dji-air-3-fly-more-combo) is $2,049 and the [Air 3 Fly More Combo with the RC 2](/product/dji-air-3-fly-more-combo-rc-2) is $2,349. Those are $80 below the matching Air 3S combos. If you already own an Air 3, the batteries and propellers are listed separately for each model, so check the name before you order.`,
      { h2: `DJI Air 3S vs DJI Mini 5 Pro: size or second camera?` },
      `The other common comparison is with the [DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3), which also carries a 1-inch sensor but weighs under 250 g. The two aircraft answer different questions.`,
      { table: {
        head: ['', 'DJI Air 3S', 'DJI Mini 5 Pro'],
        rows: [
          ['Main camera', '1-inch CMOS, 50 MP', '1-inch CMOS, 50 MP'],
          ['Second camera', 'Yes, 70 mm equivalent medium tele', 'No'],
          ['Flight time per battery', 'Up to 45 min', 'Up to 36 min'],
          ['Weight', 'About 724 g', 'Under 250 g'],
          ['Starting price', '$1,699', '[$1,119](/product/dji-mini-5-pro-dji-rc-n3)']
        ]
      } },
      `Choose the Mini 5 Pro if weight, portability and keeping the aircraft under 250 g matter most. Choose the Air 3S if you want the second camera for tighter framing, a longer flight time and the extra capability that comes with a larger aircraft. Our [Mini 5 Pro buying guide](/blog/buy-dji-mini-5-pro-australia-combos-prices) explains its four packages in detail. If you are considering something bigger, the [Mavic buying guide](/blog/buy-dji-mavic-australia-mavic-4-pro-vs-mavic-3-pro) compares the Pro-class folding drones.`,
      { h2: `What to add: DJI Air 3S accessories worth ordering` },
      `A few extras make a bigger difference to the quality of your footage and the length of your day than any upgrade to the aircraft. Every item below is listed for the Air 3S, so you can order it with the drone.`,
      { ul: [
        `[DJI Air 3S Intelligent Flight Battery](/product/dji-air-3s-intelligent-flight-battery), $219: a spare pack for up to 45 minutes of flight per battery.`,
        `[DJI Air 3 Series Battery Charging Hub](/product/dji-air-3-series-battery-charging-hub), $129: charges several batteries from one input. It is listed for both the Air 3 and Air 3S, and is already in the Fly More Combos.`,
        `[DJI Air 3S ND Filter Set (ND8/32/128)](/product/dji-air-3s-nd-filter-set-nd8-32-128), $159: neutral-density filters that let you hold a slower shutter speed in bright light for smooth video.`,
        `[DJI Air 3S Wide-Angle Lens](/product/dji-air-3s-wide-angle-lens), $99: a wider view for interiors and landscapes.`,
        `[DJI Air 3 Series Low-Noise Propellers](/product/dji-air-3-series-low-noise-propellers), $39: a spare set keeps the drone flying after a prop strike.`,
        `[DJI Air 3 Series Propeller Guard](/product/dji-air-3-series-propeller-guard), $38: added protection when you fly close to walls or people.`
      ] },
      `You can browse everything compatible with the Air series in our [batteries and accessories category](/category/batteries), and our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after the packs so they last. If you are buying with property work in mind, our guide to the [best drones for real estate and aerial photography](/blog/best-drones-for-real-estate-and-aerial-photography) explains how the Air series fits that job.`,
      { h2: `Flying a 724 g drone in Australia` },
      `At about 724 g the Air 3S sits well above the 250 g class that makes the smallest Minis so simple to fly. Rules depend on the weight of the aircraft and on whether you fly for fun or for paid work, and they change from time to time. Always confirm the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) before your first flight, and read our [FAQ on registering a drone and CASA rules](/faq). If you plan to earn money from your footage, check whether you need accreditation, and keep a record of your flights. The aircraft's obstacle sensing is a safety aid and not a substitute for watching the drone and the airspace around it.`,
      { h2: `Should you buy new or used?` },
      `Used Air 3S drones appear from time to time, but a new aircraft arrives with a full warranty, genuine batteries and the current firmware. If a used price looks too good to be true, read our guide to [buying a new or used DJI drone](/blog/buying-a-new-vs-used-dji-drone-australia) before you commit. A new Fly More Combo costs more up front, but the cost of replacing a worn battery on a used aircraft can close the gap quickly.`,
      { h2: `Which DJI Air 3S package should you buy?` },
      { ul: [
        `**You want the lowest price and will add batteries later:** the [Air 3S with the RC-N3](/product/dji-air-3s-dji-rc-n3) at $1,699.`,
        `**You fly for hours and use your phone as the screen:** the [Fly More Combo with the RC-N3](/product/dji-air-3s-fly-more-combo-dji-rc-n3) at $2,129.`,
        `**You want a built-in screen and the complete kit:** the [Fly More Combo with the RC 2](/product/dji-air-3s-fly-more-combo-dji-rc-2) at $2,429.`,
        `**You want to spend less and accept the older camera:** the [Air 3 Fly More Combo](/product/dji-air-3-fly-more-combo) at $2,049.`
      ] },
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you are unsure which package suits your work, send us a message through the [quote form](/quote) and a specialist will recommend one. You can also compare every model in our [DJI Mini and Air range](/category/camera-drones/dji-mini-and-air).`,
      { faq: [
        { q: `How much does the DJI Air 3S cost in Australia?`, a: `The DJI Air 3S with the RC-N3 is $1,699. The Fly More Combo with the RC-N3 is $2,129 and the Fly More Combo with the RC 2 is $2,429. All prices are in Australian dollars with free express shipping.` },
        { q: `What is the difference between the DJI Air 3S and the Air 3?`, a: `The Air 3S has a larger 1-inch sensor on its wide camera, forward LiDAR and records 4K at up to 120 fps. Both have a 70 mm equivalent medium tele camera, omnidirectional obstacle sensing and flight times of 45 minutes (Air 3S) and 46 minutes (Air 3).` },
        { q: `Which DJI Air 3S combo is best?`, a: `For most buyers the Fly More Combo with the RC-N3 is the best value because it adds extra batteries, a charging hub and a shoulder bag. Choose the RC 2 version if you want a built-in screen and no phone.` },
        { q: `How long does the DJI Air 3S fly?`, a: `Up to 45 minutes per battery, so a Fly More Combo gives you several flights in a day.` },
        { q: `Is the DJI Air 3S under 250 g?`, a: `No. It weighs about 724 g, so check the current CASA rules for your type of flying before you take off.` }
      ] }
    ],
    targetKeywords: ['air 3s', 'dji air 3s', 'dji air 3 drone', 'dji air 3s accessories']
  },
  {
    id: 'post-21',
    slug: 'buy-dji-mini-4k-vs-mini-3-australia-prices',
    intent: 'transactional',
    title: `Buy a DJI Mini 4K or Mini 3 in Australia: Which Budget Mini Is Worth It?`,
    metaTitle: `Buy DJI Mini 4K or Mini 3 in Australia: Prices`,
    metaDescription: `DJI Mini 4K vs Mini 3: compare every package with AUD prices, controllers, Fly More Combos and spare batteries, with free express shipping in Australia.`,
    subtitle: `Two sub-250 g camera drones for a first purchase, compared by price, controller and kit, with the spares we recommend.`,
    date: 'October 2026',
    dateISO: '2026-10-29',
    modifiedISO: '2026-10-29',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Mini 4K', 'DJI Mini 3', 'Buying Guide'],
    excerpt: `The DJI Mini 4K starts at $449 and the DJI Mini 3 at $509. We compare every package, explain which one suits a first drone and list the spares to add.`,
    image: '/images/blog-mini-4k-mini-3-buying-guide.webp',
    imageAlt: `DJI Mini 4K with controller, DJI Mini 3 with the RC-N1 and the Mini 3 Fly More Combo`,
    relatedProducts: ['dji-mini-4k', 'dji-mini-4k-fly-more-combo', 'dji-mini-3-dji-rc-n1', 'dji-mini-3-fly-more-combo-dji-rc'],
    content: [
      `Not everyone needs a 1-inch sensor, and not everyone should spend over a thousand dollars on a first drone. The DJI Mini 4K and the DJI Mini 3 are the two budget Minis that Australians search for most often, with the DJI Mini 4K drone alone attracting more than two thousand searches a month. Both weigh under 250 g, both fold small enough for a jacket pocket or a daypack and both record sharp video at a price that makes sense for a beginner. The decision between them is not obvious, because the Mini 4K is cheaper while the Mini 3 offers more ways to buy. This guide compares every package with Australian prices, explains which pilot each suits, and lists the spares and accessories worth adding to your first order.`,
      { h2: `DJI Mini 4K and Mini 3 at a glance` },
      `The DJI Mini 4K is an entry-level sub-250 g 4K camera drone with a 3-axis gimbal. It is built to be simple: a lightweight aircraft that records stable 4K video and is easy to fly for beginners. The DJI Mini 3 is a compact sub-249 g camera drone with a 1/1.3-inch sensor. It folds small, gives sharp 4K video and is offered with a phone-based controller or a screen controller, so you can choose how much to spend.`,
      { ul: [
        `**DJI Mini 4K:** 4K video, 3-axis gimbal, under 250 g, from $449.`,
        `**DJI Mini 3:** 1/1.3-inch CMOS sensor, 4K video, under 249 g, from $509.`,
        `**Both:** sub-250 g designs that keep flying simple, suit beginners and travel easily.`
      ] },
      { h2: `Every way to buy: DJI Mini 4K and Mini 3 packages` },
      `Here is every budget Mini package we supply, with its controller, what is included and its price in Australian dollars.`,
      { table: {
        head: ['Package', 'Controller', 'What is included', 'Price (AUD)'],
        rows: [
          ['[DJI Mini 4K](/product/dji-mini-4k)', 'See the product page', 'The aircraft', '$449'],
          ['[DJI Mini 4K Fly More Combo](/product/dji-mini-4k-fly-more-combo)', 'Included in the combo', 'Extra batteries and a controller', '$619'],
          ['[DJI Mini 3 (RC-N1)](/product/dji-mini-3-dji-rc-n1)', 'DJI RC-N1, uses your smartphone', 'Aircraft and controller', '$509'],
          ['[DJI Mini 3 (DJI RC)](/product/dji-mini-3-dji-rc)', 'DJI RC with built-in screen', 'Aircraft and screen controller', '$659'],
          ['[DJI Mini 3 Fly More Combo (DJI RC)](/product/dji-mini-3-fly-more-combo-dji-rc)', 'DJI RC with built-in screen', 'Extra batteries, charging hub and shoulder bag', '$839']
        ]
      } },
      { h2: `DJI Mini 4K: the cheapest way into 4K video` },
      `At $449 the [DJI Mini 4K](/product/dji-mini-4k) is the lowest-priced aircraft in this guide, and it is aimed squarely at people who have never flown before. The 3-axis gimbal keeps footage steady even when your piloting is not, and the sub-250 g weight keeps the aircraft in the lightweight class that makes CASA compliance simple. There is little to configure and little to go wrong, which is exactly what a first drone should offer. It suits beginners, travellers, families and hobbyists who want 4K holiday video, simple aerial photos of the house or a way to learn the basics before they commit to something larger.`,
      { h2: `DJI Mini 4K Fly More Combo: the starter pick` },
      `If you can stretch the budget, the [DJI Mini 4K Fly More Combo](/product/dji-mini-4k-fly-more-combo) at $619 is the better way to buy. It is sold with extra batteries and a controller, for $170 more than the aircraft on its own. Batteries are the first thing a new pilot runs out of, and a single charge goes quickly when you are learning, so having spares ready is worth more than almost any other accessory. We list the Mini 4K as the aircraft and this combo, so if you want extra power on day one, this is the package to buy. It is the best-value starter drone for beginners and travellers who want 4K without the cost of a Mini 4 Pro.`,
      { h2: `DJI Mini 3 with the RC-N1: the capable all-rounder` },
      `The [DJI Mini 3 with the DJI RC-N1](/product/dji-mini-3-dji-rc-n1) at $509 is the lowest-priced Mini 3. Its 1/1.3-inch sensor is larger than you would expect at the price, and it gives sharp 4K video from an aircraft that weighs under 249 g. The RC-N1 is a phone-based controller, so you clip your smartphone in place and fly with the screen of your own device. That keeps the price and the weight of the kit low. It suits buyers who want a capable camera drone and are happy to use a phone as the display, such as travellers and beginners who care about image quality.`,
      { h2: `DJI Mini 3 with the DJI RC: the no-phone option` },
      `The [DJI Mini 3 with the DJI RC](/product/dji-mini-3-dji-rc) at $659 is the same aircraft with a screen controller included. The built-in screen means there is no phone to mount, no app to open on your own device and a quicker set-up when the light is changing. It is the best choice for Mini 3 buyers who want a screen controller from the start, and it pairs naturally with the Fly More Combo if you plan to fly often.`,
      { h2: `DJI Mini 3 Fly More Combo: the travel kit` },
      `The [DJI Mini 3 Fly More Combo with the DJI RC](/product/dji-mini-3-fly-more-combo-dji-rc) at $839 adds extra Intelligent Flight Batteries, a charging hub and a shoulder bag to the screen-controller package. The extra batteries make the compact Mini 3 practical for a full day of travel flying, and the bag keeps everything together in a small footprint. It is ideal for travellers who want spare power and a screen controller in a single, light kit.`,
      { h2: `DJI Mini 4K vs DJI Mini 3: which should you buy?` },
      `The two aircraft are close enough that the right choice comes down to your budget and how much you care about the camera. The table sets out what we can tell you about each.`,
      { table: {
        head: ['', 'DJI Mini 4K', 'DJI Mini 3'],
        rows: [
          ['Video', '4K', '4K'],
          ['Take-off weight', 'Under 250 g', 'Under 249 g'],
          ['Camera sensor', 'Entry-level 4K camera with 3-axis gimbal', '1/1.3-inch CMOS'],
          ['Controller options', 'Controller included in the Fly More Combo', 'RC-N1 (phone) or DJI RC (screen)'],
          ['Lowest price', '[$449](/product/dji-mini-4k)', '[$509](/product/dji-mini-3-dji-rc-n1)'],
          ['Fly More Combo', '[$619](/product/dji-mini-4k-fly-more-combo)', '[$839](/product/dji-mini-3-fly-more-combo-dji-rc)']
        ]
      } },
      `Choose the Mini 4K if price is the priority and you want the simplest possible start. Choose the Mini 3 if you care about the larger 1/1.3-inch sensor, want the option of a screen controller, or expect to fly often enough that a Fly More Combo with a charging hub and bag will pay for itself. The gap between the two lowest-priced packages is only $60, so many buyers find the Mini 3 with the RC-N1 a better long-term purchase.`,
      { h2: `A specification-based DJI Mini 3 review` },
      `People often search for a DJI Mini 3 review before they buy, so here is what the specifications tell you, rather than first-hand flight impressions. The Mini 3 combines a sub-249 g take-off weight with a 1/1.3-inch sensor, which is a rare pairing at this price. The weight keeps CASA compliance simple for the lightweight class, and the sensor gives more detail in the shadows and highlights than the smallest sensors found on cheaper drones. The two controller options matter too. The phone-based RC-N1 suits pilots who want to save money, while the DJI RC with its built-in screen suits those who want a simpler set-up in the field. The trade-off is that the Mini 3 is an older design, so it lacks features found on newer aircraft, which is why the next section matters.`,
      { h2: `Should you step up to the Mini 4 Pro or Mini 5 Pro?` },
      `If your budget stretches further, the newer Minis add a lot. The [DJI Mini 4 Pro](/product/dji-mini-4-pro) starts at $949, the [Mini 4 Pro with the RC 2](/product/dji-mini-4-pro-rc-2) is $1,209 and the [Mini 4 Pro Fly More Combo](/product/dji-mini-4-pro-fly-more-combo) is $1,449. The [DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3) starts at $1,119 and carries a 1-inch sensor with up to 36 minutes of flight. If image quality is your priority and you can afford it, those aircraft are worth the extra money. Our [Mini 5 Pro buying guide](/blog/buy-dji-mini-5-pro-australia-combos-prices) explains its four packages, and our comparison of the [Neo 2, Flip and Mini 4 Pro](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) helps you choose between the smaller models. If you are still undecided, our list of the [best drones for beginners](/blog/best-drones-for-beginners-australia) covers five easy, affordable picks.`,
      { h2: `What to add: spares and accessories for the Mini 3` },
      `The Mini 3 has a full range of spares, and every item below is listed for it. Buy at least one extra battery if you are not choosing a Fly More Combo.`,
      { ul: [
        `[DJI Mini 3 Series Intelligent Flight Battery](/product/dji-mini-3-series-intelligent-flight-battery), $99: the standard pack that keeps the Mini 3 under 250 g.`,
        `[DJI Mini 4 Pro/Mini 3 Series Intelligent Flight Battery Plus](/product/dji-mini-4-pro-mini-3-series-intelligent-flight-battery-plus), $149: the higher-capacity pack. It extends flight time but makes the aircraft heavier than 250 g.`,
        `[DJI Mini 4 Pro/Mini 3 Series Two-Way Charging Hub](/product/dji-mini-4-pro-mini-3-series-two-way-charging-hub), $69: charges several batteries in one place.`,
        `[DJI Mini 3/Lito Series Propellers](/product/dji-mini-3-lito-series-propellers), $19: a spare set keeps you flying after a prop strike.`
      ] },
      `Browse every Mini accessory in the [batteries and accessories category](/category/batteries), and read our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) to make the packs last. For the Mini 4K, the Fly More Combo is the route to extra batteries, so choose it on day one if you can.`,
      { h2: `Flying under 250 g in Australia` },
      `The reason both aircraft sell so well to first-time owners is their weight. Staying under 250 g keeps the aircraft in the lightweight class, which is why travellers and beginners favour it. That advantage holds only while you use the standard battery, because the Plus battery on the Mini 3 pushes the aircraft above 250 g. Rules also change, so always confirm the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and read our [FAQ on registering a drone and CASA rules](/faq) before you fly. Keep clear of people, airports and restricted areas, and keep the aircraft in sight.`,
      { h2: `Which budget Mini should you buy?` },
      { ul: [
        `**You want the lowest possible price:** the [Mini 4K](/product/dji-mini-4k) at $449.`,
        `**You want a first drone with spare batteries:** the [Mini 4K Fly More Combo](/product/dji-mini-4k-fly-more-combo) at $619.`,
        `**You want the larger sensor and a phone as the screen:** the [Mini 3 with the RC-N1](/product/dji-mini-3-dji-rc-n1) at $509.`,
        `**You want a screen controller and no phone:** the [Mini 3 with the DJI RC](/product/dji-mini-3-dji-rc) at $659.`,
        `**You fly often or travel:** the [Mini 3 Fly More Combo](/product/dji-mini-3-fly-more-combo-dji-rc) at $839.`
      ] },
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you cannot decide between the two Minis, send us a message through the [quote form](/quote) and a specialist will recommend one. You can also see every model together in our [DJI Mini and Air range](/category/camera-drones/dji-mini-and-air).`,
      { faq: [
        { q: `How much does the DJI Mini 4K cost in Australia?`, a: `The DJI Mini 4K is $449, and the DJI Mini 4K Fly More Combo is $619. Both prices are in Australian dollars with free express shipping.` },
        { q: `How much does the DJI Mini 3 cost in Australia?`, a: `The DJI Mini 3 with the RC-N1 is $509, the Mini 3 with the DJI RC screen controller is $659 and the Mini 3 Fly More Combo with the DJI RC is $839.` },
        { q: `What is the difference between the DJI Mini 4K and Mini 3?`, a: `The Mini 4K is the cheaper, simpler aircraft with a 3-axis gimbal and 4K video. The Mini 3 has a 1/1.3-inch sensor and is available with a phone-based or a screen controller, with a Fly More Combo that includes a charging hub and a shoulder bag.` },
        { q: `Are the DJI Mini 4K and Mini 3 under 250 g?`, a: `Yes. The Mini 4K weighs under 250 g and the Mini 3 under 249 g. With the Plus battery fitted, the Mini 3 is heavier than 250 g, so check the current CASA rules before flying.` },
        { q: `Which is the best first drone, the Mini 4K or the Mini 3?`, a: `The Mini 4K Fly More Combo is the best-value starter for most beginners. Choose the Mini 3 if you want the larger sensor or the option of a screen controller.` }
      ] }
    ],
    targetKeywords: ['dji mini 4k drone', 'dji mini 3 vs mini 4k', 'dji mini 3 review', 'dj1 mini 4k drone']
  },
  {
    id: 'post-22',
    slug: 'buy-fpv-goggles-australia-dji-goggles-3-vs-n3',
    intent: 'transactional',
    title: `Buy FPV Goggles in Australia: DJI Goggles 3 vs Goggles N3, Controllers and Kits`,
    metaTitle: `Buy FPV Goggles Australia: DJI Goggles 3 vs N3`,
    metaDescription: `Buying FPV goggles in Australia? Compare DJI Goggles 3 and Goggles N3 with controllers, Avata 2 combos and O4 Air Units, with AUD prices and free shipping.`,
    subtitle: `Which goggles, which controller and which kit to buy first, with the real price gap between the premium and entry-level headsets.`,
    date: 'October 2026',
    dateISO: '2026-10-29',
    modifiedISO: '2026-10-29',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['FPV Goggles', 'DJI Goggles 3', 'Buying Guide'],
    excerpt: `DJI Goggles 3 cost $869 and the Goggles N3 cost $359, but inside an Avata 2 combo the gap is only $220. We compare both with controllers and kits.`,
    image: '/images/blog-fpv-goggles-buying-guide.webp',
    imageAlt: `DJI Goggles 3, DJI Goggles N3 and the DJI Avata 2 FPV drone`,
    relatedProducts: ['dji-goggles-3', 'dji-goggles-n3', 'dji-avata-2-fly-more-combo-single-battery', 'dji-rc-motion-3'],
    content: [
      `FPV flying puts you in the pilot's seat. Instead of watching a small aircraft in the sky, you wear goggles and see what the drone sees, with the horizon tilting as it banks and the ground rushing past as it dives. It is the most immersive way to fly, and it is why searches for FPV goggles, the DJI FPV controller and the DJI O4 Air Unit Pro keep rising in Australia. It is also a confusing market to enter, because goggles, controllers and aircraft are sold in several combinations at very different prices. This guide explains the difference between the DJI Goggles 3 and the Goggles N3, which controller to pair with them, which complete kits are worth buying and when a custom build with an O4 Air Unit makes sense, all with Australian prices.`,
      { h2: `What FPV goggles actually do` },
      `FPV stands for first-person view. The aircraft sends a live video feed to the goggles, so the picture fills your vision instead of appearing on a phone or a controller screen. A good headset gives a clear, low-latency image, because the delay between what the drone sees and what you see decides how precisely you can fly. DJI goggles also work with a controller you choose, which is the second part of the decision. In practice you are buying three things: goggles, a controller and an aircraft that works with both.`,
      { h2: `DJI Goggles 3 vs DJI Goggles N3 at a glance` },
      `DJI sells two current headsets, and the right one depends on how much you want to spend and how much image quality matters to you.`,
      { table: {
        head: ['', 'DJI Goggles 3', 'DJI Goggles N3'],
        rows: [
          ['Position', 'Premium FPV goggles', 'Entry-level FPV goggles'],
          ['Display', 'Micro-OLED, 1080p, up to 100 Hz', 'Immersive FPV view for compatible aircraft'],
          ['Best for', 'FPV and Avata pilots who want the flagship experience', 'Beginners who want goggles at a lower price'],
          ['Price (AUD)', '[$869](/product/dji-goggles-3)', '[$359](/product/dji-goggles-n3)']
        ]
      } },
      `The Goggles 3 are DJI's premium headset, with micro-OLED displays that give a sharp, low-latency first-person view. The [DJI Goggles N3](/product/dji-goggles-n3) bring the same immersive view to the Avata 2 and similar aircraft at a much lower price. For a first headset, the N3 is a sensible choice. For a pilot who expects to fly often, the sharper display of the Goggles 3 is the upgrade people usually regret not buying.`,
      { h2: `The real price gap: why the combo changes the maths` },
      `Looking at the headsets alone, the Goggles 3 cost $510 more than the Goggles N3. That is a lot to pay for a first headset. The picture changes when you buy a kit, because DJI sells the Avata 2 with either set of goggles, and the difference between the combos is much smaller than the difference between the headsets.`,
      { table: {
        head: ['Avata 2 kit', 'Goggles', 'Controller', 'Batteries', 'Price (AUD)'],
        rows: [
          ['[Fly Smart Combo (Single Battery)](/product/dji-avata-2-fly-smart-combo-single-battery)', 'Goggles N3', 'RC Motion 3', 'One', '$1,049'],
          ['[Fly More Combo (Single Battery)](/product/dji-avata-2-fly-more-combo-single-battery)', 'Goggles 3', 'RC Motion 3', 'One', '$1,269'],
          ['[Fly Smart Combo (Three Batteries)](/product/dji-avata-2-fly-smart-combo-three-batteries)', 'Goggles N3', 'RC Motion 3', 'Three, with charging hub', '$1,279'],
          ['[Fly More Combo (Three Batteries)](/product/dji-avata-2-fly-more-combo-three-batteries)', 'Goggles 3', 'RC Motion 3', 'Three, with charging hub', '$1,559']
        ]
      } },
      `Inside the single-battery kits the step up to the Goggles 3 costs $220, and inside the three-battery kits it costs $280. If you already know you want an Avata 2, buying the Fly More Combo with the Goggles 3 is a far better deal than buying the Fly Smart Combo now and the premium headset later. If your budget is tight or you are not sure FPV is for you, the Fly Smart Combo is the cheaper entry, and the [DJI Goggles N3](/product/dji-goggles-n3) are good enough to learn on.`,
      { h2: `The DJI Avata 2: the aircraft these goggles are made for` },
      `The [DJI Avata 2](/product/dji-avata-2-drone-only) is an immersive FPV drone with a 1/1.3-inch 12 MP camera, 4K video at up to 60 fps and a 155° field of view. Its propellers are protected, it takes off at about 377 g and it flies for up to 23 minutes per battery. The drone alone costs $649, and the goggles and controller are sold in the kits above. It is the easiest way to learn FPV, because the protected props make a bump into a wall or a tree far less costly than on an open-frame racing quad. Our guide to the [DJI Avata 360 vs the Avata 2](/blog/dji-avata-360-vs-avata-2-fpv-drone-guide) explains how the newer model compares.`,
      { h2: `A cheaper first step: the Neo 2 Motion Fly More Combo` },
      `If a full FPV drone feels like too big a jump, the [DJI Neo 2 Motion Fly More Combo](/product/dji-neo-2-motion-fly-more-combo) at $989 is a gentle introduction. It pairs the palm-sized Neo 2, about 151 g with 4K video up to 60 fps, with the Goggles N3, a motion controller and extra batteries. The motion controller steers the aircraft with simple hand movements while the goggles give you a first-person view. It suits beginners who want a fun, immersive first flight. Our guide to the [Neo 2 Fly More Combo](/blog/dji-neo-2-fly-more-combo-guide) explains which Neo 2 kit to buy.`,
      { h2: `Which controller should you buy?` },
      `The controller is the most personal choice in FPV, because it decides how the aircraft feels in your hands. DJI offers two styles that work with its goggles, and we stock both.`,
      { table: {
        head: ['Controller', 'Style', 'Best for', 'Price (AUD)'],
        rows: [
          ['[DJI RC Motion 3](/product/dji-rc-motion-3)', 'One-handed motion control', 'Beginners and Avata 2 pilots who want simple, intuitive flying', '$139'],
          ['[DJI FPV Remote Controller 3](/product/dji-fpv-remote-controller-3)', 'Joystick-style sticks', 'Pilots who want precise manual control', '$229'],
          ['[DJI RC Motion 2](/product/dji-rc-motion-2)', 'Motion control', 'Compatible DJI drones; check the product page', '$279'],
          ['[DJI Motion Controller](/product/dji-motion-controller)', 'One-handed motion control', 'Compatible DJI drones; check the product page', '$229']
        ]
      } },
      `Motion controllers feel natural because you steer by moving your hand and wrist. That makes them the easiest way to start, and they are included in every Avata 2 kit above. The FPV Remote Controller 3 gives you the familiar stick feel that many experienced pilots prefer for manual flying. Before you buy a controller on its own, check the product page to confirm that it works with your aircraft, because compatibility varies between the models. Our guide to [DJI controllers explained](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) covers the screen controllers as well.`,
      { h2: `DJI O4 Air Unit and O4 Air Unit Pro for custom FPV builds` },
      `Not every FPV pilot buys a ready-to-fly aircraft. Builders who assemble their own drone need a video link, and DJI sells that as a compact module. The [DJI O4 Air Unit](/product/dji-o4-air-unit) at $189 is a compact digital video transmission unit that gives a custom build a DJI digital FPV video link. The [DJI O4 Air Unit Pro](/product/dji-o4-air-unit-pro) at $349 adds a higher-grade camera for experienced builders and racers who want the best DJI digital FPV image on their airframe. These are components for people who are comfortable building and tuning an aircraft, so most beginners should start with a ready-to-fly kit.`,
      { h2: `Goggles accessories worth ordering` },
      `Goggles are a piece of equipment you carry and wear, so a few accessories are worth adding.`,
      { ul: [
        `[DJI Goggles Carry More Backpack](/product/dji-goggles-carry-more-backpack), $169: a backpack designed to carry goggles, a drone and accessories together.`,
        `[DJI FPV Goggles Battery](/product/dji-fpv-goggles-battery), $49: a battery for the original DJI FPV goggles.`,
        `[DJI FPV Goggles Antenna (Dual Band)](/product/dji-fpv-goggles-antenna-dual-band), $29: an antenna for the original DJI FPV goggles.`,
        `[DJI Avata 2 Intelligent Flight Battery](/product/dji-avata-2-intelligent-flight-battery), $119: a spare battery for the Avata 2.`,
        `[DJI Avata 2 Two-Way Charging Hub](/product/dji-avata-2-two-way-charging-hub), $79: charges several batteries together.`,
        `[DJI Avata 2 Propellers](/product/dji-avata-2-propellers), $19: a spare set for the inevitable bump.`
      ] },
      `You can browse every headset and controller in the [controllers and goggles category](/category/batteries/controllers-and-goggles), and the [bags and covers category](/category/batteries/bags-and-covers) lists more ways to carry them. Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after the packs.`,
      { h2: `Flying FPV safely and legally in Australia` },
      `FPV adds a responsibility that normal flying does not, because you cannot see the airspace around the aircraft while wearing goggles. Australian rules generally require you to keep the aircraft in sight, and goggles block that view, so plan your flying with a friend watching the drone. Check the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), read our [FAQ on registering a drone and CASA rules](/faq), stay clear of people, buildings and airports, and set your return-to-home altitude before you fly. A spotter, a clear field and a sensible battery warning level matter more than any piece of equipment.`,
      { h2: `Which FPV goggles and kit should you buy?` },
      { ul: [
        `**You want the best headset and are buying a kit:** the [Avata 2 Fly More Combo with the Goggles 3](/product/dji-avata-2-fly-more-combo-three-batteries), $1,559 with three batteries.`,
        `**You want the cheapest way into FPV:** the [Avata 2 Fly Smart Combo](/product/dji-avata-2-fly-smart-combo-single-battery) with the Goggles N3, $1,049.`,
        `**You want a gentler, lighter start:** the [Neo 2 Motion Fly More Combo](/product/dji-neo-2-motion-fly-more-combo), $989.`,
        `**You already own an aircraft and need only a headset:** the [Goggles N3](/product/dji-goggles-n3) at $359 or the [Goggles 3](/product/dji-goggles-3) at $869.`,
        `**You are building your own drone:** the [O4 Air Unit](/product/dji-o4-air-unit) at $189 or the [O4 Air Unit Pro](/product/dji-o4-air-unit-pro) at $349.`
      ] },
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you are unsure which goggles and controller match your aircraft, send us a message through the [quote form](/quote) and a specialist will confirm the right combination before you order. You can also see the whole [DJI Neo and FPV range](/category/camera-drones/dji-neo-and-fpv).`,
      { faq: [
        { q: `How much do DJI FPV goggles cost in Australia?`, a: `The DJI Goggles N3 are $359 and the DJI Goggles 3 are $869. Both prices are in Australian dollars with free express shipping.` },
        { q: `What is the difference between the DJI Goggles 3 and Goggles N3?`, a: `The Goggles 3 are DJI's premium headset with micro-OLED displays, while the Goggles N3 are the entry-level option that brings the same immersive view to the Avata 2 and similar aircraft at a lower price.` },
        { q: `Which Avata 2 combo should I buy?`, a: `The Fly More Combo includes the Goggles 3 and RC Motion 3, from $1,269. The Fly Smart Combo includes the Goggles N3 and RC Motion 3, from $1,049. Inside a kit, the Goggles 3 upgrade costs $220 to $280.` },
        { q: `Which DJI FPV controller should I buy?`, a: `The DJI RC Motion 3 at $139 is the easiest to learn, with one-handed motion control. The DJI FPV Remote Controller 3 at $229 gives stick control for precise manual flying.` },
        { q: `Do I need a spotter to fly FPV in Australia?`, a: `Australian rules generally require you to keep the aircraft in sight, and goggles block your view of the airspace, so a second person acting as a spotter is the safe approach. Check the current CASA rules before you fly.` }
      ] }
    ],
    targetKeywords: ['fpv goggles', 'dji fpv controller', 'dji o4 air unit pro', 'dji goggles 3 vs n3']
  },
  {
    id: 'post-23',
    slug: 'buy-dji-flip-australia-combos-prices-vs-neo-2-mini-4-pro',
    intent: 'transactional',
    title: `Buy the DJI Flip in Australia: Which Combo to Choose, What It Costs and How It Compares`,
    metaTitle: `Buy DJI Flip Australia: Combos and Prices`,
    metaDescription: `Buying the DJI Flip in Australia? Compare the RC-N3, RC 2 and Fly More Combo with AUD prices, spares, and the Neo 2 and Mini 4 Pro, with free shipping.`,
    subtitle: `Three ways to buy the foldable vlog drone with built-in propeller guards, what each costs and the spares to order on day one.`,
    date: 'October 2026',
    dateISO: '2026-10-30',
    modifiedISO: '2026-10-30',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Flip', 'Buying Guide', 'Camera Drones'],
    excerpt: `The DJI Flip starts at $559 and reaches $919 as a complete kit. We compare each package, set the Flip against the Neo 2 and Mini 4 Pro, and list the spares to buy with it.`,
    image: '/images/blog-dji-flip-buying-guide.webp',
    imageAlt: `DJI Flip with the RC-N3, with the RC 2 and the Fly More Combo with two extra batteries`,
    relatedProducts: ['dji-flip-dji-rc-n3', 'dji-flip-dji-rc-2', 'dji-flip-fly-more-combo-dji-rc-2', 'dji-flip-intelligent-flight-battery'],
    content: [
      `The DJI Flip is the drone people search for when they want to start filming from the air without worrying about the propellers. It is a foldable vlog drone with the guards built in, a 1/1.3-inch camera, 4K video at up to 60 fps and a take-off weight of about 249 g. With thousands of Australians searching for the DJI Flip every month, the most common question is no longer what it is, but which package to buy. There are three, they cost between $559 and $919, and the difference is the controller and the amount of battery power you receive. This guide explains each package, what it includes, who it suits, how the Flip compares with the Neo 2 and the Mini 4 Pro, and which spares are worth adding to the first order. You can check the specifications in this guide on DJI's official page for the [DJI Flip](https://www.dji.com/global/flip/specs).`,
      { h2: `What you are buying: the DJI Flip at a glance` },
      `The Flip is built around one idea: a camera drone that feels safe to fly near people, walls and furniture. The propeller guards are part of the aircraft, so there is nothing to clip on or lose. That makes it a natural first drone for vloggers, families and travellers, and a friendlier choice for flying in tight spaces than an open-propeller aircraft.`,
      { ul: [
        `**Camera:** 1/1.3-inch CMOS sensor, 48 MP.`,
        `**Video:** 4K at up to 60 fps.`,
        `**Weight:** about 249 g with built-in propeller guards.`,
        `**Flight time:** up to 31 minutes per battery.`,
        `**Controllers:** the DJI RC-N3, which uses your smartphone as the screen, or the DJI RC 2, which has a 5.5-inch screen built in.`
      ] },
      { h2: `Three ways to buy the DJI Flip` },
      `Every package uses the same aircraft and the same camera. The table shows what each includes and its price in Australian dollars.`,
      { table: {
        head: ['Package', 'Controller', 'What is included', 'Price (AUD)'],
        rows: [
          ['[DJI Flip (RC-N3)](/product/dji-flip-dji-rc-n3)', 'DJI RC-N3, uses your smartphone', 'Aircraft and controller', '$559'],
          ['[DJI Flip (RC 2)](/product/dji-flip-dji-rc-2)', 'DJI RC 2 with built-in screen', 'Aircraft and screen controller', '$759'],
          ['[DJI Flip Fly More Combo (RC 2)](/product/dji-flip-fly-more-combo-dji-rc-2)', 'DJI RC 2 with built-in screen', 'Two additional batteries, charging hub and shoulder bag', '$919']
        ]
      } },
      { h2: `DJI Flip with the RC-N3: the lowest entry price` },
      `At $559 the [DJI Flip with the RC-N3](/product/dji-flip-dji-rc-n3) is the cheapest way into the Flip. The RC-N3 is a compact controller that holds your smartphone and uses it as the display, which keeps the price and the weight of the kit down. It is a great first camera drone for vloggers, families and travellers who want an easy, safer-feeling aircraft and already own a modern phone. The thing to plan for is battery life. One battery gives up to 31 minutes, which sounds generous until you spend a few of those minutes learning the controls, so most buyers who start here add a spare battery within the first month.`,
      { h2: `DJI Flip with the RC 2: no phone required` },
      `The [DJI Flip with the RC 2](/product/dji-flip-dji-rc-2) at $759 adds $200 for the screen controller. The RC 2 has a bright 5.5-inch display built in, so there is no phone to clip on, no app to open on your own device and a faster set-up in the field. That matters more than it sounds when you fly outdoors often, because a phone on a controller can be hard to read in sun and can run flat in the middle of a shoot. Choose this package if you fly regularly and want a bright screen from day one. Our guide to [DJI controllers explained](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) compares the RC-N3 and the RC 2 in more detail.`,
      { h2: `DJI Flip Fly More Combo: the complete kit` },
      `The [DJI Flip Fly More Combo with the RC 2](/product/dji-flip-fly-more-combo-dji-rc-2) at $919 is the most complete way to buy. It adds two additional Intelligent Flight Batteries, a charging hub and a shoulder bag to the Flip and RC 2. That is $160 more than the RC 2 package, and it gives you three batteries in total, so one outing can cover several flights. It is ideal for vloggers and families who want several flights per outing and a bag to carry it all, and it is the package we recommend to most buyers because the alternative is buying those pieces one at a time.`,
      { h2: `Which DJI Flip package should you buy?` },
      { ul: [
        `**You want the lowest price and will use your phone:** the [Flip with the RC-N3](/product/dji-flip-dji-rc-n3) at $559.`,
        `**You want a built-in screen:** the [Flip with the RC 2](/product/dji-flip-dji-rc-2) at $759.`,
        `**You want several flights per outing and a bag:** the [Fly More Combo](/product/dji-flip-fly-more-combo-dji-rc-2) at $919.`
      ] },
      `If you cannot decide, work out how long you will fly in a typical outing. If it is more than half an hour, the Fly More Combo is the only package that does not leave you waiting for a charge.`,
      { h2: `DJI Flip vs DJI Neo 2 vs DJI Mini 4 Pro` },
      `Three small DJI drones compete for the same buyer, so here is how they differ. The [DJI Neo 2](/product/dji-neo-2-drone-only) is smaller and cheaper, weighing about 151 g and recording 4K at up to 60 fps. The [DJI Mini 4 Pro](/product/dji-mini-4-pro) is the step up for image quality, with a 1/1.3-inch 48 MP camera, up to 34 minutes of flight and a weight under 249 g.`,
      { table: {
        head: ['', 'DJI Neo 2', 'DJI Flip', 'DJI Mini 4 Pro'],
        rows: [
          ['Weight', 'About 151 g', 'About 249 g', 'Under 249 g'],
          ['Video', '4K up to 60 fps', '4K up to 60 fps', '4K, 48 MP camera'],
          ['Flight time', 'See product page', 'Up to 31 min', 'Up to 34 min'],
          ['Propeller guards', 'See product page', 'Built in', 'Optional guard accessory'],
          ['Starting price', '[$409](/product/dji-neo-2-drone-only)', '[$559](/product/dji-flip-dji-rc-n3)', '[$949](/product/dji-mini-4-pro)']
        ]
      } },
      `The Flip sits in the middle. Choose the Neo 2 if you want the smallest, lowest-priced aircraft and love flying close to the action. Choose the Mini 4 Pro if image quality and flight time matter most and you are happy to fly without built-in guards. Choose the Flip if you want a proper camera drone with guards that cannot fall off. Our full comparison of the [Neo 2, Flip and Mini 4 Pro](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) goes deeper, and our guide to the [Neo 2 Fly More Combo](/blog/dji-neo-2-fly-more-combo-guide) explains which Neo 2 kit to buy. If your budget stretches, our [Mini 5 Pro buying guide](/blog/buy-dji-mini-5-pro-australia-combos-prices) covers the 1-inch sensor option, and the [Mini 4K and Mini 3 guide](/blog/buy-dji-mini-4k-vs-mini-3-australia-prices) covers the lowest-priced Minis.`,
      { h2: `What to add: spares worth ordering with your Flip` },
      `A few small purchases make the first day easier. Every item below is listed for the Flip, so you can order it with the aircraft.`,
      { ul: [
        `[DJI Flip Intelligent Flight Battery](/product/dji-flip-intelligent-flight-battery), $99: a spare pack for up to 31 minutes of flight, the first accessory most buyers add.`,
        `[DJI Flip Parallel Charging Hub](/product/dji-flip-parallel-charging-hub), $69: charges several batteries together, useful if you start with the basic package and add spares.`,
        `[DJI Flip Propellers](/product/dji-flip-propellers), $19: a spare set keeps the drone flying after a knock.`
      ] },
      `You can browse everything for the Flip and the other small models in the [DJI Mini and Air range](/category/camera-drones/dji-mini-and-air) and the [drone batteries category](/category/batteries/drone-batteries). Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to look after the packs so they last, and our list of the [best drones for beginners](/blog/best-drones-for-beginners-australia) shows how the Flip fits among the easy options.`,
      { h2: `Flying a 249 g drone in Australia` },
      `At about 249 g the Flip is close to the 250 g limit that makes small drones simple to fly, which is one reason the weight is such a selling point. Rules depend on the weight of the aircraft and on whether you fly for fun or for paid work, and they change from time to time. Always confirm the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) before your first flight, read our [FAQ on registering a drone and CASA rules](/faq) and keep clear of people, airports and restricted areas. Built-in guards reduce the risk of a collision, but they do not replace careful flying and keeping the aircraft in sight.`,
      { h2: `Should you buy a new or used Flip?` },
      `A new Flip arrives with a full warranty, genuine batteries and current firmware. A used one may be cheaper, but a worn battery or a cracked guard can erase the saving quickly, so read our guide to [buying a new or used DJI drone](/blog/buying-a-new-vs-used-dji-drone-australia) before you commit. If you want a drone for paid work rather than a hobby, our [enterprise drone category](/category/enterprise-drones) lists the commercial aircraft.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you are unsure which package suits you, send us a message through the [quote form](/quote) and a specialist will recommend one.`,
      { faq: [
        { q: `How much does the DJI Flip cost in Australia?`, a: `The DJI Flip with the RC-N3 is $559, the Flip with the RC 2 is $759 and the Flip Fly More Combo with the RC 2 is $919. All prices are in Australian dollars with free express shipping.` },
        { q: `Which DJI Flip combo is best?`, a: `For most buyers the Fly More Combo is the best value because it adds two extra batteries, a charging hub and a shoulder bag to the RC 2 package. Choose the RC-N3 version if you want the lowest price and are happy to use your phone as the screen.` },
        { q: `Does the DJI Flip have propeller guards?`, a: `Yes. The guards are built in, which makes the Flip friendlier around people and objects than an open-propeller drone.` },
        { q: `How long does the DJI Flip fly?`, a: `Up to 31 minutes per battery. A Fly More Combo gives you three batteries for several flights in a day.` },
        { q: `Is the DJI Flip better than the DJI Neo 2 or Mini 4 Pro?`, a: `The Neo 2 is smaller and cheaper, the Mini 4 Pro offers more flight time and a higher-end camera, and the Flip adds built-in propeller guards at a price between the two.` }
      ] }
    ],
    targetKeywords: ['dji flip', 'dji flip fly more combo', 'dji flip price', 'dji flip drone']
  },
  {
    id: 'post-24',
    slug: 'buy-dji-matrice-australia-matrice-4-30-400-compared-by-price',
    intent: 'transactional',
    title: `Buy a DJI Matrice in Australia: Matrice 4, Matrice 30 and Matrice 400 Compared by Price and Job`,
    metaTitle: `Buy a DJI Matrice in Australia: 4, 30 and 400`,
    metaDescription: `Which DJI Matrice should you buy in Australia? Compare the Matrice 4E, 4T, 30, 30T and 400 with AUD prices, Care bundles, docks and a fast quote.`,
    subtitle: `Match the aircraft to the job: mapping, thermal, inspection or heavy-lift, with the price of each bundle and what to budget on top.`,
    date: 'October 2026',
    dateISO: '2026-10-30',
    modifiedISO: '2026-10-30',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Matrice', 'Enterprise Drones', 'Buying Guide'],
    excerpt: `DJI Matrice aircraft in our range start at $7,395 and reach $18,550. We match the Matrice 4E, 4T, 30, 30T and 400 to the job, price each bundle and explain how to get a fleet quote.`,
    image: '/images/blog-dji-matrice-buying-guide.webp',
    imageAlt: `DJI Matrice 4 Enterprise, DJI Matrice 30 and the DJI Matrice 400 enterprise drones`,
    relatedProducts: ['dji-matrice-4-enterprise', 'dji-matrice-4-thermal', 'dji-matrice-30', 'dji-matrice-400-worry-free-plus-combo'],
    content: [
      `Choosing a DJI Matrice is a business decision, not a hobby purchase. The aircraft you buy decides which jobs you can quote for, how long a crew stays in the field and how much you spend on batteries, payloads and cover for the next several years. Searches for the DJI Matrice and for commercial drones in Australia keep growing as utilities, councils, surveyors, emergency services and farms replace manual inspection with aircraft. This guide matches each Matrice in our range to the work it does best, lists the price of every bundle in Australian dollars, shows what to budget on top of the aircraft, and explains how to get a written quote for a fleet. You can check the specifications in this guide on DJI's official page for the [DJI Matrice 4 series](https://enterprise.dji.com/matrice-4-series/specs).`,
      { h2: `The DJI Matrice range at a glance` },
      `Four families cover most commercial work. The Matrice 4 series is the newest and lightest, built for mapping and fast inspection. The Matrice 30 series is the weather-resistant all-rounder. The Matrice 400 is the heavy-lift platform for crews who carry more than one payload. All of them carry cameras and a laser rangefinder, and the thermal versions add a radiometric thermal camera for night and heat work.`,
      { table: {
        head: ['Aircraft', 'Best for', 'Flight time', 'Price (AUD)'],
        rows: [
          ['[DJI Matrice 4 Enterprise](/product/dji-matrice-4-enterprise)', 'Mapping and fast inspection', 'Up to 49 min', '$7,395'],
          ['[DJI Matrice 4E Plus Combo](/product/dji-matrice-4e-plus-combo)', 'Mapping with Care Enterprise cover', 'Up to 49 min', '$8,360'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', 'Thermal, public safety, night work', 'Up to 49 min', '$10,159'],
          ['[DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo)', 'Thermal with Care Enterprise cover', 'Up to 49 min', '$11,248'],
          ['[DJI Matrice 30](/product/dji-matrice-30)', 'IP55 inspection, portable', 'Up to 41 min', '$10,989'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', 'IP55 thermal inspection', 'Up to 41 min', '$14,917'],
          ['[DJI Matrice 400 Worry-Free Plus Combo](/product/dji-matrice-400-worry-free-plus-combo)', 'Heavy-lift, multi-payload', 'See product page', '$18,550']
        ]
      } },
      { h2: `DJI Matrice 4 series: mapping and thermal in a 1.2 kg airframe` },
      `The [Matrice 4 Enterprise](/product/dji-matrice-4-enterprise) at $7,395 is built around a 4/3 CMOS wide camera with a mechanical shutter, which matters for mapping because the shutter avoids the distortion that rolling-shutter cameras introduce on a fast pass. Two telephoto cameras and a laser rangefinder sit beside it, and the whole aircraft weighs about 1.2 kg and flies for up to 49 minutes. It is lighter and quicker to deploy than the Matrice 30 series, which makes it the natural choice for surveyors and for emergency teams who need to launch in minutes. If you want it with protection included, the [Matrice 4E Plus Combo](/product/dji-matrice-4e-plus-combo) at $8,360 adds Care Enterprise coverage.`,
      `The thermal version, the [Matrice 4 Thermal](/product/dji-matrice-4-thermal) at $10,159, adds a 640×512 thermal camera with a sensitivity of 50 mK or better, plus a near-infrared auxiliary light for night work. It suits public safety, search and rescue and inspection crews who work day and night. The [Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) at $11,248 adds Care Enterprise coverage and extra batteries.`,
      { h2: `DJI Matrice 30 series: the weather-resistant all-rounder` },
      `The [Matrice 30](/product/dji-matrice-30) at $10,989 is the aircraft to choose when the weather will not cooperate. It carries an IP55 rating, operates from -20°C to 50°C and folds into a backpack case, with a 12 MP wide camera, a 48 MP zoom camera (5–16× optical) and a laser rangefinder that reaches 1,200 m. Flight time is up to 41 minutes with hot-swappable batteries, and it takes off at about 3.77 kg with batteries. The [Matrice 30T](/product/dji-matrice-30t) at $14,917 adds a 640×512 radiometric thermal camera, which makes it a favourite for firefighting, police, power-line and solar inspection. Both are also sold as Worry-Free combos, covered below.`,
      { h2: `DJI Matrice 400: heavy-lift for crews with several payloads` },
      `The [Matrice 400 Worry-Free Plus Combo](/product/dji-matrice-400-worry-free-plus-combo) at $18,550 is DJI's heavy-lift Matrice 400 platform with a Worry-Free Plus bundle and Care coverage. It carries multiple payloads, with dual and third gimbal connectors available, for demanding inspection and survey work. It suits specialist operators and public safety agencies who need more than one sensor on the same flight. If you plan to add a second or third gimbal, budget for the connectors: the [dual gimbal connector](/product/dji-matrice-400-dual-gimbal-connector) is $390 and the [third gimbal connector](/product/dji-matrice-400-third-gimbal-connector) is $230.`,
      { h2: `Which DJI Matrice for which job?` },
      { ul: [
        `**Mapping and surveying:** the Matrice 4 Enterprise or 4E Plus Combo, for the mechanical-shutter wide camera.`,
        `**Search and rescue, police and fire at night:** the Matrice 4 Thermal or Matrice 30T, for the thermal camera and light.`,
        `**Inspection in poor weather:** the Matrice 30 or 30T, for IP55 and a wide temperature range.`,
        `**Multiple sensors on one aircraft:** the Matrice 400, for its heavy-lift capacity and extra gimbal connectors.`,
        `**Heavy thermal payloads and long-range zoom:** a Matrice 350 RTK with a Zenmuse H30T. Ask us about the aircraft and read our guide to [thermal imaging cameras](/blog/buy-thermal-imaging-camera-australia-flir-vs-dji-thermal-cameras).`
      ] },
      { h2: `Worry-Free and Care Enterprise: what the bundles add` },
      `Enterprise aircraft are expensive to repair, so most commercial buyers choose a bundle with DJI Care Enterprise coverage. The Basic and Plus levels differ in how much they cover, and you should read DJI's terms before you buy. Here is how the bundles are priced.`,
      { table: {
        head: ['Bundle', 'Cover', 'Price (AUD)'],
        rows: [
          ['[Matrice 30 Worry-Free Basic Combo](/product/matrice-30-worry-free-basic-combo)', 'Care Enterprise Basic', '$10,989'],
          ['[Matrice 30 Worry-Free Plus Combo](/product/matrice-30-worry-free-plus-combo)', 'Care Enterprise Plus', '$11,363'],
          ['[Matrice 30T Worry-Free Basic Combo](/product/matrice-30t-worry-free-basic-combo)', 'Care Enterprise Basic', '$14,917'],
          ['[Matrice 30T Worry-Free Plus Combo](/product/matrice-30t-worry-free-plus-combo)', 'Care Enterprise Plus', '$15,473']
        ]
      } },
      `For the Matrice 30T, the step from Basic to Plus costs $556. For a crew that flies daily, that is a small price for the higher level of cover.`,
      { h2: `Budget for more than the aircraft` },
      `The aircraft price is only part of the cost. Commercial crews should plan for batteries, charging, extra payload hardware and training. These items are listed for the Matrice 4 series.`,
      { ul: [
        `[DJI Matrice 4 Battery](/product/dji-matrice-4-battery), $280: spare packs keep a crew flying through a shift.`,
        `[DJI Matrice 4 Series Charging Hub (200W)](/product/dji-matrice-4-series-charging-hub-200w), $140: charges batteries together.`,
        `[DJI Matrice 4 Obstacle Sensing Module](/product/dji-matrice-4-obstacle-sensing-module), $2,380: added obstacle sensing for demanding sites.`,
        `[DJI Matrice 4 Series Carrying Case Strap](/product/dji-matrice-4-series-carrying-case-strap), $80: easier transport.`
      ] },
      `Our [enterprise accessories category](/category/enterprise-drones/enterprise-accessories) lists everything for the Matrice range, and our [thermal and mapping payloads](/category/cameras-sensors) are in the cameras and sensors category.`,
      { h2: `Automate it: the DJI Dock 3` },
      `Once a crew has proven the value of a drone, the next step is often to stop sending a pilot to site. The [DJI Dock 3](/product/dji-dock-3) at $19,999 is an automated dock that launches, lands, charges and houses a compatible Matrice 4D series aircraft for remote operations through DJI FlightHub 2. If you need thermal for night security, the [DJI Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) at $34,278 includes a Matrice 4TD thermal aircraft, Care Enterprise Plus, a speaker and a spotlight. Browse the full [DJI Dock range](/category/enterprise-drones/dji-dock) to compare. These systems are quoted with training and accessories, so use the [quote form](/quote) for fleet pricing.`,
      { h2: `Rules, training and getting a quote` },
      `Flying commercially may require CASA accreditation or an operator certificate, depending on the aircraft weight and the work. Check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), read our [FAQ on registering a drone and CASA rules](/faq) and plan training before the aircraft arrives. For a deeper look at how the Matrice family sits beside the Mavic 3 Enterprise and Phantom 4, read our [enterprise drone guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide), and for the mapping decision, our comparison of [LiDAR and photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia).`,
      `Tell us the job, the sites, the number of aircraft and your budget through the [quote form](/quote). We will confirm the right aircraft, bundle and accessories and send a written quotation with the price per unit, warranty, availability and delivery to your location, usually within one business day.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. Browse the whole [enterprise and thermal drone range](/category/enterprise-drones) or the [DJI Matrice range](/category/enterprise-drones/dji-matrice).`,
      { faq: [
        { q: `How much does a DJI Matrice cost in Australia?`, a: `In our range, the Matrice 4 Enterprise is $7,395, the Matrice 4 Thermal is $10,159, the Matrice 30 is $10,989, the Matrice 30T is $14,917 and the Matrice 400 Worry-Free Plus Combo is $18,550. All prices are in Australian dollars with free express shipping.` },
        { q: `Which DJI Matrice is best for thermal work?`, a: `The Matrice 4 Thermal is the lightest and most affordable, with a 640×512 thermal camera and up to 49 minutes of flight. The Matrice 30T adds an IP55 rating for poor weather and up to 41 minutes of flight.` },
        { q: `What is the difference between Worry-Free Basic and Plus?`, a: `Both bundle DJI Care Enterprise coverage with the aircraft. Plus is the higher level of cover. For the Matrice 30T the Plus bundle is $556 more than the Basic bundle.` },
        { q: `Can I buy several Matrice drones for a fleet?`, a: `Yes. Send the number of aircraft, the job and your budget through the quote form and we will send a written quotation with unit and total prices, warranty, availability and delivery.` },
        { q: `Do I need CASA approval to fly a Matrice?`, a: `Commercial flying may require CASA accreditation or an operator certificate, depending on the aircraft weight and the work. Check the CASA website, or ask us for guidance.` }
      ] }
    ],
    targetKeywords: ['dji matrice', 'commercial drones', 'dji matrice 4', 'matrice 30']
  },
  {
    id: 'post-25',
    slug: 'buy-thermal-imaging-camera-australia-flir-vs-dji-thermal-cameras',
    intent: 'transactional',
    title: `Buy a Thermal Imaging Camera in Australia: FLIR vs DJI Thermal Cameras for Drones, Compared by Price`,
    metaTitle: `Buy a Thermal Imaging Camera: FLIR vs DJI Prices`,
    metaDescription: `Buying a thermal imaging camera in Australia? Compare FLIR and DJI Zenmuse thermal cameras and thermal drones by resolution and AUD price, with a quote.`,
    subtitle: `What resolution you really need, how FLIR and DJI thermal cameras differ, and when to buy a thermal camera or a whole thermal drone.`,
    date: 'October 2026',
    dateISO: '2026-10-30',
    modifiedISO: '2026-10-30',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['Thermal Imaging', 'FLIR', 'Buying Guide'],
    excerpt: `Thermal imaging cameras for drones range from $6,999 to $17,335 in our range, and thermal drones from $10,159. We compare FLIR and DJI by resolution, price and use, and explain how to choose.`,
    image: '/images/blog-thermal-imaging-camera-buying-guide.webp',
    imageAlt: `DJI Zenmuse H30T thermal camera, FLIR VUE TZ20 thermal camera and the DJI Matrice 30T thermal drone`,
    relatedProducts: ['dji-zenmuse-h30t', 'flir-vue-tz20', 'dji-mavic-pro-flir-boson-thermal-ninja', 'dji-matrice-4-thermal'],
    content: [
      `A thermal imaging camera shows heat instead of light. That single difference lets a crew find a missing person in a paddock at night, spot a failing connector on a power line, locate a leak under a roof or see which solar panels in a row are underperforming. It is why searches for thermal cameras, thermal imaging cameras and FLIR thermal cameras run into the thousands every month in Australia. It is also why buyers get confused, because the same words cover a handheld camera, a payload that bolts under a drone and a complete thermal drone. This guide explains what separates one thermal camera from another, compares the FLIR and DJI options in our range with Australian prices, and shows how to decide between buying a camera for an aircraft you own and buying a complete thermal drone.`,
      { h2: `How a thermal imaging camera works, in plain terms` },
      `Every object above absolute zero gives off infrared radiation. A thermal camera measures it with a sensor called a microbolometer and turns the readings into a picture, with warmer areas shown brighter or in colour. Unlike a normal camera it needs no light, so it works at night and through light smoke. It does not see through glass or walls, and it shows surface temperature, so the picture depends on what is in front of the lens. Reading it well is a skill, but choosing one comes down to four numbers.`,
      { ul: [
        `**Resolution:** the number of thermal pixels. 640×512 is 327,680 pixels. 1280×1024 is 1,310,720, exactly four times as many.`,
        `**Sensitivity:** how small a temperature difference the camera can show, quoted in millikelvin (mK). A lower number is better.`,
        `**Radiometric measurement:** whether the camera reports a temperature for each pixel, which matters for inspection reports.`,
        `**Lens and zoom:** a wide view finds the problem, and a narrow view or zoom lets you inspect it from a safe distance.`
      ] },
      { h2: `Thermal imaging cameras for drones: the options we supply` },
      `Our range covers three kinds of buyer: crews who already own a compatible aircraft, owners of an older airframe who want to convert it, and teams who want a ready-to-fly thermal drone. The table compares the payloads first.`,
      { table: {
        head: ['Thermal camera', 'Thermal sensor', 'Fits', 'Price (AUD)'],
        rows: [
          ['[DJI Zenmuse H30T](/product/dji-zenmuse-h30t)', '1280×1024 uncooled VOx, 30 fps', 'Matrice 350 RTK and 300 RTK', '$17,335'],
          ['[FLIR VUE TZ20](/product/flir-vue-tz20)', 'Dual FLIR Boson 640×512, 12 µm', 'DJI Matrice 200 series and Matrice 300', '$11,700'],
          ['[DJI Mavic Pro FLIR Boson Thermal Ninja](/product/dji-mavic-pro-flir-boson-thermal-ninja)', 'FLIR Boson core, 12 µm VOx', 'Conversion for the DJI Mavic Pro', '$6,999']
        ]
      } },
      { h2: `DJI Zenmuse H30T: the highest-resolution option` },
      `The [Zenmuse H30T](/product/dji-zenmuse-h30t) at $17,335 is the highest-resolution thermal option in the Zenmuse H series. Its 1280×1024 thermal sensor records at 30 fps and measures from -20°C to 1,600°C, and the same gimbal carries a 48 MP wide camera, a 40 MP zoom camera with 34× optical zoom and a laser rangefinder that reaches 3,000 m. A near-infrared auxiliary light helps in low light. It weighs 920 g and is designed for the Matrice 350 RTK and 300 RTK. This is the payload for long-range thermal inspection, search and rescue and fire support, where a bigger sensor shows detail from a greater distance. If you want the same gimbal without the thermal sensor, the [Zenmuse H30](/product/dji-zenmuse-h30) is $8,495, and the [H30T infrared density filter](/product/zenmuse-h30t-infrared-density-filter) at $230 is an accessory for hot targets.`,
      { h2: `FLIR VUE TZ20: two thermal views in one gimbal` },
      `The [FLIR VUE TZ20](/product/flir-vue-tz20) at $11,700 is built around two FLIR Boson 640×512 thermal sensors with 12 µm pixels. One gives a wide 95° view and the other a narrow 18° view, with 5× optical zoom and 4× digital zoom, so an operator can scan wide and then zoom without changing payloads. It weighs about 640 g, carries an IP44 rating and fits the DJI Matrice 200 series and Matrice 300. It is a trusted choice for firefighting and public safety teams who want two thermal views in one gimbal. The radiometric version is the TZ20-R, so ask us for details if you need temperature measurement.`,
      { h2: `FLIR Boson conversion: thermal on a small airframe` },
      `The [DJI Mavic Pro FLIR Boson Thermal Ninja](/product/dji-mavic-pro-flir-boson-thermal-ninja) at $6,999 turns a DJI Mavic Pro into a thermal drone using a FLIR Boson core. It is a compact, lower-cost way to add thermal to a small, familiar platform, and it suits inspectors, roofers and researchers. The Boson resolution and lens options are confirmed on request, so contact us before you buy to make sure the specification matches your job.`,
      { h2: `Or buy the whole thing: thermal drones with the camera built in` },
      `If you do not own a compatible aircraft, buying a complete thermal drone is often cheaper and simpler than buying a payload and an aircraft separately. The thermal camera is integrated, calibrated and covered by one warranty.`,
      { table: {
        head: ['Thermal drone', 'Thermal sensor', 'Flight time', 'Price (AUD)'],
        rows: [
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640×512, 12 µm, 50 mK or better', 'Up to 49 min', '$10,159'],
          ['[DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo)', '640×512 with Care Enterprise cover', 'Up to 49 min', '$11,248'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640×512 radiometric, IP55', 'Up to 41 min', '$14,917'],
          ['[DJI Dock 3 Thermal Package](/product/dji-dock-3-thermal-package)', 'Matrice 4TD thermal with automated dock', 'See product page', '$34,278'],
          ['[FLIR ION M440 Tactical Drone](/product/flir-ion-m440-tactical-drone)', 'FLIR Boson 320 thermal, dual 12 MP visible', 'About 35 min', '$27,500']
        ]
      } },
      `Notice what the first row tells you. The Matrice 4 Thermal, at $10,159, includes the aircraft, a 640×512 thermal camera, three visual cameras and a laser rangefinder. A thermal payload alone, such as the Zenmuse H30T, costs $17,335 before you buy an aircraft to carry it. For most crews the complete thermal drone is the better first purchase, and the payload route makes sense when you already own the aircraft or need the extra resolution.`,
      { h2: `How much resolution do you need?` },
      `The right resolution depends on how far you are from the target and how small the fault is. Here is a practical guide.`,
      { ul: [
        `**Searching for people, animals or vehicles:** 640×512 is enough for most crews, because the target is large and warm against its background.`,
        `**Roofs, solar panels and building envelopes:** 640×512 works at close range, and a higher resolution lets you fly higher and cover more ground.`,
        `**Power-line hardware and substations:** the extra detail of a 1280×1024 sensor such as the H30T helps you identify a hot connector from a safe distance.`,
        `**Industrial and firefighting work:** look for radiometric measurement and a wide temperature range.`
      ] },
      `As a rule, pay for resolution only if distance is part of the job. If you can fly close to the target, a 640×512 camera does the work at a much lower price. Our [thermal drones guide](/blog/thermal-drones-australia-guide) walks through the selection process step by step.`,
      { h2: `Buy or hire a thermal camera?` },
      `Thermal camera hire is a common search because a one-off job does not always justify a purchase. The decision is simple arithmetic. Divide the purchase price by your hire day rate to find the number of days at which buying becomes cheaper. If you expect to work more days than that within the life of the equipment, buy. If you work a handful of days a year, hiring costs less. Buying also gives you control over scheduling, the ability to respond to urgent jobs and a camera you can learn deeply, which usually improves your results. If you would rather compare the cost of a camera and a whole drone before you decide, use the [quote form](/quote) and we will price both.`,
      { h2: `Thermal camera or thermal drone? A short decision guide` },
      { ul: [
        `**You already own a Matrice 350 RTK or 300 RTK:** buy the [Zenmuse H30T](/product/dji-zenmuse-h30t).`,
        `**You own a Matrice 200 series or 300:** consider the [FLIR VUE TZ20](/product/flir-vue-tz20).`,
        `**You own a Mavic Pro and want thermal cheaply:** the [Boson Thermal Ninja](/product/dji-mavic-pro-flir-boson-thermal-ninja).`,
        `**You own nothing yet:** the [Matrice 4 Thermal](/product/dji-matrice-4-thermal) or [Matrice 30T](/product/dji-matrice-30t).`,
        `**You need around-the-clock automation:** the [Dock 3 Thermal Package](/product/dji-dock-3-thermal-package).`
      ] },
      `Our guide to [choosing between a thermal camera and a thermal drone](/blog/thermal-camera-vs-thermal-drone-infrared-inspections) explains this decision in more depth, and our guide to [buying a drone heat camera](/blog/buy-drone-heat-camera-australia-thermal-drones-payloads) compares more aircraft. For the full line-up of aircraft, read our guide to [buying a DJI Matrice](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price).`,
      { h2: `Rules, training and warranty` },
      `Flying a thermal drone commercially may require CASA accreditation or an operator certificate, depending on the aircraft weight and the work. Check [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and read our [FAQ on registering a drone and CASA rules](/faq). Thermal interpretation also needs training, because a wrong reading can send a crew to the wrong place. Every product is genuine Australian stock backed by manufacturer warranty and Australian Consumer Law guarantees, and the Care Enterprise bundles protect the aircraft itself.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, or tell us the job, the aircraft you own and your budget through the [quote form](/quote) and a specialist will confirm the right thermal camera or drone. Browse the full [thermal camera range](/category/cameras-sensors/thermal-cameras), the [Zenmuse camera range](/category/cameras-sensors/dji-zenmuse-cameras) and the [Autel and FLIR drones](/category/enterprise-drones/autel-and-flir-drones).`,
      { faq: [
        { q: `How much does a thermal imaging camera for a drone cost in Australia?`, a: `In our range, the FLIR Boson conversion for the Mavic Pro is $6,999, the FLIR VUE TZ20 is $11,700 and the DJI Zenmuse H30T is $17,335. Complete thermal drones start at $10,159 for the Matrice 4 Thermal. All prices are in Australian dollars.` },
        { q: `Is FLIR or DJI better for thermal imaging?`, a: `Neither is better for every job. DJI offers the higher-resolution sensor in the Zenmuse H30T at 1280×1024 and integrates tightly with the Matrice aircraft. FLIR offers dual 640×512 Boson sensors in the VUE TZ20 for wide and narrow views, and conversion options for older airframes.` },
        { q: `What resolution thermal camera do I need?`, a: `A 640×512 sensor is enough for most search, rescue and close-range inspection. Choose 1280×1024 when you need to identify small faults from a distance.` },
        { q: `Should I buy a thermal camera or a thermal drone?`, a: `If you already own a compatible aircraft, buy the camera. If not, a complete thermal drone such as the Matrice 4 Thermal usually costs less than a payload plus an aircraft.` },
        { q: `Can I hire a thermal camera instead of buying?`, a: `Hiring suits a few days of work a year. Divide the purchase price by the hire day rate to find the point at which buying becomes cheaper.` }
      ] }
    ],
    targetKeywords: ['thermal imaging camera', 'thermal camera', 'flir thermal cameras', 'infrared camera']
  },
  {
    id: 'post-26',
    slug: 'do-i-need-to-register-a-drone-in-australia-casa-rules',
    intent: 'informational',
    title: `Do You Need to Register a Drone in Australia? CASA Rules, Accreditation and Where You Can Fly`,
    metaTitle: `Register a Drone in Australia: CASA Rules Explained`,
    metaDescription: `Do you need to register a drone in Australia? Plain-English CASA rules for hobby and work flying, the 250 g limit, accreditation, height, airports and people.`,
    subtitle: `A plain-English guide to when you must register, when you need accreditation or a licence, and the rules every pilot follows.`,
    date: 'October 2026',
    dateISO: '2026-10-31',
    modifiedISO: '2026-10-31',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['CASA Rules', 'Drone Registration', 'Beginner Guide'],
    excerpt: `Flying for fun needs no registration. Flying for work does, at any weight. This guide explains the 250 g line, accreditation, the standard flying rules and how to choose a drone that fits.`,
    image: '/images/blog-register-drone-australia-guide.webp',
    imageAlt: `DJI Mini 5 Pro, DJI Flip and DJI Air 3S drones, shown as examples of light and heavier aircraft`,
    relatedProducts: ['dji-mini-5-pro-dji-rc-n3', 'dji-flip-dji-rc-n3', 'dji-air-3s-dji-rc-n3', 'dji-mini-4k'],
    content: [
      `Almost every new drone owner asks the same question before the first flight: do I need to register this thing? The honest answer is that it depends on why you are flying, not only on the drone. Searches for how to register a drone in Australia are rising because the rules changed over the last few years, the recreational registration scheme was announced and then paused, and a lot of older advice online is out of date. This guide explains, in plain English, when registration applies, when accreditation or a licence applies, what the 250 g weight line really means, which rules every pilot follows whatever the weight, and how to choose a drone that fits the way you want to fly. It is general information based on the Civil Aviation Safety Authority (CASA) guidance available when we wrote it. Rules change, so always check [casa.gov.au](https://www.casa.gov.au/drones) before you fly.`,
      { h2: `The short answer: hobby flying vs flying for work` },
      `The deciding question is whether you fly for fun or for work. Flying for fun, as a hobby, does not currently require registration, a licence or accreditation, including for drones under 250 g. The Australian Government decided to pause the planned registration scheme for recreational drones over 250 g, and the recreational accreditation scheme was paused with it. Flying at or for work is different. If you use a drone in a business, you need to register the drone whatever it weighs, and you need an operator accreditation or a remote pilot licence. The table summarises it.`,
      { table: {
        head: ['Situation', 'Register the drone?', 'Accreditation or licence?'],
        rows: [
          ['Flying for fun, any weight', 'No, not currently', 'No, not currently'],
          ['Flying for work, micro drone (250 g or less)', 'Yes', 'Operator accreditation or a remote pilot licence'],
          ['Flying for work, heavier drone', 'Yes', 'Depends on the weight and the work: accreditation, a remote pilot licence or an operator certificate'],
          ['Any flying, any weight', 'Not applicable', 'Standard operating conditions always apply']
        ]
      } },
      `CASA says [operator accreditation](https://www.casa.gov.au/drones/operator-accreditation-certificate/get-or-renew-your-operator-accreditation) is free, online and valid for three years, and you must be 16 or older to hold it. Registration fees and renewal periods depend on the weight of the drone, so check [CASA's registration page](https://www.casa.gov.au/drones/drone-registration/registration-requirements) for the current figures rather than relying on an old article. If you are not sure which side of the line you are on, our [FAQ on CASA rules and registration](/faq) is a good first stop, and you can ask us through the [quote form](/quote).`,
      { h2: `What the 250 g line actually means` },
      `The 250 g figure is the weight that separates a micro drone from a heavier one. A micro drone is simpler in several ways, which is why light aircraft sell so well to beginners and travellers. The weight that counts is the take-off weight, with the battery fitted, so a lighter battery or a heavier one can change which side of the line the aircraft sits on. Here is how some popular aircraft in our range compare, using the weights from their product pages.`,
      { table: {
        head: ['Drone', 'Take-off weight', 'Side of the 250 g line', 'Price (AUD)'],
        rows: [
          ['[DJI Neo 2](/product/dji-neo-2-drone-only)', 'About 151 g', 'Under 250 g', '$409'],
          ['[DJI Mini 4K](/product/dji-mini-4k)', 'Under 250 g', 'Under 250 g', '$449'],
          ['[DJI Mini 3](/product/dji-mini-3-dji-rc-n1)', 'Under 249 g', 'Under 250 g', '$509'],
          ['[DJI Flip](/product/dji-flip-dji-rc-n3)', 'About 249 g', 'Just under 250 g', '$559'],
          ['[DJI Mini 5 Pro](/product/dji-mini-5-pro-dji-rc-n3)', 'Under 250 g with the standard battery', 'Under 250 g', '$1,119'],
          ['[DJI Avata 2](/product/dji-avata-2-drone-only)', 'About 377 g', 'Over 250 g', '$649'],
          ['[DJI Air 3S](/product/dji-air-3s-dji-rc-n3)', 'About 724 g', 'Over 250 g', '$1,699'],
          ['[DJI Matrice 4 Enterprise](/product/dji-matrice-4-enterprise)', '1,219 g', 'Over 250 g', '$7,395']
        ]
      } },
      `Notice the footnote on the Mini 5 Pro. The standard battery keeps it under 250 g, but the larger Plus battery makes the aircraft heavier than 250 g. The same is true for the Mini 3 and Mini 4 Pro, where the Plus battery adds weight. If staying under the line matters to you, buy the standard battery and read our guides to the [Mini 5 Pro](/blog/buy-dji-mini-5-pro-australia-combos-prices) and the [Mini 4K and Mini 3](/blog/buy-dji-mini-4k-vs-mini-3-australia-prices).`,
      { h2: `The standard operating conditions every pilot follows` },
      `Whatever the weight, and whether you fly for fun or for work, [CASA's standard operating conditions](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) apply. They are the baseline rules for micro and excluded category flying, and they are short enough to memorise.`,
      { ul: [
        `**Height:** stay at or below 120 m (400 ft) above the ground.`,
        `**Line of sight:** keep the drone within visual line of sight at all times, which means you can see it with your own eyes and not only on a screen.`,
        `**People:** keep at least 30 m away from people who are not part of your flight, and never fly over anyone.`,
        `**Populous areas:** do not fly over crowded or populous areas, such as a beach, a sports ground or a festival.`,
        `**One at a time:** fly only one drone at a time.`,
        `**Restricted areas:** do not fly in prohibited or restricted airspace, or interfere with an emergency or public safety operation.`
      ] },
      `Our [flight rules answer in the FAQ](/faq) covers the same list in short form. Built-in guards help protect people, but they do not change the rules, so a drone like the [DJI Flip](/product/dji-flip-dji-rc-n3) still has to stay 30 m from people.`,
      { h2: `Flying near airports and helipads` },
      `Airspace is where beginners get into the most trouble, because you cannot see it. For drones heavier than 250 g, CASA says you must not fly within 5.5 km of a controlled aerodrome, or in the approach and departure paths of a runway. For drones of 250 g or less, there is more room: you may fly up to 45 m above the ground within 5.5 km of an aerodrome, but not inside the aerodrome boundary, not in the approach and departure paths, and not in a way that creates a collision hazard. At aerodromes without a control tower, the rule is about awareness: if you become aware of an aircraft, you must not launch, or you must move the drone away from the aircraft's path and land as soon as possible. Use a map of controlled airspace before every new location, and never assume a quiet field is a safe one.`,
      { h2: `When you fly for work: what changes` },
      `Using a drone to earn money turns a hobby into an operation, and the rules follow. Photographers who sell aerial images, real estate agents who shoot listings, farmers who spray their own crops for a fee, roof inspectors and surveyors all count as flying for work, and the registration and accreditation requirements apply. Heavier aircraft and more complex tasks, such as flying near people or beyond line of sight, may need a remote pilot licence or an operator certificate. Check CASA's weight categories page for your aircraft, and plan training before the aircraft arrives, not after.`,
      `Choosing the right tool for the job also affects the rules you work under. Our guides explain the options for common commercial work: the [best drones for real estate and aerial photography](/blog/best-drones-for-real-estate-and-aerial-photography), the [enterprise drone guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide), [buying a DJI Matrice](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price) and the [agricultural spraying guide](/blog/agricultural-spraying-drones-australia-guide). If you are unsure which aircraft and training path suits your business, send the details through the [quote form](/quote) and a specialist will help.`,
      { h2: `Five myths about drone rules` },
      { ul: [
        `**"Under 250 g means no rules."** Wrong. The standard operating conditions still apply, and flying for work still needs registration and accreditation.`,
        `**"My drone has guards, so it is safe over people."** Wrong. You still must not fly over people and must keep 30 m away.`,
        `**"The screen is enough to keep it in sight."** Wrong. Visual line of sight means you can see the drone with your own eyes.`,
        `**"No one will notice a hobby flight near an airport."** Wrong. Airspace rules protect passenger aircraft, and breaking them can carry serious penalties.`,
        `**"A used drone has no rules attached."** Wrong. The rules follow the pilot and the weight, not the age of the aircraft. Read our guide to [buying a new or used DJI drone](/blog/buying-a-new-vs-used-dji-drone-australia) before you buy second-hand.`
      ] },
      { h2: `A pre-flight checklist for new pilots` },
      { ul: [
        `Check whether you are flying for fun or for work, and register or accredit first if it is for work.`,
        `Look at a map of controlled airspace and restricted areas for your location.`,
        `Check the weather, the wind and your battery levels. Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to keep packs healthy.`,
        `Walk the site and note people, roads, power lines and trees.`,
        `Set your return-to-home height above the tallest obstacle, and keep the aircraft in sight.`,
        `Fly in a clear space for the first few flights. Our list of the [best drones for beginners](/blog/best-drones-for-beginners-australia) shows the easiest aircraft to learn on.`
      ] },
      { h2: `Choosing a drone that fits the rules you want to fly under` },
      `If you want the simplest hobby flying, a light aircraft keeps life easy. The [Neo 2](/product/dji-neo-2-drone-only), [Mini 4K](/product/dji-mini-4k) and [Mini 3](/product/dji-mini-3-dji-rc-n1) are the lowest-priced under-250 g options, and the [Flip](/blog/buy-dji-flip-australia-combos-prices-vs-neo-2-mini-4-pro) adds built-in guards at about 249 g. If you want more camera and flight time and are happy to fly a heavier aircraft, the [Air 3S](/blog/buy-dji-air-3s-australia-combos-vs-air-3) is the step up. You can compare the whole range in the [DJI Mini and Air category](/category/camera-drones/dji-mini-and-air) or browse every [camera drone](/category/camera-drones). For commercial buyers, our [enterprise drone category](/category/enterprise-drones) lists the aircraft built for work.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, or ask a question through the [contact page](/contact) or the [quote form](/quote) and a specialist will help you choose an aircraft that suits how you plan to fly.`,
      { faq: [
        { q: `Do I need to register my drone in Australia?`, a: `Not for flying purely for fun, at any weight, under the rules CASA currently applies. If you fly at or for work, you must register the drone whatever its weight. Check casa.gov.au for the current requirements and fees.` },
        { q: `Do I need a licence to fly a drone in Australia?`, a: `Not for hobby flying. For work, you need an operator accreditation or a remote pilot licence, depending on the aircraft and the work. Operator accreditation is free, online and valid for three years, and you must be 16 or older.` },
        { q: `Can I fly a drone under 250 g anywhere?`, a: `No. The standard operating conditions still apply: stay under 120 m, keep the drone in sight, stay 30 m from people and out of restricted areas. Near airports, lighter drones get more room but still have limits.` },
        { q: `How high can I fly my drone in Australia?`, a: `The limit is 120 m (400 ft) above the ground.` },
        { q: `Does a bigger battery change the weight class?`, a: `Yes. On aircraft such as the Mini 5 Pro, the larger Plus battery makes the drone heavier than 250 g, so check the weight with the battery you actually fly.` }
      ] }
    ],
    targetKeywords: ['register drone australia', 'registering drones', 'register drones', 'register drone']
  },
  {
    id: 'post-27',
    slug: 'buy-dji-mini-4-pro-australia-combos-batteries-accessories',
    intent: 'transactional',
    title: `Buy the DJI Mini 4 Pro in Australia: Price, Combos, Batteries and Accessories Compared`,
    metaTitle: `Buy DJI Mini 4 Pro Australia: Price, Combos, Batteries`,
    metaDescription: `Buying the DJI Mini 4 Pro in Australia? Compare the four packages, battery and Plus battery prices, accessories and the Mini 5 Pro, with free express shipping.`,
    subtitle: `Four ways to buy the sub-249 g camera drone, what each costs, which battery to choose and the accessories worth adding.`,
    date: 'November 2026',
    dateISO: '2026-11-02',
    modifiedISO: '2026-11-02',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Mini 4 Pro', 'Buying Guide', 'Camera Drones'],
    excerpt: `The DJI Mini 4 Pro starts at $949 and reaches $1,529 with the Plus battery kit. We compare the four packages, the batteries and the accessories, and set it against the Mini 5 Pro.`,
    image: '/images/blog-dji-mini-4-pro-buying-guide.webp',
    imageAlt: `DJI Mini 4 Pro, the Mini 4 Pro Fly More Combo and a Mini 4 Pro battery`,
    relatedProducts: ['dji-mini-4-pro', 'dji-mini-4-pro-rc-2', 'dji-mini-4-pro-fly-more-combo', 'dji-mini-4-pro-intelligent-flight-battery'],
    content: [
      `The DJI Mini 4 Pro is the drone many Australians land on when they want a serious camera in an aircraft that stays under 249 g. It has a 1/1.3-inch 48 MP camera, 4K video at up to 100 fps, omnidirectional obstacle sensing and up to 34 minutes of flight on the standard battery. Search for the DJI Mini 4 Pro price in Australia and you will find one aircraft sold in four different packages, plus a long list of batteries and add-ons, which makes it hard to know what you actually need. This guide explains each package and what it costs, the difference between the standard and Plus batteries, the accessories worth buying on day one, and how the Mini 4 Pro compares with the Mini 5 Pro and the older Minis. You can check the specifications in this guide on DJI's official page for the [DJI Mini 4 Pro](https://www.dji.com/global/mini-4-pro/specs).`,
      { h2: `The DJI Mini 4 Pro at a glance` },
      `Every package uses the same aircraft, so the camera and the flight performance are identical whichever you choose. What changes is the controller and the amount of battery power in the box.`,
      { ul: [
        `**Camera:** 1/1.3-inch CMOS sensor, 48 MP.`,
        `**Video:** 4K up to 100 fps, with 10-bit D-Log M and HLG for colour grading.`,
        `**Weight:** under 249 g with the standard battery.`,
        `**Flight time:** up to 34 minutes on the standard battery, up to 45 minutes with the Plus battery.`,
        `**Sensing:** omnidirectional obstacle sensing.`,
        `**Transmission:** DJI O4, up to 20 km (FCC) or 10 km (CE).`
      ] },
      { h2: `Four ways to buy the DJI Mini 4 Pro` },
      `The table shows each package and its price in Australian dollars. Click a package to see exactly what is in the box.`,
      { table: {
        head: ['Package', 'What it adds', 'Price (AUD)'],
        rows: [
          ['[DJI Mini 4 Pro](/product/dji-mini-4-pro)', 'The aircraft with the standard battery', '$949'],
          ['[DJI Mini 4 Pro with RC 2](/product/dji-mini-4-pro-rc-2)', 'The DJI RC 2 screen controller, so no phone is needed', '$1,209'],
          ['[DJI Mini 4 Pro Fly More Combo](/product/dji-mini-4-pro-fly-more-combo)', 'Three batteries, a two-way charging hub and a shoulder bag', '$1,449'],
          ['[DJI Mini 4 Pro Fly More Combo Plus](/product/dji-mini-4-pro-fly-more-combo-plus)', 'The Plus battery for up to 45 minutes, extra batteries, hub and bag', '$1,529']
        ]
      } },
      { h2: `DJI Mini 4 Pro: the lowest entry price` },
      `At $949 the [DJI Mini 4 Pro](/product/dji-mini-4-pro) is the cheapest way to own this camera. It is the right choice if you want the aircraft itself, already own a compatible controller, or plan to add batteries as you go. It suits travel, real estate and social creators who want 4K at 100 fps and obstacle sensing without a heavy aircraft. The catch is the same as with every small drone: one battery gives up to 34 minutes, and the first few minutes of any outing go on checking the area and the settings, so most buyers who start here order a spare battery within a few weeks.`,
      { h2: `DJI Mini 4 Pro with RC 2: no phone required` },
      `The [Mini 4 Pro with the RC 2](/product/dji-mini-4-pro-rc-2) costs $1,209, which is $260 more than the aircraft package. The [DJI RC 2](/product/dji-rc-2-remote-controller) has a 5.5-inch 1080p screen with 700 nits of brightness, so you fly without a phone clipped to the sticks, the picture stays readable in sunlight and set-up is quicker. Choose it if you fly outdoors often. Our guide to [DJI controllers explained](/blog/dji-controllers-explained-rc-n3-rc-2-rc-pro) compares the RC 2 with the phone-based RC-N3.`,
      { h2: `DJI Mini 4 Pro Fly More Combo: the best value for most pilots` },
      `The [Fly More Combo](/product/dji-mini-4-pro-fly-more-combo) at $1,449 lists the aircraft, three Intelligent Flight Batteries, a two-way charging hub and a shoulder bag. Three batteries mean roughly three times the flying time, which turns a single short flight into a proper shoot, and the hub keeps all three topped up. If you search for the DJI Mini 4 Pro Fly More Combo best price, this is the package most people are looking for. Check the product page for the controller supplied before you order, so you know whether you also need an RC 2 or RC-N3.`,
      { h2: `Fly More Combo Plus: the longest flight time` },
      `The [Fly More Combo Plus](/product/dji-mini-4-pro-fly-more-combo-plus) at $1,529 is $80 more than the standard combo and adds the high-capacity Plus battery, which gives up to 45 minutes in the air. It suits scenic and long-line shots where you do not want to land mid-take. There is one important trade-off. With the Plus battery fitted, the aircraft is heavier than 250 g, so the simple sub-250 g treatment no longer applies, and you should check what that means for your flying on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) before you take off. If you do not need the extra minutes, the standard combo keeps the aircraft under 249 g.`,
      { h2: `Which DJI Mini 4 Pro package should you buy?` },
      { ul: [
        `**You want the lowest price and will add accessories later:** the [Mini 4 Pro](/product/dji-mini-4-pro) at $949.`,
        `**You want a built-in screen:** the [Mini 4 Pro with RC 2](/product/dji-mini-4-pro-rc-2) at $1,209.`,
        `**You want several flights per outing and a bag:** the [Fly More Combo](/product/dji-mini-4-pro-fly-more-combo) at $1,449.`,
        `**You want the longest flight time and accept a heavier aircraft:** the [Fly More Combo Plus](/product/dji-mini-4-pro-fly-more-combo-plus) at $1,529.`
      ] },
      `If you cannot decide, estimate how long you fly in a typical outing. Past half an hour, buy a combo, because every other route involves buying batteries and a hub separately.`,
      { h2: `DJI Mini 4 Pro battery: standard, Plus and charging` },
      `The Mini 4 Pro battery is the most-searched accessory for this drone, and there are two choices. The standard pack keeps the aircraft under 249 g. The Plus pack gives up to 45 minutes but takes the aircraft over 250 g.`,
      { table: {
        head: ['Battery', 'Flight time', 'Weight note', 'Price (AUD)'],
        rows: [
          ['[DJI Mini 4 Pro Intelligent Flight Battery](/product/dji-mini-4-pro-intelligent-flight-battery)', 'Up to 34 min', 'Aircraft stays under 249 g', '$99'],
          ['[Mini 4 Pro/Mini 3 Series Battery Plus](/product/dji-mini-4-pro-mini-3-series-intelligent-flight-battery-plus)', 'Up to 45 min', 'Aircraft exceeds 250 g', '$149'],
          ['[Mini 4 Pro/Mini 3 Series Two-Way Charging Hub](/product/dji-mini-4-pro-mini-3-series-two-way-charging-hub)', 'Charges several batteries', 'Not applicable', '$69']
        ]
      } },
      `A sensible kit for a full day of flying is three batteries and the hub, which is what the Fly More Combo already includes. If you started with the basic package, buy two spare standard batteries and the hub. Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) explains how to store and charge packs so they last, and you can browse every pack in the [drone batteries category](/category/batteries/drone-batteries) and the [charging hubs category](/category/batteries/charging-hubs).`,
      { h2: `DJI Mini 4 Pro accessories worth buying` },
      `Two small add-ons make a difference to how the Mini 4 Pro is used day to day, and both are listed for this aircraft.`,
      { ul: [
        `[DJI Mini 4 Pro 360° Propeller Guard](/product/dji-mini-4-pro-360-propeller-guard), $49: a guard that protects the propellers in tight spaces, useful for flying near walls and furniture.`,
        `[DJI Mini 4 Pro Wide-Angle Lens](/product/dji-mini-4-pro-wide-angle-lens), $49: a clip-on lens that widens the view for real estate and travel shots.`
      ] },
      `A guard adds protection, but it does not replace careful flying and keeping the aircraft in sight. Browse more in the [propellers and guards category](/category/batteries/propellers-and-guards) and the [filters and lenses category](/category/batteries/filters-and-lenses).`,
      { h2: `DJI Mini 4 Pro vs Mini 5 Pro, Mini 4K and Mini 3` },
      `Buyers often compare the Mini 4 Pro with the models either side of it. The Mini 3 Pro does not appear in our range, so the practical choices are these.`,
      { table: {
        head: ['', 'DJI Mini 4K', 'DJI Mini 3', 'DJI Mini 4 Pro', 'DJI Mini 5 Pro'],
        rows: [
          ['Camera', '4K, 3-axis gimbal', '1/1.3-inch sensor', '1/1.3-inch, 48 MP', '1-inch, 50 MP'],
          ['Weight', 'Under 250 g', 'Under 249 g', 'Under 249 g', 'Under 250 g'],
          ['Starting price', '[$449](/product/dji-mini-4k)', '[$509](/product/dji-mini-3-dji-rc-n1)', '[$949](/product/dji-mini-4-pro)', '[$1,119](/product/dji-mini-5-pro-dji-rc-n3)']
        ]
      } },
      `The Mini 4 Pro sits in the middle of the range: a clear step up in image quality and sensing from the Mini 3 and Mini 4K, and about $170 less than the Mini 5 Pro. Choose the Mini 5 Pro if the 1-inch sensor matters to you, and read our [Mini 5 Pro buying guide](/blog/buy-dji-mini-5-pro-australia-combos-prices) for the packages. Choose the Mini 4K or Mini 3 if budget comes first, and read our [Mini 4K vs Mini 3 guide](/blog/buy-dji-mini-4k-vs-mini-3-australia-prices). If you want built-in propeller guards, the [DJI Flip guide](/blog/buy-dji-flip-australia-combos-prices-vs-neo-2-mini-4-pro) explains that option, and our [Neo 2, Flip and Mini 4 Pro comparison](/blog/dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro) puts all three side by side.`,
      { h2: `Flying a sub-249 g drone in Australia` },
      `Rules depend on the weight of the aircraft and on whether you fly for fun or for paid work, and they change from time to time. Always confirm the current requirements on the CASA website before your first flight. Our guide on [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) summarises the rules in plain language, and the [FAQ](/faq) answers the common questions. Remember that the weight class changes when you fit the Plus battery.`,
      { h2: `Should you buy a new or used Mini 4 Pro?` },
      `A new Mini 4 Pro arrives with a full warranty, genuine batteries and current firmware. A used one may look cheaper, but a worn battery or a cracked guard can wipe out the saving, so read our guide to [buying a new or used DJI drone](/blog/buying-a-new-vs-used-dji-drone-australia) before you commit. If this is your first drone, our list of the [best drones for beginners](/blog/best-drones-for-beginners-australia) shows how the Mini 4 Pro fits among the easier options, and the wider [DJI Mini and Air range](/category/camera-drones/dji-mini-and-air) lists every size.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you are unsure which package suits you, send us a message through the [quote form](/quote) or the [contact page](/contact) and a specialist will recommend one.`,
      { faq: [
        { q: `How much does the DJI Mini 4 Pro cost in Australia?`, a: `The DJI Mini 4 Pro is $949, the Mini 4 Pro with the RC 2 is $1,209, the Fly More Combo is $1,449 and the Fly More Combo Plus is $1,529. All prices are in Australian dollars with free express shipping.` },
        { q: `Which DJI Mini 4 Pro package is best value?`, a: `For most pilots the Fly More Combo, because it lists three batteries, a charging hub and a shoulder bag. Choose the basic aircraft if you only want the lowest price.` },
        { q: `How much is a DJI Mini 4 Pro battery?`, a: `The standard Intelligent Flight Battery is $99, giving up to 34 minutes. The Plus battery is $149 and gives up to 45 minutes, but the aircraft is then heavier than 250 g.` },
        { q: `Does the Plus battery change the weight class?`, a: `Yes. With the Plus battery fitted the Mini 4 Pro is heavier than 250 g, so check the current CASA requirements for your flying before you use it.` },
        { q: `Is the DJI Mini 4 Pro better than the Mini 5 Pro?`, a: `The Mini 5 Pro has a larger 1-inch sensor and costs more, starting at $1,119. The Mini 4 Pro starts at $949 and remains a strong camera drone under 249 g.` }
      ] }
    ],
    targetKeywords: ['dji mini 4 pro price australia', 'dji mini 4 pro australia', 'dji mini 4 pro battery', 'dji mini 4 pro accessories', 'dji mini 4 pro fly more combo best price', 'dji mini 3 pro vs mini 4 pro']
  },
  {
    id: 'post-28',
    slug: 'black-friday-drone-sale-australia-how-to-buy-a-dji-drone-2026',
    intent: 'transactional',
    title: `Black Friday Drone Sale in Australia: How to Buy a DJI Drone Smartly in 2026`,
    metaTitle: `Black Friday Drone Sale Australia: DJI Buying Guide 2026`,
    metaDescription: `Shopping a Black Friday drone sale in Australia? See current DJI prices by budget, how to compare packages, spares to add and delivery and returns to check.`,
    subtitle: `Current AUD prices by budget, five checks before any drone deal, and why the package matters more than the headline price.`,
    date: 'November 2026',
    dateISO: '2026-11-02',
    modifiedISO: '2026-11-02',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['Black Friday', 'Buying Guide', 'Camera Drones'],
    excerpt: `Black Friday 2026 is on 27 November. Here are current DJI drone prices from $249, five checks that protect you in any sale, and how to compare combos so a deal really is one.`,
    image: '/images/blog-black-friday-drone-buying-guide.webp',
    imageAlt: `DJI Mini 4K, DJI Neo 2 Fly More Combo and DJI Mavic 4 Pro, a range of drones across budgets`,
    relatedProducts: ['dji-mini-4k', 'dji-flip-dji-rc-n3', 'dji-mini-4-pro', 'dji-mini-5-pro-dji-rc-n3'],
    content: [
      `Black Friday falls on Friday 27 November 2026, and Cyber Monday follows on 30 November. Every year, thousands of Australians search for a Black Friday drone sale hoping to buy a DJI for less, and every year some of them end up with the wrong package, a missing controller or a seller they cannot reach when something goes wrong. This guide does not announce a discount, and it does not invent a "was" price. What it gives you is more useful: the current listed price of the drones people buy most, shown in Australian dollars, a method for judging any drone deal you meet this month, and the spares and checks that stop a bargain turning into a headache.`,
      { h2: `When is Black Friday 2026, and does it matter for drones?` },
      `Black Friday is the day after United States Thanksgiving, which is why it lands on 27 November this year. Australian retailers have adopted it, and many run offers across the whole week, ending on Cyber Monday. For drones, the sale period is a sensible time to buy if you are already planning a purchase, because it is also the lead-up to Christmas and the summer flying season. It is a poor reason to buy a drone you have not decided on. A price that looks low is only a good price if the package is the right one, so work out what you need first.`,
      { h2: `DJI drone prices today, by budget` },
      `Use this table as a yardstick. Every price is the current listed price in Australian dollars with free express shipping, and you can click through for the full specification.`,
      { table: {
        head: ['Budget', 'Drone', 'Price (AUD)', 'Why people buy it'],
        rows: [
          ['Under $500', '[DJI Neo (drone only)](/product/dji-neo-drone-only)', '$249', 'Palm-sized follow-me drone, about 135 g'],
          ['Under $500', '[DJI Mini 4K](/product/dji-mini-4k)', '$449', 'Sub-250 g 4K drone with a 3-axis gimbal'],
          ['$500 to $1,000', '[DJI Flip with RC-N3](/product/dji-flip-dji-rc-n3)', '$559', 'Built-in propeller guards, up to 31 minutes'],
          ['$500 to $1,000', '[DJI Neo 2 Fly More Combo with RC-N3](/product/dji-neo-2-fly-more-combo-dji-rc-n3)', '$709', 'Palm-sized 4K drone with obstacle sensing and extra batteries'],
          ['$500 to $1,000', '[DJI Mini 4 Pro](/product/dji-mini-4-pro)', '$949', '48 MP camera, 4K at 100 fps, up to 34 minutes'],
          ['$1,000 to $2,000', '[DJI Mini 5 Pro with RC-N3](/product/dji-mini-5-pro-dji-rc-n3)', '$1,119', '1-inch 50 MP camera under 250 g'],
          ['$1,000 to $2,000', '[DJI Air 3S with RC-N3](/product/dji-air-3s-dji-rc-n3)', '$1,699', 'Dual camera, up to 45 minutes'],
          ['Premium', '[DJI Mavic 4 Pro with RC 2](/product/dji-mavic-4-pro-dji-rc-2)', '$3,099', '100 MP Hasselblad camera, up to 51 minutes']
        ]
      } },
      `Prices can change, so always check the product page on the day you order. If you want help choosing between these, our [best drone for sale in Australia buyer's guide](/blog/best-drone-for-sale-australia-2026-buyers-guide) and our list of the [best drones for beginners](/blog/best-drones-for-beginners-australia) narrow it down in plain language.`,
      { h2: `Five checks before you buy any drone deal` },
      { ul: [
        `**Read exactly what is in the box.** The same drone is sold as drone only, with a basic controller, with a screen controller or as a Fly More Combo. A low headline price is often the drone-only listing.`,
        `**Confirm the controller.** If the listing does not name one, ask. A drone without a controller cannot fly.`,
        `**Check the seller.** An Australian business with an ABN, a contact page and clear returns terms is easier to deal with than an anonymous listing. Drones for Sale trades under ABN 91 658 710 173.`,
        `**Read the returns and warranty terms before you pay,** not after. Australian Consumer Law guarantees apply to goods bought here.`,
        `**Ignore false urgency.** A countdown timer is not a reason to skip the checks above. A good price on the right package is still good tomorrow.`
      ] },
      { h2: `Compare the package, not the headline price` },
      `A discount on the aircraft means little if you then buy batteries one at a time. Two examples from our own listed prices show how to do the sum. The [DJI Flip Fly More Combo with RC 2](/product/dji-flip-fly-more-combo-dji-rc-2) is $919. Buying the [Flip with RC 2](/product/dji-flip-dji-rc-2) at $759, two [spare batteries](/product/dji-flip-intelligent-flight-battery) at $99 each and a [charging hub](/product/dji-flip-parallel-charging-hub) at $69 comes to $1,026, so the combo is $107 cheaper and also includes a shoulder bag.`,
      `The same applies to the original Neo. The [DJI Neo Fly More Combo](/product/dji-neo-fly-more-combo) is $459 with an RC-N3 controller and three batteries. Buying the [Neo](/product/dji-neo-drone-only) at $249, an [RC-N3](/product/dji-rc-n3-remote-controller) at $165 and two [batteries](/product/dji-neo-intelligent-flight-battery) at $59 each comes to $532, which is $73 more. Whenever you see a combo, add up the parts and compare. Our guides to the [Flip](/blog/buy-dji-flip-australia-combos-prices-vs-neo-2-mini-4-pro) and the [Neo 2 Fly More Combo](/blog/dji-neo-2-fly-more-combo-guide) do this for the most popular kits.`,
      { h2: `Spares to add to the basket` },
      `The most useful accessory is nearly always a second battery, because one battery rarely covers a whole outing. Current prices for popular packs:`,
      { ul: [
        `[DJI Neo Intelligent Flight Battery](/product/dji-neo-intelligent-flight-battery), $59.`,
        `[DJI Flip Intelligent Flight Battery](/product/dji-flip-intelligent-flight-battery), $99.`,
        `[DJI Mini 4 Pro Intelligent Flight Battery](/product/dji-mini-4-pro-intelligent-flight-battery), $99.`,
        `[DJI Mini 5 Pro Intelligent Flight Battery](/product/dji-mini-5-pro-intelligent-flight-battery), $99.`
      ] },
      `Browse every pack in the [drone batteries category](/category/batteries/drone-batteries), and read our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) for how to charge and store them. If you are choosing between sizes, our [Mini 4 Pro buying guide](/blog/buy-dji-mini-4-pro-australia-combos-batteries-accessories) and [Mini 5 Pro buying guide](/blog/buy-dji-mini-5-pro-australia-combos-prices) list the matching spares.`,
      { h2: `Delivery, returns and warranty in the sale period` },
      `Busy weeks put pressure on couriers, so order early rather than at the last minute if you need a drone for a particular date. Our shipping policy says metro capital city orders typically arrive within 1 to 2 business days, and regional and Western Australia addresses within 2 to 4 business days. Every order ships free by express courier with signature on delivery and transit insurance. We cannot promise arrival on a specific day, so read the [shipping policy](/shipping) before you order for a gift. Unopened hardware in its original packaging can be returned within 30 days of receipt, and the [refund policy](/refund) explains how.`,
      { h2: `How to pay` },
      `You can pay by cryptocurrency and receive a 10% discount, or by bank transfer, PayID or Osko. Use the [order form](/order) to place an order, and we will email your payment details and confirm dispatch. If you want a price for several drones or a business purchase, send the details through the [quote form](/quote) and a specialist will reply by email.`,
      { h2: `Should you wait for Black Friday to buy a drone?` },
      `It depends on the reason you are buying. If you are buying for a date, such as a holiday, a wedding or a gift, do not wait: delivery, set-up and a first practice flight all take time. If you are buying with no deadline, it is reasonable to watch prices across the week, as long as you compare the package each time and do not rely on any promise that a price will fall. Whatever you decide, buy the package that fits how you will fly rather than the lowest number on the page. If your needs are commercial, such as thermal inspection or spraying, our [enterprise drones](/category/enterprise-drones) and [agricultural spraying drones](/category/spraying-drones) are quoted individually, so [ask for a quote](/quote).`,
      { h2: `Check the rules before your first flight` },
      `A new drone does not come with permission to fly anywhere. Rules depend on the weight of the aircraft and on whether you fly for fun or for paid work, and they change from time to time. Read our guide on [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules), confirm the current requirements on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and see the [FAQ](/faq) for common questions. If you are buying used, read our guide to [buying a new or used DJI drone](/blog/buying-a-new-vs-used-dji-drone-australia) first.`,
      { h2: `Not sure which drone? Ask us` },
      `If you are comparing two models, tell us what you want to film, your budget and where you will fly, and we will recommend a package. Use the [contact page](/contact) or browse the full [DJI Mini and Air range](/category/camera-drones/dji-mini-and-air), the [camera drones category](/category/camera-drones) and the [shop](/shop).`,
      { faq: [
        { q: `When is Black Friday 2026 in Australia?`, a: `Black Friday is on Friday 27 November 2026, the day after United States Thanksgiving. Cyber Monday is on Monday 30 November.` },
        { q: `Is there a Black Friday sale on DJI drones?`, a: `This guide does not announce a discount. It lists current Australian dollar prices on each product page and shows how to compare packages. Check the product page on the day you order, because prices can change.` },
        { q: `What is the cheapest DJI drone you sell?`, a: `The DJI Neo (drone only) is $249 and the DJI Mini 4K is $449. Both prices are in Australian dollars with free express shipping.` },
        { q: `Is a Fly More Combo worth it?`, a: `Often, yes. Add up the aircraft, controller, spare batteries and hub bought separately and compare. For the DJI Flip, the Fly More Combo is $107 cheaper than buying the parts one by one and also includes a shoulder bag.` },
        { q: `Can I return a drone I bought in a sale?`, a: `Unopened, sealed hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply. Read the refund policy before you order.` }
      ] }
    ],
    targetKeywords: ['black friday drone sale', 'dji black friday sale', 'drones for sale black friday', 'black friday sales drones', 'drone sale black friday']
  },
  {
    id: 'post-29',
    slug: 'buy-dji-thermal-drone-australia-mavic-3t-vs-matrice-4t-vs-matrice-30t-prices',
    intent: 'transactional',
    title: `Buy a DJI Thermal Drone in Australia: Mavic 3T vs Matrice 4T vs Matrice 30T, Prices and Which to Choose`,
    metaTitle: `DJI Thermal Drone Australia: Mavic 3T, M4T, M30T Prices`,
    metaDescription: `Buying a DJI thermal drone in Australia? Compare the Mavic 3T from $8,249, Matrice 4T and 30T with Autel and FLIR options, AUD prices and what is included.`,
    subtitle: `Every thermal aircraft in our range with its price, camera and flight time, and how to match one to your job.`,
    date: 'November 2026',
    dateISO: '2026-11-03',
    modifiedISO: '2026-11-03',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Thermal Drones', 'Buying Guide', 'Enterprise Drones'],
    excerpt: `Thermal drones in our range start at $8,249 for the DJI Mavic 3 Thermal and run to $27,500 for the FLIR ION M440. We compare each by price, thermal camera, flight time and use.`,
    image: '/images/blog-dji-thermal-drone-buying-guide.webp',
    imageAlt: `DJI Mavic 3 Thermal, DJI Matrice 4 Thermal and DJI Matrice 30T thermal drones`,
    relatedProducts: ['dji-mavic-3-thermal', 'dji-matrice-4-thermal', 'dji-matrice-30t', 'autel-evo-max-4t-drone'],
    content: [
      `A thermal drone shows you what a normal camera cannot: heat. That is why they are used to find a hot spot on a solar array, a roof leak, a missing person at night or the source of a fire. If you are searching for a DJI thermal drone in Australia, the question is rarely whether to buy one, but which of the half-dozen aircraft to choose, because they range from about $8,000 to more than $27,000 and differ in size, weather sealing, flight time and what comes in the box. This guide lists every thermal aircraft in our range with its listed price in Australian dollars, explains what you are paying for, and matches each one to the job it suits. It is a buying guide, so if you are new to the technology, start with our explanation of [thermal drones in Australia](/blog/thermal-drones-australia-guide). You can check the specifications in this guide on DJI's official page for the [DJI Matrice 4 series](https://enterprise.dji.com/matrice-4-series/specs).`,
      { h2: `What you are paying for in a thermal drone` },
      `Most of the price difference comes from a handful of features. Knowing them makes the table below easy to read.`,
      { ul: [
        `**Thermal camera:** the DJI Mavic 3, Matrice 4 and Matrice 30 thermal aircraft all use a 640x512 thermal camera. The Matrice 4 Thermal adds a sensitivity of 50 mK or better and a near-infrared auxiliary light for night work.`,
        `**Visible cameras:** every thermal drone also carries normal cameras so you can overlay heat on a clear picture. The Mavic 3 Thermal has 48 MP wide and 56x hybrid zoom cameras, and the Matrice 4 Thermal has 48 MP wide, medium tele and tele cameras and a laser rangefinder.`,
        `**Size and weather sealing:** the Matrice 30T is rated IP55, which matters if you fly in rain or dust. The smaller aircraft trade that for portability.`,
        `**Flight time:** up to 45 minutes on the Mavic 3 Thermal, up to 49 minutes on the Matrice 4 series and up to 41 minutes on the Matrice 30T.`,
        `**Care coverage:** the Worry-Free combos bundle DJI Care Enterprise with the aircraft. Basic and Plus levels differ, and so does the price.`
      ] },
      { h2: `Thermal drone prices in Australia` },
      `Prices are the current listed prices in Australian dollars. Click any aircraft for its full specification.`,
      { table: {
        head: ['Aircraft', 'Thermal camera', 'Flight time', 'Price (AUD)'],
        rows: [
          ['[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '640x512', 'Up to 45 min', '$8,249'],
          ['[DJI Mavic 3T Worry-Free Basic Combo](/product/dji-mavic-3t-worry-free-basic-combo)', '640x512', 'Up to 45 min', '$8,249'],
          ['[DJI Mavic 3T Worry-Free Plus Combo](/product/dji-mavic-3t-worry-free-plus-combo)', '640x512', 'Up to 45 min', '$10,679'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '640x512, 50 mK or better', 'Up to 49 min', '$10,159'],
          ['[DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo)', '640x512', 'Up to 49 min', '$11,248'],
          ['[DJI Matrice 30T](/product/dji-matrice-30t)', '640x512 radiometric', 'Up to 41 min', '$14,917'],
          ['[Matrice 30T Worry-Free Plus Combo](/product/matrice-30t-worry-free-plus-combo)', '640x512 radiometric', 'Up to 41 min', '$15,473'],
          ['[Autel EVO Max 4T](/product/autel-evo-max-4t-drone)', 'Thermal, wide and zoom cameras', 'Up to 42 min', '$14,999'],
          ['[DJI Matrice 4TD Worry-Free Flagship Combo](/product/dji-matrice-4td-worry-free-flagship-combo)', 'Thermal, dock-ready', 'See product page', '$15,470'],
          ['[FLIR ION M440 Tactical Drone](/product/flir-ion-m440-tactical-drone)', 'FLIR Boson 320 (320x256)', 'About 35 min', '$27,500']
        ]
      } },
      { h2: `DJI Mavic 3 Thermal: the portable choice from $8,249` },
      `The [DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal) is the lowest-priced thermal aircraft in our range. It adds a 640x512 uncooled thermal camera to a 48 MP wide camera and a 56x hybrid zoom camera, flies for up to 45 minutes and weighs 920 g. DJI positions it for roof, solar, fire and rescue work, and it is small enough to carry in one hand. The [Worry-Free Basic Combo](/product/dji-mavic-3t-worry-free-basic-combo) is listed at the same $8,249 and includes DJI Care Enterprise Basic. The [Plus Combo](/product/dji-mavic-3t-worry-free-plus-combo) at $10,679 includes DJI Care Enterprise Plus. Browse the full [Mavic 3 Enterprise range](/category/enterprise-drones/dji-mavic-3-enterprise).`,
      { h2: `DJI Matrice 4 Thermal and 4T: the all-round day and night aircraft` },
      `The [DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal) at $10,159 pairs a 640x512 thermal camera with 48 MP wide, medium tele and tele cameras, a laser rangefinder and a near-infrared auxiliary light. It flies for up to 49 minutes and weighs 1,219 g. DJI aims it at public safety, search and rescue, and inspection crews working day and night. The [Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) at $11,248 adds a Plus bundle with Care coverage and extra batteries. For most buyers comparing thermal drones this is the best balance of capability and price, and our [DJI Matrice buying guide](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price) shows where it sits against the rest of the range.`,
      { h2: `DJI Matrice 30T: the weather-sealed workhorse` },
      `The [DJI Matrice 30T](/product/dji-matrice-30t) at $14,917 has a 640x512 radiometric thermal camera, a wide camera, a zoom camera and a laser rangefinder on one payload, and it is rated IP55 with up to 41 minutes of flight. It is the larger, tougher choice for firefighting, police, power-line and solar inspection teams who work in poor weather. The [Basic Combo](/product/matrice-30t-worry-free-basic-combo) is the same $14,917 with DJI Care Enterprise Basic, and the [Plus Combo](/product/matrice-30t-worry-free-plus-combo) is $15,473. If weather sealing is your priority, read our guide to [waterproof drones and IP ratings](/blog/waterproof-drones-ip-ratings-explained).`,
      { h2: `Autel EVO Max 4T and FLIR ION M440: the alternatives` },
      `The [Autel EVO Max 4T](/product/autel-evo-max-4t-drone) at $14,999 carries wide, zoom and thermal cameras and a laser rangefinder, flies for up to 42 minutes and weighs about 1.6 kg with its battery. It suits buyers who want an alternative to the DJI range. The [FLIR ION M440](/product/flir-ion-m440-tactical-drone) at $27,500 is a small tactical drone with dual 12 MP visible cameras and a FLIR Boson 320 thermal camera, about 35 minutes of flight and a weight near 1.8 kg, aimed at defence and public-safety buyers who need a backpack-portable system. Browse the [Autel and FLIR drones category](/category/enterprise-drones/autel-and-flir-drones).`,
      { h2: `Basic or Plus: what the Worry-Free upgrade costs` },
      { table: {
        head: ['Aircraft', 'Basic combo', 'Plus combo', 'Plus costs'],
        rows: [
          ['Mavic 3T', '[$8,249](/product/dji-mavic-3t-worry-free-basic-combo)', '[$10,679](/product/dji-mavic-3t-worry-free-plus-combo)', '$2,430 more'],
          ['Matrice 30T', '[$14,917](/product/matrice-30t-worry-free-basic-combo)', '[$15,473](/product/matrice-30t-worry-free-plus-combo)', '$556 more']
        ]
      } },
      `The upgrade is small on the Matrice 30T and large on the Mavic 3T, so compare the Care Enterprise terms on each product page before you decide, especially if the aircraft will be used heavily or by several crew.`,
      { h2: `Which thermal drone should you buy?` },
      { ul: [
        `**Roof, solar, fire and rescue with a portable aircraft:** the [Mavic 3 Thermal](/product/dji-mavic-3-thermal) from $8,249.`,
        `**Public safety and search and rescue, day and night:** the [Matrice 4 Thermal](/product/dji-matrice-4-thermal) from $10,159.`,
        `**Wet or dusty conditions and heavier use:** the [Matrice 30T](/product/dji-matrice-30t) from $14,917.`,
        `**A non-DJI option:** the [Autel EVO Max 4T](/product/autel-evo-max-4t-drone) at $14,999.`,
        `**Automated thermal patrols from a dock:** the [Matrice 4TD Flagship Combo](/product/dji-matrice-4td-worry-free-flagship-combo) at $15,470 or the [Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) at $34,278. See the [DJI Dock category](/category/enterprise-drones/dji-dock).`,
        `**Thermal on an aircraft you already own:** the [Zenmuse H30T](/product/dji-zenmuse-h30t) at $17,335 is a thermal camera payload with a wide camera, a zoom camera and a laser rangefinder. Confirm compatibility with your aircraft first.`
      ] },
      { h2: `Thermal drone or thermal camera?` },
      `If you only need to scan a switchboard or a wall, a handheld thermal camera may be enough and costs far less. If you need to see a roof, an array, a line or a paddock from above, a drone is the right tool. Our guides explain the trade-off: [thermal camera vs thermal drone](/blog/thermal-camera-vs-thermal-drone-infrared-inspections), [buying a thermal imaging camera](/blog/buy-thermal-imaging-camera-australia-flir-vs-dji-thermal-cameras) and [drone heat cameras and payloads](/blog/buy-drone-heat-camera-australia-thermal-drones-payloads). You can also browse the [thermal cameras category](/category/cameras-sensors/thermal-cameras) and the wider [DJI Matrice range](/category/enterprise-drones/dji-matrice).`,
      { h2: `Rules and training before you fly` },
      `Flying a thermal drone for work is commercial flying. You will need the right accreditation or licence and an operator certificate where required, and night or beyond-line-of-sight flying may need extra approval. Rules change, so confirm what applies to your work on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules). Our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) explains how these aircraft fit into a professional workflow.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For an enterprise aircraft we suggest asking for a written quote so we can confirm the configuration, availability and delivery: use the [quote form](/quote). You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `How much is a DJI thermal drone in Australia?`, a: `The DJI Mavic 3 Thermal is $8,249, the Matrice 4 Thermal is $10,159, the Matrice 4T Plus Combo is $11,248 and the Matrice 30T is $14,917. All prices are in Australian dollars.` },
        { q: `What is the cheapest thermal drone?`, a: `The DJI Mavic 3 Thermal and the Mavic 3T Worry-Free Basic Combo, both at $8,249, are the lowest-priced thermal aircraft in our range.` },
        { q: `What is the difference between the Mavic 3T and the Matrice 4T?`, a: `Both use a 640x512 thermal camera. The Matrice 4 Thermal adds a laser rangefinder, a near-infrared auxiliary light for night work and up to 49 minutes of flight, against up to 45 minutes for the Mavic 3 Thermal. It also costs $1,910 more.` },
        { q: `Which thermal drone is weatherproof?`, a: `The DJI Matrice 30T and its Worry-Free combos are rated IP55, which means protection against dust and water jets. Check each product page for the rating of the other aircraft.` },
        { q: `Do I need a licence to fly a thermal drone?`, a: `Flying for work normally needs registration, accreditation or a licence and may need an operator certificate, depending on the aircraft and the job. Check the current CASA requirements for your operation.` }
      ] }
    ],
    targetKeywords: ['dji thermal drone', 'dji mavic 3 thermal drone', 'thermal drones for sale', 'enterprise thermal drone', 'thermal drone price', 'commercial drone with thermal camera']
  },
  {
    id: 'post-30',
    slug: 'buy-dji-agras-spray-drone-australia-t25p-vs-t50-vs-t100-prices',
    intent: 'transactional',
    title: `Buy a DJI Agras Spray Drone in Australia: T25P vs T50 vs T100 Prices and Which Farm Needs What`,
    metaTitle: `DJI Agras Spray Drones Australia: T25P, T50, T100 Prices`,
    metaDescription: `Spray drones for sale in Australia: DJI Agras T25P $17,530, T50 $21,999 and T100 $30,380, plus T70P, XAG and BROUAV, with batteries, chargers and spreaders.`,
    subtitle: `What each agricultural spray drone costs, how the tanks and payloads compare, and the batteries and extras to budget for.`,
    date: 'November 2026',
    dateISO: '2026-11-03',
    modifiedISO: '2026-11-03',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Agras', 'Buying Guide', 'Spraying Drones'],
    excerpt: `Spray drones in our range start at $17,530 for the DJI Agras T25P and reach $54,800 for the BROUAV D72L-8. We compare tanks, payloads and prices, and list the batteries and spreaders you will also need.`,
    image: '/images/blog-dji-agras-buying-guide.webp',
    imageAlt: `DJI Agras T25P, DJI Agras T50 and DJI Agras T100 agricultural spray drones`,
    relatedProducts: ['dji-agras-t25p', 'dji-agras-t50', 'dji-agras-t100', 'xag-p30-spraying-drone'],
    content: [
      `An agricultural spray drone applies chemicals and spreads seed and fertiliser from the air, so there is no wheel traffic on the crop and no need to drive the paddock. That is the appeal for farmers and contract sprayers. It also makes buying one more complicated than buying a camera drone: the aircraft costs from $17,530 to $54,800, the right choice depends on the size of your tank and your fields, and the batteries, chargers and spreading systems you need can add tens of thousands of dollars. This guide lists the spray drones in our range with their listed prices in Australian dollars, compares the DJI Agras T25P, T50, T70P and T100 with the XAG and BROUAV alternatives, and sets out the extras to budget for. For the bigger picture on how spray drones fit into a farm, read our [agricultural spraying drone guide](/blog/agricultural-spraying-drones-australia-guide). You can check the specifications in this guide on DJI's official pages for the [Agras T25P](https://ag.dji.com/t25p/specs), [T50](https://ag.dji.com/t50/specs), [T70P](https://ag.dji.com/t70p/specs) and [T100](https://ag.dji.com/t100/specs).`,
      { h2: `Spray drone prices in Australia` },
      `Prices are current listed prices in Australian dollars. Capacities come from the product specifications.`,
      { table: {
        head: ['Spray drone', 'Capacity', 'Price (AUD)'],
        rows: [
          ['[DJI Agras T25P](/product/dji-agras-t25p)', '20 kg spraying, 25 kg spreading, foldable', '$17,530'],
          ['[DJI Agras T70P](/product/dji-agras-t70p)', '70 L spray tank, 100 L spreading tank, up to 70 kg', '$20,380'],
          ['[DJI Agras T50](/product/dji-agras-t50)', '40 kg spraying, 50 kg spreading, 16 L/min', '$21,999'],
          ['[XAG P30](/product/xag-p30-spraying-drone)', 'Four rotary atomiser nozzles', '$24,000'],
          ['[DJI Agras T100](/product/dji-agras-t100)', '100 L spray tank, 150 L spreading tank, 30 to 40 L/min', '$30,380'],
          ['[BROUAV D30L-8](/product/brouav-d30l-8-spraying-drone)', '30 L tank, eight rotors', '$32,000'],
          ['[BROUAV D52L-8](/product/brouav-d52l-8-spraying-drone)', '52 L tank, eight rotors', '$44,800'],
          ['[BROUAV D72L-8](/product/brouav-d72l-8-spraying-drone)', '72 L tank, 72 kg payload, eight rotors', '$54,800']
        ]
      } },
      { h2: `DJI Agras T25P: the compact option from $17,530` },
      `The [DJI Agras T25P](/product/dji-agras-t25p) is a compact, foldable agricultural drone built for solo operators, with 20 kg of spraying capacity and 25 kg of spreading capacity. It uses quad-antenna O4 transmission, millimetre-wave radars and a tri-vision system for automatic, one-click operation, and Safety System 3.0 with a night-vision FPV camera. DJI aims it at smaller farms and solo operators who want a sprayer that is easy to transport and set up. It is the lowest-priced Agras in our range.`,
      { h2: `DJI Agras T50: the proven all-rounder at $21,999` },
      `The [DJI Agras T50](/product/dji-agras-t50) is a coaxial twin-rotor drone that carries a 40 kg spraying load or a 50 kg spreading load. A dual atomising spray system and a 16 L/min spray rate make it a workhorse for field and orchard work, and it supports orchard mode and variable rate application. It is the model most buyers mean when they search for the DJI Agras T50 price, and a good default for farmers and contractors who want one capable machine. Accessories include the [T50 Spreading System](/product/dji-agras-t50-spreading-system) at $2,200 for seed and fertiliser and the [T50 Atomized Sprinkler Package](/product/dji-agras-t50-atomized-sprinkler-package) at $1,100.`,
      { h2: `DJI Agras T70P: more tank for $20,380` },
      `The [DJI Agras T70P](/product/dji-agras-t70p) is an upgraded Agras for spraying, spreading and lifting. It has a 70 L spray tank with a 30 L/min flow rate, a 100 L spreading tank with a 400 kg/min flow rate and dual atomisation centrifugal sprinklers, carries up to 70 kg and operates at up to 20 m/s. DJI cites about a 20% increase in operating efficiency. It suits farms and contractors covering fields and orchards who want a larger tank than the T50.`,
      { h2: `DJI Agras T100: the flagship from $30,380` },
      `The [DJI Agras T100](/product/dji-agras-t100) is DJI's flagship agricultural drone, with a 100 L spray tank and a 150 L spreading tank. It combines a spray flow of 30 L/min (40 L/min with the optional four-nozzle set) with LiDAR, a penta-vision system and millimetre-wave radar for round-the-clock operation, lifts up to 100 kg and operates at up to 20 m/s. It is the highest-capacity aircraft in the Agras range, so it suits large farms and spraying contractors. Search for the DJI Agras T100 price and you will also find its dedicated extras: the [150L Spreading System](/product/dji-150l-spreading-system) at $3,010, the [Mist Nozzle Package](/product/dji-agras-t100-mist-nozzle-package) at $2,170 and the [Lift System Kit](/product/dji-agras-t100-lift-system-kit) at $1,460.`,
      { h2: `XAG P30 and BROUAV: the alternatives` },
      `The [XAG P30](/product/xag-p30-spraying-drone) at $24,000 uses four rotary atomiser nozzles for crop protection and spot spraying across broadacre, orchards and vineyards. BROUAV makes three heavier eight-rotor sprayers: the [D30L-8](/product/brouav-d30l-8-spraying-drone) with a 30 L tank, the [D52L-8](/product/brouav-d52l-8-spraying-drone) with 52 L and the [D72L-8](/product/brouav-d72l-8-spraying-drone) with a 72 L tank and 72 kg payload, aimed at large farms and contractors who want fewer refill trips. For these models we recommend asking for a [quote](/quote), because freight, set-up and training are arranged individually.`,
      { h2: `Batteries, chargers and spreaders: what else to budget for` },
      `The aircraft is only part of the cost. Spare batteries keep a spray drone working while the others charge, and a charger or generator matters on remote properties.`,
      { table: {
        head: ['Item', 'Works with', 'Price (AUD)'],
        rows: [
          ['[DJI Agras DB800 Battery](/product/dji-agras-db800-intelligent-flight-battery)', 'Agras T30, T25 and T20P class', '$3,190'],
          ['[DJI Agras DB1560 Battery](/product/dji-agras-db1560-intelligent-flight-battery)', 'Agras T50 and T40', '$3,850'],
          ['[DJI Agras DB2160 Battery](/product/dji-agras-db2160-intelligent-flight-battery)', 'Agras T100', '$4,080'],
          ['[DJI C10000 Intelligent Power Supply](/product/dji-c10000-intelligent-power-supply)', 'Agras T50, T40 and compatible', '$2,310'],
          ['[DJI C12000 Intelligent Power Supply](/product/dji-c12000-intelligent-power-supply)', 'Agras T100', '$2,380'],
          ['[DJI D14000iE Inverter Generator](/product/dji-d14000ie-multifunctional-inverter-generator)', 'Agras charging stations', '$5,190']
        ]
      } },
      `As an illustration, a T50 with two additional DB1560 batteries, a C10000 power supply and the spreading system lists at $21,999 plus $7,700 plus $2,310 plus $2,200, which is $34,209. How many batteries you need depends on your tank size, field size and refill routine, so treat this as an example and ask us to size a kit. Browse the full [spraying drone accessories category](/category/spraying-drones/spraying-drone-accessories).`,
      { h2: `Which spray drone should you buy?` },
      { ul: [
        `**A smaller farm or a solo operator:** the [DJI Agras T25P](/product/dji-agras-t25p) at $17,530.`,
        `**One capable all-round machine, including orchards:** the [DJI Agras T50](/product/dji-agras-t50) at $21,999.`,
        `**A larger tank for fields and orchards:** the [DJI Agras T70P](/product/dji-agras-t70p) at $20,380.`,
        `**Large farms and contractors who want the most capacity:** the [DJI Agras T100](/product/dji-agras-t100) at $30,380.`,
        `**A non-DJI option or the biggest tanks:** the [XAG P30](/product/xag-p30-spraying-drone) or a [BROUAV](/category/spraying-drones/spraying-drones) sprayer, by quote.`
      ] },
      { h2: `Spraying, spreading and mapping your fields` },
      `The Agras T25P, T50, T70P and T100 are all listed with spreading capacity, which turns the same drone into a seeding and fertilising tool. If you want to map crop health before you spray, see our guide to [agricultural drones for weed control, seeding and crop monitoring](/blog/agricultural-drones-weed-control-seeding-crop-monitoring) and the [multispectral cameras category](/category/cameras-sensors/multispectral-cameras), which runs from $4,900 to $28,999. Our [LiDAR vs photogrammetry guide](/blog/lidar-vs-photogrammetry-drone-mapping-australia) explains the mapping options.`,
      { h2: `Rules, licences and training` },
      `Spraying with a drone is commercial flying and also involves chemical application, which is regulated and varies by state. You will normally need the right drone accreditation or licence and an operator certificate, and you may need a chemical application licence for your state or territory. Rules change, so confirm what applies on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and with your state regulator, and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules). We can discuss training and set-up when you ask for a quote.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For a spray drone we recommend a written quote so we confirm the aircraft, batteries, charging and freight together: use the [quote form](/quote). You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply. Browse all [spraying drones](/category/spraying-drones).`,
      { faq: [
        { q: `How much is a DJI Agras drone in Australia?`, a: `The DJI Agras T25P is $17,530, the T70P is $20,380, the T50 is $21,999 and the T100 is $30,380. All prices are in Australian dollars.` },
        { q: `What is the cheapest agricultural spray drone?`, a: `The DJI Agras T25P at $17,530 is the lowest-priced spray drone in our range. It is a compact, foldable drone with 20 kg spraying and 25 kg spreading capacity.` },
        { q: `What is the difference between the Agras T50 and T100?`, a: `The T50 carries a 40 kg spraying load or a 50 kg spreading load. The T100 has a 100 L spray tank and a 150 L spreading tank, LiDAR and a penta-vision system, and costs $8,381 more.` },
        { q: `Can a spray drone also spread seed and fertiliser?`, a: `Many can with a spreading system, such as the T50 Spreading System at $2,200 or the 150L Spreading System for the T100 at $3,010.` },
        { q: `What else do I need to buy with a spray drone?`, a: `Spare batteries, a charger or power supply, and a generator if you work away from the mains. Batteries start at $3,190 and power supplies at $2,310.` }
      ] }
    ],
    targetKeywords: ['dji agras t50', 'dji agras t100 price', 'agras t100', 'dji agras t50 price', 'agriculture spraying drone', 'ag drone sprayer', 'dji agricultural drones']
  },
  {
    id: 'post-31',
    slug: 'buy-multispectral-drone-camera-australia-mavic-3m-phantom-4-micasense-prices',
    intent: 'transactional',
    title: `Buy a Multispectral Drone or Camera in Australia: Mavic 3 Multispectral, Phantom 4, MicaSense and SlantRange Prices`,
    metaTitle: `Multispectral Drone Australia: Mavic 3M, MicaSense Prices`,
    metaDescription: `Buying a multispectral drone or camera in Australia? Compare the Mavic 3 Multispectral from $7,919, Phantom 4, MicaSense, SlantRange and Agrowing, AUD prices.`,
    subtitle: `Complete crop-monitoring drones, sensors for your own aircraft, kits and software, with what each one costs and who it suits.`,
    date: 'November 2026',
    dateISO: '2026-11-06',
    modifiedISO: '2026-11-06',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['Precision Agriculture', 'Buying Guide', 'Multispectral'],
    excerpt: `Multispectral crop monitoring starts at $4,900 for a sensor and $7,919 for a complete DJI drone. We compare every option in our range by price, bands and aircraft, and say who each suits.`,
    image: '/images/blog-multispectral-buying-guide.webp',
    imageAlt: `DJI Mavic 3 Multispectral, DJI Phantom 4 Multispectral and MicaSense RedEdge-P sensor`,
    relatedProducts: ['dji-mavic-3-multispectral', 'dji-phantom-4-multispectral', 'micasense-rededge-p', 'dji-terra-agriculture-1-year-3-devices'],
    content: [
      `Spraying drones deal with a problem after you have found it. A multispectral drone helps you find it first. By recording near-infrared and red-edge light, which plants reflect differently depending on how healthy they are, a multispectral camera produces NDVI-style crop health maps that show stress, patchy growth and uneven emergence before they are obvious from the ground. If you are searching for precision agriculture drones in Australia, you will meet three kinds of product: complete multispectral drones that fly out of the box, multispectral sensors that fit your existing aircraft, and the kits and software that connect them. They range from $4,900 to $28,999. This guide compares every option in our range by price, spectral bands and aircraft, and tells you which suits an agronomist, a grower or a spray contractor. If you plan to treat what you find, read it alongside our [DJI Agras spray drone buying guide](/blog/buy-dji-agras-spray-drone-australia-t25p-vs-t50-vs-t100-prices). You can check the specifications in this guide on DJI's official page for the [DJI Mavic 3 Multispectral](https://ag.dji.com/mavic-3-m).`,
      { h2: `Multispectral drone and camera prices in Australia` },
      `Prices are current listed prices in Australian dollars. Click any item for its full specification.`,
      { table: {
        head: ['Product', 'Type', 'Spectral detail', 'Price (AUD)'],
        rows: [
          ['[Sony A6000 Multispectral Dual Agrowing Camera](/product/sony-a6000-multispectral-dual-agrowing-camera)', 'Sensor', 'Dual-lens system on a Sony A6000', '$4,900'],
          ['[SlantRange 4P Multispectral Sensor](/product/slantrange-4p-multispectral-sensor)', 'Sensor', 'Six channels, NDVI and NDRE', '$7,900'],
          ['[DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral)', 'Complete drone', 'Four 5 MP bands plus 20 MP RGB', '$7,919'],
          ['[SlantRange 3PX Multispectral Sensor](/product/slantrange-3px-multispectral-sensor)', 'Sensor', 'Four channels, 410 to 950 nm', '$8,199'],
          ['[DJI Phantom 4 Multispectral](/product/dji-phantom-4-multispectral)', 'Complete drone', 'Five bands plus RGB', '$9,299'],
          ['[MicaSense RedEdge-P](/product/micasense-rededge-p)', 'Sensor', 'Five bands plus panchromatic', '$13,999'],
          ['[DJI Phantom 4 Multispectral DRTK2](/product/dji-phantom-4-multispectral-drtk2)', 'Complete drone with base station', 'Five bands plus RGB, D-RTK 2', '$14,299'],
          ['[Sony A7R Multispectral Quad Agrowing Camera](/product/sony-a7r-multispectral-quad-agrowing-camera)', 'Sensor', 'Four lenses on a Sony A7R', '$16,000'],
          ['[ADTI Agrowing Multispectral for Matrice 300](/product/adti-agrowing-multispectral-matrice-300)', 'Sensor system', 'Designed for the Matrice 300', '$20,850'],
          ['[Sony A7R Multispectral Sextuple Agrowing Camera](/product/sony-a7r-multispectral-sextuple-agrowing-camera)', 'Sensor', 'Six lenses on a Sony A7R', '$21,000'],
          ['[MicaSense Altum-PT](/product/micasense-altum-pt)', 'Sensor', 'Five bands, panchromatic and thermal', '$28,999']
        ]
      } },
      { h2: `DJI Mavic 3 Multispectral: the compact all-in-one at $7,919` },
      `The [DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) is the lowest-priced complete multispectral drone in our range. It carries four 5 MP multispectral cameras (green, red, red edge and near-infrared) and a 20 MP RGB camera, with built-in RTK for positioning and a sunlight sensor for consistent data. It flies for up to 43 minutes and weighs 951 g. DJI aims it at agronomists, growers and ag service providers who want a compact drone for field scouting and NDVI-style mapping across large properties. It is a good first model to look at. You will find it in the [Mavic 3 Enterprise range](/category/enterprise-drones/dji-mavic-3-enterprise).`,
      { h2: `DJI Phantom 4 Multispectral: five bands, ready to fly` },
      `The [DJI Phantom 4 Multispectral](/product/dji-phantom-4-multispectral) at $9,299 is a farming drone with six sensors: one RGB camera and five multispectral cameras covering blue, green, red, red edge and near-infrared, at 2 MP each. It has an integrated sunlight sensor and RTK, flies for about 27 minutes and weighs 1,487 g. It suits agronomists and growers who want field-level NDVI and crop stress maps from a single, ready-to-fly aircraft. The [Phantom 4 Multispectral DRTK2](/product/dji-phantom-4-multispectral-drtk2) at $14,299 adds the D-RTK 2 mobile station for centimetre-level accuracy, which matters for repeat surveys. Ask for a quote to confirm the current bundle contents. Browse the [Phantom 4 range](/category/enterprise-drones/dji-phantom-4).`,
      { h2: `Multispectral sensors for your own aircraft` },
      `If you already own a Matrice or another compatible aircraft, buying a sensor can cost less than buying a drone. The main options in our range are:`,
      { ul: [
        `**[MicaSense RedEdge-P](/product/micasense-rededge-p), $13,999:** five narrow bands (blue 475 nm, green 560 nm, red 668 nm, red edge 717 nm, NIR 842 nm) plus a 5.1 MP panchromatic band for pan-sharpened imagery, with a DLS 2 light sensor.`,
        `**[MicaSense Altum-PT](/product/micasense-altum-pt), $28,999:** the same five bands plus panchromatic and a FLIR thermal band, so you can look at crop stress and water use in one flight. It weighs about 460 g with the light sensor.`,
        `**[SlantRange 3PX](/product/slantrange-3px-multispectral-sensor), $8,199:** four vegetation channels plus ambient illumination sensors covering 410 to 950 nm, powered by DJI Skyport, with a crop analytics workflow.`,
        `**[SlantRange 4P](/product/slantrange-4p-multispectral-sensor), $7,900:** six channels supporting both NDVI and NDRE. Pricing varies by option, so ask for a quote.`,
        `**Agrowing on Sony bodies:** the [dual-lens A6000 system](/product/sony-a6000-multispectral-dual-agrowing-camera) at $4,900 is the lowest-cost entry, the [quad-lens A7R](/product/sony-a7r-multispectral-quad-agrowing-camera) at $16,000 adds bands, and the [sextuple A7R](/product/sony-a7r-multispectral-sextuple-agrowing-camera) at $21,000 adds more again.`,
        `**[ADTI Agrowing for the Matrice 300](/product/adti-agrowing-multispectral-matrice-300), $20,850:** a complete system for large-scale crop and environmental monitoring on that airframe.`
      ] },
      `Always confirm that a sensor suits your aircraft before you buy. Ask us with your aircraft model and we will check. Browse the full [multispectral cameras category](/category/cameras-sensors/multispectral-cameras).`,
      { h2: `Integration kits and software` },
      `Two small purchases often decide whether a multispectral set-up works. Integration kits mount a sensor on an aircraft you already own: the [Phantom 4 Integration Kit for Parrot Sequoia](/product/phantom-4-integration-kit-parrot-sequoia) is $649, and the [Phantom 4 Integration Kit for RedEdge-MX](/product/phantom-4-integration-kit-rededge-mx) is $930. Software turns the imagery into maps: [DJI Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) is a one-year licence for up to three devices at $490, used to process crop maps and field data. See the [integration kits category](/category/cameras-sensors/integration-kits) and the [enterprise software category](/category/enterprise-drones/enterprise-software).`,
      { h2: `Which multispectral option should you buy?` },
      { ul: [
        `**One compact drone that flies out of the box:** the [Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) at $7,919.`,
        `**Five bands in a ready-to-fly aircraft:** the [Phantom 4 Multispectral](/product/dji-phantom-4-multispectral) at $9,299, or the [DRTK2 package](/product/dji-phantom-4-multispectral-drtk2) at $14,299 for repeat surveys.`,
        `**A sensor for the aircraft you already own:** start with the [MicaSense RedEdge-P](/product/micasense-rededge-p) at $13,999 or the [SlantRange 3PX](/product/slantrange-3px-multispectral-sensor) at $8,199.`,
        `**The lowest-cost entry:** the [Sony A6000 dual Agrowing camera](/product/sony-a6000-multispectral-dual-agrowing-camera) at $4,900.`,
        `**Crop stress, water use and thermal in one flight:** the [MicaSense Altum-PT](/product/micasense-altum-pt) at $28,999.`
      ] },
      { h2: `From map to spray: using multispectral data` },
      `The value of a crop health map is in what you do with it. Many operators map a paddock, mark the weak zones and then spot-treat or vary the application rate. Our guide to [agricultural drones for weed control, seeding and crop monitoring](/blog/agricultural-drones-weed-control-seeding-crop-monitoring) explains the workflow, our [agricultural spraying drone guide](/blog/agricultural-spraying-drones-australia-guide) covers the spraying side, and our [Agras battery and charging guide](/blog/buy-dji-agras-batteries-chargers-power-supply-australia-t30-t40-t50-t100) helps you plan the power for a full day. If your work is mapping rather than crop health, read our comparison of [LiDAR vs photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia).`,
      { h2: `Rules and training before you fly for work` },
      `Flying a drone to monitor crops for clients is commercial flying. You will normally need the right accreditation or licence and an operator certificate where required. Rules change, so confirm what applies to your work on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for common questions.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For sensors and enterprise drones we recommend a written quote so we confirm compatibility, availability and delivery: use the [quote form](/quote), the [order form](/order) or the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `How much is a multispectral drone in Australia?`, a: `The DJI Mavic 3 Multispectral is $7,919, the Phantom 4 Multispectral is $9,299 and the Phantom 4 Multispectral DRTK2 package is $14,299. All prices are in Australian dollars.` },
        { q: `What is the cheapest multispectral camera?`, a: `The Sony A6000 Multispectral Dual Agrowing Camera at $4,900 is the lowest-priced multispectral sensor in our range, followed by the SlantRange 4P at $7,900.` },
        { q: `What is the difference between a multispectral drone and a multispectral camera?`, a: `A multispectral drone, such as the Mavic 3 Multispectral, includes the sensors and flies out of the box. A multispectral camera is a sensor you fit to an aircraft you already own, so you must check compatibility.` },
        { q: `What does a multispectral camera show?`, a: `It records near-infrared and red-edge light that plants reflect differently according to their health. Software turns this into NDVI-style maps that show crop stress and uneven growth.` },
        { q: `Do I need software to use multispectral data?`, a: `Yes. You need software to process the imagery into maps. DJI Terra Agriculture is a one-year licence for up to three devices at $490.` }
      ] }
    ],
    targetKeywords: ['precision agriculture drones', 'multispectral camera', 'dji mavic 3 multispectral', 'dji phantom 4 multispectral', 'micasense rededge p', 'ndvi drone']
  },
  {
    id: 'post-32',
    slug: 'buy-dji-zenmuse-h30t-thermal-payload-australia-h30t-vs-h30-prices',
    intent: 'transactional',
    title: `Buy a DJI Zenmuse Thermal Payload in Australia: H30T vs H30 Prices and Which Matrice Camera to Choose`,
    metaTitle: `DJI Zenmuse H30T vs H30 Price in Australia: Thermal Payload`,
    metaDescription: `Buying a Zenmuse thermal payload in Australia? The H30T is $17,335 and the H30 is $8,495. Compare thermal, zoom and rangefinder specs, bundles and filters.`,
    subtitle: `What the thermal camera adds to the Zenmuse H30, what it costs, and how the H30T compares with the H30, P1 and L2.`,
    date: 'November 2026',
    dateISO: '2026-11-06',
    modifiedISO: '2026-11-06',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['Zenmuse H30T', 'Buying Guide', 'Thermal Drones'],
    excerpt: `The DJI Zenmuse H30T thermal payload is $17,335 and the H30 is $8,495. We compare the two, their bundles and the filter, and set them against the P1 and L2 payloads.`,
    image: '/images/blog-zenmuse-h30t-buying-guide.webp',
    imageAlt: `DJI Zenmuse H30T, DJI Zenmuse H30 and DJI Zenmuse P1 payloads`,
    relatedProducts: ['dji-zenmuse-h30t', 'dji-zenmuse-h30', 'zenmuse-h30t-infrared-density-filter', 'dji-zenmuse-p1'],
    content: [
      `If you already fly a Matrice 350 RTK or 300 RTK, the quickest way to add thermal imaging is a payload, not a new aircraft. That is the idea behind the DJI Zenmuse H30T, a thermal camera payload that combines a 1280x1024 thermal camera with a wide camera, a 34x optical zoom camera and a laser rangefinder on one gimbal. It sits beside the Zenmuse H30, which has the same visual cameras and the rangefinder but no thermal camera, at less than half the price. This guide explains what the thermal camera adds, what each payload costs in Australian dollars, how the bundles differ, and how the H30T and H30 compare with the P1 and L2 payloads. If you are choosing between a thermal payload and a thermal aircraft, our guide to [buying a DJI thermal drone](/blog/buy-dji-thermal-drone-australia-mavic-3t-vs-matrice-4t-vs-matrice-30t-prices) sets out the aircraft options. You can check the specifications in this guide on DJI's official page for the [Zenmuse H30 series](https://enterprise.dji.com/zenmuse-h30-series/specs).`,
      { h2: `DJI Zenmuse payload prices in Australia` },
      `Prices are current listed prices in Australian dollars. The Worry-Free combos bundle the payload with DJI Care Enterprise.`,
      { table: {
        head: ['Payload', 'What it is', 'Price (AUD)'],
        rows: [
          ['[Zenmuse H20 and DJI Care Plus](/product/zenmuse-h20-and-dji-care-plus)', 'Zoom, wide and laser rangefinder, with Care Plus', '$7,246'],
          ['[DJI Zenmuse H30](/product/dji-zenmuse-h30)', 'Wide, 34x zoom and laser rangefinder', '$8,495'],
          ['[Zenmuse H30 Worry-Free Basic Combo](/product/zenmuse-h30-worry-free-basic-combo)', 'H30 with DJI Care Enterprise Basic', '$8,495'],
          ['[Zenmuse H30 Worry-Free Plus Combo](/product/zenmuse-h30-worry-free-plus-combo)', 'H30 with DJI Care Enterprise Plus', '$9,215'],
          ['[DJI Zenmuse P1](/product/dji-zenmuse-p1)', '45 MP full-frame mapping camera', '$11,400'],
          ['[DJI Zenmuse H30T](/product/dji-zenmuse-h30t)', 'H30 plus a 1280x1024 thermal camera', '$17,335'],
          ['[DJI Zenmuse L2 LiDAR](/product/dji-zenmuse-l2-lidar)', 'LiDAR with a 20 MP RGB camera', '$23,880']
        ]
      } },
      { h2: `Zenmuse H30T vs H30: what the thermal camera adds` },
      `Both payloads carry a 48 MP wide camera, a 40 MP zoom camera with 34x optical zoom, a laser rangefinder measuring from 3 to 3,000 m and a near-infrared auxiliary light, and both weigh 920 g. The H30T adds one thing, and it is a big one: a thermal camera.`,
      { table: {
        head: ['', 'DJI Zenmuse H30', 'DJI Zenmuse H30T'],
        rows: [
          ['Thermal camera', 'None', '1280x1024 uncooled VOx, 30 fps'],
          ['Thermal range', 'Not applicable', '-20 C to 1,600 C'],
          ['Wide camera', '48 MP', '48 MP'],
          ['Zoom camera', '40 MP, 34x optical', '40 MP, 34x optical'],
          ['Laser rangefinder', '3 to 3,000 m', '3 to 3,000 m'],
          ['Weight', '920 g', '920 g'],
          ['Compatible aircraft', 'Matrice 350 RTK, Matrice 300 RTK', 'Matrice 350 RTK, Matrice 300 RTK; ask us to confirm'],
          ['Price', '[$8,495](/product/dji-zenmuse-h30)', '[$17,335](/product/dji-zenmuse-h30t)']
        ]
      } },
      `The H30T costs $8,840 more than the H30. DJI describes it as the highest-resolution thermal option in the Zenmuse H series, for long-range thermal inspection, search and rescue and fire support.`,
      { h2: `Is the thermal camera worth $8,840 more?` },
      `Choose the [H30T](/product/dji-zenmuse-h30t) if your work depends on seeing heat: finding a person at night, spotting a hot joint on a power line, checking a solar array, or monitoring a fire. Choose the [H30](/product/dji-zenmuse-h30) if your jobs are visual, such as utility inspection and emergency services work where zoom and a rangefinder are enough, and you want the saving. If you are unsure, think about the questions your clients ask. If any of them start with how hot, or where is the warm spot, the thermal camera pays for itself. Our guide to [thermal drones in Australia](/blog/thermal-drones-australia-guide) explains what thermal imaging can and cannot show.`,
      { h2: `Basic or Plus: the H30 bundles` },
      { table: {
        head: ['Bundle', 'Coverage', 'Price (AUD)'],
        rows: [
          ['[H30 payload only](/product/dji-zenmuse-h30)', 'Payload only', '$8,495'],
          ['[H30 Worry-Free Basic Combo](/product/zenmuse-h30-worry-free-basic-combo)', 'DJI Care Enterprise Basic', '$8,495'],
          ['[H30 Worry-Free Plus Combo](/product/zenmuse-h30-worry-free-plus-combo)', 'DJI Care Enterprise Plus', '$9,215']
        ]
      } },
      `The Basic combo is listed at the same price as the payload alone, and the Plus combo costs $720 more. Compare the terms of each Care Enterprise level on the product pages before you decide, especially if the payload will be used heavily or by several crews.`,
      { h2: `Zenmuse H30T infrared density filter` },
      `The [Zenmuse H30T Infrared Density Filter](/product/zenmuse-h30t-infrared-density-filter) at $230 is an accessory that protects and conditions the thermal camera for demanding scenes. If you plan to point the H30T at very hot subjects, ask us whether you should order it with the payload.`,
      { h2: `Other Zenmuse payloads: P1 and L2` },
      `The H30T and H30 are inspection and public safety payloads. If you are choosing for mapping, there are two more options. The [Zenmuse P1](/product/dji-zenmuse-p1) at $11,400 is a 45 MP full-frame photogrammetry camera with a global mechanical shutter and a choice of 24, 35 or 50 mm lenses, and it is also available with DJI Care Plus at [$13,765](/product/zenmuse-p1-and-dji-care-plus). The [Zenmuse L2](/product/dji-zenmuse-l2-lidar) at $23,880 is a LiDAR payload with a frame-based LiDAR and a 20 MP RGB camera, also sold as a [Worry-Free Plus combo](/product/zenmuse-l2-worry-free-plus-combo) at $25,870. Our guide to [LiDAR vs photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia) explains which suits which job. Browse all [Zenmuse cameras](/category/cameras-sensors/dji-zenmuse-cameras).`,
      { h2: `Thermal payload or thermal aircraft?` },
      `A payload and an aircraft can solve the same problem at very different prices, so it is worth doing the sum. The H30T costs $17,335 and needs a compatible Matrice, which we price individually. The [Matrice 4 Thermal](/product/dji-matrice-4-thermal) is a complete aircraft with a thermal camera for $10,159, and the [Mavic 3 Thermal](/product/dji-mavic-3-thermal) is $8,249. The difference is the thermal sensor: the H30T has a 1280x1024 thermal camera, while the thermal cameras on the Mavic 3 Thermal, Matrice 4 Thermal and Matrice 30T are 640x512. If you need the highest thermal resolution and the long-range zoom and rangefinder on one gimbal, the payload is the right route. If you need a thermal camera in the air quickly and at the lowest cost, a thermal aircraft is. Our [thermal drone buying guide](/blog/buy-dji-thermal-drone-australia-mavic-3t-vs-matrice-4t-vs-matrice-30t-prices) lists every option with its price.`,
      { h2: `Where the H30T and H30 are used` },
      `DJI positions the H30T for long-range thermal inspection, search and rescue and fire support, and the H30 for utility inspection, emergency services and enterprise operators who need a multi-sensor payload. In practice that means power-line and substation inspection, checking solar arrays and roofs, locating people in low light, and keeping an eye on a fire from a safe distance. The laser rangefinder, which measures from 3 to 3,000 m, is what lets an operator put a distance and a position on what the cameras are looking at. Both payloads also include a near-infrared auxiliary light for working in low light.`,
      { h2: `Which Zenmuse payload should you buy?` },
      { ul: [
        `**Thermal inspection, search and rescue and fire support:** the [Zenmuse H30T](/product/dji-zenmuse-h30t) at $17,335.`,
        `**Visual inspection with zoom and a rangefinder, at a lower price:** the [Zenmuse H30](/product/dji-zenmuse-h30) at $8,495, or the [Plus combo](/product/zenmuse-h30-worry-free-plus-combo) at $9,215.`,
        `**Survey-grade mapping:** the [Zenmuse P1](/product/dji-zenmuse-p1) at $11,400.`,
        `**Drone LiDAR:** the [Zenmuse L2](/product/dji-zenmuse-l2-lidar) at $23,880.`,
        `**No Matrice yet:** consider a thermal aircraft instead. See the [DJI Matrice buying guide](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price) and our [thermal camera vs thermal drone](/blog/thermal-camera-vs-thermal-drone-infrared-inspections) comparison.`
      ] },
      { h2: `Check compatibility before you order` },
      `Payloads are designed for specific aircraft. The H30 and H30T are listed for the Matrice 350 RTK and Matrice 300 RTK, and we recommend confirming compatibility with your aircraft and firmware before you buy. Send us your aircraft model through the [quote form](/quote) and we will confirm. You can also read our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) and browse the [DJI Matrice range](/category/enterprise-drones/dji-matrice) and [thermal cameras](/category/cameras-sensors/thermal-cameras).`,
      { h2: `Rules and training before you fly` },
      `Thermal inspection and search work is commercial flying. You will normally need the right accreditation or licence and an operator certificate, and night or beyond-line-of-sight flying may need extra approval. Rules change, so confirm what applies to your work on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for common questions.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For payloads we recommend a written quote so we confirm compatibility, availability and delivery: use the [quote form](/quote), the [order form](/order) or the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `How much is the DJI Zenmuse H30T in Australia?`, a: `The DJI Zenmuse H30T is $17,335 in Australian dollars. The H30 without the thermal camera is $8,495, which makes the H30T $8,840 more.` },
        { q: `What is the difference between the Zenmuse H30 and H30T?`, a: `Both have a 48 MP wide camera, a 40 MP camera with 34x optical zoom, a laser rangefinder and a near-infrared light. The H30T adds a 1280x1024 thermal camera.` },
        { q: `Which aircraft does the Zenmuse H30T fit?`, a: `It is listed for the Matrice 350 RTK and Matrice 300 RTK. Ask us to confirm compatibility with your aircraft before you order.` },
        { q: `Is the H30 Worry-Free combo worth it?`, a: `The Basic combo is priced the same as the payload alone and adds DJI Care Enterprise Basic. The Plus combo is $720 more and adds Care Enterprise Plus. Compare the terms on the product pages.` },
        { q: `Do I need a licence to fly a thermal payload for work?`, a: `Flying for work normally needs registration, accreditation or a licence and may need an operator certificate, depending on the aircraft and job. Check the current CASA requirements.` }
      ] }
    ],
    targetKeywords: ['zenmuse h30t', 'dji zenmuse h30t price', 'zenmuse thermal payload', 'dji zenmuse h30 price', 'thermal payload drone', 'matrice 350 rtk payload']
  },
  {
    id: 'post-33',
    slug: 'buy-dji-agras-batteries-chargers-power-supply-australia-t30-t40-t50-t100',
    intent: 'transactional',
    title: `Buy DJI Agras Batteries, Chargers and Power Supplies in Australia: What to Order for the T30, T40, T50 and T100`,
    metaTitle: `DJI Agras Battery and Charger Prices in Australia`,
    metaDescription: `DJI Agras batteries from $3,190, chargers from $2,310 and a $5,190 generator. See which battery fits the T30, T40, T50 and T100, with prices and kit examples.`,
    subtitle: `Which Agras battery fits which aircraft, what chargers and generators cost, and how to budget the power for a spraying season.`,
    date: 'November 2026',
    dateISO: '2026-11-06',
    modifiedISO: '2026-11-06',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Agras', 'Buying Guide', 'Spraying Drones'],
    excerpt: `Agras batteries start at $3,190, power supplies at $2,310 and a field generator is $5,190. We match each battery to its aircraft and show what a T50 or T100 power kit costs.`,
    image: '/images/blog-agras-battery-buying-guide.webp',
    imageAlt: `DJI Agras T50 battery, DJI C10000 power supply and DJI Agras T100 battery`,
    relatedProducts: ['dji-agras-db1560-intelligent-flight-battery', 'dji-agras-db2160-intelligent-flight-battery', 'dji-c10000-intelligent-power-supply', 'dji-d14000ie-multifunctional-inverter-generator'],
    content: [
      `A spray drone is only as productive as its batteries. When the pack runs flat, the aircraft is on the ground until another one is ready, and on a busy spraying day the number of batteries and the speed of your charging decide how many hectares you cover. That is why experienced operators budget for power as carefully as for the aircraft. If you are searching for a DJI Agras battery or an Agras T30 battery charger, the difficulty is knowing which pack fits which aircraft and what else you need to charge in the field. This guide matches every Agras battery in our range to its aircraft, lists the chargers, power supplies, generator and cables with their prices in Australian dollars, and shows two worked examples of what a power kit costs. If you have not chosen an aircraft yet, start with our [DJI Agras spray drone buying guide](/blog/buy-dji-agras-spray-drone-australia-t25p-vs-t50-vs-t100-prices).`,
      { h2: `DJI Agras battery prices and compatibility` },
      `Each battery below is made for specific Agras aircraft. Prices are current listed prices in Australian dollars.`,
      { table: {
        head: ['Battery', 'Works with', 'Price (AUD)'],
        rows: [
          ['[DJI Agras DB800 Intelligent Flight Battery](/product/dji-agras-db800-intelligent-flight-battery)', 'Agras T30, T25 and T20P class', '$3,190'],
          ['[DJI Agras T30 Battery](/product/dji-agras-t30-battery)', 'Agras T30', '$3,600'],
          ['[DJI Agras T40 Battery](/product/dji-agras-t40-battery)', 'Agras T40 (30,000 mAh, 52.22 V, 1,567 Wh)', '$3,699'],
          ['[DJI Agras DB1560 Intelligent Flight Battery](/product/dji-agras-db1560-intelligent-flight-battery)', 'Agras T50 and T40', '$3,850'],
          ['[DJI Agras DB2160 Intelligent Flight Battery](/product/dji-agras-db2160-intelligent-flight-battery)', 'Agras T100', '$4,080']
        ]
      } },
      `A note on aircraft: our range lists the [Agras T25P](/product/dji-agras-t25p), [T70P](/product/dji-agras-t70p), [T50](/product/dji-agras-t50) and [T100](/product/dji-agras-t100) as aircraft. The T30 and T40 appear here because we list batteries and chargers for them. If you fly a T25P or T70P, tell us your aircraft through the [quote form](/quote) and we will confirm the correct battery before you order, because compatibility depends on the exact model.`,
      { h2: `Chargers and power supplies` },
      `Batteries need a charger fast enough to keep up with your refill routine.`,
      { table: {
        head: ['Charger or power supply', 'Works with', 'Price (AUD)'],
        rows: [
          ['[DJI C10000 Intelligent Power Supply](/product/dji-c10000-intelligent-power-supply)', 'Agras T50, T40 and compatible aircraft; used with DB1560 and DB800 batteries', '$2,310'],
          ['[DJI C12000 Intelligent Power Supply](/product/dji-c12000-intelligent-power-supply)', 'Agras T100', '$2,380'],
          ['[DJI Agras T30 Battery Charger](/product/dji-agras-t30-battery-charger)', 'Agras T30', '$3,200']
        ]
      } },
      `The C10000 and C12000 are intelligent power supplies that charge Agras flight batteries and speed up battery turnaround on busy spraying days. The T30 charger charges T30 batteries, and operators often add a second charging point so spare packs are always ready between runs.`,
      { h2: `Generators and cables for remote properties` },
      `Many properties have no convenient mains power near the paddock. The [DJI D14000iE Multifunctional Inverter Generator](/product/dji-d14000ie-multifunctional-inverter-generator) at $5,190 supplies the power to charge Agras batteries away from the mains. Two cables complete a field charging set-up: the [Agras D12000i Charging Extension Cable](/product/dji-agras-d12000i-charging-extension-cable) at $399 extends the reach between the generator and the charging station, and the [DB2100 Battery Adapter Cable](/product/dji-db2100-battery-adapter-cable) at $327 adapts the battery connection for T100-class set-ups. Browse everything in the [spraying drone accessories category](/category/spraying-drones/spraying-drone-accessories).`,
      { h2: `What a power kit costs: two worked examples` },
      `These examples use current listed prices. The number of batteries you need depends on your tank size, field size and refill routine, so treat them as illustrations and ask us to size a kit for your operation.`,
      { table: {
        head: ['Kit', 'Items', 'Total (AUD)'],
        rows: [
          ['Agras T50 with spares', '[T50](/product/dji-agras-t50) $21,999 + two [DB1560](/product/dji-agras-db1560-intelligent-flight-battery) batteries $7,700 + [C10000](/product/dji-c10000-intelligent-power-supply) $2,310', '$32,009'],
          ['Agras T50 with generator', 'The kit above + [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator) $5,190', '$37,199'],
          ['Agras T100 with spares', '[T100](/product/dji-agras-t100) $30,380 + two [DB2160](/product/dji-agras-db2160-intelligent-flight-battery) batteries $8,160 + [C12000](/product/dji-c12000-intelligent-power-supply) $2,380', '$40,920'],
          ['Agras T100 with generator', 'The kit above + [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator) $5,190', '$46,110']
        ]
      } },
      `Power is a meaningful share of the investment: the batteries, power supply and generator add $15,200 to $15,730 to the aircraft prices above. It is far better to budget for this at the start than to find out in the middle of a spraying window that one battery is not enough.`,
      { h2: `Which battery and charger should you order?` },
      { ul: [
        `**Agras T50 or T40:** the [DB1560 battery](/product/dji-agras-db1560-intelligent-flight-battery) at $3,850 with the [C10000 power supply](/product/dji-c10000-intelligent-power-supply) at $2,310.`,
        `**Agras T100:** the [DB2160 battery](/product/dji-agras-db2160-intelligent-flight-battery) at $4,080 with the [C12000 power supply](/product/dji-c12000-intelligent-power-supply) at $2,380.`,
        `**Agras T30:** the [T30 battery](/product/dji-agras-t30-battery) at $3,600 and [T30 charger](/product/dji-agras-t30-battery-charger) at $3,200, or the [DB800](/product/dji-agras-db800-intelligent-flight-battery) at $3,190 for the T30, T25 and T20P class.`,
        `**Agras T40:** the [T40 battery](/product/dji-agras-t40-battery) at $3,699, or the DB1560 at $3,850.`,
        `**Remote paddocks with no mains power:** add the [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator) at $5,190 and the [extension cable](/product/dji-agras-d12000i-charging-extension-cable) at $399.`
      ] },
      { h2: `Questions to settle before you order batteries` },
      `Because each battery is made for specific aircraft and costs from $3,190 to $4,080, it pays to settle a few questions first, so you order the right quantity once.`,
      { ul: [
        `**Which exact aircraft do you fly?** The T25P, T70P, T30, T40, T50 and T100 do not all share batteries. Tell us the model and we will confirm the pack.`,
        `**How many aircraft will you run?** Several aircraft multiply the batteries and the charging capacity you need. Ask for fleet pricing, because the product pages invite a quote for fleet orders.`,
        `**How long is your refill routine?** If you refill the tank quickly, the batteries and the charger set the pace, so a second power supply or extra packs may be worth more than they appear.`,
        `**Is mains power near the paddock?** If not, the generator and the extension cable become part of the kit.`,
        `**What happens if a battery fails mid-season?** A spare pack means one fault does not stop a spraying window.`
      ] },
      `All the batteries in our range are genuine DJI packs. For a spraying contractor, the cost of a day lost waiting for a charge usually exceeds the price of a spare battery, so we suggest erring on the side of one pack more than you think you need.`,
      { h2: `Looking after Agras batteries` },
      `High-capacity batteries are expensive, so treat them carefully: keep them cool and dry, charge them with the correct charger, and follow DJI's guidance for storage and transport. Our [battery, charger and propeller guide](/blog/dji-drone-battery-charger-propeller-guide) covers the principles for DJI batteries, and our [agricultural spraying drone guide](/blog/agricultural-spraying-drones-australia-guide) explains how power planning fits into a spraying operation. If you also plan to map crop health before you spray, see our [multispectral buying guide](/blog/buy-multispectral-drone-camera-australia-mavic-3m-phantom-4-micasense-prices). Our shipping policy states that high-capacity batteries are shipped in line with Australian IATA air cargo regulations.`,
      { h2: `Rules and training` },
      `Spraying with a drone is commercial flying and involves chemical application, which varies by state. You will normally need the right drone accreditation or licence and an operator certificate, and you may need a chemical application licence for your state or territory. Rules change, so confirm what applies on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and with your state regulator, and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for common questions.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For batteries and charging equipment we recommend a written quote so we confirm compatibility, quantities and freight together: use the [quote form](/quote), the [order form](/order) or the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply. Browse all [spraying drones](/category/spraying-drones).`,
      { faq: [
        { q: `How much is a DJI Agras battery in Australia?`, a: `Agras batteries range from $3,190 for the DB800 to $4,080 for the DB2160. The DB1560 for the T50 and T40 is $3,850, and the T30 battery is $3,600. All prices are in Australian dollars.` },
        { q: `Which battery fits the Agras T50?`, a: `The DJI Agras DB1560 Intelligent Flight Battery at $3,850 is made for the Agras T50 and T40.` },
        { q: `Which battery fits the Agras T100?`, a: `The DJI Agras DB2160 Intelligent Flight Battery at $4,080 is made for the Agras T100. The C12000 power supply at $2,380 charges the T100 batteries.` },
        { q: `How much is the Agras T30 battery charger?`, a: `The DJI Agras T30 Battery Charger is $3,200. The T30 battery is $3,600.` },
        { q: `Do I need a generator for field charging?`, a: `If you work on properties without convenient mains power, yes. The DJI D14000iE Inverter Generator at $5,190 supplies power for charging Agras batteries in the field.` }
      ] }
    ],
    targetKeywords: ['dji agras t30 battery', 'dji agras t30 battery charger', 'dji agras battery', 'agras t40 battery', 'dji agras t50 battery', 'dji agras charger']
  },
  {
    id: 'post-34',
    slug: 'buy-drone-for-weed-spraying-australia-dji-agras-weed-control-setup-cost',
    intent: 'transactional',
    title: `Drone Weed Spraying in Australia: Which DJI Agras to Buy and What a Weed Control Setup Costs`,
    metaTitle: `Drone Weed Spraying Australia: Agras Setup Cost and Prices`,
    metaDescription: `Buying a drone for weed spraying in Australia? Compare the Agras T25P from $17,530 and the T50, add mapping and batteries, and see full setup costs in AUD.`,
    subtitle: `The sprayer, the mapping drone, the software and the power kit: what each part costs and two complete setups priced from our range.`,
    date: 'November 2026',
    dateISO: '2026-11-07',
    modifiedISO: '2026-11-07',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['Weed Control', 'Buying Guide', 'Spraying Drones'],
    excerpt: `A drone weed spraying setup starts at $25,939 for an Agras T25P with a Mavic 3 Multispectral and mapping software, and $40,418 for a T50 contractor kit. We break down every part.`,
    image: '/images/blog-weed-spraying-drone-buying-guide.webp',
    imageAlt: `DJI Agras T25P, DJI Agras T50 and DJI Mavic 3 Multispectral for drone weed spraying`,
    relatedProducts: ['dji-agras-t25p', 'dji-agras-t50', 'dji-mavic-3-multispectral', 'dji-terra-agriculture-1-year-3-devices'],
    content: [
      `Weeds rarely grow evenly across a paddock. They come up in patches, along fence lines, around dams and in the thin spots where the crop is weakest, which is why spraying the whole field to treat a few hectares of weeds wastes chemical and money. A drone weed spraying setup works in two steps. First a mapping drone finds the weeds. Then a spray drone treats them, either across the affected area or only where the map says they are. If you are searching for a drone for weed spraying in Australia, the question is what the complete setup costs, because the spray drone is only part of it. This guide breaks down the sprayer, the mapping drone, the software and the batteries, prices every part in Australian dollars, and totals two complete setups: one for a smaller farm and one for a contractor. You can check the specifications in this guide on DJI's official pages for the [Agras T25P](https://ag.dji.com/t25p/specs) and the [T50](https://ag.dji.com/t50/specs).`,
      { h2: `What a drone weed control setup includes` },
      `A working weed control operation has four parts, and leaving one out is the most common budgeting mistake.`,
      { ul: [
        `**A spray drone** to apply the herbicide: the [DJI Agras T25P](/product/dji-agras-t25p), [T50](/product/dji-agras-t50), [T70P](/product/dji-agras-t70p) or [T100](/product/dji-agras-t100).`,
        `**A mapping drone** to find the weeds. A multispectral drone such as the [DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) records near-infrared and red-edge light, which shows plant stress and patchy growth that the eye misses.`,
        `**Software** to turn the imagery into maps you can act on: [DJI Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) is a one-year licence for up to three devices.`,
        `**Power:** spare batteries and a charger, and a generator if you work away from the mains. Our [Agras battery and charging guide](/blog/buy-dji-agras-batteries-chargers-power-supply-australia-t30-t40-t50-t100) covers this in detail.`
      ] },
      { h2: `Spray drone prices for weed work` },
      `Prices are current listed prices in Australian dollars. Capacities come from the product specifications.`,
      { table: {
        head: ['Spray drone', 'Capacity', 'Suits', 'Price (AUD)'],
        rows: [
          ['[DJI Agras T25P](/product/dji-agras-t25p)', '20 kg spraying, 25 kg spreading, foldable', 'Smaller farms and solo operators', '$17,530'],
          ['[DJI Agras T50](/product/dji-agras-t50)', '40 kg spraying, 50 kg spreading, 16 L/min', 'All-round field and orchard work', '$21,999'],
          ['[DJI Agras T70P](/product/dji-agras-t70p)', '70 L spray tank, 100 L spreading tank', 'Larger fields and contractors', '$20,380'],
          ['[DJI Agras T100](/product/dji-agras-t100)', '100 L spray tank, 150 L spreading tank', 'Large farms and contractors', '$30,380']
        ]
      } },
      `Our [Agras spray drone buying guide](/blog/buy-dji-agras-spray-drone-australia-t25p-vs-t50-vs-t100-prices) compares all four in more detail, and the [spraying drones category](/category/spraying-drones/spraying-drones) lists the XAG and BROUAV alternatives.`,
      { h2: `Which sprayer suits weed spraying?` },
      `For most weed control work the choice is between the T25P and the T50. The [Agras T25P](/product/dji-agras-t25p) is a compact, foldable drone with 20 kg of spraying capacity, designed for solo operators and easy to transport between paddocks, and it is the lowest-priced Agras in our range. The [Agras T50](/product/dji-agras-t50) carries a 40 kg spraying load at 16 L/min, supports orchard mode and variable rate application, and costs $4,469 more. Variable rate application is the feature that matters for weeds: it lets the drone change how much it applies across the field, rather than applying one rate everywhere. If you contract to several farms, the larger tanks on the [T70P](/product/dji-agras-t70p) and [T100](/product/dji-agras-t100) cut the number of refills.`,
      { h2: `Finding the weeds: multispectral mapping` },
      `You cannot spray a weed patch you have not found. The [DJI Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) at $7,919 carries four 5 MP multispectral cameras (green, red, red edge and near-infrared) and a 20 MP RGB camera, has built-in RTK and a sunlight sensor, flies for up to 43 minutes and weighs 951 g. Fly it over a paddock and the imagery shows where growth is weak or uneven. [DJI Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) at $490 processes that imagery into crop maps used for prescriptions and field analysis. Together they cost $8,409, a small share of the total, and they are what makes the spraying targeted. If you already own an aircraft, our [multispectral buying guide](/blog/buy-multispectral-drone-camera-australia-mavic-3m-phantom-4-micasense-prices) lists the sensors that fit it.`,
      { h2: `Two complete weed control setups, priced` },
      `These use current listed prices. They exclude chemicals, training and any licences. Treat them as starting points and ask us to size a kit for your property.`,
      { table: {
        head: ['Setup', 'What is in it', 'Total (AUD)'],
        rows: [
          ['Smaller farm', '[Agras T25P](/product/dji-agras-t25p) $17,530 + [Mavic 3 Multispectral](/product/dji-mavic-3-multispectral) $7,919 + [Terra Agriculture](/product/dji-terra-agriculture-1-year-3-devices) $490', '$25,939'],
          ['Contractor', '[Agras T50](/product/dji-agras-t50) $21,999 + two [DB1560 batteries](/product/dji-agras-db1560-intelligent-flight-battery) $7,700 + [C10000 power supply](/product/dji-c10000-intelligent-power-supply) $2,310 + Mavic 3 Multispectral $7,919 + Terra Agriculture $490', '$40,418'],
          ['Contractor with generator', 'The contractor setup + [D14000iE generator](/product/dji-d14000ie-multifunctional-inverter-generator) $5,190', '$45,608']
        ]
      } },
      `The smaller-farm setup does not include batteries, because the right pack depends on the exact aircraft: ask us to confirm the battery and charger for a T25P before you order. How many batteries you need depends on your tank size, the size of your paddocks and how quickly you refill.`,
      { h2: `Accessories that matter for weed work` },
      `Two T50 accessories are worth knowing about. The [Agras T50 Atomized Sprinkler Package](/product/dji-agras-t50-atomized-sprinkler-package) at $1,100 provides atomised nozzles that refine droplet size for better coverage on crops that need fine droplets. The [Agras T50 Spreading System](/product/dji-agras-t50-spreading-system) at $2,200 lets the T50 spread seed, fertiliser and other granular material, so the same drone can handle weed control in spring and fertiliser or seed later in the season. Browse everything in the [spraying drone accessories category](/category/spraying-drones/spraying-drone-accessories).`,
      { h2: `Which weed spraying setup should you buy?` },
      { ul: [
        `**A smaller farm or one operator:** the T25P setup at $25,939.`,
        `**Several properties, orchards or paid contract work:** the T50 contractor setup at $40,418, or $45,608 with a generator.`,
        `**Large paddocks and fewer refills:** a T70P or T100 as the sprayer, with the same mapping drone and software.`,
        `**You already own a mapping aircraft or sensor:** start with the sprayer and ask us what to add.`
      ] },
      { h2: `Rules, chemical licences and drift` },
      `Spraying with a drone is commercial flying and involves applying chemicals, which is regulated and varies by state. You will normally need the right drone accreditation or licence and an operator certificate, and you may need a chemical application licence for your state or territory. Always follow the chemical label and local drift rules. Rules change, so confirm what applies on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules) and with your state regulator, and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for common questions.`,
      { h2: `Get a free quote for your weed control setup` },
      `Tell us your property size, the weeds you are treating and your budget, and we will recommend a setup and send a written quote. There is no charge for a quote. Use the [quote form](/quote), the buttons on each product above or the form below. You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact).`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply. For spray drones we recommend a written quote so we confirm the aircraft, batteries, charging and freight together. Browse all [spraying drones](/category/spraying-drones), or read our guides to [agricultural drones for weed control and crop monitoring](/blog/agricultural-drones-weed-control-seeding-crop-monitoring) and [agricultural spraying drones](/blog/agricultural-spraying-drones-australia-guide).`,
      { faq: [
        { q: `How much does a drone for weed spraying cost in Australia?`, a: `A smaller-farm setup with an Agras T25P ($17,530), a Mavic 3 Multispectral ($7,919) and Terra Agriculture software ($490) totals $25,939. A T50 contractor setup with batteries and a power supply totals $40,418. All prices are in Australian dollars.` },
        { q: `What is the best drone for weed spraying?`, a: `For most operators the DJI Agras T25P or T50. The T25P is compact and suits solo operators. The T50 carries 40 kg, supports orchard mode and variable rate application, and suits contractors.` },
        { q: `How do I find weeds before I spray?`, a: `A multispectral drone such as the Mavic 3 Multispectral records near-infrared and red-edge light, and software such as DJI Terra Agriculture turns the imagery into maps that show where growth is weak or uneven.` },
        { q: `Do I need a licence to spray with a drone in Australia?`, a: `Spraying is commercial flying, so you will normally need drone accreditation or a licence and an operator certificate, and you may need a chemical application licence for your state. Check CASA and your state regulator.` },
        { q: `Can I get a quote before I buy?`, a: `Yes. Quotes are free. Tell us your property size and what you are treating through the quote form and we will recommend a setup and reply with a written quote.` }
      ] }
    ],
    targetKeywords: ['drone weed spraying', 'drone spraying', 'weed spraying drone', 'spot spraying drone australia', 'drone sprayer for sale', 'agricultural drone spraying']
  },
  {
    id: 'post-35',
    slug: 'how-does-a-thermal-imager-work-thermal-drone-camera-resolution-sensitivity-explained',
    intent: 'informational',
    title: `How Does a Thermal Imager Work? Thermal Drone Camera Resolution, Sensitivity and Zoom Explained`,
    metaTitle: `How a Thermal Imager Works: Camera Resolution Explained`,
    metaDescription: `How does a thermal imager work? Learn what 320x256, 640x512 and 1280x1024 resolution, sensitivity in mK and radiometric mean on a thermal drone camera.`,
    subtitle: `What the numbers on a thermal camera spec sheet mean, and how to choose the resolution a job really needs.`,
    date: 'November 2026',
    dateISO: '2026-11-07',
    modifiedISO: '2026-11-07',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['Thermal Imaging', 'Explainer', 'Thermal Drones'],
    excerpt: `A thermal imager sees heat, not light. We explain resolution (320x256 to 1280x1024), sensitivity in mK, radiometric readings and field of view, with real drone examples.`,
    image: '/images/blog-thermal-imager-explained.webp',
    imageAlt: `DJI Zenmuse H30T, DJI Matrice 4 Thermal and FLIR VUE TZ20 thermal imagers`,
    relatedProducts: ['dji-mavic-3-thermal', 'dji-matrice-4-thermal', 'dji-zenmuse-h30t', 'flir-vue-tz20'],
    content: [
      `A thermal imager is a camera that detects the heat objects give off, rather than the light they reflect. That is why it can show a person in the dark, a hot joint on a power line or a leaking section of roof, none of which an ordinary camera can see. On a drone, the thermal camera is the most expensive part of the aircraft, and its spec sheet is full of numbers that decide what you can and cannot see: resolution, sensitivity, field of view, radiometric or not. This guide explains what each number means, in plain language, using real thermal drones and payloads as examples, so that you can read a spec sheet and choose the camera a job genuinely needs. You can check the specifications quoted here on DJI's official pages for the [Matrice 4 series](https://enterprise.dji.com/matrice-4-series/specs) and the [Zenmuse H30 series](https://enterprise.dji.com/zenmuse-h30-series/specs).`,
      { h2: `How does a thermal imager work?` },
      `Every object above absolute zero gives off infrared radiation, and the warmer it is, the more it gives off. A thermal imager has a lens that focuses long-wave infrared onto a sensor made of thousands of tiny heat-sensitive elements. Each element warms slightly depending on how much infrared lands on it, and the camera converts that into a temperature value for that pixel. The result is an image where every pixel represents a temperature, shown in a colour palette that makes differences easy to see.`,
      { ul: [
        `**It needs no visible light.** A thermal camera works the same in daylight, at night and in smoke, because it is reading heat, not brightness.`,
        `**Most drone thermal cameras are uncooled.** The DJI Mavic 3 Thermal and Matrice 4 Thermal list an uncooled VOx sensor, a type that is compact, light and does not need a cooling system.`,
        `**It shows temperature differences, not colour.** A hot object and a cold object look different, even when they look identical to the eye.`
      ] },
      { h2: `What the resolution numbers mean` },
      `Thermal resolution is the number of pixels the sensor records, written as width by height. More pixels mean more detail, and the difference between sizes is bigger than the numbers suggest.`,
      { table: {
        head: ['Resolution', 'Pixels', 'Compared with 320x256', 'Examples in our range'],
        rows: [
          ['320×256', '81,920', 'Baseline', '[FLIR ION M440](/product/flir-ion-m440-tactical-drone) (FLIR Boson 320), [MicaSense Altum-PT](/product/micasense-altum-pt) thermal band'],
          ['640×512', '327,680', '4 times the pixels', '[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal), [Matrice 4 Thermal](/product/dji-matrice-4-thermal), [Matrice 30T](/product/dji-matrice-30t), [FLIR VUE TZ20](/product/flir-vue-tz20) (two sensors)'],
          ['1280×1024', '1,310,720', '16 times the pixels', '[DJI Zenmuse H30T](/product/dji-zenmuse-h30t)']
        ]
      } },
      `In practice, higher resolution lets you recognise smaller targets from further away. At a given height, a 640×512 camera records four times as many pixels on the same patch of ground as a 320×256 camera, and the 1280×1024 camera in the Zenmuse H30T records four times as many again. That is why long-range search and rescue and fine inspection work favour the highest resolution, and why it costs more.`,
      { h2: `Thermal sensitivity: what mK means` },
      `Sensitivity, often written as NETD and measured in millikelvin (mK), is the smallest temperature difference the camera can tell apart. A lower number is better. The DJI Matrice 4 Thermal lists a sensitivity of 50 mK or better, which means it can distinguish differences of about five hundredths of a degree. A more sensitive camera shows faint differences, such as a slightly warm patch of roof, that a less sensitive one would blend into the background. Not every listing states sensitivity, so when two cameras share a resolution, ask us for the figure.`,
      { h2: `Radiometric or not?` },
      `A non-radiometric thermal camera gives you a picture: you can see that one area is hotter than another. A radiometric camera stores a temperature reading for every pixel, so you can measure it: this joint is 78 degrees, that panel is 12 degrees hotter than its neighbour. The [Matrice 30T](/product/dji-matrice-30t) has a 640×512 radiometric thermal camera. The [Zenmuse H30T](/product/dji-zenmuse-h30t) lists a measurable thermal range from -20 °C to 1,600 °C at 30 frames per second. If your job needs a number, such as in an electrical or solar inspection report, choose a radiometric camera. If you only need to see where the heat is, such as in a search, you may not.`,
      { h2: `Field of view and zoom` },
      `Field of view tells you how much of the scene the thermal lens takes in. A wide view covers more ground in a pass, and a narrow view shows distant detail. The Matrice 4 Thermal lists a 45° diagonal field of view. The [FLIR VUE TZ20](/product/flir-vue-tz20) gives two thermal views from two 640×512 sensors, a wide 95° and a narrow 18°, with 5× optical zoom and 4× digital zoom. Most thermal drones instead pair a fixed thermal camera with a zooming visible camera: the [Mavic 3 Thermal](/product/dji-mavic-3-thermal) has a 56× hybrid zoom camera, and the Zenmuse H30T has a 34× optical zoom camera and a laser rangefinder that measures from 3 to 3,000 m. You find the heat with the thermal camera, then zoom in with the visible camera to see what it is.`,
      { h2: `What a thermal imager cannot do` },
      `Thermal imaging is powerful but it has limits, and knowing them prevents bad decisions.`,
      { ul: [
        `**It cannot see through glass.** Glass blocks long-wave infrared, so a thermal camera sees the glass surface, not the room behind it.`,
        `**It cannot see through walls.** It shows the surface temperature of the wall, which can reveal hidden problems behind it, but not what is inside.`,
        `**Shiny surfaces reflect heat.** Bare metal can mirror the sky or a nearby hot object, and the reading can mislead unless the camera is set up for the surface.`,
        `**Conditions matter.** Sun on a roof, wind and recent rain all change the picture, which is why inspections are often flown at particular times of day.`
      ] },
      { h2: `Where thermal drones are used` },
      `The spec sheets above translate into a handful of common jobs. The Mavic 3 Thermal is positioned for roof, solar, fire and rescue work. The Matrice 4 Thermal for public safety, search and rescue and inspection crews working day and night. The Matrice 30T for firefighting, police, power-line and solar inspection in an IP55 aircraft. The H30T for long-range thermal inspection, search and rescue and fire support. Our [thermal drones guide](/blog/thermal-drones-australia-guide) explains these jobs in more depth.`,
      { h2: `How much resolution do you need?` },
      { table: {
        head: ['If your job is', 'Look for', 'Example', 'Price (AUD)'],
        rows: [
          ['Basic spotting of warm objects', '320×256', '[FLIR ION M440 Tactical Drone](/product/flir-ion-m440-tactical-drone)', '$27,500'],
          ['Roof, solar and general inspection', '640×512', '[DJI Mavic 3 Thermal](/product/dji-mavic-3-thermal)', '$8,249'],
          ['Day and night public safety work', '640×512, 50 mK or better', '[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', '$10,159'],
          ['Measured temperatures in bad weather', '640×512 radiometric, IP55', '[DJI Matrice 30T](/product/dji-matrice-30t)', '$14,917'],
          ['Two thermal views in one gimbal', 'Dual 640×512', '[FLIR VUE TZ20](/product/flir-vue-tz20)', '$11,700'],
          ['Long-range, fine detail', '1280×1024', '[DJI Zenmuse H30T](/product/dji-zenmuse-h30t)', '$17,335']
        ]
      } },
      `Resolution is not the only thing that sets the price: the aircraft, the visible cameras and the bundled Care coverage all count. Our [thermal drone buying guide](/blog/buy-dji-thermal-drone-australia-mavic-3t-vs-matrice-4t-vs-matrice-30t-prices) compares every thermal aircraft by price, and our [Zenmuse thermal payload guide](/blog/buy-dji-zenmuse-h30t-thermal-payload-australia-h30t-vs-h30-prices) covers the H30T against the H30. If you only need to scan a switchboard or a wall, a handheld camera may be enough: see our guides to [thermal camera vs thermal drone](/blog/thermal-camera-vs-thermal-drone-infrared-inspections) and [buying a thermal imaging camera](/blog/buy-thermal-imaging-camera-australia-flir-vs-dji-thermal-cameras).`,
      { h2: `Not sure which thermal camera you need? Ask for a free quote` },
      `Tell us what you want to inspect or find, how far away it will be and whether you need measured temperatures, and we will recommend a camera and send a written quote. Quotes are free. Use the [quote form](/quote), the buttons on the products above or the [contact page](/contact), or place an order through the [order form](/order). Every order ships free by express courier across Australia, and our [FAQ](/faq) answers common questions about delivery and returns.`,
      { h2: `Rules before you fly for work` },
      `Flying a thermal drone for paid work is commercial flying, and night or beyond-line-of-sight flying may need extra approval. Rules change, so confirm what applies on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules).`,
      { faq: [
        { q: `How does a thermal imager work?`, a: `It detects the long-wave infrared heat that objects give off and converts it into a temperature value for each pixel. The result is an image that shows temperature differences, and it works in darkness and smoke because it does not need visible light.` },
        { q: `What does 640x512 mean on a thermal camera?`, a: `It is the sensor resolution: 640 pixels wide by 512 high, which is 327,680 pixels, four times as many as a 320x256 sensor. More pixels give more detail at a distance.` },
        { q: `What is thermal sensitivity in mK?`, a: `It is the smallest temperature difference the camera can distinguish, in millikelvin. A lower number is better. The DJI Matrice 4 Thermal lists 50 mK or better.` },
        { q: `What is the difference between radiometric and non-radiometric thermal cameras?`, a: `A radiometric camera records a measurable temperature for every pixel. A non-radiometric camera shows a picture of relative heat without measured values. The Matrice 30T has a radiometric thermal camera.` },
        { q: `Can a thermal camera see through glass or walls?`, a: `No. Glass blocks long-wave infrared and walls are opaque to it, so a thermal camera shows the surface temperature, which can still reveal problems behind a wall.` }
      ] }
    ],
    targetKeywords: ['thermal imager', 'thermal image camera', 'thermal camera resolution', 'radiometric thermal camera', 'thermal sensitivity', 'how thermal imaging works']
  },
  {
    id: 'post-36',
    slug: 'buy-lidar-drone-australia-zenmuse-l2-vs-l3-matrice-400-livox-prices',
    intent: 'transactional',
    title: `Buy a LiDAR Drone in Australia: DJI Zenmuse L2 vs L3, Matrice 400 and Livox Sensors Compared by Price`,
    metaTitle: `LiDAR Drone Australia: Zenmuse L2 vs L3 Prices and Setup`,
    metaDescription: `Buying a LiDAR drone in Australia? Compare the Zenmuse L2 from $23,880, the L3, the Matrice 400 and Livox sensors, with full AUD setup costs and free quotes.`,
    subtitle: `The payload, the aircraft, the positioning kit and the software: what each part costs and two complete LiDAR setups priced from our range.`,
    date: 'November 2026',
    dateISO: '2026-11-10',
    modifiedISO: '2026-11-10',
    readTime: '10 min read',
    author: 'Flight Operations Team',
    tags: ['LiDAR Drones', 'Buying Guide', 'Surveying'],
    excerpt: `A complete DJI LiDAR drone setup costs from $44,420: a Zenmuse L2 Plus combo on a Matrice 400. We compare the L2 and L3, the aircraft and Livox sensors, with every price.`,
    image: '/images/blog-lidar-drone-buying-guide.webp',
    imageAlt: `DJI Zenmuse L2, DJI Zenmuse L3 and DJI Matrice 400 LiDAR drone equipment`,
    relatedProducts: ['dji-zenmuse-l2-lidar', 'zenmuse-l3-worry-free-plus-combo', 'dji-matrice-400-worry-free-plus-combo', 'livox-avia-2-lidar'],
    content: [
      `A LiDAR drone measures the shape of the ground and everything on it by firing laser pulses and timing their return, producing a 3D point cloud that survey, forestry, mining and construction teams can measure directly. Unlike photogrammetry, it works through gaps in vegetation and does not depend on good light. If you are searching for a drone with LiDAR in Australia, you will find that you are not buying one product. You are putting together a LiDAR payload, an aircraft that can carry it, a positioning system and software, and the choices interact. This guide prices every LiDAR option in our range in Australian dollars, compares the DJI Zenmuse L2 and L3, covers the aircraft and the Livox sensors for integrators, and totals two complete setups. You can check DJI's figures on its official specification pages for the [Zenmuse L2](https://enterprise.dji.com/zenmuse-l2/specs) and the [Zenmuse L3](https://enterprise.dji.com/zenmuse-l3/specs). If you are not yet sure whether you need LiDAR at all, read our comparison of [LiDAR vs photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia) first.`,
      { h2: `What a LiDAR drone setup includes` },
      `Four parts decide whether a LiDAR job produces usable data, and leaving one out is the usual budgeting mistake.`,
      { ul: [
        `**The LiDAR payload:** the [Zenmuse L2](/product/dji-zenmuse-l2-lidar) or the newer [Zenmuse L3](/product/zenmuse-l3-worry-free-plus-combo).`,
        `**The aircraft:** a Matrice that carries it. The L2 lists the Matrice 400, Matrice 350 RTK and Matrice 300 RTK. The L3 lists the Matrice 400.`,
        `**Positioning:** an RTK base station such as the [D-RTK 3 Multifunctional Station](/product/d-rtk-3-multifunctional-station), and a [survey pole and tripod kit](/product/d-rtk-3-survey-pole-and-tripod-kit) to set it up accurately on site.`,
        `**Software and training:** DJI states that its LiDAR accuracy figures are measured with DJI Terra post-processing, so plan for the processing software and for training. Ask us for the current licence and options.`
      ] },
      { h2: `LiDAR drone prices in Australia` },
      `Prices are current listed prices in Australian dollars. Click any item for its full specification.`,
      { table: {
        head: ['Product', 'What it is', 'Price (AUD)'],
        rows: [
          ['[Livox Mid-360S LiDAR](/product/livox-mid-360s-lidar)', 'Livox sensor, 360-degree horizontal view', '$899'],
          ['[Livox Mid-70 LiDAR](/product/livox-mid-70-lidar)', 'Livox sensor, 70.4-degree circular view', '$1,699'],
          ['[Livox TELE-15 LiDAR](/product/livox-tele-15-lidar)', 'Livox sensor, long range, narrow view', '$2,099'],
          ['[Livox Avia LiDAR](/product/livox-avia-lidar)', 'Livox sensor, up to 240,000 points a second', '$2,499'],
          ['[Livox Avia 2 LiDAR](/product/livox-avia-2-lidar)', 'Next-generation Livox Avia sensor', '$4,720'],
          ['[DJI Zenmuse L2 LiDAR](/product/dji-zenmuse-l2-lidar)', 'LiDAR payload with a 20 MP RGB camera', '$23,880'],
          ['[Zenmuse L2 Worry-Free Basic Combo](/product/zenmuse-l2-worry-free-basic-combo)', 'L2 with DJI Care Enterprise Basic', '$23,880'],
          ['[Zenmuse L2 Worry-Free Plus Combo](/product/zenmuse-l2-worry-free-plus-combo)', 'L2 with DJI Care Enterprise Plus', '$25,870'],
          ['[Zenmuse L3 Worry-Free Plus Combo](/product/zenmuse-l3-worry-free-plus-combo)', 'Newer DJI LiDAR payload with Care coverage', '$27,410'],
          ['[DJI Matrice 400 Worry-Free Plus Combo](/product/dji-matrice-400-worry-free-plus-combo)', 'Heavy-lift multi-payload aircraft', '$18,550'],
          ['[D-RTK 3 Multifunctional Station](/product/d-rtk-3-multifunctional-station)', 'RTK station for centimetre-level corrections', '$2,320'],
          ['[D-RTK 3 Survey Pole and Tripod Kit](/product/d-rtk-3-survey-pole-and-tripod-kit)', 'Pole and tripod for the station', '$460']
        ]
      } },
      { h2: `Zenmuse L2 vs L3: how they compare` },
      `Both are DJI LiDAR payloads for the Matrice series. The L3 is the newer one, and it is more capable and works with fewer aircraft. The figures below are DJI's published specifications. DJI measured them in laboratory conditions that differ between the two payloads, so use them to compare capability, not as promises for your site.`,
      { table: {
        head: ['', 'Zenmuse L2', 'Zenmuse L3'],
        rows: [
          ['Supported aircraft', 'Matrice 400, Matrice 350 RTK, Matrice 300 RTK', 'Matrice 400 only'],
          ['Weight', '905 g', '1.60 kg'],
          ['Point rate', 'Up to 240,000 points a second (single return), 1,200,000 (multiple returns)', 'See DJI specifications'],
          ['Accuracy (DJI lab tests)', 'Vertical 4 cm, horizontal 5 cm at 150 m', 'Vertical 3 cm, horizontal 4 cm at 120 m; 5 cm and 7.5 cm at 300 m'],
          ['Detection range', '450 m at 50% reflectivity', '2,000 m at 80% reflectivity (100 kHz)'],
          ['Camera', '4/3 CMOS, 20 MP RGB', 'Dual RGB mapping cameras, 107 degrees combined view'],
          ['Ingress protection', 'IP54', 'IP54'],
          ['Price in our range', '[$23,880](/product/dji-zenmuse-l2-lidar), or [$25,870](/product/zenmuse-l2-worry-free-plus-combo) with Care Plus', '[$27,410](/product/zenmuse-l3-worry-free-plus-combo) with Care Plus']
        ]
      } },
      `Compared like for like, with Care Enterprise Plus on both, the L3 costs $1,540 more than the L2. That buys a tighter accuracy figure, a much longer detection range and wider camera coverage, in exchange for a heavier payload and a single supported aircraft.`,
      { h2: `Zenmuse L2: the proven choice from $23,880` },
      `The [Zenmuse L2](/product/dji-zenmuse-l2-lidar) integrates a frame-based LiDAR with up to five returns, a 4/3 CMOS RGB camera and a high-accuracy IMU to produce colourised point clouds. It weighs about 905 g and is rated IP54. Because it runs on three aircraft, including the Matrice 350 RTK and Matrice 300 RTK that many operators already own, it is the natural choice if you have a Matrice and want to add LiDAR. DJI aims it at survey, forestry and construction teams. It is also sold as a [Worry-Free Basic Combo](/product/zenmuse-l2-worry-free-basic-combo) at the same $23,880 with DJI Care Enterprise Basic, and a [Plus Combo](/product/zenmuse-l2-worry-free-plus-combo) at $25,870.`,
      { h2: `Zenmuse L3: the newer payload at $27,410` },
      `The [Zenmuse L3 Worry-Free Plus Combo](/product/zenmuse-l3-worry-free-plus-combo) is DJI's newer LiDAR payload for high-accuracy surveying and mapping. DJI lists vertical accuracy of 3 cm and horizontal accuracy of 4 cm at a 120 m flight altitude, a detection range of 2,000 m at 80% reflectivity, a weight of 1.60 kg and an IP54 rating. It lists one supported aircraft, the Matrice 400, which needs the Zenmuse L3 single gimbal connector. Choose it if you are buying a new Matrice 400 and want the highest capability, or if your work needs the extra range.`,
      { h2: `The aircraft: Matrice 400, 350 RTK or 300 RTK` },
      `The [DJI Matrice 400 Worry-Free Plus Combo](/product/dji-matrice-400-worry-free-plus-combo) at $18,550 is DJI's heavy-lift enterprise platform. It carries multiple payloads, with [dual](/product/dji-matrice-400-dual-gimbal-connector) and [third](/product/dji-matrice-400-third-gimbal-connector) gimbal connectors available at $390 and $230, and it is the only aircraft that carries both the L2 and the L3. The Matrice 350 RTK and Matrice 300 RTK carry the L2 only. We quote those individually, so ask us for a price and availability. Our [DJI Matrice buying guide](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price) compares the wider range, and you can browse the [DJI Matrice category](/category/enterprise-drones/dji-matrice).`,
      { h2: `Two complete LiDAR setups, priced` },
      `These use current listed prices. They exclude software licences, training and any extras, so treat them as starting points and ask for a quote that matches your work.`,
      { table: {
        head: ['Setup', 'What is in it', 'Total (AUD)'],
        rows: [
          ['L2 on a Matrice 400', '[Zenmuse L2 Plus Combo](/product/zenmuse-l2-worry-free-plus-combo) $25,870 + [Matrice 400 Plus Combo](/product/dji-matrice-400-worry-free-plus-combo) $18,550', '$44,420'],
          ['L2 setup with RTK station', 'The L2 setup + [D-RTK 3 station](/product/d-rtk-3-multifunctional-station) $2,320', '$46,740'],
          ['L3 on a Matrice 400', '[Zenmuse L3 Plus Combo](/product/zenmuse-l3-worry-free-plus-combo) $27,410 + [Matrice 400 Plus Combo](/product/dji-matrice-400-worry-free-plus-combo) $18,550', '$45,960'],
          ['L3 setup with RTK station', 'The L3 setup + D-RTK 3 station $2,320', '$48,280']
        ]
      } },
      `If you already own a Matrice 350 RTK or 300 RTK, the L2 on its own is $23,880, or $25,870 with Care Plus. Add the [survey pole and tripod kit](/product/d-rtk-3-survey-pole-and-tripod-kit) at $460 for the RTK station.`,
      { h2: `Livox sensors for integrators and developers` },
      `The five Livox LiDAR sensors in our range are bare sensors for developers and integrators building their own payloads, not turnkey survey systems. The [Mid-360S](/product/livox-mid-360s-lidar) at $899 has a 360-degree horizontal field of view for mobile mapping and robotics. The [Mid-70](/product/livox-mid-70-lidar) at $1,699 has a 70.4-degree circular field of view for drone mapping. The [TELE-15](/product/livox-tele-15-lidar) at $2,099 has a long-range, narrow field of view for corridor mapping such as power lines. The [Avia](/product/livox-avia-lidar) at $2,499 records up to 240,000 points a second, and the [Avia 2](/product/livox-avia-2-lidar) at $4,720 is its next-generation successor. Browse the [LiDAR sensors category](/category/cameras-sensors/lidar-sensors), and ask us if you need help matching a sensor to an aircraft.`,
      { h2: `Which LiDAR option should you buy?` },
      { ul: [
        `**You already own a Matrice 350 RTK or 300 RTK:** the [Zenmuse L2](/product/dji-zenmuse-l2-lidar) at $23,880.`,
        `**A new complete setup with the proven payload:** the L2 on a Matrice 400, from $44,420.`,
        `**A new complete setup with the highest capability:** the L3 on a Matrice 400, from $45,960.`,
        `**You build your own payloads:** one of the five [Livox sensors](/category/cameras-sensors/lidar-sensors), from $899.`,
        `**You are not sure LiDAR is the right tool:** read [LiDAR vs photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia), or look at the [Zenmuse P1](/product/dji-zenmuse-p1) mapping camera in our [Zenmuse payload guide](/blog/buy-dji-zenmuse-h30t-thermal-payload-australia-h30t-vs-h30-prices).`
      ] },
      { h2: `Rules, training and accuracy in the real world` },
      `Flying a LiDAR drone for survey work is commercial flying, so you will normally need the right accreditation or licence and an operator certificate. Rules change, so confirm what applies on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for common questions. DJI's accuracy figures come from controlled tests, so accuracy on your site depends on your flight plan, your RTK set-up and your processing. Plan control points and training, and read our [enterprise drone guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) for how these aircraft fit a professional workflow.`,
      { h2: `Get a free quote for your LiDAR setup` },
      `Tell us what you will survey, the area, the accuracy you need and whether you already own a Matrice, and we will recommend a setup and send a written quote. Quotes are free. Use the [quote form](/quote), the buttons on each product above or the form below. You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact).`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply. For LiDAR we recommend a written quote so we confirm compatibility, availability and delivery of the whole setup together. Browse all [enterprise drones](/category/enterprise-drones) and the [Zenmuse cameras and payloads](/category/cameras-sensors/dji-zenmuse-cameras).`,
      { faq: [
        { q: `How much does a LiDAR drone cost in Australia?`, a: `A DJI Zenmuse L2 with a Matrice 400 costs from $44,420 in our range. The L2 payload alone is $23,880, the Zenmuse L3 Plus combo is $27,410 and the Matrice 400 Plus combo is $18,550. All prices are in Australian dollars.` },
        { q: `What is the difference between the Zenmuse L2 and L3?`, a: `The L3 is the newer payload. DJI lists tighter accuracy and a much longer detection range for it, but it is heavier at 1.60 kg and supports only the Matrice 400, while the L2 supports the Matrice 400, 350 RTK and 300 RTK. Like for like with Care Plus, the L3 costs $1,540 more.` },
        { q: `Which drone carries the Zenmuse L2?`, a: `DJI lists the Matrice 400, Matrice 350 RTK and Matrice 300 RTK. The Matrice 300 RTK requires the DJI RC Plus controller.` },
        { q: `Can I buy a LiDAR sensor without a drone?`, a: `Yes. We sell five Livox LiDAR sensors from $899 for developers and integrators. They are bare sensors, not complete survey systems.` },
        { q: `Do I need RTK for drone LiDAR?`, a: `DJI measures its LiDAR accuracy with an RTK base station, so for survey-grade work you should plan for one. The D-RTK 3 Multifunctional Station is $2,320.` }
      ] }
    ],
    targetKeywords: ['drone lidar', 'drone with lidar', 'lidar 3d scanner', 'zenmuse l3', 'dji zenmuse l2', 'livox lidar']
  },
  {
    id: 'post-37',
    slug: 'buy-dji-dock-3-vs-dock-2-australia-price-packages-drone-in-a-box',
    intent: 'transactional',
    title: `DJI Dock 3 vs Dock 2: Price, Packages and Which Drone-in-a-Box to Buy in Australia`,
    metaTitle: `DJI Dock 3 vs Dock 2: Price and Packages in Australia`,
    metaDescription: `Buying a DJI dock in Australia? Dock 3 is $19,999 and Dock 2 is $12,850. Compare the Survey and Thermal packages, what is included and how to choose.`,
    subtitle: `What a drone docking station costs, which aircraft each dock works with, and when a package beats buying the parts.`,
    date: 'November 2026',
    dateISO: '2026-11-10',
    modifiedISO: '2026-11-10',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['DJI Dock', 'Buying Guide', 'Enterprise Drones'],
    excerpt: `The DJI Dock 3 is $19,999 and the Dock 2 is $12,850, with the aircraft sold separately. The Dock 3 Survey and Thermal packages bundle the aircraft for $30,828 and $34,278. We compare them.`,
    image: '/images/blog-dji-dock-buying-guide.webp',
    imageAlt: `DJI Dock 3, the DJI Dock 3 vehicle-mounted gimbal mount and DJI Dock 2 automated drone docks`,
    relatedProducts: ['dji-dock-3', 'dji-dock-2', 'dji-dock-3-survey-package', 'dji-dock-3-thermal-package'],
    content: [
      `A drone docking station turns a drone into something closer to a security camera or a sensor on a pole: it launches on a schedule or on command, flies the mission, lands, recharges and waits for the next one, with nobody on site. The idea is often called drone-in-a-box, and it suits site security, inspection, mapping and emergency response. If you have searched for the DJI Dock 3 price or the DJI Dock 2 price in Australia, you have found that there are four listings and a few important details: each dock works with a specific aircraft, the aircraft is sold separately unless you choose a package, and the packages differ by hundreds of dollars from buying the parts. This guide sets out what each dock costs, how the Dock 3 compares with the Dock 2, what the two packages contain, and how to decide. You can check the Dock 3 specifications on DJI's official [Dock 3 specifications page](https://enterprise.dji.com/dock-3/specs).`,
      { h2: `What a DJI dock does` },
      `A dock is a base station that houses a compatible aircraft. DJI describes both models in the same terms, and the benefits are the same whichever you pick.`,
      { ul: [
        `**Automated launch, landing and charging:** the aircraft takes off from the dock, returns to it and recharges inside it.`,
        `**Remote operation:** missions are planned and monitored through DJI FlightHub 2, so a pilot can run flights from an office.`,
        `**Repeat missions:** the same route can be flown again and again, which suits patrols, inspections and change detection over time.`
      ] },
      { h2: `DJI dock prices in Australia` },
      `Four dock listings and one accessory cover the range. Prices are in Australian dollars.`,
      { table: {
        head: ['Product', 'Aircraft', 'What is included', 'Price (AUD)'],
        rows: [
          ['[DJI Dock 2](/product/dji-dock-2)', 'Matrice 3D series', 'Dock only, aircraft sold separately', '$12,850'],
          ['[DJI Dock 3](/product/dji-dock-3)', 'Matrice 4D series', 'Dock only, aircraft sold separately', '$19,999'],
          ['[DJI Dock 3 Survey Package](/product/dji-dock-3-survey-package)', 'Matrice 4D', 'Dock, aircraft, Care Enterprise Plus, DJI Terra Pro for one year, controller and spares', '$30,828'],
          ['[DJI Dock 3 Thermal Package](/product/dji-dock-3-thermal-package)', 'Matrice 4TD (thermal)', 'Dock, aircraft, Care Enterprise Plus, speaker, spotlight, controller and spares', '$34,278'],
          ['[DJI Dock 3 Vehicle-Mounted Gimbal Mount](/product/dji-dock-3-vehicle-mounted-gimbal-mount)', 'Dock 3', 'Mount for vehicle-based deployments', '$490']
        ]
      } },
      { h2: `DJI Dock 3 vs DJI Dock 2` },
      `The choice between the two docks starts with the aircraft, because each one is built around a specific series. The [Dock 2](/product/dji-dock-2) is designed for the Matrice 3D and 3TD. The [Dock 3](/product/dji-dock-3) is designed for the Matrice 4D and 4TD. You cannot mix them, so decide which aircraft you want first.`,
      { table: {
        head: ['', 'DJI Dock 2', 'DJI Dock 3'],
        rows: [
          ['Designed for', 'Matrice 3D and 3TD', 'Matrice 4D and 4TD'],
          ['Positioning', 'The more affordable DJI dock for routine inspection, mapping and patrols', 'For security, inspection and response teams planning autonomous drone-in-a-box programs'],
          ['Remote operation', 'DJI FlightHub 2', 'DJI FlightHub 2'],
          ['Dock price', '[$12,850](/product/dji-dock-2)', '[$19,999](/product/dji-dock-3)'],
          ['Packages in our range', 'Dock only', 'Survey and Thermal packages']
        ]
      } },
      `The Dock 3 costs $7,149 more than the Dock 2. That gap buys you the Matrice 4D series and the choice of ready-made packages. Choose the Dock 2 if your budget is the deciding factor and the Matrice 3D series suits the job. Choose the Dock 3 if you want the Matrice 4D series, or the thermal and survey packages below. If you are unsure which aircraft you need, our [DJI Matrice buying guide](/blog/buy-dji-matrice-australia-matrice-4-30-400-compared-by-price) compares the Matrice range by price.`,
      { h2: `DJI Dock 3 Survey Package: for mapping and inspection` },
      `The [Dock 3 Survey Package](/product/dji-dock-3-survey-package) at $30,828 is built for survey and mapping teams starting automated missions. In the box:`,
      { ul: [
        `DJI Dock 3 and a DJI Matrice 4D aircraft.`,
        `DJI Care Enterprise Plus for the Matrice 4D.`,
        `DJI Terra Pro for one year.`,
        `A Matrice 4D series battery, low-noise anti-ice propellers and a 256 GB microSD card.`,
        `A DJI RC Plus 2 Enterprise Enhanced controller with strap and bracket kit.`
      ] },
      `It suits survey, mapping and inspection organisations that want the dock, an aircraft, mapping software and a controller from a single purchase. If you compare mapping methods first, our guide to [LiDAR vs photogrammetry](/blog/lidar-vs-photogrammetry-drone-mapping-australia) explains which suits which job.`,
      { h2: `DJI Dock 3 Thermal Package: for security and emergency response` },
      `The [Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) at $34,278 pairs the dock with a thermal Matrice 4TD, which makes it the choice for around-the-clock security and public safety work. In the box:`,
      { ul: [
        `DJI Dock 3 and a DJI Matrice 4TD thermal aircraft.`,
        `DJI Care Enterprise Plus for the Matrice 4TD.`,
        `A DJI AS1 speaker and an AL1 spotlight.`,
        `A Matrice 4D series battery, low-noise anti-ice propellers and a 256 GB microSD card.`,
        `A DJI RC Plus 2 Enterprise controller with strap and bracket kit.`
      ] },
      `The thermal camera, loudspeaker and spotlight are what separate this package from the survey one. To understand how thermal imaging compares with a thermal camera on a stick, read our guide to [thermal drones in Australia](/blog/thermal-drones-australia-guide) and our comparison of a [thermal camera vs a thermal drone](/blog/thermal-camera-vs-thermal-drone-infrared-inspections).`,
      { h2: `Package or parts: which costs less?` },
      `You can also buy the Dock 3 and an aircraft separately. The matching Matrice 4 Worry-Free Flagship Combos are listed in our range, so here is the arithmetic from current listed prices.`,
      { table: {
        head: ['', 'Dock 3 plus aircraft separately', 'Package price', 'Difference'],
        rows: [
          ['Survey', '[Dock 3](/product/dji-dock-3) $19,999 plus [Matrice 4D Flagship Combo](/product/dji-matrice-4d-worry-free-flagship-combo) $12,040 = $32,039', '[$30,828](/product/dji-dock-3-survey-package)', '$1,211 less'],
          ['Thermal', '[Dock 3](/product/dji-dock-3) $19,999 plus [Matrice 4TD Flagship Combo](/product/dji-matrice-4td-worry-free-flagship-combo) $15,470 = $35,469', '[$34,278](/product/dji-dock-3-thermal-package)', '$1,191 less']
        ]
      } },
      `The packages are about $1,200 cheaper in both cases, but the kits are not identical. The packages add items such as the speaker and spotlight or DJI Terra Pro, while the combos include their own extras. Compare the contents on the product pages before you decide, and ask us if you need a mixed configuration.`,
      { h2: `Which DJI dock should you buy?` },
      { ul: [
        `**Lowest entry price:** the [Dock 2](/product/dji-dock-2) at $12,850, with a Matrice 3D series aircraft.`,
        `**The Matrice 4D series, configured your way:** the [Dock 3](/product/dji-dock-3) at $19,999.`,
        `**Mapping and survey:** the [Dock 3 Survey Package](/product/dji-dock-3-survey-package) at $30,828.`,
        `**Security, patrol and emergency response:** the [Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) at $34,278.`,
        `**A dock on a vehicle:** add the [vehicle-mounted gimbal mount](/product/dji-dock-3-vehicle-mounted-gimbal-mount) at $490.`
      ] },
      { h2: `Before you buy: rules, planning and training` },
      `A dock is only useful if the operation behind it is lawful and planned. Remote, unattended flying usually means flying beyond visual line of sight, which needs approval from the Civil Aviation Safety Authority, and commercial flying needs an operator certificate. Rules change, so confirm what applies to your work on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for the basics. Plan the installation site, power, network and the missions you will fly, and check the requirements on each product page. Our [enterprise drone guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) explains how docks fit alongside piloted aircraft.`,
      { h2: `Spares and related equipment` },
      `Browse the full [DJI Dock category](/category/enterprise-drones/dji-dock), the [enterprise accessories](/category/enterprise-drones/enterprise-accessories) and the wider [enterprise drones range](/category/enterprise-drones). If a piloted aircraft suits the job better than a dock, see the [DJI Matrice range](/category/enterprise-drones/dji-matrice) and the [thermal cameras](/category/cameras-sensors/thermal-cameras).`,
      { h2: `Get a free quote on a dock or dock package` },
      `Tell us the site, the missions you want to automate and whether you already own a Matrice, and we will recommend a dock or package and send a written quote. Quotes are free. Use the [quote form](/quote), the buttons on each product above or the form below, and we will confirm compatibility and availability before you pay.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For a dock we recommend asking for a written quote first, so we confirm the configuration, availability and delivery before you pay: use the [quote form](/quote). You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `How much is the DJI Dock 3 in Australia?`, a: `The DJI Dock 3 is $19,999 as a dock only, with the aircraft sold separately. The Dock 3 Survey Package is $30,828 and the Dock 3 Thermal Package is $34,278. All prices are in Australian dollars.` },
        { q: `How much is the DJI Dock 2?`, a: `The DJI Dock 2 is $12,850 as a dock only. It is designed for the Matrice 3D series, which is sold separately.` },
        { q: `What is the difference between the DJI Dock 3 and Dock 2?`, a: `They work with different aircraft. The Dock 2 is designed for the Matrice 3D and 3TD, and the Dock 3 for the Matrice 4D and 4TD. The Dock 3 costs $7,149 more and has two ready-made packages.` },
        { q: `Does the dock include a drone?`, a: `Not on its own. The Dock 3 and Dock 2 are sold without an aircraft. The Dock 3 Survey and Thermal packages include a Matrice 4D or 4TD.` },
        { q: `Do I need CASA approval to use a drone dock?`, a: `Remote, unattended flying usually involves flying beyond visual line of sight, which needs approval from CASA, and commercial flying needs an operator certificate. Check the current requirements on the CASA website for your operation.` }
      ] }
    ],
    targetKeywords: ['dji dock 3 price', 'dji dock 2 price', 'drone docking station', 'dji drone in a box', 'drone with docking station', 'dji dock 3 australia']
  },
  {
    id: 'post-38',
    slug: 'buy-dji-agras-spreader-drone-australia-seeding-fertiliser-spreading-systems-compared',
    intent: 'transactional',
    title: `Buy a Spreader Drone in Australia: DJI Agras Seeding and Fertiliser Spreading Systems Compared`,
    metaTitle: `DJI Agras Spreader Drones: Seeding and Fertiliser Prices`,
    metaDescription: `Compare DJI Agras spreader drones for seeding and fertiliser in Australia: T25P, T50, T70P and T100 tank sizes, spread widths and prices, with a free quote.`,
    subtitle: `What each DJI Agras spreading system holds, how wide it spreads, what it costs and which one suits your acreage.`,
    date: 'November 2026',
    dateISO: '2026-11-12',
    modifiedISO: '2026-11-12',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['Agricultural Drones', 'Buying Guide', 'Spreading Systems'],
    excerpt: `A DJI Agras spreading system lets a spray drone broadcast seed, fertiliser and other dry granules. We compare the T25P, T50, T70P and T100 by tank size, spread width and price, with worked examples.`,
    image: '/images/blog-dji-agras-spreader-drone-guide.webp',
    imageAlt: `DJI Agras T25P, T50 and T100 agricultural drones used for seeding and fertiliser spreading`,
    relatedProducts: ['dji-agras-t25p', 'dji-agras-t50-spreading-system', 'dji-agras-t70p', 'dji-150l-spreading-system'],
    content: [
      `A spreader drone does the job of a ute with a broadcast spreader, without the tracks, the compaction or the wait for a paddock to dry. It carries dry granules such as seed and fertiliser, flies a planned route and throws the material out over a set width. If you have searched for an aerial seeding drone or a drone fertiliser spreader in Australia, the practical question is which DJI Agras model carries enough, spreads wide enough and fits your budget. Every Agras drone in our range sprays liquids, and each one adds a granular spreading system for dry material, but the hopper sizes differ by a factor of five between the smallest and the largest. This guide sets out what each system holds, what it costs and how to match it to the area you cover. You can check the figures on DJI's official specification pages for the [Agras T25P](https://ag.dji.com/t25p/specs), [Agras T50](https://ag.dji.com/t50/specs), [Agras T70P](https://ag.dji.com/t70p/specs) and [Agras T100](https://ag.dji.com/t100/specs).`,
      { h2: `What a DJI Agras spreading system does` },
      `A spreading system replaces the liquid tank with a hopper and a centrifugal disc. Material drops from the hopper onto the spinning disc, which throws it out to either side of the aircraft while the drone follows a route planned in the DJI Agras app. The same basics apply across the range.`,
      { ul: [
        `**Dry granules from fine to coarse:** the T25P and T50 systems take 0.5 to 5 mm granules. The T70P and T100 list a standard extra-large auger for 0.5 to 10 mm material, with optional augers for smaller or larger granules.`,
        `**Planned, repeatable passes:** the aircraft flies a mapped route with terrain following, so each pass is laid out the same way.`,
        `**One aircraft, two jobs:** the same drone sprays liquids with a spray tank, so a contractor can seed in autumn and spray in spring with one aircraft.`
      ] },
      `If you are new to agricultural drones, our overview of [agricultural drones for weed control, seeding and crop monitoring](/blog/agricultural-drones-weed-control-seeding-crop-monitoring) explains the whole field before you start comparing models.`,
      { h2: `DJI Agras spreader prices in Australia` },
      `Four aircraft and five spreading products cover the range. Prices are in Australian dollars. The T50 and T100 take a separate spreading system, which we list alongside the aircraft.`,
      { table: {
        head: ['Setup', 'What DJI lists for spreading', 'Price (AUD)'],
        rows: [
          ['[DJI Agras T25P](/product/dji-agras-t25p)', '30 L spreading tank, 25 kg load', '$17,530'],
          ['[DJI Agras T50](/product/dji-agras-t50) plus [T50 Spreading System](/product/dji-agras-t50-spreading-system)', '75 L spreading tank, 50 kg load', '$21,999 plus $2,200 = $24,199'],
          ['[DJI Agras T70P](/product/dji-agras-t70p)', '100 L spreading tank, 70 kg load', '$20,380'],
          ['[DJI Agras T100](/product/dji-agras-t100) plus [150L Spreading System](/product/dji-150l-spreading-system)', '150 L spreading tank, 100 kg load', '$30,380 plus $3,010 = $33,390'],
          ['[DJI Agras T30 Spreading System 3.0](/product/dji-agras-t30-spreading-system-3-0)', 'Add-on for an Agras T30 you already own', '$1,800']
        ]
      } },
      `The prices for the T25P and T70P are for the aircraft. DJI lists a spreading system on each aircraft's specification page, and we confirm exactly which spreading hardware is in the box when you ask for a quote, so there is no surprise on delivery.`,
      { h2: `DJI Agras spreading specifications compared` },
      `This table uses the figures on DJI's own specification pages. Spread width depends on the material and how even you want the coverage, and the DJI Agras app recommends a payload for the conditions on the day, so treat the load as a maximum and not a target.`,
      { table: {
        head: ['', 'Agras T25P', 'Agras T50 with spreading system', 'Agras T70P', 'Agras T100'],
        rows: [
          ['Spreading tank volume', '30 L', '75 L', '100 L', '150 L'],
          ['Maximum load in the hopper', '25 kg', '50 kg', '70 kg', '100 kg'],
          ['Effective spread width', '3 to 8 m', '8 m', '3 to 10 m', '3 to 10 m'],
          ['Maximum discharge rate (compound fertiliser)', '190 kg/min', 'Not listed on DJI page', '400 kg/min', '400 kg/min'],
          ['Granule size', '0.5 to 5 mm', '0.5 to 5 mm', '0.5 to 10 mm (standard auger)', '0.5 to 10 mm (standard auger)'],
          ['Spray tank for liquids', '20 L', '40 L', '70 L', '100 L']
        ]
      } },
      `Two things stand out. The T70P and T100 spread up to 400 kg a minute, so the limit on a big job is the number of refills, not the throw rate. And the T70P sits between the T50 and the T100 on hopper size and its listed aircraft price is lower than the T50 with its system added, so it is worth asking about if you spread as much as you spray.`,
      { h2: `How much ground does one load cover?` },
      `Coverage depends on how much material you apply per hectare, so here is the arithmetic for two common rates on a full hopper. These are simple sums, not field results: wind, material density, battery turnaround and flight speed all change what you achieve in a day.`,
      { table: {
        head: ['Aircraft (full load)', 'Area per load at 50 kg/ha', 'Area per load at 100 kg/ha'],
        rows: [
          ['T25P (25 kg)', '0.5 ha', '0.25 ha'],
          ['T50 (50 kg)', '1.0 ha', '0.5 ha'],
          ['T70P (70 kg)', '1.4 ha', '0.7 ha'],
          ['T100 (100 kg)', '2.0 ha', '1.0 ha']
        ]
      } },
      `Read it the other way and you can size a drone to a job. A 200 ha pasture sown at 25 kg/ha needs 5,000 kg of seed, which is 50 full loads on a T100 or 200 on a T25P. If you spread small areas or fussy material, a smaller aircraft is easier to move and refill. If you spread hundreds of hectares, hopper size saves hours.`,
      { h2: `What you can spread with a DJI Agras drone` },
      `The spreading systems are built for dry granules. DJI's specification pages for the T70P and T100 list the augers and the material each one suits.`,
      { ul: [
        `**Seed and fertiliser:** the standard extra-large auger takes 0.5 to 10 mm granules including fertiliser, wheat and feed.`,
        `**Rice-sized grain:** a medium auger for 4 to 6 mm granules is fitted as standard, and a large auger for 4 to 10 mm is optional.`,
        `**Fine seed and granular chemicals:** an optional small auger for 0.5 to 4 mm material is listed for rapeseed and for granular herbicides and insecticides.`
      ] },
      `Always follow the product label and the rules in your state for whatever you apply. If your main interest is controlling weeds, read our [drone weed spraying buying guide](/blog/buy-drone-for-weed-spraying-australia-dji-agras-weed-control-setup-cost), and for liquid spraying our [Agras T25P, T50 and T100 comparison](/blog/buy-dji-agras-spray-drone-australia-t25p-vs-t50-vs-t100-prices).`,
      { h2: `Which spreader drone should you buy?` },
      { ul: [
        `**Small acreage or a solo operator:** the [Agras T25P](/product/dji-agras-t25p) at $17,530, with a 30 L hopper in a foldable aircraft.`,
        `**Most mixed farms and small contractors:** the [Agras T50](/product/dji-agras-t50) with its [spreading system](/product/dji-agras-t50-spreading-system) at $24,199 and a 75 L hopper.`,
        `**Contractors who spread as much as they spray:** the [Agras T70P](/product/dji-agras-t70p) at $20,380, with a 100 L hopper and up to 400 kg/min.`,
        `**Broadacre seeding and fertilising:** the [Agras T100](/product/dji-agras-t100) with the [150L Spreading System](/product/dji-150l-spreading-system) at $33,390.`,
        `**Already own a T30:** the [T30 Spreading System 3.0](/product/dji-agras-t30-spreading-system-3-0) at $1,800 adds dry spreading to the aircraft you have.`
      ] },
      { h2: `Batteries, power and refilling` },
      `Heavier loads mean more battery cycles in a day, so plan the power with the aircraft, not after it. Our guide to [Agras batteries, chargers and power supply](/blog/buy-dji-agras-batteries-chargers-power-supply-australia-t30-t40-t50-t100) covers what each model needs, including generators and fast chargers for a day in the paddock. A second person to load the hopper keeps the aircraft flying while you refill.`,
      { h2: `Before you buy: rules and training` },
      `Commercial drone work and large aircraft carry requirements, and spreading chemicals adds state-level rules on top. Check what applies to your operation on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for the basics. Our [agricultural spraying drone guide](/blog/agricultural-spraying-drones-australia-guide) explains how the work is planned and what a first season looks like.`,
      { h2: `Spares and related equipment` },
      `Browse the full [agricultural spraying drones category](/category/spraying-drones), the [spraying drone accessories](/category/spraying-drones/spraying-drone-accessories) and the [enterprise drones](/category/enterprise-drones) if you also need thermal or mapping aircraft. For crop health before you spread, our [multispectral drone buying guide](/blog/buy-multispectral-drone-camera-australia-mavic-3m-phantom-4-micasense-prices) compares the cameras.`,
      { h2: `Get a free quote on a spreader drone or spreading system` },
      `Tell us your area, the material you spread and whether you already own an Agras drone, and we will recommend a model and send a written quote. Quotes are free. Use the [quote form](/quote), the buttons on each product above or the form below, and we will confirm the spreading hardware, compatibility and availability before you pay.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For an agricultural drone we recommend asking for a written quote first, so we confirm the configuration, availability and delivery before you pay: use the [quote form](/quote). You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `Can a DJI Agras drone spread seed and fertiliser?`, a: `Yes. DJI's Agras T25P, T50, T70P and T100 can carry a granular spreading system that broadcasts dry granules such as seed and fertiliser. The T25P and T50 systems take 0.5 to 5 mm granules, and the T70P and T100 list augers for 0.5 to 10 mm material.` },
        { q: `How much does a spreader drone cost in Australia?`, a: `A DJI Agras T25P is $17,530 and a T70P is $20,380. The T50 with its spreading system is $24,199 and the T100 with the 150L spreading system is $33,390. The T30 Spreading System 3.0 add-on is $1,800. All prices are in Australian dollars.` },
        { q: `How much can a DJI Agras spreading system carry?`, a: `DJI lists a maximum hopper load of 25 kg for the T25P, 50 kg for the T50, 70 kg for the T70P and 100 kg for the T100. The DJI Agras app recommends the actual payload for the conditions.` },
        { q: `How wide does a DJI Agras drone spread?`, a: `DJI lists an effective spread width of 3 to 8 m for the T25P, 8 m for the T50 and 3 to 10 m for the T70P and T100. The width depends on the material and the evenness you want.` },
        { q: `Do I need CASA approval to spread with a drone?`, a: `Commercial drone work and heavy drones carry requirements, and spreading chemicals adds state rules. Check the current requirements on the CASA website and with your state authority for your operation.` }
      ] }
    ],
    targetKeywords: ['aerial seeding drone', 'drone spreader', 'fertiliser spreading drone', 'dji agras spreading system', 'drone seeding australia', 'dji agras t70p']
  },
  {
    id: 'post-39',
    slug: 'buy-search-and-rescue-drone-australia-thermal-drones-matrice-4t-m30t-mavic-3t-prices',
    intent: 'transactional',
    title: `Buy a Search and Rescue Drone in Australia: Thermal Drones, Spotlights and Speakers Compared by Price`,
    metaTitle: `Search and Rescue Drone Australia: Thermal Drone Prices`,
    metaDescription: `Buying a search and rescue drone in Australia? Compare the Matrice 4T, Matrice 30T and Mavic 3T thermal drones by price, flight time and weather rating.`,
    subtitle: `Which thermal drone to buy for night searches, what a spotlight and speaker add, and what a complete setup costs.`,
    date: 'November 2026',
    dateISO: '2026-11-12',
    modifiedISO: '2026-11-12',
    readTime: '9 min read',
    author: 'Flight Operations Team',
    tags: ['Thermal Drones', 'Buying Guide', 'Search and Rescue'],
    excerpt: `A search and rescue drone needs a thermal camera, long flight time and, for night work, a spotlight and speaker. We compare the Mavic 3T, Matrice 4T and Matrice 30T by price and specification.`,
    image: '/images/blog-search-and-rescue-drone-guide.webp',
    imageAlt: `DJI Matrice 4 Thermal, Matrice 30T and Mavic 3 Thermal drones for search and rescue`,
    relatedProducts: ['dji-matrice-4t-plus-combo', 'matrice-30t-worry-free-basic-combo', 'dji-mavic-3t-worry-free-basic-combo', 'dji-al1-spotlight'],
    content: [
      `When someone is missing in bush, farmland or water, the search is a race against light, weather and body heat. A thermal drone changes that race: it sees warmth, so a person, a vehicle engine or a large animal stands out against cooler ground in the dark, where a normal camera sees nothing. If you have searched for a search and rescue drone in Australia, you will have found that the choice comes down to three DJI thermal aircraft at very different prices, plus two accessories, a spotlight and a speaker, that turn a thermal drone into a night search tool. This guide sets out what each aircraft costs, how they compare on the figures that matter in a search, and which setup suits which team. You can check the specifications on DJI's official pages for the [Matrice 4 series](https://enterprise.dji.com/matrice-4-series/specs), the [Matrice 30 series](https://enterprise.dji.com/matrice-30/specs) and the [Mavic 3 Enterprise series](https://enterprise.dji.com/mavic-3-enterprise/specs).`,
      { h2: `What a search and rescue drone needs` },
      `A search drone is judged on a short list of things, and not all of them are about the thermal camera.`,
      { ul: [
        `**A thermal camera with enough resolution and sensitivity:** all three aircraft below have a 640 by 512 thermal sensor with a sensitivity of 50 mK or better. Our explainer on [how a thermal imager works](/blog/how-does-a-thermal-imager-work-thermal-drone-camera-resolution-sensitivity-explained) covers what those numbers mean.`,
        `**Flight time:** a longer flight means more search time before a battery swap.`,
        `**Weather tolerance:** searches happen in rain, dust and cold, so an aircraft with a weather rating can keep flying when the weather turns.`,
        `**Night aids:** a spotlight lights the scene for the crew on the ground and a speaker lets you call out to a person you have found.`,
        `**Portability:** the aircraft has to reach the search area and launch in minutes.`
      ] },
      { h2: `Search and rescue drone prices in Australia` },
      `Three aircraft and two accessories make up the range. Prices are in Australian dollars.`,
      { table: {
        head: ['Product', 'What it is', 'Price (AUD)'],
        rows: [
          ['[DJI Mavic 3T Worry-Free Basic Combo](/product/dji-mavic-3t-worry-free-basic-combo)', 'Portable thermal drone with Care Enterprise Basic', '$8,249'],
          ['[DJI Mavic 3T Worry-Free Plus Combo](/product/dji-mavic-3t-worry-free-plus-combo)', 'The same aircraft with Care Enterprise Plus', '$10,679'],
          ['[DJI Matrice 4 Thermal](/product/dji-matrice-4-thermal)', 'The Matrice 4T aircraft', '$10,159'],
          ['[DJI Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo)', 'The Matrice 4T with Care coverage and extra batteries', '$11,248'],
          ['[DJI Matrice 30T Worry-Free Basic Combo](/product/matrice-30t-worry-free-basic-combo)', 'Weather-sealed thermal drone with Care Enterprise Basic', '$14,917'],
          ['[DJI Matrice 30T Worry-Free Plus Combo](/product/matrice-30t-worry-free-plus-combo)', 'The same aircraft with Care Enterprise Plus', '$15,473'],
          ['[DJI AL1 Spotlight](/product/dji-al1-spotlight)', 'Spotlight for compatible enterprise aircraft', '$460'],
          ['[DJI AS1 Speaker](/product/dji-as1-speaker)', 'Loudspeaker that broadcasts messages from the air', '$340']
        ]
      } },
      { h2: `Mavic 3T vs Matrice 4T vs Matrice 30T for search work` },
      `This table uses the figures on DJI's own specification pages. Flight times are DJI's no-wind laboratory figures, so expect less in a real search.`,
      { table: {
        head: ['', 'Mavic 3T', 'Matrice 4T', 'Matrice 30T'],
        rows: [
          ['Thermal sensor', '640 by 512, 12 μm', '640 by 512, 12 μm', '640 by 512, 12 μm'],
          ['Thermal sensitivity (NETD)', '50 mK or better', '50 mK or better', '50 mK or better'],
          ['Thermal field of view (diagonal)', '61°', '45°', '61°'],
          ['Maximum flight time', '45 min', '49 min', '41 min'],
          ['Wind resistance', '12 m/s', '12 m/s', '12 m/s'],
          ['Weather rating', 'None listed on DJI page', 'No standard protection level', 'IP55'],
          ['Operating temperature', '-10 to 40 °C', '-10 to 40 °C', '-20 to 50 °C'],
          ['Weight', '920 g', '1,219 g', 'About 3.77 kg']
        ]
      } },
      `The sensors are close in specification, so the choice comes down to everything around them. The Matrice 30T is the only one of the three with an IP55 rating and the widest temperature range, which makes it the aircraft to pick for a team that flies in the rain or the heat. The Matrice 4T has the longest flight time and a near-infrared auxiliary light for night work, with a laser rangefinder that DJI lists at 1,800 m on a target with 20% reflectivity. The Mavic 3T is the lightest of the three and the cheapest.`,
      { h2: `Night aids: spotlight and speaker` },
      `Two accessories matter once a search moves into the dark. The [AL1 Spotlight](/product/dji-al1-spotlight) at $460 lights the scene below the aircraft: DJI lists it at a maximum of 32 W, with 17 lux at 50 m and 4.3 lux at 100 m measured in a laboratory. It lets the ground crew see what the thermal camera has found. The [AS1 Speaker](/product/dji-as1-speaker) at $340 broadcasts messages from the aircraft, so you can reassure a person, give directions or call out to a team that is out of radio range. We confirm that each accessory fits your aircraft when we quote, and the [DJI Dock 3 Thermal Package](/product/dji-dock-3-thermal-package) shows how DJI bundles the two with a thermal aircraft.`,
      { h2: `What a search setup costs` },
      `Two worked examples from current listed prices show the range.`,
      { table: {
        head: ['Setup', 'What is in it', 'Total (AUD)'],
        rows: [
          ['Night search kit', '[Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) $11,248, [AL1 Spotlight](/product/dji-al1-spotlight) $460 and [AS1 Speaker](/product/dji-as1-speaker) $340', '$12,048'],
          ['Weather-sealed team aircraft', '[Matrice 30T Worry-Free Plus Combo](/product/matrice-30t-worry-free-plus-combo) with Care Enterprise Plus', '$15,473']
        ]
      } },
      `If you want to add spare batteries and a faster charger to the Matrice 4T kit, the [Matrice 4 battery](/product/dji-matrice-4-battery) is $280 and the [Matrice 4 series charging hub](/product/dji-matrice-4-series-charging-hub-200w) is $140.`,
      { h2: `Which thermal drone should you buy?` },
      { ul: [
        `**Lowest price and a pack you can carry:** the [Mavic 3T Worry-Free Basic Combo](/product/dji-mavic-3t-worry-free-basic-combo) at $8,249.`,
        `**Longest flight time and night tools:** the [Matrice 4T Plus Combo](/product/dji-matrice-4t-plus-combo) at $11,248, with the spotlight and speaker added.`,
        `**Rain, dust and extreme temperatures:** the [Matrice 30T Worry-Free Basic Combo](/product/matrice-30t-worry-free-basic-combo) at $14,917 for the IP55 rating.`,
        `**A fixed base with automatic launch:** the Matrice 4TD, the dock-ready thermal aircraft, in the [Worry-Free Flagship Combo](/product/dji-matrice-4td-worry-free-flagship-combo) at $15,470. Our [Dock 3 vs Dock 2 guide](/blog/buy-dji-dock-3-vs-dock-2-australia-price-packages-drone-in-a-box) explains the dock.`
      ] },
      { h2: `What thermal can and cannot do in a search` },
      `Thermal is a strong tool but not a magic one, and knowing the limits keeps expectations realistic.`,
      { ul: [
        `It shows heat, not detail: a person is a warm shape, so a visible camera is still needed to identify what you have found.`,
        `It does not see through walls or glass, and dense canopy can hide a person from above.`,
        `Sun-warmed rock and ground can mask a body in the middle of the day, so the best contrast is usually at night and in the cool of the morning.`,
        `Rain, fog and wind reduce range and image quality, so a weather rating and a good wind margin matter.`
      ] },
      `Our guides to [thermal drones in Australia](/blog/thermal-drones-australia-guide) and to [choosing a thermal drone](/blog/buy-dji-thermal-drone-australia-mavic-3t-vs-matrice-4t-vs-matrice-30t-prices) go deeper on the cameras and the aircraft.`,
      { h2: `Before you buy: rules and training` },
      `Emergency services work under their own arrangements, so a private operator should not assume the same freedoms. Check what applies to your flying on [the CASA website](https://www.casa.gov.au/drones/drone-rules/drone-safety-rules), and read our guide to [whether you need to register a drone in Australia](/blog/do-i-need-to-register-a-drone-in-australia-casa-rules) and the [FAQ](/faq) for the basics. Our [enterprise drone guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) explains how these aircraft fit into a team.`,
      { h2: `Spares and related equipment` },
      `Browse the full [DJI Matrice range](/category/enterprise-drones/dji-matrice), the [Mavic 3 Enterprise aircraft](/category/enterprise-drones/dji-mavic-3-enterprise), the [enterprise accessories](/category/enterprise-drones/enterprise-accessories) and the [thermal cameras](/category/cameras-sensors/thermal-cameras). If you want a thermal payload for a larger aircraft, see the [Zenmuse H30T guide](/blog/buy-dji-zenmuse-h30t-thermal-payload-australia-h30t-vs-h30-prices).`,
      { h2: `Get a free quote on a search and rescue drone` },
      `Tell us how your team searches, the weather you fly in and the budget, and we will recommend an aircraft and the accessories and send a written quote. Quotes are free. Use the [quote form](/quote), the buttons on each product above or the form below, and we will confirm compatibility and availability before you pay.`,
      { h2: `How buying from Drones for Sale works` },
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For an enterprise aircraft we recommend asking for a written quote first, so we confirm the configuration, availability and delivery before you pay: use the [quote form](/quote). You can also place an order through the [order form](/order) or ask a question on the [contact page](/contact). Unopened hardware in its original packaging can be returned within 30 days of receipt, and Australian Consumer Law guarantees apply.`,
      { faq: [
        { q: `What is the best drone for search and rescue in Australia?`, a: `It depends on the team. The Matrice 4T has the longest flight time at 49 minutes and a near-infrared light for night work. The Matrice 30T has an IP55 weather rating. The Mavic 3T is the lightest and cheapest. All three have a 640 by 512 thermal camera.` },
        { q: `How much does a search and rescue drone cost?`, a: `A Mavic 3T combo starts at $8,249, a Matrice 4T Plus Combo is $11,248 and a Matrice 30T combo starts at $14,917. A spotlight is $460 and a speaker is $340. All prices are in Australian dollars.` },
        { q: `Can a thermal drone find a person at night?`, a: `A thermal camera shows body heat against cooler ground, so a person is often visible in the dark where a normal camera sees nothing. Results depend on terrain, canopy, weather and the time of day.` },
        { q: `Do I need a spotlight and speaker on a search drone?`, a: `They are optional. A spotlight helps the ground crew see what the thermal camera has found, and a speaker lets you speak to a person from the air. We confirm that each accessory fits your aircraft when we quote.` },
        { q: `Do I need CASA approval to fly a search drone?`, a: `Commercial and organisational flying carries requirements, and emergency services work under their own arrangements. Check the current requirements on the CASA website for your operation.` }
      ] }
    ],
    targetKeywords: ['search and rescue drone', 'search and rescue drones', 'thermal drone for search and rescue', 'drone with spotlight and speaker', 'dji matrice 4t price', 'thermal drone night search']
  }
];
