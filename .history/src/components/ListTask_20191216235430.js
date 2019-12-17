import React, { Component } from 'react';
import todos from "../../src/dummy-data/todo-list.json";

class ListTask extends Component {
    constructor() {
        super();
        this.state = {
            todos:todos
        }
    }
    render() {
        console.log(this.state.todos);
        

        return (

            <div>
  
  data
            </div>

          

        );

    }
}


export default ListTask;