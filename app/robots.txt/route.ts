import { NextResponse } from "next/server";
import { getSiteUrl } from "@/app/data/site";

export function GET() {
  const siteUrl = getSiteUrl();

  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
