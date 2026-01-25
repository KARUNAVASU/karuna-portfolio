import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Optimize font loading with Next.js
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Karuna Vasu | Full-Stack Python Developer",
  description: "Full-Stack Python Developer specializing in automation platforms, AI-assisted workflows, and scalable backend systems for US healthcare (RCM).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

