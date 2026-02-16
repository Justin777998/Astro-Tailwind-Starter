import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="header-logo">
          <h1 className="logo-title">TEKINZ GARAGE</h1>
          <p className="logo-subtitle">Car Wash & Detailing</p>
        </div>
      </div>
    </header>
  );
};

export default Header;