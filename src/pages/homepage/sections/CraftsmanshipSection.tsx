import { ArrowRight } from 'lucide-react';
import { craftsmanshipStats } from '@/data/navigation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CraftsmanshipSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing bg-warm-beige/50">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-temple-red mb-4">
              Our Craft
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-deep-brown leading-tight mb-5">
              Crafted by Skilled Artisans
            </h2>
            <p className="text-base md:text-lg text-muted-brown leading-relaxed mb-8 max-w-lg">
              Our statues are made with patience, detail, and respect for
              traditional craft. Each piece is finished with natural textures,
              warm tones, and careful packaging so it reaches your space safely.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              {craftsmanshipStats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-heading font-semibold text-temple-red mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-body text-muted-brown uppercase tracking-[0.1em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold uppercase tracking-[0.1em] text-temple-red hover:text-deep-red transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-sand">
              <img
                src="/images/craftsmanship.webp"
                alt="Artisan carefully crafting a statue in a traditional workshop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-temple-red/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
