import React from 'react'
import Heading from '../Components/Heading'
import SemiBlock from '../Components/SemiBlock'
import Education from '../images/education.png'

export default function InitiativesSection() {
    return (
<section className="section" id="initiatives">
    <Heading title="CURRENT INITIATIVES" />
    <SemiBlock
        text="Scouting 50 the aspiring minds, willing to achieve excellence.An initiative to provide world-class training to 50 talented students with serious aspirations to achieve their goal of success to work in challenging environment and grow fast"
        isbutton1={true}
        isbutton2={true}
        button1text="Know More?"
        button1path="\knowmore"
        button2text="Apply Now"
        button2path="\applynow"
    >
        <img 
        src={Education} 
        className="heroimage" 

        />
    </SemiBlock>

</section>
    )
}
