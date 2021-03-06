import React from 'react'
import SemiBlockReverse from '../Components/SemiBlockReverse'
import knowmore from '../images/knowmorehero.png'
import HowDoesItWork from '../Content/HowDoesItWork'
import AvailableTraining from '../Content/AvailableTraining'
import Vision from '../Content/Vision'
import OurAim from '../Content/OurAim'

export default function Knowmore() {
    return (
        <div>
            <section className="section m-t-100">
            <SemiBlockReverse
            title="SCOUTING FOR INDUSTRY EXPOSURE AT EDUNOMICS"
            text="An initiative to provide world-class training to 50 talented students with serious aspirations to achieve their goal of success to work in challenging environment and grow fast"
            isbutton1={true}
            isbutton2={false}
            button1text="Apply now"
            button1path="/applynow"
    >
        <img 
        src={knowmore} 
        className="heroimage" 
        alt="Know more About our initiative"
        />
        </SemiBlockReverse>
            </section>
        <HowDoesItWork />
        <Vision />
        <OurAim />
        <AvailableTraining />
        </div>
    )
}
