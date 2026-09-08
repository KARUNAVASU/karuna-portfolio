"use client";

import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";
import SectionAside from "../ui/SectionAside";

export default function About() {
  return (
    <section
      id="streams"
      className="px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionAside title="ABOUT_" titleAccent="CORE" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="min-w-0 space-y-stack-lg lg:col-span-8"
        >
          <p className="font-body text-xl leading-relaxed text-on-surface md:text-[24px]">
            Backend-focused platform engineer in US Healthcare (RCM). I ship App
            Hub / BotVeta orchestration, AI PDF extraction, Slack SLA ops, and
            IVR automation that cut turnaround time and manual effort.
          </p>

          <div className="grid grid-cols-1 gap-stack-md pt-stack-lg md:grid-cols-2">
            <div className="glass-card p-stack-lg">
              <MaterialIcon
                name="settings_input_component"
                className="mb-4 text-electric-blue"
              />
              <h3 className="mb-2 font-display text-headline-md">Automation</h3>
              <p className="text-on-surface-variant">
                Multi-tenant BotVeta control plane — instances, batches,
                workflows, Audit Center — plus EV/Auth/Claims bots across 156+
                repos.
              </p>
            </div>
            <div className="glass-card p-stack-lg">
              <MaterialIcon name="neurology" className="mb-4 text-neon-purple" />
              <h3 className="mb-2 font-display text-headline-md">AI Workflows</h3>
              <p className="text-on-surface-variant">
                Azure OpenAI PDF→Excel with template RBAC; Slack AI triage +
                SLAs; Amazon Connect IVR with Bedrock navigation.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-primary bg-surface-container-low p-stack-lg">
            <h4 className="mb-2 font-mono text-label-caps text-primary">
              CURRENT_FOCUS
            </h4>
            <p className="font-mono text-code-sm">
              EXTENDING_APP_HUB: Automation Dashboard FTE/productivity insights,
              PDF Templates assignment, Slack SLA analytics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
