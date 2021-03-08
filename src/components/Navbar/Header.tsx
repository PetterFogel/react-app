import React, { Component, CSSProperties } from 'react';
import BurgerMenu from './burgerMenu';
import SideMenu from './sideMenu';

interface Props {
    value?: boolean
}
interface State {
    isMenuOpen: boolean
}

class Header extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((state) => ({
            isMenuOpen: !state.isMenuOpen
        }));
    }

    render() {
        return(
            <header style={rootStyle}>
                <h2 style={headerTitle}>React App</h2>
                <nav 
                    onClick={this.handleClick} 
                    style={{ cursor: "pointer" }}
                    >
                    <BurgerMenu value={this.state.isMenuOpen}/>
                </nav>
                <div
                    style={{...sideMenuStyle,
                        right: this.state.isMenuOpen ? "0%" : "-50%"
                    }}
                    >
                    <SideMenu/>
                </div>
            </header>
        );
    }
}

const rootStyle: CSSProperties = {
    position: "fixed",
    left: 0,
    top: 0,
    right: 0,
    background: "#111",
    height: "10vh",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "0rem 2rem"
}

const headerTitle: CSSProperties = {
    color: "#f1f1f1",
    letterSpacing: "2px"
}

const sideMenuStyle: CSSProperties = {
    position: "fixed",
    top: "10vh",
    width: "50%",
    height: "90vh",
    color: "#fff",
    background: "#111",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 500ms ease-in"
}

export default Header;