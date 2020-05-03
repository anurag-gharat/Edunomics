import React,{useEffect} from 'react';
import $ from "jquery";
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Knowmore from './Pages/Knowmore';





function App() {
  
  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home}    />
              <Route path="/knowmore" exact component={Knowmore}    />

              <Route path="/" component={Application}    />

            
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
