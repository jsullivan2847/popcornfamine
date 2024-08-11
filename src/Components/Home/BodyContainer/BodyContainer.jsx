import React from 'react'
import "./BodyContainer.css"
import ContentWindow from './ContentWindow/ContentWindow'
import ContentDirectory from './ContentDirectory/ContentDirectory'

export default function BodyContainer() {
  return (
    <div className='body-container'>
        <ContentDirectory/>
        <ContentWindow/>
    </div>
  )
}
