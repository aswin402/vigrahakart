import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BestSellersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-cream">
      <div className="max-w-[1400px] mx-auto section-padding">
        <SectionHeading
          eyebrow="Popular Picks"
          title="Back in Stock"
          subtitle="Customer-loved handcrafted pieces, now available again."
        />

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
