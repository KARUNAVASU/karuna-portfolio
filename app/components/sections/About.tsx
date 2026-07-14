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
            Backend-focused Python developer in US Healthcare (RCM). I ship
            scalable automation, BotVeta-style orchestration, and AI workflows
            that cut turnaround time and manual effort.
          </p>

          <div className="grid grid-cols-1 gap-stack-md pt-stack-lg md:grid-cols-2">
            <div className="glass-card p-stack-lg">
              <MaterialIcon
                name="settings_input_component"
                className="mb-4 text-electric-blue"
              />
              <h3 className="mb-2 font-display text-headline-md">Automation</h3>
              <p className="text-on-surface-variant">
                Architecting scalable eligibility, authorization, and claims
                systems across 156+ repositories.
              </p>
            </div>
            <div className="glass-card p-stack-lg">
              <MaterialIcon name="neurology" className="mb-4 text-neon-purple" />
              <h3 className="mb-2 font-display text-headline-md">AI Workflows</h3>
              <p className="text-on-surface-variant">
                Integrating AWS Bedrock (Claude 3.5) for document intelligence
                and conversational IVR platforms.
              </p>
            </div>
          </div>

          <div className="border-l-2 border-primary bg-surface-container-low p-stack-lg">
            <h4 className="mb-2 font-mono text-label-caps text-primary">
              CURRENT_FOCUS
            </h4>
            <p className="font-mono text-code-sm">
              EXTENDING_BOTVETA: Multi-tenant scheduling, monitoring, and
              scaling of Python and Node automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
