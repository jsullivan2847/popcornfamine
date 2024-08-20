import React from 'react'
import "./CalendarContent.css"

export default function CalendarContent({ projects}) {



  return (
    <div className='projects-container'>
        {projects.map((project,key)=>{
            return <project.default key={key}/>
        })}
    </div>
  )
}
