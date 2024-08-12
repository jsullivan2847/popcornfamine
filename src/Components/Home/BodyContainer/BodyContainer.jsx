import React from 'react'
import "./BodyContainer.css"
import ContentWindow from './ContentWindow/ContentWindow'
import DirList from './DirList/DirList'

export default function BodyContainer() {
  return (
    <div className='body-container'>
        <DirList/>
        <ContentWindow/>
    </div>
  )
}
