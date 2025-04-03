import React from 'react'
import Release from 'Releases/Release'
import "./ContentWindow.css"

export default function ContentWindow({ selectedFile, mode }) {
  

  if (mode === "music"){
    console.log("got here");
    return (
      <div className='content-window'>
        <div className='content-grid'>
          {selectedFile.map((file, index) => (
            <li key={index}>
              {console.log(file.title)}
              <Release metadata={file}/>
            </li>
          ))}
        </div>
      </div>
    );
  }

  else{
    return (
      <div className='content-window'>
        { selectedFile ? <selectedFile.default/> : <p>Loading...</p> }
      </div>
    )
  }

}