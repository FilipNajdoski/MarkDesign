
import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {

  const scrollToProjects = (event: React.MouseEvent) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView();
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Марк Дизајн</h1>
        <p className="hero-subtitle">Мајсторство во изработка на мебел од иверица, медијапан и елементи од дрво</p>
        <a href="#projects" className="hero-button" onClick={scrollToProjects}>
          Погледни ги нашите проекти
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
