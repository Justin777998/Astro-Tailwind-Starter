import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Beratung',
      description: 'Wir analysieren den Zustand Ihres Fahrzeugs und beraten Sie zu den optimalen Maßnahmen'
    },
    {
      number: '02',
      title: 'Vorbereitung',
      description: 'Sorgfältige Vorbereitung und Schutz aller sensiblen Bereiche vor der Behandlung'
    },
    {
      number: '03',
      title: 'Behandlung',
      description: 'Professionelle Durchführung mit Premium-Produkten und modernster Technik'
    },
    {
      number: '04',
      title: 'Finish',
      description: 'Finale Kontrolle und Detailarbeit für ein perfektes Ergebnis'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header fade-up">
          <span className="section-label">Unser Prozess</span>
          <h2 className="section-title">
            Perfektion <span className="title-highlight">Schritt für Schritt</span>
          </h2>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="process-step fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;