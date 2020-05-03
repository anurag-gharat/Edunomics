import React from 'react'
import Heroimage from '../images/heroimage.png'
import About from '../images/about.png'
import SemiBlock from '../Components/SemiBlock'
import Heading from '../Components/Heading'
import ImpactSection from '../Content/ImpactSection'
import OpportunitySection from '../Content/OpportunitySection'
import InitiativesSection from '../Content/InitiativesSection'


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
                        <div className="d-flex space-between">
                            <button className="button pink waves-effect lighten-1 white-text left m-t-10">Learning </button>
                            <button className="button waves-effect white-text light-green accent-4 right m-t-10">Career </button>
                        </div>
                    </div>
                    <div className=" col l6 m12 s12 ">
                        <img src={Heroimage}  style={{marginTop:"100px"}} className="img-responsive heroimage"></img>
                    </div>
                </div>
            </section>
            <section className="aboutsection">
                <Heading title="ABOUT EDUNOMICS" />
                <SemiBlock 
                
                text="We are a bootstrap startup with a vision to impact education and economics solving a complex problems with simple solutions.
                Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. We are employing top talent to provide a uniquely matching solution for your unique problem." 
                isbutton1={true}
                button1text="Know More?"
                button2path="/knowmore"
                >
                    <img src={About} className="heroimage" />
                </SemiBlock>
                
            </section>
            <ImpactSection />
           
            <OpportunitySection />

            <InitiativesSection />


        </div>
    )
}
