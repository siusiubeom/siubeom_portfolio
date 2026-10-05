import Image from "next/image";
import Link from "next/link";
import sourcePortfolio from "@/content/portfolio.json";
import translations from "@/content/english";
import idPhoto from "@/public/portfolio/image.png";
import portrait from "@/public/photos/profile-builder.jpg";
import sideB from "@/public/photos/side-b-hood.jpg";
import workNote from "@/public/images/work-note.png";
import Mascot from "./mascot";
import ResumeButton from "./resume-button";

type Block = { type: string; text: string; href?: string };
type Asset = { src: string; width: number; height: number };

function Blocks({ blocks }: { blocks: Block[] }) {
  const groups: Block[][] = [];
  for (const block of blocks) {
    const previous = groups.at(-1);
    if (block.type === "li" && previous?.[0].type === "li") previous.push(block);
    else groups.push([block]);
  }
  return groups.map((group, index) => group[0].type === "li" ? <ul key={index}>{group.map(block => <li key={block.text}>{block.text}</li>)}</ul> :
    <p key={index}>{group[0].href ? <a href={group[0].href} target="_blank" rel="noopener noreferrer">{group[0].text} ↗</a> : group[0].text}</p>);
}

function Gallery({ images, title, english, small = false }: { images: Asset[]; title: string; english: boolean; small?: boolean }) {
  const captions: Record<string, [string, string]> = {
    "field-test-board.jpg": ["10.05 · 시그니처동물의료센터, 실사용 테스트 시작", "Oct 5 · Real-world testing begins at Signature Animal Medical Center"],
    "fig_flow.png": ["임상 영상에서 모델 검증까지", "From clinical video to model validation"],
    "fig_auc.png": ["표현 방식에 따른 ROC-AUC 비교", "Comparing representations: ROC-AUC"],
    "image 1.png": ["병원에서 실제 사용하는 VetSync 화면", "VetSync, in the hospital workflow"],
    "image 2.png": ["입원환자 관리 화면의 한 장면", "A closer look at inpatient management"],
    "image 3.png": ["만들고, 수정하고, 검증한 HWPX 문서", "An HWPX document: created, edited, verified"],
    "image 4.png": ["iConnectome 관련 연구 자료", "From the iConnectome research folder"],
    "image 5.png": ["연구를 위한 데이터와 분석 화면", "Data and analysis from the research"],
    "메인홈.png": ["냠코치 · 홈", "NyamCoach · home"],
    "계획-AI_날짜_추천.png": ["계획 · AI 날짜 추천", "Planning · AI date suggestions"],
    "운동_편집_화면.png": ["운동 편집", "Editing a workout"],
    "KSVC_poster_입원전산화-1.png": ["입원환자 관리 전산화 · 학회 포스터", "Inpatient care digitization · conference poster"],
  };
  return <div className={`gallery ${small ? "small-gallery" : ""}`}>
    {images.map((asset, index) => <figure className="image-note" key={asset.src}><a href={asset.src} target="_blank" rel="noopener noreferrer" aria-label={english ? `${title}: open image ${index + 1}` : `${title} 이미지 ${index + 1} 원본 보기`}>
      <Image src={asset.src} width={asset.width} height={asset.height} alt={`${title} — ${english ? "image" : "자료"} ${index + 1}`} sizes={small ? "(max-width: 600px) 80vw, 250px" : "(max-width: 700px) 85vw, 480px"} />
      <span aria-hidden="true">↗</span>
    </a><figcaption><span className="figure-number">fig. {String(index + 1).padStart(2, "0")}</span>{captions[asset.src.split("/").at(-1)!]?.[english ? 1 : 0] ?? title}</figcaption></figure>)}
  </div>;
}

function Heading({ number, title, note }: { number: string; title: string; note: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span className="paper-label">{note}</span></p><h2><span className="highlight-title">{title}</span><span>.</span></h2></div><span className="page-number" aria-label={`Page ${number}`}>{number}<span aria-hidden="true">↗</span></span></div>;
}

export default function Portfolio({ language = "ko" }: { language?: "ko" | "en" }) {
  const en = language === "en";
  const copy = (ko: string, english: string) => en ? english : ko;
  const t = (text: string) => en ? translations[text] ?? text : text;
  const data = sourcePortfolio.map(section => ({ ...section, blocks: section.blocks.map(b => ({ ...b, text: t(b.text) })), projects: section.projects.map(p => ({ ...p, title: t(p.title), blocks: p.blocks.map(b => ({ ...b, text: t(b.text) })) })) }));
  const featured = data[0].projects;
  const sideProjects = [
    { project: data[1].projects[0], id: "iconnectome", name: "iConnectome", tag: "ML · Veterinary Medicine", description: copy("기존 CCDS 예측 모델의 성능을 다시 검증해 데이터 누수와 연령 편향을 발견하고, 더 신뢰할 수 있는 평가·개선 방법을 제안했어요.", "Revalidated an existing CCDS prediction model, identified data leakage and age bias, and proposed more reliable evaluation and improvement methods."), icon: "◌" },
    { project: data[4].projects[0], id: "nyamcoach", name: copy("냠코치", "NyamCoach"), tag: "Android · Jetpack Compose", description: copy("Android Developer로 참여한 식단 관리 앱. 화면을 만들고, 함께 쓰는 경험을 고민했어요.", "A meal-planning app I worked on as an Android developer, building screens and interactions."), icon: "✳" },
    { project: data[3].projects[0], id: "colon-calculator", name: "Colon Length Calculator", tag: "Computer Vision · SAM", description: copy("곡선 형태의 대장 길이, 이미지에서 자동으로 측정할 수 있을까?", "Can we automatically measure the length of a curved colon from an image?"), icon: "〰" },
    { project: data[3].projects[1], id: "elisa-searcher", name: "ELISA Searcher", tag: "Small Tool", description: copy("실험실 검색 작업을 자동화하는 작은 도구. ELISA kit를 찾고 비교하는 시간을 줄여요.", "A little tool to automate lab searches and spend less time finding and comparing ELISA kits."), icon: "⌕" },
  ];
  const timeline = [
    { year: "2024", note: copy("첫 페이지", "a new chapter"), items: [copy("건국대학교 수의학과 입학", "Started veterinary medicine at Konkuk")] },
    { year: "2025", note: copy("일단 만들어보기", "learning by making"), items: ["Android Developer @ NyamCoach", "Lead Developer @ RISE", "Hult Prize Campus Director"] },
    { year: "2026", note: copy("분야 사이를 연결하기", "connecting the dots"), items: [copy("수의학 연구실 학부연구생 합류", "Joined a veterinary research lab"), copy("1월 · VetU1 세 번째 초기 멤버로 합류", "Jan · Joined VetU1 as its 3rd early member"), copy("7월 · VetU1 정규직 전환", "Jul · Transitioned to full-time at VetU1"), copy("건국대학교 영자신문 · 대외협력부장", "Konkuk University English Newspaper · Head of External Relations"), copy("서울청년기획봉사단 3기 · 유해식물 카드게임 제작 참여", "Seoul Youth Planning Volunteer Group · Cohort 3 · Helped create a card game about harmful plants"), "AI Rookie finalist", "Conquer Health · 2nd", "Try Everything · Grand Prize", copy("10월 · 시그니처동물의료센터 Vision AI 실사용 테스트 시작", "Oct · Started real-world Vision AI testing at Signature Animal Medical Center"), copy("제1저자 연구", "First-author research"), "hwpx-builder"] },
  ];
  const awards = [
    [copy("예비창업패키지 · VetU1", "Pre-Startup Package · VetU1"), copy("CTO로 참여 · 1·2차 선정 · 1차 지원금 2,000만 원 · 2차 약 4,000만 원", "Participating as CTO · Selected for Phases 1 & 2 · Phase 1 funding: KRW 20M · Phase 2: approx. KRW 40M")],
    [copy("모두의 창업 2기", "Modu Startup · Cohort 2"), copy("1라운드 통과 · 건국대", "Passed Round 1 · Konkuk University")],
    ["Try Everything", copy("대상 · 서울시장상", "Grand Prize / Seoul Mayor’s Award")],
    ["Lunit × OpenAI Conquer Health", copy("2위", "2nd Place")],
    ["AI Rookie", copy("100팀 → 40팀 → 진행 중 / 팀장", "100 teams → 40 teams → Ongoing / Team Lead")],
    ["U300+", copy("최종 선발", "Selected Team")],
    ["Patent", copy("공동 발명자", "Co-inventor")],
    ["Hult Prize", "Campus Director"],
    ["UNIV Startup Ideathon", copy("1위", "1st Place")],
  ];
  const featuredNotes = [
    [copy("42마리 · 350개 임상 영상", "42 dogs · 350 clips"), "ROC-AUC 0.865", copy("10월 · 동물병원 실사용 테스트 시작", "Oct · Real-world clinic testing"), copy("제1저자 논문 준비 중", "First-author manuscript")],
    ["459 clinical users", "Frontend lead", "Real hospital workflow"],
    ["Create · Edit · Verify HWPX", "Agent-friendly document tooling"],
  ];
  const annotations = [
    copy("메모: 자동 경보보다, 검토할 구간을 찾는 데 집중 →", "note: review candidates, not automatic alerts →"),
    copy("메모: 459명의 수의 의료진이 사용 중 ↗", "note: used by 459 clinicians ↗"),
    copy("메모: 생성만큼 중요한 건 검증!", "note to self: don’t stop at generation. verify!"),
  ];

  return <>
    <a className="skip-link" href="#main">{copy("본문으로 건너뛰기", "Skip to content")}</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Siu Beom home"><Mascot compact label={copy("시우 캐릭터 로고", "Siu’s character logo")} />siubeom.</a>
      <nav aria-label={copy("주요 메뉴", "Main navigation")}>
        <a href="#work">Field Notes</a><a href="#research">Research Notes</a><a href="#about">About</a>
        <div className="language-switch" role="group" aria-label="Language / 언어">
          <Link href="/" hrefLang="ko" lang="ko" aria-label="한국어" aria-current={!en ? "page" : undefined}>KO</Link>
          <Link href="/en" hrefLang="en" lang="en" aria-label="English" aria-current={en ? "page" : undefined}>EN</Link>
        </div>
      </nav>
    </header>
    <main id="main">
      <section className="hero sheet mint" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <Image className="resume-photo" src={idPhoto} alt={copy("범시우 증명사진", "ID photo of Siu Beom")} sizes="90px" />
          <h1 id="hero-title">{copy("안녕하세요,", "Hi there,")}<br />{copy("시우입니다!", "I’m Siu!")}</h1>
          <p className="hero-tagline"><mark>{copy("다양한 거를 배우고 만들고 궁금해하고 있어요", "I’m learning, building, and getting curious about all sorts of things.")}</mark></p>
          <p className="hero-contact"><a href="mailto:siubeom2005915@gmail.com">{copy("하는 일에 관심 있으면 언제든지 연락 주세요!", "Interested in what I do? Feel free to get in touch!")}</a></p>
          <a className="button" href="#work">
            <Image className="button-paper" src={workNote} alt="" sizes="(max-width: 400px) 240px, 280px" preload />
            <span className="button-label">{copy("하는 일 보기", "See what I’m working on")}</span>
          </a>
        </div>
        <div className="hero-visual">
          <div className="visual-heading"><span>ON THE COVER / SIU</span><span aria-hidden="true">● ● ●</span></div>
          <Mascot label={copy("호기심 많은 민트색 캐릭터", "A curious mint-colored character")} />
          <div className="profile-strip">
            <Image src={portrait} alt={copy("범시우 프로필 사진", "Portrait of Siu Beom")} sizes="48px" preload />
            <div><strong><span lang="ko">범시우</span> · Siu Beom</strong><p>Veterinary student, researcher & builder</p></div>
            <a className="profile-arrow" href="#about" aria-label={copy("범시우 소개 보기", "About Siu Beom")}>↗</a>
          </div>
        </div>
      </section>

      <section className="work-section sheet white" id="work" data-page="01">
        <Heading number="01" note="THINGS I CARE ABOUT" title="Field Notes" />
        <div className="featured-grid">
          {featured.map((project, index) => <article className={`featured-card featured-${index}`} id={["seizure", "vetsync", "hwpx"][index]} key={project.title}>
            <div className="featured-media"><span className="media-label paper-label">FIELD NOTE {String(index + 1).padStart(2, "0")}</span><Gallery images={project.images} title={project.title} english={en} /></div>
            <div className="featured-copy">
              <p className="project-tag">{["Research · Vision AI · Veterinary Medicine", "Work · Product · Healthcare", "Open Source · Python · AI Agent"][index]}</p>
              <h3>{["Canine Seizure Detection", "VetSync", "hwpx-builder"][index]}</h3>
              <p className="project-description">{project.blocks[index === 2 ? 2 : 1].text}</p>
              <ul className="feature-facts">{featuredNotes[index].map((note, n) => <li key={note} className={n === 0 ? "primary-fact" : ""}><span aria-hidden="true">{n === 0 ? "↗" : "·"}</span>{note}</li>)}</ul>
              <p className={`annotation annotation-${index}`}>{annotations[index]}</p>
              <details className="project-details"><summary>{copy("노트 펼쳐보기", "Open this field note")} <span aria-hidden="true">＋</span></summary><Blocks blocks={project.blocks} /></details>
            </div>
          </article>)}
        </div>
      </section>

      <section className="side-section sheet yellow" id="side-projects" data-page="02">
        <Heading number="02" note="SMALL THINGS & EXPERIMENTS" title="Side Quests" />
        <p className="section-intro">{copy("‘이런 것도 되려나?’에서 시작한 것들. 작아도 배울 건 많더라고요.", "Things that started with “I wonder if…” Small projects, plenty to learn.")}</p>
        <div className="side-grid">{sideProjects.map(item => <article className={`side-card side-${item.id}`} id={item.id} key={item.id}>
          <div className="side-card-top"><span className="side-icon" aria-hidden="true">{item.icon}</span><span className="project-tag">{item.tag}</span></div>
          <h3>{item.name}</h3><p>{item.description}</p>
          {item.id === "iconnectome" && <ul className="feature-facts"><li><span aria-hidden="true">·</span>{copy("Accuracy 0.89 → 0.77 (leakage 제거)", "Accuracy 0.89 → 0.77 (leakage removed)")}</li><li><span aria-hidden="true">·</span>NORMAL vs CCDS · Leak-free validation</li><li><span aria-hidden="true">·</span>MCI vs SCI · Age deconfounding</li></ul>}
          {item.project.images.length > 0 && <Gallery images={item.project.images} title={item.name} english={en} small />}
          <details className="project-details"><summary>{copy("만든 이야기", "Behind the build")} <span aria-hidden="true">＋</span></summary><Blocks blocks={item.project.blocks} /></details>
        </article>)}</div>
      </section>

      <section className="research-section sheet blue" id="research" data-page="03">
        <Heading number="03" note="THINGS I’M TRYING TO UNDERSTAND" title="Research Notes" />
        <p className="section-intro">{copy("잘 작동하는 것만큼, 왜 작동하는지 제대로 확인하는 일에도 관심이 있어요.", "I care about understanding why something works—and checking whether it really does.")}</p>
        <div className="paper-list">
          <article className="paper"><span className="paper-number">01</span><div><p className="project-tag">VISION AI / CLINICAL REPRESENTATION</p><h3>Canine Seizure Detection</h3><ul className="paper-facts"><li>First-author manuscript in preparation</li><li>VLM-based clinical representation</li><li>ROC-AUC 0.865</li></ul><details className="project-details"><summary>{copy("연구 노트", "Research notes")} <span aria-hidden="true">＋</span></summary><Blocks blocks={data[2].projects[0].blocks} /></details></div><span className="paper-status">in preparation</span></article>
          <article className="paper"><span className="paper-number">02</span><div><p className="project-tag">VETERINARY WORKFLOW / HUMAN FACTORS</p><h3>Digitalization of Veterinary Inpatient Management</h3><ul className="paper-facts"><li>First author</li><li>2026 KSVC Autumn Conference</li><li>{copy("5개 병원 · 118명 응답", "5 hospitals · 118 respondents")}</li></ul><details className="project-details"><summary>{copy("연구와 포스터 보기", "Research & poster")} <span aria-hidden="true">＋</span></summary><Blocks blocks={data[2].projects[1].blocks} /><Gallery images={data[2].projects[1].images} title={data[2].projects[1].title} english={en} small /></details></div><span className="paper-status">conference</span></article>
          <article className="paper"><span className="paper-number">03</span><div><p className="project-tag">MODEL VALIDATION / CLINICAL ML</p><h3>CCDS / iConnectome</h3><ul className="paper-facts"><li>Model validation</li><li>Leakage analysis</li><li>Age deconfounding</li></ul><p>{copy("기존 모델의 leakage를 확인하고, 연령 보정으로 MCI/SCI 구분을 개선했어요.", "Identified leakage in the existing model and improved MCI/SCI classification through age deconfounding.")}</p></div><span className="paper-status">ongoing</span></article>
        </div>
        <details className="extra-notes"><summary>{copy("노트 한 장 더: 음성 기반 Alzheimer’s disease 연구", "One more note: speech-based Alzheimer’s disease research")} <span aria-hidden="true">＋</span></summary><h3>{data[2].projects[2].title}</h3><Blocks blocks={data[2].projects[2].blocks} /></details>
      </section>

      <section className="timeline-section sheet lavender" id="timeline" data-page="04">
        <Heading number="04" note="PAGES ALONG THE WAY" title="How I got here" />
        <div className="timeline">{timeline.map(entry => <article className="year-entry" key={entry.year}><div className="year-label"><h3>{entry.year}</h3><span>{entry.note}</span></div><ul>{entry.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <details className="extra-notes"><summary>{copy("경력과 활동 전체 보기", "All experience & activities")} <span aria-hidden="true">＋</span></summary><Blocks blocks={data[5].blocks} /></details>
      </section>

      <section className="awards-section sheet white" id="awards" data-page="05">
        <Heading number="05" note="LITTLE THINGS WORTH KEEPING" title="Happy Moments" />
        <div className="award-grid">{awards.map(([name, result], index) => <div className="award-card" key={name}><span aria-hidden="true">{["✳", "✧", "↗", "✿", "⌘", "◌", "✦"][index % 7]}</span><div><h3>{name}</h3><p>{result}</p></div></div>)}</div>
        <details className="extra-notes"><summary>{copy("수상과 프로그램 더 보기", "More awards & programs")} <span aria-hidden="true">＋</span></summary><Blocks blocks={data[6].blocks} /></details>
      </section>

      <section className="about-section sheet mint" id="about" data-page="06">
        <Heading number="06" note="THE PERSON HOLDING THE PEN" title="A note about me" />
        <div className="about-grid">
          <div className="about-photos">
            <figure className="about-photo"><Image src={portrait} alt={copy("장비를 들고 있는 범시우", "Siu Beom holding a piece of hardware")} sizes="(max-width: 600px) 180px, 220px" /><figcaption>Siu Beom <span aria-hidden="true">☺</span></figcaption></figure>
            <figure className="about-photo side-b"><Image src={sideB} alt={copy("후드를 쓰고 브이 하는 범시우", "Siu Beom in a hoodie, making a V sign")} sizes="110px" /><figcaption>side B</figcaption></figure>
          </div>
          <div className="about-copy"><p className="about-lead">{copy("수의학을 공부하는데, 어쩌다 보니 자꾸 코드를 쓰고 있어요.", "I study veterinary medicine, but I somehow keep ending up writing code.")}</p><p>{copy("의학, AI, 소프트웨어, 그리고 사람이 만나는 지점의 문제를 좋아합니다.", "I like problems that sit between fields — where medicine, AI, software, and people meet.")}</p><p>{copy("Brent International School Manila에서 6년을 보내, 한국어와 영어 모두 편하게 사용해요.", "I spent six years at Brent International School Manila, so I’m comfortable working in both Korean and English.")}</p><p className="personal-note">{copy("일하지 않을 때도 대개 뭔가 만들고 있어요. 딱히 필요하진 않지만, 재밌는 것들요.", "Outside of work, I’m usually building something unnecessary but interesting.")}</p><a className="text-link" href="mailto:siubeom2005915@gmail.com">{copy("재밌는 이야기, 환영해요", "Got something fun in mind?")} ↗</a></div>
        </div>
      </section>
    </main>
    <footer><div><p>made with curiosity by Siu <span aria-hidden="true">✳</span></p><span>Seoul · {new Date().getFullYear()}</span></div><nav aria-label={copy("연락처 및 이력서", "Contact and resume")}><a href="https://github.com/siusiubeom" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="mailto:siubeom2005915@gmail.com">Email ↗</a><ResumeButton english={en} /></nav><a className="footer-mascot" href="#home" aria-label={copy("맨 위로", "Back to top")}><Mascot compact label={copy("손 흔드는 캐릭터", "A little wave goodbye")} /></a></footer>
  </>;
}
