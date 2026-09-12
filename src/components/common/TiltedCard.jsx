import React, { useRef, useState } from 'react';
import './TiltedCard.css';

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '280px',
  containerWidth = '100%',
  rotateAmplitude = 12
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [captionPos, setCaptionPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`);
    setCaptionPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setCaptionPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className="tilted-card-container"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilted-card-wrapper" style={{ transform: transformStyle }}>
        <img src={imageSrc} alt={altText} className="tilted-card-image" />
        <div className="tilted-card-glow" />
      </div>

      {captionText && (
        <div
          className="tilted-card-tooltip"
          style={{
            left: `${captionPos.x}px`,
            top: `${captionPos.y}px`,
            opacity: captionPos.opacity
          }}
        >
          {captionText}
        </div>
      )}
    </div>
  );
}
