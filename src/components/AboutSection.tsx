
import React from 'react';
import '../styles/about.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://img.freepik.com/premium-photo/abstract-sketch-design-interior-kitchen-3d-rendering_256301-1778.jpg?w=740" 
              alt="Работилница за мебел" 
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title">За Нас</h2>
            <p>
              <strong>Марк Дизајн</strong> е компанија за дизајн и изработка на мебел со седиште во Скопје, Македонија. Веќе повеќе од 15 години, ние сме посветени на создавање на висококвалитетен мебел по мерка кој ги комбинира традиционалните занаетчиски вештини со современиот дизајн.
            </p>
            <p>
              Нашиот тим се состои од искусни дизајнери и занаетчии кои имаат страст за работа со дрво и создавање на функционални и естетски привлечни парчиња мебел. Секој проект го третираме со големо внимание и посветеност, обезбедувајќи дека крајниот резултат не само што ги задоволува, туку и ги надминува очекувањата на нашите клиенти.
            </p>
            <p>
              Специјализирани сме за изработка на кујни, плакари, трпезарии, спални соби, канцелариски мебел и други видови на мебел за домот и деловните простории. Користиме само висококвалитетни материјали и најсовремена технологија за да создадеме трајни и функционални решенија што ќе го издржат тестот на времето.
            </p>
            
            <div className="about-values">
              <div className="value-item">
                <h3>Квалитет</h3>
                <p>Посветени сме на највисок стандард на квалитет во секој аспект на нашата работа.</p>
              </div>
              
              <div className="value-item">
                <h3>Иновација</h3>
                <p>Постојано истражуваме нови дизајни и технологии за да останеме во чекор со модерните трендови.</p>
              </div>
              
              <div className="value-item">
                <h3>Задоволство на клиентите</h3>
                <p>Нашата крајна цел е да ги надминеме очекувањата на нашите клиенти со секој проект.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
