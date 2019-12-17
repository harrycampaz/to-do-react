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
        <div class="card">
      <div>{todo.title}</div>
      </div>
      );
    });

    return (<div>
        {data}
    </div>);
  }
}

export default ListTask;
