import axios from "axios"
import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()
const baseUrl = "https://api.vschool.io/diogo/thing"

class ThingsContextProvider extends Component {

    state = {
        title: " ",
        imgUrl: " ",
        description: " ",
        uglyThings: []
    }

    componentDidMount() {
        axios.get(baseUrl)
            .then(res => this.setState({
                uglyThings: res.data
            }))
            .catch(err => console.log(err))

            console.log(`component did mount`)
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    submitThing = (e) => {
        e.preventDefault()

        axios.post(baseUrl, {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
            })
            .then( res => {
                this.setState(prevState => {
                    return {
                        uglyThings: [...prevState.uglyThings, res.data ]
                    }
                })
            })
            .catch(err => (console.log(err)))
    }

    render() {
       
        return (
            <Provider value={{ handleChange: this.handleChange, submitThing: this.submitThing, uglyThings: this.state.uglyThings }} >
                {this.props.children}
            </Provider>
        )
    }

}


export { ThingsContextProvider, Consumer as ThingsContextConsumer }