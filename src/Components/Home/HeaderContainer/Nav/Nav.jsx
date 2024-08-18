import React from 'react';
import './Nav.css';

export default function Nav() {
    const nav_elements = [
        {
            name: "About",
            link: "about",
            icon: "/icons_emojis/prof_pic.jpg"
        },
        {
            name: "Technology",
            link: "technology",
            icon: "/icons_emojis/matrix.gif"
        },
        {
            name: "Music",
            link: "music",
            icon: '/icons_emojis/mandolin.png'
        }
    ];

    return (
        <nav className='nav-ul'>
            {nav_elements.map((elem) => (
                <button className="nav-elem" key={elem.link} aria-label={elem.name}>
                    <img src={elem.icon} alt="" width="15px"/>
                    <a href={elem.link}>
                        {elem.name}
                    </a>
                </button>
            ))}
        </nav>
    );
}
