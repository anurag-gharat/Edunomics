import React from 'react'

export default function SemiBlock(props) {
    return (
    <div className="container">
            <div className="row">
                <div className="col s12 l6 m6 "  data-aos="fade-right">
                    {props.children}
                </div>
                <div className="col s12 l6 m6 p-t-20"  data-aos="fade-left">
                    <h3>{props.title}</h3>
                    <p className="">
                        {props.text}
                    </p>
                    <div className="row">
                        <div className="col s6 left">  {props.isbutton1 ? <a href={props.button1path}><button className="button hoverable pink lighten-1 waves-effect white-text m-t-10">{props.button1text}</button></a>:<></>}</div>
                        <div className="col s6 right">  {props.isbutton2 ? <a href={props.button2path}><button className="hoverable button light-green accent-4 waves-effect white-text m-t-10">{props.button2text}</button></a>:<></>}</div>

                    
                    </div>
              
                </div>
            </div>
    </div>
    )
}
