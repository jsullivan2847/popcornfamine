import React from "react";
import "./Directory.css";
import DirElement from "./DirElement/DirElement";

export default function Directory({allFiles, selectedIndex, handleSelect}) {
  return (
    <div className="dir-list">
      {allFiles.map((file, index) => {
        return (
          <DirElement
            key={index}
            file={file}
            isSelected={selectedIndex === index}
            onSelect={() => handleSelect(index)}
          />
        );
      })}
    </div>
  );
}
