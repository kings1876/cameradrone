// Vercel Web Analytics: cookieless page views, plus a small set of lead events (see track() calls on the forms).
import { inject, track } from '@vercel/analytics';

// Private pages are never reported: the admin dashboard and the order payment pages.
const PRIVATE = /^\/(admin|order\/)/;

export function startAnalytics(): void {
  inject({
    beforeSend: event => {
      try {
        return PRIVATE.test(new URL(event.url).pathname) ? null : event;
      } catch {
        return event;
      }
    }
  });
}

/** Records a lead event. Never throws, so analytics can not break a form. */
export function lead(name: string, properties?: Record<string, string | number | boolean>): void {
  try {
    track(name, properties);
  } catch {
    /* analytics is best effort */
  }
}
