import { Link } from 'react-router-dom';

export function BeforeAfterSection() {
  return (
    <section className="bg-warm-beige/20 py-24 section-padding border-y border-border/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-heading text-deep-brown mb-4">
            From Empty Corners to Meaningful Spaces
          </h2>
          <p className="text-muted-brown max-w-2xl mx-auto">
            See how the right handcrafted piece transforms a simple space into a sanctuary of calm and character.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-cream rounded-2xl p-6 md:p-10 border border-border/40 shadow-sm reveal">
          
          {/* Before */}
          <div className="relative rounded-xl overflow-hidden group">
            <img 
              src="/images/gallery-statues/before-empty-shelf.png" 
              alt="Empty shelf corner — plain and undecorated"
              className="w-full aspect-square object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="px-4 py-1.5 bg-brown/80 text-cream backdrop-blur-md text-xs font-semibold uppercase tracking-wider rounded-sm">
                Before
              </span>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src="/images/gallery-statues/after-styled-shelf.png" 
              alt="Styled shelf corner with bronze Ganesha, lamp, and books"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-4 py-1.5 bg-temple-red text-cream shadow-md text-xs font-semibold uppercase tracking-wider rounded-sm">
                After
              </span>
            </div>
            {/* Soft overlay gradient at bottom to ground it */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep-brown/40 to-transparent pointer-events-none" />
          </div>
          
        </div>

        <div className="mt-12 text-center reveal">
          <Link 
            to="/shop"
            className="inline-block px-8 py-3.5 border-2 border-brown text-brown font-medium tracking-wide rounded-sm hover:bg-brown hover:text-cream transition-colors duration-300"
          >
            Shop Home Decor Statues
          </Link>
        </div>
      </div>
    </section>
  );
}
