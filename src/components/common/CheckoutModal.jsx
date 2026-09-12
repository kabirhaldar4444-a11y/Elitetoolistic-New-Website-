import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight, X, Loader2, User, Mail, AlertCircle } from 'lucide-react';
import { initiateCheckout } from '../../services/checkoutService';
import './CheckoutModal.css';

export default function CheckoutModal({ isOpen, onClose, amount, itemsCount, cartItems = [], onProceedSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const redirectUrl = await initiateCheckout({
        cartItems: cartItems,
        totalAmount: amount,
        clientDetails: {
          name: formData.name,
          email: formData.email
        }
      });

      if (onProceedSuccess) {
        onProceedSuccess();
      }

      // Redirect user to PayAlma payment gateway
      window.location.href = redirectUrl;
    } catch (err) {
      console.error('Checkout error:', err);
      setErrorMsg(err.message || 'Unable to connect to payment gateway. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="custom-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} disabled={loading}>
          <X size={18} />
        </button>

        <div className="modal-icon-box">
          <ShieldCheck size={36} className="modal-shield-icon" />
        </div>

        <h3 className="modal-title">PayAlma Payment Gateway</h3>
        <p className="modal-desc">
          Enter your details below to proceed to the secure payment portal for <strong>{itemsCount} selected course{itemsCount > 1 ? 's' : ''}</strong>.
        </p>

        <div className="modal-amount-box">
          <span className="amount-lbl">Total Payable Amount</span>
          <span className="amount-val">₹{amount ? amount.toLocaleString('en-IN') : 0}/-</span>
        </div>

        <form onSubmit={handleProceed} className="checkout-form">
          <div className="form-group-modal">
            <div className="input-icon-wrapper">
              <User size={16} className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name (e.g. Rahul Sharma)"
                value={formData.name}
                onChange={handleChange}
                className="modal-input"
                required
              />
            </div>
          </div>

          <div className="form-group-modal">
            <div className="input-icon-wrapper">
              <Mail size={16} className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address (e.g. rahul@example.com)"
                value={formData.email}
                onChange={handleChange}
                className="modal-input"
                required
              />
            </div>
          </div>

          {errorMsg && (
            <div className="checkout-error-box">
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="modal-security-note">
            <Lock size={14} />
            <span>256-Bit Encrypted Direct Gateway Checkout</span>
          </div>

          <div className="modal-actions-row">
            <button type="button" className="btn-secondary modal-cancel-btn" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button type="submit" className="btn-primary modal-proceed-btn" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={18} className="spinner-icon" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <span>Proceed to Pay</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

