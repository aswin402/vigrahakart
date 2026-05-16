import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { customProcessSteps } from '@/data/contactData';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CustomOrderCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div
          className={`relative bg-dark-luxury rounded-xl overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Content */}
            <div className="p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-clay mb-4">
                Custom Creations
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-cream leading-[1.15] mb-4">
                Planning a Custom Statue?
              </h2>
              <p className="text-sm md:text-base text-sand/80 leading-relaxed mb-8 max-w-md">
                Whether it's for a pooja room, temple, garden, home decor, office,
                or gifting, we can help create a statue based on your reference,
                size, material, and budget.
              </p>

              {/* Process Steps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {customProcessSteps.map((step) => (
                  <div key={step.number} className="text-center">
                    <span className="block text-2xl font-heading font-semibold text-temple-red mb-1">
                      {step.number}
                    </span>
                    <span className="text-xs font-body text-sand/70 uppercase tracking-[0.06em]">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-temple-red text-cream text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:bg-terracotta active:scale-[0.97]"
                >
                  Start Custom Order
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-sand/30 text-cream text-sm font-body font-semibold uppercase tracking-[0.1em] rounded-md transition-all duration-300 hover:bg-sand/10 active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Reference
                </a>
              </div>
            </div>

            {/* Right — Image */}
            <div className="hidden lg:block relative h-full min-h-[360px]">
              <img
                src="/images/contact/contact-custom-order.png"
                alt="Artisan workshop with handcrafted statues displayed on wooden shelves"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-luxury/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
