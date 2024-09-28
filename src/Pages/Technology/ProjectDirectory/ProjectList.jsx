import React from 'react'
import CalendarElement from './ProjectListElement/ProjectListElement'
import "./ProjectList.css"

export default function Calendar({projects,selectedProject,handleSelect}) {



  return (
    <div className='project-list'>
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
