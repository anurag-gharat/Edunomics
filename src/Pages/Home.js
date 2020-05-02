import React from 'react'
import Heroimage from '../images/heroimage.png'

export default function Home() {
    return (



        <div >
            <section className="homecontainer section" id="home"> 
                <div className="row ">
                    <div className="col l6 m12 s12 section landingpagediv">
                        <h1 className="left-align valign-wrapper">WELCOME TO THE WORLD OF EDUNOMICS</h1>
                        <div  className="d-flex">
                        <input type="text" placeholder="Enter your search" className="search"></input>

                        </div>
                        <div className="d-flex">
                            <button className="button pink waves-effect lighten-1 white-text">Learning </button>
                            <button className="button waves-effect white-text light-green accent-4 right">Career </button>
                        </div>
                    </div>
                    <div className=" col l6 m12 s12 ">
                        <img src={Heroimage}  className="img-responsive heroimage"></img>zxc
                    </div>

                </div>
            </section>
        </div>
    )
}
