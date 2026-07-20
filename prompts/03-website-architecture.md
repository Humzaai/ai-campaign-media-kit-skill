# Prompt 03 — Website Architecture

Run after project setup.

---

Design and implement the site architecture before writing page content.

1. Create routes: `/`, `/campaigns`, `/work-with-us`, `/audience`, `/process`, `/about`, `/case-studies`, `/case-studies/[slug]`.
2. Build the shared layout:
   - Navigation with the funnel order: Campaigns → Case Studies → Audience → Process → Work With Us
   - One primary CTA button in the nav (from `data/site.ts`), visually distinct
   - Footer with a conversion block (CTA + email), socials, and internal links to every page
3. Build shared components: section wrapper, premium card, CTA button/link, metric stat, proof-image frame (object-contain, alt required), FAQ accordion, placeholder card for `PENDING` assets.
4. Wire the email-first contact flow: mailto links with a prefilled subject per page context.
5. Confirm the funnel: from any page, the next step toward `/work-with-us` is one click.

Rules (see `knowledge/funnel-rules.md` and `knowledge/design-system.md`):

- One H1 per page, exactly one primary CTA style.
- No dead-end pages.
- Components render data — no metrics hardcoded in components.

Output: working shell with nav, footer, empty page scaffolds, and shared components. Show the component list and route map.
