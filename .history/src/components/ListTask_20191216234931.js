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

      const todos =  this.state.todos.map((todo, i) => {
            return (
                <div>
        <p>{i.title}</p>
                </div>
            );
        })

        return(

            {todos}

        );
       
    }
}


export default ListTask;