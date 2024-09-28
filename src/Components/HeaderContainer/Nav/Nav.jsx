import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const nav_elements = [
        {
            name: "About",
            link: "/about",
            icon: "/icons_emojis/prof_pic.jpg"
        },
        {
            name: "Technology",
            link: "/technology",
            icon: "/icons_emojis/matrix.gif"
        },
        {
            name: "Music",
            link: "/music",
            icon: '/icons_emojis/mandolin.png'
        }
    ];

    return (
        <nav className='nav-ul'>
            {nav_elements.map((elem,index) => (
                <Link className="nav-elem" to={elem.link} key={index} aria-label={elem.name}>
                    <img src={elem.icon} alt="" width="15px"/>
                    <p>{elem.name}</p>
                </Link>
            ))}
        </nav>
    );
}
