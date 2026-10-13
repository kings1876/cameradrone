import { requireAdmin } from '../_lib/adminAuth.js';
import { isStoreConfigured } from '../_lib/redis.js';
import { listOrders, getOrder, deleteOrder } from '../_lib/store.js';

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;
  res.setHeader('Cache-Control', 'no-store');
  const id = req.query.id ? String(req.query.id) : '';

  if (req.method === 'GET') {
    if (id) {
      const order = await getOrder(id);
      return order ? res.status(200).json({ ok: true, order }) : res.status(404).json({ ok: false, error: 'not-found' });
    }
    return res.status(200).json({ ok: true, storeConfigured: isStoreConfigured(), orders: await listOrders() });
  }

  if (req.method === 'DELETE') {
    if (id) {
      await deleteOrder(id);
    } else if (req.query.all === '1') {
      for (const o of await listOrders()) await deleteOrder(o.orderNumber);
    } else {
      return res.status(400).json({ ok: false, error: 'missing-id' });
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ ok: false, error: 'method-not-allowed' });
}
