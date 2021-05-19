import React, { Component } from "react"
import ColorComponent from "./ColorComponent"
import axios from "axios"

class App extends Component {
    constructor() {
        super()
        this.state = {
            color: []
        }
        this.changeColor = this.changeColor.bind(this)
    }

    componentDidMount() {
        axios.get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
            .then(response => {
                this.setState({
                    color: response.data.new_color
                })
                console.log(response.data)
            })
    }

    changeColor() {
        axios.get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
            .then(response => {
                this.setState({
                    color: response.data.new_color
                })
                console.log(response.data)
            })
    }

    render() {
        console.log(this.state.color)
        return (
            <div>
                <ColorComponent newColor={this.state.color} />
                <button onClick={this.changeColor}>Change Color</button>
            </div>

        )
    }
}

export default App