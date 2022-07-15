import React from "react";

const Title = (props) => {

    const titleStyle = {
        fontSize: '30px',
        color: props.color
    }

    return (
        <h1 style={titleStyle}>{props.children}</h1>
    )
}

export default Title;