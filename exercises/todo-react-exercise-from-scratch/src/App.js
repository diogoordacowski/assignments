import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedState = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } return todo
            })

            console.log(prevState.todos)
            console.log(updatedState)

            return {
                todos: updatedState
            }
        })

        
    }

    render() {
        const allTodoItems = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>)

        return (
            <div className="todo-app-container">
                 <h1>My Todos</h1>
                 {allTodoItems}
            </div>
          
        )
    }
}


export default App