import React from "react"

function Spot(props) {
    let season
    let dollar

    if (props.timeToGo === "Spring") {
        season = "spring"
    } else if (props.timeToGo ==="Summer") {
        season = "summer"
    } else if (props.timeToGo === "Winter") {
        season = "winter"
    } else {
        season = "fall"
    }

    if (props.price <= 500) {
        dollar = "$"
    } else if (props.price < 1000 && props.price > 500) {
        dollar = "$$"
    } else {
        dollar = "$$$"
    }


    return (
        <div className={season}>
            <h1>Place: {props.place}</h1>
            <h2>Price: {dollar} {props.price} </h2>
            <h3>Time To Go: {props.timeToGo}</h3>
        </div>
        
    )
}

export default Spot