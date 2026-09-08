"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { getProjectById } from "@/app/data/projects";

const project = getProjectById("automation-dashboard")!;

export default function AutomationDashboardCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <p>
          App Hub runs bots, PDF extraction, and audits across business units, but
          leadership needed one place to see{" "}
          <strong className="text-slate-950 dark:text-white">
            time saved, FTE impact, project status, and audit quality
          </strong>{" "}
          — with permissions so each BU only sees what it should.
        </p>
      ),
    },
    {
      title: "Solution — six insight surfaces",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>
            <strong className="text-slate-950 dark:text-white">Projects</strong> —
            Azure DevOps projects (371 tracked), BU cards (Jalpa / Karim / Global),
            FTE-by-month strip (~194 total FTEs; Live ~70, Dev Done ~77), PM / SR
            CSM beside Owner, table/timeline/history, Excel export, Realized FTE
            edits — plus inline ADO discussions/comments and status &amp; color
            management patched back to DevOps
          </li>
          <li>
            <strong className="text-slate-950 dark:text-white">Business Insights</strong>{" "}
            — FTE Sent <strong>2,770</strong> (~$20.12M charge cost), FTE Accrued{" "}
            <strong>1,645</strong> (~$11.95M), process success / accuracy KPIs,
            daily patient volume + weekly success trends
          </li>
          <li>
            <strong className="text-slate-950 dark:text-white">Automation Insights</strong>{" "}
            — sample week: <strong>1,022</strong> instances,{" "}
            <strong>2,099</strong> runs, <strong>~117,986</strong> jobs,{" "}
            <strong>84%</strong> success, up to <strong>~889 hours / ~112 man-days</strong>{" "}
            savings
          </li>
          <li>
            <strong className="text-slate-950 dark:text-white">Realised FTEs</strong> —
            buffer-pool placement (e.g. 67% allocated) across BUs, with
            automation-related pooled / re-allocation reasons
          </li>
          <li>
            <strong className="text-slate-950 dark:text-white">Audit</strong> —
            all templates with closed counts; sample week:{" "}
            <strong>20</strong> templates, <strong>1,907</strong> work items,{" "}
            <strong>77.8%</strong> accuracy, <strong>19.1</strong> audit hours —
            backed by Audit Center process templates, copy-process, and response
            review tooling
          </li>
          <li>
            <strong className="text-slate-950 dark:text-white">PDF Extractor</strong> —
            sample week: <strong>95</strong> PDFs, <strong>29.4</strong> hours saved,
            per-template productivity (Patient Statement, Hospital Billing,
            Superbill, …)
          </li>
        </ul>
      ),
    },
    {
      title: "Productivity model",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>
            Operators enter saved minutes on PDF jobs / bot-run productivity hooks
            (PDF execute validates <code className="text-sm">saved_minutes_total</code>
            — no negatives; minimum 15 when provided)
          </li>
          <li>
            <code className="text-sm">hours = saved_minutes / 60</code>
          </li>
          <li>
            <code className="text-sm">manDays / FTE = hours / 8</code> (8-hour FTE
            day in ai-services)
          </li>
          <li>
            Aggregations via{" "}
            <code className="text-sm">
              /pdf-extractor/&#123;orgId&#125;/internal/productivity/*
            </code>{" "}
            and .NET automation-dashboard APIs
          </li>
        </ul>
      ),
    },
    {
      title: "Security & tenancy",
      content: (
        <p>
          Org-scoped data with JWT permissions such as{" "}
          <code className="text-sm">automation.dashboard.bu.*</code> and{" "}
          <code className="text-sm">
            automation.dashboard.realizedfte.update.bu.*
          </code>
          — Realized FTE edits and BU cards only for authorized users.
        </p>
      ),
    },
    {
      title: "What I built",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>React insight UIs (Recharts KPIs, date ranges, drill-down drawers/tables)</li>
          <li>.NET dashboard services for projects, Realized FTE, audit/automation summaries</li>
          <li>FastAPI productivity persistence + internal metrics for PDF volume/savings</li>
          <li>BU-aware permission checks aligned with App Hub grants</li>
        </ul>
      ),
    },
  ];

  return <CaseStudyLayout project={project} sections={sections} />;
}
