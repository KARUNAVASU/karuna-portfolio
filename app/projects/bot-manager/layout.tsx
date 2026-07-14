import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BotVeta Case Study — Automation Orchestration Platform",
  description:
    "Case study: multi-tenant BotVeta platform for scheduling, monitoring, and scaling Python and Node automation across US healthcare RCM operations.",
};

export default function BotManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
