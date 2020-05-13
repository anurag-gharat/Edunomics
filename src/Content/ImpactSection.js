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
        <div className="container">
        <div className="row ">
            <div className="col s6 l3 ">

            <ImpactCard 
                title="Quality Education" 
                text="Skills with optimum experience will be shared to make a great transition to a professional world."    
                >
                    <GiBookshelf className="light-green-text accent-3 " />
            </ImpactCard>
            
            
            </div>
            <div className="col s6 l3 ">

            <ImpactCard 
                title="Better Talent" 
                text="Once the availability of Smart and sincere talent is ample, the increase in competition will be in favour of industry too ."    
            >
            <GiSupersonicArrow  className="light-green-text accent-3" />
            </ImpactCard>
            </div>

            <div className="col s6 l3">

            <ImpactCard 
            title="Productivity at jobs" 
            text="Talented workforce will enable innovation and productivity led mission for quality output."    
            >
            <FaUserTie  className="light-green-text accent-3" />
            </ImpactCard>
            </div>

            <div className="col s6 l3">
            <ImpactCard 
            title="Innovation Drive" 
            text="Further industry will innovate to claim the value available with more demand & hence more talented people."    
            >
            <FaRegLightbulb className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            </div>
            <div className="row ">
            <div className=" col s6 l4 ">
            <ImpactCard 

            title="More Profits" 
            text="When productivity is more and rejections are less,it will lead to more sales and profits."    
            >
            <BsGraphUp className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            <div className="col s6 l4 center">
            <ImpactCard 
            title="Need Capacity Enhancement" 
            text="Invite opportunity for Existing & New industry to come up with new facilities."    
            >
            <MdVerifiedUser className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            <div className=" col s6 l4">
            <ImpactCard 
            title="More Jobs" 
            text="As consumption, industry and innovation peaks will also lead to increasing number of jobs and hence create a circle."    
            >
            <FaHandshake className="light-green-text accent-3"  />
            </ImpactCard>
            </div>
            </div>
            
        
        
        
    </div>
        </section>

       
    )
}
