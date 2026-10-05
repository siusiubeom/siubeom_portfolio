import Image from "next/image";
import Link from "next/link";
import sides from "@/content/b-side";
import cover from "@/public/photos/b-side-cover.jpg";
import Mascot from "./mascot";
import SiteHeader from "./site-header";

export default function BSide({ language = "ko" }: { language?: "ko" | "en" }) {
  const en = language === "en";
  const copy = (ko: string, english: string) => en ? english : ko;
  const home = en ? "/en" : "/";
  const year = new Date().getFullYear();

  return <>
    <a className="skip-link" href="#main">{copy("본문으로 건너뛰기", "Skip to content")}</a>
    <SiteHeader english={en} page="b-side" />
    <main id="main" className="b-side">
      <section className="album" aria-labelledby="b-side-title">
        <div className="album-art">
          <div className="vinyl" aria-hidden="true"><span className="vinyl-label">SIU<br /><small>B-SIDE · 33⅓</small></span></div>
          <figure className="album-sleeve">
            <Image src={cover} alt={copy("후드를 쓰고 브이 하는 범시우, 앨범 커버", "Album cover: Siu Beom in a hoodie, making a V sign")} sizes="(max-width: 700px) 78vw, 380px" preload />
            <figcaption><span>siubeom.</span><span>B-SIDE</span></figcaption>
          </figure>
        </div>
        <div className="album-liner">
          <p className="album-meta">LP · 33⅓ RPM · STEREO · {year}</p>
          <h1 id="b-side-title">B-side<span className="title-dot">.</span></h1>
          <p className="album-artist">Siu Beom</p>
          <p className="album-lead">{copy("A면은 일, B면은 그냥 좋아하는 것들.", "Side A is work. Side B is just things I like.")}</p>
          <p className="album-intro">{copy("요즘 듣는 음악, 몇 번이고 다시 보는 영화, 읽은 책, 자꾸 찾아가는 블로그를 한 장에 담아뒀어요.", "Music on repeat, movies I keep rewatching, books I’ve read, and blogs I keep going back to, all on one record.")}</p>
          <ol className="album-tracklist">{sides.map(side => <li key={side.id}><a href={`#${side.id}`}><span>{side.side}</span>{en ? side.titleEn : side.title}<em>{side.tracks.length ? `${side.tracks.length} ${en ? "tracks" : "곡"}` : copy("녹음 중", "recording")}</em></a></li>)}</ol>
          <Link className="album-flip" href={home}><span aria-hidden="true">⟲</span> {copy("A면으로 뒤집기", "Flip to side A")}</Link>
        </div>
      </section>

      <div className="b-sides">
        {sides.map(side => {
          const covers = side.tracks.filter(track => track.cover);
          const list = side.tracks.filter(track => !track.cover);
          return <section className={`b-side-panel${side.tracks.length > 8 ? " wide" : ""}`} id={side.id} key={side.id} aria-labelledby={`${side.id}-title`}>
            <div className="b-side-heading"><span className="b-side-number">{side.side}</span><div><p>{side.genre}</p><h2 id={`${side.id}-title`}>{en ? side.titleEn : side.title}</h2></div></div>
            {covers.length > 0 && <ol className="cover-grid">{covers.map((track, index) => {
              const content = <>
                <div className="cover-art"><span className="cover-vinyl" aria-hidden="true" /><Image src={track.cover!} width={500} height={500} alt={`${track.title}${track.by ? ` — ${track.by}` : ""} ${copy("앨범 커버", "album cover")}`} sizes="(max-width: 600px) 45vw, 260px" />{track.href && <span className="cover-play" aria-hidden="true">▶</span>}</div>
                <p className="cover-caption"><span className="track-number">{String(index + 1).padStart(2, "0")}</span><span><strong>{track.title}</strong>{track.by && <span className="track-by">{track.by}</span>}</span></p>
              </>;
              return <li key={track.title}>{track.href ? <a href={track.href} target="_blank" rel="noopener noreferrer" aria-label={`${track.title}${track.by ? ` — ${track.by}` : ""}: ${copy("Spotify에서 듣기", "listen on Spotify")}`}>{content}</a> : content}</li>;
            })}</ol>}
            {list.length > 0 && <ol className="track-list">{list.map((track, index) => {
              const name = <><strong>{track.title}</strong>{track.by && <span className="track-by">{track.by}</span>}</>;
              const note = en ? track.noteEn ?? track.note : track.note;
              return <li key={track.title + (track.by ?? "")}>
                <span className="track-number">{String(covers.length + index + 1).padStart(2, "0")}</span>
                <div>{track.href ? <a href={track.href} target="_blank" rel="noopener noreferrer">{name} <span aria-hidden="true">↗</span></a> : <p>{name}</p>}{note && <p className="track-note">{note}</p>}</div>
              </li>;
            })}</ol>}
            {side.tracks.length === 0 && <p className="track-empty"><span className="track-number">--</span>{copy("아직 녹음 중이에요", "Still in the studio")} <span aria-hidden="true">●REC</span></p>}
          </section>;
        })}
      </div>
    </main>
    <footer><div><p>made with curiosity by Siu <span aria-hidden="true">✳</span></p><span>Seoul · {year}</span></div><nav aria-label={copy("연락처", "Contact")}><a href="https://github.com/siusiubeom" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:siubeom2005915@gmail.com">Email ↗</a><Link href={home}>{copy("A면으로", "Side A")} ↗</Link></nav><Link className="footer-mascot" href={home} aria-label={copy("A면으로", "Back to side A")}><Mascot compact label={copy("손 흔드는 캐릭터", "A little wave goodbye")} /></Link></footer>
  </>;
}
