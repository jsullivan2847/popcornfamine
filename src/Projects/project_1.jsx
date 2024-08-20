import React from 'react'
import "./projects.css"

export const metadata = {
  categories: ["Text","Images","Video","Audio"],
  title: "First Post",
  date: "Aug/11/2024"
}

export default function project_1() {

  return (
    <div className='content-container'>
      <h1>Hide and Seek</h1>
      <p>Map location guessing game (geoguessr clone / ripoff) made with Google Maps API and react</p>
    </div>
  )
}
