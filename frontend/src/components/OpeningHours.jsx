import React from 'react';
import { Clock } from 'lucide-react';
import './OpeningHours.css';

const OpeningHours = () => {
  const schedule = [
    { day: 'Montag - Freitag', hours: '08:00 - 17:00', isOpen: true },
    { day: 'Samstag', hours: 'geschlossen', isOpen: false },
    { day: 'Sonntag', hours: 'geschlossen', isOpen: false }
  ];

  return (
    <section className="opening-hours-section">
      <div className="hours-container">
        <div className="hours-content fade-up">
          <div className="hours-icon">
            <Clock size={48} />
          </div>
          <h2 className="hours-title">
            <span className="title-highlight">Öffnungszeiten</span>
          </h2>
          <div className="hours-list">
            {schedule.map((item, index) => (
              <div key={index} className="hours-item">
                <span className="hours-day">{item.day}</span>
                <span className="hours-divider"></span>
                <span className={`hours-time ${!item.isOpen ? 'closed' : ''}`}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;