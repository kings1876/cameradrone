import { Product, CategoryInfo } from '../types';
import { PRODUCT_IMAGES } from './productImages';
import { PRODUCT_DETAILS } from './productDetails';
import { PRODUCT_EXTRAS } from './productExtras';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'camera-drones',
    name: 'DJI Camera Drones',
    subcategories: ['DJI Mini & Air', 'DJI Neo & FPV', 'DJI Mavic 3', 'DJI Inspire 3']
  },
  {
    id: 'enterprise-drones',
    name: 'Enterprise & Thermal Drones',
    subcategories: ['DJI Matrice', 'DJI Mavic 3 Enterprise', 'DJI Phantom 4', 'Autel & FLIR Drones']
  },
  {
    id: 'cameras-sensors',
    name: 'Cameras & Sensors',
    subcategories: ['DJI Zenmuse Cameras', 'Thermal Cameras', 'Multispectral Cameras', 'Integration Kits']
  },
  {
    id: 'spraying-drones',
    name: 'Agricultural Spraying Drones',
    subcategories: ['Spraying Drones', 'Spraying Drone Accessories']
  },
  {
    id: 'batteries',
    name: 'Batteries & Accessories',
    subcategories: ['Drone Batteries', 'Charging Hubs', 'Propellers & Guards', 'Controllers & Goggles', 'Filters & Lenses']
  }
];

type Seed = {
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  graphicType: Product['graphicType'];
  shortDescription: string;
  inStock?: boolean;
  featured?: boolean;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const categoryName = (id: string) => CATEGORIES.find(c => c.id === id)!.name;

const seeds: Seed[] = [
  // DJI Mini & Air
  { name: 'DJI Mini 5 Pro (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1119, graphicType: 'foldable-drone', featured: true,
    shortDescription: 'DJI Mini 5 Pro with a 1-inch 50 MP camera in a sub-250 g drone, supplied with the DJI RC-N3 controller.' },
  { name: 'DJI Mini 5 Pro Fly More Combo (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1419, graphicType: 'foldable-drone',
    shortDescription: 'DJI Mini 5 Pro Fly More Combo with extra batteries and the DJI RC-N3 controller.' },
  { name: 'DJI Mini 5 Pro Fly More Combo (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1699, graphicType: 'foldable-drone',
    shortDescription: 'DJI Mini 5 Pro Fly More Combo with extra batteries and the DJI RC 2 screen controller.' },
  { name: 'DJI Mini 4 Pro', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1119, graphicType: 'foldable-drone', featured: true,
    shortDescription: 'Compact sub-250g DJI camera drone for travel, content and everyday flying.' },
  { name: 'DJI Mini 4 Pro RC 2', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1419, graphicType: 'foldable-drone',
    shortDescription: 'DJI Mini 4 Pro supplied with the DJI RC 2 screen controller.' },
  { name: 'DJI Mini 4 Pro Fly More Combo', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1699, graphicType: 'foldable-drone',
    shortDescription: 'Mini 4 Pro with extra batteries and accessories for longer flying sessions.' },
  { name: 'DJI Mini 4 Pro Fly More Combo Plus', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1799, graphicType: 'foldable-drone',
    shortDescription: 'Fly More Combo Plus package for the DJI Mini 4 Pro.' },
  { name: 'DJI Air 3', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1699, graphicType: 'foldable-drone', featured: true,
    shortDescription: 'DJI Air 3 mid-size foldable camera drone for photo and video creators.' },
  { name: 'DJI Air 3 Fly More Combo', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 2049, graphicType: 'foldable-drone',
    shortDescription: 'DJI Air 3 with additional batteries and accessories in the Fly More Combo.' },
  { name: 'DJI Air 3 Fly More Combo RC 2', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 2349, graphicType: 'foldable-drone',
    shortDescription: 'DJI Air 3 Fly More Combo supplied with the DJI RC 2 screen controller.' },

  // DJI Neo & FPV
  { name: 'DJI Neo 2 (Drone Only)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 409, graphicType: 'foldable-drone',
    shortDescription: 'DJI Neo 2 palm-sized 4K camera drone, drone only, for easy follow-me and selfie shots.' },
  { name: 'DJI Neo 2 Fly More Combo (Drone Only)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 549, graphicType: 'foldable-drone',
    shortDescription: 'DJI Neo 2 Fly More Combo with extra batteries for longer shoots, drone only (no controller).' },
  { name: 'DJI Neo 2 Fly More Combo (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 709, graphicType: 'foldable-drone',
    shortDescription: 'DJI Neo 2 Fly More Combo with the DJI RC-N3 controller, digital transceiver and extra batteries.' },
  { name: 'DJI Avata 2 Fly More Combo (Single Battery)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 1269, graphicType: 'fpv-drone',
    shortDescription: 'DJI Avata 2 immersive FPV drone with Goggles 3 and RC Motion 3, single-battery Fly More Combo.' },
  { name: 'DJI Avata 2 Fly More Combo (Three Batteries)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 1559, graphicType: 'fpv-drone', inStock: false,
    shortDescription: 'DJI Avata 2 immersive FPV drone with Goggles 3 and RC Motion 3, three-battery Fly More Combo.' },

  { name: 'DJI Avata 360 (Drone Only)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 799, graphicType: 'fpv-drone', inStock: false,
    shortDescription: 'DJI Avata 360 immersive FPV drone with a 360-degree camera system, drone only (no controller).' },
  { name: 'DJI Avata 360 (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 1159, graphicType: 'fpv-drone',
    shortDescription: 'DJI Avata 360 with a 360-degree camera system, supplied with the DJI RC 2 screen controller.' },
  { name: 'DJI Avata 360 Fly More Combo (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 1619, graphicType: 'fpv-drone', featured: false,
    shortDescription: 'DJI Avata 360 Fly More Combo with the DJI RC 2 and extra batteries for longer 360-degree FPV shoots.' },

  // DJI Mavic 3
  { name: 'DJI Mavic 3 Pro', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mavic 3', price: 3099, graphicType: 'cinema-drone', featured: true,
    shortDescription: 'Flagship DJI Mavic 3 Pro multi-camera drone for professional imaging.' },
  { name: 'DJI Mavic 3 Pro Fly More Combo DJI RC', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mavic 3', price: 4199, graphicType: 'cinema-drone',
    shortDescription: 'Mavic 3 Pro Fly More Combo with the standard DJI RC controller.' },
  { name: 'DJI Mavic 3 Pro Fly More Combo DJI RC Pro', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mavic 3', price: 5329, graphicType: 'cinema-drone',
    shortDescription: 'Mavic 3 Pro Fly More Combo with the DJI RC Pro high-bright controller.' },

  // DJI Inspire 3
  { name: 'DJI Inspire 3', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Inspire 3', price: 20469, graphicType: 'cinema-drone', featured: true,
    shortDescription: 'DJI Inspire 3 professional cinema drone for film and broadcast production.' },

  // DJI Matrice
  { name: 'DJI Matrice 30', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Matrice', price: 12880, graphicType: 'enterprise-uav', featured: true,
    shortDescription: 'DJI Matrice 30 compact, weather-resistant enterprise drone for inspection and public safety.' },
  { name: 'DJI Matrice 30T', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Matrice', price: 13270, graphicType: 'enterprise-uav',
    shortDescription: 'DJI Matrice 30T enterprise drone with integrated thermal imaging.' },
  { name: 'DJI Matrice 4 Enterprise', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Matrice', price: 7395, graphicType: 'enterprise-uav', featured: true,
    shortDescription: 'DJI Matrice 4 Enterprise drone for mapping, inspection and emergency response.' },
  { name: 'DJI Matrice 4 Thermal', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Matrice', price: 10159, graphicType: 'enterprise-uav', inStock: false,
    shortDescription: 'DJI Matrice 4 Thermal enterprise drone with thermal imaging payload.' },

  // DJI Mavic 3 Enterprise
  { name: 'DJI Mavic 3 Enterprise', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Mavic 3 Enterprise', price: 6049, graphicType: 'enterprise-uav',
    shortDescription: 'Compact DJI Mavic 3 Enterprise drone for mapping, surveying and inspection.' },
  { name: 'DJI Mavic 3 Thermal', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Mavic 3 Enterprise', price: 8249, graphicType: 'enterprise-uav',
    shortDescription: 'DJI Mavic 3 Thermal enterprise drone combining wide, tele and thermal cameras.' },
  { name: 'DJI Mavic 3 Multispectral', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Mavic 3 Enterprise', price: 7919, graphicType: 'enterprise-uav', inStock: false,
    shortDescription: 'DJI Mavic 3 Multispectral drone for precision agriculture and crop monitoring.' },

  // DJI Phantom 4
  { name: 'DJI Phantom 4 Pro RTK SE', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Phantom 4', price: 5700, graphicType: 'enterprise-uav',
    shortDescription: 'DJI Phantom 4 Pro RTK SE survey and mapping drone.' },
  { name: 'DJI Phantom 4 Multispectral', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Phantom 4', price: 9299, graphicType: 'enterprise-uav',
    shortDescription: 'DJI Phantom 4 Multispectral drone for crop health and agronomy data.' },
  { name: 'DJI Phantom 4 Multispectral DRTK2', brand: 'DJI', category: 'enterprise-drones', subcategory: 'DJI Phantom 4', price: 14299, graphicType: 'enterprise-uav',
    shortDescription: 'DJI Phantom 4 Multispectral package including the D-RTK 2 mobile station.' },

  // Cameras & Sensors
  { name: 'DJI Zenmuse H30', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 8506, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse H30 multi-sensor payload for enterprise drones.' },
  { name: 'DJI Zenmuse H30T', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 17335, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse H30T multi-sensor payload with thermal imaging.' },
  { name: 'DJI Zenmuse L2 Lidar', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 21890, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse L2 LiDAR payload for aerial surveying and mapping.' },
  { name: 'DJI Zenmuse P1', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 11400, graphicType: 'dslr-gimbal', inStock: false,
    shortDescription: 'DJI Zenmuse P1 full-frame photogrammetry camera payload.' },
  { name: 'DJI Zenmuse X7', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 2589, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse X7 interchangeable-lens aerial camera.' },
  { name: 'DJI Zenmuse X5S', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 1809, graphicType: 'dslr-gimbal', inStock: false,
    shortDescription: 'DJI Zenmuse X5S aerial camera for Inspire 2.' },
  { name: 'DJI Zenmuse X4S', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 939, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse X4S aerial camera for Inspire 2.' },
  { name: 'DJI Zenmuse Z3 Optical Zoom', brand: 'DJI', category: 'cameras-sensors', subcategory: 'DJI Zenmuse Cameras', price: 1399, graphicType: 'dslr-gimbal',
    shortDescription: 'DJI Zenmuse Z3 optical zoom camera.' },
  { name: 'FLIR VUE TZ20', brand: 'FLIR', category: 'cameras-sensors', subcategory: 'Thermal Cameras', price: 11700, graphicType: 'dslr-gimbal',
    shortDescription: 'FLIR VUE TZ20 dual thermal camera payload.' },
  { name: 'DJI Mavic Pro FLIR Boson Thermal Ninja', brand: 'FLIR', category: 'cameras-sensors', subcategory: 'Thermal Cameras', price: 6999, graphicType: 'dslr-gimbal',
    shortDescription: 'FLIR Boson thermal camera conversion for the DJI Mavic Pro.' },
  { name: 'ADTI Agrowing Multispectral Matrice 300', brand: 'Agrowing', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 20850, graphicType: 'action-cam',
    shortDescription: 'Agrowing multispectral camera system for the DJI Matrice 300.' },
  { name: 'Sony A6000 Multispectral Dual Agrowing Camera', brand: 'Agrowing', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 4900, graphicType: 'action-cam',
    shortDescription: 'Dual-sensor Agrowing multispectral camera based on the Sony A6000.' },
  { name: 'Sony A7R Multispectral Quad Agrowing Camera', brand: 'Agrowing', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 16000, graphicType: 'action-cam',
    shortDescription: 'Quad-sensor Agrowing multispectral camera based on the Sony A7R.' },
  { name: 'Sony A7R Multispectral Sextuple Agrowing Camera', brand: 'Agrowing', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 21000, graphicType: 'action-cam',
    shortDescription: 'Six-sensor Agrowing multispectral camera based on the Sony A7R.' },
  { name: 'Micasense Altum PT', brand: 'MicaSense', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 28999, graphicType: 'action-cam',
    shortDescription: 'MicaSense Altum-PT multispectral and thermal sensor.' },
  { name: 'Micasense RedEdge P', brand: 'MicaSense', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 13999, graphicType: 'action-cam', inStock: false,
    shortDescription: 'MicaSense RedEdge-P multispectral sensor.' },
  { name: 'Slantrange 3PX Multispectral Sensor', brand: 'SlantRange', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 8199, graphicType: 'action-cam',
    shortDescription: 'SlantRange 3PX multispectral sensor for crop analytics.' },
  { name: 'Slantrange 4P Multispectral Sensor', brand: 'SlantRange', category: 'cameras-sensors', subcategory: 'Multispectral Cameras', price: 7900, graphicType: 'action-cam', inStock: false,
    shortDescription: 'SlantRange 4P multispectral sensor for crop analytics. Pricing from $7,900 depending on option.' },
  { name: 'Phantom 4 Integration Kit Rededge MX', brand: 'MicaSense', category: 'cameras-sensors', subcategory: 'Integration Kits', price: 930, graphicType: 'controller',
    shortDescription: 'Integration kit for mounting a RedEdge-MX on the DJI Phantom 4.' },
  { name: 'Phantom 4 Integration Kit Parrot Sequoia', brand: 'Parrot', category: 'cameras-sensors', subcategory: 'Integration Kits', price: 649, graphicType: 'controller',
    shortDescription: 'Integration kit for mounting a Parrot Sequoia on the DJI Phantom 4.' },
  { name: 'Mavic 2 Pro Parrot Sequoia Integration Kit', brand: 'Parrot', category: 'cameras-sensors', subcategory: 'Integration Kits', price: 649, graphicType: 'controller', inStock: false,
    shortDescription: 'Integration kit for mounting a Parrot Sequoia on the DJI Mavic 2 Pro.' },

  // Autel & FLIR drones
  { name: 'Autel Evo Max 4T Drone', brand: 'Autel', category: 'enterprise-drones', subcategory: 'Autel & FLIR Drones', price: 14999, graphicType: 'enterprise-uav',
    shortDescription: 'Autel EVO Max 4T enterprise drone with thermal imaging.' },
  { name: 'FLIR ION M440 Tactical Drone', brand: 'FLIR', category: 'enterprise-drones', subcategory: 'Autel & FLIR Drones', price: 27500, graphicType: 'enterprise-uav', inStock: false,
    shortDescription: 'FLIR ION M440 tactical drone.' },

  // Spraying drones
  { name: 'XAG P30 Spraying Drone', brand: 'XAG', category: 'spraying-drones', subcategory: 'Spraying Drones', price: 24000, graphicType: 'enterprise-uav', featured: true,
    shortDescription: 'XAG P30 agricultural spraying drone for crop protection.' },
  { name: 'BROUAV D30L-8 Spraying Drone', brand: 'BROUAV', category: 'spraying-drones', subcategory: 'Spraying Drones', price: 32000, graphicType: 'enterprise-uav',
    shortDescription: 'BROUAV D30L-8 agricultural spraying drone.' },
  { name: 'BROUAV D52L-8 Spraying Drone', brand: 'BROUAV', category: 'spraying-drones', subcategory: 'Spraying Drones', price: 44800, graphicType: 'enterprise-uav',
    shortDescription: 'BROUAV D52L-8 large-capacity agricultural spraying drone.' },
  { name: 'BROUAV D72L-8 Spraying Drone', brand: 'BROUAV', category: 'spraying-drones', subcategory: 'Spraying Drones', price: 54800, graphicType: 'enterprise-uav', inStock: false,
    shortDescription: 'BROUAV D72L-8 heavy-capacity agricultural spraying drone.' },
  { name: 'DJI Agras T30 Spreading System 3.0', brand: 'DJI', category: 'spraying-drones', subcategory: 'Spraying Drone Accessories', price: 1800, graphicType: 'controller',
    shortDescription: 'Spreading System 3.0 accessory for the DJI Agras T30.' },
  { name: 'DJI Agras T30 Battery', brand: 'DJI', category: 'spraying-drones', subcategory: 'Spraying Drone Accessories', price: 3600, graphicType: 'battery',
    shortDescription: 'Replacement intelligent flight battery for the DJI Agras T30.' },
  { name: 'DJI Agras T30 Battery Charger', brand: 'DJI', category: 'spraying-drones', subcategory: 'Spraying Drone Accessories', price: 3200, graphicType: 'battery',
    shortDescription: 'Battery charger for the DJI Agras T30.' },
  { name: 'DJI Agras T40 Battery', brand: 'DJI', category: 'spraying-drones', subcategory: 'Spraying Drone Accessories', price: 3699, graphicType: 'battery',
    shortDescription: 'Replacement intelligent flight battery for the DJI Agras T40.' },

  // Batteries
  { name: 'DJI Air 3 Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 219, graphicType: 'battery',
    shortDescription: 'Intelligent flight battery for the DJI Air 3.' },
  { name: 'DJI Matrice 4 Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 280, graphicType: 'battery',
    shortDescription: 'Intelligent flight battery for the DJI Matrice 4 series.' },
  { name: 'DJI Mavic 3 Enterprise Battery Kit', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 990, graphicType: 'battery', inStock: false,
    shortDescription: 'Battery kit for the DJI Mavic 3 Enterprise series.' },

  // Added from DJI range (Oct 2026)
  { name: 'DJI Air 3S (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 1699, graphicType: 'foldable-drone',
    shortDescription: 'DJI Air 3S dual-camera drone with a 1-inch wide camera and the DJI RC-N3 controller.' },
  { name: 'DJI Air 3S Fly More Combo (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 2129, graphicType: 'foldable-drone',
    shortDescription: 'DJI Air 3S Fly More Combo with extra batteries, charging hub, bag and the DJI RC-N3.' },
  { name: 'DJI Air 3S Fly More Combo (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 2429, graphicType: 'foldable-drone',
    shortDescription: 'DJI Air 3S Fly More Combo with the DJI RC 2 screen controller.' },
  { name: 'DJI Flip (DJI RC-N3)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 559, graphicType: 'foldable-drone',
    shortDescription: 'DJI Flip foldable vlog drone with built-in propeller guards and the DJI RC-N3 controller.' },
  { name: 'DJI Flip (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 759, graphicType: 'foldable-drone',
    shortDescription: 'DJI Flip with the DJI RC 2 screen controller.' },
  { name: 'DJI Flip Fly More Combo (DJI RC 2)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 919, graphicType: 'foldable-drone',
    shortDescription: 'DJI Flip Fly More Combo with DJI RC 2, extra batteries, hub and shoulder bag.' },
  { name: 'DJI Neo (Drone Only)', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Neo & FPV', price: 249, graphicType: 'foldable-drone',
    shortDescription: 'DJI Neo palm-sized 4K follow-me drone, drone only.' },
  { name: 'DJI Mini 4K Fly More Combo', brand: 'DJI', category: 'camera-drones', subcategory: 'DJI Mini & Air', price: 619, graphicType: 'foldable-drone',
    shortDescription: 'DJI Mini 4K Fly More Combo, an entry-level sub-250 g 4K camera drone.' },
  { name: 'DJI Mini 4 Pro Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 99, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Mini 4 Pro' },
  { name: 'DJI Mini 4 Pro/Mini 3 Series Intelligent Flight Battery Plus', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 149, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Mini 4 Pro and Mini 3 series' },
  { name: 'DJI Mini 3 Series Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 99, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Mini 3 series' },
  { name: 'DJI Avata 2 Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 119, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Avata 2' },
  { name: 'DJI Flip Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 99, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Flip' },
  { name: 'DJI Neo Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 59, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Neo' },
  { name: 'DJI Air 3S Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 219, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Air 3S' },
  { name: 'DJI Mavic 3 Series Intelligent Flight Battery', brand: 'DJI', category: 'batteries', subcategory: 'Drone Batteries', price: 219, graphicType: 'battery',
    shortDescription: 'the intelligent flight battery for the DJI Mavic 3 series' },
  { name: 'DJI Mini 4 Pro/Mini 3 Series Two-Way Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 69, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Mini 4 Pro and Mini 3 series' },
  { name: 'DJI Air 3 Series Battery Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 129, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Air 3 and Air 3S' },
  { name: 'DJI Avata 2 Two-Way Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 79, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Avata 2' },
  { name: 'DJI Flip Parallel Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 69, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Flip' },
  { name: 'DJI Neo Two-Way Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 49, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Neo' },
  { name: 'DJI Mavic 3 Series 100W Battery Charging Hub', brand: 'DJI', category: 'batteries', subcategory: 'Charging Hubs', price: 140, graphicType: 'battery',
    shortDescription: 'a battery charging hub for the DJI Mavic 3 series' },
  { name: 'DJI Air 3 Series Low-Noise Propellers', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 39, graphicType: 'controller',
    shortDescription: 'a propeller set for the DJI Air 3 and Air 3S' },
  { name: 'DJI Air 3 Series Propeller Guard', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 38, graphicType: 'controller',
    shortDescription: 'a propeller guard for the DJI Air 3 and Air 3S' },
  { name: 'DJI Mini 3/Lito Series Propellers', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 19, graphicType: 'controller',
    shortDescription: 'a propeller set for the DJI Mini 3 series and Lito series' },
  { name: 'DJI Mini 4 Pro 360° Propeller Guard', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 49, graphicType: 'controller',
    shortDescription: 'a propeller guard for the DJI Mini 4 Pro' },
  { name: 'DJI Avata 2 Propellers', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 19, graphicType: 'controller',
    shortDescription: 'a propeller set for the DJI Avata 2' },
  { name: 'DJI Flip Propellers', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 19, graphicType: 'controller',
    shortDescription: 'a propeller set for the DJI Flip' },
  { name: 'DJI Neo Propellers', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 8, graphicType: 'controller',
    shortDescription: 'a propeller set for the DJI Neo' },
  { name: 'DJI Inspire 3 Propeller Guard', brand: 'DJI', category: 'batteries', subcategory: 'Propellers & Guards', price: 459, graphicType: 'controller',
    shortDescription: 'a propeller guard for the DJI Inspire 3' },
  { name: 'DJI RC 2 Remote Controller', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 549, graphicType: 'controller',
    shortDescription: 'the screen controller with a 5.5-inch 1080p display for compatible DJI drones' },
  { name: 'DJI RC-N3 Remote Controller', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 165, graphicType: 'controller',
    shortDescription: 'a compact controller that uses your smartphone as the screen' },
  { name: 'DJI RC Motion 3', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 139, graphicType: 'controller',
    shortDescription: 'a motion controller that steers compatible DJI drones with hand and wrist movements' },
  { name: 'DJI RC Remote Controller', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 399, graphicType: 'controller',
    shortDescription: 'the original DJI RC screen controller for compatible aircraft' },
  { name: 'DJI RC Pro Remote Controller', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 1529, graphicType: 'controller',
    shortDescription: 'a high-bright professional screen controller for compatible DJI aircraft' },
  { name: 'DJI FPV Remote Controller 3', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 229, graphicType: 'controller',
    shortDescription: 'a joystick-style FPV controller for DJI FPV flying' },
  { name: 'DJI Goggles N3', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 359, graphicType: 'controller',
    shortDescription: 'an entry-level FPV goggles headset for compatible DJI drones' },
  { name: 'DJI O4 Air Unit', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 189, graphicType: 'controller',
    shortDescription: 'a compact digital video transmission unit for custom FPV builds' },
  { name: 'DJI O4 Air Unit Pro', brand: 'DJI', category: 'batteries', subcategory: 'Controllers & Goggles', price: 349, graphicType: 'controller',
    shortDescription: 'a premium digital video transmission and camera unit for custom FPV builds' },
  { name: 'DJI Air 3S ND Filter Set (ND8/32/128)', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 159, graphicType: 'controller',
    shortDescription: 'a three-filter ND set for the Air 3S' },
  { name: 'DJI Mavic 3 Pro ND Filter Set (ND8/16/32/64)', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 229, graphicType: 'controller',
    shortDescription: 'a four-filter ND set for the Mavic 3 Pro' },
  { name: 'DJI Air 3S Wide-Angle Lens', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 99, graphicType: 'controller',
    shortDescription: 'a clip-on wide-angle lens for the Air 3S' },
  { name: 'DJI Mini 4 Pro Wide-Angle Lens', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 49, graphicType: 'controller',
    shortDescription: 'a clip-on wide-angle lens for the Mini 4 Pro' },
  { name: 'DJI Mavic 3 Pro Wide-Angle Lens', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 229, graphicType: 'controller',
    shortDescription: 'a clip-on wide-angle lens for the Mavic 3 Pro' },
  { name: 'DJI Mavic 3 Pro Storage Cover', brand: 'DJI', category: 'batteries', subcategory: 'Filters & Lenses', price: 49, graphicType: 'controller',
    shortDescription: 'a protective storage cover for the Mavic 3 Pro gimbal camera' }
];

export const PRODUCTS: Product[] = seeds.map((s, i) => {
  const slug = slugify(s.name);
  const detail = PRODUCT_DETAILS[slug];
  return {
  id: slug,
  slug,
  name: s.name,
  brand: s.brand,
  category: s.category,
  categoryName: categoryName(s.category),
  subcategory: s.subcategory,
  price: s.price,
  badge: null,
  inStock: s.inStock ?? true,
  shortDescription: s.shortDescription,
  description: detail
    ? [detail.overview, detail.bestFor, PRODUCT_EXTRAS[slug]].filter(Boolean).join('\n\n')
    : `${s.shortDescription} Australian stock with free shipping Australia-wide. Contact us for availability, bundle options and advice on the right setup for your operation.`,
  specifications: {},
  highlights: detail?.highlights,
  specRows: detail?.specs,
  inTheBox: detail?.inTheBox,
  graphicType: s.graphicType,
  images: PRODUCT_IMAGES[slugify(s.name)],
  isFeatured: s.featured ?? false
  };
});
