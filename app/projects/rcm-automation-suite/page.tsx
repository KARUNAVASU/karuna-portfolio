"use client";

import CaseStudyLayout from "@/app/components/ui/CaseStudyLayout";
import { healthcareAutomation } from "@/app/data/projects";

const project = healthcareAutomation[0];

export default function RcmAutomationCaseStudy() {
  const sections = [
    {
      title: "Problem",
      content: (
        <>
          <p>
            US healthcare RCM teams run high-volume Eligibility Verification (EV), Prior
            Authorization, and Claims workflows manually across portals and payer systems.
            Repetitive data entry, inconsistent validations, and limited retry logic led to
            slow turnaround and operational bottlenecks.
          </p>
        </>
      ),
    },
    {
      title: "Solution",
      content: (
        <>
          <p>
            Built an internal <strong className="text-slate-950 dark:text-white">RCM Automation Suite</strong>{" "}
            — multiple workflow engines tailored to EV, Auth, and Claims:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Automated high-volume workflows across RCM processes</li>
            <li>Standardized validations, retries, and execution checks for stability</li>
            <li>Improved consistency, turnaround time, and operational throughput</li>
          </ul>
          {project.impact && (
            <p className="mt-4">
              <strong className="text-slate-950 dark:text-white">Impact:</strong> {project.impact}
            </p>
          )}
        </>
      ),
    },
    {
      title: "Approach",
      content: (
        <ul className="list-disc list-inside space-y-2 ml-2">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Stack & Integration",
      content: (
        <>
          <p>
            Python and Selenium-based bots with SQL-backed logging, integrated into broader
            orchestration patterns used across the organization. Workflows align with payer
            portals and internal RCM tooling used in production operations.
          </p>
        </>
      ),
    },
  ];

  return <CaseStudyLayout project={project} sections={sections} />;
}
