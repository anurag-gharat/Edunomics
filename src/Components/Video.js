//Component showing video
import React from 'react'

export default function Video({video}) {
    
    return (
        <div className="video-container">
        <iframe title="Video" width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}
