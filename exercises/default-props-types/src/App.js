import React from "react"
import FunctionalCard from "./FunctionalCard"
import ClassCard from "./ClassCard"

function App() {

    return (

        /* To invoke errors in the browser console, you will need to force incorrect datatypes, values, or maybe even remove props in the component declarations below. Make sure to remove default props from the components to observe any isRequired propType errors */

        <div> 
            <h1>Functional Components Using Default Props</h1>
            <FunctionalCard backgroundColor="blue" height={100} width={100} />
            <FunctionalCard backgroundColor="red" height={100} width={100} />
            <FunctionalCard backgroundColor="blue" height={100} width={100} /> 

            <div className="line-break"> </div>

            <h1>Class-based Components Using Default Props</h1>
            <ClassCard backgroundColor="yellow" height={100} width={100} />
            <ClassCard backgroundColor="orange" height={100} width={100} />
            <ClassCard backgroundColor="pink" height={100} width={100} /> 

        </div>
    )    
}
   

export default App