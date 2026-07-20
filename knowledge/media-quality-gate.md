# Media Quality Gate

Every image on the site passes this gate or does not ship. Weak visuals damage trust more than empty slots — a designed placeholder always beats a bad asset.

## Rejection criteria

An asset fails if it is:

- **Blurry** — text or numbers not crisply readable at display size
- **Badly cropped** — key figures, axis labels, dates, or context cut off
- **Stretched or distorted** — wrong aspect ratio, upscaled past its resolution
- **Unreadable** — too small to inspect, low contrast, compressed to artifacts
- **Outdated without a label** — old data presented as current
- **Fake** — mocked-up dashboards, edited numbers, staged results. Instant, permanent rejection.
- **Missing alt text** — no asset renders without a descriptive alt
- **Unauthorized** — logos or captures used without permission

## Rendering rules

- Proof screenshots render with `object-contain` inside a designed frame — **never** `object-cover`, never cropped to fit a layout.
- Full context stays visible: platform chrome, date ranges, and metric labels are part of the proof.
- Where useful, screenshots are openable at full size for inspection.
- Every proof image carries a caption: what it shows + as-of date.

## Placeholder standard

When an asset is missing or fails the gate:

- Render a designed placeholder — labeled with what belongs there and a visible "pending" state.
- It must look intentional (consistent with the card system), not broken.
- Never substitute a stock image, an AI-generated mock, or someone else's screenshot.

## Removal log

Assets removed by the gate are logged in the launch review (`Removed visuals`): file → reason → replacement plan. Removed means removed — never kept "to fill space."

## Audit cadence

Run the full gate: before launch review, after any asset swap, and on every monthly audience refresh (old snapshots become "outdated without a label" the moment newer data exists).
