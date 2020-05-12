import React, { useEffect, useState } from 'react'
import { getAllCategorizedBlogs } from '../API/BlogRequests'
import Heading from '../Components/Heading'
import Blog from '../Components/Blog'

export default function CategorizedBlogs(props) {
    
    const [blogs,setBlogs]=useState([])
    console.log(props)
    const fetchAllBlogs=(id)=>{
        getAllCategorizedBlogs(id)
        .then(result=>{if(result.success){
            setBlogs(result.blogs)
        }
        else{
            console.log(result.mssg)
        }}

        )
    }
    
    useEffect(()=>{

    fetchAllBlogs(props.match.params.categoryId)

    },[])   
    
    
    return (
        <div className="container p-t-100">

<Heading title="All Blogs " />
                <div className="row">
                    <div className="col s12 s12">
                    <div className="row">
                    <div className="col s12">
                    {blogs.map((item)=>{
                    return <Blog blog={item}  />
                    })} 
                        </div>    
                    </div>                   
                    </div> 
                    </div>

        </div>
    )
}
