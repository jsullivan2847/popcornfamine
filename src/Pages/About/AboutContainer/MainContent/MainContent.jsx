import React from 'react'
import "./MainContent.css"
import { useState } from 'react'

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

    </div>
  )
}
