import { ORDER_NUMBER_RE, findMethod, PAYMENT_TERMS } from '../../shared/order.js';
import { getOrder } from '../_lib/store.js';

// Public, no-auth: the order number is the access token. Only returns what the customer's own email already contained.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const id = String(req.query.id || '');
  if (!ORDER_NUMBER_RE.test(id)) return res.status(400).json({ ok: false, error: 'invalid-id' });

  const order = await getOrder(id).catch(() => null);
  if (!order || !order.paymentDetails) {
    return res.status(404).json({ ok: false, error: 'not-ready' });
  }
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ok: true,
    orderNumber: order.orderNumber,
    customerName: order.customerName,
    amountDue: order.amountDue,
    methodLabel: (findMethod(order.paymentMethod) || {}).label || order.paymentMethod,
    status: order.status,
    fields: order.paymentDetails.fields,
    terms: PAYMENT_TERMS
  });
}
