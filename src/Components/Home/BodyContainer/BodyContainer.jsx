import React from 'react'
import "./BodyContainer.css"
import ContentWindow from './ContentWindow/ContentWindow'
import DirList from './DirList/DirList'
import { useState, useEffect } from 'react'

function importAll(r) {
    return r.keys().map(r);
}
const allFiles = importAll(require.context('../../../Entries/', false, /\.jsx$/)).reverse();

export default function BodyContainer() {

    const [selectedIndex, setSelectedIndex] = useState(allFiles.length - 1)

    const handleSelect = (index) => {
        setSelectedIndex(index)
    }

    return (
        <div className='body-container'>
            <DirList
            allFiles={allFiles}
            selectedIndex={selectedIndex}
            handleSelect={handleSelect}
            />
            <ContentWindow
            allFiles={allFiles}
            selectedIndex={selectedIndex}
            />
        </div>
    )
}
