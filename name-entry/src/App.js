import React from "react"
import NameEntry from "./NameEntry"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            placeholder: "Enter Full Name",
            fullName: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        const newName = this.state.fullName

        if (newName != "") {

            this.setState(prevState => {
                return {
                    fullName: "",
                    names: [...prevState.names, newName]
                }
            })
        }

    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const allNames = this.state.names.map((name,id) => <NameEntry key={id} name={name} />)

        return (
            <div className="master-container">
                
                <form onSubmit={this.handleSubmit} id="the-form">
                    <h1>Name Entry Form</h1>
                    <input placeholder={this.state.placeholder} type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                    <h2>fullName: {this.state.fullName}</h2>
                    <button>Submit Name</button>
                </form>

                <h1 className="master-h1">Names Records</h1>
                <ol>
                    {allNames}
                </ol>

            </div>
        )
    }
}

export default App