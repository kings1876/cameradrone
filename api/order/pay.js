import { ORDER_NUMBER_RE, findMethod } from '../../shared/order.js';
import { getOrder } from '../_lib/store.js';

// Public, no-auth: the order number is the access token. Returns only the amount and method the customer chose at
// checkout; the receiving wallet is public site config (shared/order.js), not read from the order.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const id = String(req.query.id || '');
  if (!ORDER_NUMBER_RE.test(id)) return res.status(400).json({ ok: false, error: 'invalid-id' });

  const order = await getOrder(id).catch(() => null);
  const method = order && findMethod(order.paymentMethod);
  if (!order || !method || !method.wallet) return res.status(404).json({ ok: false, error: 'not-found' });
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ok: true,
    orderNumber: order.orderNumber,
    customerName: order.customerName,
    amountDue: order.amountDue,
    methodId: method.id
  });
}
