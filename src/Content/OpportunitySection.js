import React from 'react'
import Heading from '../Components/Heading'
import HalfBlock from '../Components/HalfBlock'
import Teacher from '../images/teacher.svg'
import Dreams from '../images/dreams.svg'





export default function OpportunitySection() {
    return (
        <section className="opportunitysection section" id="opportunities">
            <Heading title="INFINITE OPPORTUNITIES" />
            <HalfBlock
            img1={Teacher}
            title1="Industry Expert As Professor"
            text1="Experience Real-world Business/Technical Learning given by renowned industry experts. Get one-on-one mentoring sessions and a chance to work on live projects."
            img2={Dreams}
            title2="Why & What is best for me Next"
            text2="We all do have dreams, and to achieve them we needs to be very clear about what need to be done next. And sometime we even need handholding for How?"
            
            
            />
        </section>
    )
}
