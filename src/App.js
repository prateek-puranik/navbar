import React from "react";


import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import Bloodpressure from './Bloodpressure';
import Allergy from './components/Allergy';
import Personaldetails from './components/Personaldetails';


function App() {
  return (
    <div className="App">
    <Bloodpressure/>
    </div>
  );
}

export default App;