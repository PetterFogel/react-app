import React, { CSSProperties } from "react";

interface Props {
    value: boolean;
}

function BurgerMenu(props: Props) {
    console.log(props.value)

    return(
        <div>
            <div 
            style={{...barStyle, 
                transform: props.value ? "rotate(-45deg) translate(-0.3rem, 0.4rem)" : "rotate(0deg) translate(0rem)"
            }}>
        </div>
        <div 
            style={{...barStyle, 
                opacity: props.value ? "0" : "1"
            }}>
        </div>
        <div 
            style={{...barStyle, 
                transform: props.value ? "rotate(45deg) translate(-0.3rem, -0.4rem)" : "rotate(0deg) translate(0rem)"
            }}>
        </div>
    </div>
    );
}

const barStyle: CSSProperties = {
    width: "2rem",
    height: "0.2rem",
    borderRadius: "0.1rem",
    background: "#f1f1f1",
    margin: "0.3rem",
    transition: "all 0.3s ease"
}

export default BurgerMenu;