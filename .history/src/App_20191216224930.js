import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav>
        Titulo
      </nav>
      <div>
        <img src ={logo} className = "App-logo"></img>
      </div>

      <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
    </div>
  );
}

export default App;
