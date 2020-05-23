import React from 'react'
import ImpactCard from './ImpactCard'


export default function HalfBlock(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 l6 m12" >
                    <ImpactCard  title={props.title1} text={props.text1}>
                        <img src={props.img1}  style={{width:"60%",height:"200px"}} alt=" 1"/>
                    </ImpactCard>
                </div>
                <div className="col s12 l6 m12">
                    <ImpactCard  title={props.title2} text={props.text2}>
                        <img src={props.img2}  style={{width:"60%",height:"200px"}} alt=" 2"/>
                    </ImpactCard>
                </div>
            </div>
        </div>
    )
}
