import React from "react"
import Form from "./Form"
import UglyWidget from "./UglyWidget"
import { ThingsContextConsumer } from "./thingsContext"

function App(props) {

    const allUglyThings =
    <ThingsContextConsumer>
        {context => (
            context.uglyThings.map((thing) => <UglyWidget
                id={thing._id}
                description={thing.description}
                title={thing.title}
                imgUrl={thing.imgUrl}
            />)
        ) }
    </ThingsContextConsumer>


    return (
        <div>
            <Form />
            {allUglyThings}
        </div>
    )

}

export default App