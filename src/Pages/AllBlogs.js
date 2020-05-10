import React, { useState, useEffect } from 'react'
import { getAllBlogs } from '../API/BlogRequests'
import Blog from '../Components/Blog'
export default function AllBlogs() {
    
    const [blogs,setBlogs]=useState([])
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(true)
    

    const fetchBlogs=()=>{
    getAllBlogs()
        .then(data=>{
            if(data.success){
                setBlogs(data.blogs)
                
        }
        else {
            console.log("error")
        }}
        )
        .catch(err=>console.log(err))
        .finally(()=>setLoading(true))
    }

    useEffect(()=>{
       fetchBlogs()
    },[])

    
        return (
            <div className="container p-t-100">
                <h1>All Posts</h1>
                {blogs.map((item)=>{
                    return <h1>{item.title}</h1>
})}
            </div>
        )
    }
    

