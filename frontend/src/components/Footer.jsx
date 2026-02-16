import React from 'react';
import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">TEKINZ</span>
              <span className="logo-accent">GARAGE</span>
            </div>
            <p className="footer-tagline">
              Premium Car Detailing & Care
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="column-title">Kontakt</h4>
              <ul className="link-list">
                <li>Eyßelheideweg 9</li>
                <li>38518 Gifhorn</li>
                <li>+49 170 528 3749</li>
                <li>tekinzgarage@gmx.de</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="column-title">Öffnungszeiten</h4>
              <ul className="link-list">
                <li>Mo-Fr: 08:00 - 17:00</li>
                <li>Sa: geschlossen</li>
                <li>So: geschlossen</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="column-title">Folgen Sie uns</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/tekinzgarage" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Tekinz Garage. Alle Rechte vorbehalten.
          </p>
          <p className="credits">
            Made with <span className="heart">♥</span> in Germany
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;