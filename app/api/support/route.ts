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

    // Send via FormSubmit using multipart/form-data (more reliable for server-to-server)
    let emailSent = false;
    try {
      const formData = new FormData();
      formData.append('_subject', `[SUPPORT TICKET ${ticketId}] ${appName ? appName + ' - ' : ''}From ${name}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      formData.append('_replyto', email);
      formData.append('Ticket ID', ticketId);
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('App', appName || 'General Inquiry');
      formData.append('Message', message);
      formData.append('Submitted At', new Date().toUTCString());

      const fsRes = await fetch('https://formsubmit.co/wiseappsdev@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (fsRes.ok) {
        emailSent = true;
      } else {
        const text = await fsRes.text();
        console.error('FormSubmit support error response:', fsRes.status, text);
      }
    } catch (err) {
      console.error('Support FormSubmit fetch error:', err);
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
