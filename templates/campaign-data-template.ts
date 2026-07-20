/**
 * Campaign data — the offer, separated from presentation.
 * Only campaign types the founder actually runs. Outcome descriptions
 * describe the shape of results honestly — never invented numbers.
 */

export interface CampaignType {
  slug: string; // "launch-campaign"
  name: string; // "Launch Campaign"
  useWhen: string; // "You're announcing a product and need concentrated attention."
  includes: string[]; // concrete deliverables
  outcomeShape: string; // honest: "Concentrated awareness spike + qualified inbound" — no fabricated figures
  durationLabel: string; // "2–3 weeks"
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface StopRule {
  signal: string; // what gets watched
  action: string; // what happens — including honest "we recommend stopping"
}

export interface CampaignData {
  primaryCta: {
    label: string; // e.g. "Start a Campaign"
    href: string; // "/work-with-us" or "mailto:...?subject=..."
  };
  types: CampaignType[];
  engine: ProcessStep[]; // how a campaign runs end to end
  signals: string[]; // what gets measured
  stopRules: StopRule[]; // honest scale/stop rules — a trust feature, keep them blunt
  whatHappensNext: ProcessStep[]; // exact steps after a buyer reaches out
}

export const campaigns: CampaignData = {
  primaryCta: {
    label: "Work With Us", // replace at intake
    href: "/work-with-us",
  },
  types: [], // PENDING — fill from intake
  engine: [],
  signals: [],
  stopRules: [],
  whatHappensNext: [],
};
