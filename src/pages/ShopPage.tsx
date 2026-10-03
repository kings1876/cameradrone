import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Truck, Zap, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const PAGE_SIZE = 12;

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  addedProductId: string | null;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onAddToCart, addedProductId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Shop Camera Drones & UAVs | Camera Drone Sales Australia';
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(searchParams.get('sub') || 'all');

  // Keep filters in sync when the top-nav category menu links here
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedSubcategory(searchParams.get('sub') || 'all');
  }, [searchParams]);
  const [selectedBadge, setSelectedBadge] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [page, setPage] = useState(1);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('all');
  };

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'all') return [];
    const cat = CATEGORIES.find(c => c.id === selectedCategory);
    return cat ? cat.subcategories : [];
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedSubcategory !== 'all' && p.subcategory !== selectedSubcategory) return false;
      if (selectedBadge !== 'all' && p.badge !== selectedBadge) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inName = p.name.toLowerCase().includes(query);
        const inBrand = p.brand.toLowerCase().includes(query);
        const inDesc = p.description.toLowerCase().includes(query);
        const inSubcat = p.subcategory.toLowerCase().includes(query);
        const inKeywords = p.categoryName.toLowerCase().includes(query);
        if (!inName && !inBrand && !inDesc && !inSubcat && !inKeywords) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedSubcategory, selectedBadge, searchQuery, sortBy]);

  const activeCategoryObject = CATEGORIES.find(c => c.id === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pagedProducts = filteredProducts.slice(pageStart, pageStart + PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [selectedCategory, selectedSubcategory, selectedBadge, searchQuery, sortBy]);

  const goToPage = (n: number) => {
    setPage(n);
    document.getElementById('shop-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pageNumbers = useMemo(() => {
    const nums: (number | '…')[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) nums.push(i);
      else if (nums[nums.length - 1] !== '…') nums.push('…');
    }
    return nums;
  }, [totalPages, currentPage]);

  return (
    <div className="py-10 sm:py-14 bg-[#0b0f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dedicated Shop Catalog Header */}
        <div className="border-b border-slate-800 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Shop Catalog</span>
              {activeCategoryObject && (
                <>
                  <span>/</span>
                  <span className="text-slate-200">{activeCategoryObject.name}</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1 text-emerald-400 font-medium">
                <Truck className="w-3.5 h-3.5" />
                <span>Free AU Courier on All Orders</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1 text-amber-400 font-medium">
                <Zap className="w-3.5 h-3.5" />
                <span>10% Crypto Discount</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
                Drones & Aerial Systems
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Browse DJI camera drones, enterprise and thermal UAVs, agricultural spraying drones, and batteries and accessories.
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs text-slate-400">
                Active Catalog Inventory: <strong className="text-white font-mono">{filteredProducts.length}</strong> systems
              </span>
            </div>
          </div>
        </div>

        {/* Shop by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 lg:gap-8 items-start">
        {/* Left sidebar widget: categories */}
        <aside
          aria-labelledby="shop-by-category"
          className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 shadow-xl lg:sticky lg:top-24"
        >
          <h2 id="shop-by-category" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
            Categories
          </h2>
          <ul className="space-y-1">
            <li>
              <button
                type="button"
                aria-pressed={selectedCategory === 'all'}
                onClick={() => handleCategorySelect('all')}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>All Equipment</span>
                <span className="text-[11px] font-mono opacity-80">{PRODUCTS.length}</span>
              </button>
            </li>
            {CATEGORIES.map(cat => {
              const count = PRODUCTS.filter(p => p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <li key={cat.id}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[11px] font-mono opacity-80">{count}</span>
                  </button>
                  <ul className="mt-1 mb-2 ml-3 pl-3 border-l border-slate-800 space-y-0.5">
                    {cat.subcategories.map(sub => {
                      const subActive = isActive && selectedSubcategory === sub;
                      return (
                        <li key={sub}>
                          <button
                            type="button"
                            aria-pressed={subActive}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setSelectedSubcategory(sub);
                            }}
                            className={`w-full text-left px-2 py-1 text-xs rounded-md transition-colors ${
                              subActive
                                ? 'text-amber-400 font-bold'
                                : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="space-y-8 min-w-0">
        {/* Filters & Control Panel */}
        <div className="space-y-4 bg-[#0f172a] p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
          {/* Search, Badges & Sorting */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword: mavic, matrice, mini, spraying, battery..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-14 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Order */}
            <div className="sm:col-span-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-slate-300 focus:outline-hidden focus:border-amber-400"
              >
                <option value="featured">Sort: Featured Systems</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div id="shop-results" className="flex items-center justify-between text-xs text-slate-400 pt-1 scroll-mt-24">
          <span>
            Showing <strong className="text-white font-mono">
              {filteredProducts.length === 0 ? 0 : pageStart + 1}–{pageStart + pagedProducts.length}
            </strong> of <strong className="text-white font-mono">{filteredProducts.length}</strong> items
          </span>

          {(searchQuery || selectedCategory !== 'all' || selectedSubcategory !== 'all' || selectedBadge !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSelectedBadge('all');
              }}
              className="text-amber-400 hover:underline inline-flex items-center gap-1 text-[11px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Active Filters</span>
            </button>
          )}
        </div>

        {/* Product Cards Grid: 3-column desktop */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-slate-950/40 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white">No flight systems matched your criteria</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search terms or clearing subcategory filters to view available equipment.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setSelectedBadge('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 rounded-lg"
            >
              Reset Filters & Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {pagedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={() => navigate(`/product/${product.slug}`)}
                onAddToCart={() => onAddToCart(product)}
                isAdded={addedProductId === product.id}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Product pagination" className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>
            {pageNumbers.map((n, i) =>
              n === '…' ? (
                <span key={`gap-${i}`} className="px-2 text-slate-500" aria-hidden="true">…</span>
              ) : (
                <button
                  key={n}
                  type="button"
                  onClick={() => goToPage(n)}
                  aria-current={n === currentPage ? 'page' : undefined}
                  aria-label={`Page ${n}`}
                  className={`min-w-9 px-3 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                    n === currentPage
                      ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                  }`}
                >
                  {n}
                </button>
              )
            )}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </nav>
        )}
        </div>
        </div>

        {/* CASA Airspace Quick Reminder */}
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <span className="font-bold text-amber-300 uppercase tracking-wider block text-[11px]">
              CASA Regulatory Reminder for Australian Flights
            </span>
            <p className="text-slate-300 text-[11px] mt-0.5">
              Recreational drones under 249g (such as the DJI Mini 4 Pro) require no registration. All flights must observe the 120m ceiling and 30m separation from bystanders.
            </p>
          </div>
          <Link
            to="/faq"
            className="text-amber-400 hover:underline font-semibold whitespace-nowrap text-xs shrink-0"
          >
            Read CASA FAQ →
          </Link>
        </div>
      </div>
    </div>
  );
};
