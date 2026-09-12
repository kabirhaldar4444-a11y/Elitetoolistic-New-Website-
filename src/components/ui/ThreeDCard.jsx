import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import "./ThreeDCard.css";

const MouseEnterContext = createContext([false, () => {}]);

export const CardContainer = ({ children, className = "", containerClassName = "" }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 16;
    const y = (e.clientY - top - height / 2) / 16;
    containerRef.current.style.transform = `rotateY(${x.toFixed(2)}deg) rotateX(${(-y).toFixed(2)}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`threed-card-wrapper ${containerClassName}`}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`threed-card-container-inner ${className}`}
          style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className = "" }) => {
  return (
    <div className={`threed-card-body ${className}`} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className = "",
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useContext(MouseEnterContext);

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
      ref.current.style.transition = "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      ref.current.style.transition = "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag ref={ref} className={`threed-card-item ${className}`} {...rest}>
      {children}
    </Tag>
  );
};
