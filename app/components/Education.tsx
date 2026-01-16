"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Science",
    field: "Bioinformatics",
    institution: "Manipal Academy of Higher Education",
    location: "Manipal, India",
    period: "04/2021 - 01/2023",
    gpa: "7.24",
    project: "Electrocardiogram Heart Rate Variability Signal Analysis and Data Acquisition",
  },
  {
    degree: "Bachelor of Science",
    field: "Bioinformatics",
    institution: "Sardar Patel University",
    location: "Anand, India",
    period: "04/2018 - 01/2021",
    gpa: "7.00",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
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
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                      {edu.degree}: {edu.field}
                    </h3>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-base text-neutral-500 dark:text-neutral-500">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-1">{edu.period}</p>
                    <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </div>
                {edu.project && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-2">Research Project:</p>
                    <p className="text-base text-neutral-700 dark:text-neutral-300 italic">
                      {edu.project}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

