import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';
import ListTask from './components/ListTask';
import todos from "../src/dummy-data/todo-list.json";

 
function App() {
  console.log(todos);
  
  return (
    <div className="App">

      <Navigation/>

      <div>
        <img src ={logo} className = "App-logo"></img>
      </div>

   
   <div className="container">
    
     <ListTask/>

  
   </div>
     
    


     
     
    </div>
  );
}

export default App;
