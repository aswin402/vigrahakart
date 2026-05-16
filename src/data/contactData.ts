/* ──────────────────────────────────────────────
   VigrahKart — Contact Page Data
   ────────────────────────────────────────────── */

/* ── Types ── */

export interface ContactOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  info: string;
  cta: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SupportCategory {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CustomProcessStep {
  number: string;
  title: string;
}

export interface ContactTrustItem {
  icon: string;
  label: string;
}

export interface StoreDetail {
  icon: string;
  label: string;
  value: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface InquiryOption {
  label: string;
  value: string;
}

export interface GuidanceItem {
  label: string;
}

/* ── Contact Options ── */

export const contactOptions: ContactOption[] = [
  {
    id: 'call',
    icon: '📞',
    title: 'Call Us',
    description:
      'Speak with our team for product guidance and order support.',
    info: '+91 98765 43210',
    cta: 'Call Now',
    href: 'tel:+919876543210',
  },
  {
    id: 'whatsapp',
    icon: '💬',
    title: 'WhatsApp',
    description:
      'Send product references, custom statue requests, or quick questions.',
    info: 'Chat with VigrahKart',
    cta: 'Open WhatsApp',
    href: 'https://wa.me/919876543210',
  },
  {
    id: 'email',
    icon: '✉️',
    title: 'Email',
    description:
      'For detailed inquiries, bulk orders, collaborations, or support.',
    info: 'support@vigrahkart.com',
    cta: 'Send Email',
    href: 'mailto:support@vigrahkart.com',
  },
  {
    id: 'visit',
    icon: '🏛️',
    title: 'Visit / Showroom',
    description:
      'Explore selected pieces and discuss custom requirements in person.',
    info: 'Chennai, Tamil Nadu',
    cta: 'Get Directions',
    href: 'https://maps.google.com/?q=Chennai+Tamil+Nadu',
  },
];

/* ── FAQ Items ── */

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to get a reply?',
    answer:
      'We usually reply within 24 hours on working days.',
  },
  {
    id: 'faq-2',
    question: 'Can I send a reference image for a custom statue?',
    answer:
      'Yes. You can upload it through the contact form or send it directly on WhatsApp.',
  },
  {
    id: 'faq-3',
    question: 'Do you help me choose the right statue size?',
    answer:
      'Yes. Share your space details and we\'ll suggest suitable sizes and materials.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide bulk or temple orders?',
    answer:
      'Yes. Contact us with your requirement, quantity, material, and timeline.',
  },
  {
    id: 'faq-5',
    question: 'What should I do if my statue arrives damaged?',
    answer:
      'Contact us with order details and photos. Our support team will guide you through the next steps.',
  },
  {
    id: 'faq-6',
    question: 'Do you ship across India?',
    answer:
      'Yes. We provide secure packaging and delivery support across India.',
  },
];

/* ── Support Categories ── */

export const supportCategories: SupportCategory[] = [
  {
    id: 'sc-1',
    icon: '🔍',
    title: 'Product Selection',
    description: 'Help choosing the right statue, material, size, or style for your space.',
  },
  {
    id: 'sc-2',
    icon: '✏️',
    title: 'Custom Statue Orders',
    description: 'Share your reference, size, material, and budget for a custom piece.',
  },
  {
    id: 'sc-3',
    icon: '🚚',
    title: 'Shipping & Delivery',
    description: 'Track your order, delivery timeline, or packaging queries.',
  },
  {
    id: 'sc-4',
    icon: '🏛️',
    title: 'Bulk / Temple Orders',
    description: 'Multiple statues for temples, events, offices, or wholesale needs.',
  },
  {
    id: 'sc-5',
    icon: '📦',
    title: 'Damage / Return Support',
    description: 'Report damage, request returns, or get replacement guidance.',
  },
  {
    id: 'sc-6',
    icon: '🤝',
    title: 'Collaboration',
    description: 'Partner with us for artisan features, reselling, or brand projects.',
  },
];

/* ── Custom Order Process Steps ── */

export const customProcessSteps: CustomProcessStep[] = [
  { number: '01', title: 'Share Reference' },
  { number: '02', title: 'Choose Material' },
  { number: '03', title: 'Confirm Size & Budget' },
  { number: '04', title: 'Craft & Deliver' },
];

/* ── Trust Strip Items ── */

export const contactTrustItems: ContactTrustItem[] = [
  { icon: '📦', label: 'Secure Packaging' },
  { icon: '✋', label: 'Handcrafted Quality' },
  { icon: '🚚', label: 'Pan-India Delivery' },
  { icon: '🎨', label: 'Custom Orders Available' },
];

/* ── Store Details ── */

export const storeDetails: StoreDetail[] = [
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Mon – Sat: 10:00 AM – 7:00 PM\nSunday: Closed',
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'VigrahKart Studio\nChennai, Tamil Nadu, India',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'support@vigrahkart.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 98765 43210',
  },
  {
    icon: '⏳',
    label: 'Support Time',
    value: 'Replies within 24 hours on working days',
  },
];

/* ── Social Links ── */

export const socialLinks: SocialLink[] = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '👤', label: 'Facebook', href: '#' },
  { icon: '📌', label: 'Pinterest', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
];

/* ── Inquiry Type Options ── */

export const inquiryOptions: InquiryOption[] = [
  { label: 'Product Question', value: 'product-question' },
  { label: 'Custom Statue Order', value: 'custom-order' },
  { label: 'Shipping & Delivery', value: 'shipping' },
  { label: 'Bulk Order', value: 'bulk-order' },
  { label: 'Return / Damage Support', value: 'return-damage' },
  { label: 'Collaboration', value: 'collaboration' },
  { label: 'Other', value: 'other' },
];

/* ── Preferred Material Options ── */

export const materialOptions: InquiryOption[] = [
  { label: 'Not Sure', value: 'not-sure' },
  { label: 'Marble', value: 'marble' },
  { label: 'Bronze', value: 'bronze' },
  { label: 'Brass', value: 'brass' },
  { label: 'Wood', value: 'wood' },
  { label: 'Stone', value: 'stone' },
  { label: 'Sandstone', value: 'sandstone' },
  { label: 'Resin', value: 'resin' },
];

/* ── Budget Range Options ── */

export const budgetOptions: InquiryOption[] = [
  { label: 'Not Sure', value: 'not-sure' },
  { label: 'Under ₹1,000', value: 'under-1000' },
  { label: '₹1,000 – ₹2,999', value: '1000-2999' },
  { label: '₹3,000 – ₹6,999', value: '3000-6999' },
  { label: '₹7,000 – ₹14,999', value: '7000-14999' },
  { label: 'Above ₹15,000', value: 'above-15000' },
];

/* ── Help Panel Guidance Items ── */

export const guidanceItems: GuidanceItem[] = [
  { label: 'Material suggestions' },
  { label: 'Size guidance' },
  { label: 'Placement advice' },
  { label: 'Delivery support' },
];
