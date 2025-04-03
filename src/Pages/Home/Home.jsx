import React from "react";
import { useState } from "react";
import HeaderContainer from "../../Components/HeaderContainer/HeaderContainer";
import { importAll } from "../../Utility/Functions";
import ContentWindow from "Components/ContentWindow/ContentWindow";
import Directory from "Components/Directory/Directory";




export default function Home() {

  // function importAll(r) {
  //   return r.keys().map(r);
  // }

  const allFiles = [...new Set(importAll(require.context("/src/Entries/", false, /\.jsx$/)))].reverse();
  console.log("all files: ", allFiles);

  const handleSelect = (index) => {
    console.log("file: ", allFiles[index])
    setSelectedFile(allFiles[index]);
  };

  const [selectedFile, setSelectedFile] = useState(allFiles[allFiles.length - 1]);
  console.log(selectedFile);

  
  return (
    <>
      <HeaderContainer>
        <Directory
          allFiles={allFiles}
          selectedFile={selectedFile}
          handleSelect={handleSelect}
        />
      </HeaderContainer>

      <ContentWindow selectedFile={selectedFile} />
    </>
  );
}
