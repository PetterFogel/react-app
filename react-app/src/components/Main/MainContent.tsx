import { Route } from 'react-router-dom';
import { useStyles } from '../../styles/MainStyle';
import About from './About';
import Contact from './Contact';
import Homepage from './Homepage';

function MainContent() {
    const classes = useStyles();
    return(
        <main className={classes.rootStyle}>
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

export default MainContent;