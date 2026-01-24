"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[65ch]">
            My professional journey and key achievements
          </p>
        </div>
        
        <div className="relative space-y-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent"></div>
          
          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-white dark:border-neutral-900"></div>
            
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                      Python Developer
                    </h3>
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                      Integrity Healthcare Solutions Pvt Ltd
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Ahmedabad, Gujarat, India • December 2023 - Present
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>
                      Built and maintained automation-first workflows for US healthcare RCM operations (EV/Auth/Claims), improving turnaround time and reducing manual effort across teams
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    <span>
                      Engineered Python orchestration pipelines integrated with <span className="text-neutral-900 dark:text-white font-semibold">Availity</span>, reducing claim processing turnaround by <span className="text-green-600 dark:text-green-400 font-bold">95%</span> and enabling faster high-volume execution
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-pink-500 flex-shrink-0"></span>
                    <span>
                      Designed scalable bot execution patterns with retry handling, logging, and failure recovery, improving production stability and bot success rate
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
                    <span>
                      Developed backend microservices + workflow engine logic to improve system reliability by <span className="text-green-600 dark:text-green-400 font-bold">~40%</span>, focusing on stability, retries, and scalable execution patterns
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></span>
                    <span>
                      Contributed to building a <span className="text-neutral-900 dark:text-white font-semibold">Bot Manager / Orchestrator platform</span> to schedule, monitor, and scale multiple bots with process-wise and user-wise visibility
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    <span>
                      Automated EHR workflows (<span className="text-neutral-900 dark:text-white font-semibold">Practice Fusion</span>) by designing execution-ready flows and integrations, improving operational efficiency by <span className="text-green-600 dark:text-green-400 font-bold">~40%</span>
                    </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></span>
                    <span>
                      Reduced regression and verification effort by <span className="text-green-600 dark:text-green-400 font-bold">~80%</span> by implementing reusable test scripts, validation checks, and structured reviews
                    </span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Research Intern */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-white dark:border-neutral-900"></div>
            
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                      Research Intern
                    </h3>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                      Manipal Institute of Technology
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Udupi, Karnataka, India • February 2023 - December 2023
                    </p>
                  </div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Conducted research on Electrocardiogram Heart Rate Variability Signal Analysis, contributing to published IEEE paper and earning Best Paper and Best Presenter awards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Science Intern */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-4 border-white dark:border-neutral-900"></div>
            
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                      Data Science Intern
                    </h3>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                      Zephyr Technologies and Solutions PVT LTD
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Mangaluru, Karnataka, India • June 2023 - July 2023
                    </p>
                  </div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                  Developed a real-time chat application using Python and Django with WebSocket connections for real-time messaging and PostgreSQL for database management.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

