import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  creativeWorkJsonLd,
  personJsonLd,
  publicationJsonLd,
  websiteJsonLd,
} from "./lib/seo";
import {
  PROFILE_IMAGE_ABSOLUTE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./data/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "700", "800", "900"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Karuna Vasu",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Karuna Vasu",
    "Backend Engineer",
    "Platform Engineer",
    "Python Developer",
    "Healthcare RCM Automation",
    "BotVeta",
    "FastAPI",
    "AWS Bedrock",
    "US Healthcare RCM",
    "Automation Orchestration",
  ],
  authors: [{ name: "Karuna Vasu", url: SITE_URL }],
  creator: "Karuna Vasu",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: PROFILE_IMAGE_ABSOLUTE,
        width: 1200,
        height: 630,
        alt: "Karuna Vasu — Backend / Platform Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [PROFILE_IMAGE_ABSOLUTE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    personJsonLd(),
    websiteJsonLd(),
    creativeWorkJsonLd(),
    publicationJsonLd(),
  ];

  return (
    <html
      lang="en"
      className={`dark ${montserrat.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Material Symbols — icons used across the site */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-body-md antialiased overflow-x-hidden bg-deep-black text-on-surface">
        <div className="noise-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
