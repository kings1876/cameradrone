import { Product, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'camera-drones',
    name: 'DJI Camera Drones',
    subcategories: ['DJI Mini & Air', 'DJI Mavic 3', 'DJI Inspire 3']
  },
  {
    id: 'enterprise-drones',
    name: 'Enterprise & Thermal Drones',
    subcategories: ['DJI Matrice', 'DJI Mavic 3 Enterprise', 'DJI Phantom 4']
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
  isFeatured: s.featured ?? false
}));
