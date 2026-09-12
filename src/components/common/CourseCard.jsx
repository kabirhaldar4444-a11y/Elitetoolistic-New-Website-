import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import { getCourseImageUrl } from '../../utils/courseImageMap.js';
import { CardContainer, CardBody, CardItem } from '../ui/ThreeDCard';
import './CourseCard.css';

export default function CourseCard({ course, onAddToCart }) {
  const { id, title, price, duration, category } = course;
  const imageUrl = getCourseImageUrl(id);

  return (
    <CardContainer className="course-card-3d-wrapper">
      <CardBody className="course-card-body glass-card">
        {/* CLEAN COURSE IMAGE (NO BADGE OVERLAY!) */}
        {imageUrl && (
          <CardItem translateZ="70" className="card-item-image">
            <img src={imageUrl} alt={title} className="course-card-img" loading="lazy" />
          </CardItem>
        )}

        <div className="card-item-details">
          <CardItem translateZ="40" className="course-card-top">
            {category && <span className="category-pill">{category}</span>}
            {duration && (
              <span className="duration-pill">
                <Clock size={13} />
                {duration}
              </span>
            )}
          </CardItem>

          <CardItem translateZ="55" as="h3" className="course-card-title">
            {title}
          </CardItem>

          <CardItem translateZ="35" className="course-card-bottom">
            <div className="price-tag">
              <span className="price-label">FEE</span>
              <span className="price-val">{price}</span>
            </div>

            <div className="card-actions">
              <button
                className="btn-secondary card-cart-btn"
                onClick={() => onAddToCart(course)}
                title="Add to Cart"
              >
                <ShoppingBag size={16} />
              </button>
              <Link to={`/course/${id}`} className="btn-primary card-detail-btn">
                <span>Details</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
