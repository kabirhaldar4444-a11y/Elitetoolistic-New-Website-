import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/common/CartDrawer';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import AboutPage from './pages/AboutPage';
import PersonaPage from './pages/PersonaPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';
import SampleInvoicePage from './pages/SampleInvoicePage';
import SampleCertificatePage from './pages/SampleCertificatePage';
import DemoExamPortalPage from './pages/DemoExamPortalPage';
import ViewMouPage from './pages/ViewMouPage';
import StatusPage from './pages/StatusPage';

// Scroll to top automatically on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('elite_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('elite_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  const handleAddToCart = (course) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === course.id);
      if (existing) {
        return prev.map((item) =>
          item.id === course.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...course, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <main className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/index.html" element={<HomePage onAddToCart={handleAddToCart} />} />

          <Route path="/courses" element={<CoursesPage onAddToCart={handleAddToCart} />} />
          <Route path="/courses.html" element={<CoursesPage onAddToCart={handleAddToCart} />} />

          <Route path="/course/:id" element={<CourseDetailPage onAddToCart={handleAddToCart} />} />
          <Route path="/:id.html" element={<CourseDetailPage onAddToCart={handleAddToCart} />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<AboutPage />} />

          <Route path="/persona" element={<PersonaPage />} />
          <Route path="/persona.html" element={<PersonaPage />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/team.html" element={<TeamPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />

          {/* Legal Policies */}
          <Route path="/privacy-policy" element={<PolicyPage initialTab="privacy-policy" />} />
          <Route path="/privacy-policy.html" element={<PolicyPage initialTab="privacy-policy" />} />

          <Route path="/terms-conditions" element={<PolicyPage initialTab="terms-conditions" />} />
          <Route path="/terms-conditions.html" element={<PolicyPage initialTab="terms-conditions" />} />

          <Route path="/refund-policy" element={<PolicyPage initialTab="refund-policy" />} />
          <Route path="/refund-policy.html" element={<PolicyPage initialTab="refund-policy" />} />

          <Route path="/service-delivery" element={<PolicyPage initialTab="service-delivery" />} />
          <Route path="/service-delivery.html" element={<PolicyPage initialTab="service-delivery" />} />

          {/* Specialized Documents & Portals */}
          <Route path="/sample-invoice" element={<SampleInvoicePage />} />
          <Route path="/sample-invoice.html" element={<SampleInvoicePage />} />

          <Route path="/sample-certificate" element={<SampleCertificatePage />} />
          <Route path="/sample-certificate.html" element={<SampleCertificatePage />} />

          <Route path="/demo-exam-portal" element={<DemoExamPortalPage />} />
          <Route path="/demo-exam-portal.html" element={<DemoExamPortalPage />} />

          <Route path="/viewmou" element={<ViewMouPage />} />
          <Route path="/viewmou.html" element={<ViewMouPage />} />
          <Route path="/viewmou-1.html" element={<ViewMouPage />} />

          <Route path="/success" element={<StatusPage />} />
          <Route path="/success.html" element={<StatusPage />} />
          <Route path="/failure" element={<StatusPage />} />
          <Route path="/failure.html" element={<StatusPage />} />

          {/* Fallback Catch-all Route */}
          <Route path="*" element={<HomePage onAddToCart={handleAddToCart} />} />
        </Routes>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
