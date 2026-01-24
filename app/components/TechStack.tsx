"use client";

import { motion } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

const technologies: Tech[] = [
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "🚀" },
  { name: "Django", icon: "🎯" },
  { name: "Flask", icon: "🌶️" },
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "SQL", icon: "🗄️" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Selenium", icon: "🤖" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "REST APIs", icon: "🔌" },
  { name: "LLMs", icon: "🤖" },
  { name: "Git", icon: "📦" },
  { name: "CI/CD", icon: "⚙️" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "📜" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Technologies I <span className="gradient-text">Love</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-[65ch]">
            Modern tools and frameworks that power my development journey
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-purple-50/20 hover:to-blue-50/20 dark:hover:from-purple-900/20 dark:hover:to-blue-900/20 transition-all duration-300 cursor-default backdrop-blur-sm">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative z-10 text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="relative z-10 text-xs md:text-sm text-neutral-700 dark:text-neutral-300 text-center font-medium">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

