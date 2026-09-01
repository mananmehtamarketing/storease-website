import { NextResponse } from 'next/server';

// Where StorEase leads should go.
const PRIMARY_RECIPIENT = 'info@storease.ca';
// Safety net. Resend's shared sender (onboarding@resend.dev) will only deliver to the
// owner of whichever Resend account the API key belongs to. If the key in the
// environment is not StorEase's own account, the primary send is refused, and we must
// not lose the lead. So we retry to the fallback and flag it in the email body.
const FALLBACK_RECIPIENT = 'manan.mehta@marketincrew.com';

type Lead = {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

function buildHtml(lead: Lead, misroutedTo?: string) {
  const banner = misroutedTo
    ? `<p style="background:#FFF4D6;border:1px solid #F5A623;padding:12px;border-radius:8px;font-size:13px;">
         <strong>Delivery notice:</strong> this lead was meant for ${PRIMARY_RECIPIENT} but the
         Resend API key currently set on the site cannot send there, so it was routed to
         ${misroutedTo} instead. Update RESEND_API_KEY in Vercel to StorEase's own Resend key
         to restore direct delivery.
       </p>`
    : '';
  return `
          ${banner}
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Company:</strong> ${lead.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${lead.service}</p>
          <p><strong>Message:</strong></p>
          <p>${lead.message || 'No message provided'}</p>
          <hr/>
          <p style="color: #999; font-size: 12px;">Sent from storease.ca contact form</p>
        `;
}

async function send(apiKey: string, to: string, lead: Lead, misroutedTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: 'Storease Website <onboarding@resend.dev>',
      to: [to],
      subject: `New Contact Form: ${lead.name} - ${lead.service}`,
      reply_to: lead.email,
      html: buildHtml(lead, misroutedTo),
    }),
  });
  return res;
}

export async function POST(request: Request) {
  try {
    const lead: Lead = await request.json();

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Attempt 1: the client inbox.
    let res = await send(RESEND_API_KEY, PRIMARY_RECIPIENT, lead);
    if (res.ok) {
      return NextResponse.json({ success: true, deliveredTo: PRIMARY_RECIPIENT });
    }

    const firstError = await res.json().catch(() => ({}));
    console.error(
      'Resend refused primary recipient:',
      PRIMARY_RECIPIENT,
      JSON.stringify(firstError)
    );

    // Attempt 2: never drop the lead.
    res = await send(RESEND_API_KEY, FALLBACK_RECIPIENT, lead, FALLBACK_RECIPIENT);
    if (res.ok) {
      return NextResponse.json({
        success: true,
        deliveredTo: FALLBACK_RECIPIENT,
        note: 'primary recipient refused, delivered to fallback',
      });
    }

    const secondError = await res.json().catch(() => ({}));
    console.error('Resend error on fallback:', JSON.stringify(secondError));
    return NextResponse.json(
      { error: 'Failed to send email', details: secondError },
      { status: 500 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
