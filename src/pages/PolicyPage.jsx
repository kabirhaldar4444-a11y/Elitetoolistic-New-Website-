import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, RefreshCw, Truck } from 'lucide-react';
import './PolicyPage.css';

export default function PolicyPage({ initialTab = 'privacy-policy' }) {
  const location = useLocation();

  // Determine active policy tab based on path or prop
  let activeTab = initialTab;
  if (location.pathname.includes('terms-conditions')) activeTab = 'terms-conditions';
  if (location.pathname.includes('refund-policy')) activeTab = 'refund-policy';
  if (location.pathname.includes('service-delivery')) activeTab = 'service-delivery';
  if (location.pathname.includes('privacy-policy')) activeTab = 'privacy-policy';

  const [tab, setTab] = useState(activeTab);

  return (
    <div className="policy-page">
      <section className="policy-hero">
        <div className="container">
          <span className="section-tag">Legal Framework &amp; Compliance</span>
          <h1 className="section-title">
            Platform Policies &amp; <span className="gradient-text">Governance</span>
          </h1>
          <p className="section-subtitle">
            Comprehensive operational guidelines, legal terms, refund policies, and service delivery frameworks for ELITE TOOLISTIC (OPC) PRIVATE LIMITED.
          </p>
        </div>
      </section>

      <section className="policy-main-section">
        <div className="container">
          <div className="policy-layout">
            {/* Sidebar Navigation */}
            <div className="policy-sidebar glass-card">
              <h4 className="sidebar-title">Policy Directory</h4>
              <div className="policy-tab-list">
                <Link
                  to="/privacy-policy"
                  className={`policy-tab-item ${tab === 'privacy-policy' ? 'active' : ''}`}
                  onClick={() => setTab('privacy-policy')}
                >
                  <ShieldCheck size={18} />
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  to="/terms-conditions"
                  className={`policy-tab-item ${tab === 'terms-conditions' ? 'active' : ''}`}
                  onClick={() => setTab('terms-conditions')}
                >
                  <FileText size={18} />
                  <span>Terms &amp; Conditions</span>
                </Link>
                <Link
                  to="/refund-policy"
                  className={`policy-tab-item ${tab === 'refund-policy' ? 'active' : ''}`}
                  onClick={() => setTab('refund-policy')}
                >
                  <RefreshCw size={18} />
                  <span>Refund Policy</span>
                </Link>
                <Link
                  to="/service-delivery"
                  className={`policy-tab-item ${tab === 'service-delivery' ? 'active' : ''}`}
                  onClick={() => setTab('service-delivery')}
                >
                  <Truck size={18} />
                  <span>Service Delivery</span>
                </Link>
              </div>
            </div>

            {/* Main Policy Content Area */}
            <div className="policy-content-card glass-card">
              {tab === 'privacy-policy' && (
                <div className="policy-body">
                  <h2>Privacy Policy &amp; Data Governance</h2>
                  <p className="notice-box">
                    <strong>Platform Notice:</strong> ELITE TOOLISTIC operates strictly as an asynchronous educational infrastructure platform. Data collection and KYC verification protocols are deployed to safeguard platform security and uphold transaction compliance.
                  </p>

                  <div className="policy-block">
                    <h3>1. Introduction &amp; Scope</h3>
                    <p>This Privacy Policy governs the data collection, storage, processing, and security practices of <strong>ELITE TOOLISTIC</strong> (operating through its asynchronous educational infrastructure platform at <a href="https://www.elitetoolistic.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan-primary)' }}>https://www.elitetoolistic.com</a>).</p>
                    <p>To deliver independent vocational training programs, identity verification services, and verifiable institutional credentials, ELITE TOOLISTIC must handle specific personal and biometric data. By registering an account, making a purchase, or completing the security verification steps, you explicitly consent to the collection, processing, and retention practices outlined in this policy.</p>
                  </div>

                  <div className="policy-block">
                    <h3>2. Information We Collect</h3>
                    <p>ELITE TOOLISTIC processes information through various stages of your onboarding, verification, and educational journey:</p>
                    <ul className="policy-list">
                      <li><strong>Personal Identification Data:</strong> Full legal name, billing address, phone number, and corporate email address collected during checkout or sign-up.</li>
                      <li><strong>Mandatory KYC &amp; Security Verification Data:</strong> Government-issued photo identification cards and brief Video KYC selfie verification files processed securely to eliminate proxy testing.</li>
                      <li><strong>Academic Workspace Logs:</strong> Answers, responses, submission timestamps, and grading metrics parsed during automated final examinations.</li>
                    </ul>
                  </div>

                  <div className="policy-block">
                    <h3>3. How We Use Your Data</h3>
                    <ul className="policy-list">
                      <li><strong>Identity Verification &amp; Anti-Fraud:</strong> Cross-referencing biometric Video KYC with submitted physical documents to establish an unalterable audit trail.</li>
                      <li><strong>Service Fulfillment:</strong> Provisioning unique access keys to streaming video lecture workspaces and digital text repositories.</li>
                      <li><strong>Credential Issuance:</strong> Generating accurate legal profiles for verifiable Enrollment Certificates and Provisional Certificates (PC).</li>
                    </ul>
                  </div>

                  <div className="policy-block">
                    <h3>4. Data Protection &amp; Sharing Restrictions</h3>
                    <p>ELITE TOOLISTIC treats proprietary and personal data with high security. We do not sell, rent, trade, or share your personal data with external third-party marketing networks. Data is shared exclusively under strict statutory conditions, such as financial dispute resolution defense or mandatory legal enforcement.</p>
                  </div>
                </div>
              )}

              {tab === 'terms-conditions' && (
                <div className="policy-body">
                  <h2>Terms &amp; Conditions</h2>
                  <p className="notice-box">
                    <strong>Important Binding Terms:</strong> Please read these Terms &amp; Conditions carefully before enrolling in any independent vocational certification program.
                  </p>

                  <div className="policy-block">
                    <h3>1. Educational Service Model</h3>
                    <p>ELITE TOOLISTIC (OPC) PRIVATE LIMITED provides independent vocational training masterclasses delivered asynchronously through recorded video lectures, digital manuals, and online evaluation portals. Programs are self-paced and designed for professional upskilling.</p>
                  </div>

                  <div className="policy-block">
                    <h3>2. User Account Security &amp; Fair Use</h3>
                    <p>Each registration grants single-user access to learning materials. Sharing workspace access credentials, downloading protected video streams via unauthorized tools, or scraping platform repositories is strictly prohibited and results in immediate profile suspension without refund.</p>
                  </div>

                  <div className="policy-block">
                    <h3>3. Certification &amp; Evaluation</h3>
                    <p>Certificates are issued electronically upon successful completion of the self-paced coursework and online evaluation portal assessment. Learners are required to submit accurate legal identity information during registration.</p>
                  </div>
                </div>
              )}

              {tab === 'refund-policy' && (
                <div className="policy-body">
                  <h2>Refund &amp; Cancellation Policy</h2>
                  <p className="notice-box">
                    <strong>Digital Access Notice:</strong> Due to the immediate release of downloadable digital text repositories, video streaming licenses, and pre-recorded masterclass modules upon payment, specific refund guidelines apply.
                  </p>

                  <div className="policy-block">
                    <h3>1. Refund Eligibility</h3>
                    <p>Refund requests are evaluated on a case-by-case basis prior to the accessing or downloading of digital course assets. Once course materials have been accessed or video lectures streamed, fee payments become non-refundable.</p>
                  </div>

                  <div className="policy-block">
                    <h3>2. Process &amp; Timelines</h3>
                    <p>To request a refund review prior to asset access, email our support team at <a href="mailto:support@elitetoolistic.com" style={{ color: 'var(--cyan-primary)' }}>support@elitetoolistic.com</a> with your transaction receipt. Approved refunds are processed to the original payment method within 5-7 business days.</p>
                  </div>
                </div>
              )}

              {tab === 'service-delivery' && (
                <div className="policy-body">
                  <h2>Service Delivery Policy</h2>
                  <p className="notice-box">
                    <strong>Instant Digital Delivery:</strong> All training programs, video masterclasses, and PDF manuals are delivered digitally through online platform access.
                  </p>

                  <div className="policy-block">
                    <h3>1. Digital Fulfillment</h3>
                    <p>Upon successful payment confirmation, learners receive immediate access credentials via email and on-screen workspace confirmation. Access remains active 24/7 during the enrollment period.</p>
                  </div>

                  <div className="policy-block">
                    <h3>2. Support Availability</h3>
                    <p>Counselor guidance and technical support are available via email at support@elitetoolistic.com and through our official helpline numbers during standard business hours.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
