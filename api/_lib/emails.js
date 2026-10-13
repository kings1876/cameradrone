import { REPLY, money, findMethod, PAYMENT_TERMS } from '../../shared/order.js';

// LIGHT email shell: white card body, dark brand header band, brand colour as accent only.
// (Dark email bodies get force-inverted by Gmail/Zoho dark mode.)

export const SITE_ORIGIN = () =>
  (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://droneforsale.com.au').replace(/\/$/, '');

export function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const { primary, headerDark } = REPLY.brand;

function shell(title, bodyHtml) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f4f5f7;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
<tr><td style="background:${headerDark};padding:20px 28px;color:#ffffff;font:700 18px Arial,Helvetica,sans-serif;">${escapeHtml(REPLY.siteName)}</td></tr>
<tr><td style="padding:28px;font:15px/1.55 Arial,Helvetica,sans-serif;color:#111827;">
<h1 style="margin:0 0 16px;font:700 20px Arial,Helvetica,sans-serif;color:#111827;">${escapeHtml(title)}</h1>
${bodyHtml}
</td></tr>
<tr><td style="padding:16px 28px;background:#f9fafb;font:12px Arial,Helvetica,sans-serif;color:#6b7280;border-top:1px solid #e5e7eb;">
${escapeHtml(REPLY.siteName)} · Australia · <a href="${SITE_ORIGIN()}" style="color:#6b7280;">${SITE_ORIGIN().replace(/^https?:\/\//, '')}</a>
</td></tr>
</table></td></tr></table></body></html>`;
}

const p = t => `<p style="margin:0 0 14px;">${t}</p>`;
const divider = () => `<hr style="border:none;border-top:1px solid #e5e7eb;margin:18px 0;">`;
const field = (label, value) =>
  `<tr><td style="padding:6px 0;color:#6b7280;width:150px;vertical-align:top;font-size:13px;">${escapeHtml(label)}</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`;
const fields = rows => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows.join('')}</table>`;
const callout = html =>
  `<div style="border-left:4px solid ${primary};background:#fffbeb;padding:12px 16px;margin:16px 0;border-radius:4px;">${html}</div>`;
const button = (href, label) =>
  `<p style="margin:20px 0;"><a href="${escapeHtml(href)}" style="display:inline-block;background:${primary};color:#111827;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:6px;">${escapeHtml(label)}</a></p>`;

function itemsTable(items) {
  const rows = items
    .map(
      i =>
        `<tr><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;">${escapeHtml(i.name)}</td><td style="padding:8px 8px;border-bottom:1px solid #f3f4f6;text-align:center;">×${Number(i.quantity)}</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;text-align:right;">${money(i.lineTotal)}</td></tr>`
    )
    .join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">${rows}</table>`;
}

const methodLabel = id => (findMethod(id) ? findMethod(id).label : id);

export function shopNewOrderEmail(order) {
  const html = shell(`New order ${order.orderNumber}`, [
    fields([
      field('Customer', order.customerName),
      field('Email', order.customerEmail),
      field('Phone', order.customerPhone),
      field('Address', order.address || '—'),
      field('Payment method', methodLabel(order.paymentMethod)),
      field('Amount due', money(order.amountDue))
    ].map(x => x)),
    divider(),
    itemsTable(order.items),
    order.notes ? callout(`<strong>Notes:</strong> ${escapeHtml(order.notes)}`) : '',
    button(`${SITE_ORIGIN()}/admin/orders/${encodeURIComponent(order.orderNumber)}`, 'Open in reply portal')
  ].join(''));
  return { subject: `New order ${order.orderNumber} — ${order.customerName} (${money(order.amountDue)})`, html };
}

export function orderConfirmationEmail(order) {
  const html = shell('Thanks — we have your order', [
    p(`Hi ${escapeHtml(order.customerName)},`),
    p(`We've received your order <strong>${escapeHtml(order.orderNumber)}</strong>. Our team will email you the payment details shortly — please watch for that follow-up email.`),
    callout(`Total: <strong>${money(order.amountDue)}</strong> · Payment method: ${escapeHtml(methodLabel(order.paymentMethod))}`),
    itemsTable(order.items),
    divider(),
    p(`Delivery to: ${escapeHtml(order.address || '—')}`),
    p(`Questions? Just reply to this email.`)
  ].join(''));
  return { subject: `We received your order ${order.orderNumber}`, html };
}

export function shopNewEnquiryEmail(enq) {
  const meta = Object.entries(enq.meta || {}).map(([k, v]) => field(k, v));
  const html = shell(`New ${enq.type} enquiry`, [
    fields([field('Name', enq.name), field('Email', enq.email), field('Phone', enq.phone || '—'), ...meta]),
    divider(),
    `<p style="white-space:pre-wrap;margin:0 0 14px;">${escapeHtml(enq.message)}</p>`,
    button(`${SITE_ORIGIN()}/admin/enquiries/${encodeURIComponent(enq.id)}`, 'Reply in portal')
  ].join(''));
  return { subject: `New ${enq.type} enquiry from ${enq.name} (${enq.id})`, html };
}

export function enquiryAckEmail(enq) {
  const html = shell('We got your message', [
    p(`Hi ${escapeHtml(enq.name)},`),
    p(`Thanks for contacting ${escapeHtml(REPLY.siteName)}. We've received your message and will reply by email as soon as we can.`),
    callout(`<span style="white-space:pre-wrap;">${escapeHtml(enq.message)}</span>`)
  ].join(''));
  return { subject: `We received your message (${enq.id})`, html };
}

export function paymentDetailsEmail(order, fieldsList) {
  const link = `${SITE_ORIGIN()}/order/payment-details?id=${encodeURIComponent(order.orderNumber)}`;
  const html = shell(`Payment details for order ${order.orderNumber}`, [
    p(`Hi ${escapeHtml(order.customerName)},`),
    p(`Thanks for your order. The amount due is <strong>${money(order.amountDue)}</strong> via ${escapeHtml(methodLabel(order.paymentMethod))}.`),
    p('Your payment details are below. For tap-to-copy fields, open the secure payment page:'),
    callout(fieldsList.map(f => `<div style="margin:2px 0;"><span style="color:#6b7280;">${escapeHtml(f.label)}:</span> <strong>${escapeHtml(f.value)}</strong></div>`).join('')),
    button(link, 'Open payment page'),
    ...PAYMENT_TERMS.map(t => `<p style="margin:0 0 8px;font-size:13px;color:#4b5563;">• ${escapeHtml(t)}</p>`)
  ].join(''));
  return { subject: `Payment details for order ${order.orderNumber}`, html };
}

export function enquiryReplyEmail(enq, message) {
  const html = shell('Reply to your enquiry', [
    p(`Hi ${escapeHtml(enq.name)},`),
    `<p style="white-space:pre-wrap;margin:0 0 14px;">${escapeHtml(message)}</p>`,
    divider(),
    `<p style="font-size:12px;color:#6b7280;margin:0;">Your original message:<br><span style="white-space:pre-wrap;">${escapeHtml(enq.message)}</span></p>`
  ].join(''));
  return { subject: `Re: your enquiry (${enq.id})`, html };
}

export function paymentConfirmedEmail(order, note) {
  const html = shell(`Customer says they've paid — ${order.orderNumber}`, [
    fields([field('Customer', order.customerName), field('Email', order.customerEmail), field('Amount', money(order.amountDue))]),
    note ? callout(`<strong>Customer note:</strong> ${escapeHtml(note)}`) : '',
    p('Their screenshot is attached. Please verify the payment, then dispatch the order.'),
    button(`${SITE_ORIGIN()}/admin/orders/${encodeURIComponent(order.orderNumber)}`, 'Open order')
  ].join(''));
  return { subject: `Payment screenshot received — ${order.orderNumber}`, html };
}
