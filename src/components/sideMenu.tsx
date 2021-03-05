import React, { CSSProperties } from "react";

function SideMenu() {
    return(
        <div style={rootStyle}>
            <h3>Home</h3>
            <h3>Services</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
    );
}

const rootStyle: CSSProperties = {
    position: "fixed",
    right: "-48%",
    top: "10vh",
    width: "50%",
    height: "90vh",
    color: "#fff",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}

export default SideMenu;