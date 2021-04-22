import React from "react"
import Spot from "./Spot"

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

function App() {

    const allVacationSpots = vacationSpots.map(spot => <Spot place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)

    return (
        <div className="container">
            {allVacationSpots}
        </div>
    )
}

export default App