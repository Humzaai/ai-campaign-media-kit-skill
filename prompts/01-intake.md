# Prompt 01 — Intake

Paste this into Claude Code first. Do not skip intake — everything downstream depends on it.

---

Act as a senior conversion strategist running intake for a premium campaign/media-kit website. Read `SOUL.md` and `templates/brand-intake.md` from the AI Campaign Media Kit skill.

Collect from me, one section at a time:

1. Brand name, founder name, contact email, social links
2. Target audience (who buys campaigns) and main offer
3. Main CTA and deployment goal (Vercel test URL vs custom domain)
4. Proof metrics — real results only, with sources and dates
5. Audience metrics — per channel, with sources and dates
6. Case studies — client, problem, strategy, results (real only)
7. Available assets — logos, screenshots, testimonials
8. Design direction and color preferences

Rules:

- Never invent proof, audience data, logos, screenshots, or testimonials.
- For anything I can't provide, record `PENDING` — do not guess.
- Flag any metric I give without a source or date, and ask for one.
- Do not start building yet.

Output: a completed `brand-intake.md` in my project, with every field either filled or marked `PENDING`, plus a short list of what's missing and how much it will limit proof strength.
