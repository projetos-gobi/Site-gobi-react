'use client';

import { useEffect } from 'react';

export default function AboutSection() {
  useEffect(() => {
    // Smooth scroll animation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('anchor-animation')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <section className="about-section">
      <div className="container about-section--first">
        <div className="row about-section--first" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="col-lg-8" style={{ flex: '0 0 66.666667%', maxWidth: '66.666667%', width: '100%' }}>
            <h1>
              Somos uma consultoria que impulsiona <br className="d-none d-md-block" /> transformações com estratégia e inovação.
            </h1>
          </div>
          <div className="col-lg-4 d-none d-lg-block" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%', position: 'relative' }}>
            <img
              src="/images/enfeite_01.png"
              alt="Gobi Consulting"
              className="about-section-img"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>

      <div className="container about-section--last">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="col-lg-6" style={{ flex: '0 0 50%', maxWidth: '50%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4>
              Transformar negócios é o que nos move.
              E isso exige <span className="text-color-blue-700">visão, método e execução.</span>
            </h4>

            <p style={{ marginBottom: '12px' }}>
              Na Gobi, guiamos essa jornada em três dimensões que se complementam: estratégia para inovar, diagnóstico para otimizar e soluções digitais para escalar.
            </p>
            <p style={{ marginBottom: '12px' }}>
              É assim que geramos resultados reais e entregas consistentes, com foco no que mais importa: o seu negócio.
            </p>
            <p style={{ marginBottom: '40px' }}>
              Vamos transformar juntos?
            </p>

            <a href="#contact-section" className="btn btn-info btn-lg anchor-animation" title="Fale com um Especialista">
              Fale com um Especialista
            </a>
          </div>
          <div className="col-lg-6 d-none d-lg-flex" style={{ flex: '0 0 50%', maxWidth: '50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <img
              src="/images/logo.gif"
              alt="Uma imagem monocromática de um quadrado com dois círculos."
              className="about-section-gif"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

