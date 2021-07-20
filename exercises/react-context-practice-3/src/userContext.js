import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
    state = {
        username: " (I don't know your name yet)"
    }

    changeName = (newname) => {
        this.setState({
            username: newname
        })
    }

    render() {
        const {username} = this.state
        return (
            <Provider value={{username, changeName: this.changeName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}