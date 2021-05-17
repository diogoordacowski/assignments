import React, {Component} from "react"
import HitList from "./HitList"

class App extends Component {
    constructor() {
        super()
        this.state={
            testing:"is working"
        }
    }

    render() {
        return(
            <div>
                <HitList />
            </div>
        )
    }
}

export default App