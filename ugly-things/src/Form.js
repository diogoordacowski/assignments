import React, { Component } from "react"

class Form extends Component {

    state = {
        title: " ",
        imgURL: " ",
        description: " ",
        uglyThings: []
    }

   
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
 


    render() {
        return (
            <form name="thingsForm">
                <input onChange={this.handleChange} name="title" type="text" placeholder="title" />
                <input onChange={this.handleChange} name="imgURL" type="text" placeholder="imgURL" />
                <input onChange={this.handleChange} name="description" type="text" placeholder="description" />
                <button>Add Ugly Thing</button>
            </form>
        )
    }
}


export default Form