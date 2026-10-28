// Server-only: where order and enquiry notifications go when ORDER_EMAIL / CONTACT_EMAIL are not set in Vercel.
// Kept out of shared/order.js so it is not bundled into the public site JavaScript.
export const FALLBACK_EMAIL = 'koloonjo@gmail.com';
