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
    color: "#f1f1f1",
    letterSpacing: "0.125rem"
}

export default SideMenu;