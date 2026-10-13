import { REPLY, makeOrderNumber, money, parsePaymentDetail, findMethod } from '../../shared/order.js';

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
  type: 'contact' | 'wholesale';
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
    return { ok: res.ok && data.ok !== false, emailed: data.emailed };
  } catch {
    return { ok: false };
  }
}
