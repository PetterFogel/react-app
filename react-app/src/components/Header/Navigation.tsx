import React, { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
import { noDecoration } from '../../css/GeneralStyles';
import "../../css/Header.css"

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
                <Link to="/" style={noDecoration}>
                    <li style={navLinks}>Home</li>
                </Link>
                <Link to="/about" style={noDecoration}>
                    <li style={navLinks}> About</li>
                </Link>
                <Link to="/contact" style={noDecoration}>
                    <li style={navLinks}>Contact</li>
                </Link>
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

const navLinks: CSSProperties = {
    color: "#fff"
}

export default Navigation
