import React, { CSSProperties } from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <header style={rootStyle}>
            <h2 style={{ fontWeight: "normal" }}>React App</h2>
            <Navigation/>
        </header>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem 2rem",
    height: "10vh",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    color: "#fff",
    background: "#222"
}

export default Header
