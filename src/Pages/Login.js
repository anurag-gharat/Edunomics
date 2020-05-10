import React from 'react'
import { useState } from 'react'
import {login} from '../API/UserRoutes'

export default function Login() {

    const [values,setValues]=useState({
        email:"test@test.com",
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
        //more conditions to be applied here
    }
    
    
    return (
        <div className="container p-t-100">
            <div className="container">
                
                <div className="row center">
                    <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className="col l6 s12">
                            
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
                                <button className="button" type="submit">Submit</button>
                            </div>
                            </form>
                            </div>
                        
            </div>
        </div>
    )
}
