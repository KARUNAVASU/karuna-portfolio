"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { featuredProject } from "@/app/data/projects";

export default function BotManagerCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <>
          <p>
            US Healthcare RCM operations require multiple Python automation bots running
            across different processes (Eligibility Verification, Prior Authorization,
            Claims Processing). Each bot was managed separately, making it difficult to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Schedule and coordinate bot executions across teams</li>
            <li>Monitor bot performance and track process-wise metrics</li>
            <li>Scale automation workflows as business needs grow</li>
            <li>Provide visibility into user-wise and data-wise execution insights</li>
            <li>Maintain and update bots without disrupting operations</li>
          </ul>
          <p>
            This fragmented approach limited scalability and made it challenging to offer
            automation as a commercial product for other RCM companies.
          </p>
        </>
      ),
    },
    {
      title: "Solution",
      content: (
        <>
          <p>
            Built <strong className="text-slate-950 dark:text-white">Bot Manager</strong> — a centralized
            orchestration platform that provides:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>
              <strong className="text-slate-950 dark:text-white">Centralized Control:</strong> Single dashboard
              to manage all Python bots
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Scheduling & Triggers:</strong> Automated
              scheduling with configurable triggers
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Real-time Monitoring:</strong> Process-wise,
              user-wise, and data-wise execution insights
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Scalable Architecture:</strong> Built to
              handle multiple bots and high-volume operations
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Commercial Ready:</strong> Designed as a
              product for other RCM companies
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Architecture",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Frontend", desc: "Next.js dashboard for UI and real-time monitoring" },
            { title: "Backend API", desc: "FastAPI microservices for orchestration and scheduling" },
            { title: "Bot Execution Engine", desc: "Python bots with standardized interfaces" },
            { title: "Database & Storage", desc: "SQL for execution logs, metrics, and config" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-950/30 dark:border-sky-300/10"
            >
              <h3 className="font-bold text-slate-950 mb-1 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-neutral-400">{item.desc}</p>
            </div>
          ))}
          <div className="md:col-span-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-950/30 dark:border-sky-300/10">
            <h3 className="font-bold text-slate-950 mb-1 dark:text-white">Cloud Infrastructure</h3>
            <p className="text-sm text-slate-600 dark:text-neutral-400">
              AWS deployment with Docker containers for scalable execution
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "What I Built",
      content: (
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Designed platform architecture using Figma before development</li>
          <li>Built FastAPI backend with microservices for bot orchestration</li>
          <li>Developed Next.js frontend for scheduling, monitoring, and reporting</li>
          <li>Created standardized interfaces for Python bot integration</li>
          <li>Implemented process-wise, user-wise, and data-wise execution tracking</li>
          <li>Built scheduling system with configurable triggers</li>
          <li>Set up AWS infrastructure with Docker for scalable deployment</li>
        </ul>
      ),
    },
    {
      title: "Current Stage & Roadmap",
      content: (
        <>
          <p>
            <strong className="text-slate-950 dark:text-white">Current Status:</strong> Platform is in active
            development; core orchestration features are implemented and tested in
            production.
          </p>
          <p>
            <strong className="text-slate-950 dark:text-white">Next Steps:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Complete advanced monitoring and analytics features</li>
            <li>Enhance scalability for multi-tenant deployments</li>
            <li>Add advanced scheduling and workflow automation</li>
            <li>Prepare for commercial launch as an RCM automation product</li>
          </ul>
        </>
      ),
    },
  ];

  return <CaseStudyLayout project={featuredProject} sections={sections} />;
}
