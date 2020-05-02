import React from 'react'
import { GiBookshelf } from 'react-icons/gi'



export default function ImpactCard(props) {
    return (
                <div className="center">
                    <div className="card-image center">
                    <h1>{props.children}</h1>
                    </div>
                    <h6 className="card-title">{props.title}</h6>
                    <div className="card-content">
                    <p>
                        {props.text}                                  
                    </p>    
                    </div> 
                            
                </div>
    )
}
