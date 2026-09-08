"use client";

import MaterialIcon from "@/app/components/ui/MaterialIcon";
import PageShell from "@/app/components/ui/PageShell";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  RESUME_DRIVE_VIEW_URL,
  RESUME_FILE_NAME,
  RESUME_PDF_PATH,
  socialLinks,
} from "@/app/data/site";

const skills = [
  "Python",
  "C# / .NET 9",
  "FastAPI",
  "Hangfire",
  "React",
  "Next.js",
  "TypeScript",
  "SQL Server",
  "PostgreSQL",
  "Azure OpenAI",
  "OCR",
  "AWS Bedrock",
  "Amazon Connect",
  "Azure Key Vault",
  "Docker",
  "Selenium",
  "Azure DevOps",
  "Git",
];

const experience = [
  {
    title: "Software Engineer",
    company: "Integrity Healthcare Solutions Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "DEC_18_2023 — PRESENT",
    accent: "border-electric-blue",
    bullets: [
      "Availity + RCM pipelines — ~95% faster claim turnaround; 40–80% less manual EV/Auth/Claims effort",
      "BotVeta / App Hub: Hangfire schedules, Audit Center, auth rate limits, product-usage, Product Weekly Update (UTC dates + comparison)",
      "Automation Dashboard tracking 371 ADO projects (PM/SR CSM, discussions + status/color), ~118K jobs/week (84%), ~$20M charge-cost visibility",
      "AI PDF Extractor: Appointment List / HCO tracker / Trust-PHNT-NBA superbills; validated saved_minutes → FTE KPIs",
      "Slack Thread Tracker: auto-resolve image-only, reactions, digest emails, AI triage, SLA / analytics",
      "Amazon Connect IVR + Bedrock — ~60–80% less manual payer calling",
    ],
  },
  {
    title: "Research Intern",
    company: "Manipal Institute of Technology",
    location: "Udupi, Karnataka",
    period: "FEB_2023 — DEC_2023",
    accent: "border-primary",
    bullets: [
      "IEEE paper on ECG Heart Rate Variability — Best Paper & Best Presenter awards",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Zephyr Technologies and Solutions",
    location: "Mangaluru, Karnataka",
    period: "JUN_2023 — JUL_2023",
    accent: "border-neon-purple",
    bullets: [
      "Real-time chat application with Python, Django, WebSockets, and PostgreSQL",
    ],
  },
];

export default function ResumePage() {
  const handlePrint = () => window.print();

  return (
    <PageShell backHref="/#resume" backLabel="BACK_TO_PORTFOLIO">
      <div className="mx-auto max-w-container-max px-margin-mobile pb-16 pt-8 md:px-margin-desktop md:pb-24">
        {/* Header + actions */}
        <header className="glass-card mb-gutter border-t-2 border-primary p-8 md:p-10 print:border print:border-neutral-300 print:bg-white print:text-black">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-3 font-mono text-label-caps text-primary">
                RESUME_INTERFACE // INLINE
              </p>
              <h1 className="mb-2 font-display text-headline-lg text-on-surface print:text-black">
                Karuna Vasu
              </h1>
              <p className="mb-4 font-body text-body-lg text-on-surface-variant print:text-neutral-700">
                Software Engineer
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-code-sm text-on-surface-variant print:text-neutral-700">
                <span>Mangalore, Karnataka 575003, IN</span>
                {CONTACT_PHONE && (
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="hover:text-primary print:text-black"
                  >
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                )}
                {socialLinks.email && (
                  <a href={socialLinks.email} className="hover:text-primary print:text-black">
                    {socialLinks.emailDisplay}
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary print:text-black"
                  >
                    LinkedIn
                  </a>
                )}
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary print:text-black"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 print:hidden">
              <a
                href={RESUME_PDF_PATH}
                download={RESUME_FILE_NAME}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-purple to-electric-blue px-6 py-3 font-mono text-label-caps tracking-widest transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                <MaterialIcon name="download" />
                GET_PDF
              </a>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-mono text-label-caps tracking-widest transition-all hover:bg-white/5"
              >
                <MaterialIcon name="print" />
                PRINT
              </button>
              {RESUME_DRIVE_VIEW_URL && (
                <a
                  href={RESUME_DRIVE_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary/30 px-6 py-3 font-mono text-label-caps tracking-widest text-primary transition-all hover:bg-primary/10"
                >
                  <MaterialIcon name="open_in_new" />
                  DRIVE
                </a>
              )}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          {/* Main column */}
          <div className="space-y-gutter lg:col-span-8">
            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-electric-blue">
                PROFESSIONAL_SUMMARY
              </h2>
              <p className="font-body text-body-md leading-relaxed text-on-surface-variant print:text-neutral-800">
                Software Engineer with 2 years 9 months of experience building
                multi-tenant App Hub / BotVeta systems for US Healthcare RCM
                (since Dec 18, 2023). Scope includes .NET + Hangfire
                orchestration, Azure OpenAI PDF→Excel, Slack SLA ops, and
                production IVR — ~95% faster claim turnaround and 40–80% less
                manual effort.
              </p>
            </section>

            <section className="space-y-stack-md">
              <h2 className="font-mono text-label-caps text-primary">
                WORK_EXPERIENCE
              </h2>
              {experience.map((role) => (
                <article
                  key={role.title + role.company}
                  className={`glass-card border-l-2 p-6 md:p-8 print:border print:border-neutral-200 print:bg-white ${role.accent}`}
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-headline-md text-on-surface print:text-black">
                        {role.title}
                      </h3>
                      <p className="text-on-surface-variant print:text-neutral-700">
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <span className="font-mono text-code-sm text-on-surface-variant print:text-neutral-600">
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2 font-body text-body-md text-on-surface-variant print:text-neutral-800">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-primary opacity-60">&gt;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-neon-purple">
                KEY_PROJECTS
              </h2>
              <ul className="space-y-3 font-body text-body-md text-on-surface-variant print:text-neutral-800">
                <li>
                  <strong className="text-on-surface print:text-black">BotVeta / App Hub</strong>{" "}
                  — schedules, Audit Center, auth rate limits, product-usage,
                  Product Weekly Update
                </li>
                <li>
                  <strong className="text-on-surface print:text-black">
                    Automation Productivity Dashboard
                  </strong>{" "}
                  — 371 projects · ADO discussions/status · ~118K jobs/week ·
                  ~$20M visibility
                </li>
                <li>
                  <strong className="text-on-surface print:text-black">AI PDF Extractor</strong>{" "}
                  — PDF→Excel + validated saved_minutes → FTE KPIs
                </li>
                <li>
                  <strong className="text-on-surface print:text-black">Slack Thread Tracker</strong>{" "}
                  — reactions, digest emails, AI triage, SLA analytics
                </li>
                <li>
                  <strong className="text-on-surface print:text-black">AI Voice Automation</strong>{" "}
                  — Amazon Connect + Bedrock IVR for payer calls
                </li>
                <li>
                  <strong className="text-on-surface print:text-black">RCM Automation Suite</strong>{" "}
                  — eligibility, prior auth, and claims at production scale
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-gutter lg:col-span-4">
            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-electric-blue">
                TECHNICAL_SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wide text-on-surface print:border-neutral-300 print:bg-neutral-100 print:text-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-primary">
                EDUCATION
              </h2>
              <div className="space-y-4 font-body text-body-md text-on-surface-variant print:text-neutral-800">
                <div>
                  <h3 className="font-display text-headline-md text-on-surface print:text-black">
                    M.Sc. Bioinformatics
                  </h3>
                  <p>Manipal Academy of Higher Education · 2021–2023</p>
                </div>
                <div>
                  <h3 className="font-display text-headline-md text-on-surface print:text-black">
                    B.Sc. Bioinformatics
                  </h3>
                  <p>Sardar Patel University · 2018–2021</p>
                </div>
              </div>
            </section>

            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-neon-purple">
                PUBLICATIONS
              </h2>
              <p className="font-body text-body-md text-on-surface-variant print:text-neutral-800">
                ECG Heart Rate Variability — IEEE NMITCON 2023 (Best Paper, Best
                Presenter)
              </p>
            </section>

            <section className="glass-card p-6 md:p-8 print:border print:border-neutral-200 print:bg-white">
              <h2 className="mb-4 font-mono text-label-caps text-on-surface-variant">
                LANGUAGES
              </h2>
              <p className="font-body text-body-md text-on-surface-variant print:text-neutral-800">
                English · Gujarati (Native)
              </p>
            </section>
          </aside>
        </div>

        {/* Mobile sticky download bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-surface-charcoal/95 p-4 backdrop-blur-md print:hidden md:hidden">
          <div className="mx-auto flex max-w-container-max gap-3">
            <a
              href={RESUME_PDF_PATH}
              download={RESUME_FILE_NAME}
              className="flex flex-1 items-center justify-center gap-2 bg-primary-container py-3 font-mono text-label-caps text-on-primary-container"
            >
              <MaterialIcon name="download" />
              GET_PDF
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center justify-center border border-white/20 px-6 py-3 font-mono text-label-caps"
            >
              PRINT
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}