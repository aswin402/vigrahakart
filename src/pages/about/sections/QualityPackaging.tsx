import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { qualityPoints } from '@/data/aboutData';
import { CheckCircle } from 'lucide-react';

export function QualityPackaging() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing bg-warm-beige/40">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-temple-red mb-4">
              Quality Assurance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-deep-brown leading-tight mb-5">
              Handled with Care, Packed with Confidence
            </h2>
            <p className="text-base md:text-lg text-muted-brown leading-relaxed mb-8 max-w-lg">
              Statues are delicate and meaningful. Every order is checked,
              protected, layered, and packed carefully to reduce damage during
              shipping.
            </p>

            {/* Quality Checklist */}
            <div className="bg-ivory border border-border rounded-lg p-6 sm:p-8 space-y-4">
              {qualityPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-temple-red shrink-0" />
                  <span className="text-sm sm:text-base font-body text-brown">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-sand">
              <img
                src="/images/about/packaging-care.png"
                alt="Handcrafted marble statue carefully packed in multi-layer protective packaging"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-temple-red/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
