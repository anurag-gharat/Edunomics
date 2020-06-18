import React from 'react'
import Heroimage from '../images/heroimage.png'
import About from '../images/about.png'
import SemiBlock from '../Components/SemiBlock'
import Heading from '../Components/Heading'
import ImpactSection from '../Content/ImpactSection'
import OpportunitySection from '../Content/OpportunitySection'
import InitiativesSection from '../Content/InitiativesSection'
import TechEdunomicsSection from '../Content/TechEdunomicsSection'
// import FaqsSection from '../Content/FaqsSection'
import SearchForm from '../Components/SearchForm'







export default function Home() {
    return (
        <div className="" >
            <section className="homecontainer section" id="home"> 
                <div className="row ">
                    <div className="col l6 m12 s12 section landingpagediv">
                        <h1 className="left-align valign-wrapper"><b>WELCOME TO THE WORLD OF EDUNOMICS</b></h1>
                        <SearchForm
                        />

                    </div>
                    <div className=" col l6 m12 s12 ">
                        <img src={Heroimage} alt="Edunomics" style={{marginTop:"100px"}} className="img-responsive heroimage"></img>
                    </div>
                </div>
            </section>
            <section className="aboutsection section">
                <Heading title="ABOUT EDUNOMICS" />
                <SemiBlock    
                text="We are an ed-tech platform with a vision to impact education and economy by offering training through industry experts. We are out on our way to catalyze change and bridge the gap between educational and industrial worlds. We firmly believe in quality education which is why we bring the talent of the industry to give you insights into what’s happening in the outside world. Here, we provide you with an opportunity to learn online from industry experts on a great number of topics and technologies." 
                isbutton1={true}
                button1text="Know More?"
                button1path="/knowmore"
                >
                    <img src={About} className="heroimage"  alt="About Edunomics"/>
                </SemiBlock>
                
            </section>
            <ImpactSection />
           
            <OpportunitySection />

            <InitiativesSection />

            <TechEdunomicsSection />

            {/* <FaqsSection /> */}
        </div>
    )
}
