import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Users, CheckCircle2 } from 'lucide-react';
import './TeamPage.css';

export default function TeamPage() {
  const CULTURE_STATS = [
    { num: '01', title: '10+ Years Experience', desc: 'Driven by seasoned professionals who bring years of industry expertise to every project.' },
    { num: '02', title: '50+ Global Programs', desc: 'Offering diverse certifications designed to meet global professional standards.' },
    { num: '03', title: '5,000+ Certified', desc: 'Empowering professionals across industries through impactful learning experiences.' },
    { num: '04', title: '100% Learner-Centric', desc: 'Every process and decision is built around enhancing learner satisfaction and success.' },
    { num: '05', title: 'Strong Network', desc: 'Collaborating with industry experts to ensure high-quality, result-oriented training delivery.' }
  ];

  const TEAM_MEMBERS = [
    {
      initial: 'I',
      name: 'Ishita Deshpande',
      role: 'Creative Director – Content & Media',
      grad: 'linear-gradient(135deg, #7b2d8b, #c44bc4)',
      bio: 'Ishita heads the creative vision at ELITE TOOLISTIC, crafting compelling brand stories and visually engaging course content. She brings together design, emotion, and clarity to transform complex learning into an immersive and enjoyable experience.'
    },
    {
      initial: 'K',
      name: 'Karan Nair',
      role: 'Head of Technology & Innovation',
      grad: 'linear-gradient(135deg, #1a1a3e, #3d5ad4)',
      bio: 'Karan leads the technical architecture behind ELITE TOOLISTIC, bringing deep expertise in software development and AI integration. He ensures the platform remains seamless, secure, and future-ready.'
    },
    {
      initial: 'N',
      name: 'Neha Sharma',
      role: 'Chief Learning Officer (CLO)',
      grad: 'linear-gradient(135deg, #2d6a4f, #52b788)',
      bio: 'Neha is a forward-thinking learning strategist with over a decade of experience in corporate training, academic design, and skill development. She spearheads the learning framework at ELITE TOOLISTIC.'
    },
    {
      initial: 'R',
      name: 'Rohan Nair',
      role: 'Head of Training',
      grad: 'linear-gradient(135deg, #c62828, #ef5350)',
      bio: 'Rohan oversees all training operations at ELITE TOOLISTIC, ensuring each program is delivered with precision. With over 14 years of experience in corporate training, he mentors both instructors and learners.'
    },
    {
      initial: 'K',
      name: 'Kavya Iyer',
      role: 'Head of Learner Success & Operations',
      grad: 'linear-gradient(135deg, #1565c0, #42a5f5)',
      bio: 'Kavya heads learner success at ELITE TOOLISTIC, combining compassion with operational excellence to ensure a smooth, guided, and fulfilling experience for every learner.'
    },
    {
      initial: 'A',
      name: 'Dr. Arjun Bhatia',
      role: 'Director – Training & Faculty Operations',
      grad: 'linear-gradient(135deg, #e65100, #ff9800)',
      bio: 'Dr. Arjun is a leadership coach and professional mentor who oversees faculty partnerships and training operations at ELITE TOOLISTIC, with over 13 years of experience upskilling professionals.'
    }
  ];

  return (
    <div className="team-page">
      {/* HERO */}
      <section className="team-hero">
        <div className="container">
          <span className="section-tag">Meet the Minds Behind ELITE TOOLISTIC</span>
          <h1 className="section-title">
            Our Culture: <br />
            <span className="gradient-text">Growth. Collaboration. Purpose.</span>
          </h1>
          <p className="section-subtitle">
            At ELITE TOOLISTIC, our culture blends innovation with empathy. We believe that a great team isn’t just built on skill — it’s built on shared values, integrity, and collaboration.
          </p>
        </div>
      </section>

      {/* CULTURE STATS */}
      <section className="culture-stats-section">
        <div className="container">
          <div className="culture-grid">
            {CULTURE_STATS.map((st) => (
              <div key={st.num} className="culture-card glass-card">
                <span className="culture-num">{st.num}</span>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Leadership &amp; Core Team</span>
            <h2 className="section-title">Guiding Your Upskilling Journey</h2>
          </div>

          <div className="team-members-grid">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="team-member-card glass-card">
                <div className="member-avatar" style={{ background: member.grad }}>
                  <span>{member.initial}</span>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN TEAM CTA */}
      <section className="careers-cta-section">
        <div className="container">
          <div className="careers-box glass-card">
            <h2 className="section-title">Join Our Team</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 2rem' }}>
              We're always looking for passionate educators, counselors, and innovators who want to make a difference in people's lives through transformative learning.
            </p>
            <Link to="/contact" className="btn-primary">
              <span>Apply Now</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
