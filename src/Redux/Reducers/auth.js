import {LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS, LOGOUT, SET_LOADING} from '../Constants'
 

//isAuthenticated statnds for is registered
//islogged in stands for is already logged in
const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    loading:false,
    user:null,
    isloggedin:false,
    alertMessage:null
}


export default function(state=initialState,action){
    
    const {type,payload}=action

    switch(type){
        case SET_LOADING:
            return{
                ...state,
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                token:payload.token,
                isloggedin:true,
                alertMessage:payload.msg
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isloggedin:false,
                isAuthenticated:false,
                loading:false,
                user:null,
                alertMessage:payload.msg
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                alertMessage:payload.msg
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                loading:false,
                alertMessage:payload.msg
            }
        case LOGOUT:
            return {
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                isloggedin:false,
                alertMessage:null
            }
        default :
        return{
            ...state
        }
        }
        
    


}
