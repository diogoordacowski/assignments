import React from "react"

function HitItem(props) {
    return (
        <div className="hit-item-widget">
            <h3>{props.target.name}</h3>
            <img src={props.target.image} />
        </div>
    )
}

export default HitItem