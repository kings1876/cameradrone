import { requireAdmin } from '../_lib/adminAuth.js';
import { isStoreConfigured } from '../_lib/redis.js';
import { listEnquiries, getEnquiry, deleteEnquiry } from '../_lib/store.js';

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;
  res.setHeader('Cache-Control', 'no-store');
  const id = req.query.id ? String(req.query.id) : '';

  if (req.method === 'GET') {
    if (id) {
      const enquiry = await getEnquiry(id);
      return enquiry ? res.status(200).json({ ok: true, enquiry }) : res.status(404).json({ ok: false, error: 'not-found' });
    }
    return res.status(200).json({ ok: true, storeConfigured: isStoreConfigured(), enquiries: await listEnquiries() });
  }

  if (req.method === 'DELETE') {
    if (id) {
      await deleteEnquiry(id);
    } else if (req.query.all === '1') {
      for (const e of await listEnquiries()) await deleteEnquiry(e.id);
    } else {
      return res.status(400).json({ ok: false, error: 'missing-id' });
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ ok: false, error: 'method-not-allowed' });
}
