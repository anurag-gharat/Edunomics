import React from 'react'
import { Link } from 'react-router-dom'

export default function AvailableTraining() {
    return (
        <section className="section">
            <div className="container rounded white-text">
            <div className="row">
            <div className="col s9">
                <h6>Trainings available in Web & Mobile Applications</h6>
                <p>Enlist yourself in courses like ReactJs,React-Native,NodeJs,MySQL,CSS,HTML,Flutter and Bootstrap.</p>
            </div>
            <div className="col s3 center vcenter" >
                <Link to="/applynow"><button className="button white green-text hoverable">Apply Now</button></Link>
            </div>
            </div>
        </div>
        </section>
    )
}
