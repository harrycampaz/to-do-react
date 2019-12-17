import React, { Component } from "react";
import todos from "../../src/dummy-data/todo-list.json";
import './ListTask.css';

class ListTask extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos.todos
    };
  }

  render() {
    const data = this.state.todos.map((todo, i) => {
      return (
       
        <div class="col-sm-4 mt-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{todo.title}</h5>
      <p class="card-text">{todo.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
          
      );
    });

    return <div className="row">{data}</div>;
  }
}

export default ListTask;
