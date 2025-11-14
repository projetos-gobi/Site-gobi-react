'use client';

import { useState } from 'react';
import Captcha from '../Captcha';
import PrivacyModal from '../PrivacyModal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    subject: '',
    privacyPolicy: false,
    allowsContact: false,
  });
  const [captchaValid, setCaptchaValid] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const companySizes = [
    { value: '', label: 'Quantidade de funcionários' },
    { value: '1-10', label: 'De 1 a 10 funcionários' },
    { value: '10-50', label: 'De 10 a 50 funcionários' },
    { value: '50-100', label: 'De 50 a 100 funcionários' },
    { value: '100-200', label: 'De 100 a 200 funcionários' },
    { value: '200+', label: 'Mais de 200 funcionários' },
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const showError = (message: string) => {
    if (typeof window !== 'undefined' && (window as any).Swal) {
      (window as any).Swal.fire({
        title: 'Atenção',
        text: message,
        icon: 'warning',
        confirmButtonText: 'Entendi',
        confirmButtonColor: '#4E48EB',
        customClass: {
          confirmButton: 'btn btn-info btn-swal',
        },
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação customizada com mensagens específicas
    if (!formData.name || formData.name.trim() === '') {
      showError('Por favor, preencha o campo "Nome completo".');
      return;
    }

    if (!formData.email || formData.email.trim() === '') {
      showError('Por favor, preencha o campo "Email corporativo".');
      return;
    }

    if (!validateEmail(formData.email)) {
      showError('Por favor, insira um email válido. Exemplo: seu.nome@empresa.com');
      return;
    }

    if (!formData.companyName || formData.companyName.trim() === '') {
      showError('Por favor, preencha o campo "Empresa".');
      return;
    }

    if (!formData.privacyPolicy) {
      showError('É necessário aceitar a Política de Privacidade para continuar.');
      return;
    }

    if (!captchaValid) {
      showError('Por favor, complete a verificação do CAPTCHA.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (typeof window !== 'undefined' && (window as any).Swal) {
        (window as any).Swal.fire({
          title: data.success ? 'Mensagem enviada!' : 'Ops, algo deu errado',
          text: data.message,
          icon: data.success ? 'success' : 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: data.success ? '#4E48EB' : '#dc3545',
          customClass: {
            confirmButton: 'btn btn-info btn-swal',
          },
        });
      }

      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          companySize: '',
          subject: '',
          privacyPolicy: false,
          allowsContact: false,
        });
        setCaptchaValid(false);
      }
    } catch (error) {
      if (typeof window !== 'undefined' && (window as any).Swal) {
        (window as any).Swal.fire({
          title: 'Erro ao enviar',
          text: 'Não foi possível enviar sua mensagem. Por favor, tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#dc3545',
          customClass: {
            confirmButton: 'btn btn-info btn-swal',
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section" id="contact-section">
        <h3 className="title">Qual seu desafio?</h3>
        <p>Nos contate.</p>

        <form onSubmit={handleSubmit} className="container mt-5" style={{ marginTop: '3rem' }} noValidate>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>
                Nome completo <span style={{ color: '#dc3545' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>
                Email corporativo <span style={{ color: '#dc3545' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="seu.nome@empresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>Celular</label>
              <input
                type="text"
                className="form-control"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 11) {
                    if (value.length <= 2) {
                      value = value;
                    } else if (value.length <= 7) {
                      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                    } else {
                      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                    }
                    setFormData({ ...formData, phone: value });
                  }
                }}
              />
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>
                Empresa <span style={{ color: '#dc3545' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome Fantasia da Empresa"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>Tamanho da Empresa</label>
              <select
                className="form-control"
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              >
                {companySizes.map((size) => (
                  <option key={size.value} value={size.value}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <label className="form-label" style={{ padding: 0 }}>Assunto</label>
              <textarea
                className="form-control"
                placeholder="Qual seu desafio?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="col-lg-12 mb-3" style={{ width: '100%', marginBottom: '1rem' }}>
              <Captcha onValidChange={setCaptchaValid} />
            </div>
          </div>

          <div className="row mt-4" style={{ marginTop: '1.5rem' }}>
            <div className="col-lg-12" style={{ width: '100%' }}>
              <button
                type="submit"
                className="btn btn-info btn-lg"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>

              <div className="form-check mt-2">
                <input
                  className="form-check-input bg-secondary"
                  type="checkbox"
                  id="PrivacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={(e) => setFormData({ ...formData, privacyPolicy: e.target.checked })}
                />
                <label className="form-check-label" htmlFor="PrivacyPolicy">
                  Eu concordo com os termos da{' '}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPrivacyModal(true);
                    }}
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    Política de Privacidade
                  </a>
                  .
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input bg-secondary"
                  type="checkbox"
                  id="AllowsContact"
                  checked={formData.allowsContact}
                  onChange={(e) => setFormData({ ...formData, allowsContact: e.target.checked })}
                />
                <label className="form-check-label" htmlFor="AllowsContact">
                  Permito que entrem em contato, caso necessário.
                </label>
              </div>
            </div>
          </div>
        </form>
      </section>

      {showPrivacyModal && (
        <PrivacyModal
          onClose={() => setShowPrivacyModal(false)}
          onAgree={() => {
            setFormData({ ...formData, privacyPolicy: true });
            setShowPrivacyModal(false);
          }}
        />
      )}
    </>
  );
}

