import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-cream text-brown">
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
