import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js';
import Logo from '../images/logo.png'








export default function Navbar() {

    
    useEffect(()=>{
    let sidenav = document.querySelector('.sidenav');
      M.Sidenav.init(sidenav, {
        isFixed:true  
      });
    },[])

   

    return (
        <div>
            <nav className="nav-extended white">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo"><img src={Logo} className="logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a  className="black-text darken-4" href="">Impact</a></li>
                <li><a  className="black-text darken-4" href="">Initiatives</a></li>
                <li><a  className="light-green accent-4 btn btn-medium waves-effect outline white-text" href=""><i  class="material-icons white-text right">chevron_right</i>Try our Alpha</a></li>
            </ul>
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
        <li><a  className="black-text darken-4" href="">Impact</a></li>
                <li><a  className="black-text darken-4" href="">Initiatives</a></li>
                <li><a  className="light-green accent-4 btn btn-medium waves-effect outline white-text" href=""><i  class="material-icons white-text right">chevron_right</i>Try our Alpha</a></li>
            </ul>
        </div>
    )
}
