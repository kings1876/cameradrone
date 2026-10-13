import { timingSafeEqual } from 'node:crypto';

function safeEqual(a, b) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/**
 * Call first in every admin handler. Returns true when the request may continue;
 * otherwise it has already written a 503 (no passcode configured — never open) or 401 response.
 */
export function requireAdmin(req, res) {
  const expected = process.env.ADMIN_PASSCODE;
  if (!expected) {
    res.status(503).json({ ok: false, error: 'admin-not-configured' });
    return false;
  }
  const given = String(req.headers['x-admin-passcode'] || '');
  if (!safeEqual(given, expected)) {
    res.status(401).json({ ok: false, error: 'unauthorized' });
    return false;
  }
  return true;
}
