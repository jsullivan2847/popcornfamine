import React from 'react'
import { GitHubReadme } from "react-github-readme-md";
import "./projects.css"

export const metadata = {
  categories: ["Game"],
  title: "Hide and Seek"
}

export default function project_1() {

  return (
    <GitHubReadme username="jsullivan2847" repo="Hide-and-Seek" />
  )
}
