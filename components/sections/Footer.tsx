'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="col-lg-4 mb-4" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%', marginBottom: '1.5rem' }}>
            <Image
              src="/images/gobi-branco.png"
              alt="Gobi Consulting"
              width={183}
              height={128}
            />
          </div>

          <div className="col-lg-4 mb-4" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%', marginBottom: '1.5rem' }}>
            <h4>Nossos contatos</h4>
            <ul>
              <li>
                <a href="mailto:gobi@gobi.consulting" target="_blank" title="Entre em contato">
                  gobi@gobi.consulting
                </a>
              </li>
              <li>R. Dr. Virgílio de Carvalho Pinto, 445 - Pinheiros, São Paulo - SP, 05415-030</li>
              <li>
                <a href="https://wa.me/5511991394449" target="_blank" title="WhatsApp Gobi Consulting">
                  WhatsApp: +55 11 99139-4449
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4" style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%' }}>
            <h4>Nos acompanhe nas Redes Sociais</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/gobi.consulting/" target="_blank" title="Instagram Gobi Consulting">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/gobintelligence/" target="_blank" title="LinkedIn Gobi Consulting">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4" style={{ marginTop: '1.5rem' }}>
          <div className="col-lg-12 text-center" style={{ width: '100%', textAlign: 'center' }}>
            <p>&copy; Gobi Consulting todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

