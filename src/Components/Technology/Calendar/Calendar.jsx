import React from 'react'
import CalendarElement from './CalendarElement/CalendarElement'
import "./Calendar.css"

export default function Calendar({projects,selectedProject,handleSelect}) {



  return (
    <div className=''>
      {projects.map((project,index)=> {
        return <CalendarElement
        key={index}
        project={project}
        selectedProject={selectedProject}
        onSelect={handleSelect}
        />
      })}
    </div>
  )
}
