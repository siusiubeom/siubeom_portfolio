// B-side — 일 말고, 좋아하는 것들.
// 각 면(B1~B4)의 tracks에 항목을 채우면 트랙리스트에 바로 나타나요. 비어 있으면 "녹음 중" 트랙으로 보여요.
// by는 아티스트/감독/저자, note/noteEn은 한 줄 감상, href가 있으면 링크로 열려요.
// cover(public/ 기준 경로)가 있는 항목은 위쪽 커버 그리드에, 나머지는 트랙리스트에 나와요.

export type Track = { title: string; by?: string; note?: string; noteEn?: string; href?: string; cover?: string };
export type BSideSide = { id: string; side: string; title: string; titleEn: string; genre: string; tracks: Track[] };

const sides: BSideSide[] = [
  { id: "music", side: "B1", title: "자주 듣는 음악", titleEn: "On repeat", genre: "MUSIC", tracks: [
    { title: "Sound of Silver", by: "LCD Soundsystem", cover: "/covers/sound-of-silver.jpg", href: "https://open.spotify.com/album/1R8kkopLT4IAxzMMkjic6X" },
    { title: "The Velvet Underground & Nico", by: "The Velvet Underground & Nico", cover: "/covers/velvet-underground-nico.jpg", href: "https://open.spotify.com/album/4xwx0x7k6c5VuThz5qVqmV" },
    { title: "가장 보통의 존재", by: "언니네 이발관", cover: "/covers/gajang-botong.jpg", href: "https://open.spotify.com/album/1uDER1x2tSL9Qfu4qo1V39" },
    { title: "Yankee Hotel Foxtrot", by: "Wilco", cover: "/covers/yankee-hotel-foxtrot.jpg", href: "https://open.spotify.com/album/6PanEvuo9ZNvGT39v50xp6" },
    { title: "When the Pawn...", by: "Fiona Apple", cover: "/covers/when-the-pawn.jpg", href: "https://open.spotify.com/album/3o5EnVZNJXtfPV8tCoagjI" },
    { title: "On Avery Island", by: "Neutral Milk Hotel", cover: "/covers/on-avery-island.jpg", href: "https://open.spotify.com/album/3HTsNBfZLfRXQTfdLeLVK1" },
    { title: "Either/Or", by: "Elliott Smith", cover: "/covers/either-or.jpg", href: "https://open.spotify.com/album/5bmpvyP7UGqB4VuXmrJUMy" },
    { title: "Twin Fantasy", by: "Car Seat Headrest", cover: "/covers/twin-fantasy.jpg", href: "https://open.spotify.com/album/20U1UWeGcGq7JVW0tf8yfH" },
    { title: "Up the Bracket", by: "The Libertines", cover: "/covers/up-the-bracket.jpg", href: "https://open.spotify.com/album/4iddETnfRjPwoPCo9PjeyX" },
    { title: "The Glow Pt. 2", by: "The Microphones", cover: "/covers/the-glow-pt-2.jpg", href: "https://open.spotify.com/album/6QYoRO2sXThCORAifrP4Bl" },
    { title: "Yoshimi Battles the Pink Robots", by: "The Flaming Lips", cover: "/covers/yoshimi.jpg", href: "https://open.spotify.com/album/49LA20VMk65fQyEaIzYdvf" },
    { title: "Weezer (Blue Album)", by: "Weezer", cover: "/covers/weezer-blue.jpg", href: "https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q" },
    { title: "E•MO•TION", by: "Carly Rae Jepsen", cover: "/covers/emotion.jpg", href: "https://open.spotify.com/album/08MsbKas4UJKhbJlAnAyfB" },
    { title: "The Velvet Underground", by: "The Velvet Underground", cover: "/covers/velvet-underground.jpg", href: "https://open.spotify.com/album/2HOf3Nb44Us8U9oEtKLSrX" },
    { title: "White Light/White Heat", by: "The Velvet Underground", cover: "/covers/white-light-white-heat.jpg", href: "https://open.spotify.com/album/0HHmJpwOXXRJu9HI9iQiEO" },
    { title: "Teens of Denial", by: "Car Seat Headrest", cover: "/covers/teens-of-denial.jpg", href: "https://open.spotify.com/album/3KpYyDP8q8sUBxatHaYEsP" },
  ] },
  { id: "movies", side: "B2", title: "좋아하는 영화", titleEn: "Movies I keep coming back to", genre: "FILM", tracks: [] },
  { id: "books", side: "B3", title: "읽은 책, 읽는 책", titleEn: "Books, read & reading", genre: "BOOKS", tracks: [] },
  { id: "blogs", side: "B4", title: "블로그 & 글", titleEn: "Blogs & writing", genre: "WRITING", tracks: [] },
];

export default sides;
