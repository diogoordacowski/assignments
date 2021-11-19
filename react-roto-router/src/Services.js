import React from "react"
import { Link, useRouteMatch, useLocation } from "react-router-dom"
import servicesObject from "./servicesObject"

function Services() {
    const {url} = useRouteMatch()

    const servicesArr = servicesObject.map(service => (
        
        <h3 key={service._id}><Link to={`${url}/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        
    ))
    
    //------- doesn't do anything visible on app, is only included here for training purposes
    const location = useLocation()
    console.log(location)
    // --------
    return (
        <div>
            <h1>Services Page Is Loaded</h1>
            
            {servicesArr}

            

        </div>
    )
}

export default Services