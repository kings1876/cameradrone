import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Zap,
  Award,
  Star,
  ChevronRight,
  Sparkles,
  Camera,
  Compass,
  Video
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BLOG_POSTS } from '../data/content';
import { ProductCard } from '../components/ProductCard';
import { Hero } from '../components/Hero';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  addedProductId: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart, addedProductId }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Camera Drone Sales Australia | DJI, Enterprise & Agricultural Drones';
  }, []);

  // Featured 6 products for homepage showcase
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 6);

  const categoryHighlights = [
    {
      title: 'DJI Camera Drones',
      subtitle: 'DJI Mini, Air, Mavic 3 Pro and Inspire 3',
      path: '/shop',
      category: 'camera-drones',
      tag: 'Photo & Video',
      icon: Video
    },
    {
      title: 'Enterprise & Thermal Drones',
      subtitle: 'DJI Matrice, Mavic 3 Enterprise and Phantom 4',
      path: '/shop',
      category: 'enterprise-drones',
      tag: 'Industrial',
      icon: Compass
    },
    {
      title: 'Cameras & Sensors',
      subtitle: 'Zenmuse, thermal and multispectral payloads',
      path: '/shop',
      category: 'cameras-sensors',
      tag: 'Payloads',
      icon: Camera
    },
    {
      title: 'Agricultural Spraying Drones',
      subtitle: 'XAG and BROUAV spraying systems',
      path: '/shop',
      category: 'spraying-drones',
      tag: 'Agriculture',
      icon: Zap
    },
    {
      title: 'Batteries & Accessories',
      subtitle: 'Intelligent flight batteries and chargers',
      path: '/shop',
      category: 'batteries',
      tag: 'Accessories',
      icon: Camera
    }
  ];

  return (
    <div className="bg-[#0b0f17] text-slate-100 space-y-16 lg:space-y-24">
      {/* 1. Brand Focal Hero */}
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('featured-collection');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenOrderForm={() => navigate('/order')}
      />

      {/* 2. Category Quick Exploration Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
              Engineered For Australian Creators
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Explore Aerial Flight Collections
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <span>View Complete Store Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categoryHighlights.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to="/shop"
                className="group p-5 bg-[#0f172a] rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      {cat.tag}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors font-display">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-amber-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Browse Systems</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products for Homepage (6 Curated Workhorses) */}
      <section id="featured-collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Homepage Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              Featured Camera Drones on Sale
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A selection of popular camera, enterprise and agricultural drones from our Australian stock.
            </p>
          </div>

          <Link
            to="/shop"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
          >
            <span>All {PRODUCTS.length} Systems</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>
        </div>

        {/* 6 Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => navigate(`/product/${product.slug}`)}
              onAddToCart={() => onAddToCart(product)}
              isAdded={addedProductId === product.id}
            />
          ))}
        </div>

        {/* Banner leading to dedicated Shop Page */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-[#101b30] to-slate-900 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white font-display">
              Looking for Enterprise, Thermal or Spraying Drones?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Visit our dedicated <strong>Shop Catalog</strong> to filter by category hierarchy, search specific models, or check stock availability.
            </p>
          </div>
          <Link
            to="/shop"
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-all whitespace-nowrap shadow-md shadow-amber-500/20"
          >
            Open Complete Shop Page →
          </Link>
        </div>
      </section>

      {/* 4. Brand Pillar & Trust Story: Why Pilots Choose Us */}
      <section className="bg-[#0c1322] border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Supplying Australian Pilots Since 2018
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-display">
              Why Australian Pilots Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Founded on 17 May 2018 in Australia, we eliminate the risks of gray-market imports and delayed international shipping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
              <Truck className="w-8 h-8 text-emerald-400" />
              <h3 className="text-sm font-bold text-white font-display">Free Nationwide Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every drone system ships complimentary via express insured courier with signature confirmation across Australia.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
              <Zap className="w-8 h-8 text-amber-400" />
              <h3 className="text-sm font-bold text-white font-display">10% Crypto Incentive</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct blockchain settlement in USDT, BTC, ETH, and SOL with an automatic 10% discount deducted at checkout.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
              <ShieldCheck className="w-8 h-8 text-sky-400" />
              <h3 className="text-sm font-bold text-white font-display">100% Genuine AU Stock</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All platforms include official Australian serial verification, local firmware support, and Australian Consumer Law guarantees.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
              <Award className="w-8 h-8 text-amber-400" />
              <h3 className="text-sm font-bold text-white font-display">CASA Compliance Advisory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guidance from certified operators on sub-250g micro categories, RePL accreditation, and 120m altitude flight ceilings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial Flight Intel Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 bg-[#0f172a] border border-slate-800 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                Flight Operations Knowledge
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                Latest Australian Drone Guides
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs text-amber-400 hover:underline font-semibold inline-flex items-center gap-1"
            >
              <span>View All Flight Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group p-4 bg-slate-900/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors block space-y-2"
              >
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                  {post.tags[0]} · {post.readTime}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
