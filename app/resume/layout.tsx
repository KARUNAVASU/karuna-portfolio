import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Software Engineer",
  description:
    "Karuna Vasu resume: Python, FastAPI, .NET, AWS, healthcare RCM automation, BotVeta orchestration, and AI workflow experience.",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
