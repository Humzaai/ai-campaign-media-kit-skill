# Example — Audience Data (NeuralLaunch)

> **⚠️ Entirely fictional.** This shows how intake metrics become the typed data file from `templates/audience-data-template.ts`. Every value is invented.

```ts
import type { AudienceData } from "./audience-data-template";

export const audience: AudienceData = {
  snapshotMonth: "2026-06",
  headline: [
    {
      label: "Newsletter subscribers",
      value: "18,200",
      source: "Beehiiv dashboard",
      asOf: "2026-06",
      proofImage: "/proof/beehiiv-2026-06.png",
      status: "verified",
    },
    {
      label: "Monthly X impressions",
      value: "2.1M",
      source: "X analytics",
      asOf: "2026-06",
      proofImage: "/proof/x-analytics-2026-06.png",
      status: "verified",
    },
    {
      label: "Average open rate",
      value: "34%",
      source: "Beehiiv dashboard",
      asOf: "2026-H1",
      proofImage: null,
      status: "verified",
    },
  ],
  channels: [
    {
      platform: "Newsletter",
      handleOrUrl: "https://neurallaunch.example/newsletter",
      metrics: [
        {
          label: "Subscribers",
          value: "18,200",
          source: "Beehiiv dashboard",
          asOf: "2026-06",
          proofImage: "/proof/beehiiv-2026-06.png",
          status: "verified",
        },
      ],
    },
    {
      platform: "YouTube",
      handleOrUrl: "https://youtube.com/@neurallaunch",
      metrics: [
        {
          label: "Monthly views",
          value: null, // fresh capture not exported yet
          source: null,
          asOf: null,
          proofImage: null,
          status: "pending", // renders as a labeled placeholder — never a guessed number
        },
      ],
    },
  ],
  demographics: [
    {
      label: "United States",
      value: "41%",
      source: "X analytics country breakdown",
      asOf: "2026-06",
      proofImage: "/proof/x-analytics-2026-06.png",
    },
  ],
  trafficSources: [
    {
      label: "From X",
      value: "60%",
      source: "Beehiiv acquisition report",
      asOf: "2026-06",
      proofImage: null,
      status: "verified",
    },
  ],
  whyThisAudienceConverts:
    "Readers are the engineers who choose the tooling their teams adopt. Campaigns reach them at evaluation time, in formats built for technical scrutiny rather than ad-blindness.",
};
```

Note the `pending` YouTube entry: the founder had the channel but not a current export, so the metric ships as a labeled placeholder instead of an invented number. That is the pattern for every gap.
