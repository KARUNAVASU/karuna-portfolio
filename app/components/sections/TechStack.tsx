"use client";

import { motion } from "framer-motion";
import { techGrid } from "@/app/data/site";

export default function TechStack() {
  return (
    <section
      id="core_tech"
      className="px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-headline-lg">
          TECHNOLOGIES_I_LOVE
        </h2>
        <p className="font-mono text-label-caps tracking-[0.2em] text-on-surface-variant">
          CORE_SYSTEMS_AND_FRAMEWORKS
        </p>
      </div>

      <div className="mx-auto grid max-w-container-max grid-cols-2 gap-stack-md sm:grid-cols-4 lg:grid-cols-6">
        {techGrid.map((tech, index) => (
          <motion.div
            key={tech.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
            className="glass-card group flex flex-col items-center justify-center gap-4 p-6 transition-transform hover:-translate-y-1"
          >
            <div
              className={`text-3xl font-bold transition-transform group-hover:scale-110 ${tech.color}`}
            >
              {tech.emoji}
            </div>
            <span className="font-mono text-[10px] text-on-surface">
              {tech.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
