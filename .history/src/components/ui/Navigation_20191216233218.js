import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
        // No hagas esto!
        this.state = { color: props.color };
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