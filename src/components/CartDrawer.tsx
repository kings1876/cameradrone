import React from 'react';
import { X, Trash2, Plus, Minus, Zap, Truck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { DroneGraphic } from './DroneGraphic';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cryptoTotal = Math.round(subtotal * 0.9);
  const cryptoSavings = subtotal - cryptoTotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f172a] border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white font-display">Shopping Bag</h2>
              <p className="text-xs text-slate-400">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your flight manifest
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white">Your bag is empty</h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Explore our selection of camera drones on sale with free nationwide express shipping.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
                >
                  Explore Drones & Cameras
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex gap-3 items-center"
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <DroneGraphic type={item.product.graphicType} size="sm" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate">
                      {item.product.brand} · {item.product.subcategory}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs font-bold text-white tabular-nums font-mono">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <span className="text-[10px] text-amber-400 font-medium font-mono">
                        (${Math.round(item.product.price * 0.9 * item.quantity).toLocaleString()} in Crypto)
                      </span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center border border-slate-700 bg-slate-900 rounded-md">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-slate-400 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-white tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-slate-400 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#0c1322] space-y-3">
              {/* Crypto Incentive Banner */}
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                  <span>10% Crypto Discount:</span>
                </span>
                <span className="font-mono font-bold text-amber-400">
                  Save -${cryptoSavings.toLocaleString()}
                </span>
              </div>

              {/* Price Line Items */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Standard Subtotal:</span>
                  <span className="font-mono tabular-nums text-slate-200">${subtotal.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Nationwide Express Delivery:</span>
                  <span className="text-emerald-400 font-semibold">FREE (All Products)</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Crypto Order Total:</span>
                  <span className="text-amber-400 font-mono tabular-nums">${cryptoTotal.toLocaleString()} USD</span>
                </div>
              </div>

              {/* Proceed to Order Form Button */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full py-3.5 px-4 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-amber-500/20"
              >
                <span>Proceed to Order Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-400">
                Ships nationwide via tracked courier with signature confirmation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
