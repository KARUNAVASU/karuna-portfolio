"use client";

import Link from "next/link";

export default function PageShell({
  children,
  backHref = "/#outputs",
  backLabel = "BACK_TO_PORTFOLIO",
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="min-h-screen bg-deep-black text-on-surface">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-charcoal/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
          <Link
            href={backHref}
            className="font-mono text-label-caps tracking-widest text-on-surface-variant transition-colors hover:text-holographic-silver"
          >
            ← {backLabel}
          </Link>
          <Link
            href="/"
            className="font-mono text-label-caps tracking-widest text-primary"
          >
            KV<span className="text-electric-blue">/</span>SYS
          </Link>
        </div>
      </header>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
