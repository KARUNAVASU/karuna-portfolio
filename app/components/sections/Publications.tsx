"use client";

import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";
import SectionAside from "../ui/SectionAside";
import type { Publication } from "@/app/data/publications";

const awardToneClass = {
  primary: "text-primary",
  "electric-blue": "text-electric-blue",
} as const;

type PublicationsProps = {
  publication: Publication;
};

export default function Publications({ publication }: PublicationsProps) {
  return (
    <section id="logs" className="px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="glass-card relative overflow-hidden border-t-2 border-primary p-8 md:p-12">
        <div
          className="pointer-events-none absolute right-0 top-0 opacity-[0.04]"
          aria-hidden
        >
          <MaterialIcon name="article" className="text-[12rem] md:text-[200px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-stack-lg lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-4">
            <SectionAside label="PUBLICATIONS" title="RESEARCH_" titleAccent="PATH" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-8"
          >
            <p className="mb-4 inline-block bg-neon-purple/20 px-3 py-1 font-mono text-[12px] text-neon-purple">
              {publication.venue}
            </p>

            <h3 className="mb-6 font-display text-xl leading-snug md:text-headline-md md:leading-tight">
              {publication.title}
            </h3>

            <p className="mb-8 font-body text-body-lg text-on-surface-variant">
              {publication.authors}
            </p>

            <ul className="mb-10 flex flex-wrap gap-gutter">
              {publication.awards.map((award) => (
                <li
                  key={award.label}
                  className={`flex items-center gap-2 ${awardToneClass[award.tone]}`}
                >
                  <MaterialIcon name={award.icon} filled />
                  <span className="font-mono text-label-caps">{award.label}</span>
                </li>
              ))}
            </ul>

            {publication.link ? (
              <div className="flex flex-wrap gap-4">
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 bg-white/5 px-6 py-3 font-mono text-label-caps transition-all hover:bg-white/10"
                >
                  IEEE XPLORE
                </a>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/10 bg-white/5 px-6 py-3 font-mono text-label-caps transition-all hover:bg-white/10"
                >
                  DOI_LINK
                </a>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
