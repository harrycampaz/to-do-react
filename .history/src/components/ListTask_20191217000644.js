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
   

      <div class="card-body">
    <h5 class="card-title">{todo.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{todo.responsible}</h6>
    <p class="card-text">{todo.description}.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
      </div>
      );
    });

    return (<div>
        {data}
    </div>);
  }
}

export default ListTask;
