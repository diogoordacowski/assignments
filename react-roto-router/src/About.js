import React from "react"
import peopleObject from "./peopleObject"
import { useRouteMatch, Link, Switch, Route, useHistory  } from "react-router-dom"
import PersonDetails from "./PersonDetails.js"


function About() {

    const { url, path } = useRouteMatch()
    const history = useHistory()
    console.log(history)

    const peopleArr = peopleObject.map(person => (
        <h3 key={person._id}><Link to={`${url}/${person._id}`}> {person.name}</Link> - {person.age}</h3>
    ))

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitting...")

        setTimeout( () => {
            history.push("/authenticated")
        }, 3000)
    }

    return (
        <div>
            <h1>About Page Is Loaded</h1>
           
            {peopleArr}

            <Switch>
                <Route path={`${path}/:personId`}>
                    <PersonDetails />
                </Route>
            </Switch>

            <h2> Log in Below </h2>
            <p>👇🏽 This form below doesn't actually work; it is only used for training purposes for the button bellow to test useHistory</p>
            <form onSubmit={handleSubmit}>
                <label >Username </label>
                <input type="text"></input> <br />
                <label >Password </label>
                <input type="text"></input> <br />
                <button>Sign In</button>
            </form>
            

        </div>

    )
}

export default About