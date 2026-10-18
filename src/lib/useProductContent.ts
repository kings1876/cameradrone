import { useEffect, useState } from 'react';
import { loadContent, peekContent, ProductContent } from '../data/productContent';

/** Long-form content for a product, loaded on demand. Undefined until it arrives (callers fall back to the short text). */
export function useProductContent(slug?: string): ProductContent | undefined {
  const [content, setContent] = useState<ProductContent | undefined>(slug ? peekContent(slug) : undefined);
  useEffect(() => {
    if (!slug) {
      setContent(undefined);
      return;
    }
    const hit = peekContent(slug);
    if (hit) {
      setContent(hit);
      return;
    }
    setContent(undefined);
    let live = true;
    loadContent(slug).then(c => {
      if (live) setContent(c);
    });
    return () => {
      live = false;
    };
  }, [slug]);
  return content;
}
