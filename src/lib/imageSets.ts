// Responsive srcset for the blog and hero images: <name>-<width>.avif/.webp variants next to the full-size file.
export const respSet = (img: string, ext: 'avif' | 'webp', widths: number[], fullWidth: number): string =>
  [...widths.map(w => `${img.replace(/\.webp$/, `-${w}.${ext}`)} ${w}w`), `${img.replace(/\.webp$/, `.${ext}`)} ${fullWidth}w`].join(', ');

export const BLOG_WIDTHS = [480, 800];
export const BLOG_FULL = 1600;
export const BLOG_SIZES_CARD = '(min-width: 768px) 33vw, 100vw';
export const BLOG_SIZES_POST = '(min-width: 768px) 768px, 100vw';
export const HERO_WIDTHS = [768, 1280];
export const HERO_FULL = 1920;
