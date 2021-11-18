import React from "react"
import { useParams } from "react-router"
import peopleObject from "./peopleObject"

function PersonDetails() {

    const {personId} = useParams()
    console.log(personId)

    const thisPerson = peopleObject.find(person => person._id === personId)

    return (
        <div>
            <h1>{thisPerson.name} Details</h1>
            <h2>Age: {thisPerson.age}</h2>
            <p>{thisPerson.description}</p>
        </div>
    )
}

export default PersonDetails