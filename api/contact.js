import { REPLY, ORDER_NUMBER_RE, findMethod } from '../shared/order.js';
import { saveOrder, saveEnquiry, generateEnquiryId } from './_lib/store.js';
import { sendMail, isMailConfigured } from './_lib/mailer.js';
import { isStoreConfigured } from './_lib/redis.js';
import {
  shopNewOrderEmail,
  orderConfirmationEmail,
  shopNewEnquiryEmail,
  enquiryAckEmail
} from './_lib/emails.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v, n) => String(v ?? '').trim().slice(0, n);

function destination(kind) {
  const env = { order: process.env.ORDER_EMAIL, contact: process.env.CONTACT_EMAIL, wholesale: process.env.WHOLESALE_EMAIL }[kind];
  return env || process.env.CONTACT_EMAIL || REPLY.fallbackEmail;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  const body = req.body && typeof req.body === 'object' ? req.body : {};

  // Honeypot: real visitors never fill this in.
  if (body.website) return res.status(200).json({ ok: true });

  const formName = body.formName;

  if (formName === 'order') {
    const orderNumber = clip(body.orderNumber, 20);
    const items = Array.isArray(body.items) ? body.items.slice(0, 50) : [];
    const method = findMethod(body.paymentMethod);
    const email = clip(body.customerEmail, 200);
    if (!ORDER_NUMBER_RE.test(orderNumber) || !items.length || !method || !EMAIL_RE.test(email) || !clip(body.customerName, 120)) {
      return res.status(400).json({ ok: false, error: 'invalid-order' });
    }
    const cleanItems = items.map(i => ({
      name: clip(i.name, 200),
      quantity: Math.max(1, Math.min(99, Number(i.quantity) || 1)),
      lineTotal: Math.max(0, Number(i.lineTotal) || 0)
    }));
    const subtotal = cleanItems.reduce((s, i) => s + i.lineTotal, 0);
    const amountDue = Math.round(subtotal * (1 - (method.discountPct || 0) / 100) * 100) / 100;

    const order = {
      orderNumber,
      customerName: clip(body.customerName, 120),
      customerEmail: email,
      customerPhone: clip(body.customerPhone, 40),
      address: clip(body.address, 300),
      items: cleanItems,
      amountDue,
      paymentMethod: method.id,
      notes: clip(body.notes, 1000),
      status: 'pending',
      channel: 'email',
      createdAt: new Date().toISOString()
    };

    const stored = await saveOrder(order).catch(() => false);
    const shop = shopNewOrderEmail(order);
    const customer = orderConfirmationEmail(order);
    const [shopRes, customerRes] = await Promise.all([
      sendMail({ to: destination('order'), replyTo: order.customerEmail, ...shop }),
      sendMail({ to: order.customerEmail, replyTo: destination('order'), ...customer })
    ]);

    return res.status(200).json({
      ok: true,
      orderNumber,
      stored,
      emailed: shopRes.sent && customerRes.sent,
      note: !isMailConfigured() ? 'mail-not-configured' : !isStoreConfigured() ? 'store-not-configured' : undefined
    });
  }

  if (formName === 'contact' || formName === 'wholesale' || formName === 'quote') {
    const email = clip(body.email, 200);
    const message = clip(body.message, 5000);
    if (!EMAIL_RE.test(email) || !message || !clip(body.name, 120)) {
      return res.status(400).json({ ok: false, error: 'invalid-enquiry' });
    }
    const meta = {};
    if (body.meta && typeof body.meta === 'object') {
      for (const [k, v] of Object.entries(body.meta).slice(0, 14)) meta[clip(k, 40)] = clip(v, 200);
    }
    const enquiry = {
      id: generateEnquiryId(),
      type: formName,
      name: clip(body.name, 120),
      email,
      phone: clip(body.phone, 40),
      message,
      meta,
      status: 'new',
      createdAt: new Date().toISOString()
    };
    const stored = await saveEnquiry(enquiry).catch(() => false);
    const shop = shopNewEnquiryEmail(enquiry);
    const ack = enquiryAckEmail(enquiry);
    const [shopRes] = await Promise.all([
      sendMail({ to: destination(formName === 'quote' ? 'wholesale' : formName), replyTo: enquiry.email, ...shop }),
      sendMail({ to: enquiry.email, replyTo: destination(formName === 'quote' ? 'wholesale' : formName), ...ack })
    ]);
    return res.status(200).json({ ok: true, id: enquiry.id, stored, emailed: shopRes.sent });
  }

  return res.status(400).json({ ok: false, error: 'unknown-form' });
}
