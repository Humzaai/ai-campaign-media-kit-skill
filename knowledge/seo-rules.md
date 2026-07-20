# SEO Rules

SEO here means being findable by buyers and looking credible when shared — not chasing volume.

## Per-page requirements

- Unique `<title>` (< 60 chars) — buyer-intent phrasing, brand-suffixed
- Unique meta description (< 160 chars) — written for click-through, outcome-led
- Canonical URL — absolute, from the central SEO config
- Open Graph: title, description, image, url, type
- Twitter card: `summary_large_image` with the branded OG image
- Exactly one H1, containing the page's core claim naturally

## Site-wide requirements

- `sitemap.ts` — every route, including generated case-study slugs
- `robots.ts` — block indexing while on a `*.vercel.app` host; allow once on the custom domain (drive both from one `siteUrl` resolution, no manual flipping)
- Branded OG image (placeholder-generated until brand assets exist, marked pending)
- JSON-LD where honest: `Person` (founder), `Organization`/`Brand`, `FAQPage` on FAQ pages. Absolute URLs. Never mark up claims the page doesn't make.

## Keywords

- Target buyer-intent terms natural to the niche: the phrases a sponsor would actually search ("sponsor [niche] newsletter", "[niche] influencer campaigns", "[creator name] media kit").
- Weave terms into headlines and body where they read naturally. If a sentence exists only for a keyword, delete it.
- No stuffing, no doorway text, no hidden keyword blocks.

## Internal linking

- Every page links forward along the funnel; case studies cross-link to `/audience` and `/work-with-us`.
- No orphan pages, no dead ends (verify by crawl).
- Descriptive anchor text — "view campaign results", not "click here".

## Images

- Descriptive alt text on every image: what the proof shows, not "screenshot".
- Meaningful filenames (`newsletter-growth-2026-07.png`, not `img_004.png`).

## Honesty constraint

Metadata is a claim surface like any other: never promise in a title or description what the page cannot prove. A misleading description that wins a click loses the buyer on arrival.
