import React, { CSSProperties } from 'react';

function Header() {
    return(
        <header style={rootStyle}>
            <h2 style={headerTitle}>React App</h2>
            <div style={burgerMenu}>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
                <div style={barStyle}></div>
            </div>
        </header>
    );
}

const rootStyle: CSSProperties = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    background: "#111",
    height: "10vh",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "0rem 2rem"
}

const headerTitle: CSSProperties = {
    color: "#fff",
    letterSpacing: "2px"
}

const burgerMenu: CSSProperties = {
    cursor: "pointer"
}

const barStyle: CSSProperties = {
    width: "1.5rem",
    height: "3px",
    background: "#f1f1f1",
    margin: "0.3rem",
    transition: "all 0.3s ease",
    backgroundColor: "#fff"
}

export default Header;