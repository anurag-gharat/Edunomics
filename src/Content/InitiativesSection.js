import React, { useState, useEffect } from 'react'
import Heading from '../Components/Heading'
import SemiBlock from '../Components/SemiBlock'
import Education from '../images/education.png'
import Wenester from '../images/wenester.png'
import SemiBlockReverse from '../Components/SemiBlockReverse'
import {getVideo} from '../API/BlogRequests'
import Loading from '../Components/Loading'

export default function InitiativesSection() {

    const[video,setVideo]=useState('https://www.youtube.com/embed/MzHCsji0LNc')
    const[loading,setLoading]=useState(false)

    
    // useEffect(()=>{
    //     getVideo()
    //     .then(res=>{
    //         console.log(res)
    //         if(res.success){
    //             setVideo(res.link)
    //         }
    //         else{
    //             setVideo('https://www.youtube.com/embed/MzHCsji0LNc')
    //         }
    //     })
    //     .catch(error=>console.log(error))
    //     .finally(()=>setLoading(false))
    // },[])

    return (
<section className="section" id="initiatives">
    <Heading title="CURRENT INITIATIVES" />
    <SemiBlock
        text="Scouting 50 of the aspiring minds, willing to achieve excellence.An initiative to provide world-class training to 50 talented students with serious aspirations to achieve their goal of success to work in challenging environment and grow fast"
        isbutton1={true}
        isbutton2={true}
        button1text="Know More?"
        button1path="/knowmore"
        button2text="Apply Now"
        button2path="/applynow"
    >
        <img 
        src={Education} 
        className="heroimage" 
        alt="Intiatives"

        />
    </SemiBlock>
    <SemiBlockReverse
    text="Get help on improving your business scenario right from purchase to Marketing."
    isbutton1={true}
    isbutton2={false}
    button1text="Wenestor"
    button1path="https://wenestor.edunomics.in/"
    >
    <img 
        src={Wenester} 
        className="heroimage" 
alt="Build New Skills"
        />

    </SemiBlockReverse>

    <SemiBlock
        title="Lets Aspire You to Create A New World"
        text="With Edunomics connect, you will be going to connected with people who aspire you to be the best of yourself."
 
    >
        <div className="lower" style={{marginTop:60}} >
        {loading ? (
            <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        ) : (
            <div className="video-container ">
        <iframe title="Initiative" width="640" height="360" src={video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        )}
        </div>

    </SemiBlock>

  

</section>
    )
}
