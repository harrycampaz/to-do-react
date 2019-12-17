import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/ui/Navigation';
import ListTask from './components/ListTask';


 
function App() {
  return (
    <div className="App">

      <Navigation/>

      <div>
        <img src ={logo} className = "App-logo"></img>
      </div>

   
   <div className="container">
     <div className = "row"> 
     <ListTask/>
     </div>
   
   </div>
     
    


     
     
    </div>
  );
}

export default App;
