import React from 'react'
import Video from '../Components/Video'
export default function Blog(props) {
    
    console.log(props)
    const {title,subtitle,blog_content,slide_url,categoryId,uploadDate,_id,videos}=props.blog
    const d = new Date(uploadDate)
    return (
        <div className="container " >
            <div className="row">
            <blockquote>
            <h3 className="green-text accent-3">{title}</h3>
            </blockquote>
            <p className="grey-text">Posted on {d.toDateString()}</p>
            <div className="container">
                <img src="https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/03/1_orWFEkEBGIK4xFXwF7BCMA.jpeg?w=1600&ssl=1" width="100%" alt="Learn From Blogs"></img>
                {/* <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src={$slide_url}`}
                width="100%"
                height="600px"
                frameBorder="0"
                >
                </iframe> */} 
            </div>
        
           <h6>{subtitle}</h6>
           
            <p className="grey-text">React is great at displaying your data in a hierarchical component view. But how do your components get the data?

            There are many ways to go about it, each with their own pros and cons.

            In this article, I’ll cover all the major ways to do so, as well as their various alternatives, with hands-on examples.

            When you’re done reading, you’ll have a clear understanding of the big picture of data fetching. You’ll be able to decide which approaches are the best fit for your application and have some code samples to build upon. The full source code isData fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side-effects.</p>
            
            </div>
            <div className="row m-b-50 ">
                <h6>Consider going through these videos for better understanding</h6>
            {videos.map((video,index)=>(
                  <div className="col l6 s6 m-t-10"><Video video={video} key={index} /></div>
              ))}  
      
            </div>
            <div className="divider"></div>    
        </div>
    )
}
