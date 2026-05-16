import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BrandStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing bg-cream">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Decorative accent */}
          <div className="w-12 h-[2px] bg-temple-red mx-auto mb-8" />

          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-deep-brown leading-tight mb-8">
            From Sacred Craft to Modern Spaces
          </h2>

          <p className="text-base md:text-lg text-muted-brown leading-relaxed mb-6">
            SacredStone began with a simple belief: a statue is more than decor.
            It carries presence, memory, devotion, and character. We work with
            skilled artisans and trusted makers to bring handcrafted pieces that
            feel personal, meaningful, and lasting.
          </p>

          <p className="text-base md:text-lg text-muted-brown leading-relaxed mb-10">
            Our collections include spiritual statues, meditation pieces, garden
            sculptures, home decor objects, and custom-made statues designed for
            individual spaces.
          </p>

          {/* Quote block */}
          <blockquote className="relative bg-ivory border border-border rounded-lg px-8 py-6 sm:px-12 sm:py-8">
            <span className="absolute -top-4 left-8 sm:left-12 text-5xl font-heading text-temple-red/30 leading-none select-none">
              &ldquo;
            </span>
            <p className="font-heading text-xl sm:text-2xl text-deep-brown italic leading-relaxed">
              Every statue should feel like it belongs to the space it enters.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
