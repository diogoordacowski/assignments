import React from "react"

function TodoItem(props) {
    const completedStyle =  {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item-container">
            <input 
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => props.handleChange(props.todo.id)}
                ></input>
            <p style={props.todo.completed ? completedStyle : null}>{props.todo.text}</p>
        </div>
    )
}


export default TodoItem