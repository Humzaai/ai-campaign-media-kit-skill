# Prompt 10 — Case Studies

---

Build `/case-studies` (index) and `/case-studies/[slug]` (detail pages) from `data/case-studies.ts`.

**Index page:** hero, one premium card per case study (client, problem, headline result, link), CTA. Order by proof strength.

**Each detail page**, in order:

1. **Hero** — client + headline result
2. **CEO takeaway** — the one-paragraph version an executive would forward
3. **Client / problem** — the situation before
4. **Strategy** — the reasoning
5. **Execution** — what actually ran
6. **Campaign assets** — what was produced (screenshots through the media quality gate)
7. **Proof** — screenshots/links, uncropped, object-contain, alt text
8. **Results** — verified numbers only, with source and date
9. **Lesson** — what this proves about the mechanism
10. **CTA** — Work With Us / email

Rules:

- Only case studies from intake. Never invent clients, numbers, or quotes.
- If a client can't be named, use the real anonymized frame from intake ("B2B AI infra startup") — never a fake name.
- A case study with weak or missing proof gets a `PENDING` proof block, or is held back entirely — flag it and let the owner decide.
- Each detail page gets unique SEO metadata in the next step.

Output: index + all detail pages, plus a proof-strength ranking with any held-back studies flagged.
