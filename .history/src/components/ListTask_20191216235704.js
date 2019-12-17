import React, { Component } from 'react';
import todos from "../../src/dummy-data/todo-list.json";

class ListTask extends Component {
    constructor() {
        super();
        this.state = {
            todos: todos
        }
    }
    render() {
        console.log(this.state.todos);
        const data = this.state.todos.map((todo, i) => {
            
        })

        return (

            <div>

            </div>

          

        );

    }
}


export default ListTask;