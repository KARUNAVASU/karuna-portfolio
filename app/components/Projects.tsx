"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  outcome: string;
  highlights: string[];
  architecture?: string;
  impact?: string;
  tech: string[];
  highlight?: boolean;
  icon?: string;
  role?: string;
  buttons?: {
    label: string;
    href: string;
    type: "Live" | "Read" | "Build";
  }[];
}

const projects: Project[] = [
  {
    title: "Bot Manager & Automation Orchestrator",
    outcome: "Central platform to run, schedule, monitor, and scale Python bots across RCM workflows.",
    highlights: [
      "Unified dashboard for multi-bot control (process-wise + user-wise)",
      "Scheduling, re-runs, execution tracking & visibility",
      "Built for production scaling (orchestrator-style architecture)"
    ],
    architecture: "Next.js → FastAPI → Bot Runner → SQL Logs/Reports",
    impact: "~40–60% reduction in manual coordination",
    role: "Lead developer (design + backend + integration)",
    tech: ["Python", "FastAPI", "Next.js", "SQL", "AWS"],
    highlight: true,
    icon: "⭐",
    buttons: [
      { label: "Live", href: "https://botveta-dev.mbsrcm.com/login", type: "Live" },
      { label: "Build", href: "http://20.119.86.24:3000/login", type: "Build" },
      { label: "Read", href: "/projects/bot-manager", type: "Read" },
    ],
  },
  {
    title: "Lite Bot Manager (POC)",
    outcome: "Lightweight dashboard built to validate orchestration needs before scaling.",
    highlights: [
      "Quick bot launch + basic tracking",
      "Validated access control + bot grouping + execution flow",
      "Became the base for the full Bot Manager"
    ],
    impact: "~30–50% faster bot triggering",
    tech: ["Python", "FastAPI", "React"],
    icon: "⚙️",
    buttons: [
      { label: "Live", href: "http://20.119.86.24:3000/login", type: "Live" },
    ],
  },
  {
    title: "AI Voice Automation (IVR + LLM)",
    outcome: "AI-assisted IVR automation that runs insurance calls from Excel data with smart agent handoff.",
    highlights: [
      "LLM handles IVR prompts to reduce agent time",
      "AI-to-human call handoff when a live rep connects",
      "Designed for future AI-to-AI verification"
    ],
    impact: "~50–70% less IVR navigation time",
    tech: ["Python", "LLMs", "IVR", "APIs", "Cloud"],
    icon: "🤖",
    buttons: [
      { label: "Live", href: "https://ivr.mbsrcm.com/login", type: "Live" },
    ],
  },
  {
    title: "RCM Automation Suite (EV • Auth • Claims)",
    outcome: "Built multiple internal workflow engines supporting EV, Prior Auth, and Claims operations at scale.",
    highlights: [
      "Automated high-volume workflows across multiple RCM processes",
      "Standardized validations, retries, and execution checks for stability",
      "Improved consistency, turnaround time, and operational throughput"
    ],
    impact: "~40–80% reduction in repetitive effort (varies by workflow)",
    tech: ["Python", "Selenium", "SQL"],
    icon: "🏥",
    buttons: [
      { label: "Read", href: "/projects/rcm-automation-suite", type: "Read" },
    ],
  },
];

const otherWork: Project[] = [
  {
    title: "Database Development for Microfluidics",
    outcome: "Designed a structured database system for storing and managing microfluidics research data efficiently.",
    highlights: [
      "Schema design + data management support",
      "Improved data organization for retrieval and analysis"
    ],
    tech: ["SQL", "Database Design", "Data Management"],
    icon: "🧪",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[65ch]">
            Production-grade systems and platforms I've built
          </p>
          
          {/* Proof Strip */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
              Bot Orchestration
            </span>
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
              US Healthcare RCM
            </span>
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
              FastAPI + Next.js
            </span>
            <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30 text-neutral-700 dark:text-neutral-300 text-xs font-medium">
              LLM Voice Automation
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                project.highlight
                  ? "border-purple-500/50 bg-gradient-to-br from-neutral-50/90 to-neutral-100/90 dark:from-neutral-900/90 dark:to-neutral-950/90 lg:col-span-2"
                  : "border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60"
              } backdrop-blur-sm`}
            >
              {/* Gradient overlay for highlight */}
              {project.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
              )}
              
              <div className="relative p-8 md:p-10">
                {project.highlight && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-4"
                  >
                    <span>⭐</span>
                    <span>Hero Project</span>
                  </motion.span>
                )}
                
                <div className="flex items-start gap-3 mb-4">
                  {project.icon && (
                    <span className="text-2xl">{project.icon}</span>
                  )}
                  <h3 className={`font-bold ${
                    project.highlight ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  } text-neutral-900 dark:text-white`}>
                    {project.title}
                  </h3>
                </div>
                
                {/* Outcome */}
                <p className={`text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed max-w-[65ch] ${
                  project.highlight ? "text-base md:text-lg" : "text-base"
                }`}>
                  {project.outcome}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-2 mb-4 ml-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Architecture Preview */}
                {project.architecture && (
                  <div className="mb-4 p-4 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wide">Architecture (High Level)</p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 font-mono">{project.architecture}</p>
                  </div>
                )}
                
                {/* Role */}
                {project.role && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-3">
                    <span className="font-medium text-neutral-600 dark:text-neutral-400">My Role:</span> {project.role}
                  </p>
                )}
                
                {/* Impact */}
                {project.impact && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300">Impact:</span> {project.impact}
                  </p>
                )}
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">Stack:</span>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-neutral-300/50 dark:border-neutral-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                {project.buttons && project.buttons.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.buttons.map((button, idx) => {
                      const isExternal = button.href.startsWith("http");
                      const isRead = button.type === "Read";
                      
                      return (
                        <a
                          key={idx}
                          href={button.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 ${
                            button.type === "Live"
                              ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/30"
                              : button.type === "Read"
                              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/30"
                              : "border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500 dark:hover:border-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900/50"
                          }`}
                        >
                          {button.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
              
              {/* Hover effect glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-900 dark:text-white">
              Other Work
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-[65ch]">
              Academic and research projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {otherWork.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/40 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60 backdrop-blur-sm transition-all duration-300"
              >
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    {project.icon && (
                      <span className="text-xl">{project.icon}</span>
                    )}
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed max-w-[65ch]">
                    {project.outcome}
                  </p>
                  
                  <ul className="space-y-1.5 mb-3 ml-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-neutral-300/50 dark:border-neutral-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

