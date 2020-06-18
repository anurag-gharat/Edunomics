import React from 'react'
import Video from '../Components/Video'
import ReactGoogleSlides from "react-google-slides";
import { Link } from 'react-router-dom';
export default function Search(props) {
 
    
const blog = props.location.state.data
    
    const d = new Date(blog.uploadDate)
    return (

        <div className="p-t-100">
                <section className="section p-t-20">
                    
                    <div className="container">
                    <Link to="/">Back</Link>
                        <h1>
                            {blog.title}
                        </h1>
                        <h4 className="grey-text">
                        {blog.subtitle}
                        </h4>
                        <p className="grey-text">Posted on {d.toDateString()}</p>
                        <div className="row">
                            <img  className="responsive-img" src={blog.image_url} alt="Learn from blogs"></img>
                        </div>
                        <div className="row m-t-10">
    <p className="blog-text">{blog.blog_content}</p>
                        </div>
                        <div className="divider"></div>
                        <div className='row m-t-10'>
                            <h4>Take a look at these slides!</h4>
                            <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/1S2L-420Gf13_w4xQ-EBUkC4eL2kAH956YOWSB272Exg/edit#slide=id.p"
      slideDuration={5}
      showControls
      loop
    />
                            
                        </div>
                        <div className='row m-t-10'>
                            <h4>Also watch these videos for more understanding!</h4>
                            {blog.videos.map((item,index)=>(
                                <div  className="col l6 s6 m-t-10" key={index}>
                                <Video
                                key={index}
                                source={item}
                                />
                                </div>
                            ))}
                        </div>
                        </div>
                </section>
        </div>
    )
}
