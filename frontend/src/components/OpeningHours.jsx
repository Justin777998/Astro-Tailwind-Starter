import React from 'react';
import './OpeningHours.css';

const OpeningHours = () => {
  const hours = [
    { day: 'Montag - Freitag:', time: '08:00 - 17:00' },
    { day: 'Samstag:', time: 'geschlossen' },
    { day: 'Sonntag:', time: 'geschlossen' }
  ];

  return (
    <section className="opening-hours-section fade-in-section">
      <div className="section-container">
        <div className="section-divider"></div>
        <div className="section-content">
          <h2 className="section-title">Öffnungszeiten</h2>
          <div className="hours-list">
            {hours.map((item, index) => (
              <div key={index} className="hours-item">
                <span className="hours-day">{item.day}</span>
                <span className="hours-time">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;