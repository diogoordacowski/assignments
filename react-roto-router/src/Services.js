import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import ServiceDetails from "./ServiceDetails"
import servicesObject from "./servicesObject"

function Services() {

    const servicesArr = servicesObject.map(service => (
        
        <h3><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        
    ))

    return (
        <div>
            <h1>Services Page Is Loaded</h1>
            
            {servicesArr}

            <Switch>
                <Route path="/services/:serviceId">
                    <ServiceDetails />
                </Route>
            </Switch>

        </div>
    )
}

export default Services