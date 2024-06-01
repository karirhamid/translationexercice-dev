import React from "react";

function Container(props) {
    return (
        <div className="min-h-full">
            {props.children}
        </div>
    )
}

export default Container;