"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { getProjectById } from "@/app/data/projects";

const project = getProjectById("slack-thread-tracker")!;

export default function SlackThreadTrackerCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <p>
          Support work for eligibility and prior auth often lives in Slack
          channels. Without structured queues, SLA clocks, or triage, threads go
          unanswered, after-hours carry-over is invisible, and managers lack
          response-time analytics.
        </p>
      ),
    },
    {
      title: "Solution",
      content: (
        <>
          <p>
            Built a{" "}
            <strong className="text-slate-950 dark:text-white">
              Slack Thread Tracker
            </strong>{" "}
            FastAPI service behind the App Hub BFF:
          </p>
          <ul className="ml-2 list-inside list-disc space-y-2">
            <li>
              Signed Events API ingestion — parents, replies, reactions, full
              message mirror (incl. bots) for audit; auto-resolve image-only
              messages; team emoji reactions map to RESOLVED / ANSWERED and can
              seed first-reply SLA timing
            </li>
            <li>
              Per-workspace bot tokens &amp; signing secrets stored in SQL
              Server
            </li>
            <li>
              AI classification: EV / Auth / other — keyword fast-path or
              multimodal Azure OpenAI when images are present
            </li>
            <li>
              AI-assisted resolution detection (vs acknowledgements / pending)
            </li>
            <li>
              SLA engine: first-reply &amp; resolution deadlines, shifts,
              after-hours / carry-over, warning &amp; breach stamps via
              APScheduler
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "App Hub experience",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>
            Dashboard, resolved view, analytics, channel assignment &amp;
            configuration (permission-gated) — notification users vs handling
            users; pre-shift HTML digest emails
          </li>
          <li>
            Queues and reports scoped to channels assigned to the current user
            in the active org
          </li>
          <li>
            Volume reporting in turnaround buckets (≤10 through 60+ minutes)
            with CSV export
          </li>
          <li>
            Admin chat-style thread mirror for operational review across
            workspaces
          </li>
        </ul>
      ),
    },
    {
      title: "Architecture",
      content: (
        <p>
          Slack delivers to{" "}
          <code className="text-sm">POST /slack/events</code> on the .NET BFF
          (anonymous ingress; signature verified in Python). Authenticated App
          Hub users hit{" "}
          <code className="text-sm">/slack-api/&#123;orgId&#125;/...</code>{" "}
          with JWT + org permission checks, then the Slack service applies
          channel-assignment scoping.
        </p>
      ),
    },
    {
      title: "What I Built",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>Event ingestion, mirror, thread, resolve, and settings APIs</li>
          <li>Classification + SLA monitor background jobs</li>
          <li>Analytics / reports surface and App Hub integration wiring</li>
        </ul>
      ),
    },
  ];

  return <CaseStudyLayout project={project} sections={sections} />;
}
