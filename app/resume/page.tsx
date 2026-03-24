"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const RESUME_PDF = "/KarunaVasu_SoftwareEngineer_Resume.pdf";
const DOWNLOAD_NAME = "KarunaVasu_SoftwareEngineer_Resume.pdf";

export default function ResumePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 min-w-0">
          <Link
            href="/#resume"
            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline shrink-0"
          >
            ← Back to portfolio
          </Link>
          <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">|</span>
          <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate">
            Karuna Vasu — Software Engineer (PDF)
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-end">
          <a
            href={RESUME_PDF}
            download={DOWNLOAD_NAME}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-95 transition-opacity shadow-md shadow-purple-500/20"
          >
            <span aria-hidden>📥</span>
            Download PDF
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-300 dark:border-neutral-600 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            Open in new tab
          </a>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </div>
      </header>

      <iframe
        title="Karuna Vasu — Resume (PDF)"
        src={RESUME_PDF}
        className="w-full flex-1 min-h-[calc(100dvh-4.25rem)] border-0 bg-neutral-100 dark:bg-neutral-900"
      />
    </div>
  );
}
