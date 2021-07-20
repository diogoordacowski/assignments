import React, { Component } from "react"

const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component {
    state = {
        username: "Diogo (Default)"
    }

    handleSubmit = (newname) => {
        this.setState({
            username: newname
        })
    }

    render() {
        const {username} = this.state

        return (
            <Provider value={{username, changeName: this.handleSubmit }}>
                {this.props.children}
            </Provider>
        )

    }
}

export { UserContextProvider, Consumer as UserContextConsumer }