import React from 'react'
import Release from '../../../Releases/Release'
import "./MusicContent.css"

export default function MusicContent({ allReleases }) {



  return (
    <div className='releases-container'>
      {allReleases.map((release,index) => {
        return <Release metadata={release} key={index}/>
      })}
    </div>

  )
}
