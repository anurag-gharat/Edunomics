import React from 'react'
import Tech from '../images/tech.png'
import Heading from '../Components/Heading'


export default function TechEdunomicsSection() {
    return (
    <section className="section">
        <div className="container">
            <Heading title="More from Edunomics!" />
            <a target="_blank" rel="noopener noreferrer" href="http://tech.edunomics.in/"><img src={Tech} className="img-responsive" width="100%"  data-aos="fade-in" alt="Tech.edunomics" /></a>
          
            <div className="container center">
                <h4>Edunomics Tech Solutions.</h4>
                <p>Bootstrapping to achieve vision and doing Digital Business.</p>
                

            </div>
        </div>
        
    </section>
    )
}
