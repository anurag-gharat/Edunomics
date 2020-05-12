import React, { useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import {getAllCategories, createABlog} from '../API/BlogRequests'
import Heading from '../Components/Heading'


export default function NewBlog() {

    const [values,setValues]=useState({
        title:"",
        subtitle:"",
        blog_content:"",
        slide_url:"",
        categoryId:"",
        videos:[],
        video_url1:"",
        video_url2:"",

    })
    const [categories,setCategories]=useState([])
    const {title,subtitle,blog_content,slide_url,categoryId,videos,video_url1,video_url2} =values
    
    const handleSubmit=e=>{
        e.preventDefault();
        
        setValues({
            ...values,
            videos:[video_url1,video_url2]
        })
        createABlog({title,subtitle,blog_content,slide_url,categoryId,videos})
        .then(data=>{
            if(data.success){
                alert(data.msg)
            }
            else{
                alert(data.msg)
            }
        })

    }
    
    const handleChange=name=>(event)=>{
        
        setValues({...values,[name]:event.target.value})

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
 
    const startMaterialize=()=>{
        let select=document.querySelector('select')
        M.FormSelect.init(select)
    }

    useEffect(()=>{

        fetchCategories()    
        },[])
    useEffect(()=>{
        startMaterialize()
    },[fetchCategories])

    return (
        <div className="container p-t-100 ">
            <Heading title="New Blog" />
            <form  onSubmit={(e)=>handleSubmit(e)}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" className="validate" onChange={handleChange("title")} value={title} required/>
                    <label htmlFor="title">Blog Title</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="subtitle" type="text" className="validate" onChange={handleChange("subtitle")} required/>
                    <label htmlFor="subtitle">Blog subtitle</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="blog_content" className="materialize-textarea"  onChange={handleChange("blog_content")} required></textarea>
                <label htmlFor="blog_content">Blog Content</label>
            </div>
            </div>
            
            <div className="row">
                <div className="input-field col s12">
                <select 
                 onChange={handleChange("categoryId")}
                 value={categoryId}>
                <option value="" disabled selected>Choose your Category</option>
                {categories.map((category)=>{
                    return <option key={category._id} value={category._id
                    }>{category.name}</option>
                   
                })}
            </select>
            <label>Select The Blog Category</label>
            </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="slide_url" type="text" className="validate" onChange={handleChange("slide_url")} required/>
                    <label htmlFor="slide_url">Enter Slide Url</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="video_url1" type="text" className="validate" onChange={handleChange("video_url1")} required/>
                    <label htmlFor="video_url1">Enter Url for Video</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="video_url2" type="text" className="validate" onChange={handleChange("video_url2")} required/>
                    <label htmlFor="video_url2">Enter Url for Video</label>
                </div>
            </div>
            <div className="row center">
                <button className="button large green  white-text"  type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
