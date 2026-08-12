import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

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
      // 1. Admin notification email (to wiseappsdev@gmail.com)
      await transporter.sendMail({
        from: `"Data Deletion via WiseApps Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `[DATA DELETION REQUEST] ${referenceId} — ${appName}`,
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
                <p style="color: #7f1d1d; margin: 8px 0 0;">Verify user identity and remove all associated records within <strong>30 days</strong> per Google Play Store and Apple App Store data deletion policies.</p>
              </div>
            </div>
          </div>
        `,
      });

      // 2. User confirmation email (to the person who submitted)
      await transporter.sendMail({
        from: `"WiseApps Dev Support" <${process.env.GMAIL_USER}>`,
        to: email,
        replyTo: process.env.GMAIL_USER,
        subject: `Data Deletion Request Received — ${referenceId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0ea5e9, #6366f1); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: white; margin: 0;">✅ Deletion Request Received</h2>
              <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">We've recorded your request and will process it promptly.</p>
            </div>
            <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
              <p style="color: #1e293b; font-size: 16px;">Hello,</p>
              <p style="color: #475569;">We have received your data deletion request for <strong>${appName}</strong>. Your request will be processed within <strong>30 days</strong> in accordance with Google Play Store and Apple App Store data policies.</p>
              <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 6px 0; color: #64748b; width: 160px;"><strong>Reference ID</strong></td><td style="padding: 6px 0; font-family: monospace; color: #0ea5e9;"><strong>${referenceId}</strong></td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;"><strong>App</strong></td><td style="padding: 6px 0;">${appName}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;"><strong>Scope</strong></td><td style="padding: 6px 0;">${scopeLabel}</td></tr>
                  <tr><td style="padding: 6px 0; color: #64748b;"><strong>Submitted</strong></td><td style="padding: 6px 0;">${new Date().toUTCString()}</td></tr>
                </table>
              </div>
              <p style="color: #475569;">Please keep your reference ID <strong>${referenceId}</strong> handy in case you need to follow up. You can reply to this email if you have any questions.</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">— WiseApps Dev Team<br>
              <a href="https://wiseapps-website.vercel.app" style="color: #0ea5e9;">wiseapps-website.vercel.app</a></p>
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
