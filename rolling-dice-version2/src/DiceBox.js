import React from "react"
import Die from "./Die"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            randomNumbers: [
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1,
                Math.floor(Math.random() * 6) +1
            ]
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        this.setState({
            randomNumbers:this.state.randomNumbers.map(number => Math.floor(Math.random() * 6)+1)
        })
    }

    render() {
        const allMyNumbers = this.state.randomNumbers.map(number => <Die number={number} /> )

        return (
            <div>
                <h1>{allMyNumbers}</h1>
                <button onClick={this.roll}>Roll</button>
            </div>
        )
    }
}

export default DiceBox