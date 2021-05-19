import React from "react"

function ColorComponent(props) {
    let randomColor = "#" + props.newColor

    return (
        <div className="randomcolor" style={{backgroundColor:randomColor}}>
           
        </div>
    )
}

export default ColorComponent

