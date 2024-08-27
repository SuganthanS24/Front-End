import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  'i1.jpg',
  'i2.jpg',
  'i3.jpg',
  'i4.jpg',
  'i5.png',
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Image ${index + 1}`}
            style={{ display: index === slideIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index ? 'active' : ''}`}
            onClick={() => setSlideIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
