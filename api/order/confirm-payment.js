import { ORDER_NUMBER_RE, REPLY } from '../../shared/order.js';
import { getOrder, markPaymentConfirmed } from '../_lib/store.js';
import { sendMail } from '../_lib/mailer.js';
import { paymentConfirmedEmail } from '../_lib/emails.js';

const ALLOWED = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/heic': 'heic' };
const MAX_BYTES = 3 * 1024 * 1024; // base64 JSON must stay under Vercel's 4.5 MB request limit

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const id = String(body.orderNumber || '');
  if (!ORDER_NUMBER_RE.test(id)) return res.status(400).json({ ok: false, error: 'invalid-id' });

  const ext = ALLOWED[body.fileType];
  if (!ext || typeof body.fileData !== 'string') return res.status(400).json({ ok: false, error: 'invalid-file' });
  const buffer = Buffer.from(body.fileData, 'base64');
  if (!buffer.length || buffer.length > MAX_BYTES) return res.status(413).json({ ok: false, error: 'file-too-large' });

  const order = await getOrder(id).catch(() => null);
  if (!order || order.status === 'pending') return res.status(404).json({ ok: false, error: 'not-ready' });

  const note = String(body.note || '').trim().slice(0, 500);
  const mail = paymentConfirmedEmail(order, note);
  const result = await sendMail({
    to: process.env.ORDER_EMAIL || process.env.CONTACT_EMAIL || REPLY.fallbackEmail,
    replyTo: order.customerEmail,
    ...mail,
    attachments: [{ filename: `${id}-payment.${ext}`, content: buffer, contentType: body.fileType }]
  });
  await markPaymentConfirmed(id).catch(() => null);
  return res.status(200).json({ ok: true, emailed: result.sent });
}
