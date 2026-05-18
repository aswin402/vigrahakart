import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Truck, RefreshCw, ShieldCheck, Package, Clock, AlertCircle } from 'lucide-react';
import { TrustStrip } from '@/components/common/TrustStrip';

// ─── Data ────────────────────────────────────────────────────────────────────

const shippingData = [
  {
    id: 'domestic',
    icon: Truck,
    title: 'Domestic Shipping',
    description: 'We deliver across all states in India with care and speed.',
    items: [
      { label: 'Standard Delivery', value: '5–7 business days' },
      { label: 'Express Delivery', value: '2–3 business days' },
      { label: 'Same-Day (Select Cities)', value: 'Order before 12 PM' },
      { label: 'Free Shipping Threshold', value: 'Orders over ₹5,000' },
      { label: 'Standard Shipping Fee', value: '₹250 for orders under ₹5,000' },
    ],
  },
  {
    id: 'international',
    icon: Package,
    title: 'International Shipping',
    description: 'We ship sacred art worldwide with customs-compliant packaging.',
    items: [
      { label: 'Delivery Time', value: '10–20 business days' },
      { label: 'Shipping Fee', value: 'Calculated at checkout' },
      { label: 'Customs & Duties', value: 'Payable by recipient' },
      { label: 'Available Regions', value: 'US, UK, UAE, Australia, Canada & more' },
    ],
  },
  {
    id: 'packaging',
    icon: ShieldCheck,
    title: 'Safe Packaging',
    description: 'Every piece is packaged by trained artisans to prevent damage in transit.',
    items: [
      { label: 'Bubble-wrap inner layer', value: '✓ Standard on all orders' },
      { label: 'Double-walled carton', value: '✓ Standard on all orders' },
      { label: 'Fragile sticker', value: '✓ Labeled on outer box' },
      { label: 'Insurance', value: '✓ Included for items over ₹3,000' },
    ],
  },
  {
    id: 'tracking',
    icon: Clock,
    title: 'Order Tracking',
    description: 'Stay informed at every step of the journey.',
    items: [
      { label: 'Dispatch Notification', value: 'Email + SMS with tracking number' },
      { label: 'Courier Partners', value: 'BlueDart, Delhivery, FedEx' },
      { label: 'Tracking Portal', value: 'Courier website or our order page' },
      { label: 'Delivery Attempts', value: '3 attempts before return-to-sender' },
    ],
  },
];

const returnsData = [
  {
    title: 'Eligibility',
    icon: RefreshCw,
    content: 'Items may be returned within 7 days of delivery, provided they are unused, in their original packaging, and in the same condition in which they were received. Custom-made or personalized pieces are non-returnable.',
  },
  {
    title: 'How to Initiate a Return',
    icon: AlertCircle,
    content: 'Email us at returns@vigrahkart.com with your order number, a description of the issue, and clear photographs of the item. Our team will respond within 2 business days with return instructions.',
  },
  {
    title: 'Refund Process',
    icon: ShieldCheck,
    content: 'Once we receive and inspect the returned item, we will initiate a refund to your original payment method within 5–7 business days. If the item was damaged during shipping, we offer a full refund including return shipping costs.',
  },
  {
    title: 'Exchanges',
    icon: Package,
    content: 'We offer a one-time exchange for size or variant differences if the product is available in stock. Shipping for the exchanged item is free on us. Please contact our support team within 7 days of delivery.',
  },
];

const faqs = [
  {
    q: 'Can I cancel my order?',
    a: 'Orders can be cancelled within 12 hours of placement by emailing us at orders@vigrahkart.com. After dispatch, cancellations are not possible.',
  },
  {
    q: 'My item arrived damaged — what do I do?',
    a: 'We are deeply sorry for this. Please email returns@vigrahkart.com with your order number and photos within 48 hours of delivery. We will arrange a full replacement or refund at no additional cost.',
  },
  {
    q: 'Can I return a custom-order statue?',
    a: 'Custom and made-to-order pieces are non-returnable unless they arrive damaged or defective, in which case we will offer a full resolution.',
  },
  {
    q: 'Do you provide gift packaging?',
    a: 'Yes! Select "Gift Packaging" at checkout. We wrap the item in traditional cloth with a handwritten card at a small additional cost of ₹199.',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ShippingReturnsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
          <span className="text-brown font-medium">Shipping & Returns</span>
        </nav>

        {/* Hero */}
        <div className="mb-14 md:mb-20 animate-fade-up">
          <p className="text-xs font-body uppercase tracking-[0.18em] text-temple-red mb-3">Policies</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-deep-brown mb-6 leading-tight">
            Shipping & Returns
          </h1>
          <p className="text-base md:text-lg font-body text-muted-brown max-w-2xl leading-relaxed">
            We handle every statue with the same devotion our artisans put into crafting them.
            Here's everything you need to know about how we deliver and our hassle-free return policy.
          </p>
        </div>

        {/* ── Shipping Section ── */}
        <section className="mb-20 md:mb-28" aria-labelledby="shipping-heading">
          <h2 id="shipping-heading" className="text-2xl md:text-3xl font-heading font-semibold text-deep-brown mb-10 pb-4 border-b border-border/50">
            Shipping Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingData.map((section, i) => (
              <div
                key={section.id}
                className="bg-ivory border border-border/50 rounded-lg p-6 md:p-8 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-warm-beige flex items-center justify-center shrink-0 mt-0.5">
                    <section.icon className="w-5 h-5 text-temple-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-deep-brown text-lg mb-1">{section.title}</h3>
                    <p className="text-sm font-body text-muted-brown">{section.description}</p>
                  </div>
                </div>

                <dl className="divide-y divide-border/30">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 text-sm font-body">
                      <dt className="text-muted-brown">{item.label}</dt>
                      <dd className="text-brown font-medium text-right ml-4">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>

        {/* ── Returns Section ── */}
        <section className="mb-20 md:mb-28" aria-labelledby="returns-heading">
          <h2 id="returns-heading" className="text-2xl md:text-3xl font-heading font-semibold text-deep-brown mb-10 pb-4 border-b border-border/50">
            Returns & Refunds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {returnsData.map((item, i) => (
              <div
                key={item.title}
                className="bg-ivory border border-border/50 rounded-lg p-6 md:p-8 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-warm-beige flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-temple-red" />
                  </div>
                  <h3 className="font-heading font-semibold text-deep-brown">{item.title}</h3>
                </div>
                <p className="text-sm font-body text-muted-brown leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Return Window Banner */}
          <div className="mt-8 bg-warm-beige/50 border border-border/40 rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 animate-fade-up">
            <RefreshCw className="w-8 h-8 text-temple-red shrink-0" />
            <div>
              <p className="font-heading font-semibold text-deep-brown mb-1">7-Day Return Window</p>
              <p className="text-sm font-body text-muted-brown">
                All eligible returns must be initiated within 7 days of the delivery date.
                Items must be unused and in original condition with packaging intact.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="mb-20 md:mb-28" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-semibold text-deep-brown mb-10 pb-4 border-b border-border/50">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-ivory border border-border/50 rounded-lg animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-body font-medium text-brown hover:text-deep-brown transition-colors select-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-brown shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <p className="px-5 pb-5 text-sm font-body text-muted-brown leading-relaxed border-t border-border/30 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section className="mb-16 md:mb-24">
          <div className="bg-ivory border border-border/50 rounded-lg p-8 md:p-12 text-center animate-fade-up max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-deep-brown mb-3">
              Still have questions?
            </h3>
            <p className="text-sm font-body text-muted-brown mb-6">
              Our support team is happy to help with any shipping or return queries.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-temple-red text-cream font-body font-semibold uppercase tracking-widest text-xs rounded hover:bg-deep-red transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </section>

      </div>

      {/* Trust Strip */}
      <div className="mt-auto border-t border-border/50">
        <TrustStrip />
      </div>
    </main>
  );
}
