import React, { CSSProperties } from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <header style={rootStyle}>
            <h2>Test</h2>
            <Navigation/>
        </header>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem 2rem",
    height: "10vh"
}

export default Header
