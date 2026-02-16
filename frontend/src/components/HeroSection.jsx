import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div 
          className="hero-image"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-grain"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">Premium Car Detailing</div>
        <h1 className="hero-title">
          <span className="title-line">Perfektion</span>
          <span className="title-line title-accent">in jedem Detail</span>
        </h1>
        <p className="hero-subtitle">
          Professionelle Autopflege auf höchstem Niveau.
          <br />
          Ihr Fahrzeug verdient das Beste.
        </p>
        <button onClick={scrollToAbout} className="hero-cta">
          Unsere Leistungen entdecken
        </button>
      </div>

      <button onClick={scrollToAbout} className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </button>
    </section>
  );
};

export default HeroSection;