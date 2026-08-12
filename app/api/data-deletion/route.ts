import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { appName, email, deletionType } = body;

    if (!appName || !email) {
      return NextResponse.json(
        { error: 'App name and email are required.' },
        { status: 400 }
      );
    }

    const referenceId = 'WAD-DEL-' + Math.floor(100000 + Math.random() * 900000);
    const scopeLabel = deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal';

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
        subject: `[DATA DELETION REQUEST] ${referenceId} - ${appName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">🗑️ Data Deletion Request</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Reference ID: <strong>${referenceId}</strong></p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; width: 160px;"><strong>Reference ID</strong></td><td style="padding: 8px 0; font-family: monospace;">${referenceId}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>App Name</strong></td><td style="padding: 8px 0;">${appName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>User Email</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Deletion Scope</strong></td><td style="padding: 8px 0;">${scopeLabel}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b;"><strong>Submitted</strong></td><td style="padding: 8px 0;">${new Date().toUTCString()}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">
              <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 16px;">
                <p style="color: #dc2626; margin: 0; font-weight: bold;">⚠️ Action Required</p>
                <p style="color: #7f1d1d; margin: 8px 0 0;">Please verify the user's identity and remove all associated records within <strong>30 days</strong> in compliance with Google Play Store and Apple App Store data deletion policies.</p>
              </div>
            </div>
          </div>
        `,
      });

      emailSent = true;
    } catch (err) {
      console.error('Data deletion email send error:', err);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      emailSent,
      appName,
      email,
      deletionType,
      message: 'Data deletion request recorded and sent for processing.',
    });
  } catch (error) {
    console.error('API Data Deletion Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
