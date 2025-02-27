import React from 'react'
import "./css/projects.css"

export const metadata = {
    categories: ["Video"],
    title: "Game Audio Demo Reel"
  }

export default function ga_demo_reel() {
  return (
    <div className='flex'>
        <p>Game audio demo reel I made while studying at <a className='external-link' href='https://school.videogameaudio.com/apply/'>School of Video Game Audio</a></p>
        <p>Made with <a className='external-link' href='https://www.fmod.com/'>FMOD</a></p>
        <div className='embeds'>
        <iframe id='demo_reel_video' src="https://www.youtube.com/embed/KHAkyUKpOX4?si=Dm5qSeTetWn2RsNB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    </div>
  )
}
