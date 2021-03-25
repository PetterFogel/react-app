import React, { CSSProperties } from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Homepage from './Homepage';

function MainContent() {
    return(
        <main style={rootStyle}>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
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