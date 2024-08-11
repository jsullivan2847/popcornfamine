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
            {nav_elements.map((elem) => {
                return <button>
                    <a href={elem.link}>
                        {elem.name}
                    </a>
                </button>
            })}
        </nav>
    )
}
