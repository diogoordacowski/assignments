import React, {useState} from "react"

function Counter() {

    const [ count, setCount ] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <hr></hr>
            <p>The counter below is using useState to handle the change in number</p>
            <h1>{count}</h1>
            <button onClick = {increment}>Add number!</button>
            <button onClick = {decrement}>Lower number!</button>
        </div>

    )
}

export default Counter