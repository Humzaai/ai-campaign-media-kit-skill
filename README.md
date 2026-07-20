# AI Campaign Media Kit Skill

Turn your creator proof, audience data, and case studies into a premium campaign website with Claude Code.

This is a reusable [Claude Code](https://claude.com/claude-code) skill. Point Claude at it with your brand context, and it builds a complete, conversion-focused campaign/media-kit website — not a portfolio, not a rate card, and not a generic landing page.

## What the skill does

It turns raw inputs — your positioning, audience metrics, case studies, screenshots, and offer — into a full Next.js website designed to sell campaigns, sponsorships, and partnerships. Copy, structure, SEO, and funnel are handled by the skill's rules so the output reads like it was built by a senior conversion strategist, not a template.

## Who it is for

- Creators and newsletter operators selling sponsorships or campaigns
- Solo consultants and agencies selling creator-led distribution
- Founders who want a partnership/media-kit site that actually converts
- Anyone with real proof (audience, results, case studies) and no website that presents it well

## What website it creates

A premium, mobile-first Next.js + TypeScript + Tailwind site with these pages:

| Route | Purpose |
|---|---|
| `/` | Homepage — positioning, trust metrics, previews of everything |
| `/campaigns` | The offer — campaign types, engine, fit checker, FAQ |
| `/work-with-us` | Lead conversion — what clients get, email-first contact flow |
| `/audience` | Audience proof — verified metrics, channel breakdown, demographics |
| `/process` | How campaigns run — framework, signals, scale/stop rules |
| `/about` | Founder story — origin, turning point, philosophy |
| `/case-studies` | Case studies index |
| `/case-studies/[slug]` | Individual case study detail pages |

Plus: per-page SEO metadata, Open Graph/Twitter cards, sitemap, robots, a media quality gate for proof screenshots, a consistent CTA funnel (Campaigns → Case Studies → Audience → Process → Work With Us), and a final launch-review scorecard that must average **9.5/10 or higher** before the site is called launch-ready.

## How to use it in Claude Code

**Option A — install as a skill (recommended):**

```bash
git clone https://github.com/Humzaai/ai-campaign-media-kit-skill.git
mkdir -p ~/.claude/skills/ai-campaign-media-kit
cp -R ai-campaign-media-kit-skill/* ~/.claude/skills/ai-campaign-media-kit/
```

Then in any project, tell Claude Code: *"Use the AI Campaign Media Kit skill. Here is my brand context: …"*

**Option B — paste it:**

Open `SKILL.md`, paste its contents into Claude Code, and add your brand context below it.

**Option C — step-by-step:**

Work through `prompts/01-intake.md` to `prompts/13-deploy.md` in order, pasting one prompt per step. Best if you want control over each phase.

## What inputs you need

Fill in `templates/brand-intake.md` before you start (or answer Claude's intake questions). You need:

- brand name, founder name, contact email, social links
- target audience and main offer
- main CTA and deployment goal
- real proof metrics and audience metrics
- case studies (use `templates/case-study-template.md`)
- logos and screenshots (see below)
- preferred design direction and colors

**Missing data is fine — fake data is not.** The skill uses clearly marked placeholders for anything you don't have yet, and it will never invent proof, audience numbers, logos, screenshots, or testimonials. See `examples/` for a fully fictional filled-in example (NeuralLaunch).

## Generated pages

Every page follows a section checklist defined in `SKILL.md` (hero, proof, mechanism, risk reduction, FAQ, CTA — varying per page). Every page has exactly one H1, a clear primary CTA, and no dead ends. The primary conversion action always leads to `/work-with-us` or a prefilled email.

## Adding screenshots and logos

1. Put assets in `public/proof/` (screenshots) and `public/logos/` (client/press logos) in the generated site.
2. Screenshots must be uncropped, readable, and current — the media quality gate (`knowledge/media-quality-gate.md`) rejects blurry, stretched, or unreadable assets.
3. Proof screenshots render with `object-contain`, never cropped.
4. Every image needs descriptive alt text.
5. If an asset isn't ready, the skill ships a polished placeholder marked as pending — never a fake.

## Deploying to Vercel

The generated site is Vercel-ready:

```bash
git init && git add . && git commit -m "Launch campaign site"
gh repo create your-site --private --source=. --push
vercel link && vercel --prod
```

Then add your custom domain in the Vercel dashboard. `prompts/13-deploy.md` walks through this, including keeping the `*.vercel.app` preview host out of search indexes until your domain is live.

## Future update workflow

The site separates data from components: metrics, case studies, and campaign definitions live in typed data files (see `templates/*.ts`). To update:

1. Edit the data file (new metrics, new case study, new campaign type).
2. Ask Claude Code to run the launch review again (`templates/launch-review-template.md`).
3. Commit and push — Vercel redeploys automatically.

Monthly audience refreshes are a data-file edit, not a redesign.

## Repo structure

```
SKILL.md      — the main pasteable skill file
SOUL.md       — the philosophy behind every decision
prompts/      — 13 numbered step-by-step build prompts
templates/    — intake forms, data-file skeletons, launch scorecard
knowledge/    — the rules: conversion, design, copy, SEO, media, funnel
examples/     — fictional NeuralLaunch brand showing filled-in inputs/outputs
LICENSE       — MIT
```

## License

MIT — see `LICENSE`. Examples use the fictional brand **NeuralLaunch**; all example metrics, people, and results are invented for illustration and must not be reused as real proof.
