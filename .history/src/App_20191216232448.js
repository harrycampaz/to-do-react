import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';

import  {todos-list }  from "../src/dummy-data/todos-list.js";

function App() {
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
