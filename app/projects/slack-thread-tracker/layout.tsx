import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slack Thread Tracker",
  description:
    "AI-assisted Slack support operations with SLA monitoring and App Hub dashboards.",
};

export default function SlackTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
