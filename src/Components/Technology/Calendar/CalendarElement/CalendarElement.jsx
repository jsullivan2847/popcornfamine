import "./CalendarElement.css"
import { useState,useEffect } from 'react';


export default function CalendarElement({ project, onSelect, selectedProject }) {
//   let [style,setStyle] = useState("")
//   useEffect(() => {
//     setStyle(isSelected ? ' selected' : '');
// }, [isSelected]);
// const handleMouseOver = () => {
//   setStyle(' selected');
// }
// const handleMouseOut = () => {
//   setStyle(isSelected ? ' selected' : '');
// }

  return (
    <div
      className={"dir-element"}
      onClick={() => onSelect(project) }
      // onMouseOver={handleMouseOver}
      // onMouseOut={handleMouseOut}
    >
      - {project.metadata.title}
    </div>
  )
}
