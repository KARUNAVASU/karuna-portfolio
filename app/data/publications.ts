import { IEEE_LINK } from "./site";

export interface PublicationAward {
  label: string;
  icon: "workspace_premium" | "verified";
  tone: "primary" | "electric-blue";
}

export interface Publication {
  id: string;
  venue: string;
  title: string;
  authors: string;
  link: string;
  awards: PublicationAward[];
}

export const publications: Publication[] = [
  {
    id: "ieee-hrv-2023",
    venue: "IEEE • SEPTEMBER 2023",
    title:
      "Electrocardiogram Heart Rate Variability Signal Analysis and Data Acquisition: A Novel Approach for Sympathovagal Inference",
    authors:
      "Vasu, K., Kumar, P., Mane, P. R., Paul, B., Vaishali, K., & Sinha, M. K.",
    link: IEEE_LINK,
    awards: [
      {
        label: "BEST PRESENTER AWARD",
        icon: "workspace_premium",
        tone: "primary",
      },
      {
        label: "BEST PAPER AWARD",
        icon: "verified",
        tone: "electric-blue",
      },
    ],
  },
];
