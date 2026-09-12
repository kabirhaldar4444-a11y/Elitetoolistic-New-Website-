import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import './StatusPage.css';

export default function StatusPage() {
  const location = useLocation();
  const isSuccess = location.pathname.includes('success');

  return (
    <div className="status-page">
      <div className="container">
        <div className="status-card glass-card">
          {isSuccess ? (
            <>
              <CheckCircle2 size={64} className="status-icon icon-success" />
              <h1 className="section-title">Payment Successful!</h1>
              <p className="section-subtitle">
                Thank you for enrolling with ELITE TOOLISTIC (OPC) PRIVATE LIMITED. Your workspace credentials and official invoice have been dispatched to your registered email address.
              </p>
              <div className="status-actions">
                <a href="https://www.elitetoolistic.in/login" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>Go to Exam &amp; Course Portal</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </>
          ) : (
            <>
              <XCircle size={64} className="status-icon icon-failure" />
              <h1 className="section-title">Payment Unsuccessful</h1>
              <p className="section-subtitle">
                We could not complete your transaction. No charges were made to your account. Please try again or choose another payment option.
              </p>
              <div className="status-actions">
                <Link to="/courses" className="btn-primary">
                  <span>Return to Catalog &amp; Retry</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
