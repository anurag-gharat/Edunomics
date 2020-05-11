import React, { useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import {signupuser} from '../API/UserRoutes'


export default function Signup() {
    
    const [values,setValues]=useState({
        name:"",
        dob:"",
        contact_no:"",
        email:"",
        password:""
    })
    const {name,email,contact_no,dob,password}=values
    const handleChange=name=>event=>{
        setValues({...values,[name]:event.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setValues({
            ...values
        })
        signupuser({name,dob,contact_no,email,password})
        .then(data=>console.log("response",data))
//more conditions to be applied here 


    }

    useEffect(()=>{
        let date = document.querySelector(".datepicker")
        M.Datepicker.init(date,{
            format:"dd-mm-yyyy"
        });
    },[])

    return (
        <div className="container p-t-100">
                <div className="row ">
                    <div className="col s12 m12 l12">
                        <form onSubmit={(e)=>handleSubmit(e)} className="card p-20">
                        <div className="row center">
                            <h2>Signup</h2>
                            <div className="input-field col s12 l6 offset-l3">
                            
                                <input 
                                id="fullname" 
                                type="text" 
                                className="validate" 
                                onChange={handleChange("name")}
                                value={name}
                                name="name"
                                required
                                />
                                
                                <label htmlFor="fullname">Your Full Name</label>
                            
                            </div>
                        
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12 l6 offset-l3">
                            
                                <input 
                                id="email" 
                                type="email" 
                                className="validate" 
                                onChange={handleChange("email")}
                                value={email}
                                name="email"
                                />
                                
                                <label htmlFor="email">Your Email Address</label>
                            
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12 l6 offset-l3">
                            
                                <input 
                                id="contact_no" 
                                type="tel" 
                                className="validate" 
                                onChange={handleChange("contact_no")}
                                value={contact_no}
                                name="contact_no"
                                />
                                
                                <label htmlFor="contact_no">Your Phone Number</label>
                            
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12 l6 offset-l3">
                            
                                <input 
                                id="password" 
                                type="password" 
                                className="validate" 
                                onChange={handleChange("password")}
                                value={password}
                                name="password"
                                />
                                
                                <label htmlFor="password">Your Password</label>
                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 l6 offset-l3">
                                <input
                                id="dob"
                                type="text"
                                name="dob"
                                onChange={handleChange("dob")}
                                value={dob}
                                ></input>
                                <label htmlFor="dob">Your Date of Birth (in form of 27/07/199)</label>
                            </div>
                        </div>
                        <div className="row center">
                            <button className="button large green accent-4 white-text hoverable" type="submit">Submit</button>
                        </div>
                        
                        
                        </form>
                    </div>
                </div>   
            </div>
    )
}
