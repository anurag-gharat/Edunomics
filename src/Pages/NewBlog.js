import React, { useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import {getAllCategories, createABlog} from '../API/BlogRequests'
export default function NewBlog() {

    const [values,setValues]=useState({
        title:"",
        subtitle:"",
        content:"",
        slide_url:"",
        categoryId:"",
        videos:[],
        video_url1:"",
        video_url2:"",

    })
    const [categories,setCategories]=useState([])
    const {title,subtitle,content,slide_url,categoryId,videos,video_url1,video_url2} =values
    
    const handleSubmit=e=>{
        e.preventDefault();
        
        setValues({
            ...values,
            videos:[video_url1,video_url2]
        })
        createABlog({title,subtitle,slide_url,categoryId,videos})
        .then(data=>console.log("response",data))

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
        <div className="container p-t-100">
            <form  onSubmit={(e)=>handleSubmit(e)}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="title" type="text" className="validate" onChange={handleChange("title")} value={title}/>
                    <label htmlFor="title">Blog Title</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="subtitle" type="text" className="validate" onChange={handleChange("subtitle")}/>
                    <label htmlFor="subtitle">Blog subtitle</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="content" className="materialize-textarea"  onChange={handleChange("content")}></textarea>
                <label htmlFor="content">Content</label>
            </div>
            </div>
            
            <div className="row">
                <div className="input-field col s12">
                <select 
                 onChange={handleChange("categoryId")}
                 value={categoryId}>
                <option value="" disabled selected>Choose your option</option>
                {categories.map((category)=>{
                    return <option key={category._id} value={category._id
                    }>{category.name}</option>
                   
                })}
            </select>
            <label>Materialize Select</label>
            </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="slide_url" type="text" className="validate" onChange={handleChange("slide_url")}/>
                    <label htmlFor="slide_url">Enter Slide Url</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="video_url1" type="text" className="validate" onChange={handleChange("video_url1")}/>
                    <label htmlFor="video_url1">Enter Url for Video</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="video_url2" type="text" className="validate" onChange={handleChange("video_url2")}/>
                    <label htmlFor="video_url2">Enter Url for Video</label>
                </div>
            </div>
            <div className="row">
                <button className="btn large"  type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
