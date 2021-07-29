import axios from "axios"
import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()
const baseUrl = "https://api.vschool.io/diogo/thing/"

class ThingsContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            title: " ",
            imgUrl: " ",
            description: " ",
            uglyThings: []
        }

    }

    deleteThing = (e) => {
        const uglyThings = this.state.uglyThings
        const { id } = e.target
        console.log(`${id} was clicked from deleteThing()`)

        let deleteThingIndex = uglyThings.findIndex((thing) => (
            thing._id === id
        ))

        console.log(deleteThingIndex)

        axios.delete(baseUrl + id,)
            .then(res => {
                console.log(res.data, id)
                uglyThings.splice(deleteThingIndex, 1)
                this.setState({
                    uglyThings: uglyThings
                })
            })
            .catch(err => console.log(err))
    }

    saveThing = (id,title, imgUrl, description) => {
      
        const updates = {
            title: title,
            imgUrl:imgUrl,
            description: description
        }
        
        axios.put(baseUrl + id, updates)
            .then(res => (console.log(res)))
            .catch(err => (console.log(err))) 

        const savedUglyThings = this.state.uglyThings.map( thing => {
            if (thing._id === id) {
                thing.title = title
                thing.imgUrl = imgUrl
                thing.description = description

                return thing
            } else {
               return thing
            }
        })

        this.setState({
            uglyThings: savedUglyThings
        })
    }

    componentDidMount = () => {
        axios.get(baseUrl)
            .then(res => this.setState({
                uglyThings: res.data
            }))
            .catch(err => console.log(err))

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
            .then(res => {
                this.setState(prevState => {
                    return {
                        uglyThings: [...prevState.uglyThings, res.data]
                    }
                })
            })
            .catch(err => (console.log(err)))
    }


    render() {

        return (
            <Provider value={{
                handleChange: this.handleChange,
                submitThing: this.submitThing,
                deleteThing: this.deleteThing,
                saveThing: this.saveThing,
                uglyThings: this.state.uglyThings
            }} >
                {this.props.children}
            </Provider>
        )
    }

}


export { ThingsContextProvider, Consumer as ThingsContextConsumer }