import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { workshopImages } from '@/data/aboutData';

export function WorkshopGallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing bg-warm-beige/40">
      <div className="max-w-[1400px] mx-auto section-padding">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-temple-red mb-4">
            Behind the Scenes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-semibold text-deep-brown leading-tight mb-4">
            Inside the Workshop
          </h2>
          <p className="text-base md:text-lg text-muted-brown leading-relaxed">
            Natural materials, skilled hands, and patient finishing.
          </p>
        </div>

        {/* Gallery Grid — Asymmetric */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {workshopImages.map((img) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-lg bg-sand ${
                img.size === 'tall'
                  ? 'row-span-2'
                  : img.size === 'wide'
                  ? 'col-span-2'
                  : ''
              }`}
            >
              <div
                className={`w-full h-full ${
                  img.size === 'tall'
                    ? 'aspect-auto min-h-[300px] sm:min-h-[400px]'
                    : img.size === 'wide'
                    ? 'aspect-[2/1]'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-brown/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-body font-medium text-cream">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
