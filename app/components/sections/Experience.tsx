"use client";

import { motion } from "framer-motion";

const experienceColumns = [
  {
    title: "HEALTHCARE_RCM",
    color: "text-electric-blue",
    border: "border-electric-blue/20",
    bulletColor: "text-electric-blue",
    items: [
      "Delivered 156+ Azure DevOps repo automation.",
      "Built high-performance pipelines with Availity.",
      "Distributed bot orchestration via FastAPI.",
    ],
  },
  {
    title: "BOTVETA_ORCHESTRATION",
    color: "text-neon-purple",
    border: "border-neon-purple/20",
    bulletColor: "text-neon-purple",
    items: [
      "Managed full job lifecycle across Python/Node.",
      "Orchestration API on .NET 9 with Hangfire.",
      "Implemented JWT RBAC & Azure Key Vault.",
    ],
  },
  {
    title: "AI_INTEGRATION",
    color: "text-primary",
    border: "border-primary/20",
    bulletColor: "text-primary",
    items: [
      "AI PDF extraction using AWS Bedrock.",
      "Amazon Connect IVR with Claude 3.5.",
      "~60–80% reduction in manual calling effort.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-surface-container-lowest/50 px-margin-mobile py-section-gap md:px-margin-desktop">
      <h2 className="mb-16 text-center font-display text-headline-lg">
        WORK_EXPERIENCE
      </h2>

      <div className="mx-auto max-w-container-max space-y-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card group relative overflow-hidden p-10"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-headline-md text-primary">
                Backend / Platform Engineer (Python Developer)
              </h3>
              <p className="text-holographic-silver opacity-60">
                Integrity Healthcare Solutions Pvt Ltd | Ahmedabad, Gujarat
              </p>
            </div>
            <div className="border border-white/10 bg-white/5 px-4 py-2 font-mono text-code-sm">
              DEC_2023 - PRESENT
            </div>
          </div>

          <div className="grid grid-cols-1 gap-stack-lg lg:grid-cols-3">
            {experienceColumns.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4
                  className={`border-b pb-2 font-mono text-label-caps ${col.color} ${col.border}`}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2 font-body text-on-surface-variant">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={`opacity-50 ${col.bulletColor}`}>&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8"
          >
            <div className="mb-4 font-mono text-code-sm text-electric-blue">
              RESEARCH_INTERN // 2023
            </div>
            <h3 className="mb-2 font-display text-headline-md">
              Manipal Institute of Technology
            </h3>
            <p className="text-on-surface-variant">
              Electrocardiogram Heart Rate Variability Signal Analysis.
              Contributing to published IEEE paper and earning Best Paper and Best
              Presenter awards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card border-l-4 border-neon-purple p-8"
          >
            <div className="mb-4 font-mono text-code-sm text-neon-purple">
              DATA_SCIENCE_INTERN // 2023
            </div>
            <h3 className="mb-2 font-display text-headline-md">
              Zephyr Technologies
            </h3>
            <p className="text-on-surface-variant">
              Developed a real-time chat application using Python, Django, and
              WebSockets for real-time messaging with PostgreSQL.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
