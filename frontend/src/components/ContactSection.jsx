import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section fade-in-section">
      <div className="section-container">
        <div className="section-divider"></div>
        <div className="section-content">
          <h2 className="section-title">Kontakt</h2>
          <div className="contact-info">
            <h3 className="contact-business-name">Tekinz Garage</h3>
            
            <a 
              href="https://goo.gl/maps/n4LhcfcFj4mc5nYg9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin className="contact-icon" size={20} />
              <div className="contact-text">
                <span>Eyßelheideweg 9</span>
                <span>38518 Gifhorn</span>
              </div>
            </a>

            <a href="tel:+491705283749" className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span className="contact-text">Mobil: +49 170 528 3749</span>
            </a>

            <a href="mailto:tekinzgarage@gmx.de?subject=Allgemeine%20Anfrage" className="contact-item">
              <Mail className="contact-icon" size={20} />
              <span className="contact-text">Email: tekinzgarage@gmx.de</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;