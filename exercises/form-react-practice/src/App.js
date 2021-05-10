import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName:"",
            isFriendly: true,
            textArea: "Placeholder text",
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        alert(`
            Name: ${this.state.firstName} ${this.state.lastName}\n
            Notes: ${this.state.textArea}\n
            Is Friendly: ${this.state.isFriendly}\n
            Gender: ${this.state.gender}
            Favorite Color: ${this.state.favColor}
        `)
    }

    handleChange(e) {
        const {name, value, checked, type} = e.target //destrcutures the attributes from the element for easier usage and reference in my method

        type === "checkbox" ? this.setState({[name]: checked})  : this.setState({[name]: value})

        /*the " [name] : value " are the key value that we're using to set the state
        this is obtained from the <input> in the JSX portion. It sets the key as the name attribute value, sets the value as the value attribute value */

        /*the " [name]: checked " are the key value that we're using to set this specific 'isFriendly' property in the state. 
         Because there is no "value" attribute for checkbox inputs, the value is the "checked" boolean attribute*/
    
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-container">
                    <h1>1 - &lt;input type="text"&gt;</h1>
                    <input type="text" placeholder="first name" value={this.state.firstName} onChange={this.handleChange} name="firstName" />
                        {/* the 'value' attribute will literally reference what is in the state so that state is the source of truth. This makes this a 'controlled form'. It makes it so that state actually directs what is showing in the input field*/}

                        {/* the 'name' attribute will allow us to use it in the method for change the state, to easily provide the key (property) in the state that needs change. */}
                    <input type="text" placeholder="last name" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                </div>
                
                <div className="input-container">
                    <h1>2 - &lt;textarea&gt;</h1>
                    <textarea value={this.state.textArea} onChange={this.handleChange} name="textArea"/>
                        {/*unlike regular HTML, JSX allows <textarea></textarea> to be a self-closing element like you see currently implemented. This also allows you to add the value with the 'value' property, unlike normal HTML where you would place the value in between the tags. */ }
                </div>

                <div className="input-container">
                    <h1>3 - &lt;input type="checkbox"&gt;</h1>
                    <label>
                        <input type="checkbox" name="isFriendly" checked={this.state.isFriendly} onChange={this.handleChange} />
                        Is Friendly?
                    </label>
                    <h2>checkbox value: <span className="red">{this.state.isFriendly ? "true" : "false"} </span></h2>
                </div>

                <div className="input-container">
                    <h1>4 - &lt;input type="radio"&gt;</h1>
                    <label>
                        <input type="radio" value="male" name="gender" checked={this.state.gender === "male"} onChange={this.handleChange} />
                        Male
                    </label>
                    <label>
                        <input type="radio" value="female" name="gender" checked={this.state.gender === "female"} onChange={this.handleChange} />
                        Female
                    </label>
                    <h2>radio button value: <span className="red">{this.state.gender}</span></h2>
                </div>

                <div className="input-container">
                    <label>Favorite color?</label>
                    <select value={this.state.favColor} onChange={this.handleChange} name="favColor">
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </select>
                    <h2>Favorite Color is: <span className="red">{this.state.favColor}</span></h2>
                </div>
                
                <button>Submit Me!</button>
            </form>

        )
    }
}



export default App 
