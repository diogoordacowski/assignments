import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseIntolerant:false
            
        }

        //some binding happens here
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

    }

    handleChange(e) {
        const {type, value, name, checked} = e.target

        type === "checkbox" ? this.setState({[name]:checked}) : this.setState({[name]: value})

    }

    render() {
        return (
        <main>
            <form onSubmit={this.handleSubmit}>
                <h1>Travel Form</h1>
                <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} name="firstName"/>
                <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} name="lastName"/>
                <br />
                <input type="number" placeholder="Age" value={this.state.age} onChange={this.handleChange} name="age"/>
                <label>
                    <input type="radio" name="gender" onChange={this.handleChange} value="male" />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" onChange={this.handleChange} value="female" />
                    Female
                </label>
                <br />
                <select name="destination" onChange={this.handleChange}>
                    <option value="Itacare">Itacare - BA</option>
                    <option value="Florianopolis">Florianopolis - SC</option>
                    <option value="Barra">Barra - RJ</option>
                </select>
                <br />

                <label>
                    <input type="checkbox" name="isVegan" checked={this.state.isVegan} onChange={this.handleChange}/>
                    Vegan
                </label>
                <label>
                    <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange}/>
                    Kosher
                </label>
                <label>
                    <input type="checkbox" name="isLactoseIntolerant" checked={this.state.isLactoseIntolerant} onChange={this.handleChange}/>
                    Lactose Intolerant
                </label>
                

                <br />
                <div className="submit-container">
                    <button>Submit</button>
                </div>
              
            </form>

            <div className="summary-container">
                <h1>Entered Information</h1>
                <h3>Your Name: <span className="red"> {this.state.firstName} {this.state.lastName}</span></h3>
                <h3>Your Age: <span className="red"> {this.state.age}</span></h3>
                <h3>Your Gender: <span className="red">{this.state.gender}</span></h3>
                <h3>Your Destination: <span className="red">{this.state.destination}</span></h3>
                <h3>Your Dietary Restrictions: </h3>
                <ul>
                    <li>Vegan<span className="red"> {this.state.isVegan ? "true" : "false"}</span></li>
                    <li>Kosher<span className="red"> {this.state.isKosher ? "true" : "false"}</span></li>
                    <li>Lactose Intolerant<span className="red"> {this.state.isLactoseIntolerant ? "true" : "false"}</span></li>
                </ul>
            </div>

        </main>
        )
    }
}

export default App