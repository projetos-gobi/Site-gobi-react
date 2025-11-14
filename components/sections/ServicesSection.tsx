'use client';

import Image from 'next/image';

const services = [
  {
    image: '/images/service-01.png',
    title: 'Inovação. Novas Ideias. <br/> Novos Negócios.',
    description: 'A transformação do seu negócio necessariamente parte da sua <strong>estratégia.</strong>',
    topics: [
      'Conceituação e desenho de produtos e serviços;',
      'Modelos de negócios e estratégias go-to-market;',
      'Planos para transformação digital;',
      'Modelos operacionais e visão de futuro.',
    ],
  },
  {
    image: '/images/service-02.png',
    title: 'Diagnósticos. Otimização e <br/> Eficiência.',
    description: 'Garantir a melhor solução aos desafios com resultados <strong>simples e rápidos.</strong>',
    topics: [
      'Diagnóstico da transformação digital;',
      'Otimização de processos;',
      'Roadmap e planejamento para implementação;',
      'Gestão de programas e projetos.',
    ],
  },
  {
    image: '/images/service-03.png',
    title: 'Soluções Digitais. <br/> Mobilidade.',
    description: 'Metodologias ágeis e entregas contínuas em <strong>plataformas e linguagens diversas.</strong>',
    topics: [
      'Soluções customizadas (Web e Apps);',
      'Desenvolvimento nas principais linguagens de programação;',
      'RPA - Robotic Process Automation.',
    ],
  },
];

export default function ServicesSection() {
  return (
    <>
      <div className="gradient-top"></div>
      <section className="services-section">
        <h3 className="title">Serviços</h3>

        <div className="container">
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {services.map((service, index) => (
              <div key={index} className="col-lg-4" style={{ flex: '0 0 calc(33.333333% - 14px)', maxWidth: 'calc(33.333333% - 14px)', minWidth: '300px' }}>
                <div className="services-card">
                  <div className="services-card-image">
                    <Image
                      src={service.image}
                      alt="Gobi Vision"
                      width={98}
                      height={98}
                    />
                  </div>

                  <h3 dangerouslySetInnerHTML={{ __html: service.title }} />

                  <p dangerouslySetInnerHTML={{ __html: service.description }} />

                  <ul>
                    {service.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>• {topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="gradient-bottom"></div>
    </>
  );
}

