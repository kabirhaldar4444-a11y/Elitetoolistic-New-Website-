import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Wrench, GraduationCap, CheckCircle2 } from 'lucide-react';
import './PersonaPage.css';

export default function PersonaPage() {
  const TESTIMONIALS = [
    { text: "“The counselling session helped me identify my goals, and the customized course fit perfectly. I feel more confident and focused now.”", name: "Jitrendra Rathor", role: "Marketing Professional" },
    { text: "“Persona worked around my schedule and learning pace. The personalized plan helped me sharpen my communication and leadership skills.”", name: "Lokesh Sharma", role: "Project Coordinator" },
    { text: "“A course completely around my needs. The mentoring and guidance were exceptional — highly recommended!”", name: "Narayan Prajapati", role: "Business Consultant" }
  ];

  const ROADMAP = [
    { num: '01', title: 'Personal Counselling Session', desc: 'Begin with a one-on-one session with our learning counsellors to discuss your background, experience, and ambitions.' },
    { num: '02', title: 'Customized Course Design', desc: 'Our team curates a course pathway tailored to your goals — blending relevant certifications, study materials, and timelines.' },
    { num: '03', title: 'Flexible Learning Delivery', desc: 'Get access to recorded study materials, on-demand support, and self-paced assessments — ensuring flexibility without compromising quality.' },
    { num: '04', title: 'Continuous Guidance', desc: 'From enrollment to certification, our mentors stay connected with you to track your progress and fine-tune your learning plan.' }
  ];

  return (
    <div className="persona-page">
      {/* HERO */}
      <section className="persona-hero">
        <div className="container">
          <span className="section-tag">Get a Quote for Your "Persona" Now</span>
          <h1 className="section-title">
            Persona: <br />
            <span className="gradient-text">Your Learning, Personalized.</span>
          </h1>
          <p className="section-subtitle">
            At ELITE TOOLISTIC, we understand that no two learners are the same. Everyone’s career goals, background, and learning pace differ.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-primary">
              <span>CONTACT US NOW</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTES GRID */}
      <section className="persona-quotes-section">
        <div className="container">
          <div className="quotes-grid">
            {TESTIMONIALS.map((q, idx) => (
              <div key={idx} className="quote-card glass-card">
                <p className="quote-text">{q.text}</p>
                <div className="quote-author">{q.name}</div>
                <div className="quote-role">{q.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS PERSONA DARK PANEL */}
      <section className="persona-panel-section">
        <div className="container">
          <div className="persona-panel-box glass-card">
            <span className="section-tag">What is Persona?</span>
            <h2 className="panel-title">
              Persona is more than a service — <span className="gradient-text">it’s our promise to deliver training that fits you.</span>
            </h2>
            <p className="panel-desc">
              Through a one-on-one counselling session, our experts understand your profile, professional objectives, and areas of improvement. Based on this, we design a customized course structure, selecting only the modules and certifications that are truly relevant to your growth.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PERSONA */}
      <section className="why-persona-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Choose Persona?</h2>
          </div>

          <div className="persona-features-grid">
            <div className="pf-card glass-card">
              <Target size={36} className="icon-cyan" />
              <h3>Goal-Aligned Learning</h3>
              <p>Focus only on what matters for your career growth. No wasted hours on modules that don't fit your path.</p>
            </div>
            <div className="pf-card glass-card">
              <Users size={36} className="icon-cyan" />
              <h3>Personal Counsellor Support</h3>
              <p>Dedicated guidance throughout your journey. Get continuous encouragement and support whenever you need it.</p>
            </div>
            <div className="pf-card glass-card">
              <Wrench size={36} className="icon-cyan" />
              <h3>Custom-Crafted Curriculum</h3>
              <p>Designed uniquely for each learner. Align study schedules and certification tracks perfectly to your style.</p>
            </div>
            <div className="pf-card glass-card">
              <GraduationCap size={36} className="icon-cyan" />
              <h3>Future-Ready Certification</h3>
              <p>Get certified for skills that open real opportunities. Enhance your professional credibility globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">How It Works?</span>
            <h2 className="section-title">Your Personalized Roadmap</h2>
          </div>

          <div className="roadmap-list">
            {ROADMAP.map((step) => (
              <div key={step.num} className="roadmap-item glass-card">
                <div className="roadmap-num">{step.num}</div>
                <div className="roadmap-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
