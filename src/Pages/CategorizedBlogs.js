import React, { useEffect } from 'react'
import { getAllCategorizedBlogs } from '../API/BlogRequests'

export default function CategorizedBlogs(props) {
    
    const category={
        name:"",
        _id:"5eb7570d2f9977c9382a4b9c"
    }
    
    const fetchAllBlogs=()=>{
        getAllCategorizedBlogs(category._id)
        .then()
    }
    
    
    useEffect(()=>{

    fetchAllBlogs()

    },[])
    
    
    return (
        <div className="container blogs">
            
        </div>
    )
}
