import React from 'react'
import { GitHubReadme } from "react-github-readme-md";
import "./css/projects.css"

export const metadata = {
  categories: ["Game"],
  title: "Hide and Seek"
}

export default function hide_and_seek() {

  return (
      <GitHubReadme username="jsullivan2847" repo="Hide-and-Seek" />    
  )
}
