import React from 'react'

export const metadata = {
    categories: ["Video"],
    title: "Game Audio Demo Reel"
  }

export default function ga_demo_reel() {
  return (
    <div>
        <p>Little demo reel I made after a studying at <a href='https://school.videogameaudio.com/apply/'>School of Video Game Audio</a></p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KHAkyUKpOX4?si=Dm5qSeTetWn2RsNB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}
