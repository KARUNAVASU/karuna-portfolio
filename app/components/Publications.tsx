"use client";

import { motion } from "framer-motion";

const publications = [
  {
    title: "Electrocardiogram Heart Rate Variability Signal Analysis and Data Acquisition: A Novel Approach for Sympathovagal Inference",
    authors: "Vasu, K., Kumar, P., Mane, P. R., Paul, B., Vaishali, K., & Sinha, M. K.",
    conference: "2023 International Conference on Network, Multimedia and Information Technology (NMITCON)",
    date: "September 2023",
    publisher: "IEEE",
    link: "https://doi.org/10.1109/NMITCON58196.2023.10276059",
    linkLabel: "DOI",
    secondaryLink: "https://ieeexplore.ieee.org/document/10276059",
    secondaryLinkLabel: "IEEE Xplore",
    achievements: [
      "Best Presenter Award",
      "Best Paper Award"
    ],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Research contributions and academic achievements
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
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
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">📄</span>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-3 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-1">
                      {pub.conference}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                      {pub.publisher} • {pub.date}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {pub.link && (
                        <motion.a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                        >
                          <span>🔗</span>
                          <span>{pub.linkLabel ?? "Publication link"}</span>
                        </motion.a>
                      )}
                      {pub.secondaryLink && (
                        <motion.a
                          href={pub.secondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:border-purple-500/50 transition-all"
                        >
                          <span>{pub.secondaryLinkLabel ?? "More"}</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {pub.achievements && pub.achievements.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">Achievements:</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 dark:from-yellow-500/20 dark:to-orange-500/20 border border-yellow-500/30 dark:border-yellow-500/30 text-yellow-700 dark:text-yellow-400 text-sm font-semibold"
                        >
                          <span>🏆</span>
                          <span>{achievement}</span>
                        </span>
                      ))}
                    </div>
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

