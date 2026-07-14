"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "./PageShell";
import type { Project } from "@/app/data/projects";
import { posterClass } from "@/app/data/projects";

interface CaseStudySection {
  title: string;
  content: React.ReactNode;
}

interface CaseStudyLayoutProps {
  project: Project;
  sections: CaseStudySection[];
  backHref?: string;
}

export default function CaseStudyLayout({
  project,
  sections,
  backHref = "/#outputs",
}: CaseStudyLayoutProps) {
  const liveBtn = project.buttons?.find((b) => b.type === "Live");

  return (
    <PageShell backHref={backHref} backLabel="BACK_TO_PROJECTS">
      <div
        className={`relative min-h-[280px] md:min-h-[360px] ${posterClass(project.poster)}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16">
          <span className="section-label text-sky-300">Case study</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mb-6">{project.outcome}</p>
          {liveBtn && (
            <a
              href={liveBtn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block px-6 py-3 rounded-full text-sm"
            >
              View Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16 space-y-12">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="elevated-panel rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4 dark:text-white">{section.title}</h2>
            <div className="text-slate-700 leading-relaxed space-y-4 dark:text-neutral-300">{section.content}</div>
          </motion.section>
        ))}

        {project.tech.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="elevated-panel rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-slate-950 mb-4 dark:text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        <div className="text-center pt-4 border-t border-slate-200 dark:border-white/10">
          <Link
            href="/#projects"
            className="btn-ghost inline-block px-6 py-3 rounded-full text-sm"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
