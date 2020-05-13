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
            <a href="/" className="brand-logo"><img src={Logo} className="logo" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons green-text darken-4">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a  className="black-text darken-4" href="#impact">Impact</a></li>
                <li><a  className="black-text darken-4" href="#opportunities">Opportunites</a></li>
                <li><a  className="black-text darken-4" href="#initiatives">Initiatives</a></li>
                <li><a  className="black-text darken-4" href="#faqs">FAQs</a></li>
                <li><Link to="/allblogs" className="black-text darken-4">Blog</Link></li>
                <li><Link to="/login" className="light-green accent-4 btn btn-medium waves-effect outline white-text"><i  className="material-icons white-text right">chevron_right</i>Try our Alpha</Link></li>
            </ul>
            </div>
            
        </nav>

        <ul className="sidenav" id="mobile-demo">
        <li><a  className="black-text darken-4" href="#impact">Impact</a></li>
                <li><a  className="black-text darken-4" href="#opportunities">Opportunites</a></li>
                <li><a  className="black-text darken-4" href="#initiatives">Initiatives</a></li>
                <li><a  className="black-text darken-4" href="#faqs">FAQs</a></li>
                <li><Link to="/allblogs" className="black-text darken-4">Blog</Link></li>
                <li><Link to="/login" className="light-green accent-4 btn btn-medium waves-effect outline white-text"><i  className="material-icons white-text right">chevron_right</i>Try our Alpha</Link></li>

            </ul>
        </div>
    )
}
