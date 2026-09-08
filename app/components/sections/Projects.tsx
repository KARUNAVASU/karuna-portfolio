"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";

type ProjectsProps = {
  botvetaLiveUrl?: string;
};

export default function Projects({ botvetaLiveUrl = "" }: ProjectsProps) {
  return (
    <section
      id="outputs"
      className="px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-16">
        <p className="mb-3 font-mono text-code-sm tracking-widest text-electric-blue">
          {"// 04_SELECTED_BUILDS"}
        </p>
        <h2 className="font-display text-headline-lg">FEATURED_PROJECTS</h2>
        <p className="mt-4 max-w-3xl font-body text-on-surface-variant">
          Production App Hub / BotVeta work — orchestration, productivity
          dashboards (FTE / man-days), AI PDF extraction, Slack SLA ops, and RCM
          automation. IVR voice automation included as shipped.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {/* BotVeta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card group relative overflow-hidden p-10 md:col-span-8"
        >
          <div className="absolute right-0 top-0 p-4">
            <div className="border border-primary/30 bg-primary/20 px-3 py-1 font-mono text-[10px] tracking-widest text-primary">
              FLAGSHIP_MODULE
            </div>
          </div>

          <div className="mb-8 flex items-start gap-6">
            <MaterialIcon
              name="hub"
              filled
              className="text-5xl text-primary drop-shadow-[0_0_15px_rgba(221,183,255,0.6)]"
            />
            <div>
              <h3 className="mb-2 font-display text-headline-lg">BotVeta</h3>
              <p className="font-mono text-label-caps text-on-surface-variant opacity-60">
                APP HUB AUTOMATION PLATFORM
              </p>
            </div>
          </div>

          <p className="mb-6 max-w-2xl text-body-lg">
            Multi-tenant control plane for RCM automation: bot instances,
            timezone-aware workflow schedules, batches, Audit Center templates,
            app requests / usage analytics — plus admin console for orgs, grants,
            and Product Weekly Update.
          </p>

          <ul className="mb-8 max-w-2xl space-y-2 font-body text-on-surface-variant">
            <li className="flex gap-2">
              <span className="text-primary opacity-50">&gt;</span>
              Hangfire worker — cron schedules, run-now, conflict checks,
              Audit Center copy-process + response review; auth rate limits on
              login/OTP
            </li>
            <li className="flex gap-2">
              <span className="text-primary opacity-50">&gt;</span>
              Org app requests (approve/reject) + per-app usage analytics;
              Next.js admin board pack
            </li>
          </ul>

          <div className="mb-8 flex flex-wrap gap-2">
            {["PYTHON", ".NET 9", "HANGFIRE", "REACT", "NEXT.JS", "SQL SERVER"].map(
              (tag, i) => {
                const borders = [
                  "border-electric-blue",
                  "border-neon-purple",
                  "border-primary",
                  "border-holographic-silver",
                  "border-electric-blue",
                  "border-neon-purple",
                ];
                return (
                  <span
                    key={tag}
                    className={`border-l-2 bg-white/5 px-3 py-1 font-mono text-code-sm ${borders[i]}`}
                  >
                    {tag}
                  </span>
                );
              },
            )}
          </div>

          <div className="rounded-lg border border-white/5 bg-surface-container p-6 font-mono text-code-sm text-on-surface-variant/80">
            <span className="text-electric-blue">stack:</span> [React portal →
            .NET BFF/Worker → SQL · FastAPI AI/Slack proxies · Next admin]
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {botvetaLiveUrl ? (
              <a
                href={botvetaLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-neon-purple to-electric-blue px-6 py-2 font-mono text-label-caps tracking-widest transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                VIEW_LIVE
              </a>
            ) : null}
            <Link
              href="/projects/bot-manager"
              className="border border-white/20 px-6 py-2 font-mono text-label-caps tracking-widest transition-all hover:bg-white/5"
            >
              CASE_STUDY
            </Link>
          </div>
        </motion.div>

        {/* AI PDF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card flex flex-col justify-between p-8 md:col-span-4"
        >
          <div>
            <MaterialIcon
              name="description"
              className="mb-6 text-4xl text-electric-blue"
            />
            <h3 className="mb-4 font-display text-headline-md">
              AI PDF Extractor
            </h3>
            <p className="mb-4 text-on-surface-variant">
              Template-driven PDF → Excel for RCM docs. Azure OpenAI + OCR +
              regex parsers; execute enforces per-user template assignment.
            </p>
            <ul className="mb-6 space-y-1.5 font-mono text-[11px] text-on-surface-variant/80">
              <li>&gt; Appointment List · HCO tracker · Trust/PHNT/NBA</li>
              <li>&gt; saved_minutes validation → FTE hours</li>
              <li>&gt; Workbook preview + download</li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-electric-blue">
              AZURE_OPENAI
            </span>
            <span className="font-mono text-[10px] text-electric-blue">
              FASTAPI
            </span>
            <Link
              href="/projects/ai-pdf-extractor"
              className="font-mono text-[10px] tracking-widest text-primary underline-offset-2 hover:underline"
            >
              CASE_STUDY
            </Link>
          </div>
        </motion.div>

        {/* Automation Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="glass-card flex flex-col justify-between p-8 md:col-span-8"
        >
          <div>
            <MaterialIcon
              name="monitoring"
              className="mb-6 text-4xl text-electric-blue"
            />
            <h3 className="mb-4 font-display text-headline-md">
              Automation Productivity Dashboard
            </h3>
            <p className="mb-4 max-w-2xl text-on-surface-variant">
              Live App Hub insights: 371 ADO projects · ~194 project FTEs ·
              Business Insights (2,770 FTE sent / ~$20M charge cost) · Automation
              Insights (~118K jobs/week, 84% success) · PDF + Audit productivity
              KPIs.
            </p>
            <ul className="mb-6 space-y-1.5 font-mono text-[11px] text-on-surface-variant/80">
              <li>&gt; Projects: PM/SR CSM · ADO discussions · status</li>
              <li>&gt; BU cards · Business Insights filters · PDF/Audit</li>
              <li>&gt; JWT BU permissions for view + FTE update</li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-electric-blue">
              RECHARTS
            </span>
            <span className="font-mono text-[10px] text-electric-blue">
              .NET
            </span>
            <span className="font-mono text-[10px] text-electric-blue">
              FASTAPI
            </span>
            <Link
              href="/projects/automation-dashboard"
              className="border border-electric-blue/30 px-6 py-2 font-mono text-label-caps tracking-widest text-electric-blue transition-all hover:bg-electric-blue/10"
            >
              CASE_STUDY
            </Link>
          </div>
        </motion.div>

        {/* Product Weekly Update */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="glass-card flex flex-col justify-between p-8 md:col-span-4"
        >
          <div>
            <MaterialIcon
              name="calendar_view_week"
              className="mb-6 text-4xl text-primary"
            />
            <h3 className="mb-4 font-display text-headline-md">
              Product Weekly Update
            </h3>
            <p className="mb-4 text-on-surface-variant">
              Monday board pack: Mon–Fri DAU, productivity hours, PDF volume,
              and audit queue — narrative + client-side PDF download.
            </p>
            <ul className="mb-6 space-y-1.5 font-mono text-[11px] text-on-surface-variant/80">
              <li>&gt; Week picker · WoW deltas</li>
              <li>&gt; jsPDF landscape board pack</li>
              <li>&gt; Admin metrics API (no CHI)</li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-primary">NEXT.JS</span>
            <span className="font-mono text-[10px] text-primary">.NET</span>
            <Link
              href="/projects/product-weekly-update"
              className="font-mono text-[10px] tracking-widest text-primary underline-offset-2 hover:underline"
            >
              CASE_STUDY
            </Link>
          </div>
        </motion.div>

        {/* IVR — leave content as shipped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card flex flex-col justify-between p-8 md:col-span-4"
        >
          <div>
            <MaterialIcon
              name="settings_voice"
              className="mb-6 text-4xl text-neon-purple"
            />
            <h3 className="mb-4 font-display text-headline-md">
              AI Voice Automation
            </h3>
            <p className="mb-6 text-on-surface-variant">
              Production IVR automation for payer calls with Amazon Connect and
              Bedrock AI navigation. ~60–80% less manual calling.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="font-mono text-[10px] text-neon-purple">
              AMAZON_CONNECT
            </span>
            <span className="font-mono text-[10px] text-neon-purple">
              LAMBDA
            </span>
          </div>
        </motion.div>

        {/* Slack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="glass-card flex flex-col justify-between p-8 md:col-span-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <MaterialIcon
                name="forum"
                className="mb-6 text-4xl text-primary"
              />
              <h3 className="mb-4 font-display text-headline-md">
                Slack Thread Tracker
              </h3>
              <p className="mb-4 max-w-xl text-on-surface-variant">
                Signed Slack Events ingestion, AI triage (EV / Auth / other),
                reaction-driven status, SLA clocks, and shift digest emails for
                notification users — plus queues, analytics, and CSV reports.
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] text-on-surface-variant/80">
                <li>&gt; Auto-resolve image-only · reactions → status</li>
                <li>&gt; Pre-shift digest emails · notify vs handle roles</li>
                <li>&gt; App Hub dashboard + admin chat mirror</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] text-primary">FASTAPI</span>
            <span className="font-mono text-[10px] text-primary">
              AZURE_OPENAI
            </span>
            <span className="font-mono text-[10px] text-primary">SLACK_API</span>
            <Link
              href="/projects/slack-thread-tracker"
              className="border border-primary/30 px-6 py-2 font-mono text-label-caps tracking-widest text-primary transition-all hover:bg-primary/10"
            >
              CASE_STUDY
            </Link>
          </div>
        </motion.div>

        {/* RCM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card border-r-4 border-primary p-8 md:col-span-12"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="mb-4 font-display text-headline-md">
                RCM Automation Suite
              </h3>
              <p className="max-w-xl text-on-surface-variant">
                Rule-based automation engines for eligibility, prior
                authorization, and claims at high volume. Implements standardized
                orchestration patterns across RCM lines of business.
              </p>
            </div>
            <MaterialIcon
              name="medical_services"
              className="text-4xl text-primary"
            />
          </div>
          <div className="mt-8 flex gap-stack-lg font-mono text-code-sm text-primary">
            <div className="flex flex-col">
              <span className="opacity-50">Impact:</span> 40-80% EFFICIENCY_GAIN
            </div>
            <div className="flex flex-col">
              <span className="opacity-50">Status:</span> PRODUCTION_READY
            </div>
          </div>
          <Link
            href="/projects/rcm-automation-suite"
            className="mt-6 inline-block border border-primary/30 px-6 py-2 font-mono text-label-caps tracking-widest text-primary transition-all hover:bg-primary/10"
          >
            CASE_STUDY
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
