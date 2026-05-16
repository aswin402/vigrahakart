import { useState, useCallback } from 'react';
import { shopProducts } from '@/data/shopData';
import { ShopHero } from './sections/ShopHero';
import { ShopToolbar } from './sections/ShopToolbar';
import { FilterSidebar } from './sections/FilterSidebar';
import { MobileFilterDrawer } from './sections/MobileFilterDrawer';
import { ShopProductCard } from './sections/ShopProductCard';
import { ActiveFilters } from './sections/ActiveFilters';
import { PromoBanner } from './sections/PromoBanner';
import { Pagination } from './sections/Pagination';
import { RecentlyViewed } from './sections/RecentlyViewed';
import { TrustStrip } from './sections/TrustStrip';

export function ShopPage() {
  // Filter state
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(
    {}
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const handleFilterChange = useCallback(
    (groupId: string, value: string) => {
      setActiveFilters((prev) => {
        const current = prev[groupId] || [];
        const exists = current.includes(value);
        return {
          ...prev,
          [groupId]: exists
            ? current.filter((v) => v !== value)
            : [...current, value],
        };
      });
    },
    []
  );

  const handleRemoveFilter = useCallback(
    (groupId: string, value: string) => {
      setActiveFilters((prev) => ({
        ...prev,
        [groupId]: (prev[groupId] || []).filter((v) => v !== value),
      }));
    },
    []
  );

  const handleClearAll = useCallback(() => {
    setActiveFilters({});
    setSearchQuery('');
  }, []);

  const products = shopProducts;
  const totalPages = 4;

  // Split products into two rows for the promo banner insertion
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6);

  return (
    <>
      {/* Shop Hero Banner */}
      <ShopHero />

      {/* Main Shop Layout */}
      <section className="bg-cream">
        <div className="max-w-[1400px] mx-auto section-padding pb-0">
          {/* Toolbar */}
          <ShopToolbar
            totalProducts={48}
            currentSort={currentSort}
            onSortChange={setCurrentSort}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            onOpenFilters={() => setIsFilterDrawerOpen(true)}
          />

          {/* Active Filters */}
          <ActiveFilters
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
          />

          {/* Sidebar + Product Grid */}
          <div className="flex gap-6 lg:gap-8 pt-6 pb-12">
            {/* Filter Sidebar — Desktop only */}
            <div className="hidden lg:block">
              <FilterSidebar
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAll}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                  {/* First 6 products */}
                  {firstRow.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      viewMode="grid"
                    />
                  ))}

                  {/* Promo Banner */}
                  <PromoBanner />

                  {/* Remaining products */}
                  {secondRow.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      viewMode="grid"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {firstRow.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      viewMode="list"
                    />
                  ))}
                  <PromoBanner />
                  {secondRow.map((product) => (
                    <ShopProductCard
                      key={product.id}
                      product={product}
                      viewMode="list"
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <RecentlyViewed />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearAll}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </>
  );
}
