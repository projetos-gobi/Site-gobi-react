import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, companyName, companySize, subject, privacyPolicy } = body;

    // Validation
    if (!name || !email || !companyName || !privacyPolicy) {
      return NextResponse.json(
        {
          success: false,
          message: 'Para prosseguir, é necessário preencher todos os campos obrigatórios e estar ciente da nossa Política de Privacidade.',
        },
        { status: 400 }
      );
    }

    const fromEmail = process.env.GMAIL_USER || 'gobi@gobi.consulting';
    const toEmail = process.env.GMAIL_USER || 'gobi@gobi.consulting';
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailPassword) {
      return NextResponse.json(
        {
          success: false,
          message: 'Configuração de email não encontrada. Entre em contato com o administrador.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: fromEmail,
        pass: gmailPassword,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #4E48EB;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background-color: #f9f9f9;
            padding: 30px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #4E48EB;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .value {
            font-size: 16px;
            color: #2F373B;
            margin-top: 5px;
          }
          .subject-box {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #4E48EB;
            margin-top: 10px;
            border-radius: 4px;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2 style="margin: 0;">Nova Mensagem do Site Gobi Consulting</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nome Completo</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Corporativo</div>
            <div class="value"><a href="mailto:${email}" style="color: #4E48EB;">${email}</a></div>
          </div>
          
          <div class="field">
            <div class="label">Celular</div>
            <div class="value">${phone || 'Não informado'}</div>
          </div>
          
          <div class="field">
            <div class="label">Empresa</div>
            <div class="value">${companyName}</div>
          </div>
          
          <div class="field">
            <div class="label">Tamanho da Empresa</div>
            <div class="value">${companySize || 'Não informado'}</div>
          </div>
          
          <div class="field">
            <div class="label">Assunto / Mensagem</div>
            <div class="subject-box">
              <div class="value">${subject || 'Não informado'}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>Esta mensagem foi enviada através do formulário de contato do site gobi.consulting</p>
            <p>Data: ${new Date().toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = htmlContent.replace(/<[^>]*>/g, '');

    await transporter.sendMail({
      from: `"Gobi Consulting" <${fromEmail}>`,
      to: toEmail,
      subject: 'Gobi Consulting - Site',
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Erro ao enviar mensagem',
      },
      { status: 500 }
    );
  }
}

