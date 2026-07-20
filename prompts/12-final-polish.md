# Prompt 12 — Final Polish & Launch Review

---

Run the full quality pass, then score the site.

**1. Build checks** — all must pass clean:

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

**2. Responsive audit** — every route at 320 / 390 / 768 / 1440 px: no horizontal overflow, no clipped cards, readable text, tap targets big enough. Fix everything found. (`knowledge/responsive-rules.md`)

**3. Media quality gate** — audit every image against `knowledge/media-quality-gate.md`. Replace failures with pending placeholders; list what was removed and why.

**4. Funnel audit** — every page: exactly one H1, a clear primary CTA, no dead ends, all links work, mailtos have correct prefilled subjects.

**5. Copy audit** — spelling, grammar, no hype words, no guarantee language, no invented claims. Every metric on the site traces to intake data.

**6. Accessibility** — alt text everywhere, focus states, contrast, reduced-motion safe.

**7. Launch review** — create `LAUNCH_REVIEW.md` from `templates/launch-review-template.md`. Score all ten categories out of 10, each with the evidence behind the score.

Rules:

- Average below **9.5** → the site is **not launch-ready**. List exactly what is missing and what would raise each low score. Do not soften scores to pass the gate.
- Average 9.5+ → mark launch-ready and proceed to deploy.

Output: `LAUNCH_REVIEW.md` with the scorecard, plus the list of fixes made in this pass.
