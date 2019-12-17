import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';

import   todos   from "../src/dummy-data/todo-list.json";
// console.log(todos);
function App() {

  console.log(todos);
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
