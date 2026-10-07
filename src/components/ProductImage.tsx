import React from 'react';
import { Product } from '../types';
import { DroneGraphic } from './DroneGraphic';

interface ProductImageProps {
  product: Product;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  eager?: boolean;
}

/** Shows the product photo when one exists, otherwise falls back to the drawn illustration. */
export const ProductImage: React.FC<ProductImageProps> = ({ product, src, size = 'md', className = '', eager = false }) => {
  const image = src ?? product.images?.[0];
  if (!image) {
    return <DroneGraphic type={product.graphicType} size={size} className={className} />;
  }
  return (
    <img
      src={image}
      alt={product.name}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`w-full h-full object-contain ${className}`}
    />
  );
};
