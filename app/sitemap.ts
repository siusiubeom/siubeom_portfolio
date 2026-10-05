import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [["", "/en"], ["/b-side", "/en/b-side"]].flatMap(([ko, en]) => [ko, en].map(path => ({
    url: `https://siubeom.com${path}`, changeFrequency: "monthly" as const, priority: ko ? 0.6 : 1,
    alternates: { languages: { ko: `https://siubeom.com${ko}`, en: `https://siubeom.com${en}` } },
  })));
}
