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
  "Designed and implemented a multi-tenant orchestration platform (BotVeta) supporting scalable workflow execution and monitoring.",
  "Built and deployed AI-powered production systems using AWS Bedrock for document intelligence and IVR automation.",
  "Developed distributed, fault-tolerant backend systems with queue-based execution, retry handling, and real-time orchestration.",
];

const blocks: AchievementBlock[] = [
  {
    title: "BotVeta — Automation Orchestration Platform",
    badge: "Flagship",
    bullets: [
      "Multi-tenant platform for scheduling, monitoring, and managing distributed automation workflows.",
      "Architecture: Orchestration APIs → Scheduler → Bot Runners → Centralized logging & monitoring.",
      "Supports queue-based execution, retry handling, failure recovery, and workflow orchestration.",
    ],
    tech: [
      "Python",
      "FastAPI",
      ".NET",
      "React",
      "Next.js",
      "SQL Server",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    title: "AI-Powered PDF Extraction & Document Intelligence System",
    bullets: [
      "AI-driven document processing system for extracting structured data from unstructured healthcare PDFs.",
      "Implements document splitting, grouping, and validation using rule-based logic with AI confidence scoring.",
      "Integrates AWS Bedrock (Claude) for LLM-based extraction.",
    ],
    tech: ["Python", "FastAPI", "AWS Bedrock", "LLMs"],
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
    title: "RCM Automation Suite (Eligibility — Authorization — Claims)",
    bullets: [
      "Automation platform for eligibility, authorization, and claims workflows.",
      "Implements rule-based validation, retry mechanisms, and workflow orchestration.",
      "40–80% reduction in repetitive effort.",
    ],
    tech: ["Python", "Selenium", "Pandas", "SQL"],
  },
  {
    title: "Slack-Based Workflow Automation System",
    bullets: [
      "Event-driven system for triggering and monitoring workflows via Slack.",
      "Uses APIs and webhooks for real-time execution.",
    ],
    tech: ["Python", "FastAPI", "Slack API"],
  },
  {
    title: "AI Bots & Utility Systems",
    bullets: [
      "Built conversational bots (Telegram/WhatsApp) using LLMs.",
      "Developed audio transcription pipelines using OpenAI APIs.",
    ],
    tech: ["Python", "OpenAI APIs", "Flask"],
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
