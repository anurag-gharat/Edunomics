import React from 'react'
import Heading from '../Components/Heading'
import {FaRegLightbulb,FaHandshake,FaUserTie} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
import {MdSecurity,MdVerifiedUser} from 'react-icons/md'
import { GiBookshelf,GiSupersonicArrow} from 'react-icons/gi'
import ImpactCard from '../Components/ImpactCard'

export default function ImpactSection() {
    return (
        <section className="impactsecion section " id="impact">
        <Heading title="IMPACT OF EDUNOMICS ON ECONOMY" />
        <div className="container center">
        <div className="row ">
            <div className="col s6 l3 ">

            <ImpactCard 
                title="Quality Education" 
                text="Knowledge through the industry experts will be shared to facilitate a hasslefree transition to the professional world."    
                >
                    <GiBookshelf className="light-green-text accent-3 " />
            </ImpactCard>
            
            
            </div>
            <div className="col s6 l3 ">

            <ImpactCard 
                title="Better Talent" 
                text="World-class talent will be produced in various fields that will be competitive enough to play the odds in its favor."    
            >
            <GiSupersonicArrow  className="light-green-text accent-3" />
            </ImpactCard>
            </div>

            <div className="col s6 l3">

            <ImpactCard 
            title="Productivity at jobs" 
            text="Talented workforce enabling innovation and productivity will be successful in driving the desired outputs and take the industry to new heights."    
            >
            <FaUserTie  className="light-green-text accent-3" />
            </ImpactCard>
            </div>

            <div className="col s6 l3">
            <ImpactCard 
            title="Innovation Drive" 
            text="The industry will undergo innovation with more demand which will ultimately, create more space for the talent produced."    
            >
            <FaRegLightbulb className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            </div>
            <div className="row " style={{paddingLeft:"9%",paddingRight:"9%"}}>
            <div className=" col s6 l4">
            <ImpactCard 

            title="More Profits" 
            text="Enhanced productivity and ideas will bring in more revenue and ensure increased profits. "    
            >
            <BsGraphUp className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            <div className="col s6 l4">
            <ImpactCard 
            title="Need Capacity Enhancement" 
            text="A great opportunity for existing and new industries to come up with improved facilities and offerings which will improve the market scenario."    
            >
            <MdVerifiedUser className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            <div className=" col s6 l4">
            <ImpactCard 
            title="More Jobs" 
            text="Increased consumption, productivity, and innovation will lead to an increase in employment and hence create a cycle."    
            >
            <FaHandshake className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            </div>
            
        
        
        
    </div>
        </section>

       
    )
}
