import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/navigation';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_12px_oklch(0.78_0.045_75/0.2)]'
            : 'bg-cream'
        }`}
      >
        <div className="border-b border-border/60">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-[72px] section-padding">
            {/* Logo */}
            <Link
              to="/"
              className="font-heading text-2xl md:text-[1.7rem] font-semibold text-deep-brown tracking-tight hover:text-temple-red transition-colors duration-200 shrink-0"
            >
              VigrahKart
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                >
                  <Link
                    to={link.href}
                    className={`nav-link flex items-center gap-1 py-2 ${location.pathname === link.href ? '!text-temple-red border-b-2 border-temple-red' : ''}`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                      <div className="min-w-[220px] bg-cream border border-border rounded-lg shadow-[0_8px_32px_oklch(0.28_0.06_45/0.12)] py-2 animate-fade-up">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-5 py-2.5 text-sm font-body text-brown hover:bg-warm-beige hover:text-temple-red transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                aria-label="Search"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-muted-brown hover:text-temple-red hover:bg-warm-beige transition-all duration-200"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button
                aria-label="Account"
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-muted-brown hover:text-temple-red hover:bg-warm-beige transition-all duration-200"
              >
                <User className="w-[18px] h-[18px]" />
              </button>
              <button
                aria-label="Wishlist"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-muted-brown hover:text-temple-red hover:bg-warm-beige transition-all duration-200"
              >
                <Heart className="w-[18px] h-[18px]" />
              </button>
              <button
                aria-label="Cart"
                className="relative w-9 h-9 flex items-center justify-center rounded-full text-muted-brown hover:text-temple-red hover:bg-warm-beige transition-all duration-200"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-temple-red text-cream text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Mobile Hamburger */}
              <button
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-brown hover:bg-warm-beige transition-all duration-200 ml-1"
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-dark-luxury/30 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute top-16 md:top-[72px] right-0 w-full sm:w-80 h-[calc(100dvh-4rem)] md:h-[calc(100dvh-72px)] bg-cream border-l border-border overflow-y-auto">
            <div className="p-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => !link.children && setIsMobileOpen(false)}
                    className={`block py-3 text-sm font-body font-medium uppercase tracking-[0.12em] hover:text-temple-red transition-colors ${location.pathname === link.href ? 'text-temple-red' : 'text-brown'}`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsMobileOpen(false)}
                          className="block py-2 text-sm text-muted-brown hover:text-temple-red transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Icons */}
              <div className="border-t border-border pt-5 mt-4 flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-muted-brown hover:text-temple-red transition-colors">
                  <Search className="w-4 h-4" />
                  Search
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-brown hover:text-temple-red transition-colors">
                  <User className="w-4 h-4" />
                  Account
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-brown hover:text-temple-red transition-colors">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
