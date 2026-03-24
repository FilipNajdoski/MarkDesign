
import React from 'react';
import contactBg from '../lib/wallpapers/1584.jpg';
import '../styles/contact.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="contact-overlay"></div>
      <div className="container">
        <h2 className="section-title">Контактирајте Нѐ</h2>

        <div className="contact-container">
          <div className="contact-info">
            {/* <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-text">
                <h3>Адреса</h3>
                <p>ул. Партизански Одреди бр.123<br />1000 Скопје, Македонија</p>
              </div>
            </div> */}

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-text">
                <h3>Телефон</h3>
                <p>+389 77 970 164</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>Е-пошта</h3>
                <p>markdesignmk@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="contact-text">
                <h3>Работно Време</h3>
                <p>Понеделник - Петок: 08:00 - 19:00<br />Сабота: 10:00 - 14:00</p>
              </div>
            </div>
          <div className="contact-social">
              <h3>Следете Нѐ</h3>
              <div className="social-links">
                <a href="https://instagram.com/markdesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://facebook.com/markdesign" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
          </div>
          </div>


          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23589.518159543!2d21.39022803955078!3d41.996456800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a58c9aa2a5%3A0xb2ed88c260872020!2sSkopje%2C%20North%20Macedonia!5e0!3m2!1sen!2sus!4v1628700993852!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
