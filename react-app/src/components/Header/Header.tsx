import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'

function Header() {
    return (
        <header style={rootStyle}>
            <Link to="/" style={noDecoration}>
                <h2 style={headerTitle}>React App</h2>
            </Link>
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

const noDecoration: CSSProperties = {
    textDecoration: "none"
}

const headerTitle: CSSProperties = {
    fontWeight: "normal",
    color: "#fff"
}

export default Header
