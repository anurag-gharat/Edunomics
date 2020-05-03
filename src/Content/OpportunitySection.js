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
            text1="Real World Buisness/Technical Learning, as well there is evident gap of qualified good professors also. Get connected with them to get knowledge."
            img2={Dreams}
            title2="Why & What is best for me Next"
            text2="We all do have dreams, and to achieve them we need to be very clear about what need to be done next. And sometime we even need handholding for How?"
            
            
            />
        </section>
    )
}
