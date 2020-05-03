import React, { Component } from 'react'
import error from '../images/404.png'
import { Link } from 'react-router-dom'
export default class Error extends Component {
    render() {
        return (
            <div className="section m-t-100">
                <section className="section center">
                    <div className="container">
                        <img src={error} width="100%" className="img-responsive"></img>
                        <h3>Sorry the requested page does not exist!</h3>
                        <Link to="/"><button className="btn light-green accent-4 pulse">Go back</button></Link>
                    </div>

                </section>
            </div>
        )
    }
}
