import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://azamportfolio.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(), // Converts to ISO string format
    },
  ];
}
