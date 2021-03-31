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
            <h4 style={cartStyle}>Shopping Cart</h4>
        </header>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem 2rem",
    height: "7vh",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    borderBottom: "1px solid #222"
    // background: "#222"
}

const noDecoration: CSSProperties = {
    textDecoration: "none"
}

const headerTitle: CSSProperties = {
    fontWeight: "normal",
    color: "#222"
}

const cartStyle: CSSProperties = {
    fontWeight: "normal",
    background: "#333",
    color: "#fff",
    padding: "0.4rem 1rem"
}

export default Header
