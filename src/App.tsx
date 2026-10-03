import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';
import { CookieBanner } from './components/CookieBanner';

// Route Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { OrderPage } from './pages/OrderPage';
import { PolicyPage } from './pages/PolicyPage';

// Helper component to scroll to top on every URL route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();

  // Cart state persisted locally
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aero_au_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('aero_au_cart', JSON.stringify(cartItems));
    } catch {
      // storage unavailable
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleQuickCheckout = (product: Product) => {
    handleAddToCart(product);
    navigate('/order');
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans">
      <ScrollToTop />

      {/* Global Top Bar Navigation with direct routing */}
      <Navbar
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Routed Content Pages with Individual URLs */}
      <main className="flex-1">
        <Routes>
          {/* Home Page: Distinct from Shop Catalog */}
          <Route
            path="/"
            element={<HomePage onAddToCart={handleAddToCart} addedProductId={addedProductId} />}
          />
          {/* Dedicated Shop Catalog Page */}
          <Route
            path="/shop"
            element={<ShopPage onAddToCart={handleAddToCart} addedProductId={addedProductId} />}
          />
          {/* Product Detail Page */}
          <Route
            path="/product/:slug"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onQuickCheckout={handleQuickCheckout}
              />
            }
          />
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* Info Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* Order / Checkout Pages */}
          <Route
            path="/order"
            element={
              <OrderPage
                cartItems={cartItems}
                onOrderSuccess={() => setCartItems([])}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <OrderPage
                cartItems={cartItems}
                onOrderSuccess={() => setCartItems([])}
              />
            }
          />
          {/* Policy Pages */}
          <Route path="/shipping" element={<PolicyPage />} />
          <Route path="/refund" element={<PolicyPage />} />
          <Route path="/privacy" element={<PolicyPage />} />
          <Route path="/terms" element={<PolicyPage />} />
          {/* Catch-all */}
          <Route
            path="*"
            element={<HomePage onAddToCart={handleAddToCart} addedProductId={addedProductId} />}
          />
        </Routes>
      </main>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          navigate('/order');
        }}
      />

      {/* Interactive Live Chat Widget */}
      <LiveChatWidget />

      {/* Cookie Notice */}
      <CookieBanner />

      {/* Global Footer with individual page links */}
      <Footer />
    </div>
  );
}
