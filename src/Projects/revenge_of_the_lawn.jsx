import React from 'react'
import { GitHubReadme } from 'react-github-readme-md'
import "./css/projects.css"


export const metadata = {
    categories: ["Game"],
    title: "Revenge of the Lawn",
    date: "Aug/12/2024"
  }

export default function project_2() {
  return (
    <GitHubReadme username="jsullivan2847" repo="Revenge_of_the_lawn_v2" />
  )
}
