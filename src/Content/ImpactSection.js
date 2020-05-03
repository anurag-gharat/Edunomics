import React from 'react'
import Heading from '../Components/Heading'
import {GrWorkshop} from 'react-icons/gr'
import {FaRegLightbulb,FaHandshake} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
import {MdSecurity} from 'react-icons/md'
import { GiBookshelf,GiSupersonicArrow} from 'react-icons/gi'
import ImpactCard from '../Components/ImpactCard'

export default function ImpactSection() {
    return (
        <section className="impactsecion">
        <Heading title="IMPACT OF EDUNOMICS ON ECONOMY" />
        <div className="container">
        <div className="row ">
            <div className="col s6 l3">

            <ImpactCard 
                title="Quality Education" 
                text="Skills with optimum experience will be shared to make a great transition to a professional world."    
                >
                    <GiBookshelf className="light-green-text accent-4" />
            </ImpactCard>
            
            
            </div>
            <div className="col s6 l3">

            <ImpactCard 
                title="Better Talent" 
                text="Once the availability of Smart and sincere talent is ample, increase competitiveness in favour of industry too."    
            >
            <GiSupersonicArrow />
            </ImpactCard>
            </div>

            <div className="col s6 l3">

            <ImpactCard 
            title="Productivity at jobs" 
            text="Talented workforce will enable innovation and productivity led mission for quality output."    
            >
            <GrWorkshop />
            </ImpactCard>
            </div>

            <div className="col s6 l3">
            <ImpactCard 
            title="Innovation Drive" 
            text="Further industry will innovate to claim the value available with more demand & hence more talented people."    
            >
            <FaRegLightbulb />
            </ImpactCard>
            </div>
            </div>
            <div className="row ">
            <div className=" col s6 l4 ">
            <ImpactCard 

            title="More Profits" 
            text="When productivity is more and rejections are less, lead to more sales and profits."    
            >
            <BsGraphUp />
            </ImpactCard>
            </div>
            <div className="col s6 l4 center">
            <ImpactCard 
            title="Need Capacity Enhancement" 
            text="Invite opportunity for Existing & New industry to come up with new facilities."    
            >
            <MdSecurity />
            </ImpactCard>
            </div>
            <div className="white col s6 l4">
            <ImpactCard 
            title="More Jobs" 
            text="As consumption, industry and innovation peaks will also lead to increasing number of jobs and hence create a circle."    
            >
            <FaHandshake />
            </ImpactCard>
            </div>
            </div>
            
        
        
        
    </div>
        </section>

       
    )
}
