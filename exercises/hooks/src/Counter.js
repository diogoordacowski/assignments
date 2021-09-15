import React, {useEffect, useState} from "react"
import randomColor from "randomcolor"

function Counter() {

    const [ count, setCount ] = useState(0)
    const [ color, setColor ] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomColor())
    }, [count])

    return (
        <div>
            <hr></hr>
            <p>The counter below is using useState to handle the change in number</p>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick = {increment}>Add number!</button>
            <button onClick = {decrement}>Lower number!</button>
        </div>

    )
}

export default Counter