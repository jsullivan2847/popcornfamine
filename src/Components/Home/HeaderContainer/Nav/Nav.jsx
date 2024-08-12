import React from 'react'
import './Nav.css'

export default function Nav() {
    const nav_elements = [
        {
            name: "About",
            link: "about",
            icon: null
        },
        {
            name: "Technology",
            link: "technology",
            icon: null
        },
        {
            name: "Music",
            link: "music",
            icon: null

        }
    ]
    return (
        <nav className='nav-ul'>
            {nav_elements.map((elem,index) => {
                return <button key={index}>
                    <a href={elem.link} key={index}>
                        {elem.name}
                    </a>
                </button>
            })}
        </nav>
    )
}
