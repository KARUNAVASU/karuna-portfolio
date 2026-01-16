"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

const projects: Project[] = [
  {
    title: "Bot Manager & Automation Orchestrator",
    description:
      "A centralized platform to manage, schedule, monitor, and scale Python automation bots across RCM workflows. Designed as a production-grade orchestration system with process-wise, user-wise, and data-wise execution insights. Built to scale as a commercial RCM automation product.",
    tech: ["Python", "FastAPI", "Next.js", "SQL", "AWS", "Automation"],
    highlight: true,
  },
  {
    title: "Lite Bot Manager (POC)",
    description:
      "A lightweight automation dashboard built to validate business requirements and feasibility before scaling into a full orchestration platform. Served as proof of concept that accelerated automation adoption and became the foundation for the full platform.",
    tech: ["Python", "FastAPI", "React", "Automation"],
  },
  {
    title: "AI-Powered IVR Automation System",
    description:
      "An AI-assisted IVR system that automates insurance calls using LLMs. Users upload Excel files with claim/EV/auth data, and the system initiates automated calls to insurance providers. LLMs handle IVR prompts, and calls route to live agents only when human intervention is required. Future roadmap includes fully autonomous AI-to-AI verification.",
    tech: ["Python", "LLMs", "IVR", "APIs", "Cloud"],
  },
  {
    title: "Healthcare RCM Workflow Automation",
    description:
      "A collection of production-grade automation tools for US healthcare RCM operations. Automated Eligibility Verification (EV), Prior Authorization, and Claims Processing workflows, significantly reducing manual effort, improving accuracy, and enabling scalability across healthcare operations.",
    tech: ["Python", "Selenium", "SQL", "Automation"],
  },
  {
    title: "Database Development for Microfluidics",
    description:
      "Developed a comprehensive database system for microfluidics research at Manipal Academy of Higher Education. Designed and implemented database schemas to support research data management, enabling efficient data storage, retrieval, and analysis for microfluidics experiments.",
    tech: ["SQL", "Database Design", "Data Management"],
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Production-grade systems and platforms I've built
          </p>
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
                
                <h3 className={`font-bold mb-3 ${
                  project.highlight ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                } text-neutral-900 dark:text-white`}>
                  {project.title}
                </h3>
                
                <p className={`text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed ${
                  project.highlight ? "text-base md:text-lg" : "text-base"
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm font-medium border border-neutral-300/50 dark:border-neutral-700/50 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-all backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

