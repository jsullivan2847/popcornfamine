import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const nav_elements = [
        {
            name: "About",
            slug: "/about",
            icon: "prof_pic.jpg"
        },
        {
            name: "Technology",
            slug: "/technology",
            icon: "/icons_emojis/matrix.gif"
        },
        {
            name: "Music",
            slug: "/music",
            icon: '/icons_emojis/mandolin.png'
        }
    ];

    return (
        <nav className='nav-ul'>
            {nav_elements.map((elem,index) => (
                <Link className="nav-elem" to={elem.slug} key={index} aria-label={elem.name}>
                    <img src={elem.icon} alt="" width="15px"/>
                    <p>{elem.name}</p>
                </Link>
            ))}
        </nav>
    );
}
