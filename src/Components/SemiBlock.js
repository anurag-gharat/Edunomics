import React from 'react'
import { Link } from 'react-router-dom'

export default function SemiBlock(props) {
    return (
    <div className="container">
            <div className="row">
                <div className="col s12 l6 m6 "  data-aos="fade-right">
                    {props.children}
                </div>
                <div className="col s12 l6 m6 p-t-100"  data-aos="fade-left">
                    <h3>{props.title}</h3>
                    <p className="">
                        {props.text}
                    </p>
                    <div className="row">
                        <div className="col s6 left">  {props.isbutton1 ? <Link to={props.button1path}><button className="button hoverable pink lighten-1 waves-effect white-text m-t-10">{props.button1text}</button></Link>:<></>}</div>
                        <div className="col s6 right">  {props.isbutton2 ? <Link to={props.button2path}><button className="hoverable button light-green accent-4 waves-effect white-text m-t-10">{props.button2text}</button></Link>:<></>}</div>

                    
                    </div>
              
                </div>
            </div>
    </div>
    )
}
