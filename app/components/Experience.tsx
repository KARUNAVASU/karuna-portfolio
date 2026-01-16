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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
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
                      Engineered Python automation solutions at <span className="text-neutral-900 dark:text-white font-semibold">Availity</span>, slashing claims processing time by <span className="text-green-600 dark:text-green-400 font-bold">95%</span>, reducing it to 45 minutes for 240 claims
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
                      Achieved a <span className="text-green-600 dark:text-green-400 font-bold">30% boost</span> in operational performance by optimizing data exchange processes for major healthcare providers
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
                      Developed microservices architecture for claims processing, resulting in <span className="text-green-600 dark:text-green-400 font-bold">40% improvement</span> in system reliability
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
                      Designed workflows for <span className="text-neutral-900 dark:text-white font-semibold">Practice Fusion</span> EHR platform, improving workflow efficiency by <span className="text-green-600 dark:text-green-400 font-bold">40%</span>
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
                      Drastically cut manual testing time by <span className="text-green-600 dark:text-green-400 font-bold">80%</span> through efficient test scripts and code reviews
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

