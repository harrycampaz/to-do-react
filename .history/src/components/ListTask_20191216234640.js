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
        return (
            <div>
                
            </div>
        );
    }
}


export default ListTask;