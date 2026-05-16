import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutHero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-72px)] bg-cream"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-72px)]">
        {/* Left — Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 py-12 sm:px-10 md:px-14 lg:px-16 xl:px-20 bg-warm-beige/40">
          <div
            className={`max-w-lg transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Eyebrow */}
            <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-temple-red mb-5">
              Our Story
            </span>

            {/* Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.25rem] xl:text-[3.5rem] font-semibold text-deep-brown leading-[1.1] mb-6">
              Handcrafted Statues Rooted in Tradition, Beauty &amp; Meaning
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-brown leading-relaxed mb-8 max-w-md">
              SacredStone was created to bring timeless handcrafted statues into
              homes, temples, gardens, and peaceful interiors. Every piece is
              chosen for its material, detail, meaning, and ability to transform
              a space.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-temple-red text-cream text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:bg-deep-red active:scale-[0.97]"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/custom-orders"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-brown text-brown text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:bg-brown hover:text-cream active:scale-[0.97]"
              >
                Custom Orders
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Image */}
        <div className="order-1 lg:order-2 relative h-[50vh] sm:h-[55vh] lg:h-auto overflow-hidden bg-warm-beige">
          <img
            src="/images/about/hero-artisan.png"
            alt="Skilled artisan carefully carving a Ganesha statue in a traditional workshop"
            className="w-full h-full object-cover object-center"
          />

          {/* Floating Stat Card */}
          <div
            className={`absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-cream/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-[0_8px_32px_oklch(0.28_0.06_45/0.12)] max-w-[210px] transition-all duration-700 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-2xl font-heading font-semibold text-temple-red mb-0.5">
              500+
            </p>
            <p className="text-xs font-body text-muted-brown">
              handcrafted pieces delivered
            </p>
          </div>

          {/* Artisan Badge */}
          <div
            className={`absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-temple-red flex items-center justify-center transition-all duration-700 delay-700 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-75'
            }`}
          >
            <span className="text-cream text-[9px] sm:text-[10px] font-body font-bold uppercase tracking-[0.08em] text-center leading-tight">
              Artisan
              <br />
              Made
            </span>
          </div>

          {/* Small overlapping card */}
          <div
            className={`hidden md:block absolute top-6 left-6 sm:top-10 sm:left-10 bg-ivory/95 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-lg w-28 h-36 transition-all duration-700 delay-600 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4'
            }`}
          >
            <img
              src="/images/about/workshop-display.png"
              alt="Workshop with statues on display"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
