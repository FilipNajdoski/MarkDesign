
import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Марк Дизајн</h1>
        <p className="hero-subtitle">Мајсторство во изработка на мебел од дрво</p>
        <a href="#projects" className="hero-button">Погледни ги нашите проекти</a>
      </div>
    </section>
  );
};

export default HeroSection;
