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

      const todo =  this.state.todos.map((todos, i) => {
            return (
                <div>
        <p>{i.title}</p>
                </div>
            );
        })

        return(

            {todo}

        );
       
    }
}


export default ListTask;