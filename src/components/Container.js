import React from "react";

const Container = (props) => {

    const constainerStyle = {
        margin: props.m,
        fontSize: props.f
    }

    return (
        <div style={constainerStyle}>{props.children}</div>
    )
};

export default Container;