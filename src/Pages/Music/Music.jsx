import React from 'react'

import sortedReleases from '../../Releases/releases';
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';
import ContentWindow from 'Components/ContentWindow/ContentWindow';

export default function Music() {
    console.log(sortedReleases)

    return (
        <>
            <HeaderContainer />
            <ContentWindow
            selectedFile={sortedReleases}
            mode="music"
            />
        </>
    )
}
