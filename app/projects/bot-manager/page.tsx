"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BotManagerCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-6">
            <span>⭐</span>
            <span>Hero Project</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">
            Bot Manager & Automation Orchestrator
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8">
            A centralized platform to manage, schedule, monitor, and scale Python automation bots across RCM workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://botveta-dev.mbsrcm.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              View Live Demo →
            </a>
          </div>
        </motion.div>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Problem
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              US Healthcare RCM operations require multiple Python automation bots running across different processes (Eligibility Verification, Prior Authorization, Claims Processing). Each bot was managed separately, making it difficult to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Schedule and coordinate bot executions across teams</li>
              <li>Monitor bot performance and track process-wise metrics</li>
              <li>Scale automation workflows as business needs grow</li>
              <li>Provide visibility into user-wise and data-wise execution insights</li>
              <li>Maintain and update bots without disrupting operations</li>
            </ul>
            <p>
              This fragmented approach limited scalability and made it challenging to offer automation as a commercial product for other RCM companies.
            </p>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Solution
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              Built <strong className="text-neutral-900 dark:text-white">Bot Manager</strong> — a centralized orchestration platform that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Centralized Control:</strong> Single dashboard to manage all Python bots</li>
              <li><strong>Scheduling & Triggers:</strong> Automated scheduling with configurable triggers</li>
              <li><strong>Real-time Monitoring:</strong> Process-wise, user-wise, and data-wise execution insights</li>
              <li><strong>Scalable Architecture:</strong> Built to handle multiple bots and high-volume operations</li>
              <li><strong>Commercial Ready:</strong> Designed as a product that can be sold to other RCM companies</li>
            </ul>
            <p>
              The platform enables teams to trigger, schedule, and monitor all automation bots from one place, with complete visibility into execution patterns and performance metrics.
            </p>
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Architecture
          </h2>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50/50 to-neutral-100/50 dark:from-neutral-900/50 dark:to-neutral-950/50 p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Frontend</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Next.js dashboard for user interface and real-time monitoring</p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Backend API</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">FastAPI microservices for bot orchestration and scheduling</p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Bot Execution Engine</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Python automation bots with standardized interfaces</p>
                </div>
                <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Database & Storage</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">SQL database for execution logs, metrics, and configuration</p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 dark:border-purple-500/30">
                <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">Cloud Infrastructure</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">AWS deployment with Docker containers for scalable execution</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "FastAPI", "Next.js", "SQL", "AWS", "Docker", "Automation"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-sm font-medium border border-neutral-300/50 dark:border-neutral-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* What I Built */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            What I Built
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Designed and implemented the platform architecture using Figma before development</li>
              <li>Built FastAPI backend with microservices architecture for bot orchestration</li>
              <li>Developed Next.js frontend dashboard for scheduling, monitoring, and reporting</li>
              <li>Created standardized interfaces for Python bots to integrate with the platform</li>
              <li>Implemented process-wise, user-wise, and data-wise execution tracking</li>
              <li>Built scheduling system with configurable triggers and execution patterns</li>
              <li>Set up AWS infrastructure with Docker for scalable deployment</li>
            </ul>
          </div>
        </motion.section>

        {/* Current Stage / Roadmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Current Stage & Roadmap
          </h2>
          <div className="space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              <strong className="text-neutral-900 dark:text-white">Current Status:</strong> Platform is in active development and approximately halfway to completion. Core orchestration features are implemented and being tested in production.
            </p>
            <p>
              <strong className="text-neutral-900 dark:text-white">Next Steps:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Complete advanced monitoring and analytics features</li>
              <li>Enhance scalability for multi-tenant deployments</li>
              <li>Add advanced scheduling and workflow automation</li>
              <li>Prepare for commercial launch as an RCM automation product</li>
            </ul>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:border-neutral-500 dark:hover:border-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900/50 transition-all"
          >
            ← Back to Projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
