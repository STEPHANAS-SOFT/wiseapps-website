import { NextResponse } from 'next/server';

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

    // Send payload to FormSubmit (dispatches directly to wiseappsdev@gmail.com)
    let emailSent = false;
    try {
      const fsRes = await fetch('https://formsubmit.co/ajax/wiseappsdev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://wiseapps-website.vercel.app',
          'Referer': 'https://wiseapps-website.vercel.app/support',
        },
        body: JSON.stringify({
          _subject: `[SUPPORT TICKET ${ticketId}] ${appName ? appName + ' - ' : ''}From ${name}`,
          _template: 'table',
          _captcha: 'false',
          ticket_id: ticketId,
          user_name: name,
          user_email: email,
          app_selected: appName || 'General Inquiry',
          message: message,
          timestamp: new Date().toISOString(),
        }),
      });

      const fsData = await fsRes.json();
      if (fsData.success === 'true' || fsData.success === true) {
        emailSent = true;
      }
    } catch (err) {
      console.error('Support FormSubmit error:', err);
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
