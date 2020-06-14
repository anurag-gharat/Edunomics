import {GET_PROFILE,SET_LOADING,PROFILE_ERROR,USER_RESUME_ERROR,GET_USER_RESUME} from '../Constants'
import axios from 'axios'


export const getProfile=()=>async(dispatch)=>{
    dispatch({
        type:SET_LOADING
    })
    try {
        let token=localStorage.getItem('token')
 
        const headers={
            Accept:"application/json",
            "Content-Type":"application/json",
            "x-access-token":token
        }
        const res =await axios.get('https://edunomics.herokuapp.com/api/core/user/getuserdetail',{headers:headers})
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })

    } catch (error) {
        console.log("errror is ",error)
        dispatch({
            type:PROFILE_ERROR,
            payload:error
        })
    }

}

export const getUserResume=(id)=>async(dispatch)=>{
    
    dispatch({
        type:SET_LOADING
    })
    try {
        let token=localStorage.getItem('token')
        const headers={
            Accept:"application/json",
            "Content-Type":"application/json",
            "x-access-token":token
        }
        const res =await axios.get('https://edunomics.herokuapp.com/api/core/user/getuserdetail',{headers:headers})
        console.log(res.data)
        dispatch({
            type:GET_USER_RESUME,
            payload:res.data
        })

    } catch (error) {
        console.log("errror is ",error)
        dispatch({
            type:USER_RESUME_ERROR,
            payload:error
        })
    }

}