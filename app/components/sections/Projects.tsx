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
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
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
                AUTOMATION ORCHESTRATION PLATFORM
              </p>
            </div>
          </div>

          <p className="mb-8 max-w-2xl text-body-lg">
            Multi-tenant platform to schedule, monitor, and manage distributed
            automation workflows across organizations. Supports queue-based
            execution, retries, and centralized logging.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {["PYTHON", ".NET 9", "FASTAPI", "SQL SERVER"].map((tag, i) => {
              const borders = [
                "border-electric-blue",
                "border-neon-purple",
                "border-primary",
                "border-holographic-silver",
              ];
              return (
                <span
                  key={tag}
                  className={`border-l-2 bg-white/5 px-3 py-1 font-mono text-code-sm ${borders[i]}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div className="rounded-lg border border-white/5 bg-surface-container p-6 font-mono text-code-sm text-on-surface-variant/80">
            <span className="text-electric-blue">stack:</span> [Next.js admin,
            React-Vite operator, Hangfire, AWS]
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
              AI PDF Extraction
            </h3>
            <p className="mb-6 text-on-surface-variant">
              Healthcare RCM document pipeline: split, group, validate, and
              extract structured data from large PDFs using Bedrock (Claude 3.5).
            </p>
          </div>
          <div className="flex gap-4">
            <span className="font-mono text-[10px] text-electric-blue">
              AWS_BEDROCK
            </span>
            <span className="font-mono text-[10px] text-electric-blue">
              FASTAPI
            </span>
          </div>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card border-r-4 border-primary p-8 md:col-span-8"
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
