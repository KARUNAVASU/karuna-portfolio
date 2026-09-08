import { productUrls } from "./site";

export type PosterVariant =
  | "orchestration"
  | "ivr"
  | "rcm"
  | "research"
  | "poc";

export interface ProjectButton {
  label: string;
  href: string;
  type: "Live" | "Read" | "Build";
}

export interface Project {
  id: string;
  title: string;
  outcome: string;
  highlights: string[];
  architecture?: string;
  impact?: string;
  tech: string[];
  highlight?: boolean;
  poster: PosterVariant;
  role?: string;
  buttons?: ProjectButton[];
  caseStudyPath?: string;
}

function optionalButtons(
  buttons: Array<ProjectButton | null | false | undefined | "">,
): ProjectButton[] | undefined {
  const filtered = buttons.filter(
    (button): button is ProjectButton =>
      typeof button === "object" && button !== null,
  );
  return filtered.length ? filtered : undefined;
}

export const featuredProject: Project = {
  id: "bot-manager",
  title: "BotVeta — App Hub Automation Platform",
  outcome:
    "Multi-tenant control plane to schedule, run, monitor, and scale RCM automation — bots, batches, workflows, audit, and integrations — behind JWT RBAC.",
  highlights: [
    ".NET 9 BFF + Hangfire worker: instances, batches, workflow engine with timezone-aware schedule/cron (ONCE–YEARLY), run logs, stale-run abort",
    "Auth hardening: sliding-window rate limits (per client IP) on anonymous login / OTP / register / Google auth routes",
    "React operator portal: Bot Library, run-now, assignees, conflict checks, Twilio integrations, Audit Center (process templates + copy process + response review)",
    "Org settings: app access requests (approve/reject + email) and per-app usage / product-usage analytics (7D/30D/custom; tbl_product_usage)",
    "Next.js admin: orgs, users, grants, bot catalog, HTTP logs, PDF/Slack ops, Product Weekly Update board pack (date ranges + report comparison)",
    "Azure Key Vault secrets, SQL Server telemetry, and org-scoped permission codes across products",
  ],
  architecture:
    "wor-frontend (React) → wor-backend (.NET 9 BFF + Worker/Hangfire) → SQL Server · proxies to FastAPI AI/Slack · apphub_admin (Next.js)",
  impact: "~40–60% reduction in manual coordination",
  role: "Lead developer (design + backend + integration)",
  tech: [
    "Python",
    "FastAPI",
    ".NET 9",
    "Hangfire",
    "React",
    "Next.js",
    "SQL Server",
    "JWT RBAC",
    "Azure Key Vault",
    "Docker",
  ],
  highlight: true,
  poster: "orchestration",
  caseStudyPath: "/projects/bot-manager",
  buttons: optionalButtons([
    productUrls.botvetaLive && {
      label: "View Live",
      href: productUrls.botvetaLive,
      type: "Live" as const,
    },
    productUrls.botvetaBuild && {
      label: "Build",
      href: productUrls.botvetaBuild,
      type: "Build" as const,
    },
    {
      label: "Case Study",
      href: "/projects/bot-manager",
      type: "Read" as const,
    },
  ]),
};

export const featuredBuilds: Project[] = [
  featuredProject,
  {
    id: "product-weekly-update",
    title: "Product Weekly Update (Board Pack)",
    outcome:
      "Leadership-facing weekly App Hub briefing: Mon–Fri DAU, productivity hours, PDF volume, and audit queue throughput — with editable narrative and client-side board PDF.",
    highlights: [
      "Week / date-range picker with UTC-safe board metrics refresh, week-over-week / report comparison, and date-selection bug fixes",
      "Headline tiles: app usage (DAU sum), productivity hours saved (+ FTE-days), PDFs processed / PDF hours, audits created/closed",
      "Tables: DAU by app/day, BotVeta + PDF savings by day, audit queue created/closed/hours + backlog delta",
      "Client-side landscape A4 PDF (jsPDF) from loaded JSON + narrative — Preview / Download / Copy briefing without a second metrics fetch",
      "Narrative slots: key deliveries, planned work, discussion points (auto-suggested from data when blank)",
    ],
    architecture:
      "apphub_admin (Next.js) → wor-backend admin-api Product Weekly Update → app-user-usage + productivity aggregations · PDF built in-browser",
    impact:
      "Turns App Hub telemetry into a Monday board pack leadership can preview, edit, and download",
    role: "Full-stack (admin UI + metrics API + client PDF)",
    tech: [
      "Next.js",
      ".NET 9",
      "TypeScript",
      "jsPDF",
      "SQL Server",
      "Axios",
    ],
    highlight: true,
    poster: "orchestration",
    caseStudyPath: "/projects/product-weekly-update",
    buttons: [
      {
        label: "Case Study",
        href: "/projects/product-weekly-update",
        type: "Read",
      },
    ],
  },
  {
    id: "automation-dashboard",
    title: "Automation Productivity Dashboard",
    outcome:
      "Org-scoped App Hub dashboards that turn bot runs, PDF jobs, audits, and Azure DevOps projects into FTE / man-day / hours-saved insights with BU-scoped RBAC — live across Projects, Business Insights, Automation Insights, Realised FTEs, Audit, and PDF Extractor.",
    highlights: [
      "Projects: 371 ADO projects; FTE strip ~194; BU cards summary; PM / SR CSM beside Owner; table/timeline/history + Excel; ADO discussions + status & color patched back to DevOps",
      "Business Insights: FTE Sent 2,770 (~$20.12M charge cost), FTE Accrued 1,645 (~$11.95M), process success & accuracy KPIs, daily volume + weekly trends; BU filters on completed performance",
      "Automation Insights (sample week): 1,022 instances · 2,099 runs · ~118K jobs · 84% success · up to ~889 hours / ~112 man-days savings",
      "PDF Extractor Insights (sample week): 95 PDFs · 29.4 hours saved · template-level hours (Patient Statement, Hospital Billing, Superbill, …)",
      "Audit Insights: all templates with closed counts; sample week 20 templates · 1,907 work items · 77.8% accuracy · 19.1 audit hours — backed by Audit Center process templates + copy-process",
      "Realised FTEs: buffer-pool placement tracking (e.g. 67% allocated) across BUs with re-allocation reasons tied to automation",
      "JWT BU permissions: automation.dashboard.bu.* and realizedfte.update.bu.*",
    ],
    architecture:
      "wor-frontend (React + Recharts) → wor-backend .NET dashboard APIs + Azure DevOps · PDF KPIs via /pdf-extractor/{orgId}/internal/productivity/* → ai-services",
    impact:
      "Surfaces org-scale FTE & automation ROI — e.g. ~118K jobs/week, ~$20M FTE-sent charge cost visibility, 84% bot-run success",
    role: "Full-stack (dashboard APIs + React insights UI + productivity persistence)",
    tech: [
      "React",
      "Recharts",
      "TypeScript",
      ".NET 9",
      "FastAPI",
      "SQL Server",
      "Azure DevOps",
      "JWT RBAC",
    ],
    highlight: true,
    poster: "orchestration",
    caseStudyPath: "/projects/automation-dashboard",
    buttons: [
      {
        label: "Case Study",
        href: "/projects/automation-dashboard",
        type: "Read",
      },
    ],
  },
  {
    id: "ai-pdf-extractor",
    title: "AI PDF Extractor (Template → Excel)",
    outcome:
      "Secure, template-driven document intelligence: healthcare PDFs become structured Excel via Azure OpenAI, OCR, and deterministic parsers — with manage-time user assignment.",
    highlights: [
      "FastAPI /execute: PDF or JSON in → per-template Excel out (multi-sheet claims/transactions where needed)",
      "Production templates include Appointment List / Detailed App List, HCO Payer & Amount Tracker, Trust/PHNT + NBA superbills, NBA Printed Patient List, EKG/Medenet updates",
      "Template catalog + assignment APIs; execute enforces assignee auth (not UI-only filtering)",
      "Mixed extraction: pdfplumber/PyMuPDF, regex layouts, chunked LLM prompts, RapidOCR for scans/handwriting",
      "App Hub UI: PDF-to-Excel, History, Templates (ai.pdfextractor.manage) with stacked-avatar user assign",
      "Execute validates optional saved_minutes_total (reject negatives; min 15 when set) and persists productivity savings for App Hub / dashboard FTE hours",
      "Operator Time Savings modal streamlined for clearer saved-minutes capture on PDF jobs",
      "Job telemetry: tokens, latency, errors, productivity hours / FTE savings; admin prompt inspection",
    ],
    architecture:
      "wor-frontend → .NET /pdf-extractor/{orgId} proxy (use vs manage grants) → ai-services FastAPI → Azure OpenAI + SQL Server (ai schema)",
    impact: "Template-scoped extraction + validated saved-minutes → hours / FTE reporting",
    role: "Backend + App Hub integration (Python service, BFF proxy, Templates UI)",
    tech: [
      "Python",
      "FastAPI",
      "Azure OpenAI",
      "RapidOCR",
      "openpyxl",
      "SQL Server",
      "React",
      ".NET",
      "JWT",
    ],
    highlight: true,
    poster: "research",
    caseStudyPath: "/projects/ai-pdf-extractor",
    buttons: [
      {
        label: "Case Study",
        href: "/projects/ai-pdf-extractor",
        type: "Read",
      },
    ],
  },
  {
    id: "ai-ivr",
    title: "AI Voice Automation (IVR + LLM)",
    outcome:
      "AI-assisted IVR automation that runs insurance calls from Excel data with smart agent handoff.",
    highlights: [
      "LLM handles IVR prompts to reduce agent time",
      "AI-to-human call handoff when a live rep connects",
      "Designed for future AI-to-AI verification",
    ],
    impact: "~50–70% less IVR navigation time",
    tech: ["Python", "LLMs", "IVR", "APIs", "Cloud"],
    poster: "ivr",
    buttons: optionalButtons([
      productUrls.ivrLive && {
        label: "View Live",
        href: productUrls.ivrLive,
        type: "Live" as const,
      },
    ]),
  },
  {
    id: "slack-thread-tracker",
    title: "Slack Thread Tracker (SLA + AI Triage)",
    outcome:
      "Support-ops platform that ingests Slack threads, classifies EV/Auth work with Azure OpenAI (incl. images), and monitors first-reply / resolution SLAs.",
    highlights: [
      "Signed Slack Events API ingestion: parents, replies, reactions, full message mirror",
      "Auto-resolve image-only messages on ingest (no empty triage queue for screenshot-only posts)",
      "Reaction routing: team emoji (e.g. ✅ / 👍) → RESOLVED / ANSWERED status + first-reply SLA seeding",
      "Multimodal classification (ev / auth / other) with private image download + Pillow normalize",
      "APScheduler SLA engine: per-channel first-reply & resolution deadlines, shifts, carry-over, breach stamps",
      "Digest emails: per-channel HTML digests (~30 min before shift) for notification users; Channels UI separates notify vs handle roles",
      "Assignment-scoped queues, analytics, volume buckets, CSV reports via .NET /slack-api/{orgId} BFF",
    ],
    architecture:
      "Slack → wor-backend /slack/events → slack-backend FastAPI · App Hub UI → /slack-api/{orgId} (JWT + channel assignments)",
    impact: "SLA-governed support queues with response-time analytics",
    role: "Backend + App Hub integration",
    tech: [
      "Python",
      "FastAPI",
      "Azure OpenAI",
      "APScheduler",
      "Slack API",
      "SQL Server",
      "React",
      ".NET",
    ],
    poster: "poc",
    caseStudyPath: "/projects/slack-thread-tracker",
    buttons: [
      {
        label: "Case Study",
        href: "/projects/slack-thread-tracker",
        type: "Read",
      },
    ],
  },
  {
    id: "lite-bot-manager",
    title: "Lite Bot Manager (POC)",
    outcome:
      "Lightweight dashboard built to validate orchestration needs before scaling.",
    highlights: [
      "Quick bot launch + basic tracking",
      "Validated access control + bot grouping + execution flow",
      "Became the base for the full Bot Manager",
    ],
    impact: "~30–50% faster bot triggering",
    tech: ["Python", "FastAPI", "React"],
    poster: "poc",
    buttons: optionalButtons([
      productUrls.botvetaBuild && {
        label: "View Live",
        href: productUrls.botvetaBuild,
        type: "Live" as const,
      },
    ]),
  },
];

export const healthcareAutomation: Project[] = [
  {
    id: "rcm-suite",
    title: "RCM Automation Suite (EV • Auth • Claims)",
    outcome:
      "Built multiple internal workflow engines supporting EV, Prior Auth, and Claims operations at scale.",
    highlights: [
      "Automated high-volume workflows across multiple RCM processes",
      "Standardized validations, retries, and execution checks for stability",
      "Improved consistency, turnaround time, and operational throughput",
    ],
    impact: "~40–80% reduction in repetitive effort (varies by workflow)",
    tech: ["Python", "Selenium", "SQL"],
    poster: "rcm",
    caseStudyPath: "/projects/rcm-automation-suite",
    buttons: [
      {
        label: "Case Study",
        href: "/projects/rcm-automation-suite",
        type: "Read",
      },
    ],
  },
];

export const otherWork: Project[] = [
  {
    id: "microfluidics-db",
    title: "Database Development for Microfluidics",
    outcome:
      "Designed a structured database system for storing and managing microfluidics research data efficiently.",
    highlights: [
      "Schema design + data management support",
      "Improved data organization for retrieval and analysis",
    ],
    tech: ["SQL", "Database Design", "Data Management"],
    poster: "research",
  },
];

export const heroStats = [
  { label: "Claims turnaround", value: "95% faster" },
  { label: "Manual effort", value: "40–80% down" },
  { label: "Domain", value: "US Healthcare RCM" },
  { label: "Focus", value: "Bot orchestration" },
];

export const techCategories = [
  {
    name: "Backend",
    items: ["Python", "FastAPI", ".NET 9", "Hangfire", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Vite"],
  },
  {
    name: "Automation & AI",
    items: ["Selenium", "Azure OpenAI", "IVR", "OCR", "CI/CD"],
  },
  {
    name: "Cloud & Data",
    items: ["AWS", "Azure Key Vault", "Docker", "SQL Server", "Git"],
  },
];

export function posterClass(poster: PosterVariant): string {
  const map: Record<PosterVariant, string> = {
    orchestration: "poster-orchestration",
    ivr: "poster-ivr",
    rcm: "poster-rcm",
    research: "poster-research",
    poc: "poster-poc",
  };
  return map[poster];
}

export function getProjectById(id: string): Project | undefined {
  return (
    featuredBuilds.find((p) => p.id === id) ??
    healthcareAutomation.find((p) => p.id === id) ??
    otherWork.find((p) => p.id === id)
  );
}
