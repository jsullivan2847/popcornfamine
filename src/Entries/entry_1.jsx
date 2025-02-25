import React from "react";
import "./entries.css";

export const metadata = {
  categories: ["Text", "Images", "Video", "Audio"],
  title: "That's True",
  date: "Aug/11/2024",
};

export default function entry_1() {
  return (
    <div className="entry">
      <h1>That's True</h1>
      <iframe
        title="thatstrue_bandcamp"
        className="bandcamp-embed"
        src="https://bandcamp.com/EmbeddedPlayer/track=2923954006/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
        seamless
      >
        <a href="https://half-day.bandcamp.com/track/thats-true">
          That&#39;s True by Half Day
        </a>
      </iframe>
      <p>
        That’s True is the first single from “I Will Never Change My Style”.
        Dave played drums on all the rest of the songs, but when we went into
        the studio to track drums we just forgot to record this song - which
        kind of worked out because I was attached to the demo drums that made it
        to the final version.
      </p>
      <p>
        There was a band that played these songs - Dave Pohsell, Brita Van Tol,
        Ryan Hagan, and Melissa Caren which somehow only managed to play 2 shows
        in the course of a year and a half - although we practiced constantly.
        With "That's True" and the rest of the songs on the EP I hope to have
        captured the sounds we achieved in that time.
      </p>
      <p>If you made it here thank you for reading and listening.</p>
      <img
        width={"100%"}
        src="https://f4.bcbits.com/img/a2208395273_16.jpg"
        alt=""
      />
      <br />
      <div>
        <div className="lyrics">
          I can't find it on the map - someplace I won't know till I get there.
          Where's my buddy when I need him? My bad, I miss everyone I know.
          <br />
          <br />
          Yeah it's true. I do got you. Yeah it's true. <br />
          <br />
          Lucky not to have to mow the lawn. Trying not to be so goddamn
          dramatic. Singing somebody else's songs - hope to see some familar
          faces. Missing what I got before it's gone - things I shouldn't be
          taking for granted.
          <br />
          <br />
          Yeah it's true. I do got you. Yeah it's true. This is not new. Yeah
          it's true.
        </div>
        <h3>credits</h3>
        <div>
          releases October 5, 2024
          <br />
          Vocals - Melissa Caren
          <br />
          Guitar - Ryan Hagan
          <br />
          All other instrumentation / production / engineering / mixing - James
          Sullivan
          <br />
          Mastering - Sam Hall
          <br />
          Artwork - Tyler Moore
        </div>
      </div>
    </div>
  );
}
