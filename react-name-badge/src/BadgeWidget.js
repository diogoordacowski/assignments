import React from "react"

function BadgeWidget(props) {
    return (
        <div className="badge-card-container">
            { props.id % 2 === 0
                ? <div className="badge-header" style={{ backgroundColor: "#84A59D" }}>Badge:</div>
                : <div className="badge-header" style={{ backgroundColor: "#F28482" }}>Badge:</div>
            }

            <div className="badge-widget-container">
                <h2>Name: {props.badge.firstName} {props.badge.lastName}</h2>
                <h2>Phone: {props.badge.phone} </h2>
                <h2>Place of Birth: {props.badge.placeOfBirth}</h2>
                <h2>Favorite Food: {props.badge.favoriteFood}</h2>
                <h2>Email: {props.badge.email}</h2>
                <p>{props.badge.extraDetails}</p>

            </div>
        </div>


    )
}

export default BadgeWidget