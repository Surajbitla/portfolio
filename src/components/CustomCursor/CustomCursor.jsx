import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      const heroSection = document.querySelector('.hero');
      const heroRect = heroSection.getBoundingClientRect();
      const heroContent = document.querySelector('.hero-content');
      const isOverContent = e.target.closest('.hero-content');

      // Check if mouse is within hero section but not over content or navbar
      if (e.clientY >= heroRect.top && 
          e.clientY <= heroRect.bottom && 
          e.clientX >= heroRect.left && 
          e.clientX <= heroRect.right &&
          !e.target.closest('.navbar') &&
          !isOverContent) {
        setIsVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
      } else {
        setIsVisible(false);
      }
    };

    const onMouseOver = (e) => {
      if (e.target.closest('.navbar')) {
        setIsVisible(false);
        return;
      }
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-outline ${isPointer ? 'is-pointer' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
