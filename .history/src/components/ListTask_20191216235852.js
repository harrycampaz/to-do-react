import React, { Component } from 'react';
import todos from "../../src/dummy-data/todo-list.json";

class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todos.todos
        }
    }
    
    render() {
        console.log(this.state.todos);
       

        return (

            <div>

            </div>

          

        );

    }
}


export default ListTask;