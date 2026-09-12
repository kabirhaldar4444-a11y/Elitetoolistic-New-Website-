import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import './DocViewer.css';

export default function SampleCertificatePage() {
  return (
    <div className="doc-viewer-page">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="doc-header">
          <span className="section-tag">Verifiable Credentials</span>
          <h1 className="section-title">Sample Provisional Certificate</h1>
          <p className="section-subtitle">
            Globally verifiable certificate issued to self-directed learners upon successful assessment on the examination portal.
          </p>
        </div>

        <div className="doc-preview-card glass-card">
          <img src="/images/sample cirtificate" alt="Sample Certificate Preview" className="doc-img" onError={(e) => { e.target.src = '/images/sample_certificate.png'; }} />
        </div>
      </div>
    </div>
  );
}
