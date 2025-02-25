import React from 'react'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import "./HeaderContainer.css"

export default function HeaderContainer({children}) {
  return (
    <div className='header-container'>
        <Header/>
        <Nav/>
        {children}
    </div>
  )
}
