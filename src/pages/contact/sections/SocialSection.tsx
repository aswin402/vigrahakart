import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { socialLinks } from '@/data/contactData';

export function SocialSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-warm-beige section-spacing">
      <div className="max-w-[800px] mx-auto section-padding text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-temple-red mb-4">
            Community
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-deep-brown mb-3">
            Follow Our Craft Journey
          </h2>
          <p className="text-sm md:text-base text-muted-brown leading-relaxed mb-8 max-w-md mx-auto">
            See new arrivals, artisan details, customer spaces, and custom statue updates.
          </p>

          {/* Social Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-border text-muted-brown hover:bg-temple-red hover:border-temple-red hover:text-cream transition-all duration-200"
              >
                <span className="text-lg">{link.icon}</span>
              </a>
            ))}
          </div>

          {/* Hashtag */}
          <p className="text-xs font-body font-medium uppercase tracking-[0.15em] text-clay">
            #VigrahKartSpaces
          </p>
        </div>
      </div>
    </section>
  );
}
