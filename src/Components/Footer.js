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
                    <FaFacebook className="socialicon white-text black hoverable" />
                    </Link>
                    <Link >
                        <AiOutlineInstagram className="socialicon white-text black hoverable"/>
                    </Link>
                    <Link >
                        <AiFillTwitterCircle className="socialicon white-text black hoverable" />
                    </Link>
                    <Link >
                    <AiFillLinkedin className="socialicon  white-text black hoverable"/>
                    </Link>
                </div>
                <div className="d-flex justify-content-center">
                    <Link className="border-left">TERMS OF USE</Link>
                    <Link  className="border-left">COOKIE POLICY</Link>
                    <Link className="border-left">JOIN US</Link>
                    <Link className="border-left">TECH</Link>
                    <Link className="border-left-0">PRIVACY POLICY</Link>

                </div>
                <div className="footer-copyright green darken-4 white-text p-10 m-t-10" >
                    <div className="container">Copyright 2020 &copy; | All rights reserved. </div>
                </div>

            </footer>
        </div>
    )
}
