import React from 'react'
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import { useState } from 'react';
import { importAll } from 'Utility/Functions';
import Directory from 'Components/Directory/Directory';
import ContentWindow from 'Components/ContentWindow/ContentWindow';

const allFiles = importAll(require.context('/src/Projects', false, /\.jsx$/)).reverse();

export default function Technology() {

    const [selectedFile, setSelectedFile] = useState(allFiles[allFiles.length - 1]);

    const handleSelect = (index) => {
        console.log("file: ", allFiles[index])
        setSelectedFile(allFiles[index]);
    };

    return (
        <>
            <HeaderContainer>
                <Directory
                    allFiles={allFiles}
                    selectedIndex={selectedFile}
                    handleSelect={handleSelect}
                />
            </HeaderContainer>

            <ContentWindow selectedFile={selectedFile}/>
        </>
    )
}
