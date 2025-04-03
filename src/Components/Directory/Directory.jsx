import React from "react";
import "./Directory.css";
import DirElement from "./DirElement/DirElement";

export default function Directory({allFiles, selectedFile, handleSelect}) {
  console.timeLog("all files: ",allFiles);
  return (
    <div className="dir-list">
      {allFiles.map((file, index) => {
        return (
          <DirElement
            key={index}
            file={file}
            isSelected={allFiles.indexOf(selectedFile) === index}
            onSelect={() => handleSelect(index)}
          />
        );
      })}
    </div>
  );
}
