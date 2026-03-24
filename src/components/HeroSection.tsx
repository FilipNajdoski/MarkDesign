
import React, { useMemo } from 'react';
import '../styles/hero.css';

import wallpaper1 from '../lib/wallpapers/1584.jpg';
import wallpaper2 from '../lib/wallpapers/2151008725.jpg';
import wallpaper3 from '../lib/wallpapers/23870.jpg';

const wallpapers = [wallpaper1, wallpaper2, wallpaper3];

const HeroSection = () => {
  const heroImage = useMemo(() => wallpapers[Math.floor(Math.random() * wallpapers.length)], []);

  const scrollToProjects = (event: React.MouseEvent) => {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView();
    }
  };

  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
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
