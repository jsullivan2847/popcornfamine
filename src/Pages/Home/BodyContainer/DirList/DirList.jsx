import React from 'react'
import "./DirList.css"
import DirElement from './DirElement/DirElement'

export default function DirList({allFiles,selectedIndex,handleSelect}) {

  return (
    <div className='dir-list'>
      {allFiles.map((file,index)=> {
        return <DirElement
        key={index}
        file={file}
        isSelected={selectedIndex === index}
        onSelect={() => handleSelect(index)}
        />
      })}
    </div>
  )
}
