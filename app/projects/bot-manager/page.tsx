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
            US Healthcare RCM operations run many Python automation bots across
            Eligibility Verification, Prior Authorization, and Claims. Each bot
            was managed separately, making it difficult to schedule, monitor,
            assign ownership, and scale as a multi-tenant product.
          </p>
          <ul className="ml-2 list-inside list-disc space-y-2">
            <li>No single place for instance lifecycle, schedules, or run logs</li>
            <li>Hard to coordinate batches and multi-step workflows</li>
            <li>Weak org-scoped RBAC and operational auditability</li>
          </ul>
        </>
      ),
    },
    {
      title: "Solution — App Hub / BotVeta",
      content: (
        <>
          <p>
            Built <strong className="text-slate-950 dark:text-white">BotVeta</strong>{" "}
            as the App Hub automation platform: a .NET control plane, React
            operator portal, and Next.js admin console.
          </p>
          <ul className="ml-2 list-inside list-disc space-y-2">
            <li>
              <strong className="text-slate-950 dark:text-white">Operator portal:</strong>{" "}
              dashboards, bot instances, library + access requests, batches,
              timezone-aware workflow schedules, integrations (Twilio), Audit
              Center (process templates, copy-process, response review)
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Backend:</strong>{" "}
              JWT auth (OTP, Google, org switch), Hangfire cron jobs, run-now +
              conflict checks, workflow step executor, app-request / usage APIs
            </li>
            <li>
              <strong className="text-slate-950 dark:text-white">Admin console:</strong>{" "}
              organizations, users, grants, bot catalog, HTTP logs, PDF &amp;
              Slack ops, Product Weekly Update board pack
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Architecture",
      content: (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              title: "Operator UI",
              desc: "wor-frontend — React 19 + Vite, org-scoped apps & RBAC nav",
            },
            {
              title: "Control plane",
              desc: "wor-backend — .NET 9 Web API + Worker, Hangfire + SQL Server",
            },
            {
              title: "Admin UI",
              desc: "apphub_admin — Next.js tenant/user/app/bot governance",
            },
            {
              title: "Downstream products",
              desc: "BFF proxies to FastAPI AI PDF + Slack tracker with forwarded JWT",
            },
            {
              title: "Secrets & ops",
              desc: "Azure Key Vault, Serilog, async HTTP request logging",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-sky-300/10 dark:bg-slate-950/30"
            >
              <h3 className="mb-1 font-bold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-neutral-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "What I Built",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>Multi-tenant bot instance CRUD, assignees, schedules, run history</li>
          <li>Batch + workflow orchestration with trigger conflict checking</li>
          <li>Audit Center queue, work-item updates, time logs, CSV export</li>
          <li>Permission-aware navigation and route guards across App Hub products</li>
          <li>Admin surfaces for bot library, org onboarding, and grant editing</li>
        </ul>
      ),
    },
    {
      title: "Impact",
      content: (
        <p>
          Centralized coordination for production RCM automation — roughly{" "}
          <strong className="text-slate-950 dark:text-white">
            40–60% less manual coordination
          </strong>{" "}
          — while keeping org RBAC, durable scheduling, and clear seams to AI
          PDF and Slack products.
        </p>
      ),
    },
  ];

  return <CaseStudyLayout project={featuredProject} sections={sections} />;
}
