import React from "react";
import { useState } from "react";
import HeaderContainer from "../../Components/HeaderContainer/HeaderContainer";
import { importAll } from "../../Utility/Functions";
import ContentWindow from "Components/ContentWindow/ContentWindow";
import Directory from "Components/Directory/Directory";

const allFiles = importAll(require.context("/src/Entries/", false, /\.jsx$/));

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(allFiles[allFiles.length - 1]);

  const handleSelect = (index) => {
    console.log("file: ",allFiles[index])
    setSelectedFile(allFiles[index]);
  };
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
