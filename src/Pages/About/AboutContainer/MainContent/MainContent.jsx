import React from 'react'
import "./MainContent.css"
import { useState } from 'react'
import { faYoutube, faBandcamp, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainContent() {

  const [clicked,setClicked] = useState(false)
  let emailClass = ''
  clicked ? emailClass = "contact-text" : emailClass = "contact-text not-clicked"
  
  return (
    <div className='about-main-content'>
        <p>This is just a place for me on the internet that is not Instagram.
        I share my projects as I am constantly learning.... Sometimes music,
        sometimes games, sometimes just some pictures from my life</p>
        <br/>
        <p>If you want to contact me:</p>
        <div className='contact' >
        <p className={emailClass} onClick={() => setClicked((prevState) => !prevState)}>
            jsullivan2847@gmail.com
        </p>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faYoutube}/>
            <a href="https://www.youtube.com/@popcornfamine">Youtube</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBandcamp}/>
            <a href='https://half-day.bandcamp.com/'>Bandcamp</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faSoundcloud}/>
            <a href='https://soundcloud.com/user-438754434'>Soundcloud</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram}/>
            <a href='https://www.instagram.com/popcornfamine/'>Instagram</a>
          </li>
        </ul>
    </div>
  )
}
