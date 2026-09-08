"use client";

import { motion } from "framer-motion";

interface AchievementBlock {
  title: string;
  badge?: string;
  bullets: string[];
  tech: string[];
}

const summaryBullets: string[] = [
  "Delivered end-to-end automation systems processing high-volume healthcare workflows with up to 95% reduction in turnaround time.",
  "Designed and implemented a multi-tenant App Hub / BotVeta orchestration platform with Hangfire scheduling and JWT RBAC.",
  "Built AI PDF→Excel (Azure OpenAI + OCR) and Slack SLA triage; shipped Amazon Connect IVR with Bedrock.",
  "Developed distributed, fault-tolerant backend systems with queue-based execution, retry handling, and real-time orchestration.",
];

const blocks: AchievementBlock[] = [
  {
    title: "BotVeta — App Hub Automation Platform",
    badge: "Flagship",
    bullets: [
      "Multi-tenant platform: instances, batches, timezone-aware workflow schedules, Audit Center templates + copy-process.",
      "Auth rate limits on login/OTP; org app requests / product-usage; Product Weekly Update (UTC date ranges + comparison).",
      "Architecture: React portal → .NET 9 BFF/Worker (Hangfire) → SQL · JWT RBAC · Azure Key Vault.",
    ],
    tech: [
      "Python",
      "FastAPI",
      ".NET 9",
      "Hangfire",
      "React",
      "Next.js",
      "SQL Server",
      "Azure Key Vault",
    ],
  },
  {
    title: "Product Weekly Update (Board Pack)",
    bullets: [
      "Monday leadership briefing: date ranges, DAU, productivity hours, PDF volume, audit queue + report comparison.",
      "Editable narrative + client-side jsPDF board pack from loaded metrics (no second fetch).",
      "Next.js admin → .NET admin-api aggregations across App Hub products.",
    ],
    tech: ["Next.js", ".NET 9", "jsPDF", "TypeScript", "SQL Server"],
  },
  {
    title: "Automation Productivity Dashboard",
    bullets: [
      "Projects tab: BU cards, PM/SR CSM, ADO discussions + status/color; Business/Automation/PDF/Audit insights with BU JWT (371 projects; ~194 FTEs).",
      "Sample windows: ~118K jobs/week at 84% success; 2,770 FTE sent (~$20.12M); PDF 29.4h / 95 docs; Audit 77.8% on 1.9K items.",
      "Productivity model: validated saved_minutes → hours → man-days/FTE (8h day).",
    ],
    tech: ["React", "Recharts", ".NET 9", "FastAPI", "SQL Server", "Azure DevOps"],
  },
  {
    title: "AI PDF Extractor (Template → Excel)",
    bullets: [
      "Template-driven PDF/JSON → Excel with Azure OpenAI, RapidOCR, and deterministic parsers.",
      "Production templates: Appointment List / Detailed App List, HCO Payer & Amount Tracker, Trust/PHNT/NBA superbills.",
      "Execute validates saved_minutes_total (min 15 when set) and persists FTE productivity metrics.",
    ],
    tech: ["Python", "FastAPI", "Azure OpenAI", "RapidOCR", "React", ".NET"],
  },
  {
    title: "AI Voice Automation Platform (IVR + Amazon Connect)",
    bullets: [
      "Real-time IVR automation system for payer workflows.",
      "Integrates Amazon Connect with backend orchestration and AI-driven conversational flows.",
      "Supports automated navigation, response handling, and dynamic call routing.",
    ],
    tech: ["Python", "REST APIs", "Amazon Connect", "AWS"],
  },
  {
    title: "Slack Thread Tracker (SLA + AI Triage)",
    bullets: [
      "Signed Slack Events ingestion with multimodal Azure OpenAI classification (EV/Auth/other).",
      "Auto-resolve image-only messages; reaction-driven RESOLVED/ANSWERED; pre-shift digest emails.",
      "APScheduler SLA engine; assignment-scoped queues, analytics, and CSV reports.",
    ],
    tech: ["Python", "FastAPI", "Slack API", "Azure OpenAI", "APScheduler"],
  },
  {
    title: "RCM Automation Suite (Eligibility — Authorization — Claims)",
    bullets: [
      "Automation platform for eligibility, authorization, and claims workflows.",
      "Implements rule-based validation, retry mechanisms, and workflow orchestration.",
      "40–80% reduction in repetitive effort.",
    ],
    tech: ["Python", "Selenium", "Pandas", "SQL"],
  },
];

export default function KeyAchievements() {
  return (
    <section
      id="achievements"
      className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative border-t border-neutral-200/80 dark:border-neutral-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[65ch] mb-6">
            Highlights moved from my résumé into the portfolio so the CV stays scannable—full context lives here.
          </p>
          <ul className="space-y-3 max-w-[70ch]">
            {summaryBullets.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="flex gap-3 text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0" />
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            See featured project write-ups →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {blocks.map((block, index) => (
            <motion.article
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/80 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 md:p-7 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white pr-2">
                  {block.title}
                </h3>
                {block.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                    {block.badge}
                  </span>
                )}
              </div>
              <ul className="space-y-2 mb-4 ml-1">
                {block.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                  >
                    <span className="text-neutral-400 dark:text-neutral-600 mt-1.5">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <span className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">Tech:</span>
                {block.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
