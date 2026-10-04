import type { Metadata } from "next";
import "../globals.css";

const title = "Siu’s little corner — Siu’s Field Notebook";
const description = "A field notebook of things I study, build, and wonder about. Veterinary medicine, AI research, software, open source, and notes along the way by Siu Beom.";

export const metadata: Metadata = {
  metadataBase: new URL("https://siubeom.com"),
  title, description,
  alternates: { canonical: "/en", languages: { ko: "/", en: "/en", "x-default": "/" } },
  authors: [{ name: "Siu Beom", url: "https://siubeom.com/en" }],
  openGraph: { type: "website", locale: "en_US", url: "/en", siteName: "Siu Beom", title, description },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
