import React from "react"
import ColorSquare from "./ColorSquare"

class Square extends React.Component {
    constructor() {
        super()
        this.state = [ {id:9, colorName:"white"}, {id:10, colorName:"black"}, {id:11, colorName:"red"}, {id:12, colorName:"blue"}]
    }

    render() {
        const allColors = this.state.map(color => <ColorSquare color={color.colorName} id={color.id} />)

        return (
            <div className= "square-container">
                {allColors}
            </div>
        )
    }
}

export default Square




