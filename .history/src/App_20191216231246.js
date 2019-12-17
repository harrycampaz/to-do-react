import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';

function App() {
  return (
    <div className="App">

      <Navigation title = "Mi primera"/>
      <div>
        <img src ={logo} className = "App-logo"></img>
      </div>
    </div>
  );
}

export default App;
