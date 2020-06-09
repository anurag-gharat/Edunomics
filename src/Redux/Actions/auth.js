import {LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS, LOGOUT} from '../Constants'
import axios from 'axios'



//user register
export const registerUser=(user)=>async(dispatch)=>{

    const body = JSON.stringify(user)
    const headers ={
        Accept:"application/json",
        "Content-Type":"application/json"
    }
    try {
        const res=await axios.post('https://edunomics.in/api/core/user/signup',body,{headers:headers})
        console.log(res)
        
        // dispatch({
        //     type:REGISTER_SUCCESS,
        //     payload:res
        // })   
    } 
    catch (error) {
        console.log(error)
        // dispatch({
        //     type:REGISTER_FAILURE
        // })
        
    }
}


//user login
export const loginUser=(user)=>async(dispatch)=>{
   
    const body=JSON.stringify(user)
    const headers={
        Accept:"application/json",
        "Content-Type":"application/json"
    }

    try {
        const res=await axios.post('https://edunomics.in/api/core/user/login',body,{headers:headers})
        console.log(res.data)
        localStorage.setItem('token',res.data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
    } 
    catch (error) {
        console.log(error)
        dispatch({
            type:LOGIN_FAILURE
        })    
    }    
}



//to logout the user
export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('token')
    dispatch({
        type:LOGOUT
    })
}
