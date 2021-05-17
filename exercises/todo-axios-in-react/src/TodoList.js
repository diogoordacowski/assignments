import React, {Component} from "react"
import TodoComponent from "./TodoComponent"
import axios from "axios"
let baseUrl = "https://api.vschool.io/diogo/todo"

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            todoListTest: "Is Working",
            listOfTodos: []
        }
    }

    componentDidMount() {
        axios.get(baseUrl)
        .then((response) => {
            this.setState({
                listOfTodos: response.data
            })
        })
        
    }

    render() {
        const todos = this.state.listOfTodos.map(todo => <TodoComponent key={todo._id} todo={todo}/>)

        return (
            <div>
                <h2>TodoList State: {this.state.todoListTest}</h2>
                <p>The point of this exercise is to demonstrate:</p>
                <ol>
                    <li>Use axios to retrieve data from a database</li>
                    <li>Create a class-based component that makes that initial call for data through its componentDidMount lifecycle method </li>
                    <li>set the state with that newly acquired data for usage by other components</li>
                    <li>Render as many child components as needed to meet the entire list of data. This is handled by using the map method over the state property that houses the data. </li>
                    <li>Pass on database acquired data set in the state to child components as props for rendering</li>
                    <li>Child components receive state data as props and is used to display information on the DOM through its component</li>
                </ol>
                {todos}
            </div>
        )
    }
}


export default TodoList