
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import '../styles/navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <Logo size="sm" color={isScrolled ? '#773F1A' : '#FFFDD0'} />
          <span className="navbar-logo-text">Mark Design</span>
        </a>

        <div className="navbar-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#hero">Почетна</a></li>
          <li><a href="#projects">Проекти</a></li>
          <li><a href="#about">За Нас</a></li>
          <li><a href="#contact">Контакт</a></li>
        </ul>
      </div>
    </nav>
  );
};
