import React from 'react'
import HeaderContainer from '../Home/HeaderContainer/HeaderContainer'
// import MusicList from './MusicDirectory/MusicList';
import { releases } from '../../Releases/releases';
import MusicContent from './MusicContent/MusicContent'
import { useState } from 'react';
import "../Page.css"

console.log("releases: ",releases);


// function importAll(r) {
//     return r.keys().map(r);
// }
// const allReleases = importAll(require.context('/src/Releases', false, /\.jsx$/)).reverse();

const allReleases = releases;

export default function Music() {

    // const allDates = [...new Set(allReleases.map((Release) => Release.metadata.date))];

    // const [selectedRelease, setSelectedRelease] = useState(allReleases[allReleases.length - 1])

    // const handleSelect = (release) => {
    //     console.log("Release: ",release)
    //     setSelectedRelease(release)
    // }

    // const selectedReleases = allReleases.filter((Release) => Release.metadata.date === selectedDate)
    // const selectedReleases = allReleases

    // console.log("selected date: ",selectedDate)
    // console.log("all Releases: ",allReleases)
    // console.log("selected Releases: ",selectedReleases)

    return (
        <div className='page'>
            <HeaderContainer/>
            <h1>Music</h1>
            {/* <MusicList
                Releases={allReleases}
                // selectedRelease={selectedRelease}
                handleSelect={handleSelect}
            /> */}
            {allReleases? <MusicContent allReleases={allReleases}/> : <p>no releases</p>}
            {/*  */}
        </div>
    )
}
