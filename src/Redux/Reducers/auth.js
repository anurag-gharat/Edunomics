import {LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS, LOGOUT} from '../Constants'
 

//isAuthenticated statnds for is registered
//islogged in stands for is already logged in
const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    loading:false,
    user:null,
    isloggedin:false,

}


export default function(state=initialState,action){
    
    const {type,payload}=action

    switch(type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                token:payload.token,
                isloggedin:true
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isloggedin:false,
                isAuthenticated:false,
                loading:false,
                user:null,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                loading:false
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                isAuthenticated:false,
                loading:false
            }
        case LOGOUT:
            return {
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                isloggedin:false,
            }
        default :
        return{
            ...state
        }
        }
        
    


}
