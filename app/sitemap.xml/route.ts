import { NextResponse } from "next/server";
import { getSiteUrl, sitemapPaths } from "@/app/data/site";

export function GET() {
  const siteUrl = getSiteUrl();
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = sitemapPaths
    .map((path) => {
      const loc = path === "/" ? siteUrl : `${siteUrl}${path}`;
      const priority = path === "/" ? "1.0" : path.includes("projects") ? "0.9" : "0.8";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml" },
  });
}
