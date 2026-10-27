import { BlogPost } from '../types';

// Buying guides. Figures come from the manufacturer specifications on each product page; prices are left to the
// product pages so these guides do not go stale. Inline links use [text](/path).
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-10',
    slug: 'thermal-camera-vs-thermal-drone-infrared-inspections',
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
    title: 'DJI Neo 2 Fly More Combo: Which Neo 2 Kit Should You Buy?',
    metaTitle: 'DJI Neo 2 Fly More Combo: Which Kit to Buy?',
    metaDescription: 'DJI Neo 2 Fly More Combo explained: drone only, RC-N3 and Motion kits compared, plus batteries, transceiver and what to buy first in Australia.',
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
      'The DJI Neo 2 is one of the most popular small drones in Australia, and it is sold in several kits. Choosing the wrong one is the most common mistake: some include a controller, some do not, and the extra batteries are what actually let you keep flying. This guide explains each Neo 2 kit, adds a short DJI Neo 2 review of what the drone does well, and tells you which to buy.',
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
    title: 'Agricultural Drones in Australia: Weed Control, Seeding and Crop Monitoring',
    metaTitle: 'Agricultural Drones Australia: Weed Control Guide',
    metaDescription: 'DJI agriculture drones for weed control, aerial seeding and crop monitoring in Australia: Agras T25P, T50 and T100, spreaders and multispectral options.',
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
    title: 'Waterproof Drones: Are Any DJI Drones Water Resistant?',
    metaTitle: 'Waterproof Drones: Are DJI Drones Water Resistant?',
    metaDescription: 'Looking for a waterproof drone? IP ratings explained, which DJI and FLIR products are water resistant, and how to protect your drone around water.',
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
    title: 'DJI Controllers Explained: RC-N3, RC 2, RC Pro, RC Plus and Motion',
    metaTitle: 'DJI Controllers Explained: RC-N3, RC 2 and RC Pro',
    metaDescription: 'Which DJI remote controller do you need? RC-N3, RC 2, RC Pro, RC Plus, motion and FPV controllers compared, with what each is for and where to buy in Australia.',
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
      'If you take drone photography work for pay, rules for commercial operators apply. Under CASA, you can operate in the excluded category for drones under 2 kg after completing the CASA operator accreditation, while heavier aircraft need a licence and operator certificate. You also need to follow the standard operating conditions, such as flying below 120 m, keeping the drone in sight and staying 30 m from people. Pricing is up to you: real estate drone photography pricing varies with the property, the deliverables and your market, so research what local agents pay. Check the CASA website for current rules, and see our [FAQ](/faq).',
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
    title: 'New vs Used DJI Drones in Australia: What to Check Before You Buy',
    metaTitle: 'New vs Used DJI Drones: What to Check Before Buying',
    metaDescription: 'Thinking of buying a second hand drone? New vs used DJI drones compared: warranty, battery health, damage checks and consumer rights when buying in Australia.',
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
      'CASA standard operating conditions say to fly no higher than 120 m, keep the drone in visual line of sight, stay at least 30 m from other people, avoid crowds and fly in daylight. Drones heavier than 250 g also have to keep clear of controlled aerodromes. Rules can change, so check the CASA website before you fly. Our [FAQ](/faq) summarises the main points.',
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
    title: 'DJI Neo 2 vs DJI Flip vs DJI Mini 4 Pro: Which Should You Buy?',
    metaTitle: 'DJI Neo 2 vs Flip vs Mini 4 Pro: Which to Buy?',
    metaDescription: 'DJI Neo 2 vs DJI Flip vs DJI Mini 4 Pro compared on weight, camera, flight time and price range, so you can pick the right small DJI drone in Australia.',
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
      'The DJI Neo 2, the DJI Flip and the DJI Mini 4 Pro are three of the most popular small drones in our range, and they are easy to confuse. All three are light, travel well and shoot 4K video, but they are built for different jobs. This comparison covers the numbers that matter and who each drone suits.',
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
      'Flying commercially may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check the CASA website, and use our [quote form](/quote) to tell us your use case. We will confirm the right combo, payloads, batteries and training. Read our [enterprise drones guide](/blog/enterprise-drones-matrice-mavic-3-enterprise-guide) for the wider range.',
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
    title: 'DJI Avata 360 vs DJI Avata 2: Which FPV Drone Should You Buy?',
    metaTitle: 'DJI Avata 360 vs Avata 2: FPV Drone Guide',
    metaDescription: 'DJI Avata 360 vs DJI Avata 2 compared: 360-degree 8K camera, weight, flight time, goggles and combos, plus how to build a DJI FPV drone kit in Australia.',
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
      'FPV pilots wear goggles, so you cannot see the whole sky. CASA expects you to keep the drone within visual line of sight, which in practice means flying with a spotter beside you who watches the aircraft. Follow the standard operating conditions on the CASA website, and read our [FAQ](/faq) for the main rules.',
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
          ['[DJI Agras T70P](/product/dji-agras-t70p)', '70 L tank, 40 L/min', '100 L tank, 400 kg/min', 'Lifting up to 65 kg, max operation speed 20 m/s'],
          ['[DJI Agras T100](/product/dji-agras-t100)', '100 L tank, 40 L/min', '150 L tank, 400 kg/min', 'Lifting up to 100 kg, LiDAR, penta-vision and radar sensing']
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
    title: `Buy the DJI Mini 5 Pro in Australia: Which Combo to Choose, What It Costs and What to Add`,
    metaTitle: `Buy DJI Mini 5 Pro Australia: Combos and Prices`,
    metaDescription: `Buying the DJI Mini 5 Pro in Australia? Compare the RC-N3, Fly More and Plus combos with AUD prices, spare batteries and free express shipping.`,
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
      `The DJI Mini 5 Pro is the drone most Australians ask for when they want near-professional pictures from an aircraft that is easy to carry and simple to fly. Searches for the DJI Mini Pro 5 and the wider DJI Mini Pro range show how many buyers are comparing it right now, and the decision is not only about the aircraft. There are four ways to buy it, each at a different price, and the right one depends on how long you fly, what screen you want and how much you care about staying under 250 g. This guide explains what each package includes, what it costs in Australian dollars, which pilot it suits and which spares to add so the first shoot does not end early.`,
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
      `The reason the standard Mini 5 Pro is so popular is its weight. At under 250 g it stays in the lightweight class that keeps CASA compliance simple, which is why travellers and first-time owners favour it. That advantage depends on the standard battery. The moment you fit the Plus battery, the aircraft is heavier than 250 g and different rules may apply. Rules also change, so always confirm the current requirements on the CASA website, and read our [FAQ on registering a drone and CASA rules](/faq) before you fly. If you plan to use the drone for paid work, check whether you need accreditation as well.`,
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
      `If you are shopping for a DJI Mavic in Australia, the range is wider than it looks. The folding Mavic aircraft are DJI's choice for people who need professional image quality in a drone they can carry in a bag, and there are now three distinct families: the flagship Mavic 4 Pro, the proven Mavic 3 Pro and the commercial Mavic 3 Enterprise. Buyers often search for a Mavic Pro drone or a DJI Mavic Pro 4, and the current Pro-class aircraft in our range are the Mavic 4 Pro and the Mavic 3 Pro. This guide compares them by camera, flight time and price in Australian dollars, explains the Fly More combos and lists the spares to add, so you can order the right kit first time.`,
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
      `Every order ships free to any Australian address by express courier, with signature on delivery and transit insurance. Prices are in Australian dollars, unopened hardware can be returned within 30 days and Australian Consumer Law guarantees apply. You can pay by cryptocurrency with a 10% discount, or by bank transfer, PayID or Osko. For commercial or fleet purchases, use the [quote form](/quote) and we will confirm the aircraft, combo and payload that suit your work. Read our [FAQ on registering a drone and CASA rules](/faq) before your first flight, and check the CASA website for the current requirements for the aircraft and the work you plan to do.`,
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
      `Flying commercially may require CASA accreditation or a ReOC, depending on the aircraft weight and the work. Check the CASA website, read our [FAQ on registering a drone and CASA rules](/faq) and tell us about your use case on the [quote form](/quote). We will confirm the right aircraft or payload, the batteries and the training you need.`,
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
  }
];
