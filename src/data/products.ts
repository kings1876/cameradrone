import { Product, CategoryInfo } from '../types';
import { PRODUCT_IMAGES } from './productImages';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'camera-drones',
    name: 'DJI Camera Drones',
    subcategories: ['DJI Mini & Air', 'DJI Mavic 3', 'DJI Inspire 3']
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
    subcategories: ['Drone Batteries']
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
  { name: 'Mavic Pro Integration Kit Parrot Sequoia', brand: 'Parrot', category: 'cameras-sensors', subcategory: 'Integration Kits', price: 649, graphicType: 'controller', inStock: false,
    shortDescription: 'Integration kit for mounting a Parrot Sequoia on the DJI Mavic Pro.' },

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
    shortDescription: 'Battery kit for the DJI Mavic 3 Enterprise series.' }
];

export const PRODUCTS: Product[] = seeds.map((s, i) => ({
  id: slugify(s.name),
  slug: slugify(s.name),
  name: s.name,
  brand: s.brand,
  category: s.category,
  categoryName: categoryName(s.category),
  subcategory: s.subcategory,
  price: s.price,
  badge: null,
  inStock: s.inStock ?? true,
  shortDescription: s.shortDescription,
  description: `${s.shortDescription} Australian stock with free shipping Australia-wide. Contact us for availability, bundle options and advice on the right setup for your operation.`,
  specifications: {},
  graphicType: s.graphicType,
  images: PRODUCT_IMAGES[slugify(s.name)],
  isFeatured: s.featured ?? false
}));
