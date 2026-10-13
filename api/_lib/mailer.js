import nodemailer from 'nodemailer';

let transport;

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function getTransport() {
  if (transport) return transport;
  const port = Number(process.env.SMTP_PORT || 465);
  transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  return transport;
}

/**
 * Never throws. Returns { sent: true } or { sent: false, reason } so callers can degrade gracefully
 * (the order is still saved and the customer still sees a thank-you page).
 */
export async function sendMail({ to, subject, html, text, replyTo, attachments }) {
  if (!isMailConfigured()) return { sent: false, reason: 'not-configured' };
  try {
    await getTransport().sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject,
      html,
      text,
      replyTo,
      attachments
    });
    return { sent: true };
  } catch (err) {
    console.error('sendMail failed:', err && err.message);
    return { sent: false, reason: 'send-failed' };
  }
}
