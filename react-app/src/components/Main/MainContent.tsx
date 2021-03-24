import React, { CSSProperties } from 'react';

function MainContent() {
    return(
        <main style={rootStyle}>
            <h1>MainContent</h1>
        </main>
    );
}

const rootStyle: CSSProperties = {
    marginTop: "10vh",
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default MainContent;