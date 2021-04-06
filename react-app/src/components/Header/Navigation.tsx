import { useState } from 'react';
import { Link } from 'react-router-dom';
import { noDecoration } from '../../styles/GeneralStyles';
import { useStyles } from '../../styles/HeaderStyle';

function Navigation() {
    const classes = useStyles();
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const handleMenu = () => {
        setShowMenu(false)
    }

    return (
        <nav className={classes.navStyle}>
            <ul 
                className={classes.navLinksStyle}
                style={{
                    right: showMenu ? "0%" : "-100%"
                }}
            >
                <Link 
                    to="/" style={noDecoration}
                    onClick={handleMenu}
                >
                    <li className={classes.liStyle}>Home</li>
                </Link>
                <Link 
                    to="/about" style={noDecoration}
                    onClick={handleMenu}
                >
                    <li className={classes.liStyle}> About</li>
                </Link>
                <Link 
                    to="/contact" style={noDecoration}
                    onClick={handleMenu}
                    >
                    <li className={classes.liStyle}>Contact</li>
                </Link>
            </ul>
            <div 
                className={classes.burgerContainer}
                onClick={handleClick}>
                <div className={classes.burgerBars}></div>
                <div className={classes.burgerBars}></div>
            </div>
        </nav>
    )
}

export default Navigation;