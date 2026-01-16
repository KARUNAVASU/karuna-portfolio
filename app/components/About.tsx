"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            Get to know my background and expertise
          </p>
        </div>
        
        <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 md:p-10 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
          
          <div className="relative space-y-5 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm a versatile <span className="text-neutral-900 dark:text-white font-semibold">Python developer</span> with <span className="text-neutral-900 dark:text-white font-semibold">3+ years</span> of experience designing automation systems, deploying machine learning solutions, and building scalable APIs and microservices in cloud-native environments.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              At Integrity Healthcare Solutions, I led automation projects that <span className="text-green-600 dark:text-green-400 font-bold">reduced claims processing time by 95%</span> and <span className="text-green-600 dark:text-green-400 font-bold">improved backend reliability by 40%</span>. My work bridges software engineering, AI/ML model development, and SQL-driven data processing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              <p className="mb-3 font-semibold text-neutral-700 dark:text-neutral-300">✅ Core Skills:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li><span className="font-semibold">Programming:</span> Python, Django, Flask, REST APIs, Git</li>
                <li><span className="font-semibold">AI/ML:</span> Scikit-learn, TensorFlow, model training & evaluation, feature engineering</li>
                <li><span className="font-semibold">Data:</span> Advanced SQL, PostgreSQL, Pandas, data wrangling & ETL</li>
                <li><span className="font-semibold">Automation & Cloud:</span> CI/CD, Docker, AWS, Agile, Selenium</li>
              </ul>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              I bring a proactive mindset, strong debugging skills, and a passion for using tech to solve real-world problems across industries.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

