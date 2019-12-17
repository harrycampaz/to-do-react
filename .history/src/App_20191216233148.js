import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';

import   todos   from "../src/dummy-data/todo-list.json";
 console.log(todos);
function App() {
  constructor(props) {
    super(props);
    // No hagas esto!
    this.state = { color: props.color };
   }

  return (
    <div className="App">

      <Navigation title = "Home"/>
      <div>
        <img src ={logo} className = "App-logo"></img>
      </div>
    </div>
  );
}

export default App;
