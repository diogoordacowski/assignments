import React from "react"

function Array(props) {
    return (
        <div>
            <h2>Array Used In Render Prop Parameter</h2>
            {props.render(["Diogo", "Iago", "Mariana", "Alicia"])}
        </div>

    )
}

export default Array