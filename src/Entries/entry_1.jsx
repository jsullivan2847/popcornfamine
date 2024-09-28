import React from 'react'
import "./entries.css"

export const metadata = {
  categories: ["Text", "Images", "Video", "Audio"],
  title: "First Post",
  date: "Aug/11/2024"
}

export default function entry_1() {

  return (
    <div className='content-container'>
      <h1>That's True</h1>
      <p>Content</p>
      <img src='https://f4.bcbits.com/img/a2208395273_16.jpg' alt='' />
      <br/>
      <div>
        <div>I can't find it on the map - someplace I won't know till I get there. Where's my
          buddy when I need him? My bad, I miss everyone I know.<br />
          <br />
          Yeah it's true. I do got you. Yeah it's true. <br />
          <br />
          Lucky not to have to mow the lawn. Trying not to be so goddamn dramatic. Singing somebody else's songs - hope to
          see some familar faces. Missing what I got before it's gone - things I shouldn't be taking for granted.<br />
          <br />
          Yeah it's true. I do got you. Yeah it's true. This is not new. Yeah it's true.
        </div>

        <h3>credits</h3>
        <div>

          releases October 5, 2024

          <br />Vocals - Melissa Caren<br />
          Guitar - Ryan Hagan<br />
          All other instrumentation / production / engineering / mixing - James Sullivan<br />
          Mastering - Sam Hall<br />
          Artwork - Tyler Moore
        </div>
      </div>
    </div>
  )
}
