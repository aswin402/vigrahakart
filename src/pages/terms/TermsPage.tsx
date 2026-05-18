import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, FileText, ShoppingBag, Shield, AlertTriangle, Scale, RefreshCw, Mail } from 'lucide-react';
import { TrustStrip } from '@/components/common/TrustStrip';

// ─── Data ────────────────────────────────────────────────────────────────────

const lastUpdated = 'May 18, 2025';

const sections = [
  {
    id: 'acceptance',
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement',
        text: 'By accessing or using the VigrahKart website (vigrahkart.com), placing an order, or creating an account, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our website or services.',
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years of age to place an order on VigrahKart. By using our site, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.',
      },
    ],
  },
  {
    id: 'products-ordering',
    icon: ShoppingBag,
    title: '2. Products & Ordering',
    content: [
      {
        subtitle: 'Product Descriptions',
        text: 'We make every effort to display our products as accurately as possible. However, colours and finishes may vary slightly depending on your monitor settings. All dimensions listed are approximate. We reserve the right to modify product descriptions, pricing, and availability without prior notice.',
      },
      {
        subtitle: 'Order Acceptance',
        text: 'Placing an order constitutes an offer to purchase. Your order is only accepted when we send you a dispatch confirmation email. We reserve the right to cancel any order at our discretion — for example, in the event of a pricing error, stock unavailability, or suspected fraud — and will provide a full refund in such cases.',
      },
      {
        subtitle: 'Custom Orders',
        text: 'Custom and made-to-order items are non-cancellable once production has commenced (typically within 24 hours of order confirmation). Full payment is required upfront for all custom orders. Custom pieces are non-refundable unless they arrive defective.',
      },
      {
        subtitle: 'Pricing',
        text: 'All prices on VigrahKart are listed in Indian Rupees (INR) unless otherwise specified. Prices are inclusive of applicable taxes. Shipping charges, if any, are calculated and displayed at checkout. International customers may be subject to additional customs duties and taxes imposed by the destination country, which are the buyer\'s responsibility.',
      },
    ],
  },
  {
    id: 'payment',
    icon: Shield,
    title: '3. Payment & Security',
    content: [
      {
        subtitle: 'Accepted Methods',
        text: 'We accept payments via credit/debit cards (Visa, Mastercard, RuPay), UPI, Net Banking, and Cash on Delivery (select pin codes). International orders can be paid via Visa or Mastercard.',
      },
      {
        subtitle: 'Payment Processing',
        text: 'All online payments are processed securely through Razorpay, a PCI-DSS Level 1 compliant payment gateway. VigrahKart does not store your card details on our servers.',
      },
      {
        subtitle: 'Failed Transactions',
        text: 'If a payment fails but your account is charged, the amount will typically be auto-reversed within 5–7 business days by your bank. Please contact us at payments@vigrahkart.com if you face any issues.',
      },
    ],
  },
  {
    id: 'shipping-delivery',
    icon: FileText,
    title: '4. Shipping & Delivery',
    content: [
      {
        subtitle: 'Delivery Timelines',
        text: 'Estimated delivery timelines are provided in good faith and are not guaranteed. VigrahKart is not responsible for delays caused by courier partners, customs clearance, natural disasters, strikes, or other circumstances beyond our control.',
      },
      {
        subtitle: 'Risk of Loss',
        text: 'Risk of loss or damage passes to you upon dispatch of your order. All orders come with a tracking number and, for items above ₹3,000, shipping insurance. In the event of loss during transit, please contact us within 14 days of the expected delivery date.',
      },
    ],
  },
  {
    id: 'returns-refunds',
    icon: RefreshCw,
    title: '5. Returns & Refunds',
    content: [
      {
        subtitle: 'Return Eligibility',
        text: 'Items may be returned within 7 days of delivery, provided they are unused, unaltered, and in original packaging. Custom-made, personalized, or made-to-order pieces are non-returnable unless defective.',
      },
      {
        subtitle: 'Refund Timeline',
        text: 'Approved refunds are processed within 5–7 business days of receiving the returned item. Refunds are credited to the original payment method.',
      },
      {
        subtitle: 'Full Policy',
        text: 'For complete details on our return and refund process, please refer to our Shipping & Returns Policy page.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    icon: Scale,
    title: '6. Intellectual Property',
    content: [
      {
        subtitle: 'Ownership',
        text: 'All content on the VigrahKart website — including but not limited to text, images, graphics, logos, product photographs, and design — is the property of VigrahKart or its content licensors and is protected by applicable Indian and international copyright, trademark, and intellectual property laws.',
      },
      {
        subtitle: 'Permitted Use',
        text: 'You may view, download, and print content from this website solely for your personal, non-commercial use. You may not reproduce, distribute, publish, modify, or create derivative works of any content without prior written consent from VigrahKart.',
      },
      {
        subtitle: 'User Content',
        text: 'By submitting reviews, photos, or other content ("User Content") to our website, you grant VigrahKart a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, and display such content for any business purpose, including marketing and promotion.',
      },
    ],
  },
  {
    id: 'prohibited-use',
    icon: AlertTriangle,
    title: '7. Prohibited Use',
    content: [
      {
        subtitle: 'Prohibited Activities',
        text: 'You agree not to: (a) use the website for any unlawful purpose; (b) attempt to gain unauthorized access to our systems; (c) scrape, crawl, or harvest data without our written consent; (d) transmit any malicious code or interfere with the website\'s operation; (e) impersonate any person or entity; or (f) engage in any activity that places an unreasonable load on our infrastructure.',
      },
    ],
  },
  {
    id: 'liability',
    icon: Shield,
    title: '8. Limitation of Liability',
    content: [
      {
        subtitle: 'Disclaimer',
        text: 'VigrahKart\'s website and services are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      },
      {
        subtitle: 'Limitation',
        text: 'To the fullest extent permitted by law, VigrahKart shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of (or inability to use) our website or products. Our total liability in connection with any claim shall not exceed the amount you paid for the specific product or service giving rise to the claim.',
      },
    ],
  },
  {
    id: 'governing-law',
    icon: Scale,
    title: '9. Governing Law & Disputes',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These Terms & Conditions are governed by the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.',
      },
      {
        subtitle: 'Dispute Resolution',
        text: 'Before initiating legal proceedings, we encourage you to contact us directly to resolve any dispute amicably. We are committed to working with you to find a fair solution.',
      },
    ],
  },
  {
    id: 'changes',
    icon: RefreshCw,
    title: '10. Changes to These Terms',
    content: [
      {
        subtitle: 'Modification',
        text: 'VigrahKart reserves the right to update these Terms & Conditions at any time. The revised version will be posted on this page with an updated "Last Updated" date. Your continued use of the website following such changes constitutes acceptance of the new terms.',
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function TermsPage() {
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
          <span className="text-brown font-medium">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20 animate-fade-up">
          <p className="text-xs font-body uppercase tracking-[0.18em] text-temple-red mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-deep-brown mb-6 leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-base font-body text-muted-brown leading-relaxed mb-4">
            Please read these terms carefully before using VigrahKart. By shopping with us, you agree to the following conditions that govern our relationship.
          </p>
          <p className="text-xs font-body text-muted-brown">
            Last updated: <span className="font-medium text-brown">{lastUpdated}</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 md:mb-28">

          {/* Sticky TOC — Desktop only */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-28">
              <p className="text-xs font-body uppercase tracking-[0.14em] text-muted-brown mb-4">Contents</p>
              <nav className="space-y-1.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm font-body text-muted-brown hover:text-temple-red transition-colors py-0.5 leading-snug"
                  >
                    {s.title}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block text-sm font-body text-muted-brown hover:text-temple-red transition-colors py-0.5"
                >
                  11. Contact Us
                </a>
              </nav>
            </div>
          </aside>

          {/* Terms Body */}
          <div className="flex-1 min-w-0 space-y-12">
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full bg-warm-beige flex items-center justify-center shrink-0">
                    <section.icon className="w-4 h-4 text-temple-red" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-semibold text-deep-brown">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-12 space-y-5">
                  {section.content.map((block) => (
                    <div key={block.subtitle}>
                      <h3 className="text-sm font-body font-semibold text-brown uppercase tracking-wider mb-2">
                        {block.subtitle}
                      </h3>
                      <p className="text-sm font-body text-muted-brown leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                {i < sections.length - 1 && (
                  <div className="mt-10 border-b border-border/40" />
                )}
              </section>
            ))}

            {/* Contact Block */}
            <section id="contact" className="scroll-mt-28 animate-fade-up bg-ivory border border-border/50 rounded-lg p-7 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-warm-beige flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-temple-red" />
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-deep-brown">
                  11. Contact Us
                </h2>
              </div>
              <p className="pl-12 text-sm font-body text-muted-brown leading-relaxed mb-5">
                If you have any questions about these Terms & Conditions, please contact our legal and support team:
              </p>
              <div className="pl-12 space-y-2 text-sm font-body text-brown">
                <p><span className="text-muted-brown">Email: </span><a href="mailto:legal@vigrahkart.com" className="text-temple-red hover:underline">legal@vigrahkart.com</a></p>
                <p><span className="text-muted-brown">Address: </span>VigrahKart, 14 Artisan Street, Mahabalipuram, Tamil Nadu – 603 104, India</p>
                <p><span className="text-muted-brown">Phone: </span>+91 98765 43210</p>
              </div>
              <div className="pl-12 mt-6">
                <Link
                  to="/contact"
                  className="inline-block px-7 py-2.5 bg-temple-red text-cream font-body font-semibold uppercase tracking-widest text-xs rounded hover:bg-deep-red transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-border/50">
        <TrustStrip />
      </div>
    </main>
  );
}
