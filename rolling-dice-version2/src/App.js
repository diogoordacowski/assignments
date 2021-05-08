import React from "react"
import Die from "./Die"

class App extends React.Component {
    constructor() {
        super()
        this.state= {
            num1:0,
            num2:0,
            num3:0,
            num4:0,
            num5:0
        }

        this.randomizer = this.randomizer.bind(this)
    }

    randomizer() {
        return Math.floor(Math.random() * 6) + 1
    }

    render() {
        const allRandomDice = this.state.map(([number, value]) => <Die assignedNum={this.randomizer} /> )

        return(
            {allRandomDice}
        )
    }
}

export default App