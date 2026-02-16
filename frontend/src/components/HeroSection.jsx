import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">Professionelle Autopflege</h2>
        <p className="hero-description">
          Wir bringen Ihr Fahrzeug zum Glänzen
        </p>
      </div>
    </section>
  );
};

export default HeroSection;