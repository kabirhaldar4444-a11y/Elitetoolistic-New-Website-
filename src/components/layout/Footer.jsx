import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Newsletter Banner */}
        <div className="newsletter-box glass-card">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Join Our Newsletter</h3>
            <p className="newsletter-desc">Subscribe to receive instant updates on new vocational certifications and operational blueprints.</p>
          </div>
          <form className="newsletter-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="71d5ef87-88ee-4b57-9315-1340e1a9350e" />
            <input type="hidden" name="subject" value="New Newsletter Subscription" />
            <input type="email" name="email" placeholder="Your email address" required className="newsletter-input" />
            <button type="submit" className="btn-primary newsletter-btn">
              <span>Subscribe</span>
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Footer Main Columns */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/images/LOGO.png" alt="ELITE TOOLISTIC Logo" className="footer-logo-img" />
              <span className="footer-logo-text">ELITE TOOLISTIC</span>
            </div>
            <p className="footer-mission">
              Empowering individuals to unlock their full potential through flexible, high-quality learning experiences tailored to their unique goals.
            </p>
            <div className="footer-contact-details">
              <p className="contact-item">
                <MapPin size={16} className="icon-cyan" />
                <span>1444, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201318</span>
              </p>
              <p className="contact-item">
                <Mail size={16} className="icon-cyan" />
                <a href="mailto:support@elitetoolistic.com">support@elitetoolistic.com</a>
              </p>
              <p className="contact-item">
                <Phone size={16} className="icon-cyan" />
                <span>+91 7969654626 | +91 8062386662 | +91 2241507377</span>
              </p>
            </div>
          </div>

          {/* Quick Menu */}
          <div className="footer-col">
            <h4 className="footer-heading">Menu</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms &amp; Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/service-delivery">Service Delivery</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Info</h4>
            <ul className="footer-links">
              <li><Link to="/sample-invoice">Sample Invoice</Link></li>
              <li><Link to="/sample-certificate">Sample Certificate</Link></li>
              <li><a href="https://www.elitetoolistic.in/admission" target="_blank" rel="noopener noreferrer">Admission</a></li>
              <li><a href="https://www.elitetoolistic.in/login" target="_blank" rel="noopener noreferrer">Exam Portal</a></li>
              <li><Link to="/demo-exam-portal">Demo Exam Portal</Link></li>
            </ul>
          </div>

          {/* Navigation Pages */}
          <div className="footer-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/persona">Persona</Link></li>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 All rights reserved by ELITE TOOLISTIC (OPC) PRIVATE LIMITED.</p>
        </div>
      </div>
    </footer>
  );
}
