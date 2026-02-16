import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const images = [
    'https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?w=800',
    'https://images.unsplash.com/photo-1620584899131-a5ff5f8fbb03?w=800',
    'https://images.pexels.com/photos/20051462/pexels-photo-20051462.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/29504461/pexels-photo-29504461.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header fade-up">
          <span className="section-label">Unsere Arbeit</span>
          <h2 className="section-title">
            Qualität <span className="title-highlight">die überzeugt</span>
          </h2>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image} alt={`Galerie ${index + 1}`} className="gallery-image" />
              <div className="gallery-overlay">
                <div className="overlay-content">
                  <span className="overlay-text">Tekinz Garage</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;