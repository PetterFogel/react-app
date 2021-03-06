import React, { Component, CSSProperties } from 'react';
import SideMenu from './sideMenu';

interface Props {}
interface State {
    isMenuOpen: boolean
}


class Header extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            isMenuOpen: true
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
                <div style={burgerMenu} onClick={this.handleClick}>
                    <div style={barStyle}></div>
                    <div style={barStyle}></div>
                    <div style={barStyle}></div>
                </div>
                <div
                    style={{...sideMenuStyle,
                        right: this.state.isMenuOpen ? "0%" : "-50%"
                    }}
                    >
                    <SideMenu />
                </div>
            </header>
        );
    }
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
    color: "#fff",
    letterSpacing: "2px"
}

const burgerMenu: CSSProperties = {
    cursor: "pointer"
}

const barStyle: CSSProperties = {
    width: "1.5rem",
    height: "3px",
    background: "#f1f1f1",
    margin: "0.3rem",
    transition: "all 0.3s ease",
    backgroundColor: "#fff"
}

export default Header;