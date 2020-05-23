import React from 'react'
import Heading from '../Components/Heading'
import SemiBlock from '../Components/SemiBlock'
import Education from '../images/education.png'
import Wenester from '../images/wenester.png'
import SemiBlockReverse from '../Components/SemiBlockReverse'

export default function InitiativesSection() {
    return (
<section className="section" id="initiatives">
    <Heading title="CURRENT INITIATIVES" />
    <SemiBlock
        text="Scouting 50 of the aspiring minds, willing to achieve excellence.An initiative to provide world-class training to 50 talented students with serious aspirations to achieve their goal of success to work in challenging environment and grow fast"
        isbutton1={true}
        isbutton2={true}
        button1text="Know More?"
        button1path="/knowmore"
        button2text="Apply Now"
        button2path="/applynow"
    >
        <img 
        src={Education} 
        className="heroimage" 
        alt="Intiatives"

        />
    </SemiBlock>
    <SemiBlockReverse
    text="Get help on improving your business scenario right from purchase to Marketing."
    isbutton1={true}
    isbutton2={false}
    button1text="Wenestor"
    button1path="https://wenestor.edunomics.in/"
    >
    <img 
        src={Wenester} 
        className="heroimage" 
alt="Initiatives 2"
        />

    </SemiBlockReverse>

    <SemiBlock
        title="Lets Aspire You to Create A New World"
        text="With Edunomics connect, you will be going to connected with people who aspire you to be the best of yourself."
 
    >
        <div className="lower" style={{marginTop:120}} >
        <div className="video-container ">
        <iframe width="640" height="360" src="https://www.youtube.com/embed/MzHCsji0LNc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        </div>

    </SemiBlock>

  

</section>
    )
}
