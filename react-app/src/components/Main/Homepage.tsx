import React, { CSSProperties } from 'react'
import { subTitle, title } from '../../css/GeneralStyles'

function Homepage() {
    return (
        <main style={rootStyle}>
            <div>
                <h2 style={title}>Homepage</h2>
                <p style={subTitle}>test</p>
            </div>
            <div>
                <p style={subTitle}>image</p>
            </div>
        </main>
    )
}

const rootStyle: CSSProperties = {
    width: "100%",
    height: "60vh",
    background: "#c1e1ec",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
}

export default Homepage