import React, { useState } from 'react';
import "../../styles/Header.css"

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
        console.log(showMenu)
    }

    return (
        <nav>
            <ul 
                className="nav-links"
                style={{
                   right: showMenu ? "0%" : "-50%"
                }}
            >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div 
                className="burger-container"
                onClick={handleClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navigation
