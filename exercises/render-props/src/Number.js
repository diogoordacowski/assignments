import React from "react"

function Number(props) {
    return (
        <div>
            <h2>Number Used In Render Prop Parameter</h2>
            {props.render(36)}
        </div>
    )
}

export default Number