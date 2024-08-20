import "./CalendarElement.css"
import { useState,useEffect } from 'react';


export default function CalendarElement({ date, onSelect, isSelected }) {
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
      onClick={() => onSelect(date) }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      - {date}
    </div>
  )
}
