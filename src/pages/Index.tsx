
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../styles/main.css';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Page loader
    const timer = setTimeout(() => setLoaded(true), 600);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
        <div className="loader-spinner"></div>
        <span className="loader-text">Mark Design</span>
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <div className="about-footer-wrapper">
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
