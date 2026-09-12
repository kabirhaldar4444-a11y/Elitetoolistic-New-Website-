import React from 'react';
import { Link } from 'react-router-dom'; // Note: check routing import name below
import { Target, Eye, Globe, Shield, Award, Users, FileCheck, CheckCircle2, Sparkles, ArrowRight, BookOpen, Compass, Building2 } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag">
              <Sparkles size={14} className="icon-sparkle" /> Official Institutional Profile
            </span>
            <h1 className="section-title">
              Empowering Minds Through <br />
              <span className="gradient-text">Vocational Mastery &amp; Industry Skill</span>
            </h1>
            <p className="section-subtitle">
              ELITE TOOLISTIC (OPC) PRIVATE LIMITED is a leading educational and vocational technology organization dedicated to delivering high-impact, self-paced masterclasses designed in alignment with national and global standards.
            </p>
            <div className="about-hero-badges">
              <div className="hero-badge-pill">
                <CheckCircle2 size={16} className="text-emerald" /> MoE Strategic MoU Collaboration
              </div>
              <div className="hero-badge-pill">
                <CheckCircle2 size={16} className="text-emerald" /> NEP 2020 Skill Alignment
              </div>
              <div className="hero-badge-pill">
                <CheckCircle2 size={16} className="text-emerald" /> 100+ Recognized Masterclasses
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRY OF EDUCATION COLLABORATION HIGHLIGHT */}
      <section className="mou-highlight-section">
        <div className="container">
          <div className="mou-highlight-card glass-card">
            <div className="mou-card-left">
              <div className="mou-icon-wrapper">
                <FileCheck size={42} className="mou-icon" />
              </div>
              <div>
                <span className="mou-badge">Strategic Milestone</span>
                <h3 className="mou-title">Recognized by the Ministry of Education (MoE) Innovation Cell</h3>
                <p className="mou-desc">
                  ELITE TOOLISTIC (OPC) PRIVATE LIMITED operates under strategic academic commitments aligning with National Education Policy (NEP 2020) goals to foster innovation, entrepreneurship, and industry-ready vocational competence across India.
                </p>
              </div>
            </div>
            <div className="mou-card-right">
              <Link to="/viewmou" className="btn-primary mou-btn">
                <span>View Official MoU Certificate</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="stat-card glass-card">
              <h3 className="stat-number">100+</h3>
              <p className="stat-label">Vocational Programs</p>
            </div>
            <div className="stat-card glass-card">
              <h3 className="stat-number">5</h3>
              <p className="stat-label">National Operational Hubs</p>
            </div>
            <div className="stat-card glass-card">
              <h3 className="stat-number">98.5%</h3>
              <p className="stat-label">Learner Satisfaction</p>
            </div>
            <div className="stat-card glass-card">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Verification &amp; Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-card">
              <div className="mv-card-header">
                <Target size={36} className="icon-cyan" />
                <h2>Our Mission</h2>
              </div>
              <p>
                At ELITE TOOLISTIC (OPC) PRIVATE LIMITED, our mission is to democratize vocational and technological education. We empower learners to unlock their highest potential through flexible, structured, high-quality courseware that translates theoretical foundations into actionable workplace skills.
              </p>
            </div>

            <div className="mv-card glass-card">
              <div className="mv-card-header">
                <Eye size={36} className="icon-cyan" />
                <h2>Our Vision</h2>
              </div>
              <p>
                To cultivate an inclusive national ecosystem where students and professionals from all backgrounds can acquire in-demand competencies, receive verifiable certifications, and confidently advance their career trajectories in a rapidly evolving market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE LEARNING PILLARS */}
      <section className="pillars-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Educational Philosophy</span>
            <h2 className="section-title">The Four Pillars of Elite Toolistic</h2>
            <p className="section-subtitle">
              Engineered to ensure every learner achieves measurable practical mastery and industry relevance.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card glass-card">
              <div className="pillar-num">01</div>
              <BookOpen size={28} className="pillar-icon" />
              <h3>Comprehensive Curriculum</h3>
              <p>Curated by domain experts spanning Artificial Intelligence, Civil Engineering, Operations Management, and Modern Logistics.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">02</div>
              <Compass size={28} className="pillar-icon" />
              <h3>Self-Paced Mastery</h3>
              <p>Structured video lectures and downloadable study guides allowing learners to study at their own pace without compromising current work.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">03</div>
              <Award size={28} className="pillar-icon" />
              <h3>Verifiable Certification</h3>
              <p>Instant digital certificate issuance with online QR validation to share with top employers and global institutions.</p>
            </div>

            <div className="pillar-card glass-card">
              <div className="pillar-num">04</div>
              <Building2 size={28} className="pillar-icon" />
              <h3>Corporate &amp; Academic Support</h3>
              <p>Dedicated student helpdesk offering enrollment guidance, invoice generation, and portal assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL HUBS */}
      <section className="hubs-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Pan-India Footprint</span>
            <h2 className="section-title">Operational Hubs Across India</h2>
            <p className="section-subtitle">
              Delivering regional corporate partnerships and academic support across strategic economic centers.
            </p>
          </div>

          <div className="hubs-grid">
            {[
              { name: 'New Delhi', role: 'Northern Corporate Operations & Governance' },
              { name: 'Mumbai', role: 'Western Enterprise & Finance Hub' },
              { name: 'Bangalore', role: 'Southern Tech & Innovation Center' },
              { name: 'Ahmedabad', role: 'Industrial & Vocational Learning Center' },
              { name: 'Shivaji Nagar', role: 'Academic Outreach & Student Center' }
            ].map((hub, idx) => (
              <div key={idx} className="hub-card glass-card">
                <Globe size={28} className="hub-icon" />
                <h3>{hub.name}</h3>
                <p>{hub.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card glass-card">
            <h2>Ready to Transform Your Professional Future?</h2>
            <p>Explore our catalog of 100+ recognized vocational courses or reach out to our admissions support team.</p>
            <div className="cta-actions-row">
              <Link to="/courses" className="btn-primary">
                <span>Browse All Courses</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                <span>Contact Academic Desk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
