import React from 'react'
import HeaderContainer from '../Home/HeaderContainer/HeaderContainer'
import "../Page.css"
import "./About.css"
import AboutContainer from './AboutContainer/AboutContainer'
export default function About() {
  return (
    <div className='page'>
        <HeaderContainer/>
        <AboutContainer/>
    </div>
  )
}
