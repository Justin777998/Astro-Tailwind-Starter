import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome-section fade-in-section">
      <div className="section-container">
        <div className="section-divider"></div>
        <div className="section-content">
          <h2 className="section-title">Willkommen!</h2>
          <div className="badge">
            <span className="badge-text">Diese Seite ist noch im Entwurf.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;