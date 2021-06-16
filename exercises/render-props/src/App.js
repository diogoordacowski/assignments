import React from "react"
import Boolean from "./Boolean"
import String from "./String"
import Number from "./Number"
import Array from "./Array"
import ObjectValue from "./ObjectValue"

function App () {
    return (
        <div>
            <Boolean render={ function(isDaytime) {
                return (
                    <h3>
                        <span className="render-prop">{isDaytime ? "Good Morning" : "Good Evening"}</span>, Diogo!
                    </h3>
                )
            }} /> <hr />

            <String render={function(name) {
                return (
                    <h3>
                        Hello there, <span className="render-prop">{name}</span>!
                    </h3>
                )
            }} /> <hr />

            <Number render={function(age) {
                return (
                    <h3>
                        Diogo is <span className="render-prop">{age > 30 ? "old" : "young"}</span>!
                    </h3>
                )
            }} /> <hr />

            <Array render={function(namesList) {
                return (
                    <h3>
                        The coolest of all siblings is <span className="render-prop">{namesList[3]}</span>
                    </h3> 
                )
            } } /> <hr />

            <ObjectValue render={function(profile) {
                return (
                    <h3>
                        <span className="render-prop">{profile.name}</span> is a <span className="render-prop">{profile.age}</span> year old <span className="render-prop">{profile.sex}</span> that loves <span className="render-prop">{profile.favFoods[0]}</span>, and  <span className="render-prop">{profile.favFoods[2]} </span>
                    </h3>
                )
            }} /> <hr />

        </div>
    )
}


export default App