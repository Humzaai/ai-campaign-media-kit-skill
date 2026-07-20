# Responsive Rules

Most buyers open this site from a social link on a phone. Mobile is the first render, not the last check.

## Required verification widths

Every route must be checked at:

| Width | Represents |
|---|---|
| 320px | Smallest supported phones |
| 390px | Modern phones |
| 768px | Tablets |
| 1440px | Desktop |

Pass criteria at every width: **zero horizontal overflow**, no clipped cards, no overlapping text, readable type, working navigation.

## Layout rules

- Build mobile-first; add complexity upward with breakpoints, never downward.
- Grids collapse gracefully: multi-column card grids become single-column without reordering meaning.
- Wide content (tables, comparison rows, screenshots) scrolls inside its own container — the page never scrolls sideways.
- Fixed pixel widths are a smell; prefer `max-width` + fluid behavior.

## Type & touch

- Body text ≥ 16px on mobile; captions never below 13px.
- Headings scale with viewport (clamp), but stay strong at 320px — no single word per line.
- Tap targets ≥ 44px with real spacing between them; nav links and CTA buttons especially.

## Media

- Images: `max-width: 100%`, explicit dimensions or aspect ratios to prevent layout shift.
- Proof screenshots stay inspectable on mobile — if a capture is unreadable at phone width, provide tap-to-open full view rather than shrinking it into noise.

## Navigation

- Mobile nav keeps the primary CTA visible without opening a menu.
- Menu open/close works with keyboard and screen readers; focus is trapped while open.

## Verification

Manual spot checks lie. Verify programmatically where possible (e.g. Playwright across all routes × all four widths, asserting `scrollWidth <= clientWidth`), and record the result as launch-review evidence.
