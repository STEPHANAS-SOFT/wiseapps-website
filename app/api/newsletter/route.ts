import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Notify admin of new subscriber
    await transporter.sendMail({
      from: `"WiseApps Dev Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `[NEWSLETTER] New subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #6366f1); padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">📬 New Newsletter Subscriber</h2>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <p style="color: #1e293b;"><strong>Email:</strong> ${email}</p>
            <p style="color: #64748b; font-size: 14px;">Subscribed at: ${new Date().toUTCString()}</p>
          </div>
        </div>
      `,
    });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"WiseApps Dev" <${process.env.GMAIL_USER}>`,
      to: email,
      replyTo: process.env.GMAIL_USER,
      subject: "You're subscribed to WiseApps Dev updates! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #6366f1); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 1.8rem;">Welcome to WiseApps Dev! 🎉</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #1e293b; font-size: 1.1rem;">You're now subscribed to updates from <strong>WiseApps Dev</strong>.</p>
            <p style="color: #475569; line-height: 1.7;">We'll notify you when we launch new apps, ship major updates, or have something exciting to share. We promise — no spam, ever.</p>
            <div style="margin: 28px 0;">
              <a href="https://wiseapps-website.vercel.app/apps" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #6366f1); color: white; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 600;">Browse Our Apps</a>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
            <p style="color: #94a3b8; font-size: 12px;">— WiseApps Dev Team · Minna, Nigeria<br>
            <a href="https://wiseapps-website.vercel.app" style="color: #0ea5e9;">wiseapps-website.vercel.app</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
