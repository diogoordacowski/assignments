import React from "react"

function String(props) {
    return (
        <div>
            <h2>String Used In Render Prop Parameter</h2>
            {props.render("Diogo")}
        </div>
    )
}

export default String