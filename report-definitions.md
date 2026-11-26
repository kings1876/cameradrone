# Saved report definitions

### Blog batch report
Created:   2026-11-26
Last run:  2026-11-26 (posts 48-52 and 53-54)
Cadence:   one-off per batch (run after every blog batch, per the global CLAUDE.md)

Metrics:
- Per post: full URL, primary keyword, all supporting keywords, word count (source: src/data/blogMeta.ts)
- Per post: publish date, images (cover + inline), product / category / guide links, links from other guides, guide lists it appears in (source: dist build and src/data)
- Results: impressions and clicks (Google Search Console), organic visits (Search Console or analytics), quote enquiries (quote and order forms), monthly search volume for primary keywords (OpenSEO project b8bb8c84-42a1-4b88-8640-b21cbbd6fb2f, Australia; costs credits, so reuse the volumes in docs/keyword-map.md before buying a new lookup). Write "n/a" with the source when there is no data. Never estimate.
Grouping: by post.
Comparison: none until Search Console has data; then versus the 16 Nov 2026 baseline in docs/seo-tracking.md.
Period: the batch's publish dates.
Output: chat summary (three findings max), XLSX (Summary, Posts, Links and images, Raw data), then a visual report page.
Table rule: the blog table is always Post | Primary keyword | Supporting keywords | Words.
