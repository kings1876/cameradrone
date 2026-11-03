import { REPLY, makeOrderNumber, money, parsePaymentDetail, findMethod } from '../../shared/order.js';

import { lead } from './analytics';

export { REPLY, makeOrderNumber, money, parsePaymentDetail, findMethod };

export interface PaymentField {
  label: string;
  value: string;
}

export interface StoredOrder {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address?: string;
  items: { name: string; quantity: number; lineTotal: number }[];
  amountDue: number;
  paymentMethod: string;
  notes?: string;
  status: 'pending' | 'payment-sent' | 'payment-confirmed';
  channel: 'whatsapp' | 'email';
  createdAt: string;
  paymentDetails?: { methodId: string; fields: PaymentField[]; sentAt: string };
}

export interface StoredEnquiry {
  id: string;
  type: 'contact' | 'wholesale' | 'quote';
  name: string;
  email: string;
  phone?: string;
  message: string;
  meta?: Record<string, string>;
  status: 'new' | 'replied';
  createdAt: string;
}

/** POSTs to the /api/contact function. Resolves false (never throws) so the UI can still show its thank-you state. */
export async function postForm(payload: Record<string, unknown>): Promise<{ ok: boolean; emailed?: boolean }> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    const ok = res.ok && data.ok !== false;
    if (ok) {
      // One event per successful form, named after the form (quote_submitted, order_submitted, contact_submitted). No personal data is sent.
      const form = String(payload.formName ?? 'form');
      lead(
        `${form}_submitted`,
        form === 'order'
          ? { payment: String(payload.paymentMethod ?? ''), items: Array.isArray(payload.items) ? payload.items.length : 0 }
          : undefined
      );
    }
    return { ok, emailed: data.emailed };
  } catch {
    return { ok: false };
  }
}
