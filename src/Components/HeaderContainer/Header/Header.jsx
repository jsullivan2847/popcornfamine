import React from 'react'
import './Header.css'

export default function Header() {
  let headercontent = <p style={{}}>Home</p>;
  console.log("location: ", window.location.pathname)
  if(window.location.pathname !== "/"){
    headercontent = <a href="/">Home</a>
  }
  return (
    <div className='title'>
        {headercontent}
    </div>
  )
}
