/* ──────────────────────────────────────────────
   VigrahKart — Type Definitions
   ────────────────────────────────────────────── */

export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'Best Seller' | 'Handmade' | 'New';
  inStock: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  product: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  tag?: string;
}

export interface Stat {
  value: string;
  label: string;
}
