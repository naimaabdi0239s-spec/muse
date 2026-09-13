import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://musewebstudio.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/",
          "/services",
          "/about",
          "/contact",
          "/work",
        ];
        
        const urls = paths.map(
          (p) =>
            `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq>\n    <priority>${
              p === "/"
                ? "1.0"
                : p === "/services" || p === "/work"
                  ? "0.9"
                  : "0.7"
            }</priority>\n  </url>`,
        );
        
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
