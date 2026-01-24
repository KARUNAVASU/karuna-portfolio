"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl relative z-10 flex flex-col items-center text-center"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border border-neutral-300/50 dark:border-neutral-700/50 shadow-sm bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src="/profile.jpg"
                  alt="Karuna Vasu"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                  style={{ 
                    objectPosition: 'center center',
                    width: '100%',
                    height: '100%'
                  }}
                  onError={() => setImageError(true)}
                  onLoad={() => setImageError(false)}
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-neutral-400 dark:text-neutral-500 text-xl md:text-2xl font-medium">
                  KV
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 leading-tight"
        >
          <span className="gradient-text bg-clip-text text-transparent">
            Karuna Vasu
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 mb-2 font-semibold"
        >
          Full-Stack Python Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-8 font-medium"
        >
          Automation Platforms • AI Workflows • US Healthcare RCM
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8"
        >
          I build automation-first systems and orchestration platforms that ship real business outcomes.
        </motion.p>

        {/* Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
            US Healthcare RCM
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
            EV / Auth / Claims Automation
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
            Bot Orchestration Platform
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-sm font-medium">
            AI-assisted IVR Workflows
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-semibold border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

