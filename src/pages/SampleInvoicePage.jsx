import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileCheck } from 'lucide-react';
import './DocViewer.css';

export default function SampleInvoicePage() {
  return (
    <div className="doc-viewer-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="doc-header">
          <span className="section-tag">Verification &amp; Accounting</span>
          <h1 className="section-title">Sample Corporate GST Invoice</h1>
          <p className="section-subtitle">
            Official GST invoice structure issued to corporate clients and individual learners within 24 hours of successful enrollment.
          </p>
        </div>

        <div className="doc-preview-card glass-card">
          <img src="/images/sample invoice" alt="Sample Invoice Preview" className="doc-img" onError={(e) => { e.target.src = '/images/sample_invoice.png'; }} />
        </div>
      </div>
    </div>
  );
}
