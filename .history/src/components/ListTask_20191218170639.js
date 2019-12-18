import React, { Component } from "react";
import todos from "../../src/dummy-data/todo-list.json";
import "./ListTask.css";
import TodoForm from "./TodoForm.js";

class ListTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos.todos
    };
    this.handlerAddToto = this.handlerAddToto.bind(this)
  }



  handlerAddToto(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(){

  }

  render() {
    const data = this.state.todos.map((todo, i) => {
      return (
        <div className="col-sm-4 mt-2" key ={i}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <p className="card-text">{todo.description}</p>
              <a href="#" className="btn btn-primary">
                {todo.responsible}
              </a>
              <p className="card-text">
                <small className="text-muted">{todo.priority}</small>
              </p>
              <div className="card-footer">

<button
className ="btn btn-danger"
></button>

              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="row">
      <div className="col-sm-4">
        <TodoForm onAddTodo={this.handlerAddToto} />
      </div>
      {data}</div>;
  }
}

export default ListTask;
