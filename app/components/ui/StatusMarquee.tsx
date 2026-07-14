"use client";

import { statusTicker } from "@/app/data/site";

export default function StatusMarquee() {
  const items = [statusTicker, statusTicker];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-surface-container-lowest py-3">
      <div className="status-marquee flex w-max whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={i}
            className="px-8 font-mono text-code-sm tracking-widest text-on-surface-variant"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
