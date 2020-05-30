import React, { useEffect,useState } from 'react'
import Video from '../Components/Video'
export default function Search(props) {
    
//const [blog, setBlog] = useState(props.location.state.data)
    
    return (
        <div className="p-t-100">
                <section className="section p-t-20">
                    <div className="container">
                        <h1>
                            React title
                        </h1>
                        <h4 className="grey-text">
                        React Subtutle some intreaasdastasgnkmf
                        </h4>
                        <p className="grey-text">12 December 2019</p>
                        <div className="row">
                            <img src="" className="responsive-img" src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
                        </div>
                        <div className="row m-t-10">
                            <p className="blog-text">The Fetch API is a simple interface for fetching resources. Fetch allows us to make network request and handle responses easier than our old friend XMLHttpRequest(XHR). One of the main differences is that Fetch API uses Promises, which provides a way to avoid callbacks hell and boilerplate heavy code that XMLHttpRequest(XHR) provides.
                            The fetch function takes one mandatory argument, which is the path to the resource you want to fetch and returns a Promise that resolves to the Response of that request.The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
                            Promises provides us a simpler alternative to executing, composing and managing asynchronous operation compared to the traditional callback-bases approach.
                            When working with Promises, we must be aware of what it’s current state. There are three states, Pending, Fulfilled and Rejected.
                            When a Promise is Pending, it can transitioned to either Fulfilled or Rejected. Once a Promise transitions to either Fulfilled or Rejected, it cannot transition to any other state and it’s value will not change as well.
                            When a Promise is Fulfilled, this means the asynchronous operation has completed and the Promise has a value. When a Promise is Rejected, this means the asynchronous operation has failed, and the Promise will never be fulfilled.</p>
                        </div>
                        <div className="divider"></div>
                        <div className='row m-t-10'>
                            <h4>Take a look at these slides!</h4>
                            <iframe
    src="https://books.google.co.in/books?id=Ci-9BgAAQBAJ&lpg=PA252&ots=7dnwGTHfi-&dq=a%20dummy%20link%20of%20a%20person%20powerpoint%20presentation&pg=PA252&output=embed"
    width="100%"
    height="300px"
    frameBorder="0"
>
</iframe>
                        </div>
                        <div className='row m-t-10'>
                            <h4>Also watch these videos for more understanding!</h4>
                            <div className="col l6 s6 m-t-10"><Video /></div>
                            <div className="col l6 s6 m-t-10"><Video /></div>
                        </div>
                        </div>
                </section>
        </div>
    )
}
