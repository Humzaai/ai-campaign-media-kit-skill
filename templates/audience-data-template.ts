/**
 * Audience data — the single source of truth for every audience number on the site.
 * Components render this file; no audience metric may be hardcoded elsewhere.
 *
 * Rules:
 * - Every metric needs a real source and an asOf date, or status: "pending".
 * - Pending metrics render as labeled placeholders, never as numbers.
 * - Never invent demographics. Omit what you cannot prove.
 */

export type MetricStatus = "verified" | "pending";

export interface AudienceMetric {
  label: string; // e.g. "Newsletter subscribers"
  value: string | null; // "12,400" — null while pending
  source: string | null; // e.g. "Beehiiv dashboard", "X analytics"
  asOf: string | null; // "2026-07" — month of the snapshot
  proofImage: string | null; // "/proof/newsletter-2026-07.png" — must pass media quality gate
  status: MetricStatus;
}

export interface Channel {
  platform: string; // "Newsletter", "X", "YouTube", "LinkedIn"
  handleOrUrl: string; // public profile so buyers can verify themselves
  metrics: AudienceMetric[];
}

export interface DemographicSlice {
  label: string; // "United States"
  value: string; // "38%"
  source: string; // where this number comes from — required, no exceptions
  asOf: string;
  proofImage: string | null;
}

export interface AudienceData {
  snapshotMonth: string | null; // "2026-07" — shown in the /audience hero
  headline: AudienceMetric[]; // 3–4 strongest numbers for the homepage trust bar
  channels: Channel[];
  demographics: DemographicSlice[]; // empty array is valid — never pad it
  trafficSources: AudienceMetric[]; // empty array is valid
  whyThisAudienceConverts: string | null; // the argument, written at intake
}

export const audience: AudienceData = {
  snapshotMonth: null, // PENDING
  headline: [],
  channels: [],
  demographics: [],
  trafficSources: [],
  whyThisAudienceConverts: null, // PENDING
};
