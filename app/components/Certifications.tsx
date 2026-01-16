"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  link?: string;
}

const certifications: Certification[] = [
  { 
    name: "Jira Fundamentals Badge", 
    issuer: "Atlassian",
    date: "Dec 2023",
    credentialId: "287405390",
    link: "https://www.atlassian.com/university/certification/verify"
  },
  { 
    name: "Jira Fundamentals Assessment", 
    issuer: "Atlassian",
    date: "Dec 2023"
  },
  { 
    name: "Managing Jira Projects: 1 Introduction", 
    issuer: "LinkedIn",
    date: "Dec 2023"
  },
  { 
    name: "KPMG Data Analytics Consulting Virtual Internship", 
    issuer: "Forage",
    date: "Jun 2023",
    credentialId: "rxgFZhzDnZFkBrc6g"
  },
  { 
    name: "Skills for Healthcare Data Analysts", 
    issuer: "LinkedIn",
    date: "Jun 2023"
  },
  { 
    name: "The Non-Technical Skills of Effective Data Scientists", 
    issuer: "LinkedIn",
    date: "Apr 2023"
  },
  { 
    name: "Tableau Essential Training", 
    issuer: "LinkedIn",
    date: "Apr 2023"
  },
  { 
    name: "Clinical Trials Data Management and Quality Assurance", 
    issuer: "Coursera",
    date: "Apr 2023",
    credentialId: "W2W77F4ULJJW"
  },
  { 
    name: "Drug Discovery", 
    issuer: "Coursera",
    date: "Apr 2023",
    credentialId: "7TXLZYDE9MRJ"
  },
  { 
    name: "Foundations: Data, Data, Everywhere", 
    issuer: "Coursera",
    date: "Apr 2023",
    credentialId: "NNRLVXNPMX8J"
  },
  { 
    name: "JavaScript Basics", 
    issuer: "Coursera",
    date: "Apr 2023",
    credentialId: "FLYFHJXB9DBD"
  },
  { 
    name: "Machine Learning for Intelligent Systems", 
    issuer: "IEEE Robotics and Automation Society",
    date: "Apr 2023"
  },
  { 
    name: "Linux System Engineer: Advanced Disk Systems and System Backup", 
    issuer: "LinkedIn",
    date: "Jan 2023"
  },
  { 
    name: "SAS Essential Training: Descriptive Analysis for Healthcare Research", 
    issuer: "LinkedIn",
    date: "Jan 2023"
  },
  { 
    name: "Deep Learning", 
    issuer: "Manipal Institute of Technology",
    date: "Jun 2022"
  },
  { 
    name: "How to Write a Resume (Project-Centered Course)", 
    issuer: "Coursera",
    date: "Jun 2022",
    credentialId: "F63WGGB72BK6"
  },
  { 
    name: "Project Management: The Basics for Success", 
    issuer: "Coursera",
    date: "Jun 2022",
    credentialId: "SLJFGQAMBU7F"
  },
  { 
    name: "Secretary of National Cadet Corps (Girls)", 
    issuer: "Natubhai V Patel College",
    date: "Mar 2020"
  },
];

const linkedInProfile = "https://linkedin.com/in/karuna-vasu-506414221";

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
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
            Professional certifications and continuous learning achievements
          </p>
          <motion.a
            href={`${linkedInProfile}/details/certifications/`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            <span>🔗</span>
            <span>View all certifications with verification on LinkedIn</span>
            <span>→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link || `${linkedInProfile}/details/certifications/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-4 sm:p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">🎓</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-1 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mb-1">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-xs text-neutral-400 dark:text-neutral-600">
                      {cert.date}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-1 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
                <span className="text-xs text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

