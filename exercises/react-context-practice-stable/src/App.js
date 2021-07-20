import React, { Component } from "react"
import Header from "./Header"
import { UserContextConsumer } from "./userContext"

class App extends Component {

    state = {
        inputfield: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <Header />

                <UserContextConsumer>
                    {({ username, changeName }) => (
                        <main>
                            <p>No new notifications for {username}! 🎉</p>
                            <input
                                type="text"
                                name="inputfield"
                                placeholder="insert new name"
                                value={this.state.inputfield}
                                onChange={this.handleChange} />

                            <button onClick={() => changeName(this.state.inputfield)}>Change Username</button>
                        </main>
                    )}
                </UserContextConsumer>

            </div>


        )
    }
}

export default App