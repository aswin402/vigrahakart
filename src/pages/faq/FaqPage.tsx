import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ChevronDown } from 'lucide-react';
import { TrustStrip } from '@/components/common/TrustStrip';

// ─── Data ────────────────────────────────────────────────────────────────────

const faqCategories = [
  {
    id: 'ordering',
    label: 'Ordering & Payment',
    faqs: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards (Visa, Mastercard, RuPay), UPI, Net Banking, and Cash on Delivery for eligible pin codes across India. International orders can be paid via Visa or Mastercard.',
      },
      {
        q: 'Can I place a bulk or wholesale order?',
        a: 'Yes! We cater to bulk orders for temples, institutions, and gifting needs. Contact us at wholesale@vigrahkart.com with your requirements and we\'ll provide a custom quote with special pricing.',
      },
      {
        q: 'Can I modify or cancel my order after placing it?',
        a: 'Orders can be modified or cancelled within 12 hours of placement. After that, the item may already be dispatched. Please email orders@vigrahkart.com immediately with your order number.',
      },
      {
        q: 'Do you offer EMI options?',
        a: 'Yes, EMI is available on purchases above ₹5,000 via select credit cards and buy-now-pay-later options at checkout (powered by Razorpay).',
      },
      {
        q: 'Is it safe to pay on VigrahKart?',
        a: 'Absolutely. All transactions are secured with 256-bit SSL encryption. We never store your card details. Our payment gateway is fully PCI-DSS compliant.',
      },
    ],
  },
  {
    id: 'products',
    label: 'Products & Customization',
    faqs: [
      {
        q: 'Are all statues handcrafted?',
        a: 'Yes. Every piece in our collection is handcrafted by skilled artisans from across India — primarily from Mahabalipuram, Jaipur, and Moradabad — using traditional tools and techniques passed down through generations.',
      },
      {
        q: 'Can I place a custom order for a specific deity or size?',
        a: 'Absolutely! We specialize in made-to-order statues. Share your requirements (deity, size, material, finish) via our Contact page or email custom@vigrahkart.com. Custom orders typically take 4–8 weeks depending on complexity.',
      },
      {
        q: 'What materials are your statues made from?',
        a: 'Our collection spans Marble, Granite, Bronze, Brass, Panchaloha, Sandstone, Wood (Rosewood, Teak), and Fiber. Each product page clearly lists the material and finish details.',
      },
      {
        q: 'How do I care for my statue?',
        a: 'For stone statues, wipe with a dry or slightly damp cloth. For metal statues, use a soft brass/bronze polishing cloth occasionally. Avoid chemical cleaners. Keep wooden statues away from direct sunlight to prevent fading.',
      },
      {
        q: 'Are your products suitable for outdoor use?',
        a: 'Certain products (Granite, Sandstone, and Weather-resistant Fiber) are suitable for gardens and outdoor spaces. Each product is tagged with its suitability. When in doubt, contact us before purchasing.',
      },
    ],
  },
  {
    id: 'shipping',
    label: 'Shipping & Delivery',
    faqs: [
      {
        q: 'How long does delivery take?',
        a: 'Domestic standard delivery takes 5–7 business days. Express delivery is available in 2–3 business days. International shipping takes 10–20 business days. Custom-made orders have separate lead times.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! All domestic orders above ₹5,000 get free standard shipping. Orders below that have a flat ₹250 shipping fee.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to the US, UK, UAE, Canada, Australia, Singapore, and several other countries. International shipping costs are calculated at checkout based on destination and package weight.',
      },
      {
        q: 'How are fragile statues packaged?',
        a: 'Every statue is individually bubble-wrapped, placed in a double-walled carton, and labeled "Fragile". Items over ₹3,000 come with shipping insurance at no extra cost.',
      },
      {
        q: 'How do I track my order?',
        a: 'Once your order is dispatched, you\'ll receive an email and SMS with your tracking number and courier details. You can track it directly on the courier\'s website (BlueDart, Delhivery, or FedEx).',
      },
    ],
  },
  {
    id: 'returns',
    label: 'Returns & Refunds',
    faqs: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 7 days of delivery for unused items in original packaging. Custom/made-to-order pieces are non-returnable unless they arrive defective or damaged.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Email returns@vigrahkart.com with your order number, reason for return, and clear photos of the item. Our team will respond within 2 business days with pickup and refund details.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5–7 business days of receiving and inspecting the returned item. The amount is credited back to your original payment method.',
      },
      {
        q: 'My item arrived damaged. What should I do?',
        a: 'We\'re so sorry! Please email us at returns@vigrahkart.com with your order number and photos of the damage within 48 hours of delivery. We\'ll arrange a full replacement or refund — no return shipping required.',
      },
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-border/50 rounded-lg overflow-hidden transition-all duration-300 ${open ? 'bg-ivory shadow-sm' : 'bg-ivory hover:border-border'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className={`font-body font-medium text-sm md:text-[15px] transition-colors ${open ? 'text-deep-brown' : 'text-brown'}`}>
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-brown shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-temple-red' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm font-body text-muted-brown leading-relaxed border-t border-border/30 pt-3">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('ordering');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)!;

  return (
    <main className="bg-cream pt-6 pb-0 min-h-screen flex flex-col">
      <div className="max-w-[1400px] mx-auto section-padding w-full flex-1">

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-muted-brown mb-10 md:mb-14 animate-fade-up">
          <Link to="/" className="flex items-center gap-1.5 hover:text-temple-red transition-colors">
            <Home className="w-3.5 h-3.5 mb-0.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brown font-medium">FAQ</span>
        </nav>

        {/* Hero */}
        <div className="mb-14 md:mb-20 max-w-2xl animate-fade-up">
          <p className="text-xs font-body uppercase tracking-[0.18em] text-temple-red mb-3">Help Center</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-deep-brown mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg font-body text-muted-brown leading-relaxed">
            Find quick answers to the most common questions about our products, ordering process, shipping, and return policies.
          </p>
        </div>

        {/* Body: Category Tabs + FAQ List */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20 md:mb-28">

          {/* Category Sidebar / Tabs */}
          <div className="lg:w-56 shrink-0 animate-fade-up">
            <p className="text-xs font-body uppercase tracking-[0.14em] text-muted-brown mb-4 hidden lg:block">Categories</p>

            {/* Mobile: Horizontal scroll tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-4 lg:mx-0 px-4 lg:px-0 scrollbar-hide">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 lg:w-full text-left px-4 py-2.5 rounded-md text-sm font-body font-medium transition-all duration-200 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-temple-red text-cream shadow-sm'
                      : 'text-muted-brown hover:text-brown hover:bg-warm-beige'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="flex-1 min-w-0">
            <div
              key={activeCategory}
              className="animate-fade-up"
            >
              <h2 className="text-xl md:text-2xl font-heading font-semibold text-deep-brown mb-6">
                {currentCategory.label}
              </h2>
              <div className="space-y-3">
                {currentCategory.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Still have questions CTA */}
        <section className="mb-16 md:mb-24">
          <div className="bg-ivory border border-border/50 rounded-lg p-8 md:p-12 text-center animate-fade-up max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-deep-brown mb-3">
              Didn't find your answer?
            </h3>
            <p className="text-sm font-body text-muted-brown mb-6">
              Our support team is available Monday – Saturday, 9 AM to 6 PM IST.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-temple-red text-cream font-body font-semibold uppercase tracking-widest text-xs rounded hover:bg-deep-red transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

      </div>

      <div className="mt-auto border-t border-border/50">
        <TrustStrip />
      </div>
    </main>
  );
}
