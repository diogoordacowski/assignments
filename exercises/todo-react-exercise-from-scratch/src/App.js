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
                    todo.completed = !todo.completed
                } return todo
            })

            return {
                todos: updatedState
            }
        })

        console.log(this.state.todos)
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