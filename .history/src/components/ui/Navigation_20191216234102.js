import React, { Component } from 'react';

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            title: "To-Do List",
            count: 10
        }
    }

    render() {
        return (
            <div>
            <nav className="navbar">
                <a href = "" className="text-dart"> {this.props.title} </a>
            </nav>
            </div>
        );
    }
}

export default Navigation;