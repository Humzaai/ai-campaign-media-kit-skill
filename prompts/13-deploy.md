# Prompt 13 — Deploy

Only run after the launch review passes 9.5+.

---

Deploy the site.

1. **GitHub** — commit everything; create the repo (private unless I say otherwise) and push:

```bash
git add . && git commit -m "Launch campaign site"
gh repo create <site-name> --private --source=. --remote=origin --push
```

2. **Vercel** — link and deploy a preview first, then production:

```bash
vercel link
vercel          # preview — check it
vercel --prod
```

3. **Indexing guard** — while the site lives on `*.vercel.app`, keep robots blocking indexing. Confirm the robots logic flips automatically when the custom domain is set.

4. **Custom domain** — when I provide one: add it in Vercel, confirm canonical URLs and sitemap switch to it, enable indexing, and verify OG cards render with the real domain.

5. **Update workflow** — document in the project README:
   - metrics/case-study updates = edit the data files, commit, push (Vercel auto-deploys)
   - re-run the launch review after any significant content change
   - monthly audience snapshot refresh checklist

Output: preview URL, production URL, domain status, and the documented update workflow.
