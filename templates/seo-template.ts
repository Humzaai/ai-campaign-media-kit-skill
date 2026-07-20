/**
 * SEO configuration — one entry per route, consumed by generateMetadata,
 * sitemap.ts, and robots.ts.
 *
 * Rules:
 * - Unique title and description per page, written for buyer click-through.
 * - Never claim in metadata what the page cannot prove.
 * - While hosted on *.vercel.app, indexing stays blocked; it flips on
 *   automatically once siteUrl is the custom domain.
 */

export interface PageSeo {
  path: string; // "/campaigns"
  title: string; // unique, buyer-intent, < 60 chars
  description: string; // unique, outcome-led, < 160 chars
}

export interface SeoConfig {
  siteName: string;
  siteUrl: string; // resolution order: NEXT_PUBLIC_SITE_URL → Vercel URL → custom domain
  defaultOgImage: string; // "/og.png" — branded; placeholder until brand assets exist
  twitterHandle: string | null;
  pages: PageSeo[];
}

export const seo: SeoConfig = {
  siteName: "", // PENDING — brand name from intake
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  defaultOgImage: "/og.png",
  twitterHandle: null,
  pages: [
    { path: "/", title: "", description: "" },
    { path: "/campaigns", title: "", description: "" },
    { path: "/work-with-us", title: "", description: "" },
    { path: "/audience", title: "", description: "" },
    { path: "/process", title: "", description: "" },
    { path: "/about", title: "", description: "" },
    { path: "/case-studies", title: "", description: "" },
    // case-study detail pages get metadata from their data entries
  ],
};

/** True while the site runs on a *.vercel.app host — robots should block indexing. */
export const isTestHost = seo.siteUrl.endsWith(".vercel.app");
