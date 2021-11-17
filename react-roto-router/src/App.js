import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Services from "./Services"
import ServiceDetails from "./ServiceDetails"

function App() {

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

            </Switch>
            
        </div>

    )
}

export default App