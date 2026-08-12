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

    // Send payload to Web3Forms free email dispatch handler
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6ee1a6ec-2e90-4e55-83e9-6fbfeb1d8ecb',
          subject: `[SUPPORT TICKET ${ticketId}] ${appName ? appName + ' - ' : ''}From ${name}`,
          from_name: `${name} via WiseApps Dev Website`,
          to_email: 'wiseappsdev@gmail.com',
          ticket_id: ticketId,
          user_name: name,
          user_email: email,
          app_selected: appName || 'General Inquiry',
          message: message,
          submitted_at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('Support email dispatch warning:', err);
    }

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Support message received successfully.',
    });
  } catch (error) {
    console.error('API Support Error:', error);
    return NextResponse.json(
      { error: 'Internal server error submitting message.' },
      { status: 500 }
    );
  }
}
