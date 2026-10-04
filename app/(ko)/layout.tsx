import type { Metadata } from "next";
import "../globals.css";

const title = "Siu’s little corner — 범시우의 Field Notebook";
const description = "수의대생 범시우가 연구하고 만들면서 남긴 필드 노트. 수의학, AI, 소프트웨어, 오픈소스와 그 사이의 궁금한 것들.";

export const metadata: Metadata = {
  metadataBase: new URL("https://siubeom.com"),
  title,
  description,
  alternates: { canonical: "/", languages: { ko: "/", en: "/en", "x-default": "/" } },
  authors: [{ name: "Siu Beom", url: "https://siubeom.com" }],
  openGraph: { type: "website", locale: "ko_KR", url: "/", siteName: "Siu Beom", title, description },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}</body></html>;
}
