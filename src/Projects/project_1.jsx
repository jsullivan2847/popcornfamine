import React from 'react'
import { GitHubReadme } from "react-github-readme-md";
import "./projects.css"

export const metadata = {
  categories: ["Game"],
  title: "Hide and Seek (Geolocation guessing game)"
}

export default function project_1() {

  return (
    <div className='content-container'>
      <GitHubReadme username="jsullivan2847" repo="Hide-and-Seek" />
      {/* <h1>Hide and Seek</h1>
      <p>Map location guessing game (geoguessr clone / ripoff) made with Google Maps API and react</p> */}
    </div>
  )
}
