import { publications } from "@/app/data/publications";
import {
  PROFILE_IMAGE_ABSOLUTE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  socialLinks,
} from "@/app/data/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karuna Vasu",
    jobTitle: "Backend / Platform Engineer",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: PROFILE_IMAGE_ABSOLUTE,
    email: socialLinks.emailDisplay,
    sameAs: [socialLinks.github, socialLinks.linkedin],
    knowsAbout: [
      "Python",
      "FastAPI",
      ".NET",
      "AWS",
      "Healthcare RCM Automation",
      "Bot Orchestration",
      "AWS Bedrock",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Integrity Healthcare Solutions Pvt Ltd",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Manipal Institute of Technology",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    author: {
      "@type": "Person",
      name: "Karuna Vasu",
    },
  };
}

export function creativeWorkJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "BotVeta Automation Orchestration Platform",
    description:
      "Multi-tenant platform to schedule, monitor, and manage distributed automation workflows across healthcare RCM operations.",
    author: { "@type": "Person", name: "Karuna Vasu" },
    keywords: "Python, FastAPI, .NET, Hangfire, healthcare automation",
  };
}

export function publicationJsonLd() {
  const paper = publications[0];

  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: paper.title,
    author: [{ "@type": "Person", name: "Karuna Vasu" }],
    datePublished: "2023-09",
    publisher: { "@type": "Organization", name: "IEEE" },
    url: paper.link,
  };
}
