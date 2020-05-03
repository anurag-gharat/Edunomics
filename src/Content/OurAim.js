import React from 'react'
import ImpactCard from '../Components/ImpactCard'
import Heading from '../Components/Heading'
import office from '../images/office.png'
import projects from '../images/projects.png'
import experts from '../images/expert.png'



export default function OurAim() {
    return (
        <section className="section">
            <Heading title="What EDUNOMICS aim's at! "/>
            <div className="container">
                <div className="row">
                    <div className="col l4 m4 s12 hoverable">
                    <ImpactCard
                    text="Job Opportunities at Edunomics or Network Companies"
                    >
                    <img src={office} width="100%" height="200px" />
                    </ImpactCard>
                
                    </div>
                    <div className="col l4 m4 s12 hoverable">
                    <ImpactCard
                    text="Real World Experience By working on live projects"
                    >
                    <img src={projects} width="100%" height="200px"  />
                    </ImpactCard>
                
                    </div>
                    <div className="col l4 m4 s12 hoverable">
                    <ImpactCard
                    text="Interaction with experts to get the basics done clear"
                    >
                    <img src={experts} width="100%" height="200px" />

                    </ImpactCard>
                
                    </div>
                </div>
            </div>
        </section>
    )
}
