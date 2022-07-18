import React from "react";

const Button = props => {

    const buttonStyle = {
        margin: "5px", 
        padding: "3px 6px",
        fontSize: '15px'
    };

    return (
        <button 
            style={buttonStyle} 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
};

export default Button;