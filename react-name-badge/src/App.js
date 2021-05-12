import React from "react"
import BadgeWidget from "./BadgeWidget"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            extraDetails: "",
            allNameBadges: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        e.preventDefault()

        const newBadgeEntry = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favoriteFood: this.state.favoriteFood,
            extraDetails: this.state.extraDetails
        }

        this.setState( prevState => {
            return {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                extraDetails: "",
                allNameBadges: [...prevState.allNameBadges, newBadgeEntry]
            }
        })
    }

    render() {

        const allBadges = this.state.allNameBadges.map((badge, id) => <BadgeWidget key={id} badge={badge} id={id} />)

        return (
            <div className="master-container">
                <form className="badge-form-container" onSubmit={this.handleSubmit}>
                    <input type="text" minLength="3" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />

                    <input type="text" minLength="3" placeholder="Last Name" name="lastName" value={this.state.lastName}  onChange={this.handleChange} required/>

                    <input type="text" minLength="3" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required/>

                    <input type="text" minLength="3" placeholder="Place of Birth" name="placeOfBirth" value={this.state.placeOfBirth} onChange={this.handleChange} required/>

                    <input type="number" minLength="3" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        {/* PHONE: Write validation code to make sure the phone number field only has numbers (no dashes or special characters, must look like this 9757653323  */}
                    <input type="text" minLength="3" placeholder="Favorite Food" name="favoriteFood" value={this.state.favoriteFood} onChange={this.handleChange} required/>

                    <textarea minLength="3" placeholder="Tell Us About Yourself" name="extraDetails" value={this.state.extraDetails} onChange={this.handleChange} required/>

                    <button>Submit</button>

                </form>

                {/* uncomment this to test state live by painting it on the DOM as you type <p> Testing state: {this.state.firstName} {this.state.lastName} {this.state.email} {this.state.placeOfBirth} {this.state.phone} {this.state.favoriteFood} {this.state.extraDetails} </p> */}

                {allBadges}
                
            </div>
        )
    }
}

export default App