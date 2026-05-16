/* ──────────────────────────────────────────────
   VigrahKart — About Page Data
   ────────────────────────────────────────────── */

export interface MissionCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface WorkshopImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  size: 'tall' | 'wide' | 'normal';
}

export interface CustomStep {
  number: string;
  title: string;
}

export interface QualityPoint {
  title: string;
}

export interface AboutTestimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  rating: number;
  product: string;
}

export interface TrustStripItem {
  icon: string;
  label: string;
}

/* ── Mission / Vision Cards ── */
export const missionCards: MissionCard[] = [
  {
    icon: '🎯',
    title: 'Our Mission',
    description:
      'To make handcrafted statues accessible to people who value beauty, tradition, and meaningful spaces.',
  },
  {
    icon: '🌿',
    title: 'Our Vision',
    description:
      'To become a trusted destination for sacred, artistic, and custom-made statues crafted with care.',
  },
  {
    icon: '🤝',
    title: 'Our Promise',
    description:
      'To deliver quality pieces with honest materials, safe packaging, and thoughtful customer support.',
  },
];

/* ── Process Steps ── */
export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Material Selection' },
  { number: '02', title: 'Hand Carving / Casting' },
  { number: '03', title: 'Detailing & Finishing' },
  { number: '04', title: 'Quality Check' },
  { number: '05', title: 'Secure Packaging' },
];

/* ── Materials ── */
export const materials: MaterialItem[] = [
  {
    id: 'marble',
    name: 'Marble',
    description:
      'Smooth, timeless, and elegant for pooja rooms and premium interiors.',
    image: '/images/about/marble-texture.png',
  },
  {
    id: 'bronze',
    name: 'Bronze',
    description:
      'Warm, traditional, and long-lasting with antique character.',
    image: '/images/about/bronze-texture.png',
  },
  {
    id: 'brass',
    name: 'Brass',
    description:
      'Perfect for temple decor, deepam holders, and sacred pieces.',
    image: '/images/about/brass-texture.png',
  },
  {
    id: 'wood',
    name: 'Wood',
    description:
      'Natural, warm, and artistic for shelves and living spaces.',
    image: '/images/about/wood-texture.png',
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    description:
      'Earthy and strong for garden sculptures and rustic interiors.',
    image: '/images/about/sandstone-texture.png',
  },
  {
    id: 'stone',
    name: 'Stone',
    description: 'Grounded, durable, and rich in natural texture.',
    image: '/images/about/stone-texture.png',
  },
];

/* ── Stats ── */
export const aboutStats: AboutStat[] = [
  { value: '500+', label: 'Handcrafted Pieces' },
  { value: '25+', label: 'Artisan Partners' },
  { value: '100%', label: 'Secure Packaging' },
  { value: '12+', label: 'Material & Finish Options' },
];

/* ── Values ── */
export const values: ValueItem[] = [
  {
    icon: '✦',
    title: 'Authentic Craft',
    description:
      'We value the hand, the detail, and the tradition behind every statue.',
  },
  {
    icon: '◈',
    title: 'Meaningful Design',
    description:
      'Every piece should bring beauty, peace, or presence into a space.',
  },
  {
    icon: '◆',
    title: 'Trusted Quality',
    description:
      'We focus on materials, finishing, packaging, and long-term satisfaction.',
  },
  {
    icon: '♡',
    title: 'Customer Care',
    description:
      'We guide customers through product selection, custom orders, and delivery.',
  },
];

/* ── Workshop Gallery ── */
export const workshopImages: WorkshopImage[] = [
  {
    id: 'ws-1',
    src: '/images/about/hero-artisan.png',
    alt: 'Artisan carefully carving a Ganesha statue',
    caption: 'Stone Carving',
    size: 'tall',
  },
  {
    id: 'ws-2',
    src: '/images/about/artisan-polishing.png',
    alt: 'Artisan polishing a bronze statue',
    caption: 'Bronze Finishing',
    size: 'normal',
  },
  {
    id: 'ws-3',
    src: '/images/about/workshop-display.png',
    alt: 'Workshop display with multiple statues',
    caption: 'Workshop Display',
    size: 'wide',
  },
  {
    id: 'ws-4',
    src: '/images/about/marble-texture.png',
    alt: 'Marble texture close-up detail',
    caption: 'Marble Detail',
    size: 'normal',
  },
  {
    id: 'ws-5',
    src: '/images/about/packaging-care.png',
    alt: 'Careful multi-layer packaging of a statue',
    caption: 'Secure Packaging',
    size: 'normal',
  },
  {
    id: 'ws-6',
    src: '/images/about/bronze-texture.png',
    alt: 'Bronze patina surface detail',
    caption: 'Bronze Patina',
    size: 'tall',
  },
];

/* ── Custom Order Steps ── */
export const customSteps: CustomStep[] = [
  { number: '01', title: 'Share Reference' },
  { number: '02', title: 'Choose Material & Size' },
  { number: '03', title: 'Confirm Design' },
  { number: '04', title: 'Craft & Deliver' },
];

/* ── Quality Points ── */
export const qualityPoints: QualityPoint[] = [
  { title: 'Multi-layer protective packaging' },
  { title: 'Fragile handling support' },
  { title: 'Quality inspection before dispatch' },
  { title: 'Delivery assistance for large pieces' },
];

/* ── Testimonials ── */
export const aboutTestimonials: AboutTestimonial[] = [
  {
    id: 'test-1',
    quote:
      'The statue arrived safely and looked even better than the pictures.',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    product: 'Marble Ganesha Statue',
  },
  {
    id: 'test-2',
    quote: 'Beautiful finish and perfect for our pooja room.',
    name: 'Rajesh Iyer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    product: 'Bronze Krishna Statue',
  },
  {
    id: 'test-3',
    quote:
      'The custom order process was smooth and the detailing was excellent.',
    name: 'Ananya Desai',
    location: 'Bangalore, Karnataka',
    rating: 5,
    product: 'Custom Sandstone Buddha',
  },
];

/* ── Trust Strip ── */
export const trustStripItems: TrustStripItem[] = [
  { icon: '📦', label: 'Secure Packaging' },
  { icon: '✋', label: 'Handcrafted Quality' },
  { icon: '🚚', label: 'Pan-India Delivery' },
  { icon: '🎨', label: 'Custom Orders Available' },
];
