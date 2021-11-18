import React from "react"
import peopleObject from "./peopleObject"
import { useRouteMatch, Link, Switch, Route  } from "react-router-dom"
import PersonDetails from "./PersonDetails.js"

function About() {

    const { url, path } = useRouteMatch()

    const peopleArr = peopleObject.map(person => (
        <h3 key={person._id}><Link to={`${url}/${person._id}`}> {person.name}</Link> - {person.age}</h3>
    ))

    return (
        <div>
            <h1>About Page Is Loaded</h1>
           
            {peopleArr}

            <Switch>
                <Route path={`${path}/:personId`}>
                    <PersonDetails />
                </Route>
            </Switch>

        </div>

    )
}

export default About