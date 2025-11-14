'use client';

const customersTop = [
  'alvean.png',
  'ambipar.png',
  'copersucar.png',
  'evolua-etanol.png',
  'ftd_educacao.png',
  'futebol-social.png',
  'ggn.png',
  'group-90.png',
];

const customersBottom = [
  'instituto-votorantim.png',
  'itau.png',
  'nortene.png',
  'nubank.png',
  'pedra-agroindustrial.png',
  'quebrando-barreiras.png',
  'solima.png',
  'taboa-horizontal.png',
];

export default function CustomersSection() {
  return (
    <>
      <div className="gradient"></div>
      <section className="section-customers section-customers--gradient">
        <div
          className="marquee marquee--top"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '268px',
          }}
        >
          <div
            style={{
              display: 'flex',
              animation: 'scroll-left 30s linear infinite',
              alignItems: 'center',
            }}
          >
            {[...customersTop, ...customersTop, ...customersTop].map((item, index) => (
              <div
                key={`top-${index}`}
                style={{
                  margin: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '148px',
                  width: '148px',
                  flexShrink: 0,
                }}
              >
                <img
                  src={`/images/logo-parceiros/${item}`}
                  alt="Parceiro"
                  style={{
                    maxWidth: '148px',
                    maxHeight: '148px',
                    width: 'auto',
                    height: 'auto',
                    opacity: 0.5,
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-customers">
        <div
          className="marquee marquee--bottom"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '268px',
          }}
        >
          <div
            style={{
              display: 'flex',
              animation: 'scroll-right 30s linear infinite',
              alignItems: 'center',
            }}
          >
            {[...customersBottom, ...customersBottom, ...customersBottom].map((item, index) => (
              <div
                key={`bottom-${index}`}
                style={{
                  margin: '0 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '148px',
                  width: '148px',
                  flexShrink: 0,
                }}
              >
                <img
                  src={`/images/logo-parceiros/${item}`}
                  alt="Parceiro"
                  style={{
                    maxWidth: '148px',
                    maxHeight: '148px',
                    width: 'auto',
                    height: 'auto',
                    opacity: 0.5,
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

