function normalizeUrl(url: string) {
  return url.replace(/\/$/, "");
}

/** Must use static `process.env.NEXT_PUBLIC_*` access so Next can inline values for the client. */
function pub(value: string | undefined, fallback = ""): string {
  return (value ?? fallback).trim();
}

/** Resolves the live site URL — uses your Vercel deployment URL automatically. */
export function getSiteUrl() {
  const configured = pub(process.env.NEXT_PUBLIC_SITE_URL);
  if (configured) return normalizeUrl(configured);

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }

  return "http://localhost:3000";
}

export const SITE_URL = getSiteUrl();

export const SITE_NAME = "Karuna Vasu — Backend / Platform Engineer";

export const SITE_DESCRIPTION =
  "Backend and platform engineer building Python automation, BotVeta orchestration, AWS Bedrock AI workflows, and production RCM systems for US healthcare.";

export const PROFILE_IMAGE = "/profile.jpg";

/** Absolute URL for Open Graph / Twitter cards */
export const PROFILE_IMAGE_ABSOLUTE = `${SITE_URL}/profile.jpg`;

export const IEEE_LINK = pub(process.env.NEXT_PUBLIC_IEEE_PUBLICATION_URL);

export const RESUME_FILE_NAME = pub(
  process.env.NEXT_PUBLIC_RESUME_FILE_NAME,
  "KarunaVasu_SoftwareEngineer_Resume.pdf",
);

/** Served from /public — reliable direct download on Vercel */
export const RESUME_PDF_PATH = `/${RESUME_FILE_NAME}`;

export const RESUME_DRIVE_VIEW_URL = pub(
  process.env.NEXT_PUBLIC_RESUME_DRIVE_VIEW_URL,
);
export const RESUME_DRIVE_DOWNLOAD_URL = pub(
  process.env.NEXT_PUBLIC_RESUME_DRIVE_DOWNLOAD_URL,
);

export const CONTACT_EMAIL = pub(process.env.NEXT_PUBLIC_CONTACT_EMAIL);
export const CONTACT_PHONE = pub(process.env.NEXT_PUBLIC_CONTACT_PHONE);
export const CONTACT_PHONE_DISPLAY = pub(
  process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE,
);

export const socialLinks = {
  github: pub(process.env.NEXT_PUBLIC_GITHUB_URL),
  linkedin: pub(process.env.NEXT_PUBLIC_LINKEDIN_URL),
  email: CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "",
  emailDisplay: CONTACT_EMAIL,
};

export const productUrls = {
  botvetaLive: pub(process.env.NEXT_PUBLIC_BOTVETA_LIVE_URL),
  botvetaBuild: pub(process.env.NEXT_PUBLIC_BOTVETA_BUILD_URL),
  ivrLive: pub(process.env.NEXT_PUBLIC_IVR_LIVE_URL),
};

export const locationMeta = {
  city: pub(process.env.NEXT_PUBLIC_LOCATION_CITY, "Mangalore, IN"),
  lat: pub(process.env.NEXT_PUBLIC_LOCATION_LAT),
  lon: pub(process.env.NEXT_PUBLIC_LOCATION_LON),
  utc: pub(process.env.NEXT_PUBLIC_LOCATION_UTC, "+05:30"),
};

export const statusTicker =
  "// AVAILABLE_FOR_BACKEND_PLATFORM_ROLES●// MANGALORE_IN ↔ REMOTE●// PYTHON · FASTAPI · .NET · AWS●// SHIPPING_SINCE_2023●";

export const techGrid = [
  { emoji: "🐍", label: "PYTHON", color: "text-primary" },
  { emoji: "🚀", label: "FASTAPI", color: "text-electric-blue" },
  { emoji: "🔷", label: ".NET / C#", color: "text-neon-purple" },
  { emoji: "☁️", label: "AWS", color: "text-primary" },
  { emoji: "🗄️", label: "SQL SERVER", color: "text-holographic-silver" },
  { emoji: "🧠", label: "BEDROCK", color: "text-electric-blue" },
  { emoji: "▲", label: "NEXT.JS", color: "" },
  { emoji: "⚛️", label: "REACT", color: "" },
  { emoji: "🐳", label: "DOCKER", color: "" },
  { emoji: "⚙️", label: "CI/CD", color: "" },
  { emoji: "⚡", label: "VITE", color: "" },
  { emoji: "📦", label: "GIT", color: "" },
];

export const channelLinks = [
  { label: "GITHUB", href: socialLinks.github },
  { label: "LINKEDIN", href: socialLinks.linkedin },
  { label: "EMAIL", href: socialLinks.email },
].filter((link) => Boolean(link.href));

export const sitemapPaths = [
  "/",
  "/resume",
  "/projects/bot-manager",
  "/projects/rcm-automation-suite",
];
