import React, { Component } from "react";
import todos from "../../src/dummy-data/todo-list.json";
import "./ListTask.css";

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
        <div class="col-sm-4 mt-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>
              <a href="#" className="btn btn-primary">
                {todo.responsible}
              </a>
              <p class="card-text">
                <small class="text-muted">{todo.priority}</small>
              </p>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">{data}</div>;
  }
}

export default ListTask;
