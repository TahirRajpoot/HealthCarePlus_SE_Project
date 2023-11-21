import React from "react";
import Home from "./components/Home/Home";
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

const App = () =>{
  return(
    <div>
      <Router>
      <SignUp/>
      </Router>

    </div>
  )
}


export default App;    
