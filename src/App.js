import React,{useEffect} from 'react';
import $ from "jquery";
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"





function App() {
  
  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home}    />
            
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
