import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SliderAndCards.css'; // Create a new CSS file for combined styling

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

const Card = ({ href, className, title, subtitle }) => (
  <Link to={href} className={`card ${className}`}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </Link>
);

const Cards = () => (
  <div className="cards">
    <div className="card-group">
      <Card
        href="/form"
        className="form"
        title="I'd like to register"
        subtitle='"Admission form"'
      />
      <Card
        href="/qa"
        className="qa"
        title="I have a question"
        subtitle='"Kindly ask your queries"'
      />
      <Card
        href="/guided-tour"
        className="guided-tour"
        title="Show me around"
        subtitle="Explore Features"
      />
    </div>
    <div className="card-group">
      <Card
        href="/Visit-Robomiracle"
        className="facilities"
        title="What public facilities do you have"
        subtitle='"Amenities"'
      />
      <Card
        href="/weblinks"
        className="weblinks"
        title="Website Links"
        subtitle='"website"'
      />
      <Card
        href="https://robomiracle.com/"
        className="visit-robomiracle"
        title="I want to visit"
        subtitle='"Visit Robomiracle"'
      />
    </div>
  </div>
);

const SliderAndCards = () => (
  <div className="contain">
    <Slider />
    <Cards />
  </div>
);

export default SliderAndCards;
