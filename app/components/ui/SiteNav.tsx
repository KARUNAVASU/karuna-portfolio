"use client";

import { useState } from "react";

const navLinks = [
  { href: "#streams", label: "ABOUT" },
  { href: "#outputs", label: "PROJECTS" },
  { href: "#core_tech", label: "STACK" },
  { href: "#logs", label: "RESEARCH" },
];

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-surface-charcoal/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <a
          href="/"
          className="font-mono text-label-caps tracking-widest text-primary drop-shadow-[0_0_10px_rgba(221,183,255,0.35)]"
        >
          KV<span className="text-electric-blue">/</span>SYS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollTo(link.href)}
              className="font-mono text-label-caps tracking-widest text-on-surface-variant transition-colors hover:text-holographic-silver"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="hidden bg-primary-container px-5 py-2 font-mono text-label-caps tracking-widest text-on-primary-container transition-all hover:scale-105 sm:inline-block"
          >
            CONNECT
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-white/10 font-mono text-sm md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-surface-charcoal/95 px-margin-mobile py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="py-2 text-left font-mono text-label-caps tracking-widest text-on-surface-variant"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-2 bg-primary-container px-6 py-3 text-center font-mono text-label-caps tracking-widest text-on-primary-container"
            >
              CONNECT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
