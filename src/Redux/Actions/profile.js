import {GET_PROFILE} from '../Constants'
import axios from 'axios'


export const getProfile=()=>async(dispatch)=>{

    try {
        let token=localStorage.getItem('token')
        const headers={
            Accept:"application/json",
            "Content-Type":"application/json",
            "x-access-token":token
        }
        const res =await axios.get('https://edunomics.herokuapp.com/api/user/getuserdetail')
        console.log(res)
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })

    } catch (error) {
        console.log("errror is ",error)
    }

}