import React from 'react';
import { CheckSquare } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    { name: 'Autoaufbereitung', image: 'https://images.pexels.com/photos/29504461/pexels-photo-29504461.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { name: 'Autowachsen', image: 'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?w=800' },
    { name: 'Polieren', image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800' },
    { name: 'Entfernen von Kratzern', image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800' },
    { name: 'Behandlung mit Reinigungsknete', image: 'https://images.unsplash.com/photo-1633014041037-f5446fb4ce99?w=800' }
  ];

  return (
    <section className="services-section fade-in-section">
      <div className="section-container">
        <div className="section-divider"></div>
        <div className="section-content">
          <h2 className="section-title">Leistungen</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <CheckSquare className="service-icon" size={24} />
                  <span className="service-name">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;