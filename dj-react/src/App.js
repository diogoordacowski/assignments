import React from "react"
import Square from "./Square"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        // insert various methods bindings
        this.smallTime = this.smallTime.bind(this)
        this.party = this.party.bind(this)
        this.pro1 = this.pro1.bind(this)
        this.pro2 = this.pro2.bind(this)
        this.customOne = this.customOne.bind(this)
        this.customTwo = this.customTwo.bind(this)
        this.customThree = this.customThree.bind(this)
        this.customFour = this.customFour.bind(this)
    }

    smallTime() {
        if (this.state.colors[0] === "white") {
            this.setState({
                colors: ["black", "black", "black", "black"]
            })

        } else {
            this.setState({
                colors: ["white", "white", "white", "white"]
            })
        }
    }

    party() {
        this.setState(prevState => {
            return {
                colors:["purple", "purple", prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    pro1() {
       this.setState(prevState => {
           return {
               colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
           }
       })
    }

    pro2() {
        this.setState(prevState=> {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }

    customOne() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map( (color,i) => {
                    if (i === 0 || i === 3) {
                        return "pink"
                    } else {
                        return prevState.colors[i]
                    }
                })
            }
        })
    }

    customTwo() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map( (color, i) => {
                    if (i === 1 || i === 2) {
                        return "red"
                    } else {
                        return prevState.colors[i]
                    }
                })
            }
        })
    }

    customThree() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map( (color, i) => {
                    if (i === 1 || i === 2) {
                        return "cornflowerblue"
                    } else {
                        return prevState.colors[i]
                    }
                })
            }
        })
    }

    customFour() {
        this.setState(prevState => {
            return {
                colors: prevState.colors.map( (color, i) => {
                    if (i === 1 || i === 2 || i === 3) {
                        return "orange"
                    } else {
                        return prevState.colors[i]
                    }
                })
            }
        })
        
        const sound = document.getElementById("audio")
        sound.play()
        
    }

    render() {
        const allColors = this.state.colors.map(color => <Square color={color} />)

        return (
            <div className="dj-deck-container">
                <div className="button-container">
                    <button onClick={this.smallTime}>SmallTime DJ</button>
                    <button onClick={this.party}>Party DJ</button>
                    <button onClick={this.pro1}>Pro DJ 1</button>
                    <button onClick={this.pro2}>Pro DJ 2</button>
                </div>

                <div className="square-container">
                    {allColors}
                </div>

                <div className="button-container">
                    <button onClick={this.customOne}>BigTime DJ 1</button>
                    <button onClick={this.customTwo}>BigTime DJ 2</button>
                    <button onClick={this.customThree}>BigTime DJ 3</button>
                    <button onClick={this.customFour}>BigTime DJ 4</button>
                </div>
                <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autostart="false" ></audio>
            </div>
        )
    }
}

export default App