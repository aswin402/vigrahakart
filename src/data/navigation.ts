import type { NavLink, FooterColumn, GalleryItem, Stat } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Collections',
    links: [
      { label: 'Ganesha Statues', href: '/collections/ganesha-statues' },
      { label: 'Buddha Statues', href: '/collections/buddha-statues' },
      { label: 'Marble Statues', href: '/collections/marble-statues' },
      { label: 'Bronze Statues', href: '/collections/bronze-statues' },
      { label: 'Garden Sculptures', href: '/collections/garden-sculptures' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping Policy', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    image: '/images/gallery/living-room.webp',
    caption: 'Living Room Elegance',
    tag: 'Interior',
  },
  {
    id: 'gallery-2',
    image: '/images/gallery/meditation-corner.webp',
    caption: 'Meditation Corner',
    tag: 'Spiritual',
  },
  {
    id: 'gallery-3',
    image: '/images/gallery/garden-sculpture.webp',
    caption: 'Garden Serenity',
    tag: 'Outdoor',
  },
  {
    id: 'gallery-4',
    image: '/images/gallery/temple-setup.webp',
    caption: 'Temple Setup',
    tag: 'Sacred',
  },
  {
    id: 'gallery-5',
    image: '/images/gallery/shelf-decor.webp',
    caption: 'Shelf Decor',
    tag: 'Home',
  },
];

export const craftsmanshipStats: Stat[] = [
  { value: '500+', label: 'Handcrafted Pieces' },
  { value: '25+', label: 'Artisan Partners' },
  { value: '100%', label: 'Secure Packaging' },
];
