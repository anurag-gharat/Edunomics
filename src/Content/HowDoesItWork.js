import React from 'react'
import ImpactCard from '../Components/ImpactCard'
import Heading from '../Components/Heading'
import {FcCalendar,FcCustomerSupport,FcClock} from 'react-icons/fc'

export default function HowDoesItWork() {
    return (
        <section className="section">
                <Heading title="HOW DOES IT WORK?" />
                <div className="container">
                    <div className="row">
                        <div className="col l4 s4 m4 hoverable">
                            <ImpactCard
                            title="6 Weeks Long"
                            text="Set and maintain flexible deadlines.
                            No prior experience required"
                            >
                            <FcCalendar />
                            </ImpactCard>
                        </div>
                        <div className="col l4 s4 m4 hoverable">
                            <ImpactCard
                            title="12 Hours a day"
                            text="3 Hours theory,9 hours practical training."
                            ><FcClock />
                            </ImpactCard>
                        </div>
                        <div className="col l4 s4 m4 hoverable">
                            <ImpactCard
                            title="24/7 Contact"
                            text="Stuck? Connect with us anytime
                            Get guidance from experts on various platforms"
                            ><FcCustomerSupport />
                            </ImpactCard>
                        </div>
                    </div>
                </div>
        </section>
    )
}
