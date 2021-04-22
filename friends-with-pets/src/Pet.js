import React from "react"

function Pet(props) {
    return (
        <div className="pet">
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Breed:</strong> {props.breed}</p>
        </div>
    )
}

export default Pet