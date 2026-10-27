import { PRODUCT_DETAILS } from './productDetails';
import { PRODUCT_EXTRAS } from './productExtras';
import { ProductContent } from './productContent';
import { PRODUCT_FIT } from './productFit';

/** Full content for one product, or undefined when the product only has its short description. */
export function contentFor(slug: string): ProductContent | undefined {
  const detail = PRODUCT_DETAILS[slug];
  if (!detail) return undefined;
  const fit = PRODUCT_FIT[slug];
  return {
    description: [detail.overview, detail.bestFor, PRODUCT_EXTRAS[slug], fit?.text].filter(Boolean).join('\n\n'),
    worksWith: fit?.works,
    readNext: fit?.guides,
    highlights: detail.highlights,
    specRows: detail.specs,
    inTheBox: detail.inTheBox
  };
}
