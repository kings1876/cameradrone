import { requireAdmin } from '../_lib/adminAuth.js';
import { ORDER_NUMBER_RE, findMethod, parsePaymentDetail } from '../../shared/order.js';
import { getOrder, markOrderSent } from '../_lib/store.js';
import { sendMail } from '../_lib/mailer.js';
import { paymentDetailsEmail } from '../_lib/emails.js';

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const body = req.body && typeof req.body === 'object' ? req.body : {};

  const id = String(body.orderNumber || '');
  const method = findMethod(body.methodId);
  const fields = parsePaymentDetail(String(body.detailText || '').slice(0, 3000));
  if (!ORDER_NUMBER_RE.test(id) || !method || !fields.length) {
    return res.status(400).json({ ok: false, error: 'invalid-request' });
  }
  const order = await getOrder(id);
  if (!order) return res.status(404).json({ ok: false, error: 'not-found' });

  // The order's chosen method is the source of truth for the amount; admin may switch the method label shown.
  const sendOrder = { ...order, paymentMethod: method.id };
  const mail = paymentDetailsEmail(sendOrder, fields);
  const result = await sendMail({ to: order.customerEmail, ...mail });
  if (!result.sent) return res.status(502).json({ ok: false, error: result.reason });

  await markOrderSent(id, { methodId: method.id, fields, sentAt: new Date().toISOString() });
  return res.status(200).json({ ok: true });
}
