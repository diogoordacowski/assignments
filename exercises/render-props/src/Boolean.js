import React from "react"

function Boolean(props) {
    return (
        <div>
            <h2>Boolean Used In Render Prop Parameter</h2>
            {props.render(true)}
        </div>
    )
}

export default Boolean