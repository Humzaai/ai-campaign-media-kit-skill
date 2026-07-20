# Design System Rules

Premium is restraint. These rules define what "premium" concretely means for generated sites.

## Foundations

- **Palette:** built from the intake's preferences. Default direction if none given: deep neutral foundation (near-black or deep navy), one cool accent, white/near-white type. Never more than one accent color doing "attention" work.
- **Typography:** one display face for headings, one text face for body (a single variable font family is fine). Strong scale contrast between heading and body. Light-to-medium heading weights read more premium than heavy bolds.
- **Spacing:** generous. Sections breathe — desktop section padding in the 96–160px range, mobile proportionally reduced. Cramped premium does not exist.
- **Grid:** subtle and consistent. Content max-width constrained; cards align to a real grid, not eyeballed.

## Components

- **Cards:** consistent radius, border, and background treatment site-wide. One card recipe, reused.
- **CTAs:** exactly one primary button style, high contrast, used only for the primary action. Secondary links are visibly quieter.
- **Metric stats:** big number, small label, source/date caption. Never a big number without its label.
- **Proof frames:** screenshots render `object-contain` on a contrasting frame, uncropped, openable/inspectable where possible.
- **Placeholders:** pending assets get a designed placeholder (label + "pending" state) that looks intentional, not broken.

## Motion

- Purposeful only: reveal-on-scroll and hover feedback at most. Nothing loops, nothing bounces, nothing autoplays with sound.
- Every animation respects `prefers-reduced-motion`.
- If removing an animation loses nothing, remove it.

## Contrast & accessibility

- Body text meets WCAG AA against its background.
- Focus states visible on every interactive element.
- Tap targets ≥ 44px on mobile.

## What to avoid

Cheap-template tells: stock gradient meshes on everything, three competing accent colors, fake dashboard screenshots, tiny dense text, badge walls, glow on every card, carousels that hide proof behind interaction.
