import "./MusicListElement.css"
import { useState,useEffect } from 'react';


export default function MusicListElement({ project, onSelect, selectedProject }) {

const isSelected = project === selectedProject
  let [style,setStyle] = useState("")
  useEffect(() => {
    setStyle(isSelected ? ' selected' : '');
}, [isSelected]);
const handleMouseOver = () => {
  setStyle(' selected');
}
const handleMouseOut = () => {
  setStyle(isSelected ? ' selected' : '');
}

  return (
    <div
      className={"dir-element" + style}
      onClick={() => onSelect(project) }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      - {project.metadata.title}
    </div>
  )
}
