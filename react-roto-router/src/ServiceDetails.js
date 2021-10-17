import React from "react"
import {useParams} from "react-router-dom"
import servicesObject from "./servicesObject"

function ServiceDetails() {
    
    const {serviceId} = useParams()

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