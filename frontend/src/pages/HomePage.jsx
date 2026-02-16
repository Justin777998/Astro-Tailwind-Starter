import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import OpeningHours from '../components/OpeningHours';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <OpeningHours />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;