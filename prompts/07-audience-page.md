# Prompt 07 — Audience Page

---

Build `/audience` — the proof page buyers use to verify reach is real.

Sections, in order:

1. **Hero** — who the audience is and why it matters to the buyer
2. **Monthly audience snapshot** — headline numbers with month/year label and source
3. **Channel breakdown** — per-channel metrics from `data/audience.ts`
4. **Verified screenshots** — analytics captures from `public/proof/`, rendered with the proof-image frame (object-contain, full view, alt text)
5. **Demographics modules** — only demographics present in intake data, with source. **Never invent demographics.**
6. **Traffic sources** — where the audience comes from, if data exists
7. **Public profile proof** — links to the live public profiles so buyers can verify themselves
8. **Why this audience converts** — the argument connecting audience to buyer outcomes
9. **CTA** — Work With Us / email

Rules (see `knowledge/media-quality-gate.md`):

- Every number has a source and a date label. Undated metrics don't ship.
- Screenshots must pass the media quality gate — blurry, cropped, or unreadable captures are replaced with pending placeholders.
- Missing channels are omitted, not padded.

Output: the finished page plus a table of every metric shown → its source → its date.
