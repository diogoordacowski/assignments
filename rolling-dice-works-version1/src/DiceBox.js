import React from "react"

/* let randomNums =  */

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            diceNums: [
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1
            ]
        }

        this.randomNumbers = this.randomNumbers.bind(this)

    }

    randomNumbers() {
        this.setState({
            diceNums: this.state.diceNums.map(number => Math.floor(Math.random() * 6) +1)
        })
    }

    render() {
      
        return(
            <div>
                <h1>{this.state.diceNums}</h1>
                <button onClick={this.randomNumbers}>Randomize</button>
            </div>
        )
    }
}

export default DiceBox






