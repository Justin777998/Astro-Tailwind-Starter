import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Eyßelheideweg 9, 38518 Gifhorn',
      link: 'https://goo.gl/maps/n4LhcfcFj4mc5nYg9',
      linkText: 'Auf Google Maps öffnen'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+49 170 528 3749',
      link: 'tel:+491705283749',
      linkText: 'Jetzt anrufen'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'tekinzgarage@gmx.de',
      link: 'mailto:tekinzgarage@gmx.de?subject=Allgemeine%20Anfrage',
      linkText: 'E-Mail senden'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header fade-up">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">
            Lassen Sie uns <br />
            <span className="title-highlight">in Kontakt treten</span>
          </h2>
          <p className="section-description">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="contact-card fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="contact-icon">
                <item.icon size={28} />
              </div>
              <h3 className="contact-title">{item.title}</h3>
              <p className="contact-content">{item.content}</p>
              <a 
                href={item.link} 
                target={item.icon === MapPin ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-link"
              >
                {item.linkText}
                <ArrowRight size={18} className="link-icon" />
              </a>
            </div>
          ))}
        </div>

        <div className="contact-cta fade-up">
          <h3 className="cta-title">Bereit für eine Premium-Behandlung?</h3>
          <p className="cta-description">
            Vereinbaren Sie jetzt einen Termin und erleben Sie 
            professionelle Autopflege auf höchstem Niveau.
          </p>
          <a href="tel:+491705283749" className="cta-button">
            Jetzt Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;