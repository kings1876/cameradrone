import { PRODUCT_DETAILS } from './productDetails';
import { PRODUCT_EXTRAS } from './productExtras';
import { ProductContent } from './productContent';

/** Full content for one product, or undefined when the product only has its short description. */
export function contentFor(slug: string): ProductContent | undefined {
  const detail = PRODUCT_DETAILS[slug];
  if (!detail) return undefined;
  return {
    description: [detail.overview, detail.bestFor, PRODUCT_EXTRAS[slug]].filter(Boolean).join('\n\n'),
    highlights: detail.highlights,
    specRows: detail.specs,
    inTheBox: detail.inTheBox
  };
}
