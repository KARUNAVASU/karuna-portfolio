"use client";

import { motion } from "framer-motion";

const volunteering = [
  {
    role: "Sergeant",
    organization: "NATIONAL CADET CORPS - India",
    period: "June 2018 - July 2021",
    duration: "3 yrs 2 mos",
    type: "Social Services",
    description: "Successfully completed Combined Annual Training Camp 2019 & 2020. Served as Secretary in NCC.",
  },
  {
    role: "Community Volunteer",
    organization: "Voluntary Nature Conservancy | Vidyanagar Nature Club",
    period: "2018 - 2021",
    type: "Environment",
    description: "Active participation in environmental conservation and nature club activities.",
  },
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Volunteering</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Community engagement and social impact initiatives
          </p>
        </div>

        <div className="space-y-6">
          {volunteering.map((vol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                      {vol.role}
                    </h3>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                      {vol.organization}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {vol.period} {vol.duration && `• ${vol.duration}`}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 text-sm font-medium border border-purple-500/20">
                    {vol.type}
                  </span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {vol.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

