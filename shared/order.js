// Pure helpers shared by the browser (src/) and the serverless functions (api/).
// No imports and no environment access, so the identical code runs in both places.

export const REPLY = {
  siteName: 'Drones for Sale',
  orderPrefix: 'CDA',
  currency: { code: 'AUD', symbol: '$', locale: 'en-AU' },
  brand: { primary: '#f59e0b', headerDark: '#0b0f17' },
  // Order-confirmation email and shop notifications go here unless CONTACT_EMAIL / ORDER_EMAIL are set in Vercel.
  fallbackEmail: 'koloonjo@gmail.com',
  // Payment methods offered at checkout. A method may carry a `wallet` (receiving address the operator owns and
  // supplied); the admin composer pre-fills it and checkout shows it. Methods without one are pasted per order in admin.
  methods: [
    {
      id: 'crypto-usdt',
      label: 'Crypto — USDT (TRC-20)',
      discountPct: 10,
      wallet: { address: 'TBnrAF6yjaYyUBXFGDzDUdkUG7EZr6qrFN', network: 'Tron (TRC-20)' }
    },
    {
      id: 'crypto-btc',
      label: 'Crypto — Bitcoin (BTC)',
      discountPct: 10,
      wallet: { address: 'bc1qkh6y6wqm8clgrdg3act8vt8j4d20hnn5up9lzh', network: 'Bitcoin mainnet (native SegWit, bc1q…)' }
    },
    { id: 'crypto-eth', label: 'Crypto — Ethereum (ETH)', discountPct: 10 },
    { id: 'crypto-sol', label: 'Crypto — Solana (SOL)', discountPct: 10 }
  ]
};

export function findMethod(id) {
  return REPLY.methods.find(m => m.id === id) || null;
}

/** Order refs: unambiguous alphabet (no 0/O/1/I/L), minted in the browser so the same number appears everywhere. */
export function makeOrderNumber(prefix = REPLY.orderPrefix) {
  const t = Date.now().toString(36).toUpperCase().slice(-4);
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes =
    typeof crypto !== 'undefined' && crypto.getRandomValues
      ? crypto.getRandomValues(new Uint8Array(2))
      : [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
  let r = '';
  for (const b of bytes) r += alphabet[b % alphabet.length];
  return `${prefix}-${t}${r}`;
}

export const ORDER_NUMBER_RE = new RegExp(`^${REPLY.orderPrefix}-[A-Z0-9]{4,8}$`);

export function money(amount) {
  const n = Number(amount) || 0;
  try {
    return new Intl.NumberFormat(REPLY.currency.locale, {
      style: 'currency',
      currency: REPLY.currency.code
    }).format(n);
  } catch {
    return `${REPLY.currency.symbol}${n.toFixed(2)}`;
  }
}

const KNOWN_LABELS = [
  'account name', 'account number', 'sort code', 'bank name', 'branch code', 'bsb',
  'routing number', 'beneficiary name', 'beneficiary', 'swift code', 'swift',
  'bic code', 'bic', 'iban', 'wallet address', 'wallet', 'network', 'memo',
  'destination tag', 'tag', 'paypal email', 'paypal.me', 'paypal',
  'payment link', 'reference'
].sort((a, b) => b.length - a.length);

const LABEL_PATTERN = new RegExp(
  `^(${KNOWN_LABELS.map(l => l.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\s*[:\\-]?\\s+(.+)$`,
  'i'
);

function titleCase(s) {
  return s.replace(/\S+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

/**
 * Turns one pasted blob of payment info into individually copyable { label, value } fields.
 *  1. "Label: value" lines — any label works.
 *  2. No colon, but a known label word ("BSB 062000") — split there.
 *  3. Anything else — a single "Detail" field (numbered), so a bare wallet address still gets a copy button.
 */
export function parsePaymentDetail(text) {
  const lines = String(text || '')
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);
  let unlabeled = 0;
  return lines.map(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0 && colonIdx < line.length - 1) {
      return { label: line.slice(0, colonIdx).trim(), value: line.slice(colonIdx + 1).trim() };
    }
    const match = line.match(LABEL_PATTERN);
    if (match) return { label: titleCase(match[1]), value: match[2].trim() };
    unlabeled += 1;
    return { label: unlabeled > 1 ? `Detail ${unlabeled}` : 'Detail', value: line };
  });
}

export const PAYMENT_TERMS = [
  'Please send the exact amount shown, quoting your order number as the payment reference where possible.',
  'After you have paid, use the "I\'ve made payment" button on the payment page to upload a screenshot or receipt.',
  'Your order is prepared for dispatch once we have confirmed the payment.'
];
