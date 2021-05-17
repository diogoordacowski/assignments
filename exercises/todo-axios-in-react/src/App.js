import React from "react"
import TodoList from "./TodoList"

class App extends React.Component {
    constructor() {
        super()
        this.state= {
            stateTest: "Is Working"
        }
    }

    render() {
        return (
            <div>
                <h1>Testing State: {this.state.stateTest}</h1>
                <TodoList />
            </div>
        )
    }
}

export default App