import React from 'react'
import "./DirList.css"
import DirElement from './DirElement/DirElement'
import { useState } from 'react'

export default function DirList() {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleSelect = (index) => {
    setSelectedIndex(index)
  }

  const posts = [{
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
      {posts.map((post,index)=> {
        return <DirElement
        key={index}
        content={post}
        isSelected={selectedIndex === index}
        onSelect={() => handleSelect(index)}
        />
      })}
    </div>
  )
}
