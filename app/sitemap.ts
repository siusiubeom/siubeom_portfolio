import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["https://siubeom.com", "https://siubeom.com/en"].map(url => ({
    url, changeFrequency: "monthly", priority: 1,
    alternates: { languages: { ko: "https://siubeom.com", en: "https://siubeom.com/en" } },
  }));
}
