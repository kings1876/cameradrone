import { requireAdmin } from '../_lib/adminAuth.js';
import { getEnquiry, markEnquiryReplied } from '../_lib/store.js';
import { sendMail } from '../_lib/mailer.js';
import { enquiryReplyEmail } from '../_lib/emails.js';

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const body = req.body && typeof req.body === 'object' ? req.body : {};

  const id = String(body.id || '');
  const message = String(body.message || '').trim().slice(0, 5000);
  if (!id || !message) return res.status(400).json({ ok: false, error: 'invalid-request' });

  const enquiry = await getEnquiry(id);
  if (!enquiry) return res.status(404).json({ ok: false, error: 'not-found' });

  const mail = enquiryReplyEmail(enquiry, message);
  const result = await sendMail({ to: enquiry.email, ...mail });
  if (!result.sent) return res.status(502).json({ ok: false, error: result.reason });

  await markEnquiryReplied(id);
  return res.status(200).json({ ok: true });
}
