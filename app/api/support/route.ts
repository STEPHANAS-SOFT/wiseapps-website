import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, appName, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const ticketId = 'WAD-SUP-' + Math.floor(100000 + Math.random() * 900000);

    let emailSent = false;
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"WiseApps Dev Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `[SUPPORT TICKET ${ticketId}] ${appName ? appName + ' - ' : ''}From ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0ea5e9, #6366f1); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">📩 New Support Request</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Ticket ID: <strong>${ticketId}</strong></p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Name</strong></td><td style="padding: 8px 0;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>App</strong></td><td style="padding: 8px 0;">${appName || 'General Inquiry'}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Submitted</strong></td><td style="padding: 8px 0;">${new Date().toUTCString()}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">
              <p style="color: #64748b; margin: 0 0 8px;"><strong>Message:</strong></p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${message}</div>
              <p style="color: #94a3b8; font-size: 12px; margin: 16px 0 0;">Reply to this email to respond directly to the user.</p>
            </div>
          </div>
        `,
      });

      emailSent = true;
    } catch (err) {
      console.error('Support email send error:', err);
    }

    return NextResponse.json({
      success: true,
      ticketId,
      emailSent,
      name,
      email,
      appName,
      message,
    });
  } catch (error) {
    console.error('API Support Error:', error);
    return NextResponse.json(
      { error: 'Internal server error submitting message.' },
      { status: 500 }
    );
  }
}
