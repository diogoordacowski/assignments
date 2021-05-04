import React from "react"

function Button(props) {
    return (   
        <div className="button-widget">
            <button id={props.id}></button>
            <h3>{props.name}</h3>
        </div>

    )
}

export default Button