import React, { useState, useEffect } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import {signupuser} from '../API/UserRoutes'
//todo is to redirect the user to some page

export default function Signup() {
    
    const dobref = React.useRef()
    
    const [values,setValues]=useState({
        name:"",
        dob:"",
        contact_no:"",
        email:"",
        password:""
    })

    const handleDate = () => {
        setValues({
            ...values,
            dob: dobref.current.value,
        })

    }
    const {name,email,dob,contact_no,password}=values

    const handleChange=name=>event=>{
        setValues({...values,[name]:event.target.value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setValues({
            ...values
        })
        console.log(values)
        signupuser({name,dob,contact_no,email,password})
        .then(result=>{if(result.success){
            alert(result.msg)
        }
        else{
            alert(result.msg)
        }  
    })
    }

    
    useEffect(()=>{
        var start = document.querySelectorAll('.datepicker');
            M.Datepicker.init(start, {
                format: "mm/dd/yyyy",
                autoClose: true,
                onClose: handleDate
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
                                required
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
                                required
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
                                required
                                />
                                
                                <label htmlFor="password">Your Password</label>
                            
                            </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12 offset-l3 l6">
                        <label htmlFor="date">Date of Birth</label>
                        <input
                            type="text"
                            className="datepicker"
                            id="dob"
                            onChange={handleChange}
                            value={dob}
                            ref={dobref} />
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
