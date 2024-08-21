import React from 'react'
import "./CalendarContent.css"

export default function CalendarContent({project}) {



  return (
    <div className='projects-container'>
      <project.default/>
        {/* {projects.map((project,key)=>{
            return <project.default key={key}/>
        })} */}
    </div>
  )
}
