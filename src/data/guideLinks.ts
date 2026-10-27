// Which buying guides each page links to, so category and home pages pass authority to the guides that rank
// and shoppers on a category find the matching advice. Slugs must exist in blogPosts.ts (checked in guidesFor).
import { BLOG_POSTS } from './content';

const HOME = [
  'best-drone-for-sale-australia-2026-buyers-guide',
  'thermal-drones-australia-guide',
  'agricultural-drones-weed-control-seeding-crop-monitoring',
  'best-drones-for-beginners-australia',
  'lidar-vs-photogrammetry-drone-mapping-australia',
  'agricultural-spraying-drones-australia-guide'
];

const BY_CATEGORY: Record<string, string[]> = {
  'camera-drones': [
    'best-drones-for-beginners-australia',
    'dji-neo-2-vs-dji-flip-vs-dji-mini-4-pro',
    'dji-avata-360-vs-avata-2-fpv-drone-guide',
    'best-drones-for-real-estate-and-aerial-photography',
    'best-drone-for-sale-australia-2026-buyers-guide'
  ],
  'enterprise-drones': [
    'thermal-drones-australia-guide',
    'enterprise-drones-matrice-mavic-3-enterprise-guide',
    'thermal-camera-vs-thermal-drone-infrared-inspections',
    'lidar-vs-photogrammetry-drone-mapping-australia',
    'waterproof-drones-ip-ratings-explained'
  ],
  'cameras-sensors': [
    'thermal-drones-australia-guide',
    'thermal-camera-vs-thermal-drone-infrared-inspections',
    'lidar-vs-photogrammetry-drone-mapping-australia',
    'enterprise-drones-matrice-mavic-3-enterprise-guide'
  ],
  'spraying-drones': [
    'agricultural-drones-weed-control-seeding-crop-monitoring',
    'agricultural-spraying-drones-australia-guide'
  ],
  batteries: [
    'dji-drone-battery-charger-propeller-guide',
    'dji-controllers-explained-rc-n3-rc-2-rc-pro',
    'dji-neo-2-fly-more-combo-guide',
    'buying-a-new-vs-used-dji-drone-australia'
  ]
};

const BY_SUBCATEGORY: Record<string, string[]> = {
  'Thermal Cameras': ['thermal-drones-australia-guide', 'thermal-camera-vs-thermal-drone-infrared-inspections'],
  'LiDAR Sensors': ['lidar-vs-photogrammetry-drone-mapping-australia', 'thermal-drones-australia-guide'],
  'DJI Dock': ['thermal-drones-australia-guide', 'enterprise-drones-matrice-mavic-3-enterprise-guide'],
  'Multispectral Cameras': ['agricultural-drones-weed-control-seeding-crop-monitoring', 'agricultural-spraying-drones-australia-guide']
};

export interface GuideLink {
  slug: string;
  title: string;
}

/** Guides for a page: subcategory picks first, then the category's, de-duplicated; the home list when neither is known. */
export function guidesFor(categoryId?: string, sub?: string): GuideLink[] {
  const slugs = [...(sub ? BY_SUBCATEGORY[sub] ?? [] : []), ...(categoryId ? BY_CATEGORY[categoryId] ?? [] : [])];
  const unique = [...new Set(slugs.length ? slugs : HOME)];
  return unique.flatMap(slug => {
    const post = BLOG_POSTS.find(p => p.slug === slug);
    return post ? [{ slug, title: post.title }] : [];
  });
}
