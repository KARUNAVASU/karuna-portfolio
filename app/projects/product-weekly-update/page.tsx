"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { getProjectById } from "@/app/data/projects";

const project = getProjectById("product-weekly-update")!;

export default function ProductWeeklyUpdateCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <p>
          Product leadership needed a single Monday briefing that answered: what
          did App Hub do last week, how much time did automation save, and where
          is the audit queue — without exporting five dashboards by hand.
        </p>
      ),
    },
    {
      title: "Solution",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>
            Week picker / date ranges refreshing board-org metrics with
            week-over-week and report comparison
          </li>
          <li>
            Headline tiles: total app usage (DAU sum), productivity hours saved
            (+ approx FTE-days), PDFs processed / PDF hours, audits created /
            closed
          </li>
          <li>
            Detail tables: DAU by app/day, BotVeta + PDF savings by day, audit
            queue created/closed/hours + backlog delta
          </li>
          <li>
            Editable narrative: key deliveries, planned work, discussion points
            (auto-suggested from data when blank)
          </li>
          <li>
            Client-side landscape A4 PDF (jsPDF) from already-loaded JSON —
            Preview / Download / Copy without a second metrics round-trip
          </li>
        </ul>
      ),
    },
    {
      title: "Architecture",
      content: (
        <p>
          <code className="text-sm">apphub_admin</code> (Next.js) calls{" "}
          <code className="text-sm">wor-backend</code> admin-api Product Weekly
          Update endpoints that aggregate app-user-usage and productivity
          services. The board PDF is assembled in the browser so ops can iterate
          on narrative without regenerating server reports.
        </p>
      ),
    },
    {
      title: "Scope note",
      content: (
        <p>
          Public portfolio focuses on App Hub productivity surfaces (BotVeta,
          Productivity Dashboard, PDF to Excel, Slack Thread Tracker, audit
          queue). Internal-only board slices stay out of this case study.
        </p>
      ),
    },
  ];

  return <CaseStudyLayout project={project} sections={sections} />;
}
