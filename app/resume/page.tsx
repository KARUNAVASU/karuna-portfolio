"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors print:bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8 px-4 sm:px-6 md:px-12 lg:px-24 print:py-4 print:bg-purple-600">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/#resume"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 text-sm font-medium print:hidden"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-1 print:text-2xl">Karuna Vasu</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 print:text-base">Python Developer | Automation & Platform Engineering | Full-Stack</p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm print:text-xs">
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Mangalore, Karnataka 575003, India</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📱</span>
              <a href="tel:+916350545182" className="hover:underline print:text-white">+91 63505 45182</a>
            </div>
            <div className="flex items-center gap-1">
              <span>📧</span>
              <a href="mailto:karunavasu525@gmail.com" className="hover:underline print:text-white">karunavasu525@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <span>💼</span>
              <a href="https://linkedin.com/in/karuna-vasu-506414221" target="_blank" rel="noopener noreferrer" className="hover:underline print:text-white">linkedin.com/in/karuna-vasu-506414221</a>
            </div>
            <div className="flex items-center gap-1">
              <span>💻</span>
              <a href="https://github.com/KARUNAVASU" target="_blank" rel="noopener noreferrer" className="hover:underline print:text-white">github.com/KARUNAVASU</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-8 print:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-5 print:space-y-4">
            {/* Professional Summary */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Professional Summary
              </h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed print:text-xs">
                Full-Stack Python Developer with 2+ years of experience building automation platforms and orchestration tools for US Healthcare (RCM). Proven track record in reducing processing time by up to 95% and improving system performance by up to 40% through efficient backend design, test automation, and database optimization. Expert in automation-first systems, LLM-powered workflows, healthcare RCM operations, and intelligent bot orchestration. Specialized in building production-grade bot management platforms and AI-assisted IVR systems.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Work Experience
              </h2>
              
              <div className="space-y-4 print:space-y-3">
                {/* Current Role */}
                <div className="border-l-2 border-purple-600 pl-3 print:pl-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white print:text-base">Python Developer</h3>
                      <p className="text-base text-neutral-600 dark:text-neutral-400 print:text-sm">Integrity Healthcare Solutions Pvt Ltd</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium border border-green-500/30 print:text-xs">
                      Dec 2023 - Jan 2026
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 print:text-xs">Ahmedabad, Gujarat, India</p>
                  <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300 print:text-xs print:space-y-0.5">
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Built and maintained automation-first workflows for US healthcare RCM operations (EV/Auth/Claims), improving turnaround time and reducing manual effort</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Engineered Python automation pipelines integrated with <strong>Availity</strong>, reducing claim processing turnaround by <strong className="text-green-600 dark:text-green-400">95%</strong> and enabling faster high-volume execution</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Developed backend microservices + orchestration logic to improve system reliability by <strong className="text-green-600 dark:text-green-400">~40%</strong>, focusing on stability, retries, and scalable execution patterns</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Contributed to building a <strong>Bot Manager / Orchestrator platform</strong> to schedule, monitor, and scale multiple automation bots with process-wise and user-wise visibility</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Automated EHR workflows (<strong>Practice Fusion</strong>) by designing automation-ready flows and integrations, improving operational efficiency by <strong className="text-green-600 dark:text-green-400">~40%</strong></span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="mt-1 w-1 h-1 rounded-full bg-purple-600 flex-shrink-0"></span>
                      <span>Reduced regression and verification effort by <strong className="text-green-600 dark:text-green-400">~80%</strong> by implementing reusable test scripts, automation checks, and structured reviews</span>
                    </li>
                  </ul>
                </div>

                {/* Research Intern */}
                <div className="border-l-2 border-blue-500 pl-3 print:pl-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white print:text-base">Research Intern</h3>
                      <p className="text-base text-neutral-600 dark:text-neutral-400 print:text-sm">Manipal Institute of Technology</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-medium border border-blue-500/30 print:text-xs">
                      Feb 2023 - Dec 2023
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 print:text-xs">Udupi, Karnataka, India</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 print:text-xs">
                    Published IEEE paper as first author on ECG Heart Rate Variability, earning <strong className="text-yellow-600 dark:text-yellow-400">Best Paper</strong> and <strong className="text-yellow-600 dark:text-yellow-400">Best Presenter</strong> awards.
                  </p>
                </div>

                {/* Data Science Intern */}
                <div className="border-l-2 border-green-500 pl-3 print:pl-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white print:text-base">Data Science Intern</h3>
                      <p className="text-base text-neutral-600 dark:text-neutral-400 print:text-sm">Zephyr Technologies and Solutions PVT LTD</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-medium border border-green-500/30 print:text-xs">
                      Jun 2023 - Jul 2023
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2 print:text-xs">Mangaluru, Karnataka, India</p>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 print:text-xs">
                    Developed real-time chat application using Python, Django, and PostgreSQL with WebSocket connections.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Key Projects
              </h2>
              <div className="space-y-3 print:space-y-2">
                <div className="border-l-2 border-purple-600 pl-3 print:pl-2">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1 print:text-sm">
                    Bot Manager & Automation Orchestrator
                  </h3>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 print:text-xs">
                    Centralized platform to manage, schedule, monitor, and scale Python automation bots. Built to scale as a commercial RCM automation product. <span className="text-purple-600 dark:text-purple-400">Python, FastAPI, Next.js, SQL, AWS</span>
                  </p>
                </div>

                <div className="border-l-2 border-blue-500 pl-3 print:pl-2">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1 print:text-sm">
                    AI-Powered IVR Automation System
                  </h3>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 print:text-xs">
                    AI-assisted IVR system using LLMs for intelligent call routing and verification. Routes to live agents only when needed. <span className="text-blue-600 dark:text-blue-400">Python, LLMs, IVR, APIs, Cloud</span>
                  </p>
                </div>

                <div className="border-l-2 border-green-500 pl-3 print:pl-2">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1 print:text-sm">
                    Healthcare RCM Workflow Automation
                  </h3>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 print:text-xs">
                    Comprehensive automation for Eligibility Verification, Prior Authorization, and Claims Processing. <span className="text-green-600 dark:text-green-400">Python, Selenium, SQL, Automation</span>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-5 print:space-y-4">
            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 print:gap-1">
                {[
                  "Python", "Django", "Flask", "FastAPI", "REST APIs",
                  "TensorFlow", "Scikit-learn", "Machine Learning", "AI/ML",
                  "PostgreSQL", "SQL", "Pandas", "Data Analysis",
                  "AWS", "Docker", "CI/CD", "Microservices",
                  "Selenium", "Automation", "Git", "Agile",
                  "React", "Next.js", "JavaScript", "TypeScript"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium border border-purple-200 dark:border-purple-800 print:text-xs print:px-1.5 print:py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Education
              </h2>
              <div className="space-y-3 print:space-y-2">
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white text-sm print:text-xs">Master of Science: Bioinformatics</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 print:text-xs">Manipal Academy of Higher Education</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 print:text-xs">2021 - 2023 • GPA: 7.24</p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-white text-sm print:text-xs">Bachelor of Science: Bioinformatics</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 print:text-xs">Sardar Patel University</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 print:text-xs">2018 - 2021 • GPA: 7.00</p>
                </div>
              </div>
            </section>

            {/* Publications */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Publications
              </h2>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-xs mb-1 print:text-xs">
                  ECG Heart Rate Variability Signal Analysis
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1 print:text-xs">
                  IEEE NMITCON 2023
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium print:text-xs">
                    Best Paper
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium print:text-xs">
                    Best Presenter
                  </span>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2 print:text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Languages
              </h2>
              <div className="space-y-1 text-sm print:text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">English</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">Full Professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-700 dark:text-neutral-300">Gujarati</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">Native</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 print:hidden z-50">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <span className="text-xl">🌙</span>
            ) : (
              <span className="text-xl">☀️</span>
            )}
          </button>
        )}

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Print resume"
        >
          <span className="text-xl">🖨️</span>
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-110"
          aria-label="Download resume"
        >
          <span className="text-xl">📥</span>
        </button>
      </div>
    </div>
  );
}

