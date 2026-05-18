import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/shop/ShopPage';
import { GalleryPage } from '@/pages/gallery/GalleryPage';
import { AboutPage } from '@/pages/about/AboutPage';
import { ContactPage } from '@/pages/contact/ContactPage';
import { ProductPage } from '@/pages/product/ProductPage';
import { CartPage } from '@/pages/cart/CartPage';
import { WishlistPage } from '@/pages/wishlist/WishlistPage';
import { AuthPage } from '@/pages/auth/AuthPage';
import { SearchPage } from '@/pages/search/SearchPage';
import { ShippingReturnsPage } from '@/pages/shipping-returns/ShippingReturnsPage';
import { FaqPage } from '@/pages/faq/FaqPage';
import { PrivacyPolicyPage } from '@/pages/privacy/PrivacyPolicyPage';
import { TermsPage } from '@/pages/terms/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'wishlist',
        element: <WishlistPage />,
      },
      {
        path: 'account',
        element: <AuthPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'shipping-returns',
        element: <ShippingReturnsPage />,
      },
      {
        path: 'faq',
        element: <FaqPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'gallery',
        element: <GalleryPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
