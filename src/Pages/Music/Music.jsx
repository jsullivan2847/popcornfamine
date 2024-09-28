import React from 'react'

import sortedReleases from '../../Releases/releases';
import MusicContent from './MusicContent/MusicContent'
import HeaderContainer from '../../Components/HeaderContainer/HeaderContainer';

const allReleases = sortedReleases;

export default function Music() {

    return (
        <>
            <HeaderContainer/>
            {allReleases? <MusicContent allReleases={allReleases}/> : <p>no releases</p>}
        </>
    )
}
