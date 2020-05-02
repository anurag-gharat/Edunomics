import React from 'react'
import { Link } from 'react-router-dom'

export default function SemiBlock(props) {
    return (
    <div className="container">
            <div className="row">
                <div className="col s12 l6 m6">
                    <img src={props.img} className="heroimage" />
                </div>
                <div className="col s12 l6 m6 "  style={{marginTop:"50px"}}>
                    <p className="m-10">
                        {props.text}
                    </p>
                {props.isbutton ? <Link to={props.buttonpath}><button className="button pink lighten-1 white-text m-t-10">{props.buttontext}</button></Link>:<></>}
                </div>
            </div>
    </div>
    )
}
