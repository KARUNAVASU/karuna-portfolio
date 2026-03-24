"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            About
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[65ch]">
            What I build and how I think
          </p>
        </div>
        
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            Backend-focused Python developer in US Healthcare (RCM). I ship scalable automation, BotVeta-style orchestration, and AI workflows (Bedrock document extraction, Amazon Connect IVR) that cut turnaround time and manual effort.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              What I'm best at
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                Automation & Orchestration
              </span>
              <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                FastAPI + Next.js systems
              </span>
              <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
                AI-assisted IVR workflows
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-xl"></div>
            <div className="relative">
              <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                Current focus
              </h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Extending <span className="font-semibold text-neutral-900 dark:text-white">BotVeta</span> — multi-tenant scheduling, monitoring, and scaling of Python and Node automation with admin and operator experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

