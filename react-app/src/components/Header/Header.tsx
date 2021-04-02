import { Link } from 'react-router-dom'
import { noDecoration } from '../../css/GeneralStyles';
import { useStyles } from '../../css/HeaderStyle';
import Navigation from './Navigation'

function Header() {
    const classes = useStyles();
    return (
        <header className={classes.rootStyle}>
            <Link to="/" style={noDecoration}>
                <h2 className={classes.headerLogo}>React App</h2>
            </Link>
            <Navigation/>
            <h4 className={classes.cartStyle}>Shopping Cart</h4>
        </header>
    )
}

export default Header