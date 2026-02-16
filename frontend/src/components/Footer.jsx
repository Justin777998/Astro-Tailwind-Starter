import React from 'react';
import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
          aria-label="Instagram"
        >
          <div className="instagram-icon-wrapper">
            <Instagram size={32} className="instagram-icon" />
          </div>
        </a>
        
        <div className="footer-credits">
          <p className="credit-text">
            Icons made by <span className="credit-highlight">Pixel perfect</span> from{' '}
            <span className="credit-highlight">www.flaticon.com</span>
          </p>
        </div>

        <div className="footer-copyright">
          <p>© 2021 · Tekinz Garage</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;