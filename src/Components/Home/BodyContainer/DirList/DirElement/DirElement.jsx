import "./DirElement.css"
import { useState,useEffect } from 'react';


export default function DirElement({ content, onSelect, isSelected }) {
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
      onClick={onSelect}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      - {content.date} - {content.title}
    </div>
  )
}
