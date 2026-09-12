import React, { useState } from 'react';
import { X, Trash2, ShoppingCart, ArrowRight, ShieldCheck } from 'lucide-react';
import CheckoutModal from './CheckoutModal';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  if (!isOpen) return null;

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = String(priceStr).replace(/[^0-9]/g, '');
    return parseInt(num, 10) || 0;
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.price) * (item.quantity || 1);
  }, 0);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ELITE10') {
      setDiscount(Math.round(subtotal * 0.1));
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code');
    }
  };

  const grandTotal = Math.max(0, subtotal - discount);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setIsCheckoutModalOpen(true);
  };

  return (
    <>
      <div className="cart-overlay" onClick={onClose}>
        <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <div className="cart-header-title">
              <ShoppingCart size={22} className="icon-cyan" />
              <h3>Your Selected Courses ({cartItems.length})</h3>
            </div>
            <button className="cart-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="cart-body">
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <ShoppingCart size={48} className="empty-icon" />
                <p className="empty-title">Your cart is currently empty</p>
                <p className="empty-sub">Explore our 100+ vocational courses and start upskilling today.</p>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item glass-card">
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-price">{item.price}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="qty-controls">
                        <button onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
                        <span>{item.quantity || 1}</span>
                        <button onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="promo-box">
                <input
                  type="text"
                  placeholder="Discount Code (e.g. ELITE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-input"
                />
                <button onClick={applyPromo} className="btn-secondary promo-btn">Apply</button>
              </div>
              {promoError && <p className="promo-error">{promoError}</p>}
              {discount > 0 && <p className="promo-success">Discount Applied: -₹{discount.toLocaleString('en-IN')}</p>}

              <div className="cart-summary-row">
                <span>Subtotal:</span>
                <span>₹{subtotal.toLocaleString('en-IN')}/-</span>
              </div>
              <div className="cart-summary-row total-row">
                <span>Total Payable:</span>
                <span className="gradient-text">₹{grandTotal.toLocaleString('en-IN')}/-</span>
              </div>

              <button className="btn-primary checkout-btn" onClick={handleCheckout}>
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight size={18} />
              </button>

              <div className="secure-badge">
                <ShieldCheck size={16} className="icon-cyan" />
                <span>100% Secure Payment Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onProceedSuccess={onClose}
        amount={grandTotal}
        itemsCount={cartItems.length}
        cartItems={cartItems}
      />
    </>
  );
}

