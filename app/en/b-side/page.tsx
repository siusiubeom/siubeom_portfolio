import type { Metadata } from "next";
import BSide from "../../b-side";

const title = "B-side — Things Siu likes";
const description = "Not work, just things I like: music, movies, books, and blogs by Siu Beom.";

export const metadata: Metadata = {
  title, description,
  openGraph: { type: "website", locale: "en_US", url: "/en/b-side", siteName: "Siu Beom", title, description },
  twitter: { card: "summary", title, description },
  alternates: { canonical: "/en/b-side", languages: { ko: "/b-side", en: "/en/b-side", "x-default": "/b-side" } },
};

export default function EnglishBSidePage() { return <BSide language="en" />; }
