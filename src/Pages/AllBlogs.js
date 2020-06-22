import React, { useState, useEffect } from 'react'
import { getAllBlogs, getAllCategories } from '../API/BlogRequests'
import Blog from '../Components/Blog'
import { Link } from 'react-router-dom'
import Heading from '../Components/Heading'

export default function AllBlogs() {
    
    const [blogs,setBlogs]=useState([])
    const [categories,setCategories]=useState([])
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
    const fetchCategories=()=>{
        getAllCategories()
        .then(result=>{
            if(result.success){
                setCategories(result.categories)
            }
            else{
                console.log("unable to load categories")
            }
        })
    }

    useEffect(()=>{
       fetchBlogs()
    },[])


    useEffect(()=>{
    fetchCategories()
    },[])


    return (
            <div className="row p-t-100 " >
                <Heading title="All Blogs " />
                <div className="row">
                    <div className="col s12 l9">
                    <div className="row">
                    <div className="col s12">
                    {/* {blogs.map((item)=>{
                    return <Blog blog={item}  />
                    })}  */}
                        </div>    
                    </div>                   
                    </div>   
                    <div className="col s12 l3">
                    <ul className="collection with-header">
                    <li className="collection-item header"><h6>All Available Categories</h6></li>
                    {categories.map((item,index)=>{
                        return<Link to={`/blogs/${item._id}`}><li className="collection-item" key={index}>{item.name}</li></Link>
                    })}
                </ul>
                    </div>




                </div>

            </div>

        )
    }
    

