import React from 'react'




export default function ImpactCard(props) {
    return (
                <div className="left " data-aos="fade-in">
                    <div className="card-image center">
                    <h1>{props.children}</h1>
                    </div>
                    <h6 className="card-title"><b>{props.title}</b></h6>
                    <div className="card-content">
                    <p className="mygrey-text  ">
                        {props.text}                                  
                    </p>    
                    </div> 
                            
                </div>
    )
}
