import React, { Component } from "react";
import todos from "../../src/dummy-data/todo-list.json";

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
   
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {todo.responsible}
            </h6>
            <p className="card-text">{todo.description}.</p>
            <a href="#" class="card-link">
              {todo.priority}
            </a>
          </div>
        </div>
        
      );
    });

    return <div className="card-columns">{data}</div>;
  }
}

export default ListTask;
