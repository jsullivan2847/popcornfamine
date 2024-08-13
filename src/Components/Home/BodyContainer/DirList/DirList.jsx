import React from 'react'
import "./DirList.css"
import DirElement from './DirElement/DirElement'
import { metadata } from '../../../../Entries/entry_1'
import { useState } from 'react'

function importAll(r) {
  return r.keys().map(r);
}

const allFiles = importAll(require.context('../../../../Entries/', false, /\.jsx$/));

const allMetadata = allFiles.map(file => file.metadata);
const allEntries = allFiles.map(file => file.default);

console.log("all metadata: ",allMetadata)
console.log("all entries: ",allEntries)

export default function DirList() {

  console.log("metadata: ",metadata)

  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleSelect = (index) => {
    setSelectedIndex(index)
  }

  const entries = [{
    categories: ["Text","Images","Video","Audio"],
    title: "First Post",
    date: "Aug/11/2024",
    heading: "First Post to My Blog....",
    body: "Hello and welcome I hope this can be new/old and beatiful way to use the internet"
  },
  {
    category: ["Text"],
    title: "Second Post",
    date: "Aug/11/2024",
    heading: "Second Post",
    body: "Posting again already...."
  }]

  return (
    <div className='dir-list'>
      {allFiles.map((file,index)=> {
        return <DirElement
        key={index}
        file={file}
        isSelected={selectedIndex === index}
        onSelect={() => handleSelect(index)}
        />
      })}
    </div>
  )
}
