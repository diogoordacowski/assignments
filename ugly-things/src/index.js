import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {ThingsContextProvider} from "./thingsContext"

ReactDOM.render(
    <ThingsContextProvider>
        <App />
    </ThingsContextProvider>
    , document.getElementById("root"))


