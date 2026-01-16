"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume() {
  return (
    <section id="resume" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            View my comprehensive resume with detailed experience, skills, and achievements
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-8 md:p-12 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
          
          <div className="relative text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
                <span className="text-4xl">📄</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                Karuna Vasu - Resume
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                Python Developer | AI/ML Specialist | Full-Stack Developer
              </p>
            </div>

            <Link
              href="/resume"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>👁️</span>
                <span>View Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-500 dark:text-neutral-600 mb-4">
                Quick Summary
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-1">Experience</p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">3+ Years</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-1">Location</p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Mangalore, India</p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-1">Status</p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

