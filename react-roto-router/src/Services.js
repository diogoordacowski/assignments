import React from "react"
import { Link, Switch, Route } from "react-router-dom"
import servicesObject from "./servicesObject"

function Services() {

    const servicesArr = servicesObject.map(service => (<h3>{service.name} - ${service.price}</h3>))

    return (
        <div>
            <h1>Services Page Is Loaded</h1>
            {servicesArr}
        </div>
    )
}

export default Services