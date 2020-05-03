import React,{useEffect} from 'react';
import $ from "jquery";
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Knowmore from './Pages/Knowmore';
import Error from './Pages/Error';
import Search from './Pages/Search';





function App() {
  
useEffect(()=>{
  AOS.init();
},[])

  return (
    <div>
        <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home}    />
              <Route path="/knowmore" exact component={Knowmore}    />
              <Route path="/applynow" component={Application}    />
              <Route path="/search" component={Search}    />


              <Route component={Error}    />


            
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
