import React, { useState } from 'react';
import { Copy, Check, ExternalLink, KeyRound } from 'lucide-react';
import './DemoExamPortalPage.css';

export default function DemoExamPortalPage() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <div className="demo-portal-page">
      <div className="container">
        <div className="demo-portal-card glass-card">
          <div className="demo-portal-content">
            <span className="section-tag">Visitor Demo Access</span>
            <h1 className="section-title">
              Access Your Demo <br />
              <span className="gradient-text">Learning Dashboard</span>
            </h1>
            <p className="section-subtitle">
              You can log in using the pre-configured demo account credentials below to test our examination portal and course dashboard.
            </p>

            <div className="credentials-box glass-card">
              <div className="cred-row">
                <div>
                  <span className="cred-label">Email:</span>
                  <strong className="cred-value">demo@gmail.com</strong>
                </div>
                <button
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard('demo@gmail.com', 'email')}
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={16} className="icon-green" /> : <Copy size={16} />}
                </button>
              </div>

              <div className="cred-row">
                <div>
                  <span className="cred-label">Password:</span>
                  <strong className="cred-value">demo@elite</strong>
                </div>
                <button
                  className="copy-icon-btn"
                  onClick={() => copyToClipboard('demo@elite', 'password')}
                  title="Copy Password"
                >
                  {copiedField === 'password' ? <Check size={16} className="icon-green" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="portal-action-row">
              <a
                href="https://www.elitetoolistic.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>OPEN OFFICIAL EXAM PORTAL</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
