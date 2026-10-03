export interface ProductSpecification {
  sensor?: string;
  videoResolution?: string;
  photoResolution?: string;
  flightTime?: string;
  maxSpeed?: string;
  transmissionRange?: string;
  weight?: string;
  casaCategory?: string;
  gimbalStabilization?: string;
  obstacleAvoidance?: string;
}

export type ProductBadge = 'Popular' | 'New' | 'Best Value' | 'Premium' | 'Sale' | null;

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string; // 'camera-drones' | 'cameras-payloads' | 'accessories-optics'
  categoryName: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  badge: ProductBadge;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  description: string;
  specifications: ProductSpecification;
  inTheBox: string[];
  graphicType: 'cinema-drone' | 'foldable-drone' | 'fpv-drone' | 'enterprise-uav' | 'dslr-gimbal' | 'action-cam' | 'controller' | 'battery';
  isFeatured?: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  subcategories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  droneModel: string;
  title: string;
  text: string;
  useCase: 'Commercial Real Estate' | 'Cinema & Television' | 'Landscape & Surf' | 'Surveying & Mining' | 'Recreational Flight';
  verifiedPurchase: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  excerpt: string;
  content: string[];
  targetKeywords: string[];
}

export interface FAQItem {
  id: string;
  category: 'CASA Regulations' | 'Shipping & Delivery' | 'Crypto & Discounts' | 'Warranty & Returns' | 'Hardware & Selection';
  question: string;
  answer: string;
}

export type ActivePage = 'shop' | 'blog' | 'about' | 'contact' | 'faq';
