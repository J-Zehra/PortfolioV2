import React, { useState } from 'react'

export const NavLinks = ({ className, navLinks}) => {
    
    const [activeNav, setActiveNav] = useState(0);
    
    return (
        <nav className={className}>
            {navLinks.map((nav, index) => {
                return(
                    <a 
                        key={index}
                        href={nav.src}
                        className={activeNav === index ? "active" : ""}
                        onClick={() => {setActiveNav(index)}}
                    >
                        {nav.label}
                    </a>
                )
            })}
        </nav>
    )
}
