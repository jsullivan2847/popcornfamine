import React from 'react'
import MusicListElement from './MusicListElement/MusicListElement'
import "./MusicList.css"

export default function MusicList({projects,selectedProject,handleSelect}) {



  return (
    <div className='project-list'>
      {projects.map((project,index)=> {
        return <MusicListElement
        key={index}
        project={project}
        selectedProject={selectedProject}
        onSelect={handleSelect}
        />
      })}
    </div>
  )
}
