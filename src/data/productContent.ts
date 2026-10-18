// Long-form product content (overview, highlights, specs, what is in the box). It is large, so it lives in its own
// chunk and is fetched when a product is opened. The prerender primes the cache so static pages carry it all.
export interface ProductContent {
  description?: string;
  highlights?: string[];
  specRows?: [string, string][];
  inTheBox?: string[];
}

const cache = new Map<string, ProductContent>();

export const peekContent = (slug: string): ProductContent | undefined => cache.get(slug);
export const primeContent = (slug: string, content: ProductContent): void => {
  cache.set(slug, content);
};

export async function loadContent(slug: string): Promise<ProductContent | undefined> {
  const hit = cache.get(slug);
  if (hit) return hit;
  // Production: one small JSON file per product, written at build time (and preloaded on product pages).
  try {
    const res = await fetch(`/content/${slug}.json`);
    if (res.ok) {
      const content = (await res.json()) as ProductContent;
      cache.set(slug, content);
      return content;
    }
  } catch {
    // fall through to the bundled data
  }
  // Development fallback: load all content from its chunk.
  const mod = await import('./productContentData');
  const content = mod.contentFor(slug);
  if (content) cache.set(slug, content);
  return content;
}
