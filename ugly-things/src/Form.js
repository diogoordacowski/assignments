import React from "react"
import { ThingsContextConsumer } from "./thingsContext"

function Form(props) {

    return (
        <ThingsContextConsumer>
            {context => (
                <form name="thingsForm" onSubmit={context.submitThing}>
                    <input onChange={context.handleChange} name="title" type="text" placeholder="title" />
                    <input onChange={context.handleChange} name="imgUrl" type="text" placeholder="image url" />
                    <input onChange={context.handleChange} name="description" type="text" placeholder="description" />
                    <button>Add Ugly Thing</button>
                </form>
            )}
        </ThingsContextConsumer>

    )
}


export default Form