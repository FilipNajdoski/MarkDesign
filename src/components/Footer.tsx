
import React from 'react';
import Logo from './Logo';
import '../styles/footer.css';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo size="sm" color="#FFFDD0" />
            <h3>Марк Дизајн</h3>
            <p>Мајсторство во изработка на мебел од иверица, медијапан и елементи од дрво</p>
          </div>
          
          <div className="footer-links">
            <h4>Линкови</h4>
            <ul>
              <li><a href="#hero">Почетна</a></li>
              <li><a href="#projects">Проекти</a></li>
              <li><a href="#about">За Нас</a></li>
              <li><a href="#contact">Контакт</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Контакт</h4>
            {/* <p>
              <i className="icon-location">📍</i> ул. Партизански Одреди бр.123, Скопје
            </p> */}
            <p>
              <i className="icon-phone">📞</i> +389 77 970 164
            </p>
            <p>
              <i className="icon-email">✉️</i> markdesignmk@gmail.com
            </p>
          </div>
        <div className="contact-social">
              <div className="social-links">
                <a href="https://instagram.com/markdesignmk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com/profile.php?id=100087047577482" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
              </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Марк Дизајн. Сите права се задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
