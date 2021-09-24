import React, { useEffect, useState } from "react"
import randomColor from "randomcolor"
import AutoCounter from "./AutoCounter"

function Counter() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    const [autoCount, setAutoCount] = useState(0)
    const [displayAutoCount, setDisplayAutoCount] = useState(true)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomColor())
    }, [count, autoCount])

    useEffect(() => {

            const intervalId = setInterval(() => {
            console.log("we are counting every second")
            setAutoCount(prevAutoCount => prevAutoCount + 1)
            
        }, 1100)

        return () => {

            console.log("the component unmounted and this interval ended")
            clearInterval(intervalId)
        }

    }, [])

    return (
        <div>
            <hr></hr>
            <p>The counter below is using useState to handle the change in number</p>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Add number</button>
            <button onClick={decrement}>Lower number</button>
            <br />
            <h1>Auto Counter</h1>
            <button onClick={
                () => { setDisplayAutoCount(prevDisplayAutoCount => !prevDisplayAutoCount) }
            }>
                {displayAutoCount ? "Unmount AutoCounter" : "Mount AutoCounter"}
            </button>
            {
                displayAutoCount ? <AutoCounter autoCount={autoCount} color={color} /> : null
            }

        </div>

    )
}

export default Counter