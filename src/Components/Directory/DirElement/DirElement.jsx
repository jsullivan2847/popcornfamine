import "./DirElement.css"
import { useState,useEffect } from 'react';


export default function DirElement({ file, onSelect, isSelected }) {
  console.log("file: ",file)
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
    {file.metadata.date && "- " + file.metadata.date} - {file.metadata.title}
    </div>
  )
}
