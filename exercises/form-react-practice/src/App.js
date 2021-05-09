import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName:"",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target //destrcutures the attributes from the element for easier usage and reference in my method

        this.setState({
            // key value
            [name]: value // this is optained from the <input> in the JSX portion. It sets the key as the name attribute value, sets the value as the value attribute value
        })
    }


    render() {
        return (
            <form>
                <input placeholder="first name" value={this.state.firstName} onChange={this.handleChange} name="firstName" />
                    {/* the 'value' attribute will literally reference what is in the state so that state is the source of truth. This makes this a 'controlled form'. It makes it so that state actually directs what is showing in the input field*/}
                    {/* the 'name' attribute will allow us to use it in the method for change the state, to easily provide the key (property) in the state that needs change. */}
                <input placeholder="last name" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>

        )
    }
}



export default App 
