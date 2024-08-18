import React from 'react'
import "./ContentWindow.css"

export default function ContentWindow({ allFiles, selectedIndex}) {
  let SelectedFile = null;

  if (allFiles && allFiles.length > 0 && selectedIndex >= 0 && selectedIndex < allFiles.length) {
    SelectedFile = allFiles[selectedIndex]?.default;
    console.log(SelectedFile);
  }



  return (
    <div className='content-window'>
      { SelectedFile ? <SelectedFile /> : <p>Something went wrong...</p>}
    </div>
  )
}
