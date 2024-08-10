import React from 'react'
import './Nav.css'

export default function Nav() {
    const nav_elements = [
        {
            name:"About",
            link:"link",
            icon: null
        },
        {
            name: "Blog",
            link: "link",
            icon: null
        },
        {
            name: "Portfolio",
            link: "link",
            icon: null
        }
    ]
  return (
    <nav>
        <ul>
            {nav_elements.map((elem)=> {
                return <li>
                    <a href={elem.link}>
                        {elem.name}
                    </a>
                </li>
            })}
        </ul>
    </nav>
  )
}
