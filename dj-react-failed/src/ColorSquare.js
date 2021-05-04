import React from "react"

function ColorSquare(props) {
    return(
        <div className="individual-square" id={props.id}>{props.color}</div>
    )
}

export default ColorSquare