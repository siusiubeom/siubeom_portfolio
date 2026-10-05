import Link from "next/link";
import Mascot from "./mascot";

export default function SiteHeader({ english, page }: { english: boolean; page: "home" | "b-side" }) {
  const copy = (ko: string, en: string) => english ? en : ko;
  const home = english ? "/en" : "/";
  const bSide = english ? "/en/b-side" : "/b-side";
  const section = (hash: string) => page === "home" ? hash : `${home}${hash}`;
  return <header className="site-header">
    <Link className="wordmark" href={section("#home")} aria-label="Siu Beom home"><Mascot compact label={copy("시우 캐릭터 로고", "Siu’s character logo")} />siubeom.</Link>
    <nav aria-label={copy("주요 메뉴", "Main navigation")}>
      <Link href={section("#work")}>Field Notes</Link><Link href={section("#research")}>Research Notes</Link><Link href={section("#about")}>About</Link>
      <Link className="b-side-link" href={bSide} aria-current={page === "b-side" ? "page" : undefined}><span className="mini-vinyl" aria-hidden="true" />B-side</Link>
      <div className="language-switch" role="group" aria-label="Language / 언어">
        <Link href={page === "home" ? "/" : "/b-side"} hrefLang="ko" lang="ko" aria-label="한국어" aria-current={!english ? "page" : undefined}>KO</Link>
        <Link href={page === "home" ? "/en" : "/en/b-side"} hrefLang="en" lang="en" aria-label="English" aria-current={english ? "page" : undefined}>EN</Link>
      </div>
    </nav>
  </header>;
}
