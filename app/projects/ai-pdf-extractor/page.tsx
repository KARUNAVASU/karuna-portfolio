"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { getProjectById } from "@/app/data/projects";

const project = getProjectById("ai-pdf-extractor")!;

export default function AiPdfExtractorCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <>
          <p>
            RCM teams process many document types — patient statements, billing
            summaries, superbills, authorization files, Cerner reports — into
            Excel for downstream work. Manual extraction is slow, inconsistent,
            and hard to govern per user and template.
          </p>
        </>
      ),
    },
    {
      title: "Solution",
      content: (
        <>
          <p>
            Built a secured{" "}
            <strong className="text-slate-950 dark:text-white">
              AI PDF Extractor
            </strong>{" "}
            spanning FastAPI document intelligence and App Hub UI/BFF:
          </p>
          <ul className="ml-2 list-inside list-disc space-y-2">
            <li>
              <code className="text-sm">POST /execute</code> — PDF or JSON in,
              template-specific Excel out (including multi-sheet layouts)
            </li>
            <li>
              Mixed pipeline: text extraction, regex layouts, chunked Azure
              OpenAI prompts, RapidOCR for scans/handwriting, CPT/post-process
            </li>
            <li>
              Template assignment is enforced at execute time; manage APIs power
              the Templates admin page
            </li>
            <li>
              Operator UX: drop zone, per-user templates, prompt/schema drawer,
              Excel preview/download, history;{" "}
              <code className="text-sm">saved_minutes_total</code> validated
              (no negatives; min 15 when set) and persisted for FTE reporting
            </li>
            <li>
              .NET proxy separates{" "}
              <code className="text-sm">ai.pdfextractor.use</code> vs{" "}
              <code className="text-sm">ai.pdfextractor.manage</code>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Template families (examples)",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>Patient statements &amp; billing summaries</li>
          <li>Appointment List / Detailed App List (Medent); HCO Payer &amp; Amount Tracker</li>
          <li>SMDI ledgers; hospital billing with CPT above/below patients</li>
          <li>
            Practice Fusion scheduler / superbills; Trust, PHNT, NBA superbills;
            NBA Printed Patient List
          </li>
          <li>Authorization files (incl. multi-PDF Nutley aggregation)</li>
          <li>Cerner EKG / Medenet-style reports</li>
        </ul>
      ),
    },
    {
      title: "Ops & observability",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>
            Job persistence: status, template/model, rendered prompt, tokens,
            latency, errors
          </li>
          <li>
            Productivity metrics: saved minutes → hours / FTE / man-day style
            reporting
          </li>
          <li>
            Admin job table with prompt inspection for debugging and audit
          </li>
          <li>Optional Azure Key Vault for sandbox vs production secrets</li>
        </ul>
      ),
    },
    {
      title: "What I Built",
      content: (
        <ul className="ml-2 list-inside list-disc space-y-2">
          <li>FastAPI extraction service and template assignment APIs</li>
          <li>BFF multipart proxy + permission gates for use vs manage</li>
          <li>
            App Hub PDF-to-Excel, History, and Templates (user assignment)
            flows
          </li>
          <li>Telemetry and productivity hooks for operational reporting</li>
        </ul>
      ),
    },
  ];

  return <CaseStudyLayout project={project} sections={sections} />;
}
