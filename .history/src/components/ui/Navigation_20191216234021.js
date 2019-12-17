import React, { Component } from 'react';

class Navigation extends Component {
    constructor(){
        super()
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