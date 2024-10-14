import { faYoutube, faSpotify, faBandcamp, faItunes } from '@fortawesome/free-brands-svg-icons';

const releases = [
    {
        categories: ["Album"],
        title: "The Great Bug War",
        artist: "Half Day",
        album_art: "https://f4.bcbits.com/img/a0862376495_16.jpg",
        release_date: new Date(2024, 2),
        description: "Hardrive Dump some 2020 some 2024. Mastered by Sam Hall",
        credits: "Songwriting / Vocals / Production / All Instruments",
        links: {
            "Youtube": "https://www.youtube.com/watch?v=qcYLWPhGn1I&list=OLAK5uy_laCMeDNNUgqWYMs4BDoQCazDyMrmY9Mo0",
            "Spotify": "https://open.spotify.com/album/08c0xOFzd48H5PLjIn0JfC?si=14-OCr90ScuT4wi8c97jAA",
            "Bandcamp": "https://half-day.bandcamp.com/album/the-great-bug-war",
            "Apple Music": "https://music.apple.com/us/album/the-great-bug-war/1736668556"
        },
        icons: {
            "Youtube": faYoutube,
            "Spotify": faSpotify,
            "Bandcamp": faBandcamp,
            "Apple Music": faItunes
        }
    },
    {
        categories: ["Album"],
        title: "Gotta Get to Work",
        release_date: new Date(2019, 2),
        artist: "Half Day",
        album_art:"https://f4.bcbits.com/img/a1054899475_16.jpg",
        credits: "Songwriting / Vocals / Production / All Instruments",
        description: "Recorded at home in Grand Rapids, MI",
        links: {
          "Youtube": "https://www.youtube.com/watch?v=S4rUaPPzacI&list=OLAK5uy_mO_mj_b5Sofo01MKWq2Hm6BlKPahD5-NQ",
          "Spotify": "https://open.spotify.com/album/2BhVqxK9HsaYPNnC3wiUpj?si=tZs3hihjQTuR8DgthPlZaQ",
          "Bandcamp": "https://half-day.bandcamp.com/album/gotta-get-to-work",
          "Apple Music": "https://music.apple.com/us/album/gotta-get-to-work-ep/1457476507"
        },
        icons: {
          "Youtube": faYoutube,
          "Spotify": faSpotify,
          "Bandcamp": faBandcamp,
          "Apple Music": faItunes
        }
      },
      {
        categories: ["Album"],
        title: "Mixed Reviews",
        artist: "Oliver Houston",
        album_art: "https://f4.bcbits.com/img/a2618929286_16.jpg",
        release_date: new Date(2018, 10),
        credits: "Songwriting / Lead Guitar",
        description: "Recorded at Cold War Studios with Rick Johnson in Grand Rapids, MI",
        links: {
          "Youtube": "https://www.youtube.com/watch?v=Q_NGyWjsDMc",
          "Spotify": "https://open.spotify.com/album/1fXCRUHhyNYGXJzy2seBxI?si=to7DDC2QTE-kiG_d3AhMPA",
          "Bandcamp": "https://oliverhouston.bandcamp.com/album/mixed-reviews",
          "Apple Music": "https://music.apple.com/us/album/mixed-reviews-ep/1445068879"
        },
        icons: {
          "Youtube": faYoutube,
          "Spotify": faSpotify,
          "Bandcamp": faBandcamp,
          "Apple Music": faItunes
        }
      },
      {
        categories: ["Album"],
        title: "Secret World",
        artist: "Half Day",
        release_date: new Date(2021, 10),
        album_art: "https://f4.bcbits.com/img/a1527446205_16.jpg",
        credits: "Songwriting / Vocals / Production / All Instruments",
        description: "Recorded in Grand Rapids, MI in 2019 / 2020. Some drums played by Tyler Moore and some engineered by Sam Hall. Mixed and overcompressed by me.",
        links: {
          "Youtube": "https://www.youtube.com/watch?v=fXkUIdUZO3k&list=OLAK5uy_lwiM51Z7JlbOZg6TlD-kCM_EPb4loOOP0",
          "Spotify": "https://open.spotify.com/album/5IVPSGcW2GcTDWxOwVCvXs?si=7XXgq6lMTGer39NWsg9jLQ",
          "Bandcamp": "https://half-day.bandcamp.com/album/secret-world",
          "Apple Music": "https://music.apple.com/us/album/secret-world/1586022514"
        },
        icons: {
          "Youtube": faYoutube,
          "Spotify": faSpotify,
          "Bandcamp": faBandcamp,
          "Apple Music": faItunes
        }
      },
      {
        categories: ["Album"],
        title: "Tilted Planet",
        artist: "Zero Point Energy",
        album_art: "https://f4.bcbits.com/img/a3770366235_16.jpg",
        release_date: new Date(2024, 4),
        credits: "Songwriting / Bass Guitar",
        description: "Some songwriting and bass guitar. Recorded at Studio G in Brooklyn, NY with Matt Labozza",
        links: {
          "Youtube": "https://www.youtube.com/watch?v=MdqnZTiyHBA&list=OLAK5uy_no5ukwmPjHQzPCq8y5FMBVrgux9KfT9GY",
          "Spotify": "https://open.spotify.com/album/6sASZKd9JrmI8bWzVtzqXY?si=DxnURvgbRaq5uNFVIDZe2A",
          "Bandcamp": "https://zeropointenergy.bandcamp.com/album/tilted-planet",
          "Apple Music": "https://music.apple.com/us/album/tilted-planet/1732752795"
        },
        icons: {
          "Youtube": faYoutube,
          "Spotify": faSpotify,
          "Bandcamp": faBandcamp,
          "Apple Music": faItunes
        }
      },
      {
        categories: ["Single"],
        title: "That's True",
        artist: "Half Day",
        album_art: "https://f4.bcbits.com/img/a2208395273_16.jpg",
        release_date: new Date(2024, 10),
        credits: "Songwriting / Instrumentation / Production / Mixing",
        description: "First single from upcoming EP 'I Will Never Change My Style'",
        links: {
          "Youtube": "https://www.youtube.com/watch?v=rqYpiybCtZI",
          "Spotify": "https://open.spotify.com/track/1bSU3AlxNFm7kBeDbvkfUF?si=c7561769867d4c79",
          "Bandcamp": "https://half-day.bandcamp.com/track/thats-true",
          "Apple Music": "https://music.apple.com/us/album/thats-true-single/1771394394"
        },
        icons: {
          "Youtube": faYoutube,
          "Spotify": faSpotify,
          "Bandcamp": faBandcamp,
          "Apple Music": faItunes
        }
      }
];

// Sort the releases by date
const sortedReleases = releases.sort((b,a) => a.release_date - b.release_date);

export default sortedReleases;