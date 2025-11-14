'use client';

export default function PrivacyModal({ onClose, onAgree }: { onClose: () => void; onAgree: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Termos de Uso e Privacidade
        </h1>

        <div
          id="modal-termos"
          style={{
            fontFamily: 'Arial',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <h3>Introdução</h3>
              <p>Esta Declaração de Privacidade e Proteção de Dados Pessoais aplica-se a página específica do site <a href="https://gobi.consulting/">https://gobi.consulting/</a> designada como Gobi no canto superior esquerdo, que são referidas a seguir como "este website".</p>
              <p>A GOBI CONSULTING é uma empresa consciente da importância da privacidade e proteção de dados pessoais.</p>
              <p>Esta Declaração de Privacidade e Proteção de Dados Pessoais expressa nosso compromisso com o tratamento de seus dados pessoais de modo responsável, ético, em linha com nossos princípios e valores e, especialmente, de acordo com as regras da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - "LGPD" ) e demais legislações vigentes aplicáveis.</p>
              <p><strong>Ao utilizar este site, você concorda com o uso de suas informações como está descrito nesta Declaração de Privacidade e Proteção de Dados Pessoais.</strong></p>
              <p>Recomendamos que os visitantes revisem cada uma das declarações de privacidade e proteção de dados pessoais desse e de outros sites antes de divulgar qualquer informação pessoal.</p>
              <p>Se você tiver alguma dúvida sobre esta Declaração de Privacidade e Proteção de Dados Pessoais, entre em contato com o nosso Encarregado/DPO, através do endereço do e-mail dpo@gobi.consulting.</p>
              <p>Para mais informações, consulte nossa política completa de privacidade.</p>
            `,
          }}
        />

        <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
          <button
            onClick={onAgree}
            className="btn btn-secondary"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Estou de acordo
          </button>
        </div>
      </div>
    </div>
  );
}

