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
                    <img src={Logo} className="logo" />
                </div>
                <div className="d-flex justify-content-center">
                    <Link >
                    <FaFacebook className="socialicon   hoverable" />
                    </Link>
                    <Link >
                        <AiOutlineInstagram className="socialicon  hoverable"/>
                    </Link>
                    <Link >
                        <AiFillTwitterCircle className="socialicon  hoverable" />
                    </Link>
                    <Link >
                    <AiFillLinkedin className="socialicon  hoverable"/>
                    </Link>
                </div>
                <div className="d-flex justify-content-center reverse">
                    <Link className="border-left"><p>TERMS OF USE</p></Link>
                    <Link  className="border-left"><p>COOKIE POLICY</p></Link>
                    <Link className="border-left"><p>JOIN US</p></Link>
                    <Link className="border-left"><p>TECH</p></Link>
                    <Link className="border-left-0"><p>PRIVACY POLICY</p></Link>

                </div>
                <div className="footer-copyright green darken-4 white-text p-10 m-t-10" >
                    <div className="container">Copyright 2020 &copy; | All rights reserved. </div>
                </div>

            </footer>
        </div>
    )
}
