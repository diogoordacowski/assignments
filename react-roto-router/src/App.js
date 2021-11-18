import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Services from "./Services"
import ServiceDetails from "./ServiceDetails"
import Authenticated from "./Authenticated"

function App() {

    const match = useRouteMatch()
    console.log(match)

    return (
        <div>
            <Header />

            <Switch>
                
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route exact path="/services">
                    <Services />
                </Route>
                
                <Route path="/services/:serviceId">
                    <ServiceDetails />
                </Route>

                <Route exact path="/authenticated">
                    <Authenticated />
                </Route>

            </Switch>
            
        </div>

    )
}

export default App