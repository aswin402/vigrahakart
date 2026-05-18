import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { shopProducts } from '@/data/shopData';
import { TrustStrip } from '@/components/common/TrustStrip';
import { CartItemCard } from './components/CartItemCard';
import { OrderSummary } from './components/OrderSummary';
import { EmptyCart } from './components/EmptyCart';
import type { ShopProduct } from '@/types';

interface CartItem {
  product: ShopProduct;
  quantity: number;
}

export function CartPage() {
  // Initialize with some mock data for demonstration
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Simulate fetching cart from local storage/API
    // We'll populate it with 2 items initially for the demo
    const initialItems = [
      { product: shopProducts[0], quantity: 1 },
      { product: shopProducts[2], quantity: 2 },
    ];
    setCartItems(initialItems);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

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
          <span className="text-brown font-medium">Shopping Cart</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-deep-brown mb-8 md:mb-12">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 md:mb-24">
            {/* Cart Items List */}
            <div className="flex-1 animate-fade-up">
              <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs font-body uppercase tracking-wider text-muted-brown">
                <div className="col-span-8">Product</div>
                <div className="col-span-4 text-right">Total</div>
              </div>
              
              <div className="flex flex-col">
                {cartItems.map((item, index) => (
                  <div key={item.product.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <CartItemCard 
                      item={item} 
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemove}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-[400px] shrink-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <OrderSummary subtotal={subtotal} />
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
