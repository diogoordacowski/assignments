import React from "react-dom"

function TodoItem(props) {
    return (
        <div className="todo-item-container">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id) }
            ></input>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem