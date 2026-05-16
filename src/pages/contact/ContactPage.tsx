import {
  ContactHero,
  ContactOptions,
  ContactForm,
  StoreInfo,
  MapSection,
  CustomOrderCTA,
  FAQSection,
  SupportCategories,
  SocialSection,
  ContactTrustStrip,
} from './sections';

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <StoreInfo />
      <MapSection />
      <CustomOrderCTA />
      <FAQSection />
      <SupportCategories />
      <SocialSection />
      <ContactTrustStrip />
    </>
  );
}
