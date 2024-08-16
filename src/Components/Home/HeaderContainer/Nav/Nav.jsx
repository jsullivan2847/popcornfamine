import React from 'react';
import './Nav.css';

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
            icon: "/icons_emojis/matrix.gif"
        },
        {
            name: "Music",
            link: "music",
            icon: null
        }
    ];

    return (
        <nav className='nav-ul'>
            {nav_elements.map((elem) => (
                <button key={elem.link} aria-label={elem.name}>
                    <img src={elem.icon} alt="" width="20px"/>
                    <a href={elem.link}>
                        {elem.name}
                    </a>
                </button>
            ))}
        </nav>
    );
}
