import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI PDF Extractor",
  description:
    "Template-driven healthcare PDF to Excel extraction with Azure OpenAI, OCR, and App Hub RBAC.",
};

export default function PdfExtractorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
