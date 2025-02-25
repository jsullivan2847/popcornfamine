import React from "react";
import "./entries.css";

export const metadata = {
  categories: ["Text", "Images", "Video", "Audio"],
  title: "I Lost It",
  date: "Feb/20/2025",
};

export default function entry_1() {
  return (
    <>
      <div className="embeds">
        <h3>You can play them all at once</h3>
        {/* <div className="embeds"> */}
        <iframe
          className="soundcloud-embed"
          title="soundcloud-me"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2039173841&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <iframe
          className="youtube-embed"
          src="https://www.youtube.com/embed/S9ZeZU3ypoE?si=GX_eHwhC6ziWYA9h"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <iframe
          className="youtube-embed"
          src="https://www.youtube.com/embed/pbsoFDUoOrM?si=M9QMt2eb3vnuw4OU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>

      <img
        width={"100%"}
        src="https://hips.hearstapps.com/hmg-prod/images/backstage-portrait-of-american-country-and-folk-musician-news-photo-1682362540.jpg?resize=980:*"
        alt=""
      />
    </>
  );
}
