import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Send email via Resend (recommended for Vercel)
    // You need to set RESEND_API_KEY in Vercel environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Storease Website <onboarding@resend.dev>',
        to: ['info@storease.ca'],
        subject: `New Contact Form: ${name} - ${service}`,
        reply_to: email,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided'}</p>
          <hr/>
          <p style="color: #999; font-size: 12px;">Sent from storease.ca contact form</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend error:', JSON.stringify(errorData));
      return NextResponse.json(
        { error: 'Failed to send email', details: errorData },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
