import React from 'react'
import { useState } from 'react'
import {login} from '../API/UserRoutes'
import { Link } from 'react-router-dom'

export default function Login() {

    const [values,setValues]=useState({
        email:"test12@test.com",
        password:"12345"
    })
    const {email,password}= values

    const handleChange=name=>event=>{
        setValues({...values,[name]:event.target.value})
    }
    const handleSubmit=event=>{
        event.preventDefault()
        setValues({...values})
        login({email,password})
        .then(result=>{if(result.success){
            alert(result.msg)
        }
        else{
            alert(result.msg)
        }
        
    })
        
        
    }
    
    
    return (
        <div className="container p-t-100">
            <div className="container">
                
                <div className="row center">
                    <form onSubmit={(event)=>handleSubmit(event)} className="card center-align p-20" >
                        <h2>Login</h2>
                    <div className="row center-align p-t-10" >
                            
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
                                <button className="button green white-text hoverable" type="submit">Submit</button>
                            </div>
                            <div className="row">
                                <Link to="/signup"> Sign up now!</Link>
                            </div>
                            </form>
                            </div>
                        
            </div>
        </div>
    )
}
