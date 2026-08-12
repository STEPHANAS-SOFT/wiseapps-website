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
    const scopeLabel = deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal';

    // Send via FormSubmit using multipart/form-data (more reliable for server-to-server)
    let emailSent = false;
    try {
      const formData = new FormData();
      formData.append('_subject', `[DATA DELETION REQUEST] ${referenceId} - ${appName}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('_replyto', email);
      formData.append('Reference ID', referenceId);
      formData.append('App Name', appName);
      formData.append('User Email', email);
      formData.append('Deletion Scope', scopeLabel);
      formData.append('Submitted At', new Date().toUTCString());
      formData.append('Action Required', 'Verify user identity and remove records within 30 days per Google Play & Apple App Store policies.');

      const fsRes = await fetch('https://formsubmit.co/wiseappsdev@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (fsRes.ok) {
        emailSent = true;
      } else {
        const text = await fsRes.text();
        console.error('FormSubmit deletion error response:', fsRes.status, text);
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
