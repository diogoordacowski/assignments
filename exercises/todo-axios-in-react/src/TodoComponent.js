import React from "react"

function TodoComponent (props) {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.price}</p>
            <p>{props.todo.description}</p>
            <p>{props.todo.imgUrl}</p>
        </div>

        
    )
}

export default TodoComponent
