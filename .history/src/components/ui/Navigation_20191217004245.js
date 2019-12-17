import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "To-Do List",
            count: this.props.count
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar">
                <a href = "" className="text-dart"> {this.state.title} - <span class="badge badge-light">{this.state.count}</span>  </a>
            </nav>
            </div>
        );
    }
}

export default Navigation;