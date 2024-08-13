import React from 'react'
import "./ContentWindow.css"

export default function ContentWindow({allFiles, selectedIndex}) {
  const SelectedFile = allFiles[selectedIndex].default
  console.log(SelectedFile)
  return (
    <div className='content-window'>
      <SelectedFile/>
    </div>
  )
}
