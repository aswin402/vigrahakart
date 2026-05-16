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
    image: '/images/gallery-statues/elephant-living-room.png',
    title: 'Living Room Elegance',
    caption: 'Sandstone elephant pair on console table',
    category: 'Living Room',
    tag: 'Interior',
  },
  {
    id: 'gallery-2',
    image: '/images/gallery-statues/buddha-meditation.png',
    title: 'Meditation Corner',
    caption: 'Marble Buddha in a calm meditation room',
    category: 'Meditation Space',
    tag: 'Spiritual',
  },
  {
    id: 'gallery-3',
    image: '/images/gallery-statues/garden-buddha.png',
    title: 'Garden Serenity',
    caption: 'Stone Buddha sculpture near garden pathway',
    category: 'Garden',
    tag: 'Outdoor',
  },
  {
    id: 'gallery-4',
    image: '/images/gallery-statues/brass-deepam.png',
    title: 'Temple Setup',
    caption: 'Brass deepam holders with temple setup',
    category: 'Temple Decor',
    tag: 'Sacred',
  },
  {
    id: 'gallery-5',
    image: '/images/gallery-statues/nataraja-shelf.png',
    title: 'Shelf Decor',
    caption: 'Wooden Nataraja statue on shelf',
    category: 'Shelf Decor',
    tag: 'Home',
  },
];

export const craftsmanshipStats: Stat[] = [
  { value: '500+', label: 'Handcrafted Pieces' },
  { value: '25+', label: 'Artisan Partners' },
  { value: '100%', label: 'Secure Packaging' },
];
