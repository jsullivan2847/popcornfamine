import { faYoutube, faSpotify, faBandcamp, faItunes } from '@fortawesome/free-brands-svg-icons';

const releases = [
    {
        categories: ["Album"],
        title: "The Great Bug War",
        artist: "Half Day",
        album_art: "https://f4.bcbits.com/img/a0862376495_16.jpg",
        release_date: new Date(2024, 2),
        description: "Hardrive Dump some 2020 some 2024",
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
        description: "",
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
        credits: "",
        description: "",
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
        credits: "",
        description: "",
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
      }
];

// Sort the releases by date
const sortedReleases = releases.sort((b,a) => a.release_date - b.release_date);

export default sortedReleases;