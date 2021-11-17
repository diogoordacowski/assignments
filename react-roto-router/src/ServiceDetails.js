import React from "react"
import {useParams} from "react-router-dom"
import servicesObject from "./servicesObject"

function ServiceDetails() {
    
    const {serviceId} = useParams()
    console.log(serviceId)
    //usually would be an AJAX database request here, but for this example, we'll use the services object instead
    
    const thisService = servicesObject.find(service => service._id === serviceId)

    return(
        <div>
            <h1>{thisService.name} Details</h1>
            <h2>Price ${thisService.price}</h2>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetails