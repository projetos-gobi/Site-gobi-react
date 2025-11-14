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
      <p><strong>Nome completo:</strong> ${name}</p>
      <p><strong>Email corporativo:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${phone || 'Não informado'}</p>
      <p><strong>Empresa:</strong> ${companyName}</p>
      <p><strong>Tamanho da Empresa:</strong> ${companySize || 'Não informado'}</p>
      <p><strong>Assunto:</strong></p>
      <p>${subject || 'Não informado'}</p>
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

