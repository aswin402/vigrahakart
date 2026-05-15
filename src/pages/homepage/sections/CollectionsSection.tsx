import { SectionHeading } from '@/components/ui/SectionHeading';
import { CollectionCard } from '@/components/ui/CollectionCard';
import { collections } from '@/data/collections';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CollectionsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-warm-beige/40">
      <div className="max-w-[1400px] mx-auto section-padding">
        <SectionHeading
          eyebrow="Curated Categories"
          title="Explore Our Collections"
          subtitle="Choose statues by meaning, material, and space."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
