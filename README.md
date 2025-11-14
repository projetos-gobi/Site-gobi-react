# Gobi Consulting - Site React

Site institucional da Gobi Consulting desenvolvido em Next.js/React e hospedado na Vercel.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Nodemailer** - Envio de e-mails via Gmail SMTP
- **Vercel** - Hospedagem

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta Google Workspace (gobi@gobi.consulting)

## 🔧 Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione suas credenciais do Gmail:
```
GMAIL_USER=gobi@gobi.consulting
GMAIL_APP_PASSWORD=sua_senha_de_app_do_gmail
```

**Como obter a senha de app do Gmail:**
1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione "Email" e "Outro (nome personalizado)"
3. Digite "Gobi Site" e clique em "Gerar"
4. Copie a senha gerada (16 caracteres) e cole no `.env.local`

## 🏃 Executar Localmente

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 📦 Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente na Vercel:
   - `SEND_GRID_API_KEY`
   - `SEND_GRID_FROM`
3. Deploy automático a cada push!

## 📁 Estrutura

```
gobi-consulting-react/
├── app/
│   ├── api/contact/     # API route para formulário
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Página inicial
│   └── globals.css       # Estilos globais
├── components/
│   ├── sections/         # Componentes de seções
│   ├── Captcha.tsx       # Componente CAPTCHA
│   └── PrivacyModal.tsx  # Modal de privacidade
└── public/               # Arquivos estáticos
```

## 🎨 Componentes

- **Hero** - Seção hero com vídeo/animação
- **AboutSection** - Sobre a empresa
- **ServicesSection** - Serviços oferecidos
- **ContactSection** - Formulário de contato
- **CustomersSection** - Logos de parceiros
- **Footer** - Rodapé com informações

## 📧 Formulário de Contato

O formulário envia e-mails via Gmail SMTP. Configure as variáveis de ambiente (Gmail App Password) antes de usar.

## 🌐 Domínio Customizado

Configure o domínio `gobi.consulting` na Vercel:
1. Vá em Settings → Domains
2. Adicione `gobi.consulting` e `www.gobi.consulting`
3. Configure os registros DNS conforme instruções da Vercel

## 📝 Licença

Este projeto é propriedade da Gobi Consulting.
