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

    // Send payload to Web3Forms free email dispatch service (notifying wiseappsdev@gmail.com)
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6ee1a6ec-2e90-4e55-83e9-6fbfeb1d8ecb', // Web3Forms public handler
          subject: `[DATA DELETION REQUEST] ${referenceId} - ${appName}`,
          from_name: 'WiseApps Dev Data Deletion Portal',
          to_email: 'wiseappsdev@gmail.com',
          reference_id: referenceId,
          app_name: appName,
          user_email: email,
          deletion_scope: deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal',
          submitted_at: new Date().toISOString(),
          message: `DATA DELETION REQUEST RECEIVED\n\nReference ID: ${referenceId}\nApp Name: ${appName}\nUser Email: ${email}\nScope: ${
            deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal'
          }\nTimestamp: ${new Date().toISOString()}\n\nPlease verify user identity and remove user records within 30 days in compliance with Google Play & Apple App Store rules.`,
        }),
      });
    } catch (err) {
      console.error('Web3Forms dispatch notification warning:', err);
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Data deletion request recorded and sent for processing.',
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing request.' },
      { status: 500 }
    );
  }
}
