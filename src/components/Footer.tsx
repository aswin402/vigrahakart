import { Link } from 'react-router-dom';
import { Globe, Heart, MessageCircle, Play, Mail, Phone, MapPin } from 'lucide-react';
import { footerColumns } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-luxury text-cream/90">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto section-padding pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="inline-block font-heading text-3xl font-semibold text-cream tracking-tight mb-4"
            >
              VigrahKart
            </Link>
            <p className="text-sm leading-relaxed text-sand/80 max-w-sm mb-6">
              Handcrafted sacred statues and decor for homes, temples, gardens,
              and meditation spaces. Each piece tells a story of tradition,
              artistry, and devotion.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Globe, label: 'Instagram', url: 'https://instagram.com' },
                { icon: Heart, label: 'Facebook', url: 'https://facebook.com' },
                { icon: MessageCircle, label: 'Twitter', url: 'https://twitter.com' },
                { icon: Play, label: 'YouTube', url: 'https://youtube.com' },
              ].map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-sand/20 text-sand/60 hover:bg-temple-red hover:border-temple-red hover:text-cream transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-sand mb-5">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-sand/70 hover:text-cream hover:translate-x-0.5 transition-all duration-150 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="mt-12 pt-8 border-t border-sand/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          <div className="flex items-center gap-3 text-sm text-sand/70">
            <Phone className="w-4 h-4 text-temple-red shrink-0" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-sand/70">
            <Mail className="w-4 h-4 text-temple-red shrink-0" />
            <span>hello@vigrahkart.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-sand/70">
            <MapPin className="w-4 h-4 text-temple-red shrink-0" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand/10">
        <div className="max-w-[1400px] mx-auto section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-sand/50">
            © {currentYear} VigrahKart. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="text-xs text-sand/50 hover:text-cream transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-sand/50 hover:text-cream transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/shipping-returns"
              className="text-xs text-sand/50 hover:text-cream transition-colors"
            >
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
