"use client";

import { motion } from "framer-motion";
import MaterialIcon from "../ui/MaterialIcon";

type ChannelLink = { label: string; href: string };
type LocationMeta = {
  city: string;
  lat: string;
  lon: string;
  utc: string;
};

type ContactProps = {
  channelLinks: ChannelLink[];
  locationMeta: LocationMeta;
};

export default function Contact({ channelLinks, locationMeta }: ContactProps) {
  return (
    <section id="contact" className="px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <p className="mb-8 text-center font-mono text-code-sm tracking-widest text-neon-purple">
          {"// END_OF_TRANSMISSION"}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card border-t-2 border-primary p-10 md:p-14"
        >
          <div className="grid gap-stack-lg lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-4 font-display text-headline-lg">
                Let&apos;s build something resilient.
              </h2>
              <p className="mb-8 max-w-xl font-body text-body-lg text-on-surface-variant">
                Open to backend, platform, and AI-infrastructure roles. Ping me on
                any channel below — I reply fast.
              </p>

              <p className="mb-4 font-mono text-label-caps text-primary">CHANNELS</p>
              <ul className="space-y-3">
                {channelLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 font-mono text-label-caps tracking-widest text-on-surface transition-colors hover:text-primary"
                    >
                      {link.label}
                      <MaterialIcon
                        name="arrow_outward"
                        className="text-sm opacity-60 transition-opacity group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 bg-surface-container-low p-6 font-mono text-code-sm">
              <p className="mb-6 font-mono text-label-caps text-electric-blue">STATUS</p>
              <div className="space-y-4 text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-on-surface">OPEN_TO_WORK</span>
                </div>
                {locationMeta.lat && <div>LAT: {locationMeta.lat}</div>}
                {locationMeta.lon && <div>LON: {locationMeta.lon}</div>}
                {locationMeta.utc && <div>UTC: {locationMeta.utc}</div>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
