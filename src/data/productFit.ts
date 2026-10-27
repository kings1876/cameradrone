// Fit and pairing notes for pages Google crawled but did not index (thin, near-identical accessory pages).
// Every statement comes from the product data (compatible aircraft, bundle contents, price tier) or from how the
// catalogue is organised; no new specifications. `works` are product slugs, `guides` are blog slugs.
export interface ProductFit {
  text: string;
  works: string[];
  guides?: string[];
}

export const PRODUCT_FIT: Record<string, ProductFit> = {
  'mavic-2-pro-parrot-sequoia-integration-kit': {
    text:
      'This integration kit is made for the DJI Mavic 2 Pro only, so it will not fit other Mavic models. It mounts a Parrot Sequoia multispectral sensor on a portable, foldable aircraft, which makes it a low-cost way to start collecting plant-health data. If you fly a different aircraft, compare the Phantom 4 kit for the Parrot Sequoia, or the DJI Mavic 3 Multispectral, which is a complete multispectral drone. Tell us your aircraft and sensor and we will confirm the right kit before you order.',
    works: ['phantom-4-integration-kit-parrot-sequoia', 'dji-mavic-3-multispectral', 'micasense-rededge-p'],
    guides: ['agricultural-drones-weed-control-seeding-crop-monitoring']
  },
  'phantom-4-integration-kit-rededge-mx': {
    text:
      'This kit mounts a MicaSense RedEdge-MX on a DJI Phantom 4 and is listed for the Phantom 4 only. The RedEdge-MX sensor is a separate purchase, so budget for both. If you would rather buy a complete multispectral aircraft than convert one you own, compare the DJI Phantom 4 Multispectral and the DJI Mavic 3 Multispectral. Send us your aircraft and sensor and we will confirm the match first.',
    works: ['dji-phantom-4-multispectral', 'dji-mavic-3-multispectral', 'micasense-rededge-p', 'phantom-4-integration-kit-parrot-sequoia'],
    guides: ['agricultural-drones-weed-control-seeding-crop-monitoring']
  },
  'dji-fpv-goggles-antenna-dual-band': {
    text:
      'This antenna is listed for the DJI FPV goggles, the original DJI FPV system. If you own newer goggles, such as Goggles 3, ask us to confirm compatibility before you order. A better antenna is one of the cheapest ways to keep the video link stable, and the same DJI FPV system has its own goggles battery, propellers and Remote Controller 3 listed alongside it.',
    works: ['dji-fpv-goggles-battery', 'dji-fpv-propellers', 'dji-fpv-remote-controller-3', 'dji-goggles-3']
  },
  'dji-neo-2-intelligent-flight-battery': {
    text:
      'This is the spare battery for the DJI Neo 2. The original DJI Neo has its own battery listing, so choose by aircraft name rather than by price. A spare battery doubles a short session, and it pairs with the Neo 2 Two-Way Charging Hub so several batteries charge together. If you are still choosing an aircraft, start with the Neo 2 Fly More Combo.',
    works: ['dji-neo-2-two-way-charging-hub', 'dji-neo-2-propellers', 'dji-neo-2-fly-more-combo-dji-rc-n3', 'dji-neo-2-drone-only'],
    guides: ['dji-neo-2-fly-more-combo-guide']
  },
  'dji-neo-2-propellers': {
    text:
      'These propellers are listed for the DJI Neo 2 only; the original DJI Neo has its own propeller set, so check the aircraft name before ordering. At this price a spare set costs less than a lost afternoon, and it belongs in the same kit as a spare battery and a charging hub.',
    works: ['dji-neo-2-intelligent-flight-battery', 'dji-neo-2-two-way-charging-hub', 'dji-neo-2-drone-only', 'dji-neo-propellers'],
    guides: ['dji-drone-battery-charger-propeller-guide']
  },
  'dji-mavic-3e-worry-free-basic-combo': {
    text:
      'This bundle pairs the Mavic 3 Enterprise mapping aircraft with DJI Care Enterprise Basic, so protection is included at purchase instead of added later. The Mavic 3E is the mapping model, with a mechanical shutter, while the Mavic 3 Thermal adds a thermal camera for inspection work. The Worry-Free Plus Combo and the Mavic 3T combos are listed separately, so compare them before you decide. Use the quote form for council, survey or fleet pricing.',
    works: ['dji-mavic-3e-worry-free-plus-combo', 'dji-mavic-3-enterprise', 'dji-mavic-3t-worry-free-basic-combo', 'dji-mavic-3-enterprise-battery-kit'],
    guides: ['enterprise-drones-matrice-mavic-3-enterprise-guide', 'lidar-vs-photogrammetry-drone-mapping-australia']
  },
  'dji-neo-fly-more-combo': {
    text:
      'This is the original DJI Neo, about 135 g, with a DJI RC-N3 controller and three batteries. The newer DJI Neo 2 is a separate model with its own accessories, so pick the aircraft first and the spares second. The Neo suits buyers who want a low-cost first drone; compare it with the Neo 2 and the Flip if you want more features.',
    works: ['dji-neo-motion-fly-more-combo', 'dji-neo-intelligent-flight-battery', 'dji-neo-propellers', 'dji-neo-two-way-charging-hub', 'dji-neo-2-fly-more-combo-dji-rc-n3'],
    guides: ['dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro', 'best-drones-for-beginners-australia']
  },
  'dji-agras-t30-battery': {
    text:
      'This battery is listed for the DJI Agras T30 only. The Agras T50 and T40 use a different pack, the DB1560, so match the battery to your aircraft before ordering. Spraying seasons have short windows, so most operators keep a spare set on charge. Add the T30 charger and, if you spread as well as spray, the T30 spreading system.',
    works: ['dji-agras-t30-battery-charger', 'dji-agras-t30-spreading-system-3-0', 'dji-agras-db1560-intelligent-flight-battery'],
    guides: ['agricultural-spraying-drones-australia-guide']
  },
  'dji-dock-3-vehicle-mounted-gimbal-mount': {
    text:
      'This mount is made for the DJI Dock 3 and is for teams that deploy the dock on a vehicle. The dock itself is a separate item, and the DJI Dock 3 is designed around the Matrice 4D series aircraft. Because every deployment is different, send us your vehicle, aircraft and use case through the quote form and we will confirm the configuration.',
    works: ['dji-dock-3', 'dji-dock-3-thermal-package', 'dji-dock-3-survey-package'],
    guides: ['thermal-drones-australia-guide', 'enterprise-drones-matrice-mavic-3-enterprise-guide']
  },
  'dji-lito-x1-fly-more-combo-dji-rc-2': {
    text:
      'This combo is the Lito X1 Fly More kit with the DJI RC 2, which has a built-in screen, so you do not need to mount a phone. The same Lito X1 is also listed with the DJI RC-N3 controller and as a Plus combo, so compare them by controller and by the number of batteries. Spare Lito X1 batteries and a charging hub are listed on their own pages.',
    works: ['dji-lito-x1-fly-more-combo-dji-rc-n3', 'dji-lito-x1-fly-more-combo-plus-dji-rc-2', 'dji-lito-x1-intelligent-flight-battery', 'dji-lito-x1-charging-hub', 'dji-lito-x1'],
    guides: ['best-drones-for-beginners-australia']
  },
  'dji-mini-5-pro-two-way-charging-hub': {
    text:
      'This hub is listed for the DJI Mini 5 Pro only. A charging hub earns its place once you own two or more batteries, because it charges them from a single input. Pair it with the standard Mini 5 Pro battery or the higher-capacity Battery Plus, and add a spare propeller set. Buying the aircraft too? The Fly More combos bundle the extra batteries.',
    works: ['dji-mini-5-pro-intelligent-flight-battery', 'dji-mini-5-pro-intelligent-flight-battery-plus', 'dji-mini-5-pro-propeller', 'dji-mini-5-pro-fly-more-combo-dji-rc-n3'],
    guides: ['dji-drone-battery-charger-propeller-guide']
  },
  'dji-mini-4-pro-mini-3-series-intelligent-flight-battery-plus': {
    text:
      'This higher-capacity Plus battery is listed for the DJI Mini 4 Pro and the Mini 3 series. It extends flight time, but with it fitted the aircraft weighs more than 250 g, which matters for CASA rules, so read the weight guidance before you buy. If you want to stay under 250 g, the standard battery is the better choice, and the Mini 4 Pro has its own listing.',
    works: ['dji-mini-4-pro-intelligent-flight-battery', 'dji-mini-4-pro-360-propeller-guard'],
    guides: ['dji-drone-battery-charger-propeller-guide']
  },
  'dji-mavic-3-series-intelligent-flight-battery': {
    text:
      'This 5,000 mAh, 77 Wh battery is listed for the DJI Mavic 3 series. Pair it with the Mavic 3 series 100 W charging hub so several batteries charge together, and with the low-noise propellers. Enterprise buyers can also see the Mavic 3 Enterprise battery kit.',
    works: ['dji-mavic-3-series-100w-battery-charging-hub', 'dji-mavic-3-series-low-noise-propellers', 'dji-mavic-3-enterprise-battery-kit', 'dji-mavic-3-pro'],
    guides: ['dji-drone-battery-charger-propeller-guide']
  },
  'dji-air-3': {
    text:
      'The DJI Air 3 is the dual-camera model: a wide camera and a 3x medium tele, both 48 MP. Its newer sibling, the Air 3S, is listed separately with its own batteries and accessories, so choose the aircraft first. Air 3 spares are listed as the Air 3 series: the battery, the charging hub, low-noise propellers and propeller guard. The Fly More combos add extra batteries and accessories.',
    works: ['dji-air-3-fly-more-combo-rc-2', 'dji-air-3-battery', 'dji-air-3-series-battery-charging-hub', 'dji-air-3-series-low-noise-propellers', 'dji-air-3s-fly-more-combo-dji-rc-2'],
    guides: ['best-drone-for-sale-australia-2026-buyers-guide', 'best-drones-for-real-estate-and-aerial-photography']
  },
  'dji-o4-ground-station': {
    text:
      'This ground station extends and relays the video link for compatible DJI enterprise aircraft on long-range missions. Because compatibility depends on the aircraft, tell us which one you fly before ordering. It sits alongside the enterprise controllers and docks, which suit different mission styles, and we quote fleet pricing through the quote form.',
    works: ['dji-matrice-4-enterprise', 'dji-matrice-4-thermal', 'dji-dock-3', 'dji-rc-plus-2-enterprise-enhanced'],
    guides: ['enterprise-drones-matrice-mavic-3-enterprise-guide']
  },
  'dji-rc-pro-remote-controller': {
    text:
      'The DJI RC Pro is a high-bright screen controller for compatible DJI aircraft, built for use in strong sun. It is the professional tier: the RC 2 and the RC-N3 are lower-cost controllers, and the newer RC Pro 2 is listed separately. Our controllers guide explains the differences. It is also sold bundled with the Mavic 3 Pro Fly More Combo.',
    works: ['dji-rc-pro-2', 'dji-rc-2-remote-controller', 'dji-rc-n3-remote-controller', 'dji-mavic-3-pro-fly-more-combo-dji-rc-pro'],
    guides: ['dji-controllers-explained-rc-n3-rc-2-rc-pro']
  },
  'dji-zenmuse-p1': {
    text:
      'The Zenmuse P1 is listed for the Matrice 350 RTK and Matrice 300 RTK only, so it is not a payload for smaller aircraft. It is a photogrammetry camera: choose a 24, 35 or 50 mm lens for the ground sample distance you need. For LiDAR mapping, compare the Zenmuse L2, and for inspection work compare the Zenmuse H30T. Our mapping guide explains when photogrammetry beats LiDAR.',
    works: ['dji-zenmuse-l2-lidar', 'dji-zenmuse-h30t', 'dji-zenmuse-h30'],
    guides: ['lidar-vs-photogrammetry-drone-mapping-australia']
  }
};
