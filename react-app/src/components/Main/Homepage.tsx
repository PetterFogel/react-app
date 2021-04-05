import { flexCenter, subTitle, title } from '../../css/GeneralStyles';
import { useStyles } from '../../css/HomepageStyle';

function Homepage() {
    const classes = useStyles();
    return (
        <main className={classes.rootStyle}>
            <div 
                className={classes.introDiv}
                >
                <h2 style={title}>Paintings</h2>
                <p style={subTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, labore.</p>
            </div>
            <div className={classes.imageholder}>
                <div className={classes.imgStyle}></div>
            </div>
        </main>
    )
}

export default Homepage;