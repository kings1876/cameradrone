import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from '../types';
import { parseInline, headingId, tocItems } from '../lib/richText';

const Inline: React.FC<{ text: string }> = ({ text }) => (
  <>
    {parseInline(text).map((p, i) =>
      p.href ? (
        p.href.startsWith('/') ? (
          <Link key={i} to={p.href} className="text-amber-400 underline underline-offset-2 hover:text-amber-300">
            {p.text}
          </Link>
        ) : (
          <a key={i} href={p.href} className="text-amber-400 underline underline-offset-2 hover:text-amber-300" rel="noopener">
            {p.text}
          </a>
        )
      ) : p.bold ? (
        <strong key={i} className="text-white">{p.text}</strong>
      ) : (
        <React.Fragment key={i}>{p.text}</React.Fragment>
      )
    )}
  </>
);

/** Renders an article's blocks: table of contents, headings, lists, comparison tables and the FAQ. */
export const BlogBody: React.FC<{ blocks: Block[] }> = ({ blocks }) => {
  const toc = tocItems(blocks);
  return (
    <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
      {toc.length > 2 && (
        <nav aria-label="In this article" className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">In this article</h2>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2 text-left text-sm">
            {toc.map(t => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-amber-400 hover:underline">{t.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {blocks.map((b, i) => {
        if (typeof b === 'string') return <p key={i}><Inline text={b} /></p>;
        if ('h2' in b) return <h2 key={i} id={headingId(b.h2)} className="pt-4 text-xl sm:text-2xl font-black text-white font-display scroll-mt-28">{b.h2}</h2>;
        if ('h3' in b) return <h3 key={i} className="text-lg font-bold text-white font-display">{b.h3}</h3>;
        if ('ul' in b)
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 text-left marker:text-amber-400">
              {b.ul.map((x, j) => <li key={j}><Inline text={x} /></li>)}
            </ul>
          );
        if ('table' in b)
          return (
            <div key={i} className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
                <thead className="bg-slate-900 text-slate-200">
                  <tr>{b.table.head.map(h => <th key={h} scope="col" className="px-3 py-2.5 font-bold">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {b.table.rows.map((r, ri) => (
                    <tr key={ri}>
                      {r.map((c, ci) => (ci === 0
                        ? <th key={ci} scope="row" className="px-3 py-2.5 font-semibold text-white"><Inline text={c} /></th>
                        : <td key={ci} className="px-3 py-2.5"><Inline text={c} /></td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return (
          <section key={i} aria-labelledby="faq" className="space-y-3">
            <h2 id="faq" className="pt-4 text-xl sm:text-2xl font-black text-white font-display scroll-mt-28">Frequently asked questions</h2>
            {b.faq.map(f => (
              <div key={f.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <h3 className="text-base font-bold text-white font-display">{f.q}</h3>
                <p className="mt-1.5">{f.a}</p>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
};
