# Prompt 11 — SEO

---

Add SEO across the site, following `knowledge/seo-rules.md` and `lib/seo.ts`.

1. **Per page:** unique title, unique meta description, canonical URL, Open Graph metadata, Twitter card metadata. One H1 per page (verify).
2. **Site-wide:** `sitemap.ts` covering every route including case-study slugs; `robots.ts`. If the site is on a `*.vercel.app` test URL, block indexing until the custom domain is live, then allow.
3. **Structured data:** JSON-LD where honest — Person (founder), Organization/Brand, FAQPage on pages with FAQs. Absolute URLs.
4. **Internal links:** every page links onward through the funnel; no orphan pages.
5. **Alt text:** descriptive alt on every image; audit and fix.
6. **Keywords:** target buyer-intent terms natural to the niche from intake (e.g. "sponsor [niche] newsletter", "[niche] creator partnerships"). Weave them into headlines and copy naturally — no stuffing, no awkward phrasing.
7. **OG image:** one branded Open Graph image (placeholder-generated is fine; mark pending if brand assets are missing).

Rules: never claim in metadata what the page can't prove. Descriptions are written for click-through by buyers, not for bots.

Output: a table of every route → title → description, plus sitemap/robots confirmation.
