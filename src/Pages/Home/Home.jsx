import React from "react";
import { useState } from "react";
import HeaderContainer from "../../Components/HeaderContainer/HeaderContainer";
import { importAll } from "../../Utility/Functions";
import ContentWindow from "Components/ContentWindow/ContentWindow";
import Directory from "Components/Directory/Directory";

const allFiles = importAll(require.context("/src/Entries/", false, /\.jsx$/));

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(allFiles.length - 1);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <HeaderContainer>
      <Directory
        allFiles={allFiles}
        selectedIndex={selectedIndex}
        handleSelect={handleSelect}
      />
      </HeaderContainer>
      
      <ContentWindow allFiles={allFiles} selectedIndex={selectedIndex} />
    </>
  );
}
