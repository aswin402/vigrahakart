import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ShopProduct } from '@/types';

interface ProductDetailsTabsProps {
  product: ShopProduct;
}

export function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const [openTab, setOpenTab] = useState<string>('description');

  const tabs = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-4 text-sm font-body text-muted-brown leading-relaxed animate-fade-up">
          <p>
            Experience the divine presence with this exquisite {product.name}. 
            Carefully handcrafted by master artisans, this piece embodies centuries of traditional craftsmanship. 
            The intricate details and premium finish make it a perfect centerpiece for your {product.usage.toLowerCase()}.
          </p>
          <p>
            Each VigrahKart creation is more than just a statue; it's a testament to devotion and artistry. 
            Whether you're looking to elevate your spiritual space or add a touch of cultural elegance to your home, 
            this {product.material.toLowerCase()} masterpiece will radiate tranquility and grace for generations.
          </p>
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Specifications',
      content: (
        <div className="animate-fade-up">
          <table className="w-full text-sm font-body text-left">
            <tbody className="divide-y divide-border/50">
              <tr>
                <th className="py-3 font-medium text-brown w-1/3">Material</th>
                <td className="py-3 text-muted-brown">{product.material}</td>
              </tr>
              <tr>
                <th className="py-3 font-medium text-brown">Dimensions</th>
                <td className="py-3 text-muted-brown">{product.size} (Standard sizing for category)</td>
              </tr>
              <tr>
                <th className="py-3 font-medium text-brown">Finish</th>
                <td className="py-3 text-muted-brown">{product.colorFinish}</td>
              </tr>
              <tr>
                <th className="py-3 font-medium text-brown">Origin</th>
                <td className="py-3 text-muted-brown">Handcrafted in India</td>
              </tr>
              <tr>
                <th className="py-3 font-medium text-brown">Care Instructions</th>
                <td className="py-3 text-muted-brown">Wipe with a clean, dry cloth. Avoid harsh chemicals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-4 text-sm font-body text-muted-brown leading-relaxed animate-fade-up">
          <p>
            <strong className="text-brown">Dispatch Time:</strong> Orders are typically dispatched within 2-3 business days. 
            For "Made to Order" items, please allow 10-15 days for crafting.
          </p>
          <p>
            <strong className="text-brown">Delivery Time:</strong> Standard delivery takes 5-7 business days across India. 
            International shipping times vary by location.
          </p>
          <p>
            <strong className="text-brown">Returns:</strong> We offer a 7-day hassle-free return policy for items in their original condition. 
            Custom orders are non-refundable. Please review our full Returns Policy for details.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="border border-border/50 bg-ivory rounded-lg overflow-hidden">
      {/* Desktop Tabs */}
      <div className="hidden md:flex border-b border-border/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setOpenTab(tab.id)}
            className={`flex-1 py-4 px-6 text-sm font-body font-semibold uppercase tracking-[0.1em] transition-colors ${
              openTab === tab.id
                ? 'bg-cream text-temple-red border-b-2 border-b-temple-red'
                : 'text-muted-brown hover:text-brown hover:bg-cream/50'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block p-8 bg-cream min-h-[250px]">
        {tabs.find(t => t.id === openTab)?.content}
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden divide-y divide-border/50 bg-cream">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              onClick={() => setOpenTab(openTab === tab.id ? '' : tab.id)}
              className="w-full flex items-center justify-between p-5 text-left text-sm font-body font-semibold uppercase tracking-[0.1em] text-brown"
            >
              <span className={openTab === tab.id ? 'text-temple-red' : ''}>{tab.title}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  openTab === tab.id ? 'rotate-180 text-temple-red' : 'text-muted-brown'
                }`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openTab === tab.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-5 pt-0">
                {tab.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
