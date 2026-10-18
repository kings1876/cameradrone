import React from 'react';
import { Product } from '../types';
import { DroneGraphic } from './DroneGraphic';

interface ProductImageProps {
  product: Product;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export const IMAGE_SIZES = '(min-width: 1280px) 360px, (min-width: 640px) 50vw, 92vw';

/** WebP srcset for a /products/*.jpg file (480w and 800w variants are generated next to every JPG). */
export function webpSrcSet(src: string): string | null {
  const m = src.match(/^(\/products\/.+)\.jpg$/);
  if (!m) return null;
  return `${m[1]}-480.webp 480w, ${m[1]}-800.webp 800w`;
}

/** Shows the product photo when one exists, otherwise falls back to the drawn illustration. */
export const ProductImage: React.FC<ProductImageProps> = ({ product, src, size = 'md', className = '', eager = false, sizes = IMAGE_SIZES }) => {
  const image = src ?? product.images?.[0];
  if (!image) {
    return <DroneGraphic type={product.graphicType} size={size} className={className} />;
  }
  const set = webpSrcSet(image);
  const img = (
    <img
      src={image}
      alt={product.name}
      width={800}
      height={800}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      className={`w-full h-full object-contain ${className}`}
    />
  );
  if (!set) return img;
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={set} sizes={sizes} />
      {img}
    </picture>
  );
};
