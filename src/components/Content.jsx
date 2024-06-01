import React from "react";

function Content(props) {
    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {props.children}
            </div>
        </main>
)
}

export default Content;