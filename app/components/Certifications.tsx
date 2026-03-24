"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  /** Direct credential or certificate URL; omit when only shown on LinkedIn profile */
  link?: string;
  credentialId?: string;
}

/**
 * Dates and credential IDs match your learning history; Coursera links use public certificate URLs.
 * Replace LinkedIn-only entries with per-course certificate URLs from LinkedIn Learning when you have them.
 */
const certifications: Certification[] = [
  {
    name: "Jira Fundamentals Badge",
    issuer: "Atlassian",
    date: "Dec 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
    credentialId: "287405390",
  },
  {
    name: "Jira Fundamentals Assessment",
    issuer: "Atlassian",
    date: "Dec 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "KPMG Data Analytics Consulting Virtual Internship",
    issuer: "Forage",
    date: "Jun 2023",
    link: "https://www.theforage.com/certificates/rxgFZhzDnZFkBrc6g",
    credentialId: "rxgFZhzDnZFkBrc6g",
  },
  {
    name: "Deep Learning",
    issuer: "Manipal Institute of Technology",
    date: "Jun 2022",
  },
  {
    name: "Skills for Healthcare Data Analysts",
    issuer: "LinkedIn Learning",
    date: "Jun 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "Linux System Engineer: Advanced Disk Systems and System Backup",
    issuer: "LinkedIn Learning",
    date: "Jan 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "SAS Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jan 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "Descriptive Analysis for Healthcare Research",
    issuer: "LinkedIn Learning",
    date: "Jan 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "The Non-Technical Skills of Effective Data Scientists",
    issuer: "LinkedIn Learning",
    date: "Apr 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "Tableau Essential Training",
    issuer: "LinkedIn Learning",
    date: "Apr 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "Machine Learning for Intelligent Systems",
    issuer: "IEEE Robotics and Automation Society",
    date: "Apr 2023",
    link: "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/",
  },
  {
    name: "Google Foundations: Data, Data, Everywhere",
    issuer: "Coursera (Google)",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/NNRLVXNPMX8J",
    credentialId: "NNRLVXNPMX8J",
  },
  {
    name: "Drug Discovery",
    issuer: "Coursera",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/7TXLZYDE9MRJ",
    credentialId: "7TXLZYDE9MRJ",
  },
  {
    name: "JavaScript Basics",
    issuer: "Coursera",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/FLYFHJXB9DBD",
    credentialId: "FLYFHJXB9DBD",
  },
  {
    name: "Clinical Trials Data Management and Quality Assurance",
    issuer: "Coursera",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/W2W77F4ULJJW",
    credentialId: "W2W77F4ULJJW",
  },
];

const linkedInCerts =
  "https://www.linkedin.com/in/karuna-vasu-506414221/details/certifications/";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative border-t border-neutral-200/80 dark:border-neutral-800/50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-4">
            Professional certifications and courses—with dates and links to verify or view the credential.
          </p>
          <motion.a
            href={linkedInCerts}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span>🔗</span>
            <span>All LinkedIn Learning &amp; misc. credentials on my profile</span>
            <span>→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => {
            const href = cert.link;
            const interactive = !!href;
            const className =
              "group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-4 sm:p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 block h-full " +
              (interactive
                ? "cursor-pointer hover:scale-[1.02] hover:-translate-y-0.5"
                : "");

            const inner = (
              <>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    🎓
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-1 line-clamp-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-600">
                      {cert.date}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-1 font-mono">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  {interactive && (
                    <span className="text-xs text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  )}
                </div>
                {!interactive && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-600 mt-3 pl-11">
                    Certificate held offline; date shown as completed.
                  </p>
                )}
              </>
            );

            return (
              <motion.div
                key={`${cert.name}-${cert.date}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                {interactive ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={className}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
