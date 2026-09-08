import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Weekly Update — Board Pack",
  description:
    "Case study: App Hub Product Weekly Update — Mon–Fri DAU, productivity hours, PDF volume, and audit queue metrics with client-side board PDF for leadership briefings.",
};

export default function ProductWeeklyUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
