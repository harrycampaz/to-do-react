import React, { Component } from 'react';

class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };

        this.handleInput = this.handleInput.bind(this);
    }
    

    handleInput(e){

       const  {value, name}  = e.target;

        this.setState({
            [name]: value
        })

        console.log(this.state);
        
        
    }

    render() {
        return (
           
            <div className="card">
            <form className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"

                  onChange = {this.handleInput}

                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  onChange = {this.handleInput}
                  placeholder="Responsible"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  onChange = {this.handleInput}
                  placeholder="Description"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    onChange = {this.handleInput}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        );
    }
}

export default TodoForm;