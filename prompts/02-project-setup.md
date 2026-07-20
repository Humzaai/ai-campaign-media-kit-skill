# Prompt 02 — Project Setup

Run after intake is complete.

---

Set up the project for the campaign website using the completed `brand-intake.md`.

1. Scaffold a Next.js (App Router) + TypeScript + Tailwind CSS project. No unnecessary packages.
2. Create the data layer, separated from components:
   - `data/site.ts` — brand name, founder, email, socials, primary CTA
   - `data/audience.ts` — from `templates/audience-data-template.ts`
   - `data/campaigns.ts` — from `templates/campaign-data-template.ts`
   - `data/case-studies.ts` — one entry per case study
   - `lib/seo.ts` — from `templates/seo-template.ts`
3. Create `public/proof/` and `public/logos/` directories with a note on required asset quality (see `knowledge/media-quality-gate.md`).
4. Set up base typography, spacing scale, and the color system from the intake's design direction (see `knowledge/design-system.md`). Mobile-first.
5. Initialize git with a first commit.

Rules:

- Every metric in data files must come from intake. `PENDING` fields stay `PENDING`.
- No page content yet — data and foundations only.

Output: project tree, data files populated from intake, and a list of remaining `PENDING` fields.
