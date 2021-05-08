import React from "react"
import DiceBox from "./DiceBox"

class App extends React.Component {
    constructor() {
        super()

    }

    render() {
        return(
            <div>
                <h1>App worked</h1>
                <DiceBox />
            </div>

        )
    }
}


export default App


