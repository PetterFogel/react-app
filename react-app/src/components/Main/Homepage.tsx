import { subTitle, title } from '../../styles/GeneralStyles';
import { useStyles } from '../../styles/HomepageStyle';

function Homepage() {
    const classes = useStyles();
    return (
        <main className={classes.rootStyle}>
            <div 
                className={classes.introDiv}
                >
                <h2 className={classes.homeTitle}>Art for your need</h2>
                <p className={classes.homeSubTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex officiis sit libero doloribus explicabo unde quasi nulla sapiente possimus fuga.</p>
                <button className={classes.homeBtn}>Find out more</button>
            </div>
            <div className={classes.imageholder}>
                <div className={classes.imgStyle}></div>
            </div>
        </main>
    )
}

export default Homepage;