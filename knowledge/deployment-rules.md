# Deployment Rules

The site ships to Vercel via GitHub, with a clean path from test URL to custom domain.

## Order of operations

1. Launch review passes 9.5+ — **deployment does not start before this.**
2. GitHub repo created and pushed (private by default; owner decides visibility).
3. Vercel: link project → preview deploy → verify → production deploy.
4. Custom domain added when ready; indexing enabled only then.

## URL resolution

One `siteUrl` value drives canonicals, sitemap, robots, and OG URLs, resolved in order:

1. `NEXT_PUBLIC_SITE_URL` (explicit override)
2. Vercel production URL (test phase)
3. The custom domain (once configured)

No hardcoded URLs scattered in pages — everything reads the config.

## Indexing guard

- While on `*.vercel.app`: robots blocks all crawling, so the test host never gets indexed or competes with the future domain.
- On the custom domain: robots allows, sitemap points at the domain, canonicals match.
- The flip is automatic (derived from `siteUrl`), never a manual checklist item someone forgets.

## Pre-deploy checks

All clean before any production deploy:

```bash
pnpm lint
npx tsc --noEmit
pnpm build
```

Plus: zero console errors on key routes, no broken links/images (crawl), env vars present in Vercel for all environments that need them.

## Update workflow

- Content and metric updates are **data-file edits** → commit → push → Vercel auto-deploys. Components don't change for a metrics refresh.
- Monthly: refresh audience snapshot data + screenshots, re-run the media quality gate, update the `asOf` labels.
- After any significant content change: re-run the launch review before promoting.
- Rollback: Vercel instant rollback to the previous production deployment; fix forward in git.

## Custom domain checklist

- Domain added in Vercel, DNS verified, HTTPS active
- `siteUrl` resolves to the domain; canonicals + sitemap confirmed
- Robots now allows; submit sitemap in Search Console
- OG cards re-checked with the real domain (they cache — validate after switch)
