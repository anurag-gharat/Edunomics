//Component showing video
import React from 'react'

export default function Video({video}) {
    
    return (
        <div className="video-container">
        <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowFullScreen></iframe>
        </div>
    )
}
