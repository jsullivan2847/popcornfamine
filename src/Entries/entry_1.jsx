import React from 'react'
import "./entries.css"

export const metadata = {
  categories: ["Text","Images","Video","Audio"],
  title: "First Post",
  date: "Aug/11/2024"
}

export default function entry_1() {

  return (
    <div className='content-container'>
      <h1>Title</h1>
      <p>Content</p>
    </div>
  )
}
