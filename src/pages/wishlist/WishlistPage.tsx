import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { shopProducts } from '@/data/shopData';
import { ShopProductCard } from '@/pages/shop/sections/ShopProductCard';
import { TrustStrip } from '@/components/common/TrustStrip';
import { EmptyWishlist } from './components/EmptyWishlist';

export function WishlistPage() {
  // Initialize with some mock data for demonstration (e.g. products 1, 3, and 5)
  const [wishlistItems, setWishlistItems] = useState<typeof shopProducts>([]);

  useEffect(() => {
    // Simulate fetching wishlist from local storage/API
    const initialItems = [
      shopProducts[1],
      shopProducts[3],
      shopProducts[5],
      shopProducts[8]
    ];
    setWishlistItems(initialItems);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="bg-cream pt-6 pb-0 min-h-screen flex flex-col">
      <div className="max-w-[1400px] mx-auto section-padding w-full flex-1">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-muted-brown mb-8 md:mb-12">
          <Link to="/" className="flex items-center gap-1.5 hover:text-temple-red transition-colors">
            <Home className="w-3.5 h-3.5 mb-0.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brown font-medium">My Wishlist</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-deep-brown mb-8 md:mb-12">
          My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <div className="mb-16 md:mb-24">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
              {wishlistItems.map((product, index) => (
                <div key={product.id} className="animate-fade-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <ShopProductCard product={product} viewMode="grid" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Trust Strip at bottom */}
      <div className="mt-auto">
        <TrustStrip />
      </div>
    </main>
  );
}
