import React, { useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import {signupuser} from '../Authentication/UserRoutes'


export default function Signup() {
    
    const [values,setValues]=useState({
        name:"Tester",
        dob:"26/03/1997",
        contact_no:"+919876543211",
        email:"test1@test.com",
        password:"12345"
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
                        <form onSubmit={(e)=>handleSubmit(e)}>
                        <div className="row">
                            
                            <div className="input-field col s12">
                            
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
                            <div className="input-field col s12">
                            
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
                            <div className="input-field col s12">
                            
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
                            <div className="input-field col s12">
                            
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
                            <div className="input-field col s12">
                                <input
                                id="dob"
                                type="text"
                                name="dob"
                                onChange={handleChange("dob")}
                                value={dob}
                                ></input>
                            </div>
                        </div>
                        <div className="row center">
                            <button className="button large" type="submit">Submit</button>
                        </div>
                        
                        
                        </form>
                    </div>
                </div>   
            </div>
    )
}
