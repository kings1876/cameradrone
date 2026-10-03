import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Zap } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  openCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, openCart }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element Brand Zone linking to Home Page */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap font-display"
        >
          Camera Drone Sales Australia
        </Link>

        {/* Zone 2: 4-6 clean text navigation links (exact user menu sequence) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1 hover:text-white ${
                isActive
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-300'
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1 hover:text-white ${
                isActive
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-300'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1 hover:text-white ${
                isActive
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-300'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1 hover:text-white ${
                isActive
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-300'
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `whitespace-nowrap transition-colors py-1 hover:text-white ${
                isActive
                  ? 'text-amber-400 font-semibold border-b-2 border-amber-400'
                  : 'text-slate-300'
              }`
            }
          >
            FAQ
          </NavLink>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/order"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Order Form</span>
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label="Open Shopping Cart"
            className="relative flex items-center justify-center p-2 text-slate-200 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-all shadow-sm hover:shadow-amber-500/20 whitespace-nowrap"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 flex items-center justify-center text-[11px] font-bold bg-white text-slate-950 rounded-full border border-slate-900 shadow">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Row */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800/80 py-2.5 px-3 bg-[#080c13] text-xs">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-amber-400 font-semibold' : 'text-slate-400'}`
          }
        >
          Order
        </NavLink>
      </div>
    </header>
  );
};
