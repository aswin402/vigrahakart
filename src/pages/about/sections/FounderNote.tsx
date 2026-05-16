import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function FounderNote() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-spacing bg-warm-beige/50">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Large decorative quote mark */}
          <span className="inline-block text-7xl sm:text-8xl font-heading text-temple-red/25 leading-none select-none mb-2">
            &ldquo;
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-[2rem] font-semibold text-deep-brown leading-tight mb-6">
            A Note from SacredStone
          </h2>

          <p className="font-heading text-lg sm:text-xl md:text-2xl text-brown italic leading-relaxed mb-8">
            We believe every statue has a quiet presence. Our goal is to help
            you find pieces that feel meaningful, beautiful, and lasting —
            whether for worship, meditation, decoration, gifting, or memory.
          </p>

          {/* Signature */}
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-[1px] bg-temple-red/40" />
            <span className="text-sm font-body font-medium uppercase tracking-[0.12em] text-muted-brown">
              Team SacredStone
            </span>
            <div className="w-10 h-[1px] bg-temple-red/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
