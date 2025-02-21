import React from 'react'
import "./entries.css"

export const metadata = {
  categories: ["Text", "Images", "Video", "Audio"],
  title: "I Lost It",
  date: "Feb/20/2025"
}

export default function entry_1() {

  return (
    <div className='content-container'>
      <div>
      <h3>You can play them all at once</h3>
      <div className='embeds'>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2039173841&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/user-438754434"
          title="Half Day"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Half Day
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/user-438754434/07a74db4-7fac-4083-8a72-bdd882c649ea"
          title="I Lost It"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          I Lost It
        </a>
      </div> 
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/S9ZeZU3ypoE?si=GX_eHwhC6ziWYA9h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pbsoFDUoOrM?si=M9QMt2eb3vnuw4OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
      <img width={"100%"} src='https://hips.hearstapps.com/hmg-prod/images/backstage-portrait-of-american-country-and-folk-musician-news-photo-1682362540.jpg?resize=980:*' alt='' />
    </div>
  )
}
