"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    {
      name: "Email",
      href: "mailto:karunavasu525@gmail.com",
      icon: "✉️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/KARUNAVASU",
      icon: "💻",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/karuna-vasu-506414221",
      icon: "💼",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-20 md:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-4">
            Whether you're looking for a developer or want to discuss automation and AI solutions, I'd love to hear from you.
          </p>
          <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-500">
            📍 Mangalore, Karnataka 575003, India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white mb-2">{link.name}</h3>
                <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {link.name === "Email" ? "karunavasu525@gmail.com" : `Visit my ${link.name}`}
                </p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

