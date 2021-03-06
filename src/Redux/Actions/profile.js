import {GET_PROFILE,SET_LOADING,PROFILE_ERROR,USER_RESUME_ERROR,GET_USER_RESUME} from '../Constants'
import axios from 'axios'


export const getProfile=()=>async(dispatch)=>{
    dispatch({
        type:SET_LOADING
    })
    try {
        let token=await localStorage.getItem('token')
        console.log(token)
        const headers=await {
            Accept:"application/json",
            "Content-Type":"application/json",
            "x-access-token":token
        }
        const res =await axios.get('https://edunomics.in/api/core/user/getuserdetail',{headers:headers})
        console.log(headers)
        console.log(res)
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

export const getUserResume=()=>async(dispatch)=>{
    
    dispatch({
        type:SET_LOADING
    })
    try {
        let token=localStorage.getItem('token')
        console.log(token)
        const headers={
            Accept:"application/json",
            "Content-Type":"application/json",
            "x-access-token":token

        }
        const res =await axios.get('https://edunomics.in/api/core/user/getuserdetail',{headers:headers})
        console.log(res)
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

// export const updateResume=(newResume,_id)=async(dispatch)=>{

//     dispatch({
//         type:SET_LOADING
//     })
//     try {
//         let token=localStorage.getItem('token')
//         const headers={
//             Accept:"application/json",
//             "Content-Type":"application/json",
//             "x-access-token":token
//         }
//         const res = await axios.put('https://edunomics.herokuapp.com/api/core/user/getuserdetail',{headers:headers})
//         console.log(res.data)

//         dispatch({
//             type:UPDATE_RESUME_SUCCESS
//         })


//     } catch (error) {
    
//         dispatch({
//             type:UPDATE_RESUME_FAILED
//         })

//     }



// }