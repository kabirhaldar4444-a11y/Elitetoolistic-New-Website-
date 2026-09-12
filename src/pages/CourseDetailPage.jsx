import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, CheckCircle2, ShoppingBag, Award, Target, BookOpen } from 'lucide-react';
import { new100CoursesDetailMap, newCatalogCategories } from '../../api/new100CoursesData.js';
import { getCourseImageUrl } from '../utils/courseImageMap.js';
import './CourseDetailPage.css';

export default function CourseDetailPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const imageUrl = getCourseImageUrl(id);

  // Find course detail from detail map or fallback search in categories
  let courseDetail = new100CoursesDetailMap[id];

  if (!courseDetail) {
    // Fallback lookup in category list
    for (const cat of newCatalogCategories) {
      const found = cat.courses.find((c) => c.id === id);
      if (found) {
        courseDetail = {
          title: found.title,
          subtitle: `Accelerated vocational masterclass in ${found.title}`,
          price: found.price || found.maxPrice || 'INR 45,000/-',
          duration: found.duration || '20 Days Maximum (Self-Paced)',
          terms: 'Study materials and pre-recorded video lectures accessible online after registration and fee payment.',
          learningAreas: [
            `Core conceptual foundations and operational methodologies of ${found.title}`,
            'Hands-on application and real-world execution workflows without external dependencies',
            'Optimization strategies, error handling, and quality control systems',
            'Independent vocational competency development aligned with modern industry benchmarks'
          ],
          paragraphs: [
            `This independent training program is engineered to equip self-directed learners with high-impact vocational skillsets in ${found.title}. Designed for immediate practical deployment, students gain mastery over industry blueprints, operational checklists, and workflow acceleration frameworks.`,
            'Through structured video lectures and comprehensive PDF textbooks, participants learn to eliminate operational bottlenecks, verify quality standards, and master practical techniques aligned with global corporate requirements.'
          ],
          objectives: [
            `Master the technical and strategic principles of ${found.title}`,
            'Apply standardized industry blueprints to eliminate operational bottlenecks',
            'Develop independent self-directed capabilities to execute workflows with high precision'
          ],
          keyTopics: ['Technical Foundations', 'Operational Blueprints', 'Workflow Acceleration', 'Quality Control', 'Risk Mitigation'],
          targetAudience: [
            'Mid-to-senior corporate managers, operations analysts, and department heads',
            'Self-directed professionals seeking practical upskilling without heavy academic theory'
          ],
          prerequisites: [
            'None (100% Independent Vocational Skill Course)',
            'Basic digital literacy and computer/device with internet access'
          ],
          careerBenefits: [
            `Accelerate career trajectory and gain in-demand vocational expertise in ${found.title}`,
            'Acquire proven operational blueprints that deliver immediate business results',
            'Receive certificate of completion upon successful self-paced program conclusion'
          ]
        };
        break;
      }
    }
  }

  if (!courseDetail) {
    return (
      <div className="course-detail-page container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <h2>Course Not Found</h2>
        <p style={{ margin: '1rem 0' }}>The requested course ID could not be located in our catalog.</p>
        <Link to="/courses" className="btn-primary">Back to Catalog</Link>
      </div>
    );
  }

  const handleEnroll = () => {
    onAddToCart({
      id: id,
      title: courseDetail.title,
      price: courseDetail.price,
      duration: courseDetail.duration
    });
  };

  return (
    <div className="course-detail-page">
      <div className="container">
        {/* Back Link */}
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft size={16} /> Back to Courses
        </button>

        {/* HERO BANNER */}
        <div className="detail-hero glass-card">
          <div className="detail-hero-left">
            {imageUrl && (
              <div className="detail-hero-img-box">
                <img src={imageUrl} alt={courseDetail.title} className="detail-hero-img" />
              </div>
            )}
            <div className="detail-hero-content">
              <span className="section-tag">{courseDetail.categoryLabel || 'Self-Paced Professional Masterclass'}</span>
              <h1 className="detail-title">{courseDetail.title}</h1>
              <p className="detail-subtitle">{courseDetail.subtitle}</p>

              <div className="detail-meta-pills">
                <span className="meta-pill">
                  <Clock size={16} className="icon-cyan" />
                  {courseDetail.duration && courseDetail.duration.includes('Self-Paced') ? courseDetail.duration : `${courseDetail.duration || '30 hours'} (Self-Paced)`}
                </span>
                <span className="meta-pill">
                  <Award size={16} className="icon-cyan" />
                  Verified Certificate Included
                </span>
              </div>
            </div>
          </div>

          <div className="detail-pricing-box">
            <div className="pricing-header">
              <span className="price-label">Program Fee</span>
              <div className="price-value">{courseDetail.price}</div>
            </div>
            <p className="pricing-terms">{courseDetail.terms}</p>

            <button className="btn-primary enroll-action-btn" onClick={handleEnroll}>
              <ShoppingBag size={18} />
              <span>ENROLL NOW IN COURSE</span>
            </button>

            <div className="guarantee-note">
              <ShieldCheck size={16} className="icon-cyan" />
              <span>100% Online &amp; Self-Paced Access</span>
            </div>
          </div>
        </div>

        {/* MAIN DETAIL GRID */}
        <div className="detail-main-grid">
          <div className="detail-left-col">
            {/* LEARNING AREAS */}
            {courseDetail.learningAreas && courseDetail.learningAreas.length > 0 && (
              <div className="detail-section glass-card">
                <h3 className="section-subheading">
                  <Target className="icon-cyan" size={22} /> Core Learning Areas
                </h3>
                <ul className="check-list">
                  {courseDetail.learningAreas.map((area, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="icon-cyan" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DESCRIPTION */}
            {courseDetail.paragraphs && (
              <div className="detail-section glass-card">
                <h3 className="section-subheading">
                  <BookOpen className="icon-cyan" size={22} /> Course Overview
                </h3>
                {courseDetail.paragraphs.map((p, idx) => (
                  <p key={idx} className="overview-paragraph">{p}</p>
                ))}
              </div>
            )}

            {/* OBJECTIVES */}
            {courseDetail.objectives && (
              <div className="detail-section glass-card">
                <h3 className="section-subheading">
                  <Award className="icon-cyan" size={22} /> Key Objectives
                </h3>
                <ul className="check-list">
                  {courseDetail.objectives.map((obj, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="icon-cyan" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="detail-right-col">
            {/* KEY TOPICS */}
            {courseDetail.keyTopics && (
              <div className="sidebar-box glass-card">
                <h4>Key Topics Covered</h4>
                <div className="topics-pills">
                  {courseDetail.keyTopics.map((topic, idx) => (
                    <span key={idx} className="topic-pill">{topic}</span>
                  ))}
                </div>
              </div>
            )}

            {/* TARGET AUDIENCE */}
            {courseDetail.targetAudience && (
              <div className="sidebar-box glass-card">
                <h4>Target Audience</h4>
                <ul className="simple-list">
                  {courseDetail.targetAudience.map((aud, idx) => (
                    <li key={idx}>• {aud}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* PREREQUISITES */}
            {courseDetail.prerequisites && (
              <div className="sidebar-box glass-card">
                <h4>Prerequisites</h4>
                <ul className="simple-list">
                  {courseDetail.prerequisites.map((pre, idx) => (
                    <li key={idx}>• {pre}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CAREER BENEFITS */}
            {courseDetail.careerBenefits && (
              <div className="sidebar-box glass-card">
                <h4>Career Outcomes</h4>
                <ul className="simple-list">
                  {courseDetail.careerBenefits.map((ben, idx) => (
                    <li key={idx}>• {ben}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
