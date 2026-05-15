import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { features } from '@/data/features';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-[1400px] mx-auto section-padding">
        <SectionHeading
          eyebrow="Why VigrahKart"
          title="Made for Beauty, Built for Trust"
          subtitle="Every statue is a promise of quality, care, and tradition."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
