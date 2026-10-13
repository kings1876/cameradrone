import { getRedis } from './redis.js';
import { REPLY } from '../../shared/order.js';

// One Redis hash per record type, sorted in memory. The prefix namespaces several sites sharing one database.
const ORDERS = `${REPLY.orderPrefix.toLowerCase()}:orders`;
const ENQUIRIES = `${REPLY.orderPrefix.toLowerCase()}:enquiries`;

const parse = v => (typeof v === 'string' ? JSON.parse(v) : v);
const newestFirst = (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

async function save(key, id, record) {
  const redis = getRedis();
  if (!redis) return false;
  await redis.hset(key, { [id]: JSON.stringify(record) });
  return true;
}

async function list(key) {
  const redis = getRedis();
  if (!redis) return [];
  const all = await redis.hgetall(key);
  if (!all) return [];
  return Object.values(all).map(parse).sort(newestFirst);
}

async function get(key, id) {
  const redis = getRedis();
  if (!redis) return null;
  const raw = await redis.hget(key, id);
  return raw ? parse(raw) : null;
}

async function remove(key, id) {
  const redis = getRedis();
  if (redis) await redis.hdel(key, id);
}

// ---- Orders ----
export const saveOrder = order => save(ORDERS, order.orderNumber, order);
export const listOrders = () => list(ORDERS);
export const getOrder = id => get(ORDERS, id);
export const deleteOrder = id => remove(ORDERS, id);

export async function markOrderSent(orderNumber, paymentDetails) {
  const order = await getOrder(orderNumber);
  if (!order) return null;
  order.status = 'payment-sent';
  if (paymentDetails) order.paymentDetails = paymentDetails;
  await saveOrder(order);
  return order;
}

export async function markPaymentConfirmed(orderNumber) {
  const order = await getOrder(orderNumber);
  if (!order) return null;
  order.status = 'payment-confirmed';
  order.paymentScreenshotAt = new Date().toISOString();
  await saveOrder(order);
  return order;
}

// ---- Enquiries ----
export const saveEnquiry = enquiry => save(ENQUIRIES, enquiry.id, enquiry);
export const listEnquiries = () => list(ENQUIRIES);
export const getEnquiry = id => get(ENQUIRIES, id);
export const deleteEnquiry = id => remove(ENQUIRIES, id);

export async function markEnquiryReplied(id) {
  const enquiry = await getEnquiry(id);
  if (!enquiry) return null;
  enquiry.status = 'replied';
  await saveEnquiry(enquiry);
  return enquiry;
}

export function generateEnquiryId() {
  const t = Date.now().toString(36);
  const r = Math.random().toString(36).slice(2, 6);
  return `ENQ-${(t + r).toUpperCase().slice(-8)}`;
}
