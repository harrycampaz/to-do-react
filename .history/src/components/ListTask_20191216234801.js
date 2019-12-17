import React, { Component } from 'react';
import   todos   from "../../src/dummy-data/todo-list.json";

class ListTask extends Component {
    constructor(){
        super();
        this.state = {
           todos
        }
    }
    render() {

        this.state.todos.map((todo, i) => {
            return (
                <div>
        <p>{i}</p>
                </div>
            );
        })

       
    }
}


export default ListTask;