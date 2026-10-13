import { Redis } from '@upstash/redis';

// Vercel's Storage tab names the Upstash credentials differently depending on the prefix chosen at connect time,
// so every common pair is accepted.
const CREDENTIAL_CANDIDATES = [
  ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN'],
  ['KV_REST_API_URL', 'KV_REST_API_TOKEN'],
  ['STORAGE_REST_API_URL', 'STORAGE_REST_API_TOKEN'],
  ['STORAGE_KV_REST_API_URL', 'STORAGE_KV_REST_API_TOKEN'],
  ['UPSTASH_REDIS_KV_REST_API_URL', 'UPSTASH_REDIS_KV_REST_API_TOKEN']
];

let cached;

export function getRedis() {
  if (cached !== undefined) return cached;
  for (const [urlKey, tokenKey] of CREDENTIAL_CANDIDATES) {
    const url = process.env[urlKey];
    const token = process.env[tokenKey];
    if (url && token) {
      cached = new Redis({ url, token });
      return cached;
    }
  }
  cached = null;
  return null;
}

export function isStoreConfigured() {
  return getRedis() !== null;
}
