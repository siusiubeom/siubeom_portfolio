import type { Metadata } from "next";
import BSide from "../../b-side";

const title = "B-side — 범시우가 좋아하는 것들";
const description = "일 말고, 그냥 좋아하는 것들. 범시우가 듣는 음악, 보는 영화, 읽는 책과 블로그.";

export const metadata: Metadata = {
  title, description,
  openGraph: { type: "website", locale: "ko_KR", url: "/b-side", siteName: "Siu Beom", title, description },
  twitter: { card: "summary", title, description },
  alternates: { canonical: "/b-side", languages: { ko: "/b-side", en: "/en/b-side", "x-default": "/b-side" } },
};

export default function BSidePage() { return <BSide language="ko" />; }
