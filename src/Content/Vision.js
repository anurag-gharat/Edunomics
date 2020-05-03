import React from 'react'
import vision from '../images/gap.png'
import Heading from '../Components/Heading'

export default function Vision() {
    return (
        <section className="section">
            <div className="container center">
                <Heading title='OUR VISION' />
                <img src={vision} width="100%" />
                <h4>EDUNOMICS will bridge the gap
Between</h4>
            </div>
        </section>
    )
}
