import React, { useEffect } from 'react'
import { getAllCategorizedBlogs } from '../API/BlogRequests'

export default function CategorizedBlogs({match}) {
    
    
    
    const fetchAllBlogs=(id)=>{
        getAllCategorizedBlogs(id)
        .then()
    }
    
    useEffect(()=>{

    fetchAllBlogs(match.params.categoryId)

    },[])
    
    
    return (
        <div className="container blogs">
            Here will be blogs according to the categories
        </div>
    )
}
