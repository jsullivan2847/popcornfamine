import React from 'react'
import HeaderContainer from './HeaderContainer/HeaderContainer'
import BodyContainer from './BodyContainer/BodyContainer'
import "../Page.css"

export default function Home() {
  return (
    <div className='page'>
        <HeaderContainer/>
        <BodyContainer/>
    </div>
  )
}
