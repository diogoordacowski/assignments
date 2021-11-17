import React from "react"
import { Link } from "react-router-dom"
import servicesObject from "./servicesObject"

function Services() {

    const servicesArr = servicesObject.map(service => (
        
        <h3 key={service._id}><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        
    ))

    return (
        <div>
            <h1>Services Page Is Loaded</h1>
            
            {servicesArr}

            

        </div>
    )
}

export default Services