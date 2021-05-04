import React from "react"
import Button from "./Button"
import Square from "./Square"

const buttonsArr = [
    {id:1, name:"Smalltime DJ"},{id:2, name:"Party DJ"}, {id:3, name:"Pro DJ"}, {id:4, name:"BigTime DJ"}, {id:5, name:"Test 1"}, {id:6, name:"Test 2"},{id:7, name:"Test 3"},{id:8, name:"Test 4"}
]



function App() {
    const leftButtons = buttonsArr.slice(0,4).map(button => <Button name={button.name} id={button.id}/>)

    const rightButtons = buttonsArr.slice(4).map(button => <Button name={button.name} id={button.id}/>)  

    return (
        <div className="dj-deck-container">
            
            <div className="button-container-left">
                <div className="button-container">
                    {leftButtons}
                </div>
            </div>

            <Square />

            <div className="button-container-right">
                <div className="button-container">
                    {rightButtons}
                </div>
            </div>
    
        </div>
    )
}

export default App