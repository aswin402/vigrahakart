import {
  HeroSection,
  AnnouncementStrip,
  BestSellersSection,
  CollectionsSection,
  CraftsmanshipSection,
  PremiumBanner,
  WhyChooseUsSection,
  GallerySection,
  CustomOrderSection,
  ReviewsSection,
  NewsletterSection,
} from './homepage/sections';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementStrip />
      <BestSellersSection />
      <CollectionsSection />
      <CraftsmanshipSection />
      <PremiumBanner />
      <WhyChooseUsSection />
      <GallerySection />
      <CustomOrderSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}
