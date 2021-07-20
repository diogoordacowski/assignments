import React, { Component } from "react"
import Header from "./Header"
import { UserContextConsumer } from "./userContext"

class App extends Component {
    state = {
        nameprovided: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState( { [name]: value })
    }

    render() {
        return (
            <div>
                <Header />

                <UserContextConsumer>
                    {({ username, changeName }) => (
                        <main>
                            <p>No New Notifications for {username}! 🎉</p>
                            <input 
                                type="text"
                                name="nameprovided"
                                placeholder = "type new name"
                                value = {this.state.nameprovided}
                                onChange = {this.handleChange}
                            />

                            <button onClick={() => changeName(this.state.nameprovided)}>Change Name</button>

                        </main>
                    )}

                </UserContextConsumer>
            </div>
        )
    }
}

export default App
