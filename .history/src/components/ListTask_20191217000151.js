import React, { Component } from "react";
import todos from "../../src/dummy-data/todo-list.json";

class ListTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos.todos
    };
  }

  render() {
    const data = this.state.todos.map((todo, i) => {
      return (
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{todo.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{todo.priority}</h6>
            <p class="card-text">
             {todo.description}
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              {todo.responsible}
            </a>
          </div>
        </div>
      );
    });

    return <div></div>;
  }
}

export default ListTask;
