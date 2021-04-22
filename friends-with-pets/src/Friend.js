import React from "react"
import Pet from "./Pet"

function Friend(props) {
    console.log(props.pets)

    const allPets = props.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)


    return (
        <div className="friend-card">
            <div className="friend-container" >
                <h1>Name: {props.name}</h1>
                <h2>Age: {props.age}</h2>
            </div>
            <h3>Pets</h3>
            <div className="pet-container">
                {allPets}
            </div>
        </div>
    )
}

export default Friend