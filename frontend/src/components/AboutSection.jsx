import React from 'react';
import { Sparkles, Award, Clock } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Perfektion',
      description: 'Liebe zum Detail bei jeder Behandlung'
    },
    {
      icon: Award,
      title: 'Erfahrung',
      description: 'Jahrelange Expertise in der Autopflege'
    },
    {
      icon: Clock,
      title: 'Zuverlässigkeit',
      description: 'Pünktlich und professionell'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content fade-up">
          <span className="section-label">Willkommen</span>
          <h2 className="section-title">
            Professionelle Autopflege <br />
            <span className="title-highlight">die begeistert</span>
          </h2>
          <p className="section-description">
            Bei Tekinz Garage verbinden wir Leidenschaft mit Expertise. 
            Jedes Fahrzeug erhält die individuelle Aufmerksamkeit, die es verdient. 
            Von der gründlichen Reinigung bis zur perfekten Politur – wir setzen 
            Maßstäbe in der professionellen Fahrzeugpflege.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;