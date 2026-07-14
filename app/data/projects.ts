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
  buttons: Array<ProjectButton | null | false | undefined>,
): ProjectButton[] | undefined {
  const filtered = buttons.filter(Boolean) as ProjectButton[];
  return filtered.length ? filtered : undefined;
}

export const featuredProject: Project = {
  id: "bot-manager",
  title: "Bot Manager & Automation Orchestrator",
  outcome:
    "Central platform to run, schedule, monitor, and scale Python bots across RCM workflows.",
  highlights: [
    "Unified dashboard for multi-bot control (process-wise + user-wise)",
    "Scheduling, re-runs, execution tracking & visibility",
    "Built for production scaling (orchestrator-style architecture)",
  ],
  architecture: "Next.js → FastAPI → Bot Runner → SQL Logs/Reports",
  impact: "~40–60% reduction in manual coordination",
  role: "Lead developer (design + backend + integration)",
  tech: ["Python", "FastAPI", "Next.js", "SQL", "AWS"],
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
    items: ["Python", "FastAPI", "Django", "Flask", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript"],
  },
  {
    name: "Automation",
    items: ["Selenium", "LLMs", "IVR", "CI/CD"],
  },
  {
    name: "Cloud & Data",
    items: ["AWS", "Docker", "PostgreSQL", "SQL", "Git"],
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
