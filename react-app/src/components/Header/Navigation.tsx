import React, { CSSProperties } from 'react'

function Navigation() {
    return (
        <nav style={{ width: "30%" }}>
            <ul style={navStyle}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

const navStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    listStyle: "none"
}

export default Navigation
