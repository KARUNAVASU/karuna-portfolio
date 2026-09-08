import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Productivity Dashboard",
  description:
    "App Hub dashboards for Realized FTE, Automation Insights, PDF productivity, Audit Insights, and BU-scoped business performance.",
};

export default function AutomationDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
