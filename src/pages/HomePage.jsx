import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Star, Award, CheckCircle2, BookOpen, Target, Headphones } from 'lucide-react';
import TiltedCard from '../components/common/TiltedCard';
import MarathonGallery from '../components/common/MarathonGallery';
import './HomePage.css';

export default function HomePage({ onAddToCart }) {
  const ACHIEVERS = [
    { name: 'Ananya Sharma', cert: 'ASDAC || PSC || BIMAC', score: '82%' },
    { name: 'Vikram Singh', cert: 'IFRSC || CMAC || AFMC', score: '88%' },
    { name: 'Sandeep Yadav', cert: 'EMRC || CRE || AMSDAC', score: '80%' },
    { name: 'Suresh Kumar', cert: 'MPMC || QAMC || CENG', score: '90%' },
    { name: 'Rajesh Sharma', cert: 'PE || MRP || LSSGB', score: '80%' },
    { name: 'Ayesha Khan', cert: 'CQE || LSSBB || CPPS', score: '89%' },
    { name: 'Sunita Iyer', cert: 'SCMP || CPP || SPPC', score: '87%' },
    { name: 'Arvind Sharma', cert: 'EBMS || SGFO || PMP', score: '83%' },
    { name: 'Nadeem Khan', cert: 'CPIM || COM || PMP', score: '81%' },
    { name: 'Imran Shaikh', cert: 'CEAC || CQS || PCC', score: '84%' },
    { name: 'Arjun Patel', cert: 'CLCMC || ADRIP || LCDCI', score: '81%' },
    { name: 'Rohit Verma', cert: 'CBI || ACPC || CARM', score: '90%' }
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="section-tag">
              MoE STRATEGIC MoU RECOGNIZED &bull; NEP 2020 ALIGNED
            </span>
            <h1 className="hero-h1">
              Transform Your Future With <br />
              <span className="gradient-text">Recognized Vocational Mastery</span>
            </h1>
            <p className="hero-desc">
              <strong>ELITE TOOLISTIC (OPC) PRIVATE LIMITED</strong> delivers globally benchmarked, self-paced masterclasses designed to build real-world expertise, accelerate career advancement, and unlock international professional credentials.
            </p>
            <div className="hero-feature-pills">
              <span className="hero-pill">&check; 140+ Recognized Courses</span>
              <span className="hero-pill">&check; 100% Flexible Self-Paced Learning</span>
              <span className="hero-pill">&check; Verifiable Digital Certification</span>
            </div>
            <div className="hero-actions">
              <Link to="/courses" className="btn-primary hero-btn">
                <span>Explore All Courses</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Our Institutional Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="about-summary-section">
        <div className="container">
          <div className="about-card glass-card">
            <div className="about-grid">
              <div>
                <span className="section-tag">ABOUT US</span>
                <h2 className="section-title">
                  Accessible Growth for <span className="gradient-text">Everyone</span>
                </h2>
              </div>
              <div className="about-text-col">
                <p>
                  At <strong>ELITE TOOLISTIC (OPC) PRIVATE LIMITED</strong>, we believe that personal and professional growth should be accessible to everyone, anywhere, at any time. Our mission is to empower individuals to unlock their full potential through flexible, high-quality learning experiences tailored to their unique goals.
                </p>
                <p>
                  We provide a dynamic learning ecosystem where learners can identify their strengths, develop new skills, and confidently navigate their personal and professional journeys. From working professionals looking to upgrade their skills to aspirants seeking self-improvement, our programs are designed to meet diverse needs.
                </p>
                <Link to="/about" className="btn-secondary" style={{ marginTop: '1rem' }}>
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOPS SECTION */}
      <section className="workshops-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">1 / Choose your</span>
              <h2 className="section-title">Practical Workshops</h2>
            </div>
            <p className="section-subtitle">
              Learn practical, industry-relevant skills through online courses designed for global professionals.
            </p>
          </div>

          <div className="workshops-grid">
            <div className="workshop-item">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                altText="Self-Confidence Building Training"
                captionText="Self-Confidence Training"
                containerHeight="240px"
              />
              <div className="workshop-info">
                <span className="level-pill">Beginner</span>
                <h3>Self-Confidence Building Training</h3>
                <p>This program helps participants build confidence and overcome self-doubt through positive psychology, practical tools, and guided self-reflection.</p>
              </div>
            </div>

            <div className="workshop-item">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                altText="AI Productivity Power-Up"
                captionText="AI Productivity"
                containerHeight="240px"
              />
              <div className="workshop-info">
                <span className="level-pill">Intermediate</span>
                <h3>AI Productivity Power-Up</h3>
                <p>Automate your tedious tasks and save hours. Use AI as your personal assistant to work smarter and multiply your daily output.</p>
              </div>
            </div>

            <div className="workshop-item">
              <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                altText="Adaptive Leadership Training"
                captionText="Adaptive Leadership"
                containerHeight="240px"
              />
              <div className="workshop-info">
                <span className="level-pill">Beginner</span>
                <h3>Adaptive Leadership Training</h3>
                <p>This leadership program teaches participants to lead with adaptability, resilience, and innovation, using frameworks that inspire confidence.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/courses" className="btn-primary">
              <span>Explore All Workshops</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* MOST IN-DEMAND COURSES */}
      <section className="demand-courses-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">2 / Get Inspired by</span>
              <h2 className="section-title">Most In-Demand Courses</h2>
            </div>
            <p className="section-subtitle">
              These leading courses in different industries will help you to improve your skill set. Choose from options specifically designed for your career progression.
            </p>
          </div>

          <div className="demand-list">
            <div className="demand-row glass-card">
              <div className="demand-num">01</div>
              <div className="demand-body">
                <h3>AI Productivity Power-Up</h3>
                <p>Automate your tedious tasks and save hours. Use AI as your personal assistant to work smarter and multiply your daily output.</p>
              </div>
              <Link to="/course/ai-productivity-power-up" className="btn-secondary">View Pathway &rarr;</Link>
            </div>

            <div className="demand-row glass-card">
              <div className="demand-num">02</div>
              <div className="demand-body">
                <h3>Resilience Coach Training</h3>
                <p>Master the science of human endurance. Get certified to teach clients practical strategies for building mental toughness and sustainable resilience.</p>
              </div>
              <Link to="/course/resilience-coach-training" className="btn-secondary">View Pathway &rarr;</Link>
            </div>

            <div className="demand-row glass-card">
              <div className="demand-num">03</div>
              <div className="demand-body">
                <h3>Mindset Mastery Training</h3>
                <p>Gain mental clarity and emotional resilience to thrive. Master the specific strategies required to take full control of your mindset and unlock your true potential.</p>
              </div>
              <Link to="/course/mindset-mastery-training" className="btn-secondary">View Pathway &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GO FIGURES BENTO GRID */}
      <section className="figures-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Our Impact &amp; Reach</span>
            <h2 className="section-title">Go Figures</h2>
          </div>

          <div className="bento-grid">
            <div className="bento-card glass-card bento-large">
              <div className="bento-icon"><Globe size={32} className="icon-cyan" /></div>
              <div className="bento-stat">5</div>
              <div className="bento-lbl">Major Cities Across India</div>
              <p className="bento-desc">Establishing active corporate and academic learning hubs in New Delhi, Mumbai, Bangalore, Ahmedabad, and Shivaji Nagar to connect professionals nationally.</p>
            </div>

            <div className="bento-card glass-card">
              <div className="bento-icon"><Users size={32} className="icon-cyan" /></div>
              <div className="bento-stat">13,000+</div>
              <div className="bento-lbl">Global Customers</div>
              <p className="bento-desc">Empowering thousands of leaders, tech specialists, and career transitioners to thrive globally.</p>
            </div>

            <div className="bento-card glass-card">
              <div className="bento-icon"><Star size={32} className="icon-cyan" /></div>
              <div className="bento-stat">96%</div>
              <div className="bento-lbl">Satisfaction Rate</div>
              <p className="bento-desc">Backed by world-class curriculum design and outstanding student feedback worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">3 / Our Testimonials</span>
              <h2 className="section-title">Here to Tell Their Stories</h2>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testi-card glass-card">
              <p className="testi-quote">&ldquo;Before Elitetoolistic, my vision was cloudy. Now I have a clear, actionable roadmap and the confidence to execute it. Game-changer for my career!&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">K</div>
                <div>
                  <h4 className="testi-name">Kiara</h4>
                  <p className="testi-role">Operations Director</p>
                </div>
              </div>
            </div>

            <div className="testi-card glass-card">
              <p className="testi-quote">&ldquo;I finally broke through a major mental block. Elitetoolistic gave me the mindset shift I needed to stop procrastinating and start leading.&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">A</div>
                <div>
                  <h4 className="testi-name">Arjun</h4>
                  <p className="testi-role">Freelance Consultant</p>
                </div>
              </div>
            </div>

            <div className="testi-card glass-card">
              <p className="testi-quote">&ldquo;Simple, practical, and highly effective. Elitetoolistic distilled complex ideas into everyday steps. The best investment I’ve made in myself all year.&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">A</div>
                <div>
                  <h4 className="testi-name">Advait</h4>
                  <p className="testi-role">Small Business Owner</p>
                </div>
              </div>
            </div>

            <div className="testi-card glass-card">
              <p className="testi-quote">&ldquo;The systems I learned at Elitetoolistic immediately cut my wasted time in half. My team's productivity is up 30%. Worth every penny.&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">V</div>
                <div>
                  <h4 className="testi-name">Vivaan</h4>
                  <p className="testi-role">Senior Team Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 MEETINGS MARATHON */}
      <section className="marathon-home-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tag">4 / Ready for a Full Course?</span>
            <h2 className="section-title">10 Meetings Marathon</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Empower Your Learning with Elite. Master these comprehensive, globally-recognized training paths designed for in-depth professional advancement.
            </p>
          </div>
          <MarathonGallery />
        </div>
      </section>

      {/* WHAT WILL YOU ACHIEVE */}
      <section className="achieve-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">05 / What Will You Achieve</span>
            <h2 className="section-title">Core Learning Pillars</h2>
          </div>

          <div className="achieve-grid">
            <div className="achieve-card glass-card">
              <Globe size={36} className="icon-cyan" />
              <h3>Global Learning</h3>
              <p>Courses designed for a worldwide professional audience.</p>
            </div>
            <div className="achieve-card glass-card">
              <BookOpen size={36} className="icon-cyan" />
              <h3>Fully Online Courses</h3>
              <p>Study anytime, anywhere on your own schedule.</p>
            </div>
            <div className="achieve-card glass-card">
              <Target size={36} className="icon-cyan" />
              <h3>Industry-Relevant Skills</h3>
              <p>Learn execution tactics that top employers value.</p>
            </div>
            <div className="achieve-card glass-card">
              <Headphones size={36} className="icon-cyan" />
              <h3>Dedicated Support</h3>
              <p>Guidance and counselor assistance whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVERS TICKER */}
      <section className="achievers-ticker-section">
        <div className="container" style={{ marginBottom: '1.5rem' }}>
          <span className="section-tag">06 / Their Success, Our Success</span>
          <h2 className="section-title">Our Achievers</h2>
        </div>

        <div className="ticker-wrapper">
          <div className="ticker-content">
            {ACHIEVERS.concat(ACHIEVERS).map((st, idx) => (
              <div key={idx} className="achiever-chip glass-card">
                <div className="chip-avatar">{st.name.charAt(0)}</div>
                <div className="chip-name">{st.name}</div>
                <div className="chip-cert">{st.cert}</div>
                <div className="chip-score">Score: {st.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
