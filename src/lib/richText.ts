import { Block } from '../types';

export type Inline = { text: string; href?: string; bold?: boolean };

/** Splits text with [label](/path) links and **bold** into inline pieces. */
export function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    if (m[1]) out.push({ text: m[1], href: m[2] });
    else out.push({ text: m[3], bold: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}

/** Plain text of a string that may contain inline markup. */
export const plain = (text: string): string => parseInline(text).map(p => p.text).join('');

export const headingId = (text: string): string =>
  plain(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const isH2 = (b: Block): b is { h2: string } => typeof b === 'object' && 'h2' in b;

/** Table of contents entries: every H2 plus the FAQ section when present. */
export function tocItems(blocks: Block[]): { id: string; text: string }[] {
  const items = blocks.filter(isH2).map(b => ({ id: headingId(b.h2), text: plain(b.h2) }));
  if (blocks.some(b => typeof b === 'object' && 'faq' in b)) items.push({ id: 'faq', text: 'Frequently asked questions' });
  return items;
}

/** Words in the article body (used for reading time checks and schema). */
export function blockWords(blocks: Block[]): number {
  const words = (t: string) => plain(t).split(/\s+/).filter(Boolean).length;
  let n = 0;
  for (const b of blocks) {
    if (typeof b === 'string') n += words(b);
    else if ('h2' in b) n += words(b.h2);
    else if ('h3' in b) n += words(b.h3);
    else if ('ul' in b) n += b.ul.reduce((s, x) => s + words(x), 0);
    else if ('table' in b) n += [...b.table.head, ...b.table.rows.flat()].reduce((s, x) => s + words(x), 0);
    else if ('faq' in b) n += b.faq.reduce((s, x) => s + words(x.q) + words(x.a), 0);
  }
  return n;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const inlineHtml = (text: string): string =>
  parseInline(text)
    .map(p => (p.href ? `<a href="${esc(p.href)}">${esc(p.text)}</a>` : p.bold ? `<strong>${esc(p.text)}</strong>` : esc(p.text)))
    .join('');

/** Static HTML for the article body, used by the prerender so crawlers see the same content as the React page. */
export function blocksToHtml(blocks: Block[]): string {
  let html = '';
  const toc = tocItems(blocks);
  if (toc.length > 2) {
    html += `<nav aria-label="In this article"><h2>In this article</h2><ul>${toc.map(t => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></nav>`;
  }
  for (const b of blocks) {
    if (typeof b === 'string') html += `<p>${inlineHtml(b)}</p>`;
    else if ('h2' in b) html += `<h2 id="${headingId(b.h2)}">${esc(plain(b.h2))}</h2>`;
    else if ('h3' in b) html += `<h3>${esc(plain(b.h3))}</h3>`;
    else if ('ul' in b) html += `<ul>${b.ul.map(x => `<li>${inlineHtml(x)}</li>`).join('')}</ul>`;
    else if ('table' in b)
      html += `<table><thead><tr>${b.table.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${b.table.rows
        .map(r => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${inlineHtml(c)}</th>` : `<td>${inlineHtml(c)}</td>`)).join('')}</tr>`)
        .join('')}</tbody></table>`;
    else if ('faq' in b) html += `<h2 id="faq">Frequently asked questions</h2>${b.faq.map(f => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}`;
  }
  return html;
}
