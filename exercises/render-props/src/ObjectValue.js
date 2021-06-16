import React from "react"

function ObjectValue(props) {
    
    const profileObject = {
        name:"Diogo", 
        age: 36, 
        sex: "male", 
        favFoods: ["Sushi","Picanha", "Fraldinha"]
    }

    return (
        <div>
           <h2>Object Used In Render Prop Parameter</h2>
            {props.render(profileObject)}
        </div>
    )
}

export default ObjectValue