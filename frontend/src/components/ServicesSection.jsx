import React from 'react';
import { Sparkles, Droplets, Scissors, Shield, Wand2 } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Autoaufbereitung',
      description: 'Komplette Innen- und Außenreinigung für perfekte Sauberkeit',
      image: 'https://images.pexels.com/photos/29504461/pexels-photo-29504461.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Droplets,
      title: 'Autowachsen',
      description: 'Professionelle Versiegelung für langanhaltenden Glanz',
      image: 'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?w=800'
    },
    {
      icon: Scissors,
      title: 'Polieren',
      description: 'Hochglanzpolitur für ein makelloses Finish',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800'
    },
    {
      icon: Shield,
      title: 'Entfernen von Kratzern',
      description: 'Professionelle Beseitigung von Lackschäden',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800'
    },
    {
      icon: Wand2,
      title: 'Behandlung mit Reinigungsknete',
      description: 'Tiefenreinigung für eine glatte Oberfläche',
      image: 'https://images.unsplash.com/photo-1633014041037-f5446fb4ce99?w=800'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header fade-up">
          <span className="section-label">Unsere Leistungen</span>
          <h2 className="section-title">
            Premium Services <br />
            <span className="title-highlight">für Ihr Fahrzeug</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="service-icon">
                    <service.icon size={32} />
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;