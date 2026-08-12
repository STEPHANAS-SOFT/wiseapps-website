import { NextResponse } from 'next/server';

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

    // Send payload to FormSubmit (dispatches directly to wiseappsdev@gmail.com)
    let emailSent = false;
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/wiseappsdev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://wiseapps-website.vercel.app',
          'Referer': 'https://wiseapps-website.vercel.app/data-deletion',
        },
        body: JSON.stringify({
          _subject: `[DATA DELETION REQUEST] ${referenceId} - ${appName}`,
          _template: 'table',
          _captcha: 'false',
          reference_id: referenceId,
          app_name: appName,
          user_email: email,
          deletion_scope: deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal',
          timestamp: new Date().toISOString(),
          message: `DATA DELETION REQUEST RECEIVED\n\nReference ID: ${referenceId}\nApp Name: ${appName}\nUser Email: ${email}\nScope: ${
            deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal'
          }\nTimestamp: ${new Date().toISOString()}\n\nPlease verify user identity and remove user records within 30 days in compliance with Google Play & Apple App Store rules.`,
        }),
      });

      const fsData = await fsRes.json();
      if (fsData.success === 'true' || fsData.success === true) {
        emailSent = true;
      }
    } catch (err) {
      console.error('FormSubmit dispatch error:', err);
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
