"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";
import { RESUME_FILE_NAME, RESUME_PDF_PATH } from "@/app/data/site";

export default function Resume() {
  return (
    <section
      id="resume"
      className="px-margin-mobile py-section-gap md:px-margin-desktop"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card mx-auto max-w-4xl bg-gradient-to-b from-surface-charcoal to-deep-black p-12 text-center"
      >
        <MaterialIcon name="file_download" className="mb-6 text-6xl text-primary" />
        <h2 className="mb-4 font-display text-headline-lg">RESUME_INTERFACE</h2>
        <p className="mb-12 text-on-surface-variant">
          Download the full technical specification of my journey and skills.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-stack-lg text-left md:grid-cols-3">
          <div className="border-l-2 border-primary p-4">
            <div className="mb-1 font-mono text-[10px] opacity-50">EXPERIENCE</div>
            <div className="font-display text-headline-md">2+ Years</div>
          </div>
          <div className="border-l-2 border-electric-blue p-4">
            <div className="mb-1 font-mono text-[10px] opacity-50">LOCATION</div>
            <div className="font-display text-headline-md">Mangalore, IN</div>
          </div>
          <div className="border-l-2 border-neon-purple p-4">
            <div className="mb-1 font-mono text-[10px] opacity-50">STATUS</div>
            <div className="font-display text-headline-md">Open to Work</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/resume"
            className="bg-primary px-10 py-5 font-mono text-label-caps uppercase tracking-widest text-on-primary-container transition-transform hover:scale-105"
          >
            VIEW_INLINE
          </Link>
          <a
            href={RESUME_PDF_PATH}
            download={RESUME_FILE_NAME}
            className="border border-primary/40 px-10 py-5 font-mono text-label-caps uppercase tracking-widest text-primary transition-all hover:bg-primary/10"
          >
            GET_PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
}
