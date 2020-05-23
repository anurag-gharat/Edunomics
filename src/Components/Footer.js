import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram,AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'


export default function Footer() {
    return (
        <div>
            <footer className="d-flex flex-col center grey lighten-3 white-text">
                <div className="container">
                    <img src={Logo} className="logo"  alt="footerlogo"/>
                </div>
                <div className="d-flex justify-content-center">
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/edunomics2020/">
                    <FaFacebook className="socialicon   hoverable" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/edunomics2020/">
                        <AiOutlineInstagram className="socialicon  hoverable"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/Edunomics2">
                        <AiFillTwitterCircle className="socialicon  hoverable" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/company/edunomics/">
                    <AiFillLinkedin className="socialicon  hoverable"/>
                    </a>
                </div>
                <div className="d-flex justify-content-center reverse">
                    <Link className="border-left" to="#">TERMS OF USE</Link>
                    <Link  className="border-left" to="#">COOKIE POLICY</Link>
                    <Link className="border-left" to="http://tech.edunomics.in/" target="_blank">TECH</Link>
                    <Link className="border-left" to="#">PRIVACY POLICY</Link>
                    <Link className="border-left-0" to="#">FAQ's</Link>
                </div>
                <div className="footer-copyright green darken-4 white-text p-10 m-t-10" >
                    <div className="container">Copyright 2020 &copy; | All rights reserved. </div>
                </div>

            </footer>
        </div>
    )
}
