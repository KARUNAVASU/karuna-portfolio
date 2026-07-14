"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import MaterialIcon from "../ui/MaterialIcon";
import { PROFILE_IMAGE, RESUME_FILE_NAME, RESUME_PDF_PATH } from "@/app/data/site";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.pageYOffset * 0.08}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-margin-mobile pb-section-gap pt-28 md:px-margin-desktop">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="hero-glow-purple pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full blur-3xl" aria-hidden />
      <div className="hero-glow-blue pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="mb-stack-md inline-block border-l-4 border-neon-purple bg-neon-purple/10 px-4 py-1 font-mono text-code-sm text-neon-purple">
            SYSTEM_STATUS: ACTIVE // ROLE: SOFTWARE_ENGINEER
          </div>

          <h1 className="mb-stack-sm font-display text-display-lg leading-none md:text-[96px]">
            Karuna{" "}
            <span className="bg-gradient-to-r from-primary to-electric-blue bg-clip-text text-transparent">
              Vasu
            </span>
            <span className="mt-3 block font-display text-headline-md text-on-surface-variant md:text-[28px]">
              Backend / Platform Engineer
            </span>
          </h1>

          <p className="mb-stack-lg max-w-2xl font-display text-headline-md text-on-surface-variant">
            Python · Automation Systems · AWS · AI Systems
          </p>

          <p className="mb-12 max-w-xl font-body text-body-lg text-on-surface-variant">
            Architecting high-frequency automation platforms and production-ready
            backends for US Healthcare RCM — eligibility, authorization, claims,
            and AI-assisted workflows.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("outputs")}
              className="flex items-center gap-2 bg-gradient-to-r from-neon-purple to-electric-blue px-8 py-4 font-mono text-label-caps uppercase tracking-widest transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              <span>EXPLORE_BUILDS</span>
              <MaterialIcon name="arrow_forward" />
            </button>
            <a
              href={RESUME_PDF_PATH}
              download={RESUME_FILE_NAME}
              className="border border-holographic-silver/30 px-8 py-4 font-mono text-label-caps uppercase tracking-widest transition-all hover:bg-white/5"
            >
              RESUME.PDF
            </a>
          </div>
        </div>

        <div className="flex justify-center md:col-span-4">
          <div className="group relative h-96 w-64 md:h-[600px] md:w-full">
            <div className="absolute -top-3 left-0 z-20 font-mono text-[11px] tracking-widest text-electric-blue">
              REC // 001
            </div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
            <div className="absolute inset-0 z-10 border border-white/10 transition-colors duration-500 group-hover:border-primary/50" />
            <div ref={imgRef} className="relative h-full w-full overflow-hidden">
              <Image
                src={PROFILE_IMAGE}
                alt="Karuna Vasu — Backend / Platform Engineer portrait"
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                priority
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-20 h-24 w-24 border-b-2 border-r-2 border-primary" />
            <div className="absolute -left-4 -top-4 z-20 h-24 w-24 border-l-2 border-t-2 border-electric-blue" />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("streams")}
        className="scroll-pulse relative z-10 mx-auto mt-16 flex flex-col items-center gap-2 font-mono text-label-caps tracking-[0.25em] text-on-surface-variant transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <span>SCROLL</span>
        <MaterialIcon name="arrow_downward" />
      </button>
    </section>
  );
}
