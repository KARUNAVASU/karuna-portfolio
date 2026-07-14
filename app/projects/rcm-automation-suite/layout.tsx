import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RCM Automation Suite — AI in Healthcare Case Study",
  description:
    "Case study on AI and rule-based automation for US healthcare RCM: eligibility, prior authorization, and claims at production scale.",
};

export default function RcmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
