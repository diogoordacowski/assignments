import React from "react"
import FunctionalCard from "./FunctionalCard"
import ClassCard from "./ClassCard"

function App() {

    return (

        <div> 
            <h1>Functional Components Using Default Props</h1>
            <FunctionalCard backgroundColor="green" height={100} width={100} />
            <FunctionalCard backgroundColor="blue" height={100} width={100} /> 
            <FunctionalCard /* backgroundColor="red" height={100} width={100} */ /> {/* notice no props are given, yet default props provide a value to render */}
            <div className="line-break"> </div>
            <h1>Class-based Components Using Default Props</h1>
            <ClassCard backgroundColor="yellow" height={100} width={100} />
            <ClassCard backgroundColor="orange" height={100} width={100} />
            <ClassCard /* backgroundColor="red" height={100} width={100} */ /> {/* notice no props are given, yet default props provide a value to render */}

            

        </div>
    )    
}
   

export default App